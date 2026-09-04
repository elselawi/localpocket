import 'package:localpocket/localpocket.dart';

import 'db_open_native.dart' if (dart.library.js_interop) 'db_open_web.dart';

/// Opens the playground database with the platform-appropriate settings.
/// - Native: `:memory:` + an in-memory blob store.
/// - Web: a persistent named DB (OPFS) backed by the worker's blob store.
Future<LocalPocket> openPlaygroundDb(
  List<StoreDef<Object?>> stores, {
  EncryptionConfig? encryption,
}) => openLocalPocketDb(stores, encryption: encryption);
