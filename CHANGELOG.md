# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2026-08-07

### Changed

- Updated Geist Sans & Geist Mono font assets to **v1.7.2** (latest release).

### Added

- **Geist Pixel** typeface family with 5 stylistic variants:
  - `Circle` (`non.geist/pixel/circle`)
  - `Grid` (`non.geist/pixel/grid`)
  - `Line` (`non.geist/pixel/line`)
  - `Square` (`non.geist/pixel/square`)
  - `Triangle` (`non.geist/pixel/triangle`)
  - All-in-one import (`non.geist/pixel`)
- Added universal TypeScript declaration `types/index.d.ts` and subpath exports declarations.

## [2.0.0] - 2024-10-18

### Changed

- **Breaking Change**: Renamed font-family names to CSS-safe identifiers:
  - `Geist Variable` → `Geist-Variable`
  - `Geist Mono Variable` → `GeistMono-Variable`
- Updated core typefaces to **Geist v1.6.0**.

### Added

- Standalone Italic typeface imports: `non.geist/italic` and `non.geist/mono-italic`.

## [1.5.1] - 2024-07-15

### Added

- Updated font assets to Geist 1.5.1 release.
- Added support for standalone italic font files.

## [1.4.0] - 2024-05-10

### Changed

- Updated font assets to Geist 1.4.0 release.

## [1.0.0] - 2023-10-24

### Added

- Initial release of `non.geist` packaging Vercel's Geist Sans and Geist Mono fonts as standard `@font-face` CSS for non-Next.js web applications.
