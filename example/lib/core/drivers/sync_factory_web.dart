import 'package:localpocket/src/internal/raw_surface.dart';

import 'sync_driver.dart';
import 'web_sync_driver.dart';

/// Web implementation: drives the engine that lives inside the worker.
Future<SyncDriver> createSyncDriverImpl(LocalPocket db) async =>
    WebSyncDriver(db);
