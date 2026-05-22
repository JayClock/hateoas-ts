---
description: Audit changelog entries before release
---
Audit changelog entries for all commits since the last fixed-version release.

## Process

1. **Find the last fixed release tag:**
   ```bash
   git tag --sort=-version:refname --list 'v*' | head -1
   ```

2. **List package commits since that tag:**
   ```bash
   git log <tag>..HEAD --oneline -- packages/resource
   git log <tag>..HEAD --oneline -- packages/resource-react
   ```

3. **Read each package changelog and, when preparing an actual release, compare it with the `nx release --dry-run` preview:**
   - `packages/resource/CHANGELOG.md`
   - `packages/resource-react/CHANGELOG.md`

4. **For each commit, check:**
   - Skip: changelog updates, doc-only changes, release housekeeping, generated docs output, and dependency lockfile-only changes with no user-facing impact.
   - Determine which package(s) the commit affects with `git show <hash> --stat`.
   - Verify a changelog entry exists or will be generated for the affected package.
   - Prefer user-facing wording over commit-message wording; edit the generated release entry before publishing if needed.

5. **Cross-package rule:**
   - Changes in `@hateoas-ts/resource` that affect `@hateoas-ts/resource-react` users, hook behavior, installation, or peer/runtime compatibility should be duplicated or referenced in `packages/resource-react/CHANGELOG.md`.
   - Changes only needed for the React wrapper should not be duplicated to the core package unless the core API or runtime behavior changed.

6. **Fixed-version rule:**
   - `@hateoas-ts/resource` and `@hateoas-ts/resource-react` must be released together with the same version.
   - Do not use `nx release --projects=...` for normal releases.

7. **Report and fix:**
   - List commits with missing entries.
   - List entries that need cross-package duplication.
   - Add missing entries directly before release.

## Changelog Format Reference

Sections (in order):
- `### Breaking Changes` - API changes requiring migration
- `### Added` - New features
- `### Changed` - Changes to existing functionality
- `### Fixed` - Bug fixes
- `### Removed` - Removed features

Attribution:
- Internal: `Fixed foo.`
- External: `Added bar ([#456](https://github.com/JayClock/hateoas-ts/pull/456) by [@user](https://github.com/user)).`
