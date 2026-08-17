import 'dart:async';
import 'dart:js_interop';
import 'package:web/web.dart' as web;

/// Helper to load a package asset as a blob: URI.
Future<String> loadAssetAsBlobUrl(String assetPath, String mimeType) async {
  // Resolve against document base URI
  final baseHref = web.document.baseURI;
  final url = Uri.parse(baseHref).resolve(assetPath).toString();

  final response = await web.window.fetch(url.toJS).toDart;
  if (!response.ok) {
    throw StateError(
        'Failed to fetch asset "$assetPath": ${response.status} ${response.statusText}');
  }
  final arrayBuffer = await response.arrayBuffer().toDart;
  final blob =
      web.Blob([arrayBuffer].toJS, web.BlobPropertyBag(type: mimeType));
  return web.URL.createObjectURL(blob);
}
