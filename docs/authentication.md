# Authentication

All authentication in this application is handled exclusively by **Clerk**. No custom auth logic, alternative auth providers, or other authentication methods are permitted.

---

## Clerk Integration

- **Clerk is the single source of truth** for all authentication and authorization.
- Use Clerk's built-in utilities (`useAuth()`, `useUser()`, `withAuth()`, etc.) to check authentication state and user data.
- Environment variables for Clerk must be configured in `.env.local`:
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (public, safe for client)
  - `CLERK_SECRET_KEY` (private, server-only)

---

## Route Protection

### Protected Routes

The `/dashboard` page is a **protected route** and must require the user to be logged in. Any unauthenticated user attempting to access `/dashboard` must be redirected or prompted to sign in.

Implementation approach:
- Use Clerk's middleware or route protection patterns to guard the `/dashboard` route.
- Unauthenticated requests should redirect to the homepage or sign-in flow.

### Homepage Redirect

- If a **logged-in user** accesses the homepage (`/`), they must be automatically redirected to `/dashboard`.
- This prevents authenticated users from seeing the public homepage.

---

## Sign In & Sign Up

- **Sign in and sign up modals must always launch as modals**, never as full-page redirects.
- Use Clerk's modal/embedded sign-in and sign-up components.
- Modals should overlay the current page without full-page navigation.

---

## Do's and Don'ts

✅ **DO:**
- Use Clerk for all authentication
- Return `useAuth()` or `useUser()` to check user state in client components
- Protect routes at the component or middleware level
- Keep Clerk environment variables secure

❌ **DON'T:**
- Implement custom JWT, session, or token-based authentication
- Use third-party auth providers (Auth0, Okta, Firebase Auth, etc.)
- Store user credentials in your database
- Expose `CLERK_SECRET_KEY` in client code
