import 'dart:convert';

import '../core/database_adapter.dart';

import '../core/canonical_json.dart';
import '../core/change_bus.dart';
import '../core/codec.dart';
import '../core/hashing.dart';
import '../core/local_pocket.dart';
import '../core/schema.dart';
import 'mapping.dart';
import 'merge.dart';
import 'outbox.dart';
import 'sync_backend.dart';
import 'sync_config.dart';
import 'sync_store.dart';
import 'sync_tables.dart';

class PushReport {
  final int pushed;
  final int deadLettered;
  final int conflicted;
  final bool hadError;
  const PushReport({
    this.pushed = 0,
    this.deadLettered = 0,
    this.conflicted = 0,
    this.hadError = false,
  });
}

/// The pusher: GET-before-write optimistic concurrency, 3-way merge
/// on divergence, batch upsert when the backend enables it, persisted
/// backoff, and dead letters. The outbox op is re-read at push time so the
/// latest coalesced state is always pushed.
class Pusher {
  final LocalPocket pocket;
  final SyncBackend backend;
  final SyncConfig config;
  final SyncStore syncStore;

  /// Called when the backend reports an auth failure (401).
  final void Function() onAuthError;

  /// Session-scoped batch capability (probed at start; disabled on 403).
  bool batchEnabled;

  Pusher(
    this.pocket,
    this.backend,
    this.config,
    this.syncStore, {
    required this.onAuthError,
  }) : batchEnabled = backend.capabilities.batchEnabled;

  int _nowMs() => config.now();

  Future<PushReport> pushPending() async {
    // `now` comes from config so persisted backoff deadlines (written in the
    // same clock) compare consistently even under an injected test clock.
    final ops =
        await pocket.outbox.drain(limit: config.maxBatch, now: config.now());
    if (ops.isEmpty) return const PushReport();
    if (batchEnabled) {
      return _pushBatchMode(ops);
    }
    var report = const PushReport();
    for (final drained in ops) {
      final r = await _pushOp(drained);
      report = PushReport(
        pushed: report.pushed + r.pushed,
        deadLettered: report.deadLettered + r.deadLettered,
        conflicted: report.conflicted + r.conflicted,
        hadError: report.hadError || r.hadError,
      );
    }
    return report;
  }

  // ------------------------------------------------------------------ per-op --

  Future<PushReport> _pushOp(OutboxOp drained) async {
    // Re-read the current state: the op may have been coalesced while queued.
    final op =
        await pocket.outbox.readOp(pocket.db, drained.store, drained.recordId);
    if (op == null) return const PushReport(); // vanished
    final sr =
        await pocket.outbox.readSyncRow(pocket.db, op.store, op.recordId);
    if (sr == null) return const PushReport();

    if (op.baseUpdated == null) {
      return _pushCreate(op, sr);
    }
    return _pushUpdate(op, sr);
  }

  Future<PushReport> _pushCreate(OutboxOp op, SyncRowState sr) async {
    try {
      final rec = await backend.createRecord(
          id: op.recordId, store: op.store, dataJson: op.payloadJson);
      await _settle(op, rec);
      return const PushReport(pushed: 1);
    } on DuplicateIdError {
      // Retry of a lost create: verify, else convert to an update.
      return _recoverDuplicateCreate(op, sr);
    } on AuthError {
      onAuthError();
      return const PushReport(hadError: true);
    } on ForbiddenError {
      await _deadLetter(op, 'forbidden_push');
      return const PushReport(deadLettered: 1);
    } on PayloadError catch (e) {
      await _deadLetter(op, 'validation_push', error: e.message);
      return const PushReport(deadLettered: 1);
    } on NotFoundError {
      await _deadLetter(op, 'missing_target');
      return const PushReport(deadLettered: 1);
    } on SyncError catch (e) {
      return _retry(op, sr, e);
    }
  }

  Future<PushReport> _recoverDuplicateCreate(
      OutboxOp op, SyncRowState sr) async {
    final schema = pocket.requireTable(op.store).schema;
    try {
      final fetched = await backend.getRecord(op.recordId);
      if (fetched == null) {
        await _deadLetter(op, 'duplicate_id_missing');
        return const PushReport(deadLettered: 1);
      }
      final fetchedHash = payloadHash(schema, normalizeRemote(schema, fetched));
      final pushedHash = sha256Hex(op.payloadJson);
      if (fetchedHash == pushedHash) {
        // Our earlier attempt actually landed.
        await _settle(op, fetched);
        return const PushReport(pushed: 1);
      }
      // Same id, different content: fall through to the update path.
      return await _pushUpdateWithBase(op, sr, fetched);
    } on AuthError {
      onAuthError();
      return const PushReport(hadError: true);
    } on NotFoundError {
      await _deadLetter(op, 'missing_target');
      return const PushReport(deadLettered: 1);
    } on ForbiddenError {
      await _deadLetter(op, 'forbidden_push');
      return const PushReport(deadLettered: 1);
    } on SyncError catch (e) {
      return _retry(op, sr, e);
    }
  }

  Future<PushReport> _pushUpdate(OutboxOp op, SyncRowState sr) async {
    RemoteRecord? fetched;
    try {
      fetched = await backend.getRecord(op.recordId);
    } on AuthError {
      onAuthError();
      return const PushReport(hadError: true);
    } on NotFoundError {
      await _deadLetter(op, 'missing_target');
      return const PushReport(deadLettered: 1);
    } on ForbiddenError {
      await _deadLetter(op, 'forbidden_push');
      return const PushReport(deadLettered: 1);
    } on SyncError catch (e) {
      return _retry(op, sr, e);
    }

    if (fetched == null) {
      // The record no longer exists remotely (a vanished target).
      await _deadLetter(op, 'missing_target');
      return const PushReport(deadLettered: 1);
    }
    if (fetched.updated == op.baseUpdated) {
      // No concurrent change: plain PATCH.
      try {
        final rec = await backend.updateRecord(
            id: op.recordId, dataJson: op.payloadJson);
        await _settle(op, rec);
        return const PushReport(pushed: 1);
      } on AuthError {
        onAuthError();
        return const PushReport(hadError: true);
      } on NotFoundError {
        await _deadLetter(op, 'missing_target');
        return const PushReport(deadLettered: 1);
      } on ForbiddenError {
        await _deadLetter(op, 'forbidden_push');
        return const PushReport(deadLettered: 1);
      } on PayloadError catch (e) {
        await _deadLetter(op, 'validation_push', error: e.message);
        return const PushReport(deadLettered: 1);
      } on SyncError catch (e) {
        return _retry(op, sr, e);
      }
    }
    // Concurrent change: verify / merge.
    return _pushUpdateWithBase(op, sr, fetched);
  }

  Future<PushReport> _pushUpdateWithBase(
      OutboxOp op, SyncRowState sr, RemoteRecord fetched) async {
    final schema = pocket.requireTable(op.store).schema;
    final fetchedLogical = normalizeRemote(schema, fetched);
    final fetchedHash = payloadHash(schema, fetchedLogical);
    final pushedHash = sha256Hex(op.payloadJson);

    if (fetchedHash == pushedHash) {
      // Already applied (lost PATCH response).
      await _settle(op, fetched);
      return const PushReport(pushed: 1);
    }

    final policy = MergePolicy(
      collectionResolver:
          schema.conflictPolicy.collectionResolver is ConflictResolver
              ? schema.conflictPolicy.collectionResolver as ConflictResolver
              : null,
      fieldOverrides: schema.conflictPolicy.fieldOverrides,
      editsUnarchive: schema.conflictPolicy.editsUnarchive,
    );
    final outcome = await merge3WayAsync(
      base: _parsePayload(sr.baseJson),
      local: _parsePayload(op.payloadJson),
      remote: buildPayload(schema, fetchedLogical),
      store: op.store,
      recordId: op.recordId,
      policy: policy,
    );
    if (outcome.needsReview) {
      await _recordConflict(op, sr, fetched, outcome);
      return const PushReport(conflicted: 1);
    }
    final mergedJson = canonicalize(outcome.merged);
    try {
      final rec =
          await backend.updateRecord(id: op.recordId, dataJson: mergedJson);
      await _settle(op, rec,
          mergedLogical: outcome.merged, serverDataJson: mergedJson);
      return const PushReport(pushed: 1);
    } on AuthError {
      onAuthError();
      return const PushReport(hadError: true);
    } on NotFoundError {
      await _deadLetter(op, 'missing_target');
      return const PushReport(deadLettered: 1);
    } on ForbiddenError {
      await _deadLetter(op, 'forbidden_push');
      return const PushReport(deadLettered: 1);
    } on PayloadError catch (e) {
      await _deadLetter(op, 'validation_push', error: e.message);
      return const PushReport(deadLettered: 1);
    } on SyncError catch (e) {
      return _retry(op, sr, e);
    }
  }

  // ---------------------------------------------------------------- batch --

  Future<PushReport> _pushBatchMode(List<OutboxOp> ops) async {
    final toSend = <PushOp>[];
    final mergedByOpId = <String, Map<String, Object?>>{};
    var pushed = 0;
    var dead = 0;
    var conflicted = 0;

    // Pre-flight GETs gate every write.
    final outboxPayloadByOpId = <String, String>{};
    for (final drained in ops) {
      final op = await pocket.outbox
          .readOp(pocket.db, drained.store, drained.recordId);
      if (op == null) continue;
      outboxPayloadByOpId[op.opId] = op.payloadJson;
      final sr =
          await pocket.outbox.readSyncRow(pocket.db, op.store, op.recordId);
      if (sr == null) continue;
      final schema = pocket.requireTable(op.store).schema;

      RemoteRecord? fetched;
      try {
        pocket.perf.pushPreflightRequests++;
        fetched = await backend.getRecord(op.recordId);
      } on NotFoundError {
        // Not on the server yet. For an update that is a vanished row; for a
        // create it is the expected state — fall through to send it.
        if (op.baseUpdated != null) {
          await _deadLetter(op, 'missing_target');
          dead++;
          continue;
        }
        fetched = null;
      } on AuthError {
        onAuthError();
        return PushReport(hadError: true);
      } on ForbiddenError {
        await _deadLetter(op, 'forbidden_push');
        dead++;
        continue;
      } on SyncError catch (e) {
        final r = await _retry(op, sr, e);
        pushed += r.pushed;
        dead += r.deadLettered;
        continue;
      }

      if (fetched != null) {
        final fetchedHash =
            payloadHash(schema, normalizeRemote(schema, fetched));
        final pushedHash = sha256Hex(op.payloadJson);
        if (fetchedHash == pushedHash) {
          // Already applied (lost response).
          await _settle(op, fetched);
          pushed++;
          continue;
        }
        if (op.baseUpdated == null) {
          // Concurrent create-vs-update with different content: merge.
          final outcome = await _mergeForBatch(op, sr, fetched, schema);
          if (outcome == null) {
            conflicted++;
            continue;
          }
          toSend.add(PushOp(
              opId: op.opId,
              store: op.store,
              id: op.recordId,
              dataJson: canonicalize(outcome.merged),
              baseUpdated: null,
              upsert: true));
          mergedByOpId[op.opId] = outcome.merged;
          continue;
        }
        // Update with a concurrent change: merge.
        final outcome = await _mergeForBatch(op, sr, fetched, schema);
        if (outcome == null) {
          conflicted++;
          continue;
        }
        toSend.add(PushOp(
            opId: op.opId,
            store: op.store,
            id: op.recordId,
            dataJson: canonicalize(outcome.merged),
            baseUpdated: fetched.updated,
            upsert: true));
        mergedByOpId[op.opId] = outcome.merged;
        continue;
      }

      // Record does not exist remotely: create (or update of a vanished row).
      toSend.add(PushOp(
        opId: op.opId,
        store: op.store,
        id: op.recordId,
        dataJson: op.payloadJson,
        baseUpdated: op.baseUpdated,
        upsert: true,
      ));
    }

    if (toSend.isNotEmpty) {
      // Clamp each request to the negotiated maximum: the backend advertises
      // its ceiling via capabilities.maxBatch, so a config that requests more
      // must never exceed it (a server may reject oversized batches).
      final chunkSize = _batchLimit();
      for (var i = 0; i < toSend.length; i += chunkSize) {
        final end =
            (i + chunkSize < toSend.length) ? i + chunkSize : toSend.length;
        final chunk = toSend.sublist(i, end);
        final report =
            await _sendBatch(chunk, mergedByOpId, outboxPayloadByOpId);
        pushed += report.pushed;
        dead += report.deadLettered;
        conflicted += report.conflicted;
        if (report.hadError) {
          return PushReport(
              pushed: pushed,
              deadLettered: dead,
              conflicted: conflicted,
              hadError: true);
        }
      }
    }
    return PushReport(
        pushed: pushed, deadLettered: dead, conflicted: conflicted);
  }

  /// Maximum operations per remote batch request: min of the configured limit
  /// and the backend's advertised capability (a non-positive capability means
  /// "no explicit ceiling", so the configured limit applies).
  int _batchLimit() {
    var cap = backend.capabilities.maxBatch;
    if (cap <= 0) cap = config.maxBatch;
    if (config.maxBatch < cap) cap = config.maxBatch;
    return cap < 1 ? 1 : cap;
  }

  Future<MergeOutcome?> _mergeForBatch(OutboxOp op, SyncRowState sr,
      RemoteRecord fetched, CollectionSchema schema) async {
    final fetchedLogical = normalizeRemote(schema, fetched);
    final policy = MergePolicy(
      collectionResolver:
          schema.conflictPolicy.collectionResolver is ConflictResolver
              ? schema.conflictPolicy.collectionResolver as ConflictResolver
              : null,
      fieldOverrides: schema.conflictPolicy.fieldOverrides,
      editsUnarchive: schema.conflictPolicy.editsUnarchive,
    );
    final outcome = await merge3WayAsync(
      base: _parsePayload(sr.baseJson),
      local: _parsePayload(op.payloadJson),
      remote: buildPayload(schema, fetchedLogical),
      store: op.store,
      recordId: op.recordId,
      policy: policy,
    );
    if (outcome.needsReview) {
      // Escalate to a conflict; the batch op is held.
      await _recordConflict(op, sr, fetched, outcome);
      return null;
    }
    return outcome;
  }

  Future<PushReport> _sendBatch(
      List<PushOp> toSend,
      Map<String, Map<String, Object?>> mergedByOpId,
      Map<String, String> outboxPayloadByOpId) async {
    var pushed = 0;
    var dead = 0;
    try {
      final results = await backend.pushBatch(toSend);
      final byOpId = {for (final op in toSend) op.opId: op};
      final settlements = <PushSettlement>[];
      for (final r in results) {
        final sent = byOpId[r.opId];
        if (sent == null) {
          throw ProtocolError(
              'Batch response references unknown op ${r.opId}.');
        }
        if (r.ok && r.record != null) {
          settlements.add(PushSettlement(
            op: OutboxOp(
              store: sent.store,
              recordId: sent.id,
              kind: OutboxKind.upsert,
              payloadJson: outboxPayloadByOpId[sent.opId] ?? sent.dataJson,
              baseUpdated: sent.baseUpdated,
              baseHash: sha256Hex(sent.dataJson),
              opId: sent.opId,
              createdAt: 0,
              updatedAt: 0,
            ),
            pushedPayloadHash: sha256Hex(sent.dataJson),
            serverDataJson: r.pushedJson ?? sent.dataJson,
            serverUpdated: r.record!.updated,
            mergedLogical: mergedByOpId[sent.opId],
          ));
          pushed++;
        } else {
          await pocket.outbox.markDeadLetter(
            store: sent.store,
            id: sent.id,
            kind: r.error ?? 'batch_failed',
            error: r.error ?? 'batch_failed',
            payloadJson: sent.dataJson,
          );
          dead++;
        }
      }
      await pocket.outbox.settlePushBatch(settlements);
      return PushReport(pushed: pushed, deadLettered: dead);
    } on BatchFailedError {
      // Binary split isolates the poison op; report its real effects so
      // SyncReport counts match what actually happened.
      return _binarySplit(toSend, mergedByOpId, outboxPayloadByOpId);
    } on ForbiddenError {
      // Server disabled batch: fall back to per-record for this session.
      batchEnabled = false;
      for (final op in toSend) {
        final r = await _pushOp(OutboxOp(
          store: op.store,
          recordId: op.id,
          kind: OutboxKind.upsert,
          payloadJson: op.dataJson,
          baseUpdated: op.baseUpdated,
          baseHash: sha256Hex(op.dataJson),
          opId: op.opId,
          createdAt: 0,
          updatedAt: 0,
        ));
        pushed += r.pushed;
        dead += r.deadLettered;
      }
      return PushReport(pushed: pushed, deadLettered: dead);
    } on AuthError {
      onAuthError();
      return const PushReport(hadError: true);
    } on SyncError catch (e) {
      // Transient batch failure: retry each op with backoff, honoring a
      // ServerBusyError's Retry-After when the batch endpoint was throttled.
      final retryError = e is ServerBusyError ? e : TransientNetworkError();
      for (final op in toSend) {
        final sr = await pocket.outbox.readSyncRow(pocket.db, op.store, op.id);
        if (sr != null) {
          final r = await _retry(
            OutboxOp(
              store: op.store,
              recordId: op.id,
              kind: OutboxKind.upsert,
              payloadJson: op.dataJson,
              baseUpdated: op.baseUpdated,
              baseHash: sha256Hex(op.dataJson),
              opId: op.opId,
              createdAt: 0,
              updatedAt: 0,
            ),
            sr,
            retryError,
          );
          pushed += r.pushed;
          dead += r.deadLettered;
        }
      }
      return PushReport(pushed: pushed, deadLettered: dead, hadError: true);
    }
  }

  Future<PushReport> _binarySplit(
      List<PushOp> ops,
      Map<String, Map<String, Object?>> mergedByOpId,
      Map<String, String> outboxPayloadByOpId) async {
    if (ops.length == 1) {
      final op = ops.single;
      await pocket.outbox.markDeadLetter(
        store: op.store,
        id: op.id,
        kind: 'batch_poison',
        error: 'batch_request_failed',
        payloadJson: op.dataJson,
      );
      return const PushReport(deadLettered: 1);
    }
    final mid = ops.length ~/ 2;
    var pushed = 0;
    var dead = 0;
    var hadError = false;
    for (final half in [ops.sublist(0, mid), ops.sublist(mid)]) {
      try {
        final results = await backend.pushBatch(half);
        for (final r in results) {
          final sent = half.firstWhere((o) => o.opId == r.opId);
          if (r.ok && r.record != null) {
            await _settle(
              OutboxOp(
                store: sent.store,
                recordId: sent.id,
                kind: OutboxKind.upsert,
                payloadJson: outboxPayloadByOpId[sent.opId] ?? sent.dataJson,
                baseUpdated: sent.baseUpdated,
                baseHash: sha256Hex(sent.dataJson),
                opId: sent.opId,
                createdAt: 0,
                updatedAt: 0,
              ),
              r.record!,
              mergedLogical: mergedByOpId[sent.opId],
              serverDataJson: r.pushedJson ?? sent.dataJson,
            );
            pushed++;
          } else {
            await pocket.outbox.markDeadLetter(
              store: sent.store,
              id: sent.id,
              kind: r.error ?? 'batch_poison',
              error: r.error ?? 'batch_poison',
              payloadJson: sent.dataJson,
            );
            dead++;
          }
        }
      } on BatchFailedError {
        final sub = await _binarySplit(half, mergedByOpId, outboxPayloadByOpId);
        pushed += sub.pushed;
        dead += sub.deadLettered;
        hadError = hadError || sub.hadError;
      } on SyncError {
        // Transient: leave this half pending (retry later) and keep trying
        // the other half — one flaky half must not block the healthy one.
        hadError = true;
        continue;
      }
    }
    return PushReport(pushed: pushed, deadLettered: dead, hadError: hadError);
  }

  // ------------------------------------------------------------ bookkeeping --

  Future<void> _settle(OutboxOp op, RemoteRecord server,
      {Map<String, Object?>? mergedLogical, String? serverDataJson}) async {
    final schema = pocket.requireTable(op.store).schema;
    final serverLogical = normalizeRemote(schema, server);
    final storedJson =
        serverDataJson ?? canonicalPayload(schema, serverLogical);
    // The settlement op carries the live (pre-request) outbox payload so
    // settlement can detect a newer edit and refuse to overwrite it with a
    // stale merge.
    await pocket.outbox.settlePushBatch([
      PushSettlement(
        op: op,
        serverDataJson: storedJson,
        serverUpdated: server.updated,
        pushedPayloadHash: sha256Hex(serverDataJson ?? op.payloadJson),
        mergedLogical: mergedLogical,
      ),
    ]);
  }

  Future<PushReport> _retry(OutboxOp op, SyncRowState sr, SyncError e) async {
    final attempts = sr.attemptCount + 1;
    final retryAfter = e is ServerBusyError ? e.retryAfter : null;
    if (attempts >= config.maxAttempts) {
      await pocket.outbox.markDeadLetter(
        store: op.store,
        id: op.recordId,
        kind: 'max_attempts',
        error: e.message,
        payloadJson: op.payloadJson,
        state: SyncState.error,
      );
      return const PushReport(deadLettered: 1);
    }
    final delay = config.delayFor(attempts, retryAfter: retryAfter);
    await pocket.outbox.recordFailure(
      op.store,
      op.recordId,
      error: e.message,
      attempts: attempts,
      nextRetryAt: _nowMs() + delay.inMilliseconds,
    );
    return const PushReport(hadError: true);
  }

  Future<void> _deadLetter(OutboxOp op, String kind, {String? error}) async {
    await pocket.outbox.markDeadLetter(
      store: op.store,
      id: op.recordId,
      kind: kind,
      error: error ?? kind,
      payloadJson: op.payloadJson,
    );
  }

  Future<void> _recordConflict(OutboxOp op, SyncRowState sr,
      RemoteRecord fetched, MergeOutcome outcome) async {
    final schema = pocket.requireTable(op.store).schema;
    final fetchedLogical = normalizeRemote(schema, fetched);
    final basePayload = _parsePayload(sr.baseJson);
    final localPayload = _parsePayload(op.payloadJson);
    final remotePayload = buildPayload(schema, fetchedLogical);
    final dirtyLocal = computeDirtyFields(basePayload, localPayload).toList()
      ..sort();
    final dirtyRemote = computeDirtyFields(basePayload, remotePayload).toList()
      ..sort();

    await pocket.transaction((tx) async {
      final exec = tx.executor;
      await exec.insert(
          'lp_conflicts',
          {
            'store': op.store,
            'record_id': op.recordId,
            'base_json': sr.baseJson ?? canonicalize(basePayload),
            'local_json': canonicalize(localPayload),
            'remote_json': canonicalize(remotePayload),
            'dirty_local': jsonEncode(dirtyLocal),
            'dirty_remote': jsonEncode(dirtyRemote),
            'detected_at': _nowMs(),
          },
          conflictAlgorithm: ConflictAlgorithm.replace);
      await exec.update('lp_sync_row', {'sync_state': 'conflict'},
          where: 'store = ? AND record_id = ?',
          whereArgs: [op.store, op.recordId]);
      tx.addChange(ChangeSet(op.store, {op.recordId}));
      tx.addChange(ChangeSet('lp_conflicts', {op.recordId}));
    });
  }

  Map<String, Object?> _parsePayload(String? json) {
    if (json == null || json.isEmpty) return const {};
    final decoded = jsonDecode(json);
    if (decoded is Map) return Map<String, Object?>.from(decoded);
    return const {};
  }
}
