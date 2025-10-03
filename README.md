# Hirrd — Job Portal Application

A lightweight job portal built with React + Vite. The app demonstrates a component-driven structure where recruiters can post jobs and candidates can search, save, and apply.

## Project motive
- Provide a minimal, well-structured example of a job board focused on developer experience.
- Demonstrate common patterns: protected routes, onboarding, file uploads (resumes, company logos), and integration with Supabase.
- Ship reusable UI primitives that are easy to extend and reuse across pages.

## Key features
- Post, edit, delete jobs (recruiter).
- Search, filter, save jobs (candidate).
- Apply to jobs with resume upload and view submitted applications.
- Onboarding flow with role selection and protected routes.

## Tech stack
- React + Vite
- Supabase (database + storage)
- Clerk (authentication)
- Tailwind CSS
- shadcn/ui (component primitives + Radix UI)
- Plain CSS for small overrides (src/App.css, index.css)

Note: This project includes shadcn/ui-based components. The UI primitives live in src/components/ui and use Tailwind + Radix patterns.

## Quick start

1. Add environment variables in a .env at project root:
   - VITE_CLERK_PUBLISHABLE_KEY
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY

2. Install and run:
```bash
npm install
npm run dev
# build
npm run build
```

## Working with shadcn/ui
- The project already uses shadcn/ui-styled primitives in src/components/ui.
- To add or update components locally, use:
```bash
# initialize (only if not initialized)
npx shadcn-ui@latest init

# add a component, e.g. button
npx shadcn-ui@latest add button
```
- Ensure Tailwind is configured (tailwind.config.js) and that the `src` files are included in content paths.
- When adding shadcn components, follow the generated instructions to import styles and update Tailwind config.

## Important paths
- src/main.jsx — app entry
- src/App.jsx — routes & router
- src/layout/app-layout.jsx — layout & navigation
- src/api/* — API helpers (jobs, companies, applications)
- src/components/ui/* — UI primitives (shadcn-based components)
- src/hooks/use-fetch.jsx — fetch hook with auth integration
- src/utils/supabase.js — Supabase client


