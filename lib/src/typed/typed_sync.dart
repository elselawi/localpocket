import 'package:localpocket/src/adapters/pocketbase/backend.dart';
import 'typed_pocket.dart';

/// The typed PocketBase backend for native wiring: a [PBBackend] whose
/// store list comes from [db]'s manifest — never re-listed at the call
/// site.
///
/// On web the [SyncEngine] runs inside the worker and its backend is built
/// there from wire args, so this class is native-only as an engine
/// dependency. For ONE wiring that works on both platforms use
/// `attachPocketBaseSync` (see `PocketBaseSyncEngine` in
/// `sync_engine_platform.dart`).
final class PocketBaseSync extends PBBackend {
  /// Creates a PocketBase synchronization backend.
  PocketBaseSync({
    required super.baseUrl,
    required super.tokenProvider,
    required this.db,
    super.identity,
    super.maxBatch,
    super.maxPage,
    super.realtimeCollection,
    super.realtimeDebounce,
    super.transport,
  });

  /// TypedPocket
  final TypedPocket db;

  @override
  List<String> get storeNames => db.stores.map((x) => x.name).toList();
}
