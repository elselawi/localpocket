import 'dart:convert';
import 'dart:io';

import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart' show record, tempDbPath;
import '../../secret.dart';
import '../support/wire_server.dart';

/// PocketBase wire-contract quirks — create/update/delete (tests.md section
/// 3, items 12-18). A single source of scenarios run against BOTH the
/// in-process MockPbServer and the LIVE PocketBase server via [wireTest].
///
/// - a duplicate custom id answers **400 `validation_pk_invalid` on the
///   `id` field** (never a 409 conflict). Driven through the ENGINE push:
///   an in-batch collision fails the whole batch transactionally, the
///   binary-split/per-record fallback recovers, and exactly ONE record per
///   id survives;
/// - PB enforces the `[a-z0-9]{15}` id shape: an UPPERCASE id is rejected
///   raw (the length tests never pinned case), and an engine-level op whose
///   record id violates the pattern dead-letters `validation_push` without
///   stalling healthy neighbors;
/// - PATCH of a nonexistent id answers **404 and never upserts**: the
///   engine's missing-remote policy dead-letters `missing_target`, nothing
///   is recreated;
/// - DELETE answers **204 with an empty body** (the backend must not
///   JSON-parse it) — pinned raw on both backends;
/// - the wire `data` of a LIVE record carries NO `archived` key at all —
///   `archived:false` is localpocket's convention. Pull-side: a remote
///   record created WITHOUT the key lands locally as visible;
/// - every record response echoes unknown top-level keys
///   (`collectionId`/`collectionName`) across create, update, AND list
///   responses — normalization must DROP them (a live-relevant regression
///   trap);
/// - `created == updated` on first create then diverges; the adapter's pull
///   filter never mentions `created`.
Future<int> deadLetterCount(WireClient c) async =>
    (await c.pocket.db.rawQuery('SELECT COUNT(*) AS c FROM lp_dead_letter'))
        .first['c'] as int;

void main() {
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

  group('E2E PB wire-contract quirks — create/update/delete', () {
    // -------------------------------------------------------------- #12 --
    wireTest(
        'duplicate custom id mid-batch: transactional rollback -> fallback '
        '-> exactly one record', (s) async {
      final mock = s is MockWireServer ? s.mock : null;

      // Seed a remote record whose id collides with one of A's offline ops:
      // A pushes TWO creates in one batch; the colliding one hits the
      // duplicate-id 400 and (mock, transactional) rolls the batch back.
      final colliding = generateRecordId();
      await s.createRecord(s.store, {'name': 'remote-original'}, id: colliding);

      final dbA = await tempDbPath();
      final a = await s.createClient(path: dbA.path, autoStart: false);
      s.onClose(() => dbA.cleanup());
      await a.pocket.collection(s.store).put(record(name: 'healthy-op'));
      await a.pocket
          .collection(s.store)
          .put(record(id: colliding, name: 'colliding'));
      expect(await a.engine.syncStore.countPending(), 2);
      await a.engine.start();

      var guard = 0;
      while (await a.engine.syncStore.countPending() > 0) {
        await a.engine.syncNow();
        guard++;
        if (guard > 20) fail('drain did not converge after the collision');
      }

      // EXACTLY ONE record per id survived remotely.
      expect(await s.countRecords(s.store), 2);
      expect(await s.readRecord(s.store, colliding), isNotNull);

      // Wire shape: a duplicate answer is a 400 carrying
      // data.id.code == validation_pk_invalid (never a 409).
      final (status, body) =
          await rawSend(s, 'POST', '/api/collections/data/records', body: {
        'id': colliding,
        'store': s.store,
        'data': {'n': 1}
      });
      expect(status, 400, reason: 'a duplicate is a 400, not a 409');
      final decoded = jsonDecode(body) as Map<String, Object?>;
      expect((((decoded['data']! as Map)['id']) as Map)['code'],
          'validation_pk_invalid');

      // Local convergence: A recovered through the DuplicateIdError path; a
      // recoverable collision never dead-letters and the row settles.
      expect(await deadLetterCount(a), 0,
          reason: 'a recoverable collision never dead-letters');
      final sr =
          await a.pocket.outbox.readSyncRow(a.pocket.db, s.store, colliding);
      expect(sr!.syncState, SyncState.clean);
      final survivorName =
          (await a.pocket.collection(s.store).get(colliding))!['name'];
      expect(survivorName, anyOf('colliding', 'remote-original'),
          reason: 'the merged survivor carries one coherent content');
      if (mock != null) {
        expect(mock.records[colliding]!.data.containsKey('n'), isFalse,
            reason: 'the probe duplicate never landed');
      }
    });

    // -------------------------------------------------------------- #13 --
    wireTest(
        'uppercase id rejected raw + engine dead-letters an invalid '
        'locally-minted id without stalling the drain', (s) async {
      // RAW WIRE: an uppercase id violates the PB pattern even though its
      // length is right — the length-only tests never pinned case.
      final upperId = 'A${generateRecordId().substring(1)}'; // 15 chars
      final (badStatus, _) =
          await rawSend(s, 'POST', '/api/collections/data/records', body: {
        'id': upperId,
        'store': s.store,
        'data': {'name': 'x'}
      });
      expect(badStatus, 400, reason: 'an uppercase id violates [a-z0-9]{15}');

      // ENGINE LEVEL (mock only): a pending create whose STORED record_id
      // violates the pattern must dead-letter while healthy neighbors still
      // land. put() itself rejects bad ids up front, so reaching the drain
      // requires a corrupted store — simulated by re-keying a pending op.
      final mock = (s as MockWireServer).mock;

      final dbA = await tempDbPath();
      final a = await s.createClient(path: dbA.path);
      s.onClose(() => dbA.cleanup());

      final good = generateRecordId();
      await a.pocket.collection(s.store).put(record(id: good, name: 'good'));

      final victim = generateRecordId();
      await a.pocket
          .collection(s.store)
          .put(record(id: victim, name: 'victim'));
      final opRows = await a.pocket.db.query('lp_outbox',
          where: 'store = ? AND record_id = ?', whereArgs: [s.store, victim]);
      final srRows = await a.pocket.db.query('lp_sync_row',
          where: 'store = ? AND record_id = ?', whereArgs: [s.store, victim]);
      await a.pocket.db.delete('lp_outbox',
          where: 'store = ? AND record_id = ?', whereArgs: [s.store, victim]);
      await a.pocket.db.delete('lp_sync_row',
          where: 'store = ? AND record_id = ?', whereArgs: [s.store, victim]);
      // Re-key the stored rows to the invalid id (column-order-safe: rebuild
      // from the canonical column lists so every column survives the move).
      await a.pocket.db.insert('lp_outbox', {
        for (final c in outboxColumns) c: opRows.single[c],
        'record_id': upperId,
      });
      await a.pocket.db.insert('lp_sync_row', {
        for (final c in syncRowColumns) c: srRows.single[c],
        'record_id': upperId,
      });

      await a.engine.syncNow();

      // The poison dead-lettered (batch mode fails its whole request, so
      // the binary-split isolates it as batch_poison; per-record mode would
      // answer validation_push — both are terminal dead letters)…
      final dls = await a.pocket.db.query('lp_dead_letter',
          where: 'record_id = ?', whereArgs: [upperId]);
      expect(dls.length, 1, reason: 'the invalid-id op dead-lettered');
      expect(dls.single['kind'], anyOf('validation_push', 'batch_poison'));
      // …and the healthy neighbor landed anyway: the drain did not stall.
      expect(await s.countRecords(s.store), 1);
      expect(mock.records[upperId], isNull,
          reason: 'an invalid-id create never lands on the server');
      expect(await a.pocket.collection(s.store).get(good), isNotNull);
      expect(await a.engine.syncStore.countPending(), 0);
    }, live: false /* requires corrupting local sync rows */);

    // -------------------------------------------------------------- #14 --
    wireTest(
        'PATCH of a nonexistent id is a 404, never an upsert: the vanished '
        'target parks locally, nothing is recreated', (s) async {
      final mock = s is MockWireServer ? s.mock : null;

      // RAW WIRE: PATCHing a vanished id answers 404 and creates nothing.
      final ghost = generateRecordId();
      final (patchStatus, _) = await rawSend(
        s,
        'PATCH',
        '/api/collections/data/records/$ghost',
        body: {
          'data': {'name': 'resurrect'}
        },
      );
      expect(patchStatus, 404, reason: 'PB never upserts on PATCH');
      expect(await s.readRecord(s.store, ghost), isNull);

      // ENGINE LEVEL: B patches a record that was deleted server-side; B's
      // push hits the 404. The DEFAULT missing-remote policy ESCALATES a
      // delete-vs-edit conflict (the remote side is a tombstone) — the edit
      // is parked for an explicit resolution and NEVER silently recreated.
      final dbB = await tempDbPath();
      final b = await s.createClient(path: dbB.path);
      s.onClose(() => dbB.cleanup());
      final id = await s.createRecord(s.store, {'name': 'doomed'});
      await b.engine.syncNow();
      expect(await b.pocket.collection(s.store).get(id), isNotNull);

      await s.deleteRecord(s.store, id);
      await b.pocket.collection(s.store).patch(id, {'name': 'from-B'});
      await b.engine.syncNow();

      expect(await s.readRecord(s.store, id), isNull,
          reason: 'the 404 NEVER recreated the record server-side');
      // (SyncReport deliberately has no `conflicted` count — escalation is
      // asserted via the conflict rows below.)
      final row = await b.pocket.outbox.readSyncRow(b.pocket.db, s.store, id);
      expect(row!.syncState, SyncState.conflict,
          reason: 'the row parks in conflict for an explicit resolution');
      expect(row.accessState, AccessState.visible,
          reason: 'a parked edit stays visible locally');
      final conflict = await b.pocket.conflicts.get(s.store, id);
      expect(conflict!.remoteDeleted, isTrue,
          reason: 'the remote side is recorded as a tombstone');
      expect(conflict.local['name'], 'from-B');
      expect(await b.pocket.conflicts.listOpen(store: s.store), hasLength(1));

      // Resolution over the wire: acceptRemote DISCARDS the local edit
      // (mirrors the remote deletion) — still no recreation.
      await b.pocket.conflicts.acceptRemote(s.store, id);
      await b.engine.syncNow();
      expect(await b.pocket.collection(s.store).get(id), isNull,
          reason: 'acceptRemote mirrors the remote deletion');
      expect(await s.readRecord(s.store, id), isNull,
          reason: 'still never recreated');
      expect(await b.engine.syncStore.countPending(), 0);
      if (mock != null) {
        expect(mock.records[id], isNull);
      }
    });

    // -------------------------------------------------------------- #15 --
    wireTest('DELETE answers 204 with an EMPTY body', (s) async {
      final id = await s.createRecord(s.store, {'name': 'to-be-deleted'});
      final (status, text) =
          await rawSend(s, 'DELETE', '/api/collections/data/records/$id');
      expect(status, 204, reason: 'PB answers 204 No Content');
      expect(text, isEmpty,
          reason: 'an empty body — the backend must not JSON-parse it');
      expect(await s.readRecord(s.store, id), isNull);
    });

    // -------------------------------------------------------------- #16 --
    wireTest(
        'a live remote record carries NO archived key and lands locally '
        'as visible', (s) async {
      final mock = s is MockWireServer ? s.mock : null;

      // Raw create with no archived flag anywhere in the data.
      final (createStatus, createBody) =
          await rawSend(s, 'POST', '/api/collections/data/records', body: {
        'id': generateRecordId(),
        'store': s.store,
        'data': {'name': 'plain-live'},
      });
      expect(createStatus, inInclusiveRange(200, 299));
      final resp = jsonDecode(createBody) as Map<String, Object?>;
      final id = resp['id']! as String;

      // CREATE side: the echoed data has no `archived` key at all.
      final echoedData = resp['data']! as Map;
      expect(echoedData.containsKey('archived'), isFalse,
          reason: 'archived:false is localpocket-only; PB omits the key');

      // LIST side: the same absence holds in list responses.
      final (listStatus, listBody) = await rawSend(
          s, 'GET', '/api/collections/data/records',
          query: {'filter': "(id='$id')", 'perPage': '10'});
      expect(listStatus, 200);
      final items =
          ((jsonDecode(listBody) as Map)['items'] as List).cast<Map>();
      expect(items, hasLength(1));
      expect((items.single['data'] as Map).containsKey('archived'), isFalse,
          reason: 'list responses omit the key too');

      // PULL side: the key-less remote record lands locally VISIBLE.
      final a = await s.createClient();
      await a.engine.syncNow();
      final local = await a.pocket.collection(s.store).get(id);
      expect(local!['name'], 'plain-live');
      expect(local['archived'], isFalse,
          reason: 'absent on the wire == visible locally');
      expect(await a.pocket.collection(s.store).query().all().count(), 1);
      final sr = await a.pocket.outbox.readSyncRow(a.pocket.db, s.store, id);
      expect(sr!.accessState, AccessState.visible);
      if (mock != null) {
        expect(mock.records[id]!.data.containsKey('archived'), isFalse);
      }
    });

    // -------------------------------------------------------------- #17 --
    wireTest(
        'echo keys collectionId/collectionName are dropped by normalization '
        '(create, update, and list)', (s) async {
      final mock = s is MockWireServer ? s.mock : null;

      // CREATE response echoes the keys (raw pin).
      final (createStatus, createBody) =
          await rawSend(s, 'POST', '/api/collections/data/records', body: {
        'id': generateRecordId(),
        'store': s.store,
        'data': {'name': 'echoey'},
      });
      expect(createStatus, inInclusiveRange(200, 299));
      final created = jsonDecode(createBody) as Map<String, Object?>;
      expect(created['collectionId'], isNotNull);
      expect(created['collectionName'], isNotNull);
      final id = created['id']! as String;

      // UPDATE response echoes them too.
      final (patchStatus, patchBody) = await rawSend(
        s,
        'PATCH',
        '/api/collections/data/records/$id',
        body: {
          'data': {'name': 'echoey-2'}
        },
      );
      expect(patchStatus, 200);
      final patched = jsonDecode(patchBody) as Map<String, Object?>;
      expect(patched['collectionId'], isNotNull);
      expect(patched['collectionName'], isNotNull);

      // LIST responses carry them on every item.
      final (listStatus, listBody) = await rawSend(
          s, 'GET', '/api/collections/data/records',
          query: {'filter': "(id='$id')", 'perPage': '10'});
      expect(listStatus, 200);
      final items =
          ((jsonDecode(listBody) as Map)['items'] as List).cast<Map>();
      expect(items.single['collectionId'], isNotNull);
      expect(items.single['collectionName'], isNotNull);

      // Engine pull: normalization DROPS the unknown top-level keys from the
      // domain row — they must never leak into local documents.
      final a = await s.createClient();
      await a.engine.syncNow();
      final local = await a.pocket.collection(s.store).get(id);
      expect(local!['name'], 'echoey-2');
      expect(local, isNot(contains('collectionId')),
          reason: 'unknown top-level keys are dropped');
      expect(local, isNot(contains('collectionName')));

      // And a full second cycle stays clean: the echo noise never dirties
      // the row or churns the outbox.
      final report = await a.engine.syncNow();
      expect(report.hadError, isFalse);
      expect(await a.engine.syncStore.countPending(), 0);
      final again = await a.pocket.collection(s.store).get(id);
      expect(again!['name'], 'echoey-2');
      expect(again, isNot(contains('collectionId')));
      if (mock != null) {
        // The mock mirrors the real server's echo so hermetic runs see the
        // regression trap at all.
        expect(mock.records[id]!.toJson().containsKey('collectionId'), isTrue);
      }
    });

    // -------------------------------------------------------------- #18 --
    wireTest(
        'created == updated on first create then diverges; the adapter '
        'filters on updated only', (s) async {
      final mock = s is MockWireServer ? s.mock : null;

      // First create: created == updated.
      final (cStatus, cBody) =
          await rawSend(s, 'POST', '/api/collections/data/records', body: {
        'id': generateRecordId(),
        'store': s.store,
        'data': {'name': 'watermark-probe'},
      });
      expect(cStatus, inInclusiveRange(200, 299));
      final created = jsonDecode(cBody) as Map<String, Object?>;
      final id = created['id']! as String;
      final createdAt = created['created'] as String?;
      final updatedAt = created['updated']! as String;
      expect(createdAt, isNotNull);
      expect(createdAt, updatedAt,
          reason: 'first create stamps created == updated');

      // An update diverges them.
      await rawSend(
        s,
        'PATCH',
        '/api/collections/data/records/$id',
        body: {
          'data': {'name': 'watermark-probe-2'}
        },
      );
      final now = await s.readRecord(s.store, id);
      expect(now!['updated'], isNotNull);
      if (mock != null) {
        final rec = mock.records[id]!;
        expect(rec.updated, isNot(updatedAt), reason: 'update re-stamps');
        // NOTE: the mock re-stamps `created` on every write; only the LIVE
        // server freezes `created` at first create. The portable contract is
        // that `updated` moved while the CREATE-time stamps did not — pinned
        // below via the divergence check.
        expect(rec.toJson()['created'], isNotNull);
      }
      // DIVERGENCE: after the update, `updated` moved past the create-time
      // stamp — a merger that ever compared created vs updated would see the
      // two differ from here on.
      final nowRec = await s.readRecord(s.store, id);
      expect(nowRec, isNotNull);
      expect(nowRec!['updated'], isNot(createdAt!),
          reason: 'created and updated diverge after an update');

      // BEHAVIORAL pin (both backends): the pull filter must never reference
      // a `created` field. A record whose DATA carries a literal `created`
      // key (a perfectly legal PB data field) must still deliver through the
      // pull — a filter that compared/filtered on `created` would either
      // drop it (no such server column) or mismatch its value.
      final trapId = generateRecordId();
      final (trapStatus, _) =
          await rawSend(s, 'POST', '/api/collections/data/records', body: {
        'id': trapId,
        'store': s.store,
        'data': {
          'name': 'created-trap',
          'created': createdAt, // a data-level field, NOT the server stamp
        },
      });
      expect(trapStatus, inInclusiveRange(200, 299),
          reason: 'created is a legal data field name on the wire');

      final a = await s.createClient();
      await a.engine.syncNow();
      expect((await a.pocket.collection(s.store).get(id))!['name'],
          'watermark-probe-2');
      // The trap record landed too — the filter never touched its
      // data-level `created` key.
      final trap = await a.pocket.collection(s.store).get(trapId);
      expect(trap, isNotNull,
          reason: 'a data-level created field never blocks delivery');
      expect(trap!['created'], createdAt,
          reason: 'the data value survives normalization verbatim');
      expect(trap['name'], 'created-trap');
      if (mock != null) {
        // Supplementary wire-shape pin (mock recorder): the cursor literal
        // references `updated` and never `created`.
        expect(mock.lastFilter, isNotNull);
        expect(mock.lastFilter!, contains("updated>='"),
            reason: 'the pull cursor filters on updated');
        expect(mock.lastFilter!, isNot(contains('created')),
            reason: 'the adapter NEVER filters on created');
      }

      // Watermark semantics survive the divergence: repeated cycles are
      // no-ops and a further edit re-delivers exactly once.
      await a.engine.syncNow();
      expect(await a.engine.syncStore.countPending(), 0);
      await rawSend(
        s,
        'PATCH',
        '/api/collections/data/records/$id',
        body: {
          'data': {'name': 'watermark-probe-3'}
        },
      );
      await a.engine.syncNow();
      expect((await a.pocket.collection(s.store).get(id))!['name'],
          'watermark-probe-3');
    });
  });
}
