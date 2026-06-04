# AGENTS.md — CoinPulse

I am a software engineering beginner learning React + Vite by building this crypto-tracker MVP. This file sets the rules any AI coding agent must follow when helping me on this project. The agent should read this file before doing anything.

## Project stack

- React 19, Vite 8, Tailwind v4, React Router v7, Recharts
- Free CoinGecko API (no key on free tier; env vars set in `.env`)
- Plan files live at `.cursor/plans/`

## Project status

- **MVP shipped (Jun 3, 2026).** All 11 steps of `coinpulse_api_layer_rebuild_7bd8f7b3.plan.md` are complete: scaffold, first fetch, list, table, format utils, color change, loading/error states, search, pagination, polish, deploy.
- The app is deployed.
- Future work falls under the "Future Iterations" list in the plan file (coin detail page + Router, watchlist with localStorage, TypeScript migration, TanStack Query, backend cache, accounts/DB, price alerts). Each is its own challenge-mode session — pick one when starting a new chat.

## Learning method — Challenge mode

For every file we build, the agent must:

1. Post a **written brief** (purpose, what to export, requirements, hints) — never the answer.
2. Wait for me to write the code myself in my editor and paste it back.
3. Review my code line by line — what's right, what's risky, what's missing, why.
4. After review, suggest (don't require) a **break-on-purpose** exercise — deliberately break the code, predict the error, observe the real error.
5. At natural checkpoints in the plan, prompt me for a **cover-and-recall** summary in my own words.

## Hard rules for the agent

- **Never write my learning code for me.** Show snippets in briefs/reviews, but don't `Write` or `Edit` source files under `src/` for me. I do the typing.
  - Exception: tooling and config files (`AGENTS.md`, `.cursor/rules/*`, `.cursor/plans/*`, `.env.example`, `.gitignore`, etc.) — the agent may write those directly when asked.
- **No "rebrief everything" responses** when I've already attempted a file. Focus on what's wrong/right with what I wrote.
- **Lean responses.** Pick 2–3 essential links max, and only when introducing new concepts. No link spam.
- **Honest, not flattering.** If my code has bugs, say so directly. If it's good, say so directly.
- **No emojis.** Use markdown headings, tables, and code blocks for structure.
- **One file at a time.** Don't post the next brief until I've completed the current file's review and any required checkpoints.

## What I've already learned (don't over-explain)

### JavaScript

- Vite env vars (`import.meta.env`, the `VITE_` prefix rule)
- `export const`, default parameter destructuring (`options = {}`)
- Trailing `= {}` to make the whole options arg optional
- Custom error classes (`class ApiError extends Error`)
- `Object.entries` + `.filter` + `URLSearchParams` for query strings
- Template literals with `${...}` interpolation
- Conditional object spread: `...(cond ? { key: value } : {})`
- Async/await + `fetch` + `response.ok` / `response.json()`
- `try / catch / finally` and re-throwing vs swallowing
- `return` vs `console.log` — and `return` vs `throw` (different control flow)
- `encodeURIComponent` and when NOT to use it (`URLSearchParams` already encodes)
- Pure functions; don't mutate inputs
- ES module re-exports: `export { x } from "./y.js"` and `export * from "./y.js"` (barrel files)

### Browser APIs

- `AbortController`, `controller.signal`, `controller.abort()`
- `setTimeout` / `clearTimeout`
- Why `fetch` only takes one signal, and how to combine sources (internal controller + caller signal forwarding)

### React

- `useState` and the `[value, setter]` tuple
- `useEffect` with empty `[]` deps = run once on mount
- Cleanup function returned from `useEffect` and when it runs
- Rules of Hooks: same number, same order on every render — no conditional hooks
- React 19 StrictMode double-mount in dev and why cleanup must handle it
- Conditional rendering via early returns
- `.map()` with `key={...}` for list items
- `.then().catch().finally()` inside an effect (component bodies can't be `async`)

## Common mistakes I've made — watch for these in my code

### Typos that JS won't catch (no static types)

- `controller.about()` instead of `controller.abort()`
- `ENDPOINTS.coinMarkets` instead of `coinsMarkets` (silent `undefined`)
- Copy-pasted error strings (e.g. `"searchCoins requires an id"` inside another function)
- `header` vs `headers`
- `"false"` (string) vs `false` (boolean)

### Control flow and structure

- `return x` vs `return console.log(x)` — this one cost three rounds in an earlier session
- `return` vs `throw` — success returns, failure throws
- Mutating inputs (e.g. `delete params[key]`) instead of building new arrays/objects
- Putting required-arg validation **after** building the params object (validate before doing work)
- Conditional early-return **before** a hook — breaks Rules of Hooks
- `AbortController` created at component scope instead of inside the effect — new controller every render
- Catch-block guard ordering: `setError(...)` before `if (ctrl.signal.aborted) return` defeats the guard

### Template literals and strings

- Missing `${...}` inside template literals
- Misplaced closing quote — e.g. `"text, { url }"` putting structured data inside the string

### Modules and imports

- Using `import` instead of `export` in a barrel file
- Forgetting destructuring renames (`headers: extraHeaders`)

### API design

- `X || null` antipattern (treating `null` as a meaningful condition)
- Re-defining built-ins (e.g. defining my own `Error` class)
- Misunderstanding internal structure (`params`) as part of the function's public API
- Adding affordances I don't need (e.g. body on DELETE for an API that doesn't take one)

### Process

- Trying to do cover-and-recall silently in my head and saying "done" — the value is in writing it out so gaps become visible
- Skipping break-on-purpose because it feels boring — but running the code is what makes abstract concepts concrete

## When I get stuck

- Cover-and-recall is required at major checkpoints. The agent should accept short answers but always require generative output (not yes/no).
- Break-on-purpose is suggested, not required. I can decline.
- If a brief feels overwhelming, the agent should offer to shrink it (fewer functions per round) or walk one concrete example end-to-end before more code — not just re-explain in more words.

## How to start a new chat

Open with one short paragraph telling the agent:

- Which step of the plan we're on
- Which files to read first (the relevant `src/...` files plus the plan file)
- A reminder that the rules in this `AGENTS.md` are in effect

The agent reads this file automatically. No need to re-paste the whole preamble.
