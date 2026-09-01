import 'dart:async';
import 'dart:convert';
import '../kernel/database_adapter.dart';

import '../kernel/change_bus.dart';
import '../kernel/ids.dart';
import '../kernel/local_pocket.dart';
import '../kernel/row_models.dart';
import '../kernel/sql_utils.dart';
import 'blob_store.dart';
import '../kernel/sync/sync_tables.dart';

/// {@template localpocket.file_ref}
/// Representation of a file ref in `lp_file_refs`.
/// {@endtemplate}
class FileRef {
  /// Creates a file-reference value.
  ///
  /// {@macro localpocket.file_ref}
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

  /// Stable local file-reference ID.
  final String refId;

  /// Collection containing the owning record.
  final String store;

  /// Record containing the attachment.
  final String recordId;

  /// Attachment field name.
  final String field;

  /// Content hash used to locate the blob.
  final String hash;

  /// Remote filename, when known.
  final String? remoteName;

  /// Lifecycle state: pending upload, synced, pending remove, remote-only, or orphaned.
  final String state;

  /// Persisted retry deadline.
  final int nextRetryAt;

  /// Number of attempted file operations.
  final int attemptCount;

  /// Most recent file-operation error.
  final String? lastError;

  /// Creates a file reference from a database row.
  static FileRef fromRow(Map<String, Object?> row) => parseRowModel(
        'lp_file_refs',
        () => FileRef(
          refId: row['ref_id']! as String,
          store: row['store']! as String,
          recordId: row['record_id']! as String,
          field: row['field']! as String,
          hash: row['hash']! as String,
          remoteName: row['remote_name'] as String?,
          state: row['state']! as String,
          nextRetryAt: row['next_retry_at'] as int? ?? 0,
          attemptCount: row['attempt_count'] as int? ?? 0,
          lastError: row['last_error'] as String?,
        ),
      );
}

/// {@template localpocket.local_pocket_files}
/// App-facing Files API on LocalPocket.
/// Application-facing attachment and blob lifecycle API.
/// {@endtemplate}
class LocalPocketFiles {
  /// Internal constructor used by [LocalPocket].
  ///
  /// {@macro localpocket.local_pocket_files}
  LocalPocketFiles.internal(this._pocket, {this.blobStore});

  final LocalPocket _pocket;

  /// Blob store used for attachment bytes.
  final BlobStore? blobStore;

  BlobStore get _requireBlobStore {
    final bs = blobStore;
    if (bs == null) {
      throw StateError('No BlobStore configured on LocalPocket');
    }
    return bs;
  }

  /// Whether the configured blob store persists bytes durably across
  /// process/worker restarts.
  ///
  /// `false` when no [BlobStore] is configured or when blobs are held only in
  /// volatile memory — for example on web when OPFS is unavailable and
  /// [WebBlobStore] degrades to its in-memory fallback. In that case SQLite
  /// metadata survives but the attachment bytes vanish on reload, so
  /// attachments are effectively ephemeral.
  ///
  /// Apps that care about durability should check this before attaching files
  /// (or rely on [attach]'s refusal unless `allowVolatileBlobs` is set).
  Future<bool> get isBlobStorageDurable async {
    final bs = blobStore;
    if (bs == null) return false;
    return bs.isDurable;
  }

  /// Lists file references attached to a record field.
  ///
  /// ```dart
  /// final refs = await db.files.list(
  ///   store: 'tasks',
  ///   recordId: taskId,
  /// );
  /// ```
  Future<List<FileRef>> list({
    required String store,
    required String recordId,
    String field = 'imgs',
  }) async {
    final rows = await _pocket.db.query(
      'lp_file_refs',
      where: 'store = ? AND record_id = ? AND field = ?',
      whereArgs: [store, recordId, field],
    );
    return rows.map(FileRef.fromRow).toList();
  }

  /// Attaches a file to a record.
  ///
  /// The input stream is hashed and stored before a durable file-reference and
  /// upload operation are created. The record-first dependency ensures the
  /// owning record is synchronized before its attachment.
  ///
  /// Streams bytes into BlobStore, records `lp_blobs` and `lp_file_refs` (pending_upload),
  /// and enqueues a `file_upload` op in `lp_op_queue`.
  ///
  /// Throws a [StateError] before any bytes are stored when the blob store is
  /// volatile ([isBlobStorageDurable] is `false`) unless [allowVolatileBlobs]
  /// is `true`. A volatile store keeps the bytes only in memory — they
  /// disappear on restart even though the file reference survives — so this
  /// guard makes the loss an explicit choice instead of a silent surprise.
  Future<FileRef> attach({
    required String store,
    required String recordId,
    required Stream<List<int>> bytes,
    String field = 'imgs',
    String? name,
    int? expectedSize,
    String? expectedSha256,
    bool allowVolatileBlobs = false,
  }) async {
    final bs = _requireBlobStore;
    if (!allowVolatileBlobs && !await bs.isDurable) {
      throw StateError(
        'Blob storage is volatile (in-memory fallback): attachment bytes '
        'would not survive a restart. Pass allowVolatileBlobs: true to '
        'attach anyway.',
      );
    }
    final hash = await bs.put(
      bytes,
      expectedSha256: expectedSha256,
      expectedSize: expectedSize,
    );
    final size = (await bs.size(hash)) ?? 0;
    final refId = generateRecordId();

    final ref = await _pocket.transaction<FileRef>((tx) async {
      final exec = tx.executor;
      final now = _pocket.now();

      // Dedup: an identical (store, record_id, field, hash) attachment is the
      // SAME logical file — return the existing live ref without creating a
      // duplicate ref/op or double-counting the blob refcount.
      final existingRef = await exec.query(
        'lp_file_refs',
        columns: [
          'ref_id',
          'store',
          'record_id',
          'field',
          'hash',
          'remote_name',
          'state',
          'next_retry_at',
          'attempt_count',
          'last_error',
        ],
        where: 'store = ? AND record_id = ? AND field = ? AND hash = ?',
        whereArgs: [store, recordId, field, hash],
        limit: 1,
      );
      if (existingRef.isNotEmpty) {
        return FileRef.fromRow(existingRef.first);
      }

      // 1. Update lp_blobs (refcount++)
      await upsertBlobReference(exec, hash: hash, size: size, now: now);

      // Check if record has a pending create op in outbox (depends_on_op)
      final outboxRows = await exec.query(
        'lp_outbox',
        columns: ['op_id', 'base_updated'],
        where: 'store = ? AND record_id = ?',
        whereArgs: [store, recordId],
        limit: 1,
      );
      String? dependsOnOp;
      if (outboxRows.isNotEmpty && outboxRows.first['base_updated'] == null) {
        dependsOnOp = outboxRows.first['op_id'] as String?;
      }

      // 2. Insert lp_file_refs
      await exec.insert(
          'lp_file_refs',
          {
            'ref_id': refId,
            'store': store,
            'record_id': recordId,
            'field': field,
            'hash': hash,
            'remote_name': name,
            'state': 'pending_upload',
          },
          conflictAlgorithm: ConflictAlgorithm.replace);

      // 3. Enqueue file_upload in lp_op_queue
      await exec.insert('lp_op_queue', {
        'op_id': generateRecordId(),
        'store': store,
        'record_id': recordId,
        'kind': OpQueueKind.fileUpload.name,
        'payload_json': jsonEncode({
          'ref_id': refId,
          'field': field,
          'hash': hash,
          'name': name ?? '$hash.bin',
        }),
        'state': 'pending',
        'depends_on_op': dependsOnOp,
        'created_at': now,
      });

      tx.addChange(ChangeSet(store, {recordId}));

      return FileRef(
        refId: refId,
        store: store,
        recordId: recordId,
        field: field,
        hash: hash,
        remoteName: name,
        state: 'pending_upload',
      );
    });

    return ref;
  }

  /// Opens a byte stream for a local file reference.
  ///
  /// If the reference is `remote_only`, synchronize or download it before
  /// opening. The returned stream is suitable for incremental consumption:
  ///
  /// ```dart
  /// final stream = await db.files.open(
  ///   store: 'tasks',
  ///   recordId: taskId,
  ///   refId: ref.refId,
  /// );
  /// await for (final chunk in stream) {
  ///   sink.add(chunk);
  /// }
  /// ```
  ///
  /// If `remote_only`, the caller must download it first via sync or direct pull.
  Future<Stream<List<int>>> open({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  }) async {
    final bs = _requireBlobStore;
    final refs = await list(store: store, recordId: recordId, field: field);
    if (refs.isEmpty) {
      throw StateError('No files found for $store/$recordId/$field');
    }
    final ref = refId != null
        ? refs.firstWhere((r) => r.refId == refId,
            orElse: () => throw StateError('FileRef $refId not found'))
        : refs[index];

    if (ref.state == 'remote_only') {
      throw StateError('File is remote_only; download it before opening.');
    }

    await _pocket.db.execute(
      'UPDATE lp_blobs SET last_access = ? WHERE hash = ?',
      [_pocket.now(), ref.hash],
    );

    return bs.open(ref.hash);
  }

  /// Removes a file reference from a record.
  ///
  /// A not-yet-uploaded reference is removed locally. A remote reference is
  /// marked pending removal and handled by the file sync lane.
  Future<void> remove({
    required String store,
    required String recordId,
    String field = 'imgs',
    int index = 0,
    String? refId,
  }) async {
    final refs = await list(store: store, recordId: recordId, field: field);
    if (refs.isEmpty) return;
    final ref = refId != null
        ? refs.firstWhere((r) => r.refId == refId,
            orElse: () => throw StateError('FileRef $refId not found'))
        : refs[index];

    await _pocket.transaction((tx) async {
      final exec = tx.executor;
      final now = _pocket.now();

      if (ref.state == 'pending_upload' && ref.remoteName == null) {
        // Was never uploaded remotely -> vanish immediately: drop the ref,
        // release the blob, and neutralize the pending upload op so a later
        // file-lane drain can never upload it.
        await exec.delete('lp_file_refs',
            where: 'ref_id = ?', whereArgs: [ref.refId]);
        await exec.execute(
          'UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?',
          [ref.hash],
        );
        await exec.update(
          'lp_op_queue',
          {'state': 'done'},
          where: 'kind = ? AND payload_json LIKE ?',
          whereArgs: [OpQueueKind.fileUpload.name, '%"ref_id":"${ref.refId}"%'],
        );
      } else {
        // Mark pending_remove and queue file_remove
        await exec.update(
          'lp_file_refs',
          {'state': 'pending_remove'},
          where: 'ref_id = ?',
          whereArgs: [ref.refId],
        );
        await exec.insert('lp_op_queue', {
          'op_id': generateRecordId(),
          'store': store,
          'record_id': recordId,
          'kind': OpQueueKind.fileRemove.name,
          'payload_json': jsonEncode({
            'ref_id': ref.refId,
            'field': field,
            'remote_name': ref.remoteName,
            'hash': ref.hash,
          }),
          'state': 'pending',
          'created_at': now,
        });
      }

      tx.addChange(ChangeSet(store, {recordId}));
    });
  }

  /// Garbage collection.
  ///
  /// - Temp files in BlobStore > [tmpGrace] -> delete.
  /// - Orphaned file refs whose record disappeared -> clean up.
  /// - Orphaned blobs (on disk, NO `lp_blobs` row — crash between `attach`'s
  ///   blob write and the metadata transaction) older than [blobGrace], aged
  ///   by the stored file's mtime -> delete from disk.
  /// - Blobs with `refcount == 0` and `last_access <= cutoff` -> delete from
  ///   BlobStore and SQLite.
  Future<int> gc({
    Duration blobGrace = const Duration(days: 7),
    Duration tmpGrace = const Duration(hours: 24),
  }) async {
    final bs = blobStore;
    var count = 0;

    // 1. Clean tmp files
    if (bs != null) {
      count += await bs.cleanTmp(olderThan: tmpGrace);
    }

    final cutoff = _pocket.now() - blobGrace.inMilliseconds;

    // 2. Remove refs whose owning record no longer exists. This must happen
    // before blob collection so their references cannot keep blobs alive.
    await _pocket.transaction((tx) async {
      final exec = tx.executor;
      for (final store in _pocket.storeNames) {
        final orphaned = await exec.rawQuery(
          'SELECT f.ref_id, f.hash FROM lp_file_refs f '
          'WHERE f.store = ? AND NOT EXISTS ('
          'SELECT 1 FROM "${store.replaceAll('"', '""')}" r '
          'WHERE r.id = f.record_id)',
          [store],
        );
        for (final row in orphaned) {
          final refId = row['ref_id']! as String;
          final hash = row['hash']! as String;
          await exec
              .delete('lp_file_refs', where: 'ref_id = ?', whereArgs: [refId]);
          await exec.execute(
            'UPDATE lp_blobs SET refcount = MAX(refcount - 1, 0) WHERE hash = ?',
            [hash],
          );
          await exec.update(
            'lp_op_queue',
            {'state': 'done'},
            where: 'payload_json LIKE ?',
            whereArgs: ['%"ref_id":"$refId"%'],
          );
          count++;
        }
      }
    });

    // 3. Reconcile disk against metadata (orphan healing): delete blobs that
    // exist in the BlobStore with NO `lp_blobs` metadata row (left behind by a
    // crash between `attach`'s `bs.put` and the metadata transaction). Only
    // orphans older than the grace cutoff are collected so an in-flight attach
    // is never raced.
    if (bs != null) {
      try {
        final onDisk = await bs.listHashes();
        if (onDisk.isNotEmpty) {
          const pageSize = 250;
          var offset = 0;
          final known = <String>{};
          while (true) {
            final rows = await _pocket.db.query(
              'lp_blobs',
              columns: ['hash'],
              orderBy: 'hash ASC',
              limit: pageSize,
              offset: offset,
            );
            for (final r in rows) {
              known.add(r['hash']! as String);
            }
            if (rows.length < pageSize) break;
            offset += pageSize;
          }
          for (final hash in onDisk) {
            if (known.contains(hash)) continue;
            try {
              // Age by the store's own mtime so a blob written moments before
              // a crash survives at least one grace period.
              final mtime = await bs.modifiedAt(hash);
              if (mtime == null || mtime > cutoff) continue;
              await bs.delete(hash);
              count++;
            } catch (_) {}
          }
        }
      } catch (_) {
        // listHashes unsupported or failed -> skip reconciliation this run.
      }
    }

    // 4. Clean blobs with refcount = 0 and last_access older than grace
    const pageSize2 = 250;
    while (true) {
      final deadBlobs = await _pocket.db.query(
        'lp_blobs',
        columns: ['hash'],
        where: 'refcount <= 0 AND last_access <= ?',
        whereArgs: [cutoff],
        orderBy: 'hash ASC',
        limit: pageSize2,
      );
      if (deadBlobs.isEmpty) break;
      for (final b in deadBlobs) {
        final hash = b['hash']! as String;
        if (bs != null) await bs.delete(hash);
        await _pocket.db
            .delete('lp_blobs', where: 'hash = ?', whereArgs: [hash]);
        count++;
      }
    }

    return count;
  }

  /// Enforces storage cap via LRU eviction of synced-only blobs.
  Future<int> enforceStorageCap({required int maxBytes}) async {
    final bs = blobStore;
    if (bs == null) return 0;

    final totalSizeRow =
        await _pocket.db.rawQuery('SELECT SUM(size) as total FROM lp_blobs');
    var currentSize = firstIntValue(totalSizeRow) ?? 0;
    if (currentSize <= maxBytes) return 0;

    // Get synced-only blobs ordered by last_access ASC (LRU)
    // Never evict blobs that have pending_upload refs.
    var evicted = 0;
    while (currentSize > maxBytes) {
      final candidates = await _pocket.db.rawQuery('''
        SELECT b.hash, b.size FROM lp_blobs b
        WHERE b.hash NOT IN (
          SELECT hash FROM lp_file_refs WHERE state = 'pending_upload'
        )
        ORDER BY b.last_access ASC
        LIMIT 250
      ''');
      if (candidates.isEmpty) break;
      for (final row in candidates) {
        if (currentSize <= maxBytes) break;
        final hash = row['hash']! as String;
        final size = row['size']! as int;

        await bs.delete(hash);
        await _pocket.db.update(
          'lp_file_refs',
          {'state': 'remote_only'},
          where: 'hash = ? AND state = ?',
          whereArgs: [hash, 'synced'],
        );
        await _pocket.db
            .delete('lp_blobs', where: 'hash = ?', whereArgs: [hash]);
        currentSize -= size;
        evicted++;
      }
    }

    return evicted;
  }
}
