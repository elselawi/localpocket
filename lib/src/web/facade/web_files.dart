import 'dart:async';
import 'dart:typed_data';

import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/runtime/remote_runtime_client.dart';
import 'package:localpocket/src/web/facade/facade_host.dart';

/// {@template localpocket.web_local_pocket_files}
/// Page-facing file attachment and blob lifecycle API over the worker-owned
/// store. Mirrors the native `LocalPocketFiles` public surface; every method
/// rides the typed contract: metadata RPCs are single requests, uploads use
/// bounded chunk sessions, and downloads stream under caller-driven credit so
/// the worker never pushes a whole buffered file across the boundary.
///
/// Object-URL materialization is intentionally NOT here: `URL.createObjectURL`
/// is window-only work (see `web_blob_object_url.dart`).
/// {@endtemplate}
class WebLocalPocketFiles {
  /// Creates the web files facade over [_pocket].
  ///
  /// {@macro localpocket.web_local_pocket_files}
  WebLocalPocketFiles.ins(this._pocket);

  final WebFacadeHost _pocket;

  RemoteRuntimeClient get _runtime => _pocket.contractRuntime;

  /// Whether the worker-owned blob store is durable (OPFS-backed). `false`
  /// when OPFS is unavailable in the worker and blobs fall back to volatile
  /// memory that does not survive a worker reload.
  Future<bool> get isBlobStorageDurable async =>
      (await _runtime.send(const contract.StorageStatusRequest())).durable;

  /// Lists file references attached to [recordId] in [field].
  Future<List<Map<String, Object?>>> list({
    required String store,
    required String recordId,
    String field = 'imgs',
  }) async {
    final res = await _runtime.send(
      contract.FilesListRequest(store: store, recordId: recordId, field: field),
    );
    return [for (final ref in res.refs) ref.toJson()];
  }

  /// Attaches [byteArray] (or [bytes]) to a record, streaming via bounded
  /// chunks so no single request carries a large byte list.
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
    if (expectedSize != null && expectedSize != payload.length) {
      throw StateError(
          'Size mismatch: expected $expectedSize but got ${payload.length}');
    }
    final session = await _runtime.send(contract.FileBeginUploadRequest(
      store: store,
      recordId: recordId,
      size: payload.length,
      field: field,
      name: name ?? 'blob.bin',
      expectedSha256: expectedSha256,
      allowVolatileBlobs: allowVolatileBlobs,
    ));

    try {
      // Chunk at the limit the kernel accepted for this session so no
      // request ever exceeds the worker's bounded-chunk quota.
      final chunkBytes = session.maxChunkBytes;
      for (var offset = 0; offset < payload.length; offset += chunkBytes) {
        final end = (offset + chunkBytes < payload.length)
            ? offset + chunkBytes
            : payload.length;
        await _runtime.send(contract.FileChunkRequest(
          session: session.session,
          chunk: Uint8List.fromList(payload.sublist(offset, end)),
        ));
      }
      final ref = await _runtime
          .send(contract.FileFinishRequest(session: session.session));
      return ref.ref!.toJson();
    } catch (_) {
      // Best-effort abort prevents the kernel's upload registry from
      // retaining a partial session after a chunk or finish failure.
      try {
        await _runtime
            .send(contract.FileAbortRequest(session: session.session));
      } catch (_) {}
      rethrow;
    }
  }

  /// Opens the bytes for the selected file reference.
  ///
  /// The worker streams the file under a credit window: chunk events are
  /// consumed (and credited back) as they arrive, so the worker never buffers
  /// and pushes the whole file at once. This method assembles the full payload
  /// because its public contract returns bytes.
  Future<Uint8List> open({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  }) async {
    final received = BytesBuilder();
    final done = Completer<void>();
    Object? failure;
    var streamId = '';
    // Chunk events can overtake the open reply (they travel a different
    // channel), so events for a not-yet-known stream are buffered briefly.
    final buffered = <contract.FileChunkEvent>[];

    void consume(contract.FileChunkEvent event) {
      if (event.error != null) {
        failure = StateError(event.error!);
      } else {
        received.add(event.chunk);
      }
      if (event.last) {
        if (!done.isCompleted) done.complete();
      } else {
        // Credit the consumed bytes back so the worker keeps streaming.
        unawaited(_runtime
            .send(contract.FileCreditRequest(
              stream: event.stream,
              bytes: event.chunk.length,
            ))
            .catchError((Object _) => const contract.OkResult()));
      }
    }

    late final StreamSubscription<contract.Event> sub;
    sub = _runtime.events.listen((event) {
      if (event is! contract.FileChunkEvent) return;
      if (streamId.isEmpty) {
        buffered.add(event);
      } else if (event.stream == streamId) {
        consume(event);
      }
    });
    try {
      final opened = await _runtime.send(contract.FileOpenRequest(
        store: store,
        recordId: recordId,
        field: field,
        index: index,
        refId: refId,
      ));
      streamId = opened.stream;
      for (final event in buffered) {
        if (event.stream == streamId) consume(event);
      }
      buffered.clear();
      if (!done.isCompleted) await done.future;
    } finally {
      unawaited(sub.cancel());
    }
    final failure_ = failure;
    if (failure_ != null) throw failure_;
    return received.toBytes();
  }

  /// Removes the selected file reference from a record.
  Future<void> remove({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  }) =>
      _runtime.send(contract.FileRemoveRequest(
        store: store,
        recordId: recordId,
        field: field,
        index: index,
        refId: refId,
      ));

  /// Garbage-collects unreferenced blobs and stale temporary uploads.
  Future<int> gc({
    Duration blobGrace = const Duration(days: 7),
    Duration tmpGrace = const Duration(hours: 24),
  }) async {
    final res = await _runtime.send(contract.FileGcRequest(
      blobGraceMs: blobGrace.inMilliseconds,
      tmpGraceMs: tmpGrace.inMilliseconds,
    ));
    return res.cleaned;
  }

  /// Evicts synced blobs until storage usage is at most [maxBytes].
  Future<int> enforceStorageCap({required int maxBytes}) async {
    final res = await _runtime
        .send(contract.EnforceStorageCapRequest(maxBytes: maxBytes));
    return res.evicted;
  }
}
