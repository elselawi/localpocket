import 'package:localpocket/localpocket.dart';

/// Native open: uses an in-memory DB plus an in-memory blob store so the
/// file-attachment demo needs no filesystem plugins.
Future<LocalPocket> openPlatformDb(
  List<StoreDef<Object?>> stores, {
  EncryptionConfig? encryption,
}) => LocalPocket.open(
  LocalPocketOptions(
    path: ':memory:',
    stores: stores,
    encryption: encryption,
    blobStore: MemoryBlobStore(),
  ),
);
