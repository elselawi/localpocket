/// Typed data-model layer implementation.
///
/// Layering: this directory imports only the public core surface
/// (`package:localpocket/localpocket.dart`), never `dart:io`,
/// `package:http`, or the pocketbase adapter — enforced by
/// `tool/offline_lint.dart`.
library;

export 'field_def.dart';
export 'schema_helpers.dart';
export 'store_def.dart';
export 'registry.dart';

// These schema value types appear in the helper signatures and named
// arguments. Re-export the core declarations so a typed-only import can use
// custom index scopes and FTS normalization without a second import.
export 'package:localpocket/localpocket.dart'
    show FtsNormalization, FtsSpec, IndexScope, IndexSpec;
export 'draft.dart';
export 'typed_row.dart';
export 'cond.dart';
export 'typed_query.dart';
export 'typed_search.dart' hide TypedSearchSurface;
export 'typed_collection.dart' hide TypedStoreSurface;
