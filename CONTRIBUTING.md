# Contributing to LocalPocket

Thanks for taking the time to contribute. This file is the short version for
humans; **[AGENTS.md](AGENTS.md)** is the long version and is the authority on
the repository's invariants. Read it before changing anything — it records the
rules that are machine-enforced (breaking them fails the test suite) and the
ones that only exist as convention (breaking them fails silently in
production).

## Getting set up

```sh
dart pub get
dart test                    # full suite, ~2.5k tests, ~15 s
dart analyze lib test tool example
```

Two extra steps are needed for a subset of the work:

- **Web worker changes.** `assets/localpocket_worker.js` embeds the compiled
  kernel, so it goes stale on every `lib/src/kernel/**` or
  `lib/src/contract/**` change. Recompile it with
  `dart run tool/web_worker_compile.dart`, copy `build/web/localpocket_worker.js`
  over `assets/localpocket_worker.js`, refresh
  `assets/localpocket_worker.js.sha256`, then run both asset gates. The test
  suite does not catch this for every worker behavior.
- **Live PocketBase tests.** The `real`-tagged suites need a local credential
  file. Copy `test/support/secret.dart.example` to
  `test/support/secret.dart` and fill it in, then run
  `dart test --tags real --run-skipped -j 1 test/e2e/real/`.

## Before opening a pull request

Run the full gate, which is what CI runs:

```sh
dart run tool/release.dart --no-coverage
```

For a fast loop, the individual pieces are:

```sh
dart format --output=none --set-exit-if-changed lib test tool example
dart analyze lib test tool example
dart test
dart test --tags gate --run-skipped -j 1 test/release/ test/platform/web/
```

Your change is ready when `dart analyze` reports no errors or warnings, `dart
format` reports no changes, and the suites are green. Do not disable a failing
gate to get a merge — if a change legitimately moves a budget or a snapshot,
update it in the same pull request and say why.

## What a good change looks like

- **Tests come with the change.** Add cases to the relevant existing file in
  `test/`; a new test file needs a reason to exist, since `test/` mirrors
  `lib/src/` one directory per layer.
- **Facade behavior is verified on every runtime.** The conformance suites in
  `test/conformance/` drive the same bodies through the direct runtime, the
  looping codec client, and the worker harness. A feature that only works on
  the direct runtime is a bug — extend the conformance body, not just a unit
  test.
- **Errors stay typed.** Caller-facing failures use the sealed
  `LocalPocketError` family; anything malformed crossing the wire throws
  `WireException`. Never let a raw `StateError` or a cast escape a boundary.
- **Wire values are never silently downgraded.** Absent means "documented
  default"; present-but-wrong-typed is a typed error.
- **Docs track code.** Public types use `{@template}`/`{@macro}` doc macros, the
  README samples must compile, and the documented trade-offs are stated as
  decisions rather than papered over.
- **User-visible changes get a CHANGELOG entry** under `Unreleased`.

## Reporting bugs and requesting features

Use the issue tracker on
[github.com/elselawi/localpocket/issues](https://github.com/elselawi/localpocket/issues).
For a bug, a failing test or a minimal reproduction is worth more than a long
description. Security problems go through [SECURITY.md](SECURITY.md) instead —
never a public issue.

## License

By contributing you agree that your contribution is licensed under the
[MIT License](LICENSE).
