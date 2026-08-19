import 'package:localpocket/localpocket.dart';

import 'native_sync_driver.dart';
import 'sync_driver.dart';

/// Native implementation: in-process [SyncEngine].
Future<SyncDriver> createSyncDriverImpl(LocalPocket db) async =>
    NativeSyncDriver(db);
