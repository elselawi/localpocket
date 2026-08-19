import 'package:localpocket/localpocket.dart';

import 'sync_driver.dart';
import 'sync_factory_native.dart'
    if (dart.library.js_interop) 'sync_factory_web.dart';

/// Creates the platform-appropriate [SyncDriver] for the currently-open
/// database. Uses conditional imports so web-only and native-only APIs are
/// never compiled together.
Future<SyncDriver> createSyncDriver(LocalPocket db) => createSyncDriverImpl(db);
