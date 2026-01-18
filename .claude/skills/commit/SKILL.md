---
name: commit
description: Create conventional commits for this Electron + React project. Run type checking before committing to ensure no type errors are introduced.
user_invocable: true
model: haiku
tools: Bash, Read
---

# Commit Skill

Create well-formatted conventional commits for the Cleanify project.

## Commit Message Format

Use conventional commits format:

```
<type>(<scope>): <description>

[optional body]

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

### Types

| Type | When to Use |
|------|-------------|
| feat | New feature or capability |
| fix | Bug fix |
| refactor | Code change that neither fixes a bug nor adds a feature |
| perf | Performance improvement |
| style | Formatting, missing semicolons, etc. |
| docs | Documentation only changes |
| test | Adding or correcting tests |
| chore | Maintenance tasks, dependency updates |
| build | Changes to build system or external dependencies |

### Scopes

| Scope | Files Affected |
|-------|----------------|
| main | `src/main/**` |
| renderer | `src/renderer/**` |
| preload | `src/preload/**` |
| types | `src/shared/types.ts` |
| services | `src/main/services/**` |
| hooks | `src/renderer/hooks/**` |
| ipc | IPC handlers and preload bridges |
| build | Build configuration, electron-builder |
| deps | package.json dependency changes |

## Workflow

1. Run `pnpm typecheck` to verify no type errors
2. Run `git status` to see changes
3. Run `git diff --staged` for staged changes (or `git diff` for all)
4. Check recent commits with `git log --oneline -5` for style consistency
5. Create commit with appropriate type, scope, and description

## Examples

```bash
# Feature in renderer
feat(renderer): add disk usage visualization panel

# Bug fix in main process service
fix(services): handle null path in artifact scanner

# IPC changes spanning main and preload
feat(ipc): add real-time progress events for cleanup

# Type definition update
refactor(types): add discriminated union for scan states

# Dependency update
chore(deps): update electron to v40
```

## Pre-Commit Check

Always run type checking before committing:

```bash
pnpm typecheck
```

If there are errors, fix them before committing. Never commit code with type errors.
