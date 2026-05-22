# hateoas-ts

Nx workspace for the `@hateoas-ts` packages.

## Packages

- [`@hateoas-ts/resource`](./packages/resource) - Type-safe HATEOAS client for HAL-compliant REST APIs.
- [`@hateoas-ts/resource-react`](./packages/resource-react) - React hooks and provider for `@hateoas-ts/resource`.

## Development

```bash
pnpm install
pnpm nx show projects
pnpm build
pnpm test
```

## Release process

See [RELEASE.md](./RELEASE.md) for the full release guide and historical tag mapping.

This workspace uses `nx release` with fixed versioning, so `@hateoas-ts/resource` and `@hateoas-ts/resource-react` are always released together with the same version. Release tags use:

- `v<version>`

Before releasing, audit changelog coverage with `.pi/prompts/cl.md`, then inspect the `nx release --dry-run` changelog preview and edit any generated entries that need more user-facing wording.

### Backfilled historical release tags

Historical npm releases before the fixed-release setup are also represented by package-specific git tags. New releases use `v<version>` tags.

### Dry run

```bash
pnpm nx release patch --dry-run --skip-publish
```

Use `minor`, `major`, `prerelease --preid beta`, or an exact version instead of `patch` when needed. Do not release only one package; both packages should keep the same version.

### Publish

Publishing is done by GitHub Actions when a `v*` tag is pushed. Configure the repository secret `NPM_TOKEN` first.

1. Create the release commit and tag locally, but skip local publishing:
   ```bash
   pnpm nx release patch --skip-publish
   ```
2. Push the generated commit and tag(s) to trigger `.github/workflows/publish.yml`:
   ```bash
   git push origin main --follow-tags
   ```
