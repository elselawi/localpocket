<!-- dart-semantic-tools:begin -->
# Dart/Flutter agent instructions

When working with Dart or Flutter code in this project, use the **Dart Semantic Tools**
extension (`#`-referenced tools, prefixed `dartSemantic_`) instead of raw text editing.
The language service is the source of truth — grep and manual edits are the fallback,
not the primary tool.

## Key rules

- **Start unfamiliar tasks with** `#dartProjectInfo` — package name, SDK constraints,
  dependencies, and platform targets before writing code.
- **Understand before editing:** use `#dartOutline` (single file) and `#dartSymbols`
  (workspace-wide) instead of reading whole files or grepping for identifiers.
- **Refactor semantically:**
  - Renames → `#dartRename` (dryRun first for symbols referenced in many files).
    Never use search-and-replace for a rename.
  - Structural changes → `#dartCodeActions` first to see what the language service
    offers (with stable indexes), then `#dartRefactor` by index/title.
  - Extract Method / Extract Widget with a chosen name → `#dartExtractMethod` /
    `#dartExtractWidget` (these never prompt, unlike the editor commands).
    Use `dryRun=true` to preview edits before applying.
- **Never hand-edit what cleanup tools do better:**
  - `#dartOrganizeImports` — unused/sorted imports
  - `#dartFixAll` — every available quick-fix in one file
  - `#dartFix` — project-wide `dart fix --apply` lint cleanup (dryRun first)
  - `#dartFormat` — official formatter
- **Verify after mutating:** `#dartDiagnostics` with `waitForAnalysis=true` after
  edits, `#dartAnalyze` for a project sweep, `#dartTest` after behavior-relevant
  changes, `#dartBuildRunner` after touching files that feed code generation, and
  `#dartPub get` after any `pubspec.yaml` change.
- **Ship gate:** finish refactoring work with `#dartQualityGate` and keep going
  until the verdict is `ALL GATES PASSED`.
- **Failure handling:** when a semantic tool reports a clean failure (invalid
  identifier, no extract action, missing Flutter SDK), do not retry the same call
  with tweaked coordinates on real code — verify the target line is actually code
  first, and relocate intentionally rather than extracting nearby statements.

## Notes

- Extract tools drive a headless `dart language-server`; they are safe to run
  back-to-back within the same file.
- `dartSemantic_moveFile` participates in import organization for open documents,
  but verify unopened files with `#dartDiagnostics` after moves.
- `dartSemantic_workspaceSymbols` anchors symbol ranges at doc-comment starts;
  lines can differ by a few lines from the symbol keyword itself.
<!-- dart-semantic-tools:end -->
