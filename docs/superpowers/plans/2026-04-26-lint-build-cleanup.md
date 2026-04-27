# Lint And Build Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `pnpm lint` and `pnpm build` pass while keeping `.contentlayer` in the lint scope and preserving the `ignoreDeprecations: "6.0"` requirement for `contentlayer2`.

**Architecture:** Keep the global lint rules strict for handwritten code, then add narrow ESLint overrides for generated `.contentlayer` output that cannot reasonably follow project style rules. Fix handwritten source issues in place with the smallest edits, and validate with fresh `lint` and `build` runs.

**Tech Stack:** Next.js 16 Pages Router, React 19, TypeScript 5.9, ESLint 9 flat config, Contentlayer2

---

### Task 1: Adjust Lint Scope For Generated Contentlayer Files

**Files:**
- Modify: `eslint.config.mjs`

- [ ] **Step 1: Add an override for generated `.contentlayer` files**

```js
  {
    files: [".contentlayer/**/*.mjs", ".contentlayer/**/*.d.ts"],
    rules: {
      semi: "off",
    },
  },
```

- [ ] **Step 2: Extend the override for generated declaration-specific rules**

```js
  {
    files: [".contentlayer/generated/**/*.d.ts"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
```

- [ ] **Step 3: Run lint to confirm generated-file errors are gone**

Run: `pnpm lint`
Expected: `.contentlayer/**` no longer reports `semi`, `no-empty-object-type`, or generated unused type warnings.

### Task 2: Fix Handwritten Source Lint Issues

**Files:**
- Modify: `src/components/header/header.tsx`
- Modify: `src/components/search/search.tsx`
- Modify: `src/**/*.ts`
- Modify: `src/**/*.tsx`

- [ ] **Step 1: Remove the unused `Image` import from the header**

```tsx
import Link from "next/link"
import { Button } from "../ui/button"
import ActiveLink from "../active-link/active-link"
import { Logo } from "../logo"
```

- [ ] **Step 2: Simplify the search submit handler to avoid the stale dependency warning**

```tsx
import { useRouter } from "next/router"
import { useState } from "react"

export function Search() {
  const router = useRouter()
  const [query, setQuery] = useState("")

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (query.trim()) {
      router.push(`/blog?=${encodeURIComponent(query)}`)
    }
  }
```

- [ ] **Step 3: Auto-fix semicolon style in handwritten source files**

Run: `pnpm exec eslint src --fix`
Expected: semicolon-only errors in `src/**` are rewritten to the repo style.

- [ ] **Step 4: Run lint again to confirm handwritten files are clean**

Run: `pnpm lint`
Expected: no remaining warnings or errors in `src/**`.

### Task 3: Verify Build Still Works With Contentlayer Requirement Intact

**Files:**
- Keep: `tsconfig.json`

- [ ] **Step 1: Preserve the existing Contentlayer-related TypeScript setting**

```json
"ignoreDeprecations": "6.0"
```

- [ ] **Step 2: Run the production build**

Run: `pnpm build`
Expected: build completes successfully without changing the Contentlayer requirement.

- [ ] **Step 3: If build still fails, fix the next concrete error only**

Run: `pnpm build`
Expected: any follow-up failure points to a new root cause to address in isolation.
