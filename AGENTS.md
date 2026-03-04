# Agent Instructions — Link Shortener Project

This file is the root entry point for all LLM agent instructions for this project. It defines how AI agents must behave, what rules they must follow, and where to find detailed guidance per topic.

Always read this file first. Then read whichever topic-specific files are relevant to the task at hand.

---

## ⚠️ CRITICAL: READ DOCS FIRST

**BEFORE GENERATING ANY CODE, YOU MUST READ THE RELEVANT DOCUMENTATION FILES IN THE `./docs` DIRECTORY.**

This is non-negotiable. Do not write code without first consulting the appropriate documentation file. Failure to do so will result in code that violates project standards and must be rewritten.

---

## Quick Reference

**⚠️ READ THESE FILES BEFORE WRITING ANY CODE ⚠️**

For detailed guidelines on specific topics, refer to the modular documentation in the `./docs` directory. **You MUST read the relevant `.md` file BEFORE generating any code:**

- [docs/authentication.md](docs/authentication.md) — Clerk-based auth, protected routes, modals
- [docs/shadcn-ui.md](docs/shadcn-ui.md) — shadcn/ui component standards and usage

**Do not skip this step. Always read the relevant documentation file first.**

---

## Non-Negotiable Rules

These rules apply in every context. No exceptions.

1. **TypeScript only.** Never write plain `.js` files. All code must be fully typed — no `any` unless absolutely unavoidable and explicitly commented.
2. **App Router only.** This project uses the Next.js App Router. Never use Pages Router patterns (`getServerSideProps`, `getStaticProps`, `_app.tsx`, etc.).
3. **Server Components by default.** Components are Server Components unless interactivity requires `"use client"`. Always prefer keeping components on the server.
4. **Never expose secrets.** Environment variables that are not prefixed with `NEXT_PUBLIC_` must never be referenced in client components.
5. **Use Drizzle ORM for all database queries.** No raw SQL strings, no other ORMs.
6. **Use Clerk for all authentication.** Do not implement custom auth logic.
7. **Use shadcn/ui components** before writing custom UI. Do not install other component libraries.
8. **Run `npm run lint` before declaring any task complete.** Fix all lint errors.

---

## Workflow for Every Task

**⚠️ STEP 1 IS MANDATORY — DO NOT SKIP ⚠️**

1. **READ THE RELEVANT DOCS FILES** listed in the Quick Reference above **BEFORE writing any code**. This is not optional. You must read the appropriate documentation file(s) from the `./docs` directory before generating any code.
2. Follow the coding standards in [docs/coding-standards.md](docs/coding-standards.md) for naming, formatting, and structure.
3. Match existing patterns already present in the codebase — don't introduce new patterns without good reason.
4. Do not create files outside the established folder structure without a documented justification.
5. Do not install new dependencies without explicit user approval.
