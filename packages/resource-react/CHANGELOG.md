# @hateoas-ts/resource-react Changelog

All notable changes to this package are documented in this file.

## [Unreleased]

## [1.4.0] - 2026-01-15

### Added

- Added TypeDoc infrastructure and published API reference documentation.

### Changed

- Migrated hooks to the direct `get()` resource API.
- Aligned hook behavior with the Suspense-based resource read flow.

## [1.3.0] - 2026-01-03

### Changed

- Aligned React hooks with the typed request method updates in `@hateoas-ts/resource`.

## [1.2.6] - 2026-01-02

### Added

- Initial public `@hateoas-ts/resource-react` release.
- Added `ResourceProvider` and client hook support.
- Added `useReadResource`, `useResolveResource`, and `useInfiniteCollection` hooks.
- Added infinite-scroll pagination support and hook documentation.

### Fixed

- Added error handling to `useResolveResource`.
