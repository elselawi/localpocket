import 'package:localpocket/localpocket.dart';

/// Native open: uses an in-memory DB plus a [MemoryBlobStore] so the
/// file-attachment demo needs no filesystem plugins.
Future<LocalPocket> openPlatformDb(
  List<CollectionSchema> stores, {
  FieldCipher? cipher,
}) => LocalPocket.open(
  path: ':memory:',
  stores: stores,
  platform: PlatformProfile.native,
  blobStore: MemoryBlobStore(),
  fieldCipher: cipher,
);
