import 'package:localpocket/src/internal/raw_surface.dart';

import 'db_open_native.dart' if (dart.library.js_interop) 'db_open_web.dart';

/// Opens the playground database with the platform-appropriate settings.
/// - Native: `:memory:` + [MemoryBlobStore].
/// - Web: a persistent named DB (OPFS) backed by the worker's blob store.
Future<LocalPocket> openPlaygroundDb(
  List<CollectionSchema> stores, {
  FieldCipher? cipher,
}) => openPlatformDb(stores, cipher: cipher);
