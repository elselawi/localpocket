---
name: "Dart Semantic Tools routing"
description: "Use when writing, editing, refactoring, renaming, moving, or analyzing Dart or Flutter code in this repo — renaming a symbol, extracting a method or widget, organizing imports, fixing analyzer diagnostics, reading an unfamiliar class, running tests, pub, or build_runner. Routes structural Dart changes to the dartSemantic_* language-service tools instead of grep, whole-file reads, and text edits."
applyTo: "**/*.dart"
---

# Route Dart work through the language service

`lib/`, `test/`, `tool/`, and `example/` are all Dart. **A structural change to a
`.dart` file goes through a `dartSemantic_*` tool.** Text edits are for prose and
data — never for symbols, imports, or refactorings.

## Step 0 — activate the tool group first

Most of these tools **are not in your tool list until you activate their group**.
If a tool below is not callable, call its activator first, then call the tool:

| Activator | Unlocks |
| --- | --- |
| `activate_dart_semantic_analysis_tools` | `dartSemantic_workspaceSymbols`, `dartSemantic_navigate`, `dartSemantic_references`, `dartSemantic_hover` |
| `activate_dart_refactoring_tools` | `dartSemantic_codeActions`, `dartSemantic_applyCodeAction` |
| `activate_dart_extraction_tools` | `dartSemantic_extractMethod`, `dartSemantic_extractWidget` |
| `activate_dart_file_management_tools` | `dartSemantic_moveFile` |
| `activate_dart_quality_assurance_tools` | `dartSemantic_test`, `dartSemantic_qualityGate` |

Skipping this step is the main reason an agent gives up on these tools and
hand-edits instead. Activating a group is cheap — do it as soon as you know the
kind of change you are making.

## Route the task

Each tool is addressable as `#reference` or by its full name; both are listed
because your tool list shows the full name.

| Task | Tool |
| --- | --- |
| Learn a package's SDK constraints, deps, platforms | `#dartProjectInfo` — `dartSemantic_projectInfo` |
| Understand an unfamiliar file | `#dartOutline` — `dartSemantic_documentSymbols` **(not** a whole-file read**)** |
| Find a symbol across the workspace | `#dartSymbols` — `dartSemantic_workspaceSymbols` **(not** grep**)** |
| Jump to a definition / implementation | `#dartGoTo` — `dartSemantic_navigate` |
| Find every usage of a symbol | `#dartReferences` — `dartSemantic_references` **(not** grep**)** |
| Get an inferred type, docs, or signature | `#dartHover` — `dartSemantic_hover` |
| See what the language service can do here | `#dartCodeActions` — `dartSemantic_codeActions` |
| Apply a fix or refactoring | `#dartRefactor` — `dartSemantic_applyCodeAction` |
| Rename a symbol | `#dartRename` — `dartSemantic_renameSymbol` **(never** search-and-replace**)** |
| Extract a method / a widget | `#dartExtractMethod` / `#dartExtractWidget` |
| Move or rename a file | `#dartMoveFile` — `dartSemantic_moveFile` |
| Fix unused or unsorted imports | `#dartOrganizeImports` — `dartSemantic_organizeImports` |
| Apply every quick fix in one file | `#dartFixAll` — `dartSemantic_fixAll` |
| Sweep lint across the project | `#dartFix` — `dartSemantic_dartFix` (dryRun first) |
| Format | `#dartFormat` — `dartSemantic_format` |
| Read live diagnostics | `#dartDiagnostics` — `dartSemantic_diagnostics` |
| Sweep the whole project | `#dartAnalyze` — `dartSemantic_analyze` |
| Run tests | `#dartTest` — `dartSemantic_test` |
| `pub get` / `add` / `remove` / `upgrade` | `#dartPub` — `dartSemantic_pubCommand` |
| Code generation | `#dartBuildRunner` — `dartSemantic_buildRunner` |
| Full pre-commit pipeline | `#dartQualityGate` — `dartSemantic_qualityGate` |

## Hard rules

- **NEVER** rename a symbol with search-and-replace or a text edit → `#dartRename`.
- **NEVER** rewrite an import block by hand → `#dartOrganizeImports`.
- **NEVER** hand-write a fix the analyzer offers → `#dartFixAll` or `#dartRefactor`.
- **NEVER** reflow code by hand → `#dartFormat`.
- **NEVER** grep for a Dart identifier when `#dartSymbols`, `#dartReferences`, or
  `#dartOutline` can answer it. Grep is a fallback, not a first move.
- **ALWAYS** finish a mutation with `#dartDiagnostics` (`waitForAnalysis: true`)
  and drive the count to **0 problems** — errors, warnings, and infos.
- **ALWAYS** run `#dartPub get` after editing `pubspec.yaml`, and
  `#dartBuildRunner` after touching a file that feeds code generation.
- **ALWAYS** run the repo's own verification for this project: `dart analyze lib
  test tool example`, then `dart test`, then the asset gates when
  `lib/src/kernel/**`, `lib/src/contract/**`, or `assets/**` changed (see
  `AGENTS.md`).

## When a tool fails

The semantic tools report clean, specific failures (`invalid identifier`, `no
extract action`, `missing Flutter SDK`). Do not retry the same call with nudged
coordinates on real code, and do not silently fall back to a text edit. Check
that the target line is actually code, then relocate the change deliberately —
or tell the user which tool failed and why.
