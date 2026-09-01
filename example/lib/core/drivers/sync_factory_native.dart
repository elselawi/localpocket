import 'package:localpocket/src/internal/raw_surface.dart';

import 'native_sync_driver.dart';
import 'sync_driver.dart';

/// Native implementation: in-process [SyncEngine].
Future<SyncDriver> createSyncDriverImpl(LocalPocket db) async =>
    NativeSyncDriver(db);
