import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../../secret.dart' show testPBServer;
import '../support/wire_server.dart';

/// PocketBase realtime/SSE wire-contract quirks (tests.md section 5,
/// items 26-30). A single source of scenarios run against BOTH the in-process
/// MockPbServer and the LIVE PocketBase server via [wireTest].
///
/// - every (re)connect mints a NEW 36-char `clientId` and the server drops
///   all prior subscriptions with the old connection — the reconnect
///   re-POSTs the FULL subscription set (a fresh clientId per body), which
///   is *why* the gap-close re-pull exists (`sse_test.dart` pins the
///   re-pull; this file pins the re-subscribe shape);
/// - the subscribe POST answers **204 No Content** and PB checks
///   authorization PER-EVENT (at emit time), never at subscribe time — a
///   subscription whose records never match the client's store filter is
///   silent. The adapter never infers "subscribed = will be notified": the
///   pull/anti-entropy sweep stays the correctness backstop;
/// - a `delete` event carries the FULL pre-delete record snapshot — the
///   adapter's delete path ALWAYS verify-GETs and NEVER applies the embedded
///   deleted record as a live upsert (not dirtied, not re-inserted);
/// - events for records the client may no longer see are silently filtered
///   server-side (listRule checked at emit): the GET-verify path sees 404
///   and the row hides — never trust the SSE payload alone.
///
/// Mock-only (fault injection the live server cannot do): `closeSse()` drops
/// every connection, `pushEvent` can embed a record for a deleted/forbidden
/// row, and events for OTHER stores can be fanned out.
///
/// Item 30 (malformed frames interleaved with valid ones) is NOT duplicated
/// here: it is already pinned end-to-end by `sse_test.dart`'s 'malformed SSE
/// frames are tolerated; later valid events still apply' and unit-pinned for
/// `action`/`record` shape in `sse_parser_test.dart` (item 30 = fully
/// covered, nothing to add).
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

  /// Raw HTTP request against either backend (no adapter), returning
  /// `(status, bodyText)` — the other side of the wire, for pinning server
  /// response shapes verbatim.
  Future<(int, String)> rawSend(
    WireServer s,
    String method,
    String path, {
    Map<String, String> query = const {},
    Object? body,
  }) async {
    await s.start(); // the mock binds its HTTP port here (live: no-op)
    final client = HttpClient();
    try {
      final base = s is MockWireServer
          ? Uri.parse(s.mock.baseUrl.toString())
          : Uri.parse(testPBServer);
      final uri = base.resolve(path).replace(queryParameters: query);
      final req = switch (method) {
        'GET' => await client.getUrl(uri),
        'POST' => await client.postUrl(uri),
        'PATCH' => await client.openUrl('PATCH', uri),
        'DELETE' => await client.openUrl('DELETE', uri),
        _ => throw ArgumentError(method),
      };
      if (body != null) req.headers.contentType = ContentType.json;
      if (s is RealWireServer) {
        final token = await s.tokens.currentToken();
        req.headers.set('Authorization', 'Bearer ${token.value}');
      }
      if (body != null) req.write(jsonEncode(body));
      final res = await req.close();
      final text = res.contentLength == 0
          ? ''
          : await res.transform(utf8.decoder).join();
      return (res.statusCode, text);
    } finally {
      client.close(force: true);
    }
  }

  group('E2E PB wire-contract quirks — realtime SSE', () {
    // -------------------------------------------------------------- #26 --
    wireTest(
        'SSE reconnect mints a NEW clientId and re-POSTs the full '
        'subscription set after the server drops the connection', (s) async {
      final mock = (s as MockWireServer).mock;
      final a = await s.createClient();
      await a.backend.startRealtime();
      await settleRealtime(s);
      expect(mock.subscribePosts, 1,
          reason: 'one subscribe POST for the first connection');
      expect(mock.subscribeBodies, hasLength(1));

      // The server drops every SSE connection (real PB closes the feed on
      // idle/disconnect and discards all subscriptions with the clientId).
      mock.closeSse();
      await waitFor(() => mock.subscribePosts >= 2,
          'the auto-reconnect never re-POSTed the subscriptions');

      // The reconnect mints a FRESH clientId — the whole handshake repeats:
      // a new GET connect, a new subscribe POST, and a NEW subscription body.
      expect(mock.subscribeBodies, hasLength(2),
          reason: 'every reconnect re-posts the subscription body');
      final first = jsonDecode(mock.subscribeBodies[0]) as Map<String, Object?>;
      final second =
          jsonDecode(mock.subscribeBodies[1]) as Map<String, Object?>;
      expect(first['clientId'] as String, isNot(second['clientId'] as String),
          reason: 'a reconnect mints a NEW clientId (the old subscriptions die '
              'with the dropped connection)');
      expect(second['clientId'] as String, isNotEmpty);
      expect(second['subscriptions'], ['data'],
          reason: 'the FULL subscription set is re-posted (all stores live in '
              'the data collection), never a partial delta');
      expect(mock.realtimeConnects, greaterThanOrEqualTo(2),
          reason: 'the backend genuinely re-established the feed');

      // The feed is live again: a fresh event still fast-paths.
      final id = await s.createRecord(s.store, {'name': 'post-reconnect'});
      mock.pushEvent(record: mock.records[id]!.toJson(), action: 'create');
      await waitFor(
          () async => (await a.pocket.collection(s.store).get(id)) != null,
          'the post-reconnect feed never delivered');
      expect((await a.pocket.collection(s.store).get(id))!['name'],
          'post-reconnect');
    }, live: false);

    // -------------------------------------------------------------- #27 --
    wireTest(
        'a 204 subscribe is silent: foreign-store events never apply and '
        'the pull (not SSE) is the correctness backstop', (s) async {
      final mock = s is MockWireServer ? s.mock : null;
      final a = await s.createClient();
      await a.backend.startRealtime();
      await settleRealtime(s);
      if (mock != null) {
        expect(mock.subscribePosts, greaterThanOrEqualTo(1),
            reason: 'the adapter subscribed over the wire');
      }

      // RAW WIRE (mock only — the live server needs a REAL clientId from an
      // open SSE connection): the subscribe POST itself answers **204 No
      // Content** — no "you will be notified" acknowledgement, just silence.
      if (mock != null) {
        final (subStatus, subBody) =
            await rawSend(s, 'POST', '/api/realtime', body: {
          'clientId': 'a' * 36,
          'subscriptions': ['data'],
        });
        expect(subStatus, 204, reason: 'subscribe answers 204 No Content');
        expect(subBody, isEmpty);
        expect(mock.subscribePosts, greaterThanOrEqualTo(2));
      }

      // (mock only) PB checks authorization PER-EVENT, not at subscribe time:
      // events for records whose store the client's filter never matches are
      // silently dropped server-side — the adapter ignores them (no crash, no
      // spurious apply in the client's store).
      if (mock != null) {
        final otherId = mock.seed(store: 'other', data: {'name': 'x'});
        mock.pushEvent(
            record: mock.records[otherId]!.toJson(), action: 'create');
        mock.pushEvent(
            record: mock.records[otherId]!.toJson(), action: 'update');
        await Future<void>.delayed(const Duration(milliseconds: 500));
        expect(await a.pocket.collection(s.store).query().all().count(), 0,
            reason: "a foreign-store event never touches the client's store");
        expect(a.engine.state, SyncEngineState.idle,
            reason: 'ignored events never break the engine');
      }

      // The adapter never equates "subscribed" with "will be notified": a
      // server-side write with NO applicable SSE event (on the mock no event
      // is pushed at all) is still converged by a normal cycle — the pull is
      // the backstop, the feed is a hint.
      final id = await s.createRecord(s.store, {'name': 'no-event'});
      await a.engine.syncNow();
      expect(await a.pocket.collection(s.store).get(id), isNotNull,
          reason: 'the pull converged the write even without an SSE event');
      expect(await a.engine.syncStore.countPending(), 0);
    });

    wireTest(
        'a realtime event for an UNMANAGED store never schedules a pull '
        'cycle (production debounce)', (s) async {
      final mock = (s as MockWireServer).mock;
      // PRODUCTION-like debounce: the hint's pull-only cycle WOULD fire
      // in-window (wireConfig's 365-day default hides the defect).
      final a = await s.createClient(
          config: wireConfig(pushDebounce: const Duration(milliseconds: 50)));
      await a.backend.startRealtime();
      await settleRealtime(s);
      // Settle the connect's own gap-close pull (realtimeDebounce 300ms +
      // pushDebounce 50ms) before snapshotting the list-call baseline.
      await Future<void>.delayed(const Duration(milliseconds: 600));
      final listCallsAfterConnect = mock.listCalls;

      // The live `data` collection carries EVERY store, so a subscriber
      // receives events for stores it does not manage. Such an event must be
      // dropped at the source — the engine never schedules a pull cycle for
      // an unregistered store (pulling one throws an uncaught StateError
      // that aborts the cycle and wedges the engine in `pulling`).
      final otherId = mock.seed(store: 'other', data: {'name': 'x'});
      mock.pushEvent(record: mock.records[otherId]!.toJson(), action: 'create');
      await Future<void>.delayed(const Duration(milliseconds: 400));

      expect(mock.listCalls, listCallsAfterConnect,
          reason: 'no pull was scheduled for the unmanaged store (the old code '
              'issued a list request for it and crashed the cycle)');
      expect(a.engine.state, isNot(SyncEngineState.pulling),
          reason: 'the engine never wedged in a dead pull state');

      // The engine stays fully usable: a manual cycle pulls ITS OWN store
      // and never surfaces the foreign event.
      final id = await s.createRecord(s.store, {'name': 'mine'});
      final report = await a.engine.syncNow();
      expect(report.hadError, isFalse);
      expect(await a.pocket.collection(s.store).get(id), isNotNull);
      expect(await a.engine.syncStore.countPending(), 0);
    }, live: false);

    // -------------------------------------------------------------- #28 --
    wireTest(
        'a delete event\'s embedded snapshot is verify-GET, never a live '
        'upsert: nothing is inserted, nothing is dirtied', (s) async {
      final mock = (s as MockWireServer).mock;
      final a = await s.createClient();
      final hints = <BackendHint>[];
      final sub = a.backend.hints().listen(hints.add);
      addTearDown(() => sub.cancel());
      await a.backend.startRealtime();
      await settleRealtime(s);

      // (a) The dangerous case: a delete event for an id the client has
      // NEVER seen, carrying the full pre-delete snapshot. A naive adapter
      // would treat the embedded record as a fresh create and insert it.
      final ghostId = generateRecordId();
      mock.seed(store: s.store, id: ghostId, data: {'name': 'ghost'});
      final ghostSnapshot = mock.records[ghostId]!.toJson();
      mock.delete(ghostId);
      mock.pushEvent(record: ghostSnapshot, action: 'delete');

      await waitFor(() => hints.any((h) => h.kind == BackendHintKind.deleted),
          'the delete-verification never emitted the deleted hint');

      // The embedded snapshot was NEVER applied as a live upsert: the row
      // was not inserted, no sync row was created, nothing is pending.
      expect(await a.pocket.collection(s.store).get(ghostId), isNull,
          reason: 'the embedded deleted record was never inserted');
      expect(await a.pocket.outbox.readSyncRow(a.pocket.db, s.store, ghostId),
          isNull,
          reason: 'no sync metadata was created for the ghost');
      expect(await a.engine.syncStore.countPending(), 0,
          reason: 'the embedded record never dirtied anything');

      // (b) A KNOWN clean row: a server delete + delete event carrying its
      // snapshot must leave the local row CLEAN — the payload never dirties
      // it (the row is retained for the sweep to hide, per #19).
      final knownId = await s.createRecord(s.store, {'name': 'known'});
      await a.engine.syncNow();
      expect(await a.pocket.collection(s.store).get(knownId), isNotNull);
      final knownSnapshot = mock.records[knownId]!.toJson();
      mock.delete(knownId);
      mock.pushEvent(record: knownSnapshot, action: 'delete');

      await waitFor(
          () =>
              hints.where((h) => h.kind == BackendHintKind.deleted).length >= 2,
          'the second delete-verification never emitted its hint');

      expect(await a.pocket.collection(s.store).get(knownId), isNotNull,
          reason: 'the local row survives (the sweep hides, never deletes)');
      expect(await a.engine.syncStore.countPending(), 0,
          reason: 'the embedded snapshot never dirtied the known row');
      final sr =
          await a.pocket.outbox.readSyncRow(a.pocket.db, s.store, knownId);
      expect(sr!.syncState, SyncState.clean,
          reason: 'the payload did not re-mark the row as locally edited');
      expect(sr.accessState, AccessState.visible,
          reason: 'even visibility was not touched by the payload');
    }, live: false);

    // -------------------------------------------------------------- #29 --
    wireTest(
        'events for unauthorized rows are filtered: GET-verify sees 404 and '
        'the sweep hides — the SSE payload is never trusted', (s) async {
      final mock = (s as MockWireServer).mock;
      final a = await s.createClient();
      final id = await s.createRecord(s.store, {'name': 'secret'});
      await a.engine.syncNow();
      expect(await a.pocket.collection(s.store).get(id), isNotNull);

      final hints = <BackendHint>[];
      final sub = a.backend.hints().listen(hints.add);
      addTearDown(() => sub.cancel());
      await a.backend.startRealtime();
      await settleRealtime(s);

      // Permission flip: the record leaves the client's authorized set (view
      // rule revoked). Real PB then emits a DELETE event for it (the client
      // no longer qualifies at emit time) — carrying the full snapshot.
      mock.hideServerSide(id);
      mock.mutate(id, {'name': 'hidden-payload'});
      mock.pushEvent(record: mock.records[id]!.toJson(), action: 'delete');

      // The adapter's GET-verify path sees 404 (the view rule hides it) →
      // a record-less deleted hint. The embedded payload (with the patched
      // value) was NEVER applied.
      await waitFor(() => hints.any((h) => h.kind == BackendHintKind.deleted),
          'the GET-verify never emitted the deleted hint');
      expect((await a.pocket.collection(s.store).get(id))!['name'], 'secret',
          reason: 'the embedded payload with the patched value was ignored');
      expect(await a.engine.syncStore.countPending(), 0);

      // Hiding is the anti-entropy sweep's job (never the SSE path's): the
      // forced sweep's targeted GET finds the 404 and marks the row hidden.
      await a.engine.invalidateVisibility();
      expect(await a.pocket.collection(s.store).get(id), isNotNull,
          reason: 'hidden, never hard-deleted');
      expect(await a.pocket.collection(s.store).query().all().count(), 0,
          reason: 'the row left the default query scope');
      final sr = await a.pocket.outbox.readSyncRow(a.pocket.db, s.store, id);
      expect(sr!.accessState, AccessState.hidden,
          reason: 'the sweep marked the unauthorized row hidden');
    }, live: false);
  });
}
