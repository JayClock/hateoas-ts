## 1.4.3 (2026-05-26)

### 🩹 Fixes

- **resource:** validate select action option values ([ce85642](https://github.com/JayClock/hateoas-ts/commit/ce85642))

## 1.4.2 (2026-05-25)

### Fixed

- Inlined the package version in published bundles so the default `User-Agent` no longer depends on a runtime `package.json` lookup.

## 1.4.1 (2026-05-22)

This was a version bump only for @hateoas-ts/resource to align it with other projects, there were no code changes.

# @hateoas-ts/resource Changelog

All notable changes to this package are documented in this file.

## [Unreleased]

## [1.4.0] - 2026-01-15

### Added

- Added TypeDoc infrastructure and published API reference documentation.
- Added HATEOAS action support with form submission.
- Added POST request deduplication.

### Changed

- Simplified the HTTP method API with direct resource methods.
- Standardized POST options and header handling across actions and relations.
- Migrated resource primitives used by React integrations toward the Suspense-based read flow.

### Fixed

- Resolved typecheck issues in package test configuration.

## [1.3.0] - 2026-01-03

### Changed

- Added typed request methods to `ResourceRelation`.
- Simplified link handling and navigation variable passing.
- Passed form and query variables through the resource navigation chain.
- Removed the obsolete `cacheDependencies` feature and `withTemplateParameters` method.

## [1.2.6] - 2026-01-02

### Changed

- Aligned the core package with the React infinite-scroll release.

## [1.2.5-ge] - 2026-01-02

### Fixed

- Preserved item relation context when following pagination links.

## [1.2.4] - 2026-01-02

### Changed

- Encapsulated direct link access behind query and navigation methods.

## [1.2.3] - 2026-01-01

### Changed

- Aligned resource package version for the React `useInfiniteCollection` and `ResourceProvider` release.

## [1.2.2] - 2025-12-31

### Changed

- Extracted schema types to a dedicated module and updated imports.
- Improved async resource resolution and `getForm` typing.
- Updated README roadmap content.

## [1.2.1] - 2025-12-19

### Changed

- Version bump and README maintenance release.

## [1.2.0] - 2025-12-19

### Added

- Added validation coverage for HAL template-based form generation.

### Changed

- Updated README content for the 1.2 release.

## [1.1.2] - 2025-12-18

### Changed

- Transferred repository metadata to the JayClock GitHub organization/user namespace.

## [1.1.1] - 2025-12-18

### Added

- Added repository metadata to the package manifest.

## [1.1.0] - 2025-12-18

### Added

- Initial public `@hateoas-ts/resource` release after renaming from `@hateoas/resource`.
- Added the type-safe HATEOAS client, resource navigation, HAL/HAL-FORMS parsing, typed links and collections.
- Added configurable HTTP methods, request options, middleware, caching, URL template expansion, form validation, and state factories.
- Added documentation and examples for core resource usage.
