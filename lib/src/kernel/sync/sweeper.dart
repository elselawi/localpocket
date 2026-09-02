import '../../kernel/local_pocket.dart';
import 'puller.dart';
import 'sync_backend.dart';
import 'sync_config.dart';
import 'sync_store.dart';
import 'sync_tables.dart';

/// {@template localpocket.sweep_report}
/// Results from sweeping one store bucket.
/// {@endtemplate}
class SweepReport {
  /// Creates a sweep report.
  ///
  /// {@macro localpocket.sweep_report}
  const SweepReport(this.store, this.scanned, this.hidden, this.fetched);

  /// Store that was swept.
  final String store;

  /// Number of distinct remote records observed.
  final int scanned;

  /// Number of local records newly marked hidden.
  final int hidden;

  /// Number of records fetched for targeted self-healing or quarantine retry.
  final int fetched;
}

/// {@template localpocket.sweeper}
/// Anti-entropy id-range sweep — the only mechanism trusted to
/// detect visibility changes. Never deletes; only toggles the `hidden` bit.
/// {@endtemplate}
class Sweeper {
  /// Creates a sweeper for [pocket] and its synchronization [backend].
  ///
  /// {@macro localpocket.sweeper}
  Sweeper(this.pocket, this.backend, this.config, this.syncStore, this.puller);

  /// Local database and collection access.
  final LocalPocket pocket;

  /// Remote synchronization backend.
  final SyncBackend backend;

  /// Sweep scheduling and retry configuration.
  final SyncConfig config;

  /// Persistent synchronization metadata store.
  final SyncStore syncStore;

  /// Authoritative remote record application path.
  final Puller puller;

  static const String _alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';

  /// Effective bucket count: clamped to the 36-char id alphabet; a
  /// non-positive configured count is treated as 1.
  int get _bucketCount {
    final c = config.sweepBucketCount;
    if (c > _alphabet.length) return _alphabet.length;
    if (c < 1) return 1;
    return c;
  }

  /// Sweeps the next `bucketsPerSweep` buckets for every store when due
  /// ([force] bypasses the interval, e.g. auth/identity change).
  ///
  /// One store failing never prevents the remaining stores from sweeping; the
  /// first error is rethrown afterwards so the engine can flag it.
  Future<List<SweepReport>> sweepIfDue({bool force = false}) async {
    final reports = <SweepReport>[];
    Object? firstError;
    final now = config.now();
    for (final store in pocket.storeNames) {
      try {
        final st = await syncStore.readSweep(store);
        if (!force &&
            st.lastSweepAt != null &&
            (now - st.lastSweepAt!) < config.sweepInterval.inMilliseconds) {
          continue;
        }
        var bucket = st.bucket;
        // Forced sweeps (auth/identity change) are immediate FULL scans; the
        // normal due path advances only `bucketsPerSweep` buckets per cycle.
        final perCycle = force ? _bucketCount : config.bucketsPerSweep;
        for (var i = 0; i < perCycle; i++) {
          bucket = (bucket + 1) % _bucketCount;
          reports.add(await sweepBucket(store, bucket));
        }
        await pocket.transaction((tx) async {
          await syncStore.writeSweep(tx.executor, store,
              bucket: bucket, sweepAt: now);
        });
      } catch (e) {
        firstError ??= e;
      }
    }
    if (firstError != null) {
      // Re-throw the original error after the other stores swept (no cast:
      // callers may throw any Dart object).
      throw firstError;
    }
    return reports;
  }

  /// Sweeps one id-prefix bucket for [store].
  Future<SweepReport> sweepBucket(String store, int bucket) async {
    if (bucket < 0 || bucket >= _alphabet.length) {
      throw ArgumentError(
          'Sweep bucket $bucket is outside the 0..${_alphabet.length - 1} alphabet.');
    }
    final prefix = _alphabet[bucket];
    final remoteSeen = <String>{};
    var fetched = 0;
    String? cursorId;
    // PB hard-caps perPage at 500; the same clamped size drives the request
    // and the page-completion check below.
    final pageSize = config.maxPage.clamp(1, pbMaxPage).toInt();

    while (true) {
      final page = await backend.listChanges(
        store,
        idPrefix: prefix,
        fromId: cursorId,
        perPage: pageSize,
      );
      if (page.isEmpty) break;
      for (final r in page) {
        remoteSeen.add(r.id);
      }
      // Set-based sync-row probe for the whole page instead of
      // one readSyncRow query per remote id.
      final srById = await _probeSyncRows(store, [for (final r in page) r.id]);
      final needsFetch = <String>[];
      for (final r in page) {
        final sr = srById[r.id];
        if (sr == null ||
            sr.accessState == AccessState.hidden ||
            sr.remoteUpdated != r.updated) {
          // Missed by the watermark / re-visible / drifted: targeted fetch.
          needsFetch.add(r.id);
        }
      }
      if (needsFetch.isNotEmpty) {
        await puller.fetchBatch(store, needsFetch);
        fetched += needsFetch.length;
      }
      cursorId = page.last.id;
      if (page.length < pageSize) break;
    }

    // Rows in this bucket that the remote no longer lists are hidden — never
    // deleted (permission loss and server hard-delete are indistinguishable).
    var hidden = 0;
    final localRows = await pocket.db.rawQuery(
        'SELECT record_id, access_state FROM lp_sync_row '
        'WHERE store = ? AND record_id LIKE ?',
        [store, '$prefix%']);
    final toHide = <String>[];
    for (final r in localRows) {
      final id = r['record_id']! as String;
      if (!remoteSeen.contains(id)) {
        // Already-hidden rows are skipped: re-hiding would only churn the
        // change bus and inflate the reported hidden count.
        if (r['access_state'] == AccessState.hidden.name) continue;
        toHide.add(id);
      }
    }
    if (toHide.isNotEmpty) {
      await puller.markHiddenMany(store, toHide);
      hidden += toHide.length;
    }

    // Optional purge of long-hidden rows. Only clean rows are safe: dirty,
    // in-flight, conflicted, errored, or quarantined rows hold local edits
    // or recovery payloads that must never be silently destroyed.
    if (config.purgeHiddenAfter != null) {
      final purgeCutoff =
          config.now() - config.purgeHiddenAfter!.inMilliseconds;
      final staleHidden = await pocket.db.rawQuery(
        'SELECT record_id FROM lp_sync_row WHERE store = ? AND access_state = ? '
        "AND sync_state = 'clean' AND (last_seen_at IS NOT NULL AND last_seen_at < ?)",
        [store, AccessState.hidden.name, purgeCutoff],
      );
      for (final r in staleHidden) {
        final id = r['record_id']! as String;
        await pocket.collection(store).purge(id);
      }
    }

    // Quarantined records are retried out-of-band: the pull cursor advances
    // past a malformed record, so a dedicated re-fetch of rows whose backoff
    // deadline passed is required (fetchBatch re-applies or re-quarantines).
    final retryCutoff = config.now();
    final quarantined = await pocket.db.rawQuery(
        'SELECT record_id FROM lp_sync_row '
        "WHERE store = ? AND sync_state = 'quarantine' AND record_id LIKE ? "
        'AND next_retry_at <= ?',
        [store, '$prefix%', retryCutoff]);
    if (quarantined.isNotEmpty) {
      final ids = [for (final r in quarantined) r['record_id']! as String];
      await puller.fetchBatch(store, ids);
      fetched += ids.length;
    }

    return SweepReport(store, remoteSeen.length, hidden, fetched);
  }

  /// Chunked sync-row probe for a batch of remote ids (batch
  /// probes instead of one query per id).
  Future<Map<String, SyncRowState>> _probeSyncRows(
      String store, List<String> ids) async {
    final result = <String, SyncRowState>{};
    const page = 500;
    for (var i = 0; i < ids.length; i += page) {
      final chunk = ids.sublist(i, (i + page).clamp(0, ids.length));
      final ph = List.filled(chunk.length, '?').join(', ');
      final rows = await pocket.db.rawQuery(
          'SELECT * FROM lp_sync_row WHERE store = ? AND record_id IN ($ph)',
          [store, ...chunk]);
      for (final r in rows) {
        result[r['record_id']! as String] = SyncRowState.fromRow(r);
      }
    }
    return result;
  }
}
