import 'package:localpocket/src/internal/raw_surface.dart';

/// Web open: persistent named DB (OPFS) with the engine in a worker; the
/// worker owns a real blob store automatically, so no blobStore is passed.
Future<LocalPocket> openPlatformDb(
  List<CollectionSchema> stores, {
  FieldCipher? cipher,
}) => LocalPocket.open(
  path: 'localpocket_demo',
  stores: stores,
  platform: PlatformProfile.web,
  fieldCipher: cipher,
);
