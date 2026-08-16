<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# CarryLink Project Rules

## Project
CarryLink is a C2C marketplace connecting buyers in Hong Kong with travelers flying from Japan to Hong Kong. Buyers can request products from Japan, while travelers can offer spare baggage space to carry products.

## Current Phase
The project is currently in the frontend MVP / prototype phase.

Completed:
- Landing page
- Basic shared UI components
- Mock listing data
- Browse page
- Listing detail page
- Offer placeholder page
- Basic navigation between the main pages

Not implemented yet:
- Authentication
- Real backend APIs
- AWS services
- Database
- Payments / Stripe
- Real product ordering
- Real traveler listing creation
- User dashboard

Do not implement these backend or production features unless explicitly requested.

## Tech Stack
- Next.js 16
- App Router
- React 19
- TypeScript
- Tailwind CSS v4

Follow the conventions of the installed versions rather than relying on older Next.js knowledge.

Before making changes involving Next.js APIs or conventions, read the relevant documentation under:
node_modules/next/dist/docs/

## Development Principles
- Prefer simple, maintainable solutions.
- Do not add dependencies unless there is a clear reason.
- Reuse existing components before creating new ones.
- Keep components focused and reasonably small.
- Use TypeScript types for domain data.
- Prefer Server Components unless client-side interactivity is actually required.
- Do not introduce state-management libraries unless explicitly requested.
- Do not introduce a UI component library unless explicitly requested.
- Keep mock data separate from UI components.
- Do not hard-code mock business data directly into page components when it belongs in the data layer.

## Scope Control
- Do not modify unrelated files.
- Do not refactor working code without a clear reason.
- Do not change the overall architecture without first explaining the reason.
- Do not introduce AWS, authentication, payments, or backend infrastructure during frontend-only tasks.
- If a requested change has architectural implications, explain them before implementing.

## UI / UX
CarryLink should feel:
- clean
- trustworthy
- modern
- minimal
- practical

Prefer restrained visual design over excessive decoration.

Avoid adding:
- unnecessary gradients
- excessive animations
- decorative illustrations
- excessive rounded cards
- unnecessary third-party UI libraries

Keep the existing visual language consistent across pages and components.

## Validation
After making code changes:
1. Run `npm run lint`.
2. Run `npm run build` when the change affects application code or routing.
3. Report the results clearly.

If lint or build fails, fix the issue before considering the task complete.

## Implementation Workflow
For small changes:
- Inspect the relevant files.
- Make the change.
- Run appropriate validation.

For larger changes:
1. Inspect the existing implementation.
2. Explain a brief implementation plan.
3. Implement the plan.
4. Run lint and build.
5. Summarize changed files and validation results.

Do not make unrelated improvements while implementing a requested feature.
