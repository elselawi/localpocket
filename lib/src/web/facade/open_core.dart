/// Pure-Dart decision logic for the web `LocalPocket.open()` bootstrap: asset
/// fallback resolution, persistence probing, and capability reconciliation.
///
/// The browser-facing mechanics (fetching assets, `navigator.storage.persist`,
/// spawning the worker) stay in the JS-bound facade; everything testable here
/// is wire-Dart so it can be unit-tested on the VM with injectable loaders and
/// snapshots.
library;

import 'dart:async';

import '../../core/capabilities.dart';
import 'web_storage_capabilities.dart';

/// An asset resolved to a URL by [resolveAssetAsBlobUrl].
class ResolvedAsset {

  const ResolvedAsset({required this.url, required this.fetched});
  /// The URL to use (a blob URL when a fetch succeeded, otherwise the
  /// [lastResort] plain path).
  final String url;

  /// Whether [url] was produced by a successful fetch (and should therefore
  /// be revoked when the facade closes). `false` for the plain-path fallback.
  final bool fetched;
}

/// Resolves an asset path to a URL, trying [primary] then each [fallbacks]
/// entry in order through [load] (e.g. `loadAssetAsBlobUrl`), finally falling
/// back to the packaged [lastResort] plain path when every fetch failed.
///
/// The returned [ResolvedAsset] records whether the URL came from a successful
/// fetch so the caller only revokes (and only registers) real blob URLs.
Future<ResolvedAsset> resolveAssetAsBlobUrl({
  required Future<String> Function(String path, String mimeType) load,
  required String primary,
  required String mimeType,
  required List<String> fallbacks,
  required String lastResort,
}) async {
  for (final candidate in [primary, ...fallbacks]) {
    try {
      return ResolvedAsset(url: await load(candidate, mimeType), fetched: true);
    } catch (_) {
      // Try the next candidate.
    }
  }
  return ResolvedAsset(url: lastResort, fetched: false);
}

/// Probes the browser's persistent-storage promise, treating an unanswered
/// prompt (timeout) or any error as "not persistent" rather than hanging the
/// caller forever.
///
/// [persist] is injectable so the timeout/error fallback is testable on the
/// VM; the production facade passes `navigator.storage.persist()`.
///
/// The result is driven by callbacks on the [persist] future (not by awaiting
/// it in the function body) so the timeout timer can resolve the returned
/// future even when [persist] never completes; errors are folded to `false`.
/// A failing [persist] future is always caught here and never surfaces as an
/// unhandled error.
Future<bool> requestPersistenceWithFallback(
  Future<bool> Function() persist, {
  Duration timeout = const Duration(seconds: 10),
}) async {
  final completer = Completer<bool>();
  final timer = Timer(timeout, () {
    if (!completer.isCompleted) completer.complete(false);
  });

  final Future<bool> persistFuture;
  try {
    persistFuture = persist();
  } catch (_) {
    timer.cancel();
    return false;
  }

  unawaited(persistFuture.then<bool>(
    (result) {
      if (!completer.isCompleted) completer.complete(result);
      return result;
    },
    onError: (Object e, StackTrace st) {
      if (!completer.isCompleted) completer.complete(false);
      return false;
    },
  ).whenComplete(() => timer.cancel()));

  return completer.future;
}

/// Reconciles the facade's hard-coded capability snapshot against the live
/// capability map reported by the worker.
///
/// Live values override the initial snapshot; missing (or wrong-typed) keys
/// fall back to the snapshot. A null remote (or a malformed one) keeps the
/// snapshot untouched. This function never throws: open() must not fail just
/// because capability discovery glitched.
({SqliteCapabilities capabilities, WebStorageCapabilities storage})
    reconcileOpenCapabilities({
  required SqliteCapabilities capabilities,
  required WebStorageCapabilities storage,
  required Map<String, Object?>? remote,
}) {
  if (remote == null) {
    return (capabilities: capabilities, storage: storage);
  }
  String? stringOrNull(Object? v) => v is String ? v : null;
  bool? boolOrNull(Object? v) => v is bool ? v : null;
  return (
    capabilities: SqliteCapabilities(
      sqliteVersion:
          stringOrNull(remote['sqliteVersion']) ?? capabilities.sqliteVersion,
      hasStrict: boolOrNull(remote['hasStrict']) ?? capabilities.hasStrict,
      walSupported:
          boolOrNull(remote['walSupported']) ?? capabilities.walSupported,
      hasFts5: boolOrNull(remote['hasFts5']) ?? capabilities.hasFts5,
      platform: PlatformProfile.web,
    ),
    storage: WebStorageCapabilities(
      storage: stringOrNull(remote['storage']) ?? storage.storage,
      durable: boolOrNull(remote['durable']) ?? storage.durable,
      persistent: boolOrNull(remote['persistent']) ?? storage.persistent,
      multiTabStorage:
          boolOrNull(remote['multiTabStorage']) ?? storage.multiTabStorage,
      multiTabSync: boolOrNull(remote['multiTabSync']) ?? storage.multiTabSync,
      worker: boolOrNull(remote['worker']) ?? storage.worker,
    ),
  );
}
