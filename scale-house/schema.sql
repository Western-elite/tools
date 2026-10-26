-- =====================================================================
-- Western Elite — Scale House Agent Passport
-- Supabase schema
-- ---------------------------------------------------------------------
-- Paste the whole file into the Supabase SQL Editor and run it once.
-- Safe to re-run: everything is IF NOT EXISTS / CREATE OR REPLACE.
-- =====================================================================

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------
-- 1. Roster
-- ---------------------------------------------------------------------
create table if not exists public.sh_agents (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  hire_date     date,
  yard          text,
  supervisor    text,
  current_level text not null default 'nat',   -- nat | l1 | l2 | l3
  archived      boolean not null default false,
  created_at    timestamptz not null default now()
);

create index if not exists sh_agents_active_idx
  on public.sh_agents (archived, name);

-- ---------------------------------------------------------------------
-- 2. Passports  (one row per agent, the whole checklist state as JSON)
-- ---------------------------------------------------------------------
create table if not exists public.sh_passports (
  agent_id   uuid primary key
               references public.sh_agents(id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by text
);

-- ---------------------------------------------------------------------
-- 3. Coaching log
-- ---------------------------------------------------------------------
create table if not exists public.sh_coaching_log (
  id         uuid primary key default gen_random_uuid(),
  agent_id   uuid not null
               references public.sh_agents(id) on delete cascade,
  entry_date date not null default current_date,
  source     text,
  title      text,
  detail     text,
  author     text,
  created_at timestamptz not null default now()
);

create index if not exists sh_coaching_log_agent_idx
  on public.sh_coaching_log (agent_id, entry_date desc);

-- ---------------------------------------------------------------------
-- 3b. Data tab — scorecard entries (one row per entry, tied to an agent)
-- ---------------------------------------------------------------------
-- kind:  'daily'      ticket counts, COD, past-due, errors   (leader)
--        'cs'         customer service checklist             (leader)
--        'attendance' attendance incident                    (leader)
--        'cash'       lunch / end-of-day drawer count        (agent)
-- data holds the fields for that kind; the app defines them in program.js.
-- Every row carries agent_id so a later signed-in mode can limit each
-- agent to their own rows with RLS.
create table if not exists public.sh_data_entries (
  id         uuid primary key default gen_random_uuid(),
  agent_id   uuid not null
               references public.sh_agents(id) on delete cascade,
  kind       text not null check (kind in ('daily','cs','attendance','cash')),
  entry_date date not null default current_date,
  data       jsonb not null default '{}'::jsonb,
  entered_by text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists sh_data_entries_agent_idx
  on public.sh_data_entries (agent_id, kind, entry_date desc);
create index if not exists sh_data_entries_date_idx
  on public.sh_data_entries (entry_date desc, kind);

-- ---------------------------------------------------------------------
-- 4. Keep updated_at honest
-- ---------------------------------------------------------------------
create or replace function public.sh_touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists sh_passports_touch on public.sh_passports;
create trigger sh_passports_touch
  before update on public.sh_passports
  for each row execute function public.sh_touch_updated_at();

drop trigger if exists sh_data_entries_touch on public.sh_data_entries;
create trigger sh_data_entries_touch
  before update on public.sh_data_entries
  for each row execute function public.sh_touch_updated_at();

-- ---------------------------------------------------------------------
-- 5. Data API grants
-- ---------------------------------------------------------------------
-- These make the tables reachable through the REST API that supabase-js
-- uses. If you left "Automatically expose new tables" ON when creating
-- the project, Supabase already did this — running it again is harmless.
-- If you turned it OFF, these grants are what make the app work.
--
-- Note what is NOT granted: nobody can delete an agent or a passport
-- through the API. Agents are archived, not deleted.

grant usage on schema public to anon, authenticated;

grant select, insert, update         on public.sh_agents       to anon, authenticated;
grant select, insert, update         on public.sh_passports    to anon, authenticated;
grant select, insert, update, delete on public.sh_coaching_log to anon, authenticated;
grant select, insert, update, delete on public.sh_data_entries to anon, authenticated;

-- ---------------------------------------------------------------------
-- 6. Row Level Security
-- ---------------------------------------------------------------------
alter table public.sh_agents       enable row level security;
alter table public.sh_passports    enable row level security;
alter table public.sh_coaching_log enable row level security;
alter table public.sh_data_entries enable row level security;

-- ==== OPTION A — SHARED-LINK MODE (what the app ships with) ==========
-- Anyone holding the anon key (i.e. anyone who can open the page) can
-- read and write. Combine with a private repo / unlisted URL and the
-- ACCESS_CODE in config.js. Simple, and fine for an internal tool —
-- but it is NOT real access control. Delete is deliberately withheld
-- for agents and passports so nothing can be wiped from the browser.

drop policy if exists sh_agents_anon      on public.sh_agents;
drop policy if exists sh_passports_anon   on public.sh_passports;
drop policy if exists sh_log_anon         on public.sh_coaching_log;

create policy sh_agents_anon on public.sh_agents
  for all to anon using (true) with check (true);

create policy sh_passports_anon on public.sh_passports
  for all to anon using (true) with check (true);

create policy sh_log_anon on public.sh_coaching_log
  for all to anon using (true) with check (true);

-- ==== LEADER LOGINS (manager / team lead) ============================
-- Leaders sign in with a Supabase Auth account (email + password). The
-- password lives only in Supabase — never put it in this repo.
-- A signed-in account counts as a leader only if its email is listed in
-- sh_leaders, so a stray sign-up can't get leader rights.
--
-- To add a leader:
--   1. Supabase > Authentication > Users > Add user (email + password,
--      tick "Auto Confirm User").
--   2. insert into public.sh_leaders (email, name, role)
--        values ('name@westernelite.com', 'Name', 'manager');  -- or 'team_lead'
create table if not exists public.sh_leaders (
  email      text primary key,          -- store lowercase
  name       text,
  role       text not null default 'team_lead'
               check (role in ('manager','team_lead')),
  created_at timestamptz not null default now()
);
alter table public.sh_leaders enable row level security;
revoke all on public.sh_leaders from anon;
grant select on public.sh_leaders to authenticated;
drop policy if exists sh_leaders_self on public.sh_leaders;
create policy sh_leaders_self on public.sh_leaders
  for select to authenticated
  using (lower(email) = lower(coalesce(auth.jwt() ->> 'email', '')));

create or replace function public.sh_is_leader()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.sh_leaders
    where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;
grant execute on function public.sh_is_leader() to anon, authenticated;

-- Signed-in leaders use the 'authenticated' role, so they need the same
-- access to the passport tables that the shared link has.
drop policy if exists sh_agents_auth    on public.sh_agents;
drop policy if exists sh_passports_auth on public.sh_passports;
drop policy if exists sh_log_auth       on public.sh_coaching_log;
create policy sh_agents_auth on public.sh_agents
  for all to authenticated using (true) with check (true);
create policy sh_passports_auth on public.sh_passports
  for all to authenticated using (true) with check (true);
create policy sh_log_auth on public.sh_coaching_log
  for all to authenticated using (true) with check (true);

-- Data tab entries:
--   everyone with the page can READ (agent-only reading comes with agent logins)
--   anyone can add / update a CASH COUNT (agents do this at the kiosk)
--   only leaders can add / change daily numbers, CS scores and attendance
--   only leaders can delete anything
drop policy if exists sh_data_anon      on public.sh_data_entries;
drop policy if exists sh_data_read      on public.sh_data_entries;
drop policy if exists sh_data_insert    on public.sh_data_entries;
drop policy if exists sh_data_update    on public.sh_data_entries;
drop policy if exists sh_data_delete    on public.sh_data_entries;
create policy sh_data_read on public.sh_data_entries
  for select to anon, authenticated using (true);
create policy sh_data_insert on public.sh_data_entries
  for insert to anon, authenticated
  with check (kind = 'cash' or public.sh_is_leader());
create policy sh_data_update on public.sh_data_entries
  for update to anon, authenticated
  using (kind = 'cash' or public.sh_is_leader())
  with check (kind = 'cash' or public.sh_is_leader());
create policy sh_data_delete on public.sh_data_entries
  for delete to authenticated using (public.sh_is_leader());

-- ==== OPTION B — SIGNED-IN MODE (recommended once it's in real use) ==
-- Turn on Supabase Auth (email magic link), invite only your
-- supervisors, then run the block below INSTEAD of Option A.
-- You must also add a sign-in step to the app before switching.
--
-- drop policy if exists sh_agents_anon    on public.sh_agents;
-- drop policy if exists sh_passports_anon on public.sh_passports;
-- drop policy if exists sh_log_anon       on public.sh_coaching_log;
--
-- create policy sh_agents_auth on public.sh_agents
--   for all to authenticated using (true) with check (true);
-- create policy sh_passports_auth on public.sh_passports
--   for all to authenticated using (true) with check (true);
-- create policy sh_log_auth on public.sh_coaching_log
--   for all to authenticated using (true) with check (true);

-- ---------------------------------------------------------------------
-- 7. Optional: seed the roster
-- ---------------------------------------------------------------------
-- insert into public.sh_agents (name, current_level) values
--   ('Agent One',   'nat'),
--   ('Agent Two',   'l1'),
--   ('Agent Three', 'l2')
-- on conflict do nothing;

-- ---------------------------------------------------------------------
-- 8. Handy reporting view — one row per agent, latest state
-- ---------------------------------------------------------------------
-- security_invoker makes the view run with the PERMISSIONS OF WHOEVER
-- QUERIES IT, so it obeys the RLS policies on the tables underneath.
-- Without it a view runs as its owner and quietly bypasses RLS — which
-- is what Supabase flags as "Unrestricted" in the Table Editor.
create or replace view public.sh_passport_overview
  with (security_invoker = on)
as
select
  a.id,
  a.name,
  a.current_level,
  a.yard,
  a.supervisor,
  a.hire_date,
  p.updated_at            as passport_updated_at,
  p.updated_by            as passport_updated_by,
  (select count(*) from public.sh_coaching_log l where l.agent_id = a.id)
                          as coaching_entries
from public.sh_agents a
left join public.sh_passports p on p.agent_id = a.id
where a.archived = false;

grant select on public.sh_passport_overview to anon, authenticated;
