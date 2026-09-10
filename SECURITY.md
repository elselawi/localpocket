# Security Policy

LocalPocket stores data locally and can synchronize it to a PocketBase server.
Failures in its encryption, its sync merge, or its web worker boundary can
expose, corrupt, or silently drop user data — reports in those areas are taken
seriously and prioritized.

## Supported versions

The latest published minor release receives security fixes. Pre-1.0, fixes land
on the most recent release line rather than being backported.

| Version | Supported |
| ------- | --------- |
| 0.2.x   | Yes       |
| < 0.2   | No        |

## Reporting a vulnerability

**Do not open a public issue for a security problem.**

Use GitHub's private vulnerability reporting on
[github.com/elselawi/localpocket](https://github.com/elselawi/localpocket/security/advisories/new).
That channel is visible only to the maintainers until an advisory is published.

Please include:

- the affected version and platform (native, web worker, or both);
- a minimal reproduction, or the sequence of operations that triggers it;
- what an attacker gains (data disclosure, corruption, bypassed validation,
  remote code execution) and what access they need;
- whether the issue is already public anywhere.

## What to expect

- **Acknowledgement** within 3 business days.
- **Assessment** — severity, affected versions, and a fix plan — within 10
  business days for confirmed issues.
- **Credit** in the release notes and the advisory, unless you ask to stay
  anonymous.

Please give us a reasonable window to ship a fix before publishing details. If a
release is blocked by a dependency, that will be stated in the advisory.

## Scope

In scope:

- field-level and whole-database encryption (key derivation, nonce handling,
  ciphertext integrity);
- the web worker boundary: request/response envelope validation, and anything
  that lets one store's or one account's data reach another;
- sync identity and scope isolation (`PocketBaseSyncOptions.identity`) and
  idempotency of push operations;
- authorization or input-validation bypasses in the public API;
- dependency vulnerabilities that are reachable through this package.

Out of scope:

- anything requiring an already-compromised device, process, or Dart isolate;
- data exposed by the PocketBase server's own configuration;
- the absence of encryption for data you never marked encrypted;
- denial of service through deliberately huge local datasets.

## Hardening notes for consumers

- `syncStart` requires a stable per-account `identity`; sharing one across
  accounts collapses sync scopes.
- Passing a `syncBackendFactory` to the web runtime is rejected by design — the
  worker configures its own backend, because the worker boundary carries data,
  never code.
- Verify the shipped `assets/sqlite3.wasm` and `assets/localpocket_worker.js`
  against their published `.sha256` manifests if you serve them yourself.
