# Release Guide

This workspace publishes two npm packages with Nx Release:

- `@hateoas-ts/resource`
- `@hateoas-ts/resource-react`

Nx is configured for independent package releases and package-specific git tags:

```text
{projectName}@{version}
```

Examples:

```text
@hateoas-ts/resource@1.4.0
@hateoas-ts/resource-react@1.4.0
```

The historical `v*` tags are not used by the current release flow.

## Backfilled npm release tags

The following package-specific tags have been created locally from npm publish times and the corresponding git history.

### `@hateoas-ts/resource`

| Version | Tag | Commit |
|---|---|---|
| 1.1.0 | `@hateoas-ts/resource@1.1.0` | `6f5aa82` |
| 1.1.1 | `@hateoas-ts/resource@1.1.1` | `ddd30e3` |
| 1.1.2 | `@hateoas-ts/resource@1.1.2` | `049ee35` |
| 1.2.0 | `@hateoas-ts/resource@1.2.0` | `535f956` |
| 1.2.1 | `@hateoas-ts/resource@1.2.1` | `d368b5d` |
| 1.2.2 | `@hateoas-ts/resource@1.2.2` | `cce6126` |
| 1.2.3 | `@hateoas-ts/resource@1.2.3` | `07212c3` |
| 1.2.4 | `@hateoas-ts/resource@1.2.4` | `38febaa` |
| 1.2.5-ge | `@hateoas-ts/resource@1.2.5-ge` | `42cd27c` |
| 1.2.6 | `@hateoas-ts/resource@1.2.6` | `af7b7d2` |
| 1.3.0 | `@hateoas-ts/resource@1.3.0` | `2c6ccea` |
| 1.4.0 | `@hateoas-ts/resource@1.4.0` | `4df191e` |

### `@hateoas-ts/resource-react`

| Version | Tag | Commit |
|---|---|---|
| 1.2.6 | `@hateoas-ts/resource-react@1.2.6` | `af7b7d2` |
| 1.3.0 | `@hateoas-ts/resource-react@1.3.0` | `2c6ccea` |
| 1.4.0 | `@hateoas-ts/resource-react@1.4.0` | `4df191e` |

Push the backfilled tags with:

```bash
git push origin $(git tag --list '@hateoas-ts/*')
```

## Changelog audit

Before a release, use `.pi/prompts/cl.md` to audit changelog coverage for commits since the latest package tag.

Package changelogs live at:

- `packages/resource/CHANGELOG.md`
- `packages/resource-react/CHANGELOG.md`

## Release dry run

Preview a patch release for all packages:

```bash
pnpm nx release patch --dry-run --skip-publish
```

Preview a single package release:

```bash
pnpm nx release patch --projects=@hateoas-ts/resource --dry-run --skip-publish
```

Use `minor`, `major`, `prerelease --preid beta`, or an exact version instead of `patch` when appropriate.

## Publish a new version

1. Ensure the working tree is clean and npm auth works:
   ```bash
   git status --short
   npm whoami
   ```
2. Audit changelog entries with `.pi/prompts/cl.md`.
3. Run a dry run:
   ```bash
   pnpm nx release patch --dry-run --skip-publish
   ```
4. Create the release commit and tag(s), but skip publishing so you can inspect the result:
   ```bash
   pnpm nx release patch --skip-publish
   ```
5. Push commit and tags:
   ```bash
   git push origin main --follow-tags
   ```
6. Publish packages:
   ```bash
   pnpm nx release publish --access public
   ```

For a one-step local release, run `pnpm nx release patch` and answer the publish prompt after reviewing the generated changes. For npm 2FA, pass `--otp <code>` to the publish step.
