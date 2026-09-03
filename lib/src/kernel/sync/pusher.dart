import 'dart:convert';

import '../../kernel/database_adapter.dart';

import '../../kernel/canonical_json.dart';
import '../../kernel/change_bus.dart';
import '../../kernel/codec.dart';
import '../../kernel/hashing.dart';
import '../../kernel/local_pocket.dart';
import '../../kernel/schema.dart';
import 'conflicts.dart';
import 'mapping.dart';
import 'merge.dart';
import 'outbox.dart';
import 'sync_backend.dart';
import 'sync_config.dart';
import 'sync_store.dart';
import 'sync_tables.dart';

/// {@template localpocket.push_report}
/// Result of one push cycle: per-outcome counters.
/// {@endtemplate}
class PushReport {
  /// Creates a push result with zero counts by default.
  ///
  /// {@macro localpocket.push_report}
  const PushReport({
    this.pushed = 0,
    this.deadLettered = 0,
    this.conflicted = 0,
    this.blocked = 0,
    this.discarded = 0,
    this.hadError = false,
  });

  /// Number of operations successfully pushed.
  final int pushed;

  /// Number of operations moved to the dead-letter state.
  final int deadLettered;

  /// Number of operations escalated to a conflict.
  final int conflicted;

  /// Operations parked in the recoverable `blocked` state (a 403 that may be
  /// temporary). They are requeued when permissions are restored.
  final int blocked;

  /// Local edits discarded in favor of the remote deletion
  /// (`MissingRemotePolicy.discardLocal`).
  final int discarded;

  /// Whether a transient or authentication error occurred.
  final bool hadError;
}

/// {@template localpocket.pusher}
/// The pusher: GET-before-write optimistic concurrency, 3-way merge
/// on divergence, batch upsert when the backend enables it, persisted
/// backoff, and dead letters. The outbox op is re-read at push time so the
/// latest coalesced state is always pushed.
/// {@endtemplate}
class Pusher {
  /// Creates a pusher for [pocket] and its remote [backend].
  ///
  /// {@macro localpocket.pusher}
  Pusher(
    this.pocket,
    this.backend,
    this.config,
    this.syncStore, {
    required this.onAuthError,
  }) : batchEnabled = backend.capabilities.batchEnabled;

  /// Local database and outbox used by the pusher.
  final LocalPocket pocket;

  /// Remote synchronization backend.
  final SyncBackend backend;

  /// Synchronization and retry configuration.
  final SyncConfig config;

  /// Store containing synchronization metadata.
  final SyncStore syncStore;

  /// Called when the backend reports an auth failure (401).
  final void Function() onAuthError;

  /// Session-scoped batch capability (probed at start; disabled on 403).
  bool batchEnabled;

  int _nowMs() => config.now();

  /// Pushes pending outbox operations to the remote backend.
  Future<PushReport> pushPending() async {
    // `now` comes from config so backoff deadlines compare consistently
    // under an injected test clock.
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
        blocked: report.blocked + r.blocked,
        discarded: report.discarded + r.discarded,
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

  Future<PushReport> _handlePushExceptions(
    OutboxOp op,
    SyncRowState sr,
    Future<PushReport> Function() action, {
    bool catchPayloadError = false,
    bool recreateInProgress = false,
  }) async {
    try {
      return await action();
    } on AuthError {
      onAuthError();
      return const PushReport(hadError: true);
    } on ForbiddenError {
      // A forbidden push is RECOVERABLE (permissions may return): keep the
      // op, park in `blocked`, requeue later — never dead-letter a local
      // edit over a transient 403.
      await pocket.outbox.markBlocked(
          store: op.store, id: op.recordId, error: 'forbidden_push');
      return const PushReport(blocked: 1);
    } on PayloadError catch (e) {
      if (catchPayloadError) {
        await _deadLetter(op, 'validation_push', error: e.message);
        return const PushReport(deadLettered: 1);
      }
      return _retry(op, sr, e);
    } on NotFoundError {
      // The update's target vanished remotely: apply the collection's
      // missing-remote policy (recreate is single-shot, so an oscillating
      // backend cannot loop).
      return _handleMissingRemote(op, sr, allowRecreate: !recreateInProgress);
    } on SyncError catch (e) {
      return _retry(op, sr, e);
    }
  }

  Future<PushReport> _pushCreate(OutboxOp op, SyncRowState sr,
          {bool recreateInProgress = false}) async =>
      _handlePushExceptions(op, sr, () async {
        try {
          final rec = await backend.createRecord(
              id: op.recordId, store: op.store, dataJson: op.payloadJson);
          await _settle(op, rec);
          return const PushReport(pushed: 1);
        } on DuplicateIdError {
          // Retry of a lost create: verify, else convert to an update.
          return _recoverDuplicateCreate(op, sr,
              recreateInProgress: recreateInProgress);
        }
      }, catchPayloadError: true, recreateInProgress: recreateInProgress);

  Future<PushReport> _recoverDuplicateCreate(OutboxOp op, SyncRowState sr,
      {bool recreateInProgress = false}) async {
    final schema = pocket.requireTable(op.store).schema;
    return _handlePushExceptions(op, sr, () async {
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
      return _pushUpdateWithBase(op, sr, fetched,
          recreateInProgress: recreateInProgress);
    }, recreateInProgress: recreateInProgress);
  }

  Future<PushReport> _pushUpdate(OutboxOp op, SyncRowState sr) async =>
      _handlePushExceptions(op, sr, () async {
        final fetched = await backend.getRecord(op.recordId);
        if (fetched == null) {
          // Vanished target: apply the collection's missing-remote policy.
          return _handleMissingRemote(op, sr);
        }
        _assertFetchedMatches(op, fetched);
        if (fetched.updated == op.baseUpdated) {
          // No concurrent change: a version-checked PATCH. The base version
          // is sent so an OCC-enforcing backend can reject the write if the
          // remote moved between GET and PATCH; the pusher then re-merges
          // instead of losing the concurrent edit.
          return _handlePushExceptions(op, sr, () async {
            try {
              final rec = await backend.updateRecord(
                  id: op.recordId,
                  dataJson: op.payloadJson,
                  baseUpdated: fetched.updated);
              await _settle(op, rec);
              return const PushReport(pushed: 1);
            } on RemoteVersionConflict {
              // The remote moved mid-PATCH: re-fetch and re-merge against the
              // CURRENT version — never overwrite blindly.
              final fresh = await backend.getRecord(op.recordId);
              if (fresh == null) {
                return _handleMissingRemote(op, sr);
              }
              return _pushUpdateWithBase(op, sr, fresh);
            }
          }, catchPayloadError: true);
        }
        // Concurrent change: verify / merge.
        return _pushUpdateWithBase(op, sr, fetched);
      });

  Future<PushReport> _pushUpdateWithBase(
      OutboxOp op, SyncRowState sr, RemoteRecord fetched,
      {bool recreateInProgress = false}) async {
    _assertFetchedMatches(op, fetched);
    final schema = pocket.requireTable(op.store).schema;
    final fetchedLogical = normalizeRemote(schema, fetched);
    final fetchedHash = payloadHash(schema, fetchedLogical);
    final pushedHash = sha256Hex(op.payloadJson);

    if (fetchedHash == pushedHash) {
      // Already applied (lost PATCH response).
      await _settle(op, fetched);
      return const PushReport(pushed: 1);
    }

    // A corrupt persisted base/payload is local corruption: dead-letter it
    // (retrying cannot repair it) instead of merging as an empty record.
    final Map<String, Object?> basePayload;
    final Map<String, Object?> localPayload;
    try {
      basePayload = parsePayloadJson(sr.baseJson);
      localPayload = parsePayloadJson(op.payloadJson);
    } on MapFailure catch (e) {
      await _deadLetter(op, 'corrupt_payload', error: e.message);
      return const PushReport(deadLettered: 1);
    }
    final outcome = await _mergeForBatch(op, sr, fetched, schema,
        basePayload: basePayload, localPayload: localPayload);
    if (outcome == null) {
      return const PushReport(conflicted: 1);
    }
    // The schema-aware builder strips a literal `archived: false` (live
    // records omit the key on the wire); the raw merged map keeps it for
    // the LOCAL write.
    final mergedJson = canonicalPayload(schema, outcome.merged);
    return _handlePushExceptions(op, sr, () async {
      // Version-check against the version the merge was based on: an
      // OCC-enforcing backend rejects it (and the next cycle re-merges) if
      // the remote moved again between re-fetch and PATCH.
      final rec = await backend.updateRecord(
          id: op.recordId, dataJson: mergedJson, baseUpdated: fetched.updated);
      await _settle(op, rec,
          mergedLogical: outcome.merged, serverDataJson: mergedJson);
      return const PushReport(pushed: 1);
    }, catchPayloadError: true, recreateInProgress: recreateInProgress);
  }

  // ---------------------------------------------------------------- batch --

  Future<PushReport> _pushBatchMode(List<OutboxOp> ops) async {
    final toSend = <PushOp>[];
    final mergedByOpId = <String, Map<String, Object?>>{};
    var pushed = 0;
    var dead = 0;
    var conflicted = 0;
    var blocked = 0;
    var discarded = 0;

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
        // Not on the server yet: for an update a vanished target (apply the
        // missing-remote policy); for a create the expected state — send it.
        if (op.baseUpdated != null) {
          final r = await _handleMissingRemote(op, sr);
          pushed += r.pushed;
          dead += r.deadLettered;
          conflicted += r.conflicted;
          blocked += r.blocked;
          discarded += r.discarded;
          continue;
        }
        fetched = null;
      } on AuthError {
        onAuthError();
        return const PushReport(hadError: true);
      } on ForbiddenError {
        await pocket.outbox.markBlocked(
            store: op.store, id: op.recordId, error: 'forbidden_push');
        blocked++;
        continue;
      } on SyncError catch (e) {
        final r = await _retry(op, sr, e);
        pushed += r.pushed;
        dead += r.deadLettered;
        continue;
      }

      if (fetched != null) {
        _assertFetchedMatches(op, fetched);
        final fetchedHash =
            payloadHash(schema, normalizeRemote(schema, fetched));
        final pushedHash = sha256Hex(op.payloadJson);
        if (fetchedHash == pushedHash) {
          // Already applied (lost response).
          await _settle(op, fetched);
          pushed++;
          continue;
        }
        // Concurrent change: merge. The schema-aware builder strips a literal
        // `archived: false` on the wire; a corrupt base/payload is
        // dead-lettered (retrying cannot repair local row corruption).
        final Map<String, Object?> basePayload;
        final Map<String, Object?> localPayload;
        try {
          basePayload = parsePayloadJson(sr.baseJson);
          localPayload = parsePayloadJson(op.payloadJson);
        } on MapFailure catch (e) {
          await pocket.outbox.markDeadLetter(
              store: op.store,
              id: op.recordId,
              kind: 'corrupt_payload',
              error: e.message,
              payloadJson: op.payloadJson);
          dead++;
          continue;
        }
        final outcome = await _mergeForBatch(op, sr, fetched, schema,
            basePayload: basePayload, localPayload: localPayload);
        if (outcome == null) {
          conflicted++;
          continue;
        }
        toSend.add(PushOp(
            opId: op.opId,
            store: op.store,
            id: op.recordId,
            dataJson: canonicalPayload(schema, outcome.merged),
            baseUpdated: op.baseUpdated == null ? null : fetched.updated,
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
      // Clamp to the backend-advertised ceiling; a server may reject
      // oversized batches.
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
        discarded += report.discarded;
        if (report.hadError) {
          return PushReport(
              pushed: pushed,
              deadLettered: dead,
              conflicted: conflicted,
              blocked: blocked,
              discarded: discarded,
              hadError: true);
        }
      }
    }
    return PushReport(
        pushed: pushed,
        deadLettered: dead,
        conflicted: conflicted,
        blocked: blocked,
        discarded: discarded);
  }

  /// Maximum ops per remote batch request: min of the configured limit and
  /// the backend's advertised capability (non-positive = no ceiling).
  int _batchLimit() {
    var cap = backend.capabilities.maxBatch;
    if (cap <= 0) cap = config.maxBatch;
    if (config.maxBatch < cap) cap = config.maxBatch;
    return cap < 1 ? 1 : cap;
  }

  /// Merges a local op against a concurrently-changed remote record.
  ///
  /// [basePayload] and [localPayload] are parsed (and corruption-checked) by
  /// the caller: a corrupt `base_json`/`payload_json` is dead-lettered there
  /// and never reaches the merge as an empty map.
  Future<MergeOutcome?> _mergeForBatch(OutboxOp op, SyncRowState sr,
      RemoteRecord fetched, CollectionSchema<Object?> schema,
      {required Map<String, Object?> basePayload,
      required Map<String, Object?> localPayload}) async {
    final fetchedLogical = normalizeRemote(schema, fetched);
    final policy = MergePolicy(
      collectionResolver: schema.conflictPolicy.collectionResolver,
      fieldOverrides: schema.conflictPolicy.fieldOverrides,
      editsUnarchive: schema.conflictPolicy.editsUnarchive,
    );
    final outcome = await merge3WayAsync(
      base: basePayload,
      local: localPayload,
      remote: buildPayload(schema, fetchedLogical),
      store: op.store,
      recordId: op.recordId,
      policy: policy,
    );
    if (outcome.needsReview) {
      // Escalate to a conflict; the batch op is held.
      await _recordConflict(op, sr, fetched, outcome,
          basePayload: basePayload, localPayload: localPayload);
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
      // Exact-response validation: every returned opId must be known and
      // unique. Missing ops are tolerated (the defined partial-response
      // protocol — see SyncBackend.pushBatch). Validate the whole response
      // before any settlement so a malformed response cannot partially apply.
      final returnedIds = <String>{};
      for (final r in results) {
        if (!returnedIds.add(r.opId)) {
          throw ProtocolError(
              'Batch response references duplicate op ${r.opId}.');
        }
        if (!byOpId.containsKey(r.opId)) {
          throw ProtocolError(
              'Batch response references unknown op ${r.opId}.');
        }
      }
      final settlements = <PushSettlement>[];
      for (final r in results) {
        final sent = byOpId[r.opId]!;
        if (r.ok && r.record != null) {
          settlements.add(PushSettlement(
            op: _makeOutboxOp(sent,
                payloadJson: outboxPayloadByOpId[sent.opId]),
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
    } on RemoteVersionConflict {
      // Ops were based on a version that moved between preflight GETs and
      // batch landing: re-run each through the per-record OCC path so no
      // concurrent remote edit is lost.
      var pushed = 0;
      var dead = 0;
      var conflicted = 0;
      var blocked = 0;
      var discarded = 0;
      var hadError = false;
      for (final op in toSend) {
        final sr = await pocket.outbox.readSyncRow(pocket.db, op.store, op.id);
        if (sr == null) continue;
        final r = await _pushOp(_makeOutboxOp(op));
        pushed += r.pushed;
        dead += r.deadLettered;
        conflicted += r.conflicted;
        blocked += r.blocked;
        discarded += r.discarded;
        hadError = hadError || r.hadError;
      }
      return PushReport(
          pushed: pushed,
          deadLettered: dead,
          conflicted: conflicted,
          blocked: blocked,
          discarded: discarded,
          hadError: hadError);
    } on ForbiddenError {
      // Server disabled batch: fall back to per-record for this session.
      batchEnabled = false;
      var conflicted = 0;
      var blocked = 0;
      var discarded = 0;
      var hadError = false;
      for (final op in toSend) {
        final r = await _pushOp(_makeOutboxOp(op));
        pushed += r.pushed;
        dead += r.deadLettered;
        conflicted += r.conflicted;
        blocked += r.blocked;
        discarded += r.discarded;
        hadError = hadError || r.hadError;
      }
      return PushReport(
          pushed: pushed,
          deadLettered: dead,
          conflicted: conflicted,
          blocked: blocked,
          discarded: discarded,
          hadError: hadError);
    } on AuthError {
      onAuthError();
      return const PushReport(hadError: true);
    } on SyncError catch (e) {
      // Transient batch failure: retry each op with backoff (honoring a
      // ServerBusyError's Retry-After).
      final retryError = e is ServerBusyError ? e : TransientNetworkError();
      for (final op in toSend) {
        final sr = await pocket.outbox.readSyncRow(pocket.db, op.store, op.id);
        if (sr != null) {
          final r = await _retry(_makeOutboxOp(op), sr, retryError);
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
        final byOpId = {for (final op in half) op.opId: op};
        // Same exact-response validation as the main batch path; a
        // ProtocolError is caught below as a SyncError, leaving this half
        // pending instead of crashing the cycle.
        final returnedIds = <String>{};
        for (final r in results) {
          if (!returnedIds.add(r.opId)) {
            throw ProtocolError(
                'Batch response references duplicate op ${r.opId}.');
          }
          if (!byOpId.containsKey(r.opId)) {
            throw ProtocolError(
                'Batch response references unknown op ${r.opId}.');
          }
        }
        for (final r in results) {
          final sent = byOpId[r.opId]!;
          if (r.ok && r.record != null) {
            await _settle(
              _makeOutboxOp(sent, payloadJson: outboxPayloadByOpId[sent.opId]),
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
        // Transient: leave this half pending; one flaky half must not block
        // the healthy one.
        hadError = true;
        continue;
      }
    }
    return PushReport(pushed: pushed, deadLettered: dead, hadError: hadError);
  }

  OutboxOp _makeOutboxOp(PushOp op, {String? payloadJson}) => OutboxOp(
        store: op.store,
        recordId: op.id,
        kind: OutboxKind.upsert,
        payloadJson: payloadJson ?? op.dataJson,
        baseUpdated: op.baseUpdated,
        baseHash: sha256Hex(op.dataJson),
        opId: op.opId,
        createdAt: 0,
        updatedAt: 0,
      );

  // ------------------------------------------------------------ bookkeeping --

  Future<void> _settle(OutboxOp op, RemoteRecord server,
      {Map<String, Object?>? mergedLogical, String? serverDataJson}) async {
    final schema = pocket.requireTable(op.store).schema;
    final serverLogical = normalizeRemote(schema, server);
    final storedJson =
        serverDataJson ?? canonicalPayload(schema, serverLogical);
    // The settlement op carries the live (pre-request) outbox payload so
    // settlement can detect a newer edit and refuse a stale overwrite.
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

  /// A GET answering a different record than requested is a backend contract
  /// violation: surface it loudly instead of writing the wrong record.
  void _assertFetchedMatches(OutboxOp op, RemoteRecord fetched) {
    if (fetched.id != op.recordId) {
      throw MapFailure('record id "${fetched.id}" does not match requested '
          '"${op.recordId}"');
    }
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

  /// Applies the collection's [MissingRemotePolicy] when an update's target no
  /// longer exists remotely (a remote deletion raced a local offline edit).
  ///
  /// [allowRecreate] is false on the re-entrant path so an oscillating
  /// backend can never loop; the second miss dead-letters.
  Future<PushReport> _handleMissingRemote(
    OutboxOp op,
    SyncRowState sr, {
    bool allowRecreate = true,
  }) async {
    final policy =
        pocket.requireTable(op.store).schema.conflictPolicy.missingRemote;
    switch (policy) {
      case MissingRemotePolicy.conflict:
        // Corrupt base/payload: dead-letter — never escalate a bogus
        // delete-vs-edit conflict from an empty base.
        final Map<String, Object?> basePayload;
        final Map<String, Object?> localPayload;
        try {
          basePayload = parsePayloadJson(sr.baseJson);
          localPayload = parsePayloadJson(op.payloadJson);
        } on MapFailure catch (e) {
          await _deadLetter(op, 'corrupt_payload', error: e.message);
          return const PushReport(deadLettered: 1);
        }
        await _escalateDeleteConflict(op, sr,
            basePayload: basePayload, localPayload: localPayload);
        return const PushReport(conflicted: 1);
      case MissingRemotePolicy.recreate:
        if (!allowRecreate) {
          await _deadLetter(op, 'missing_target');
          return const PushReport(deadLettered: 1);
        }
        return _pushCreate(op, sr, recreateInProgress: true);
      case MissingRemotePolicy.discardLocal:
        // Mirror the remote deletion: the collection purge hard-deletes the
        // row and releases refs/queue entries/metadata.
        await pocket.collection(op.store).purge(op.recordId);
        return const PushReport(discarded: 1);
    }
  }

  /// Escalates a push whose target vanished remotely into a delete-vs-edit
  /// conflict: the remote side is a tombstone so the UI offers acceptLocal
  /// (recreate) / acceptRemote (discard). Payloads are caller-parsed.
  Future<void> _escalateDeleteConflict(OutboxOp op, SyncRowState sr,
      {required Map<String, Object?> basePayload,
      required Map<String, Object?> localPayload}) async {
    final dirtyLocal = computeDirtyFields(basePayload, localPayload).toList()
      ..sort();
    final baseJson = sr.baseJson ?? canonicalize(basePayload);

    await pocket.transaction((tx) async {
      final exec = tx.executor;
      await exec.insert(
          'lp_conflicts',
          {
            'store': op.store,
            'record_id': op.recordId,
            'base_json': baseJson,
            'local_json': canonicalize(localPayload),
            'remote_json': canonicalize({remoteDeletedKey: true}),
            'dirty_local': jsonEncode(dirtyLocal),
            'dirty_remote': jsonEncode(const <String>[]),
            'detected_at': _nowMs(),
          },
          conflictAlgorithm: ConflictAlgorithm.replace);
      await exec.update(
          'lp_sync_row',
          {
            'sync_state': SyncState.conflict.name,
            // The resolution base stays the last known remote version; the
            // tombstone lives in the conflict row's remote_json.
            'base_json': baseJson,
            'base_hash': op.baseHash,
            'base_updated': op.baseUpdated,
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: [op.store, op.recordId]);
      tx.addChange(ChangeSet(op.store, {op.recordId}));
      tx.addChange(ChangeSet('lp_conflicts', {op.recordId}));
    });
  }

  Future<void> _recordConflict(
      OutboxOp op, SyncRowState sr, RemoteRecord fetched, MergeOutcome outcome,
      {required Map<String, Object?> basePayload,
      required Map<String, Object?> localPayload}) async {
    final schema = pocket.requireTable(op.store).schema;
    final fetchedLogical = normalizeRemote(schema, fetched);
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
      await exec.update(
          'lp_sync_row',
          {
            'sync_state': 'conflict',
            // The conflicted remote IS the base for resolution, recorded in
            // base_* (not remote_updated — seen-vs-applied separation).
            'base_json': canonicalize(remotePayload),
            'base_hash': payloadHash(schema, remotePayload),
            'base_updated': fetched.updated,
          },
          where: 'store = ? AND record_id = ?',
          whereArgs: [op.store, op.recordId]);
      tx.addChange(ChangeSet(op.store, {op.recordId}));
      tx.addChange(ChangeSet('lp_conflicts', {op.recordId}));
    });
  }
}
