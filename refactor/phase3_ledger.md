# Phase 3 ledger — the complete schema manifest (2026-08-30)

Plan §12 Phase 3 / §9: make worker/native schema equivalence meaningful.

## What was built

### `SchemaManifest` (`lib/src/core/schema_manifest.dart`)
- Immutable, versioned (`formatVersion` 1), wire-safe description of a store.
- `definition` = the COMPLETE behavior map: everything in the legacy
  `CollectionSchema.toJson()` **plus** the pieces §4.1 showed were lost:
  - `conflictPolicy` descriptors (`editsUnarchive`, `missingRemote`,
    `hasCollectionResolver`, sorted `fieldOverrideNames`) — previously absent
    from the transport entirely;
  - per-migration `hasTransform` descriptors;
  - `documentMigrationVersions`;
  - `hasValidatorCallback`;
  - `queryCompilerVersion`.
- `unsupportedFeatures` names every executable feature that cannot cross a
  worker boundary (`conflictResolver`, `fieldResolvers`, `migrationTransform`,
  `documentMigrations`, `validatorCallback`) — behavior is flagged, never
  silently dropped.
- `fingerprint` = SHA-256 over canonical serialized manifest bytes.
- `fromJson` rejects malformed manifests (`SchemaRegistrationError`) and newer
  formats (`SchemaTooNewError`).
- `RuntimeSchema`: the compiled runtime metadata remains `StoreTable`
  (+ `CompiledSchema`); it now carries the compiled `manifest` per store.

### Open-time enforcement (all BEFORE any DDL/migration/mutation)
In `KernelDatabase.registerStore`:
1. **Duplicate store names rejected** (§4.17) — the old "first table wins,
   last definition wins" mismatch (which made writes through the last handle
   fail) is now `SchemaRegistrationError` before any DDL.
2. **Web/worker runtime rejects unsupported executable features** with the new
   typed `UnsupportedSchemaFeatureError` (in `api/errors.dart` hierarchy).
   Native keeps executing callbacks until Phase 8 removes them — but they are
   now flagged in the manifest, and every flag is transported.
3. **Same-version behavior change rejected** (§4.16): the manifest is
   persisted per store (`lp_meta` key `schema_manifest:<store>`) and compared
   on every reopen. Equal version + different fingerprint → typed rejection
   ("bump the store version and provide a migration"). Identical reopen →
   accepted. Version bump → accepted (manifest refreshed after migration).
   Legacy manifest-less databases ADOPT the current manifest (and a corrupt
   persisted manifest degrades to adoption so a store can recover).

### Worker open handshake (§12 Phase 3 step 10)
- The page sends `manifestFingerprints` with `open`; the worker compiles its
  own manifest from the received schema and rejects any mismatch with
  `ProtocolEnvelopeException('Schema manifest mismatch …')` **before**
  registering. A callback-carrying schema cannot even cross the wire (the
  JSON loses the callback → immediate mismatch), so the page can never run a
  silently reduced schema.
- Re-sending an already-registered store with a different definition is
  rejected.
- The facade fail-fasts on unsupported features before any wire traffic.
- Worker capabilities remain authoritative (unchanged handshake).

### Typed `StoreDef` (§12 Phase 3 step 1)
`StoreDef` remains descriptor-based; its one executable escape hatch
(`validator` callback) and `documentMigrations` are now manifest-flagged and
web-rejected. Full `ValidatorSpec.rules` descriptors land with the destination
API (Phase 5+); native callback removal is Phase 8.

## Behavior changes (intentional, per plan §9.4)

| Old (pinned in Phase 1) | New |
|---|---|
| same-version definition change reopens with stale columns | rejected: `SchemaRegistrationError` |
| duplicate store names: last definition wins, first table wins | rejected before any DDL |
| resolver/transform/policy invisible to fingerprints | manifest fingerprints are honest; legacy `schema.toJson` fingerprint remains (deleted in Phase 6) |

Pins updated: `open_failure_test.dart` (×2), `schema/compile_test.dart`,
Phase 1 `schema_transport_test.dart` (§4.1 honesty added; §4.16 → rejection +
stability + version-bump-allowed; §4.17 → rejection). Fixture fixes for tests
that deliberately crafted same-version drift: `row_test.dart` (corrupt-row
fixtures now use the legacy adoption path by clearing the persisted manifest),
`normal_durability_restart_test.dart` (reopen now uses the matching
`keepUnsyncedArchives` schema — the drift it relied on was a real-schema bug),
`fts_fuzzy_normalize_integration_test.dart` (FTS config changes now bump the
version, as §9.4 requires; rebuild still fires).

## New tests (20)

- `test/refactor/phase3/manifest_test.dart` — completeness per field kind,
  policy descriptors, JSON round-trip + fingerprint stability, malformed/
  newer-format rejection, unsupported-feature enumeration, per-callback
  fingerprint honesty, web rejection before DDL, web acceptance of clean
  manifests, native interim allowance, duplicate rejection.
- `test/web/phase3_manifest_handshake_test.dart` — matching fingerprints
  accepted, mismatched rejected, callback schemas cannot cross the wire,
  re-sent drifted store rejected, capabilities authoritative, fingerprint
  wire round-trip.

## Gate evidence

- [x] Native and worker open the same supported manifest (fingerprint
      handshake enforced).
- [x] Unsupported behavior fails before any schema mutation.
- [x] Migration backup/resume/destructive-rebuild behavior unchanged
      (`test/core/migrate` green).
- [x] Full hermetic suite `+2634 ~83`, all passed (was +2614).
- [x] `dart analyze lib test tool` clean; `local_web_gate` PASS;
      `api_snapshot` PASS.
