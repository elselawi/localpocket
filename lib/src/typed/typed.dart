/// Typed data-model layer implementation.
///
/// Phase 1 (definition core): `FieldDef` and its per-kind subclasses, the
/// `Fields` factory object, `StoreDef` with its memoized `schema` property and
/// `verify()`, and the reference-identity `TypedStoreRegistry`.
///
/// Phase 2 (CRUD + rows): `Draft` (typed writes), `TypedRow` (call-form
/// reads), `TypedCollection`, and `db.store`/`tx.store` on both the native
/// engine and the web facade.
///
/// Phase 3 (queries + search + watch): `Cond`, `TypedQuery`, `TypedPage`,
/// typed search hits, and delegated query watch streams.
///
/// Phase 5 keeps native/web adapter surfaces hidden from this consumer
/// entrypoint and enforces descriptor/draft-only public writes.
///
/// Layering: this directory imports only the public core surface
/// (`package:localpocket/localpocket.dart`), never `dart:io`,
/// `package:http`, or the pocketbase adapter — enforced by
/// `tool/offline_lint.dart`.
library;

export 'field_def.dart';
export 'store_def.dart';
export 'registry.dart';
export 'draft.dart';
export 'typed_row.dart';
export 'cond.dart';
export 'typed_query.dart';
export 'typed_search.dart' hide TypedSearchSurface;
export 'typed_collection.dart' hide TypedStoreSurface;
