# Final naming table and manifest/callback policy

## 1. Final naming table

The single vocabulary the final API speaks (§6). Any public type not in this
table at Phase 9 is a gate failure.

| Final name | Role | Replaces |
|---|---|---|
| `LocalPocket` | one concrete database handle; `LocalPocket.open(LocalPocketOptions)`; private constructor | raw + web conditional pair, `TypedPocket`, `openTyped` |
| `LocalPocketOptions` / `BootstrapOptions` / `EncryptionConfig` | open-time configuration; `BootstrapOptions` is deployment config only (worker asset path, wasm path, request timeout) | scattered `open(...)` named params |
| `Store<S>` | typed handle for one store: CRUD, query, search, watch, `files`, `conflicts` | `Collection`, `TypedCollection` |
| `StoreDef<S>` | the only schema source; compiles to `RuntimeSchema` + `SchemaManifest` at open | `CollectionSchema` + registry + `verifyRegisteredSchema` |
| `FieldDef<S,V>` + field operators | descriptors = schema = typed accessors | `Field` |
| `Write<S>` / `Writes` | typed write values (no record maps) | raw map payloads |
| `Row<S>` | immutable typed snapshot; `row(field)` call syntax; `FieldNotSelectedError` for projected-out fields; never implements `Map` | `TypedRow`, raw `Map` records |
| `QuerySpec<S>` / `SearchSpec<S>` | immutable read requests, lowered to `QueryIR` | `QueryBuilder`, `SearchBuilder` |
| `Page<S>` | complete facts: items, `hasNext`, `hasPrev`, `nextCursor`, `prevCursor`, `next()`, `prev()` | raw `Page`, web page reconstruction |
| `Cursor<S>` | opaque, persistable-as-string, rejects stale shape/schema/version | base64 JSON cursor bag |
| `Transaction` | the only transaction type; context-bound store views | `Tx`, `WebTx` |
| `PocketBaseSync` | one sync host; `start()` owns realtime; `status`, `authRequired` streams | `SyncEngine`, `PocketBaseSyncHost`, `TypedSync` |
| `PocketBaseSyncOptions` / `TokenProvider` | sync config; page-side token bridge | `SyncConfig` |
| `Files<S>`, `FileRef`, `FileSource` | store-scoped file service; identical on native and web | `LocalPocketFiles` |
| `StoreConflicts<S>` | list/get/watch/resolve/accept-local/accept-remote | `Conflicts` |
| `DatabaseChange` / typed record events | derived from one internal `CommittedChange` | `RecordChangeEvent` + coarse `ChangeSet` streams |
| `CapabilitiesSnapshot` | authoritative, from the active runtime | `SqliteCapabilities` as public truth |
| `Limits` (incl. `Limits.unbounded`) | bound sentinels | unchanged |
| `DurabilityClass` | transaction durability knob | unchanged |
| Error hierarchy (`LocalPocketError` …) | one public hierarchy on both runtimes | current `src/core/errors.dart` names (kept) + new typed members |

Naming rules enforced by the Phase 9 public API gate (§14.1):

- no ordinary public semantic type prefixed `Typed`, `Raw`, `Web`, `Native`;
- no ordinary CRUD signature accepting/returning `Map<String, Object?>`;
- no public `QueryPlan`, `QueryBuilder`, `SearchBuilder`, `Collection`,
  `CollectionSchema`, `Database`, `DatabaseExecutor`;
- exactly one supported barrel, one public `LocalPocket`.

## 2. Manifest policy (§9)

**Three objects, one direction of knowledge:**

1. `StoreDef<S>` — public declaration (descriptors, indexes, FTS, validator
   rules, conflict policy description, attachment mapping, migration
   descriptions).
2. `RuntimeSchema` — private compiled metadata (prepared codecs, physical
   columns, executable indexes). Never exported.
3. `SchemaManifest` — immutable, versioned, wire-safe data. Used by the worker
   open handshake, persisted-definition checks, and migration decisions.

**Manifest contents** — every behavior-affecting value: format version; store
name + schema version; ordered fields with names/kinds/nullability/required;
enum wire values; references + FK policy; encryption mode/format (identity
only, never key material); indexes + scopes; FTS fields/fuzzy/normalization;
archive + file options; attachment mappings; validator rule descriptors;
built-in conflict policy descriptors; migration operation descriptors;
query IR/compiler version; behavior-altering feature flags.

**Fingerprint** is computed over canonical serialized bytes of the complete
manifest — never over an incomplete legacy object.

**Rejection rules** (all before DDL, migration, or worker registration):

- unsupported callback/option → `UnsupportedSchemaFeatureError` naming store,
  schema version, feature, reason;
- duplicate store names, duplicate fields, foreign descriptors → named errors;
- forward version, malformed manifest, missing fields → typed errors;
- **same-version behavior-affecting manifest change → rejected**; the app must
  bump the store version and provide a valid migration description.

**Migration language** is a closed data description (rename field, remove
field, set default, copy field, change enum wire value, closed primitive
conversion, normalize object/list shape). Existing destructive-recovery
behavior (backup, resume markers, stale `__new_` cleanup, refusal after
completed backup, typed errors) is preserved unchanged.

## 3. Callback policy (Rule 4)

A Dart closure cannot cross a worker boundary. The final schema therefore
exposes **no** arbitrary validator, resolver, document-migration, or
migration-transform callbacks. Any executable behavior must be:

1. a built-in serializable data description (validator rules, conflict policy
   descriptors, migration operations), or
2. a closed strategy implemented by the kernel, or
3. an explicit command initiated by the application (e.g. conflict
   resolution), or
4. rejected before opening the database.

Concrete consequences (already recorded in `public_api_inventory.md`):

- `CustomResolver` / `ConflictResolver` closures → DELETE; built-in policies
  become manifest descriptors; custom decisions become `ResolveConflict`
  commands.
- `DocumentMigration` / `applyDocumentMigrations` map-transform callbacks →
  DELETE; replaced by closed migration operations.
- Field validators → serializable `ValidatorRule` descriptors
  (`ValidatorSpec.rules([...])`).
- Legacy schemas using unsupported callbacks fail with
  `UnsupportedSchemaFeatureError` **before any database is considered open**.

## 4. Test-hook policy

`TestHooks` stays (no return to fragile DB spies) but is imported from `src/`
by tests, not exported from the final barrel. Fault-injection points added by
the refactor (worker timeout, malformed messages, codec faults) extend
`TestHooks` or the loopback harness rather than production branching.
