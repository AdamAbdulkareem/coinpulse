---
name: crypto tracker MVP
overview: A beginner-friendly plan for building a CoinMarketCap-style MVP using React + Vite, the free CoinGecko API, and Tailwind CSS — focused on learning core frontend fundamentals one concept at a time.
todos:
  - id: scaffold
    content: Scaffold Vite + React project and install Tailwind CSS
    status: in_progress
  - id: first-fetch
    content: Call CoinGecko /coins/markets endpoint with useEffect + useState and log the response
    status: pending
  - id: basic-list
    content: Render coins as a simple list using .map() and keys
    status: pending
  - id: coin-table
    content: Build CoinTable and CoinRow components with all columns (rank, logo, name, symbol, price, 24h %, market cap, volume)
    status: pending
  - id: format-utils
    content: Add formatPrice, formatPercent, formatMarketCap helpers using Intl.NumberFormat
    status: pending
  - id: color-change
    content: Conditionally color the 24h change column green/red based on sign
    status: pending
  - id: loading-error
    content: Add loading spinner and error UI states
    status: pending
  - id: search
    content: Add SearchBar component with controlled input and client-side filtering
    status: pending
  - id: pagination
    content: Add Load more / pagination by tracking the page number in state
    status: pending
  - id: polish
    content: Responsive layout, hover states, favicon, page title
    status: pending
  - id: deploy
    content: Push to GitHub and deploy to Vercel or Netlify
    status: pending
isProject: false
---

# Crypto Tracker MVP — Beginner Plan

## Recommended Stack (and why)

For a first real project, I recommend **frontend-only with a public API**. It keeps you focused on one set of ideas at a time and gives you a fast feedback loop.

- **React + Vite** — modern, fast dev server, the de-facto starting point for React. Easier to learn than Next.js because there's no server/routing/SSR layer to reason about yet.
- **JavaScript first, TypeScript later** — get comfortable with React, then add TypeScript in a follow-up iteration. It's a much smoother learning curve.
- **Tailwind CSS** — utility classes you write inline. Beginners can style things without juggling separate CSS files or naming conventions.
- **CoinGecko Public API** (https://docs.coingecko.com/v3.0.1/reference/coins-markets) — free, no API key needed for basic endpoints, CORS-enabled so the browser can call it directly. No backend required for the MVP.
- **Deploy on Vercel or Netlify** — free, drag-and-drop or GitHub-connected.

Skip for now: backend, database, auth, charts, state libraries. Add them later as separate learning goals.

## What the MVP Will Do

A single page that shows the top 100 cryptocurrencies with:

- Rank, logo, name, symbol
- Current price (USD)
- 24h % change (green for positive, red for negative)
- Market cap and 24h trading volume
- A search box that filters the visible list by name or symbol
- A "Load more" button or simple pagination for the next 100

## Suggested Project Structure

```text
crypto-tracker/
├── src/
│   ├── api/
│   │   └── coingecko.js        // fetch wrapper for the API
│   ├── components/
│   │   ├── CoinTable.jsx       // the table
│   │   ├── CoinRow.jsx         // one row
│   │   ├── SearchBar.jsx       // controlled input
│   │   └── LoadingState.jsx    // spinner / skeleton
│   ├── hooks/
│   │   └── useCoins.js         // custom hook: fetch + state + loading + error
│   ├── utils/
│   │   └── format.js           // formatPrice, formatPercent, formatMarketCap
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               // tailwind directives
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Recommended Build Order (each step = one focused learning session)

Tackle these one at a time. Don't move on until the previous one works and you understand *why* it works.

1. **Project setup** — `npm create vite@latest crypto-tracker -- --template react`, install Tailwind, get "Hello World" rendering.
2. **First fetch** — call `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1` with `useEffect` + `useState`, log the response.
3. **Render a basic list** — map the response into a simple `<ul>`. Learn keys and `.map()`.
4. **Build a real table** — extract `CoinTable` and `CoinRow` components, add all columns. Learn props.
5. **Format numbers** — write `formatPrice`, `formatPercent`, `formatMarketCap` in `utils/format.js`. Use `Intl.NumberFormat`.
6. **Color the 24h change** — conditional `className` based on sign. Learn conditional styling.
7. **Loading and error states** — show a spinner while loading, an error message on failure.
8. **Search bar** — controlled input + client-side filter with `.filter()`. Learn controlled components and lifting state.
9. **Pagination / Load more** — add a page counter and a button. Learn updating state based on previous state.
10. **Polish** — responsive layout, hover states, favicon, page title.
11. **Deploy** — push to GitHub, connect to Vercel/Netlify, share the link.

## Core React Concepts You'll Learn

- Components, props, JSX
- `useState` for local UI state
- `useEffect` for side effects (data fetching)
- Async/await and `fetch`
- Lists and keys
- Conditional rendering
- Controlled form inputs
- Lifting state up
- Custom hooks (`useCoins`)

## API Notes (Important for a Beginner)

- CoinGecko's free tier rate-limits you to roughly 10–30 calls/minute. Don't refetch on every render — fetch once when the page loads (and again only when the page number changes).
- The endpoint you'll use most: `GET /coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`.
- Inspect responses in the browser DevTools Network tab before writing UI code.

## Future Iterations (after MVP ships)

Each of these is a self-contained next project that teaches one new thing:

- **Coin detail page** — adds React Router and a price chart (Recharts or Lightweight Charts).
- **Watchlist** — adds `localStorage` persistence.
- **TypeScript migration** — convert `.jsx` to `.tsx` file by file.
- **TanStack Query** — replace manual `useEffect` fetching with proper caching.
- **Backend** — add a Node/Express or FastAPI server that caches CoinGecko responses, so you stop hitting rate limits.
- **Accounts and DB** — add Supabase or Postgres for user-owned watchlists.
- **Price alerts** — adds background jobs and notifications.

## What to Avoid as a Beginner

- **Don't pick the "best" stack on day one.** React + Vite is more than enough.
- **Don't add Redux/Zustand/etc.** `useState` handles MVP scope fine.
- **Don't build a backend yet.** CoinGecko's public API removes the need.
- **Don't aim for "production quality" on the first pass.** Ship an ugly working version, then iterate.

## First Concrete Action

When you're ready, the very first command will be:

```bash
npm create vite@latest crypto-tracker -- --template react
cd crypto-tracker
npm install
npm run dev
```
