import 'dart:async';

import 'package:localpocket/src/files/native_blob_store_platform.dart';

/// Web-compile smoke: if dart:io leaked into the web build this would fail to
/// compile for JS. The conditional export must select the web stub.
void main() async {
  final store = NativeBlobStore('/web/root');
  await store
      .put(const Stream.empty())
      // UnsupportedError is expected on web.
      .catchError((Object e) => Future.value('ignored'));
}
