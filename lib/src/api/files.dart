/// Store-scoped file attachments and blob lifecycle over the runtime
/// contract.
///
/// `Store.files` is the record-facing file service: attach bytes (as a
/// bounded [FileSource]), list attachments, stream downloads, and remove
/// references. Uploads use bounded chunk sessions and downloads a
/// credit-windowed [FileChunkEvent] flow — no single request or reply ever
/// carries a whole file across the runtime boundary.
library;

import 'dart:async';
import 'dart:typed_data';

import '../contract/contract.dart';
import '../kernel/files/attachment_field.dart';
import '../runtime/runtime_client.dart';
import '../schema/store_def.dart';

/// One immutable file reference: the typed view of the contract's
/// [FileRefData] — a wire-safe snapshot of one `lp_file_refs` row. Bytes
/// live in the runtime's blob store; metadata lives in the kernel.
final class FileRef {
  /// Creates a file reference.
  const FileRef({
    required this.refId,
    required this.store,
    required this.recordId,
    required this.field,
    required this.hash,
    required this.state,
    this.remoteName,
    this.nextRetryAt = 0,
    this.attemptCount = 0,
    this.lastError,
  });

  /// Maps the contract's wire snapshot onto the typed view.
  factory FileRef.fromData(FileRefData data) => FileRef(
        refId: data.refId,
        store: data.store,
        recordId: data.recordId,
        field: data.field,
        hash: data.hash,
        state: data.state,
        remoteName: data.remoteName,
        nextRetryAt: data.nextRetryAt,
        attemptCount: data.attemptCount,
        lastError: data.lastError,
      );

  /// Stable local file-reference id.
  final String refId;

  /// Store containing the owning record.
  final String store;

  /// Record containing the attachment.
  final String recordId;

  /// Attachment field name.
  final String field;

  /// Content hash used to locate the blob.
  final String hash;

  /// Remote filename, when known.
  final String? remoteName;

  /// Lifecycle state: pending upload, synced, pending remove, remote-only,
  /// or orphaned.
  final String state;

  /// Persisted retry deadline (epoch milliseconds).
  final int nextRetryAt;

  /// Number of attempted file operations.
  final int attemptCount;

  /// Most recent file-operation error.
  final String? lastError;

  @override
  bool operator ==(Object other) =>
      other is FileRef && other.refId == refId && other.state == state;

  @override
  int get hashCode => Object.hash(refId, state);

  @override
  String toString() => 'FileRef($refId, $store/$recordId/$field, $state)';
}

/// {@template localpocket.file_source}
/// A bounded attachment source: the bytes to attach plus the optional
/// declared length and display name.
///
/// The [stream] variant is for callers that already hold the bytes as a
/// stream — declare [length] when you know it (the FACADE rejects a stream
/// whose actual size disagrees with the declared one, before the finish
/// request is sent). The [bytes] variant wraps an in-memory byte list and
/// always knows its length.
/// {@endtemplate}
final class FileSource {
  const FileSource._(this._chunks, {this.length, this.name});

  /// A stream-backed source. [length] is the declared byte count, used to
  /// begin the upload session; when omitted the bytes are collected first so
  /// the session can be opened with the true size.
  ///
  /// {@macro localpocket.file_source}
  factory FileSource.stream(
    Stream<List<int>> chunks, {
    int? length,
    String? name,
  }) =>
      FileSource._(chunks, length: length, name: name);

  /// A byte-list source.
  ///
  /// {@macro localpocket.file_source}
  factory FileSource.bytes(List<int> bytes, {String? name}) =>
      FileSource._(Stream.value(List<int>.of(bytes)),
          length: bytes.length, name: name);

  final Stream<List<int>> _chunks;

  /// The source bytes, in order.
  Stream<List<int>> get chunks => _chunks;

  /// Declared byte count, when known.
  final int? length;

  /// The display name reported to the storage backend.
  final String? name;
}

/// {@template localpocket.files}
/// {@template localpocket.files}
/// File attachments and blob lifecycle for one store.
///
/// Obtain one from `store.files`. Every method sends one typed command (or,
/// for [attach], a bounded chunk session) through the runtime; the same
/// surface behaves identically on native and web.
///
/// The record must exist before an attachment is made — the kernel keeps the
/// record-first dependency so an owning record synchronizes before its
/// attachment.
/// {@endtemplate}
/// {@endtemplate}
final class Files<S extends StoreDef<S>> {
  /// Internal: created by the store's `files` getter.
  ///
  /// {@macro localpocket.files}
  Files.internal({
    required RuntimeClient runtime,
    required this.def,
    required void Function() ensureOpen,
  })  : _runtime = runtime,
        _ensureOpen = ensureOpen;

  /// The canonical store definition this view is bound to.
  final S def;

  final RuntimeClient _runtime;
  final void Function() _ensureOpen;

  /// The store's name.
  String get name => def.name;

  /// Whether the runtime-owned blob store is durable. `false` means the
  /// bytes vanish on a process/worker restart (volatile in-memory fallback);
  /// metadata would survive but the attachments would be effectively
  /// ephemeral.
  Future<bool> get isBlobStorageDurable async =>
      (await _send(const StorageStatusRequest())).durable;

  /// The store's declared attachment field, or the shared default. This is
  /// the default `field:` for [attach]/[list] — declared once on the
  /// [StoreDef] (`attachmentField`), never re-stated at call sites.
  String get defaultField => def.attachmentField ?? attachmentFieldDefault;

  /// Attaches [source] to [recordId] in [field] and returns the new file
  /// reference (or the existing one when the kernel deduplicates an
  /// identical attachment).
  ///
  /// Bytes stream in bounded chunks: with [FileSource.length] declared,
  /// chunks cross the boundary as they are consumed and memory stays bounded
  /// no matter how large the file. Without a declared length the source is
  /// buffered first to learn its size. A volatile blob store (see
  /// [isBlobStorageDurable]) fails the attach with a `StateError` unless
  /// [allowVolatileBlobs] is `true` — byte loss on restart becomes an
  /// explicit choice.
  Future<FileRef> attach({
    required String recordId,
    required FileSource source,
    String? field,
    bool allowVolatileBlobs = false,
  }) async {
    _ensureOpen();
    final resolvedField = field ?? defaultField;
    final declared = source.length;
    if (declared != null) {
      return _attachStreamed(
        recordId: recordId,
        source: source,
        field: resolvedField,
        declared: declared,
        allowVolatileBlobs: allowVolatileBlobs,
      );
    }
    final builder = BytesBuilder(copy: false);
    await for (final chunk in source.chunks) {
      builder.add(chunk);
    }
    final payload = builder.takeBytes();
    final session = await _send(FileBeginUploadRequest(
      store: name,
      recordId: recordId,
      size: payload.length,
      field: resolvedField,
      name: source.name ?? 'blob.bin',
      allowVolatileBlobs: allowVolatileBlobs,
    ));
    try {
      final chunkBytes = session.maxChunkBytes;
      for (var offset = 0; offset < payload.length; offset += chunkBytes) {
        final end = offset + chunkBytes < payload.length
            ? offset + chunkBytes
            : payload.length;
        await _send(FileChunkRequest(
          session: session.session,
          chunk: Uint8List.sublistView(payload, offset, end),
        ));
      }
      final ref = await _send(FileFinishRequest(session: session.session));
      return FileRef.fromData(ref.ref!);
    } catch (_) {
      // Best-effort abort so the kernel does not retain a partial upload
      // session after a chunk or finish failure.
      try {
        await _send(FileAbortRequest(session: session.session));
      } catch (_) {}
      rethrow;
    }
  }

  /// Streaming upload path: [declared] lets the begin request carry the
  /// size and every chunk flow as the source produces it.
  Future<FileRef> _attachStreamed({
    required String recordId,
    required FileSource source,
    required String field,
    required int declared,
    required bool allowVolatileBlobs,
  }) async {
    final session = await _send(FileBeginUploadRequest(
      store: name,
      recordId: recordId,
      size: declared,
      field: field,
      name: source.name ?? 'blob.bin',
      allowVolatileBlobs: allowVolatileBlobs,
    ));
    try {
      final chunkBytes = session.maxChunkBytes;
      // Flush full [chunkBytes] chunks as they accumulate; the tail goes
      // out before finish. Only one bounded buffer ever exists.
      var pending = BytesBuilder(copy: false);
      var pendingLength = 0;
      var total = 0;

      Future<void> flushReady() async {
        while (pendingLength >= chunkBytes) {
          final buf = pending.takeBytes();
          pending = BytesBuilder(copy: false);
          pendingLength = 0;
          var offset = 0;
          while (buf.length - offset >= chunkBytes) {
            await _send(FileChunkRequest(
              session: session.session,
              chunk: Uint8List.sublistView(buf, offset, offset + chunkBytes),
            ));
            offset += chunkBytes;
            total += chunkBytes;
          }
          if (buf.length > offset) {
            final rest = Uint8List.sublistView(buf, offset);
            pending.add(rest);
            pendingLength += rest.length;
          }
        }
      }

      await for (final chunk in source.chunks) {
        final bytes = chunk is Uint8List ? chunk : Uint8List.fromList(chunk);
        pending.add(bytes);
        pendingLength += bytes.length;
        await flushReady();
      }
      // Flush the sub-chunk tail.
      if (pendingLength > 0) {
        final buf = pending.takeBytes();
        await _send(FileChunkRequest(
          session: session.session,
          chunk: Uint8List.sublistView(buf, 0, buf.length),
        ));
        total += buf.length;
        pendingLength = 0;
      }
      if (total != declared) {
        throw ValidationException(
            'Size mismatch: declared $declared but got $total');
      }
      final ref = await _send(FileFinishRequest(session: session.session));
      return FileRef.fromData(ref.ref!);
    } catch (_) {
      try {
        await _send(FileAbortRequest(session: session.session));
      } catch (_) {}
      rethrow;
    }
  }

  /// The file references attached to [recordId] in [field], in kernel order.
  /// [field] defaults to the store's declared attachment field.
  Future<List<FileRef>> list({
    required String recordId,
    String? field,
  }) async {
    _ensureOpen();
    final result = await _send(FilesListRequest(
      store: name,
      recordId: recordId,
      field: field ?? defaultField,
    ));
    return [for (final ref in result.refs) FileRef.fromData(ref)];
  }

  /// Streams the bytes of [ref] back as a bounded, credit-windowed stream:
  /// the kernel pushes chunks only as fast as the caller consumes them, and
  /// the stream ends after the terminal chunk event (a failed stream
  /// surfaces the kernel's error).
  ///
  /// With `fetch: true`, a `remote_only` reference — for example one evicted
  /// by `enforceStorageCap` — is re-downloaded through the sync engine's
  /// file lane before the stream opens, so the call succeeds where plain
  /// [open] would throw [RemoteOnlyError]. Already-local bytes are never
  /// re-fetched. Requires a started sync host (fails typed otherwise), and
  /// a ref with no recorded remote filename stays undownloadable (typed
  /// error from the download).
  Future<Stream<List<int>>> open(FileRef ref, {bool fetch = false}) async {
    _ensureOpen();
    if (fetch) {
      // Hydrate first so the open below sees local bytes. `download` is a
      // no-op for refs whose bytes are already local (see its contract).
      await download(ref);
    }
    // Chunk events can overtake the open reply (they travel a different
    // channel); buffer events for the not-yet-known stream briefly.
    final buffered = <FileChunkEvent>[];
    var streamId = '';
    var closed = false;
    // Credits are held while the consumer is paused (or has not attached
    // yet) so the kernel window — not this buffer — bounds memory.
    var paused = true;
    var pendingCredit = 0;

    void flushCredits() {
      if (pendingCredit <= 0 || closed) return;
      final bytes = pendingCredit;
      pendingCredit = 0;
      unawaited(_credit(streamId, bytes));
    }

    // ignore: close_sinks
    final controller = StreamController<List<int>>(
      onPause: () => paused = true,
      onResume: () {
        paused = false;
        flushCredits();
      },
      onListen: () {
        paused = false;
        flushCredits();
      },
    );

    void consume(FileChunkEvent event) {
      if (event.error != null) {
        // The kernel download failure crossed as a description string on the
        // chunk event; surface it as a typed StorageError so callers can
        // catch it like any other storage failure.
        controller.addError(StorageError(event.error!));
        if (!controller.isClosed) unawaited(controller.close());
        closed = true;
        return;
      }
      if (event.chunk.isNotEmpty) {
        controller.add(event.chunk);
        pendingCredit += event.chunk.length;
      }
      if (event.last) {
        closed = true;
        if (!controller.isClosed) unawaited(controller.close());
      } else if (!paused) {
        // Credit the consumed bytes back so the kernel keeps streaming —
        // only when the consumer is actually keeping up.
        flushCredits();
      }
    }

    late final StreamSubscription<Event> sub;
    sub = _runtime.events.listen((event) {
      if (event is! FileChunkEvent) return;
      if (closed) return;
      if (streamId.isEmpty) {
        buffered.add(event);
      } else if (event.stream == streamId) {
        consume(event);
      }
    });
    controller.onCancel = () async {
      await sub.cancel();
      // Explicit close: release the kernel's credit window and subscription
      // instead of leaving it paused forever. Idempotent — the kernel
      // answers Ok for unknown/finished streams.
      if (streamId.isNotEmpty && !closed) {
        try {
          await _send(FileCloseRequest(stream: streamId));
        } catch (_) {}
      }
    };
    try {
      final opened = await _send(FileOpenRequest(
        store: name,
        recordId: ref.recordId,
        field: ref.field,
        refId: ref.refId,
      ));
      streamId = opened.stream;
      for (final event in buffered) {
        if (event.stream == streamId) consume(event);
      }
      buffered.clear();
    } catch (error) {
      await sub.cancel();
      if (!controller.isClosed) await controller.close();
      rethrow;
    }
    return controller.stream;
  }

  /// Ensures the bytes behind [ref] are available locally, re-downloading
  /// them from the backend when the reference is `remote_only` (for example
  /// after `enforceStorageCap` evicted them), and returns the post-download
  /// reference (state `synced` on success).
  ///
  /// When the bytes are already local the call short-circuits: no network
  /// I/O, no state change. A reference with no recorded remote filename can
  /// never be downloaded and fails typed ([ValidationException]).
  ///
  /// Requires a started sync host: downloads ride the sync engine's file
  /// lane (the same lane a pull uses). Offline downloads fail with a typed
  /// [TransientNetworkError] and can be retried after connectivity returns.
  Future<FileRef> download(FileRef ref) async {
    _ensureOpen();
    final result = await _send(FileDownloadRequest(
      store: name,
      recordId: ref.recordId,
      field: ref.field,
      refId: ref.refId,
    ));
    return FileRef.fromData(result.ref!);
  }

  /// Removes [ref] from its record. The reference is parked as
  /// `pending_remove`; the kernel sweeps the blob when the removal settles.
  Future<void> remove(FileRef ref) => _send(FileRemoveRequest(
        store: name,
        recordId: ref.recordId,
        field: ref.field,
        refId: ref.refId,
      ));

  /// Garbage-collects unreferenced blobs and stale temporary uploads, and
  /// returns how many were cleaned.
  Future<int> gc({
    Duration blobGrace = const Duration(days: 7),
    Duration tmpGrace = const Duration(hours: 24),
  }) async {
    _ensureOpen();
    final result = await _send(FileGcRequest(
      blobGraceMs: blobGrace.inMilliseconds,
      tmpGraceMs: tmpGrace.inMilliseconds,
    ));
    return result.cleaned;
  }

  /// Evicts synced blobs (LRU) until stored attachment bytes are at most
  /// [maxBytes], and returns how many were evicted.
  Future<int> enforceStorageCap({required int maxBytes}) async {
    _ensureOpen();
    final result = await _send(EnforceStorageCapRequest(maxBytes: maxBytes));
    return result.evicted;
  }

  Future<void> _credit(String stream, int bytes) async {
    try {
      await _send(FileCreditRequest(stream: stream, bytes: bytes));
    } catch (_) {
      // Best effort: the kernel settles download state on close anyway.
    }
  }

  Future<R> _send<R extends Result>(Request<R> request) {
    _ensureOpen();
    return _runtime.send(request);
  }
}
