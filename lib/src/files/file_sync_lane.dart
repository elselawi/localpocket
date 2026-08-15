import 'dart:async';
import 'dart:convert';
import '../core/database_adapter.dart';

import '../core/change_bus.dart';
import '../core/ids.dart';
import '../core/local_pocket.dart';
import 'blob_store.dart';
import '../sync/sync_backend.dart';
import '../sync/sync_config.dart';
import '../sync/sync_tables.dart';

class FileSyncReport {
  final int uploaded;
  final int downloaded;
  final int removed;
  final bool hadError;

  const FileSyncReport({
    this.uploaded = 0,
    this.downloaded = 0,
    this.removed = 0,
    this.hadError = false,
  });
}

/// The dedicated file synchronization lane.
///
/// Runs after the record push lane (record-first ordering).
class FileSyncLane {
  final LocalPocket pocket;
  final SyncBackend backend;
  final SyncConfig config;
  final BlobStore? blobStore;

  FileSyncLane({
    required this.pocket,
    required this.backend,
    required this.config,
    this.blobStore,
  });

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
        await pocket.opQueue.markFailed(op.opId, e.toString());
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
            final refId = row['ref_id'] as String;
            final recordId = row['record_id'] as String;
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
    final refId = payload['ref_id'] as String;
    final hash = payload['hash'] as String;
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
      for (final existingName in remoteRec.imgs) {
        if (existingName.startsWith(hash.substring(0, 10)) || existingName.startsWith(name)) {
          adoptedFilename = existingName;
          break;
        }
      }
    }

    String remoteFilename;
    if (adoptedFilename != null) {
      remoteFilename = adoptedFilename;
    } else {
      // Send multipart upload with modifier imgs+
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
      remoteFilename = updatedRec.imgs.isNotEmpty ? updatedRec.imgs.last : name;
    }

    // Update lp_file_refs to synced
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
    final refId = payload['ref_id'] as String;
    final remoteName = payload['remote_name'] as String?;
    final hash = payload['hash'] as String;

    if (remoteName != null) {
      // Send JSON {"imgs-": [remoteName]}
      await backend.updateRecordFiles(
        id: op.recordId,
        removeNames: [remoteName],
      );
    }

    // Delete ref and decrement blob refcount
    await pocket.transaction((tx) async {
      final exec = tx.executor;
      await exec.delete('lp_file_refs', where: 'ref_id = ?', whereArgs: [refId]);
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
      final existing = await exec.query(
        'lp_blobs',
        where: 'hash = ?',
        whereArgs: [hash],
        limit: 1,
      );
      if (existing.isEmpty) {
        await exec.insert('lp_blobs', {
          'hash': hash,
          'size': size,
          'state': 'local',
          'refcount': 1,
          'last_access': now,
          'created_at': now,
        });
      } else {
        await exec.execute(
          'UPDATE lp_blobs SET refcount = refcount + 1, last_access = ? WHERE hash = ?',
          [now, hash],
        );
      }

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

    final knownRemoteNames = existingRefs
        .map((r) => r['remote_name'] as String?)
        .whereType<String>()
        .toSet();

    for (final filename in remoteFilenames) {
      if (!knownRemoteNames.contains(filename)) {
        // Unknown remote file: create remote_only ref
        await exec.insert('lp_file_refs', {
          'ref_id': generateRecordId(),
          'store': store,
          'record_id': recordId,
          'field': 'imgs',
          'hash': 'unknown_$filename',
          'remote_name': filename,
          'state': 'remote_only',
        }, conflictAlgorithm: ConflictAlgorithm.ignore);
      }
    }
  }
}
