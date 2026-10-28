/* =====================================================================
   Western Elite — Scale House Agent Passport
   CONFIG
   ---------------------------------------------------------------------
   ONE THING LEFT TO DO: paste your publishable key on the line marked
   below, between the quotes. Then save this file.

   The publishable key (sb_publishable_...) is safe to ship in a public
   repo — it only grants what your Row Level Security policies allow.
   NEVER put a key starting with sb_secret_ or a service_role key here.
   ===================================================================== */

window.PASSPORT_CONFIG = {

  // Your Supabase project URL — already filled in.
  // Double-check it against the Copy button on your project home page.
  SUPABASE_URL: 'https://psuxxnxtfafalbjqwsrx.supabase.co',

  // >>> PASTE YOUR PUBLISHABLE KEY BETWEEN THESE QUOTES <<<
  SUPABASE_ANON_KEY: 'sb_publishable_ocq_ZR0rwGS8SbYtwPivKQ__069VDQE',

  // Table names — these match schema.sql. Leave them alone.
  TABLE_AGENTS:    'sh_agents',
  TABLE_PASSPORTS: 'sh_passports',
  TABLE_LOG:       'sh_coaching_log',

  // Shown in the header and on printed passports
  TEAM_LABEL: 'Scale House',

  // Optional soft gate so a stray link isn't wide open.
  // Set this to a word before the repo goes public, e.g. 'apex2026'.
  // Convenience, not security — real protection is Supabase RLS / Auth.
  // ACCESS_CODE is the Director sign-in (everything, plus the team dashboard).
  ACCESS_CODE: 'Western2026!',

  // Manager and team lead sign-ins. Type a code for each between the quotes
  // (different from ACCESS_CODE and from each other). Leave blank to turn
  // that sign-in off. Convenience, not security, same as ACCESS_CODE.
  MANAGER_CODE:  '',
  TEAMLEAD_CODE: ''
};