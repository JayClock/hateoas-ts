# Release Guide

This workspace publishes two npm packages with Nx Release:

- `@hateoas-ts/resource`
- `@hateoas-ts/resource-react`

Nx is configured for fixed-version releases: both packages are always versioned, tagged, and published together.

Release tags use:

```text
v{version}
```

Example:

```text
v1.4.1
```

Historical npm releases before the fixed-release setup are also represented by package-specific tags for changelog lookup and traceability.

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

Before a release, use `.pi/prompts/cl.md` to audit changelog coverage for commits since the latest fixed-version tag.

Package changelogs live at:

- `packages/resource/CHANGELOG.md`
- `packages/resource-react/CHANGELOG.md`

## Release dry run

Preview a patch release for all packages:

```bash
pnpm nx release patch --dry-run --skip-publish
```

Use `minor`, `major`, `prerelease --preid beta`, or an exact version instead of `patch` when appropriate. Do not pass `--projects` for normal releases; both packages must keep the same version.

## Publish a new version

Publishing is performed by GitHub Actions when a `v*` tag is pushed. Do not publish from your local machine.

Repository setup required once:

1. Create an npm granular access token with read/write access to both packages:
   - `@hateoas-ts/resource`
   - `@hateoas-ts/resource-react`
2. Add it to GitHub repository secrets as `NPM_TOKEN`.

Release steps:

1. Ensure the working tree is clean:
   ```bash
   git status --short
   ```
2. Audit changelog entries with `.pi/prompts/cl.md`.
3. Run a dry run:
   ```bash
   pnpm nx release patch --dry-run --skip-publish
   ```
4. Create the release commit and tag locally, but skip local publishing:
   ```bash
   pnpm nx release patch --skip-publish
   ```
5. Push the release commit and tag. The tag push triggers `.github/workflows/publish.yml` and publishes both packages to npm:
   ```bash
   git push origin main --follow-tags
   ```

Use `minor`, `major`, `prerelease --preid beta`, or an exact version instead of `patch` when appropriate.
