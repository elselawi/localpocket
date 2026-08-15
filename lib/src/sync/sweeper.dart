import '../core/local_pocket.dart';
import 'puller.dart';
import 'sync_backend.dart';
import 'sync_config.dart';
import 'sync_store.dart';
import 'sync_tables.dart';

class SweepReport {
  final String store;
  final int scanned;
  final int hidden;
  final int fetched;
  const SweepReport(this.store, this.scanned, this.hidden, this.fetched);
}

/// Anti-entropy id-range sweep — the only mechanism trusted to
/// detect visibility changes. Never deletes; only toggles the `hidden` bit.
class Sweeper {
  final LocalPocket pocket;
  final SyncBackend backend;
  final SyncConfig config;
  final SyncStore syncStore;
  final Puller puller;

  Sweeper(this.pocket, this.backend, this.config, this.syncStore, this.puller);

  static const String _alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';

  /// Sweeps the next `bucketsPerSweep` buckets for every store when due
  /// ([force] bypasses the interval, e.g. auth/identity change).
  Future<List<SweepReport>> sweepIfDue({bool force = false}) async {
    final reports = <SweepReport>[];
    final now = config.now();
    for (final store in pocket.storeNames) {
      final st = await syncStore.readSweep(store);
      if (!force &&
          st.lastSweepAt != null &&
          (now - st.lastSweepAt!) < config.sweepInterval.inMilliseconds) {
        continue;
      }
      var bucket = st.bucket;
      // Forced sweeps (auth/identity change, explicit visibility invalidation)
      // are immediate FULL scans; the normal due path
      // advances only `bucketsPerSweep` buckets per cycle.
      final perCycle =
          force ? config.sweepBucketCount : config.bucketsPerSweep;
      for (var i = 0; i < perCycle; i++) {
        bucket = (bucket + 1) % config.sweepBucketCount;
        reports.add(await sweepBucket(store, bucket));
      }
      await pocket.transaction((tx) async {
        await syncStore.writeSweep(tx.executor, store,
            bucket: bucket, sweepAt: now);
      });
    }
    return reports;
  }

  Future<SweepReport> sweepBucket(String store, int bucket) async {
    final prefix = _alphabet[bucket];
    final remoteSeen = <String>{};
    var fetched = 0;
    String? cursorId;

    while (true) {
      final page = await backend.listChanges(
        store,
        idPrefix: prefix,
        fromId: cursorId,
        perPage: config.maxPage,
      );
      if (page.isEmpty) break;
      for (final r in page) {
        remoteSeen.add(r.id);
      }
      // Set-based sync-row probe for the whole page instead of
      // one readSyncRow query per remote id.
      final srById = await _probeSyncRows(store, [for (final r in page) r.id]);
      for (final r in page) {
        final sr = srById[r.id];
        if (sr == null ||
            sr.accessState == AccessState.hidden ||
            sr.remoteUpdated != r.updated) {
          // Missed by the watermark / re-visible / drifted: targeted fetch.
          await puller.fetchOne(store, r.id);
          fetched++;
        }
      }
      cursorId = page.last.id;
      if (page.length < config.maxPage) break;
    }

    // Rows in this bucket that the remote no longer lists are hidden — never
    // deleted (permission loss and server hard-delete are indistinguishable).
    var hidden = 0;
    final localRows = await pocket.db.rawQuery(
        'SELECT record_id FROM lp_sync_row WHERE store = ? AND record_id LIKE ?',
        [store, '$prefix%']);
    for (final r in localRows) {
      final id = r['record_id'] as String;
      if (!remoteSeen.contains(id)) {
        await puller.markHidden(store, id);
        hidden++;
      }
    }

    // Optional purge of long-hidden rows.
    if (config.purgeHiddenAfter != null) {
      final purgeCutoff = config.now() - config.purgeHiddenAfter!.inMilliseconds;
      final staleHidden = await pocket.db.rawQuery(
        'SELECT record_id FROM lp_sync_row WHERE store = ? AND access_state = ? AND (last_seen_at IS NOT NULL AND last_seen_at < ?)',
        [store, AccessState.hidden.name, purgeCutoff],
      );
      for (final r in staleHidden) {
        final id = r['record_id'] as String;
        await pocket.collection(store).purge(id);
      }
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
        result[r['record_id'] as String] = SyncRowState.fromRow(r);
      }
    }
    return result;
  }
}
