import 'dart:typed_data';

import 'package:localpocket/src/web/facade/facade_host.dart';
import 'package:localpocket/src/web/protocol.dart';

/// Page-facing file attachment and blob lifecycle API over the worker-owned
/// store. Mirrors the native `LocalPocketFiles` public surface; every method
/// dispatches a metadata RPC (or bounded-chunk upload) that delegates to the
/// engine's `pocket.files` in the worker.
///
/// Object-URL materialization is intentionally NOT here: `URL.createObjectURL`
/// is window-only work (see `web_blob_object_url.dart`).
class WebLocalPocketFiles {
  /// Creates the web files facade over [_pocket].
  WebLocalPocketFiles.ins(this._pocket);

  final WebFacadeHost _pocket;

  /// Whether the worker-owned blob store is durable (OPFS-backed). `false`
  /// when OPFS is unavailable in the worker and blobs fall back to volatile
  /// memory that does not survive a worker reload.
  Future<bool> get isBlobStorageDurable async {
    final res = await _pocket.send(WireOp.fileStorageStatus);
    if (res is! Map) return false;
    final durable = res['durable'];
    return durable is bool && durable;
  }

  /// Lists file references attached to [recordId] in [field].
  Future<List<Map<String, Object?>>> list({
    required String store,
    required String recordId,
    String field = 'imgs',
  }) =>
      _pocket.filesList(store: store, recordId: recordId, field: field);

  /// Attaches [byteArray] (or [bytes]) to a record, streaming via bounded
  /// chunks so no single custom request carries a large byte list.
  ///
  /// When the worker's blob store is volatile (OPFS unavailable), the upload
  /// fails with a typed error unless [allowVolatileBlobs] is `true` — see
  /// [isBlobStorageDurable].
  Future<Map<String, Object?>> attach({
    required String store,
    required String recordId,
    Stream<List<int>>? bytes,
    List<int>? byteArray,
    String field = 'imgs',
    String? name,
    int? expectedSize,
    String? expectedSha256,
    bool allowVolatileBlobs = false,
  }) async {
    final List<int> payload;
    if (byteArray != null) {
      payload = byteArray;
    } else if (bytes != null) {
      final collected = <int>[];
      await for (final chunk in bytes) {
        collected.addAll(chunk);
      }
      payload = collected;
    } else {
      throw ArgumentError('Either bytes or byteArray must be provided');
    }
    return _pocket.filesUpload(
      store: store,
      recordId: recordId,
      bytes: payload,
      field: field,
      name: name ?? 'blob.bin',
      expectedSize: expectedSize,
      expectedSha256: expectedSha256,
      allowVolatileBlobs: allowVolatileBlobs,
    );
  }

  /// Opens the bytes for the selected file reference.
  Future<Uint8List> open({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  }) =>
      _pocket.filesOpen(
          store: store,
          recordId: recordId,
          field: field,
          index: index,
          refId: refId);

  /// Removes the selected file reference from a record.
  Future<void> remove({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  }) =>
      _pocket.filesRemove(
          store: store,
          recordId: recordId,
          field: field,
          index: index,
          refId: refId);

  /// Garbage-collects unreferenced blobs and stale temporary uploads.
  Future<int> gc({
    Duration blobGrace = const Duration(days: 7),
    Duration tmpGrace = const Duration(hours: 24),
  }) =>
      _pocket.filesGc(blobGrace: blobGrace, tmpGrace: tmpGrace);

  /// Evicts synced blobs until storage usage is at most [maxBytes].
  Future<int> enforceStorageCap({required int maxBytes}) =>
      _pocket.filesEnforceStorageCap(maxBytes: maxBytes);
}
