# Implementation Plan: Fix Hydration Mismatch from Extension Attributes

Browser extensions (such as Bitdefender, Brave Guard, AdBlock, etc.) inject custom attributes (`bis_status`, `bis_frame_id`, `__processed_*__`) into the `<body>` HTML element before React hydrates. This causes Next.js / React 19 to log a hydration error when comparing server HTML attributes with client DOM attributes.

## User Selected Strategy
Strip browser extension injected attributes on `document.body` and `document.documentElement` via an inline synchronous script in `<head>` before React hydration begins.

## Proposed Changes

### 1. Root Layout (`src/app/layout.tsx`)
- Add a high-priority synchronous inline `<script>` inside `<head>` in `src/app/layout.tsx`.
- The script will observe and immediately clean up known extension attribute prefixes (e.g. `bis_`, `__processed_`, `cz-shortcut-listen`, `data-extension-`, `data-new-gr-c-s-check-loaded`) from `document.body` and `document.documentElement` before React hydration runs.
- Maintain `suppressHydrationWarning` on `<html>` and `<body>`.

### 2. Verification
- Run `lint_applet` to verify zero ESLint errors.
- Run `compile_applet` to verify Next.js build compilation.
- Restart the development server.

## Verification Plan

### Automated Verification
- Run `npx tsc --noEmit`
- Run `lint_applet`
- Run `compile_applet`

### Manual Verification
- Test page load in dev mode to verify no hydration mismatch overlay appears on `<body>`.
