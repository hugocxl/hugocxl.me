---
name: dev
description: Run development server, type checking, and build commands for this Electron app.
user_invocable: true
model: haiku
tools: Bash
---

# Dev Skill

Quick access to common development commands for Cleanify.

## Available Commands

### Development Server

```bash
# Start dev server with hot reload
pnpm dev
```

### Type Checking

```bash
# Check all TypeScript
pnpm typecheck

# Check main + preload only
pnpm typecheck:main

# Check renderer only
pnpm typecheck:renderer
```

### Build

```bash
# Build for development/testing
pnpm build

# Build + package for macOS
pnpm dist:mac

# Preview production build
pnpm preview
```

### Clean

```bash
# Remove build artifacts
rm -rf out/ dist/

# Full clean reinstall
rm -rf node_modules out/ dist/ && pnpm install
```

## Usage

When user says:
- "start dev" / "run dev" → `pnpm dev`
- "check types" / "typecheck" → `pnpm typecheck`
- "build" → `pnpm build`
- "package" / "dist" → `pnpm dist:mac`
- "clean" → Remove out/ and dist/
