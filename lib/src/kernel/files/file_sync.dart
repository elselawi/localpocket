import 'dart:async';
import 'dart:convert';
import '../database_adapter.dart';
import '../errors.dart';

import '../change_bus.dart';
import '../errors.dart' show RecordNotFoundException, ValidationException;
import '../file_service.dart' show FileRef;
import '../ids.dart';
import '../local_pocket.dart';
import 'attachment_field.dart';
import 'blob_store.dart';
import '../sync/sync_backend.dart';
import '../sync/sync_config.dart';
import '../sync/sync_tables.dart';

/// {@template localpocket.file_sync_report}
/// A summary of the work performed by a file synchronization pass.
/// {@endtemplate}
class FileSyncReport {
  /// Creates a report for a file synchronization pass.
  ///
  /// {@macro localpocket.file_sync_report}
  const FileSyncReport({
    this.uploaded = 0,
    this.downloaded = 0,
    this.removed = 0,
    this.hadError = false,
  });

  /// Number of files uploaded during the sync.
  final int uploaded;

  /// Number of files downloaded during the sync.
  final int downloaded;

  /// Number of files removed during the sync.
  final int removed;

  /// Whether one or more file operations failed during the sync.
  final bool hadError;
}

/// {@template localpocket.file_sync_lane}
/// The dedicated file synchronization lane.
///
/// Runs after the record push lane (record-first ordering).
/// {@endtemplate}
class FileSyncLane {
  /// Creates a file synchronization lane.
  ///
  /// {@macro localpocket.file_sync_lane}
  FileSyncLane({
    required this.pocket,
    required this.backend,
    required this.config,
    this.blobStore,
  });

  /// Local database and record store used by the lane.
  final LocalPocket pocket;

  /// Backend used to upload, download, and remove remote files.
  final SyncBackend backend;

  /// Synchronization settings, including batching and retry timing.
  final SyncConfig config;

  /// Store for local blob contents, if file synchronization is enabled.
  final BlobStore? blobStore;

  int _nowMs() => config.now();

  /// Synchronizes file operations for all stores.
  Future<FileSyncReport> syncFiles() async {
    final bs = blobStore;
    if (bs == null) return const FileSyncReport();

    var uploaded = 0;
    var downloaded = 0;
    var removed = 0;
    var hadError = false;

    // 1. Drain pending file ops from lp_op_queue
    final ops = await pocket.opQueue.drain(limit: config.maxBatch);
    for (final op in ops) {
      try {
        if (op.kind == OpQueueKind.fileUpload) {
          final success = await _processUploadOp(op, bs);
          if (success) {
            await pocket.opQueue.markDone(op.opId);
            uploaded++;
          }
        } else if (op.kind == OpQueueKind.fileRemove) {
          final success = await _processRemoveOp(op);
          if (success) {
            await pocket.opQueue.markDone(op.opId);
            removed++;
          }
        }
      } catch (e) {
        hadError = true;
        // Transient failure: keep the op retryable with a persisted backoff
        // deadline. drain() only selects ops whose deadline has passed, so
        // backoff is honoured across calls and across app restarts.
        final attempts = op.attemptCount + 1;
        final delay = config.delayFor(attempts);
        await pocket.opQueue.markFailed(op.opId, e.toString(),
            attempts: attempts, nextRetryAt: _nowMs() + delay.inMilliseconds);
      }
    }

    // 2. Download remote_only files that are queued or have prefetch enabled
    for (final store in pocket.storeNames) {
      final schema = pocket.requireTable(store).schema;
      if (schema.prefetchFiles) {
        final pendingDownloads = await pocket.db.query(
          'lp_file_refs',
          where: "store = ? AND state = 'remote_only'",
          whereArgs: [store],
        );
        for (final row in pendingDownloads) {
          try {
            final refId = row['ref_id']! as String;
            final recordId = row['record_id']! as String;
            final remoteName = row['remote_name'] as String?;
            if (remoteName != null) {
              await downloadFile(
                store: store,
                recordId: recordId,
                refId: refId,
                remoteName: remoteName,
              );
              downloaded++;
            }
          } catch (e) {
            hadError = true;
          }
        }
      }
    }

    return FileSyncReport(
      uploaded: uploaded,
      downloaded: downloaded,
      removed: removed,
      hadError: hadError,
    );
  }

  Future<bool> _processUploadOp(OpQueueRow op, BlobStore bs) async {
    final payload = jsonDecode(op.payloadJson) as Map<String, Object?>;
    final refId = payload['ref_id']! as String;
    final hash = payload['hash']! as String;
    final name = payload['name'] as String? ?? '$hash.bin';

    // Verify blob exists locally
    if (!await bs.exists(hash)) {
      throw StateError('Blob for hash $hash not found in store');
    }

    final size = await bs.size(hash);
    if (size == null) {
      throw StateError('Blob size for hash $hash is unavailable');
    }

    // Check if remote already has a file with the same hash prefix.
    RemoteRecord? remoteRec;
    try {
      remoteRec = await backend.getRecord(op.recordId);
    } catch (_) {}

    String? adoptedFilename;
    if (remoteRec != null) {
      final hashPrefix = hash.substring(0, hash.length.clamp(0, 10));
      for (final existingName in remoteRec.attachments) {
        if ((hashPrefix.isNotEmpty && existingName.startsWith(hashPrefix)) ||
            existingName.startsWith(name)) {
          adoptedFilename = existingName;
          break;
        }
      }
    }

    String remoteFilename;
    if (adoptedFilename != null) {
      remoteFilename = adoptedFilename;
    } else {
      // Streamed multipart upload through the backend's attachment
      // modifier — the adapter owns the wire encoding.
      final updatedRec = await backend.updateRecordFilesStream(
        id: op.recordId,
        uploads: {
          name: StreamFileUpload(
            filename: name,
            length: size,
            streamFactory: () => bs.open(hash),
          ),
        },
      );
      // Adopt returned filename
      remoteFilename = updatedRec.attachments.isNotEmpty
          ? updatedRec.attachments.last
          : name;
    }

    await pocket.transaction((tx) async {
      await tx.executor.update(
        'lp_file_refs',
        {
          'state': 'synced',
          'remote_name': remoteFilename,
        },
        where: 'ref_id = ?',
        whereArgs: [refId],
      );
      tx.addChange(ChangeSet(op.store, {op.recordId}));
    });

    return true;
  }

  Future<bool> _processRemoveOp(OpQueueRow op) async {
    final payload = jsonDecode(op.payloadJson) as Map<String, Object?>;
    final refId = payload['ref_id']! as String;
    final remoteName = payload['remote_name'] as String?;
    final hash = payload['hash']! as String;

    if (remoteName != null) {
      // Removal request — the adapter encodes its own wire form (the
      // PocketBase adapter sends the attachment-remove modifier).
      await backend.updateRecordFiles(
        id: op.recordId,
        removeNames: [remoteName],
      );
    }

    await pocket.transaction((tx) async {
      final exec = tx.executor;
      await exec
          .delete('lp_file_refs', where: 'ref_id = ?', whereArgs: [refId]);
      await exec.execute(
        'UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?',
        [hash],
      );
      tx.addChange(ChangeSet(op.store, {op.recordId}));
    });

    return true;
  }

  /// Downloads a file for a remote record ref into the BlobStore.
  Future<String> downloadFile({
    required String store,
    required String recordId,
    required String refId,
    required String remoteName,
    String? thumb,
  }) async {
    final bs = blobStore;
    if (bs == null) {
      throw StateError('No BlobStore configured');
    }

    final byteStream = await backend.downloadFile(
      recordId: recordId,
      filename: remoteName,
      thumb: thumb,
    );

    final hash = await bs.put(byteStream);
    final size = (await bs.size(hash)) ?? 0;
    final now = _nowMs();

    await pocket.transaction((tx) async {
      final exec = tx.executor;
      await upsertBlobReference(exec, hash: hash, size: size, now: now);

      await exec.update(
        'lp_file_refs',
        {
          'hash': hash,
          'state': 'synced',
          'remote_name': remoteName,
        },
        where: 'ref_id = ?',
        whereArgs: [refId],
      );
      tx.addChange(ChangeSet(store, {recordId}));
    });

    return hash;
  }

  /// Re-hydrates one attachment's bytes on demand and returns the
  /// post-download reference.
  ///
  /// A reference whose blob is already present locally short-circuits —
  /// no network I/O — so repeated downloads are free. Otherwise the bytes
  /// are fetched from the backend through [downloadFile] and the ref
  /// settles to `synced`.
  ///
  /// Throws [RecordNotFoundException] when the record field holds no
  /// reference, and [ValidationException] for a `remote_only` ref with no
  /// recorded remote filename (a ghost that can never be downloaded).
  /// Backend failures (offline, 404) surface as their own typed sync
  /// errors.
  Future<FileRef> downloadRef({
    required String store,
    required String recordId,
    required String field,
    String? refId,
  }) async {
    final refs = await pocket.files.list(
      store: store,
      recordId: recordId,
      field: field,
    );
    if (refs.isEmpty) {
      throw RecordNotFoundException(
          'No file references for $store/$recordId/$field.');
    }
    final FileRef ref = refId != null
        ? refs.firstWhere(
            (r) => r.refId == refId,
            orElse: () => throw RecordNotFoundException(
                'FileRef $refId not found for $store/$recordId/$field.'),
          )
        // No explicit ref: prefer a remote_only one (the hydration target);
        // otherwise short-circuit on the field's first reference.
        : refs.firstWhere(
            (r) => r.state == 'remote_only',
            orElse: () => refs.first,
          );

    // Short-circuit: the metadata row says the bytes are local. The
    // `lp_blobs` row is the same dependency `open` relies on, so a ref that
    // passes here opens without network. A non-remote_only ref whose blob
    // row vanished (e.g. a wiped volatile store) is repaired by re-downloading.
    final blobs = await pocket.db.query(
      'lp_blobs',
      where: 'hash = ?',
      whereArgs: [ref.hash],
      limit: 1,
    );
    if (blobs.isNotEmpty && ref.state != 'remote_only') {
      return ref;
    }

    final remoteName = ref.remoteName;
    if (remoteName == null) {
      throw ValidationException(
          'File ${ref.refId} in $store/$recordId/$field has no remote '
          'filename recorded and cannot be downloaded (state: '
          '${ref.state}). Only remotely-known attachments are downloadable.');
    }
    await downloadFile(
      store: store,
      recordId: recordId,
      refId: ref.refId,
      remoteName: remoteName,
    );
    final updated = await pocket.files.list(
      store: store,
      recordId: recordId,
      field: field,
    );
    return updated.firstWhere(
      (r) => r.refId == ref.refId,
      orElse: () => throw RecordNotFoundException(
          'FileRef ${ref.refId} disappeared during download.'),
    );
  }

  /// Observes remote filenames on pull and syncs `lp_file_refs`.
  Future<void> observeRemoteFiles({
    required DatabaseExecutor exec,
    required String store,
    required String recordId,
    required List<String> remoteFilenames,
  }) async {
    final existingRefs = await exec.query(
      'lp_file_refs',
      where: 'store = ? AND record_id = ?',
      whereArgs: [store, recordId],
    );

    final desiredNames = remoteFilenames.toSet();
    final knownRemoteNames = existingRefs
        .map((r) => r['remote_name'] as String?)
        .whereType<String>()
        .toSet();

    for (final filename in remoteFilenames) {
      if (!knownRemoteNames.contains(filename)) {
        // Unknown remote file: create remote_only ref under the store's
        // declared attachment field (local metadata label — the remote field
        // mapping is the adapter's concern).
        await exec.insert(
            'lp_file_refs',
            {
              'ref_id': generateRecordId(),
              'store': store,
              'record_id': recordId,
              'field': pocket.requireTable(store).schema.attachmentField ??
                  attachmentFieldDefault,
              'hash': 'unknown_$filename',
              'remote_name': filename,
              'state': 'remote_only',
            },
            conflictAlgorithm: ConflictAlgorithm.ignore);
      }
    }

    // Remote shrink reconciliation: a ref whose remote_name is no longer
    // listed on the server no longer exists remotely. Remove it safely —
    // releasing its blob refcount for synced content — while leaving refs that
    // are already mid-removal (`pending_remove`) or pending a local upload
    // (no remote_name yet) untouched.
    for (final ref in existingRefs) {
      final remoteName = ref['remote_name'] as String?;
      if (remoteName == null) continue;
      if (desiredNames.contains(remoteName)) continue;
      final state = ref['state']! as String;
      if (state == 'pending_remove' || state == 'pending_upload') continue;
      final refId = ref['ref_id']!;
      await exec
          .delete('lp_file_refs', where: 'ref_id = ?', whereArgs: [refId]);
      final hash = ref['hash'] as String?;
      if (hash != null && hash.isNotEmpty && !hash.startsWith('unknown_')) {
        await exec.execute(
            'UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?',
            [hash]);
      }
    }
  }
}
