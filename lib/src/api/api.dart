/// The destination public API surface, under construction.
///
/// One import: open a [LocalPocket], declare stores as [StoreDef]s, and work
/// with typed [Store]s, [Row] snapshots, [QuerySpec]s, and [Transaction]s.
/// This library is not yet exported from the package barrel — it flips over
/// at the barrel switch, which is why the compile fixtures import it
/// directly for now.
library;

export 'events.dart';
export 'local_pocket.dart';
export 'options.dart';
export 'query.dart';
export 'row.dart';
export 'store.dart';
export 'transaction.dart';
