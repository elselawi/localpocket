import 'dart:async';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../support/wire_server.dart';

/// Realtime (SSE) end-to-end (tests.md #18-21) — a single source of
/// scenarios run against BOTH the in-process MockPbServer and the LIVE
/// PocketBase server via [wireTest].
///
/// Unified (mock + live):
/// - a `delete` event is a record-less DOORBELL: the backend verify-GETs the
///   target, emits a `deleted` hint, and the local row is NEVER hard-deleted
///   (nor dirtied). Hiding is the anti-entropy sweep's job, never the SSE
///   path's;
/// - every (re)connect re-runs the subscribe handshake and emits a store-wide
///   gap hint per store, so a server-side write during an SSE gap is healed
///   by the reconnect pull (no explicit syncNow).
///
/// Mock-only (fault injection the live server cannot do):
/// - a `changed` hint carrying an embedded record is FAST-PATH applied
///   directly by the engine (`puller.fastPathApply`) — no syncNow, no pull;
/// - malformed/incomplete SSE frames are tolerated: the connection survives
///   and later valid events still fast-path.
void main() {
  /// Polls until [predicate] or fails after [deadlineMs].
  Future<void> waitFor(FutureOr<bool> Function() predicate, String reason,
      {int deadlineMs = 10000}) async {
    final deadline = DateTime.now().add(Duration(milliseconds: deadlineMs));
    while (!await predicate()) {
      if (DateTime.now().isAfter(deadline)) fail(reason);
      await Future<void>.delayed(const Duration(milliseconds: 75));
    }
  }

  /// Waits for the realtime feed to be connected and subscribed.
  Future<void> settleRealtime(WireServer s) async {
    if (s is MockWireServer) {
      await waitFor(() => s.mock.realtimeConnects >= 1,
          'the SSE connection never opened');
    } else {
      await Future<void>.delayed(const Duration(milliseconds: 1500));
    }
  }

  /// Server-side hard-delete that ALSO emits a realtime delete event: the
  /// mock needs an explicit `pushEvent` (its deleteRecord is silent), the
  /// live server's realtime feed emits the delete naturally.
  Future<void> deleteWithSseEvent(WireServer s, String id) async {
    final rec = s is MockWireServer ? s.mock.records[id]!.toJson() : null;
    await s.deleteRecord(s.store, id);
    if (s is MockWireServer) {
      s.mock.pushEvent(record: rec!, action: 'delete');
    }
  }

  group('E2E realtime (SSE) over the wire', () {
    wireTest('realtime fast-path applies an embedded record without syncNow',
        (s) async {
      final mock = (s as MockWireServer).mock;
      final a = await s.createClient();

      await a.backend.startRealtime();
      await settleRealtime(s);
      expect(mock.subscribePosts, 1,
          reason: 'one subscribe POST for the single store');

      // A write lands THROUGH the server; the mock replays the feed.
      final before = a.engine.debugActions.length;
      final id = await s.createRecord(s.store, {'name': 'via-sse'});
      mock.pushEvent(record: mock.records[id]!.toJson(), action: 'create');

      // The engine fast-paths the embedded record — no full sync cycle.
      await waitFor(
          () async => (await a.pocket.collection(s.store).get(id)) != null,
          'the fast-path never applied the record');
      expect((await a.pocket.collection(s.store).get(id))!['name'], 'via-sse');
      final newActions = a.engine.debugActions.sublist(before);
      expect(newActions, contains('fast:widgets'),
          reason: 'the embedded record took the fast path');
      expect(newActions, isNot(contains('cycle')),
          reason: 'never ran a full sync cycle');
      expect(await a.engine.syncStore.countPending(), 0);
    }, live: false);

    wireTest('realtime deleted hint is a doorbell: B never hard-deletes',
        (s) async {
      final a = await s.createClient();
      final id = await s.createRecord(s.store, {'name': 'doomed'});
      await a.engine.syncNow();
      expect(await a.pocket.collection(s.store).get(id), isNotNull);

      final hints = <BackendHint>[];
      final sub = a.backend.hints().listen(hints.add);
      addTearDown(() => sub.cancel());
      await a.backend.startRealtime();
      await settleRealtime(s);

      // Server delete + realtime delete event (the record is gone, so the
      // backend's verify-GET turns it into a record-less doorbell).
      await deleteWithSseEvent(s, id);

      await waitFor(() => hints.any((h) => h.kind == BackendHintKind.deleted),
          'the deleted doorbell never arrived');

      // The doorbell NEVER dirty-removes: the row stays in scope and clean.
      expect(await a.pocket.collection(s.store).get(id), isNotNull,
          reason: 'no hard delete: get() still returns the row');
      expect(await a.pocket.collection(s.store).query().all().count(), 1,
          reason: 'the row never left the default query scope');
      final sr = await a.pocket.outbox.readSyncRow(a.pocket.db, s.store, id);
      expect(sr!.accessState, AccessState.visible,
          reason: 'not even hidden by the SSE path');

      // Hiding is the sweep's job: the next forced sweep finds the missing id.
      await a.engine.invalidateVisibility();
      expect(await a.pocket.collection(s.store).get(id), isNotNull,
          reason: 'still retained — hidden, never deleted');
      expect(await a.pocket.collection(s.store).query().all().count(), 0);
      final sr2 = await a.pocket.outbox.readSyncRow(a.pocket.db, s.store, id);
      expect(sr2!.accessState, AccessState.hidden,
          reason: 'the anti-entropy sweep marked it hidden');
    });

    wireTest(
        'malformed SSE frames are tolerated; later valid events still '
        'apply', (s) async {
      final mock = (s as MockWireServer).mock;
      final a = await s.createClient();
      await a.backend.startRealtime();
      await settleRealtime(s);

      // Interleave garbage: prose, invalid JSON, keepalive comments, and a
      // JSON frame whose record is not a map.
      mock.pushRaw('this is not sse at all\n\n');
      mock.pushRaw('event:data\ndata:{not valid json}\n\n');
      mock.pushRaw(':\n\n');
      mock.pushRaw('event:data\ndata:{"record": 42}\n\n');
      mock.pushRaw('event:data\ndata:{"action":"create"}\n\n');
      await Future<void>.delayed(const Duration(milliseconds: 300));

      // The connection survives and the engine stays usable.
      expect(mock.realtimeConnects, 1,
          reason: 'bad frames never killed the SSE connection');
      expect(a.engine.state, SyncEngineState.idle);

      // A later VALID event still fast-paths.
      final id = await s.createRecord(s.store, {'name': 'after-junk'});
      mock.pushEvent(record: mock.records[id]!.toJson(), action: 'create');
      await waitFor(
          () async => (await a.pocket.collection(s.store).get(id)) != null,
          'the valid event after the garbage never applied');
      expect(
          (await a.pocket.collection(s.store).get(id))!['name'], 'after-junk');

      // And a full manual cycle still works afterwards.
      await a.pocket.collection(s.store).put(record(name: 'post-junk'));
      final report = await a.engine.syncNow();
      expect(report.hadError, isFalse);
      expect(await s.countRecords(s.store), 2,
          reason: 'both records are on the server after the cycle');
    }, live: false);

    wireTest('SSE reconnect re-subscribes and re-pulls: gap write is healed',
        (s) async {
      final a = await s.createClient(
          config: wireConfig(pushDebounce: const Duration(milliseconds: 50)));
      await a.backend.startRealtime();
      await settleRealtime(s);
      final connectsAtStart = s is MockWireServer ? s.mock.realtimeConnects : 0;

      // A server-side write happens during the SSE gap (feed dropped).
      await a.backend.stopRealtime();
      final id = await s.createRecord(s.store, {'name': 'during-gap'});

      // The reconnect re-runs the subscribe handshake and its store-wide gap
      // hint pulls the store — healing the gap WITHOUT any explicit syncNow.
      await a.backend.startRealtime();
      await waitFor(
          () async => (await a.pocket.collection(s.store).get(id)) != null,
          'the reconnect pull never healed the gap');
      expect(
          (await a.pocket.collection(s.store).get(id))!['name'], 'during-gap');

      if (s is MockWireServer) {
        // The reconnect genuinely re-established the feed: a new connect, a
        // new subscribe POST, and both subscription bodies on the wire.
        expect(
            s.mock.realtimeConnects, greaterThanOrEqualTo(connectsAtStart + 1),
            reason: 'the backend reconnected after stopRealtime()');
        expect(s.mock.subscribePosts, greaterThanOrEqualTo(2),
            reason: 'every reconnect re-POSTs the subscriptions');
        expect(s.mock.subscribeBodies.length, greaterThanOrEqualTo(2),
            reason: 'both subscription bodies were recorded on the wire');

        // The feed is live again: a fresh event fast-paths.
        final id2 = await s.createRecord(s.store, {'name': 'after-reconn'});
        s.mock
            .pushEvent(record: s.mock.records[id2]!.toJson(), action: 'create');
        await waitFor(
            () async => (await a.pocket.collection(s.store).get(id2)) != null,
            'the post-reconnect feed never delivered');
        expect((await a.pocket.collection(s.store).get(id2))!['name'],
            'after-reconn');
      } else {
        expect(await a.engine.syncStore.countPending(), 0,
            reason: 'the healed pull left nothing pending on the live server');
      }
    });
  });
}
