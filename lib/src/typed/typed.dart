/// Typed data-model layer implementation.
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
export 'write.dart';
export 'typed_row.dart';
export 'typed_model.dart';
export 'typed_pocket.dart';
export 'cond.dart';
export 'typed_query.dart';
// The raw record-map seam interfaces (TypedStoreSurface / TypedQuerySurface /
// TypedSearchSurface) stay hidden: the public typed surface is
// descriptor-based, and the seams are implemented by the package's own
// native/web adapters, not by applications.
export 'typed_search.dart' hide TypedSearchSurface;
export 'typed_collection.dart' hide TypedStoreSurface;
