# Personal Vault security setup

The Login page intentionally does not include public signup. An administrator must first create the one authorized user in Supabase Authentication. The user can then choose **Forgot password? Set a new one**, enter the authorized email, and follow the one-time recovery link sent by Supabase. The recovery link opens `/reset-password`, where a new password of at least 12 characters can be saved. An authenticated user can also use **Change password** from the private area.

## Required Supabase settings

In **Authentication → Providers → Email**, keep email/password authentication enabled and keep public sign-ups disabled unless additional trusted users are explicitly needed. In **Authentication → URL Configuration**, add the production site URL and the exact recovery redirect URL used by this application, for example `https://drafroza.vercel.app/#/reset-password`.

## Vault rules

Personal records must be stored only in Supabase tables with Row Level Security enabled. Every table should include an `owner_id uuid not null default auth.uid()` column and policies that restrict `select`, `insert`, `update`, and `delete` to `auth.uid() = owner_id`. Never use the Supabase service-role key in browser code or Vercel public variables. The publishable/anon key is safe to expose only when RLS is correctly configured.

For highly sensitive notes, documents, or passwords, add client-side encryption before inserting data: derive a key from a separate vault passphrase using a modern password KDF, encrypt with an authenticated cipher such as AES-GCM, and never store the raw vault passphrase. Supabase Auth protects account access; RLS protects database rows; client-side encryption protects the contents if the database is ever exposed.

## Operational recommendations

Use a unique password of at least 12–16 characters, enable MFA in Supabase when the account is ready, keep recovery email access protected, avoid storing third-party passwords until client-side encryption is implemented, and review Supabase security advisors regularly. Do not put secrets, service-role keys, or database passwords in GitHub, frontend code, or `VITE_*` variables.
