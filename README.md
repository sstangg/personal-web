# Personal Web

Portfolio site built with React + Vite + Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Project structure

- `src/app/components`: page components (`About`, `Projects`, `Experience`, `Nav`)
- `src/imports`: static image assets grouped by page section
- `src/styles`: global and theme styles (`globals.css`, `tailwind.css`, `theme.css`)

## Tailwind setup

This project uses Tailwind CSS v4 via `@tailwindcss/vite` and `src/styles/tailwind.css`.
There is intentionally no `tailwind.config.js`.

## WebStorm notes

- Ensure WebStorm uses the project TypeScript version.
- `@` path alias resolves to `src` via both `vite.config.ts` and `tsconfig.json`.
