/// The destination public API surface.
///
/// One import: open a [LocalPocket], declare stores as [StoreDef]s, and work
/// with typed [Store]s, [Row] snapshots, [QuerySpec]s, and [Transaction]s.
/// This library is exported from the package barrel — it IS the application
/// API.
library;

export 'conflicts.dart';
export 'events.dart';
export 'files.dart';
export 'local_pocket.dart';
export 'options.dart';
export 'query.dart';
export 'row.dart';
export 'store.dart';
export 'sync.dart';
export 'transaction.dart';

// The token bridge types back `PocketBaseSyncOptions`; re-exported here so
// the sync attachment is usable from this one import. They live on the
// kernel sync seam — the boundary's vocabulary — not in any one adapter.
export '../kernel/sync/sync_backend.dart' show Token, TokenProvider;
