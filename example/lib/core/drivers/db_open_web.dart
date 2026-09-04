import 'package:localpocket/localpocket.dart';

/// Web open: persistent named DB (OPFS) with the engine in a worker; the
/// worker owns a real blob store automatically, so no blobStore is passed.
Future<LocalPocket> openLocalPocketDb(
  List<StoreDef<Object?>> stores, {
  EncryptionConfig? encryption,
}) => LocalPocket.open(
  LocalPocketOptions(
    path: 'localpocket_demo',
    stores: stores,
    encryption: encryption,
  ),
);
