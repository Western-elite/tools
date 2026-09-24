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

-- ---------------------------------------------------------------------
-- 6. Row Level Security
-- ---------------------------------------------------------------------
alter table public.sh_agents       enable row level security;
alter table public.sh_passports    enable row level security;
alter table public.sh_coaching_log enable row level security;

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
