import 'dart:async';

import 'package:localpocket/src/platform/web/worker/blob_store.dart';

/// Web-compile smoke: if dart:io leaked into the web build this would fail to
/// compile for JS. The web worker blob store (OPFS + volatile fallback) is the
/// web-appropriate store; constructing it and streaming a put retains the
/// worker blob surface in the web output.
void main() async {
  final store = WebBlobStore();
  await store
      .put(const Stream.empty())
      // OPFS is absent under a compile-only probe; any outcome is fine.
      .catchError((Object e) => Future.value('ignored'));
}
