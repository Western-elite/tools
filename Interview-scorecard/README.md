# Interview Scorecard

A shared-link interview scoring tool for Western Elite, starting with the MRF team.
Managers (Henderson, Wynn, Nellis) and the Director score each candidate 1–5 on
each criterion, give a Hire / Maybe / No hire recommendation, and the Director records
the final decision. All scores are visible to everyone.

## Files

| File | What it is |
|---|---|
| `index.html` | The entire app: settings, criteria, and UI |
| `schema.sql` | Supabase tables and access rules (run once) |

## Setup

1. **Create the database.** In Supabase, create a project (or use an existing one), open
   **SQL Editor**, paste `schema.sql`, and run it.
2. **Connect the app.** In Supabase **Project Settings → API**, copy the Project URL and the
   anon (or publishable) key. Paste them into the `CONFIG` block at the top of the script in
   `index.html`.
3. **Publish.** Commit both files to the repo and turn on **GitHub Pages**
   (Settings → Pages → deploy from branch). Share the Pages URL with the interviewers.

Without the Supabase keys the app runs in **demo mode**: it works fully, but data stays in
that one browser. That's useful for testing before you connect it.

## Changing the criteria

Edit the `criteria` list in the `DEPARTMENTS.MRF` block in `index.html`. Each criterion has:

- `key`: the saved ID. **Don't change a key after real scores exist**, or old scores won't line up.
- `label` / `short`: the full name and the short name for compare-table headers.
- `weight`: `1` is normal, and `2` counts double in the weighted average.
- `question`: the interview question shown to the interviewer.
- `lookFor`: optional guidance on what a strong answer sounds like.

The current MRF criteria are **placeholders**.

## How scores are calculated

- **Interviewer average** is the weighted average of that person's 1–5 ratings.
- **Candidate overall** is the average of the interviewer averages.
- **Criterion average** is the plain average of everyone's rating on that criterion.

## Adding another department later

Copy the `MRF` block in `DEPARTMENTS`, rename it (for example `Hauling`), set its interviewers,
positions and criteria, and change `DEPT`. Every candidate is tagged with its department,
so departments can share the same Supabase tables.

## Notes

- There are no logins. Interviewers pick their name from the **Scoring as** menu, and the
  browser remembers it.
- The public key can add and edit records but can't delete them. Remove test or duplicate
  candidates in the Supabase Table Editor (deleting a candidate also deletes its scores).
