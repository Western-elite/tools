-- Interview Scorecard — Supabase schema
-- Run once in Supabase: SQL Editor → New query → paste → Run.

create extension if not exists pgcrypto;

create table if not exists candidates (
  id              uuid primary key default gen_random_uuid(),
  department      text not null default 'MRF',
  name            text not null,
  position        text not null,
  interview_date  date not null,
  final_decision  text check (final_decision in ('hire', 'hold', 'no_hire')),
  final_notes     text,
  decided_at      timestamptz,
  created_at      timestamptz not null default now()
);

create table if not exists scores (
  id              uuid primary key default gen_random_uuid(),
  candidate_id    uuid not null references candidates(id) on delete cascade,
  interviewer     text not null,
  ratings         jsonb not null default '{}'::jsonb,   -- { "safety": 4, "reliability": 5, ... }
  recommendation  text check (recommendation in ('hire', 'maybe', 'no_hire')),
  comments        text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  unique (candidate_id, interviewer)                    -- one scorecard per interviewer per candidate
);

create index if not exists candidates_department_idx on candidates (department, interview_date desc);
create index if not exists scores_candidate_idx on scores (candidate_id);

-- Row Level Security: the app uses a shared link (no logins), so the public key
-- can read, add, and update — but NOT delete. Deletes happen in the Supabase dashboard.
alter table candidates enable row level security;
alter table scores     enable row level security;

create policy "candidates_read"   on candidates for select to anon using (true);
create policy "candidates_insert" on candidates for insert to anon with check (true);
create policy "candidates_update" on candidates for update to anon using (true) with check (true);

create policy "scores_read"   on scores for select to anon using (true);
create policy "scores_insert" on scores for insert to anon with check (true);
create policy "scores_update" on scores for update to anon using (true) with check (true);
