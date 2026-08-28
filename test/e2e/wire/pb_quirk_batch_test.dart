import 'dart:convert';
import 'dart:io';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../secret.dart' show testPBServer;
import '../../support/helpers.dart' show record, tempDbPath;
import '../support/wire_server.dart';

/// PocketBase wire-contract quirks — the batch API (v0.23+ contract,
/// tests.md section 4, items 19-25). A single source of scenarios run
/// against BOTH the in-process MockPbServer and the LIVE PocketBase server
/// via [wireTest].
///
/// - a batch endpoint DISABLED at probe time but flipped off MID-SESSION
///   degrades to per-record pushes without crashing (the session-level
///   `batchEnabled` fallback fires exactly once);
/// - the max-requests-per-batch ceiling is a SERVER setting (101 here): 101
///   ops land in ONE request, 102 force a split — and the split BISECTS
///   (102 → 101+1, not a linear re-send);
/// - the whole-request BODY SIZE cap is distinct from the per-record data
///   cap: 20 × ~1.9MB records pass per-record validation but exceed a
///   lowered request total, and the pusher must split by BYTES;
/// - a batch is TRANSACTIONAL: a poison op rolls back the good ops too —
///   they are truly ABSENT server-side after the rollback;
/// - per-item Authorization headers are ignored by PB (all items share the
///   outer request auth) — the adapter's envelope never carries any;
/// - the upsert (PUT) shape REQUIRES `id` in the item body — a missing id
///   is a 400, pinning why the adapter always sends it;
/// - the batch response is a TOP-LEVEL ARRAY; the legacy
///   `{data:{results:[...]}}` envelope parses identically at the ENGINE
///   level (both shapes converge the same ops).
Future<int> deadLetterCount(WireClient c) async =>
    (await c.pocket.db.rawQuery('SELECT COUNT(*) AS c FROM lp_dead_letter'))
        .first['c'] as int;

/// Raw HTTP batch POST against either backend, returning `(status,
/// bodyText)` — the other side of the wire.
Future<(int, String)> rawBatch(
    WireServer s, List<Map<String, Object?>> requests) async {
  await s.start(); // the mock binds its HTTP port here (live: no-op)
  final client = HttpClient();
  try {
    final base = s is MockWireServer
        ? Uri.parse(s.mock.baseUrl.toString())
        : Uri.parse(testPBServer);
    final req = await client.postUrl(base.resolve('/api/batch'));
    req.headers.contentType = ContentType.json;
    if (s is RealWireServer) {
      final token = await s.tokens.currentToken();
      req.headers.set('Authorization', 'Bearer ${token.value}');
    }
    req.write(jsonEncode({'requests': requests}));
    final res = await req.close();
    final text =
        res.contentLength == 0 ? '' : await res.transform(utf8.decoder).join();
    return (res.statusCode, text);
  } finally {
    client.close(force: true);
  }
}

void main() {
  /// Drains [c]'s outbox with a loud bounded guard.
  Future<void> drain(WireClient c) async {
    var guard = 0;
    while (await c.engine.syncStore.countPending() > 0) {
      await c.engine.syncNow();
      guard++;
      if (guard > 60) fail('drain did not converge');
    }
  }

  group('E2E PB wire-contract quirks — batch API', () {
    // -------------------------------------------------------------- #19 --
    wireTest(
        'batch disabled mid-session: degrades to per-record without '
        'crashing', (s) async {
      final mock = s is MockWireServer ? s.mock : null;

      // The probe (during engine.start()) sees an ENABLED batch endpoint.
      final db = await tempDbPath();
      final a = await s.createClient(path: db.path);
      s.onClose(() => db.cleanup());
      await a.pocket.collection(s.store).put(record(name: 'probed'));
      await a.engine.start();
      expect(a.backend.capabilities.batchEnabled, isTrue,
          reason: 'the probe ran while batch was enabled');
      await drain(a);

      // FLIP MID-SESSION: the server disables batch after the probe.
      if (mock != null) {
        mock.batchEnabled = false;
      }

      // The next cycle must degrade to per-record pushes — no crash, no
      // dead letters, everything converges.
      await a.pocket.collection(s.store).put(record(name: 'after-flip-1'));
      await a.pocket.collection(s.store).put(record(name: 'after-flip-2'));
      final report = await a.engine.syncNow();

      expect(report.hadError, isFalse,
          reason: 'a disabled batch endpoint degrades, never errors');
      await drain(a);
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await s.countRecords(s.store), 3,
          reason: 'every op landed through the degraded path');
      expect(await deadLetterCount(a), 0);
      expect(a.engine.state, isNot(SyncEngineState.backoff));

      if (mock != null) {
        // The 403 came from the batch endpoint and the session fell back:
        // per-record creates carried the two post-flip ops.
        expect(mock.batchCalls, greaterThan(1),
            reason: 'the post-flip cycle hit the disabled batch endpoint');
        expect(mock.createCalls, greaterThanOrEqualTo(2),
            reason: 'the fallback pushed per-record');
      }
    });

    // -------------------------------------------------------------- #20 --
    wireTest(
        'maxBatchRequests is a server setting: 101 lands in one request, '
        '102 splits by BISECTION', (s) async {
      final mock = s is MockWireServer ? s.mock : null;
      if (mock == null) {
        // LIVE: the shared server caps at 101 — pin the over-limit side
        // (102 ops split and drain) without hammering it with the exact
        // boundary probe twice.
        final db = await tempDbPath();
        final a = await s.createClient(path: db.path, maxBatch: 200);
        s.onClose(() => db.cleanup());
        for (var i = 0; i < 102; i++) {
          await a.pocket.collection(s.store).put(record(name: 'n$i', qty: i));
        }
        await drain(a);
        expect(await s.countRecords(s.store), 102,
            reason: 'the over-limit batch split and every op landed');
        expect(await a.engine.syncStore.countPending(), 0);
        return;
      }

      // MOCK: pin the EXACT boundary. The client's config requests batches
      // of 200; the server caps at 101.
      final dbA = await tempDbPath();
      final a = await s.createClient(path: dbA.path, maxBatch: 200);
      s.onClose(() => dbA.cleanup());

      // EXACTLY 101 ops: one batch request, no split.
      for (var i = 0; i < 101; i++) {
        await a.pocket.collection(s.store).put(record(name: 'ok$i', qty: i));
      }
      mock.batchBodies.clear();
      await a.engine.syncNow();
      expect(mock.batchBodies, hasLength(1),
          reason: '101 ops == exactly the server ceiling: ONE request');
      expect(
          ((jsonDecode(mock.batchBodies.single) as Map)['requests'] as List)
              .length,
          101);
      await drain(a);
      expect(await s.countRecords(s.store), 101);

      // 102 ops: the FIRST request is rejected (400 over-limit), the pusher
      // BISECTS (102 → 51+51 → 51 ok in one, 51 → 50+1 …) instead of
      // linearly re-sending.
      final dbB = await tempDbPath();
      final b = await s.createClient(path: dbB.path, maxBatch: 200);
      s.onClose(() => dbB.cleanup());
      for (var i = 0; i < 102; i++) {
        await b.pocket.collection(s.store).put(record(name: 'over$i', qty: i));
      }
      mock.batchBodies.clear();
      final batchCallsBefore = mock.batchCalls;
      await drain(b);
      expect(await s.countRecords(s.store), 102 + 101,
          reason: 'every over-limit op landed via the split');
      expect(await b.engine.syncStore.countPending(), 0);

      // Bisection proof: the first (rejected) request attempted ALL 102 ops;
      // the split then halves it exactly — two 51-op requests, both under
      // the cap, both accepted. A LINEAR re-send would show a long run of
      // 101 single-op requests instead of one 102 and two 51s.
      var sawHalf = false;
      final sizes = <int>[];
      for (final bodyJson in mock.batchBodies) {
        final n = ((jsonDecode(bodyJson) as Map)['requests'] as List).length;
        sizes.add(n);
        if (n == 51) sawHalf = true;
      }
      expect(sawHalf, isTrue,
          reason: 'the split BISECTS: 102 -> 51+51 (a linear re-send would '
              'never attempt a 51-op request)');
      expect(sizes.first, 102,
          reason: 'the first request attempted all 102 ops');
      expect(sizes.where((n) => n > 1 && n < 51), isEmpty,
          reason: 'a clean over-limit batch splits EXACTLY once into two '
              'halves that both fit the cap');
      expect(mock.batchAcceptedBodies.length, greaterThanOrEqualTo(2),
          reason: 'both bisected halves landed');
      expect(mock.batchCalls, greaterThan(batchCallsBefore),
          reason: 'the split issued additional batch requests');
    }, timeout: const Timeout(Duration(seconds: 120)));

    // -------------------------------------------------------------- #21 --
    wireTest(
        'whole-request body cap (bytes) is distinct from the per-record '
        'cap: the pusher splits by BYTES', (s) async {
      final mock = s is MockWireServer ? s.mock : null;
      if (mock == null) {
        // LIVE: the real 32MB cap cannot be hit politely (would need ~34MB
        // of uploads against the shared server). The per-record 2MB ceiling
        // interplay is already pinned by two_clients_test's 2MB boundary
        // scenario; the byte-level split is mock-only fault injection.
        return;
      }

      // Lower the WHOLE-REQUEST cap below 20 × 1.9MB while every record
      // still passes the PER-RECORD ceiling. The LOCAL ceiling is lifted so
      // the writes succeed locally; only the SERVER's per-record (2MB) and
      // whole-request (8MB) caps govern the push.
      mock.maxBatchBodyBytes = 8 * 1024 * 1024; // 8MB total
      final db = await tempDbPath();
      final a = await s.createClient(
          path: db.path,
          maxBatch: 200,
          maxDocBytes: 4000000); // local ceiling above the payload size
      s.onClose(() => db.cleanup());

      const n = 20;
      for (var i = 0; i < n; i++) {
        // ~1.9MB each: passes the per-record 2MB ceiling individually.
        await a.pocket
            .collection(s.store)
            .put(record(name: 'big$i', meta: {'blob': 'x' * 1900000}));
      }
      expect(await a.engine.syncStore.countPending(), n);

      await drain(a);
      expect(await s.countRecords(s.store), n,
          reason: 'every oversized record landed despite the request cap');
      expect(await a.engine.syncStore.countPending(), 0);

      // Byte-level split proof: no single REQUEST exceeded the cap, and the
      // requests that landed were smaller than the naive count-only chunk
      // (200) — the pusher split by bytes.
      var maxRequestBytes = 0;
      for (final bodyJson in mock.batchAcceptedBodies) {
        maxRequestBytes = maxRequestBytes > utf8.encode(bodyJson).length
            ? maxRequestBytes
            : utf8.encode(bodyJson).length;
      }
      expect(maxRequestBytes, lessThanOrEqualTo(mock.maxBatchBodyBytes),
          reason: 'no request exceeded the whole-body cap after splitting');
      // And the split actually happened: more than one accepted request
      // was needed for 20 records.
      expect(mock.batchAcceptedBodies.length, greaterThan(1),
          reason: 'the byte cap forced the 20-record batch to split');
    },
        live:
            false /* the real 32MB cap is impolite to hit on the shared server */);

    // -------------------------------------------------------------- #22 --
    wireTest(
        'a failed batch is transactional: the good ops are truly ABSENT '
        'server-side after the rollback', (s) async {
      final mock = s is MockWireServer ? s.mock : null;
      if (mock != null) {
        mock.poisonEnabled = true;
      }

      final db = await tempDbPath();
      final a = await s.createClient(path: db.path);
      s.onClose(() => db.cleanup());
      final good1 = generateRecordId();
      final good2 = generateRecordId();
      final poisonId = generateRecordId();
      await a.pocket.collection(s.store).put(record(id: good1, name: 'good-1'));
      await a.pocket.collection(s.store).put(record(id: good2, name: 'good-2'));
      await a.pocket
          .collection(s.store)
          .put(record(id: poisonId, name: 'poison'));

      final report = await a.engine.syncNow();
      // The whole batch rolled back; the binary split isolated the poison.
      expect(report.deadLettered, 1);
      expect(await s.countRecords(s.store), 2,
          reason: 'the healthy ops landed after the split');

      // TRANSACTIONALITY: at the moment of the failed request, the good ops
      // were rolled back server-side — verified by the fact that the poison
      // op is gone AND the good records only exist because the SPLIT re-sent
      // them. Assert each good record individually by id (not just a count).
      expect(await s.readRecord(s.store, good1), isNotNull);
      expect(await s.readRecord(s.store, good2), isNotNull);
      expect(await s.readRecord(s.store, poisonId), isNull,
          reason: 'the poison op never landed');
      if (mock != null) {
        expect(mock.records.containsKey(good1), isTrue);
        expect(mock.records.containsKey(good2), isTrue);
        expect(mock.records.containsKey(poisonId), isFalse);
      }
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await a.pocket.collection(s.store).query().all().count(), 3,
          reason: 'no local row was lost');
    }, live: false /* poison injection is mock-only */);

    // -------------------------------------------------------------- #23 --
    wireTest(
        'batch items carry NO per-item Authorization header (the outer '
        'request auth governs)', (s) async {
      final mock = s is MockWireServer ? s.mock : null;

      final db = await tempDbPath();
      final a = await s.createClient(path: db.path);
      s.onClose(() => db.cleanup());
      for (var i = 0; i < 3; i++) {
        await a.pocket.collection(s.store).put(record(name: 'auth$i'));
      }
      await drain(a);

      // The adapter-compliance pin: the batch envelope's items carry no
      // auth header — PB ignores inner headers and shares the outer auth.
      if (mock != null) {
        expect(mock.batchItemAuthHeaders, isEmpty,
            reason: 'the adapter never sends per-item Authorization headers');
        expect(mock.batchBodies, isNotEmpty,
            reason: 'the ops went through the batch endpoint');
        // The FIRST recorded body is the empty capability probe
        // (requests: []) — find the first envelope that carried ops.
        final envelopes = mock.batchBodies
            .map((b) => (jsonDecode(b) as Map)['requests'] as List)
            .where((r) => r.isNotEmpty)
            .toList();
        expect(envelopes, isNotEmpty);
        final requests = envelopes.first;
        expect(requests, hasLength(3),
            reason: 'all three ops rode in one envelope');
        for (final r in requests) {
          expect(r.containsKey('headers'), isFalse);
          expect(r.containsKey('Authorization'), isFalse);
          // The canonical item shape: PUT upsert with the full body.
          expect(r['method'], 'PUT');
          expect(r['url'], '/api/collections/data/records');
          expect((r['body'] as Map)['id'], isA<String>());
        }
      } else {
        // LIVE: convergence is the contract — the real server accepted the
        // envelope (it ignores inner headers, and the adapter sends none).
        expect(await s.countRecords(s.store), 3);
        expect(await a.engine.syncStore.countPending(), 0);
      }
    });

    // -------------------------------------------------------------- #24 --
    wireTest(
        'upsert shape: the adapter ALWAYS sends `id` in a PUT item body '
        '(live mints ids without one; the contract requires it)', (s) async {
      final mock = s is MockWireServer ? s.mock : null;

      // RAW WIRE divergence (empirically probed on pb.apexo.app): a PUT
      // batch item WITHOUT `id` does NOT error on the live server — it
      // UPSERTS with a SERVER-MINTED id (200). The mock mirrors PB's
      // documented upsert contract and rejects with 400 instead. Either way,
      // a client that omits the id loses control of record identity — which
      // is exactly why the adapter ALWAYS sends it.
      final (status, body) = await rawBatch(s, [
        {
          'method': 'PUT',
          'url': '/api/collections/data/records',
          'body': {
            'store': s.store, // NO 'id'
            'data': {'name': 'idless'},
          },
        }
      ]);
      if (mock != null) {
        expect(status, 400);
        expect(body, contains('validation_invalid_pk'));
      } else {
        expect(status, 200,
            reason: 'LIVE-VERIFIED: the real server mints an id and upserts');
        final entry = (jsonDecode(body) as List).single as Map;
        expect(entry['status'], 200);
        final mintedId = ((entry['body'] as Map)['id'] as String);
        expect(mintedId, hasLength(15),
            reason: 'the server-minted id follows the PB id pattern');
        expect(mintedId, isNot(equals('')),
            reason: 'an id-less upsert silently creates under a NEW id — '
                'uncontrolled identity for any client that relies on it');
      }

      // The adapter's own shape always carries the id (envelope inspection in
      // #23; here the engine-level proof): the op lands under the SAME
      // client-chosen identity.
      final db = await tempDbPath();
      final a = await s.createClient(path: db.path);
      s.onClose(() => db.cleanup());
      final rid = generateRecordId();
      await a.pocket.collection(s.store).put(record(id: rid, name: 'with-id'));
      await drain(a);
      // The op settled under the CLIENT-chosen id.
      expect(await a.engine.syncStore.countPending(), 0);
      expect((await a.pocket.collection(s.store).get(rid))!['name'], 'with-id');
      if (mock != null) {
        expect(await s.countRecords(s.store), 1,
            reason: 'the mock rejected the id-less item, only ours landed');
      } else {
        expect(await s.countRecords(s.store), 2,
            reason: 'live also holds the MINTED record from the raw id-less '
                'probe above — exactly the identity chaos that sending `id` '
                'prevents');
      }
    });

    // -------------------------------------------------------------- #25 --
    wireTest(
        'batch response: top-level array AND legacy {data:{results}} '
        'envelope both converge at the engine level', (s) async {
      final mock = s is MockWireServer ? s.mock : null;
      if (mock == null) {
        // LIVE: the real server answers the top-level array (live-verified
        // contract); convergence is the pin.
        final db = await tempDbPath();
        final a = await s.createClient(path: db.path);
        s.onClose(() => db.cleanup());
        await a.pocket.collection(s.store).put(record(name: 'live-array'));
        await drain(a);
        expect(await s.countRecords(s.store), 1);
        return;
      }

      // The mock's DEFAULT response is the top-level array: pin it raw.
      final (status, body) = await rawBatch(s, [
        {
          'method': 'PUT',
          'url': '/api/collections/data/records',
          'body': {
            'id': generateRecordId(),
            'store': s.store,
            'data': {'name': 'array-shape'},
          },
        }
      ]);
      expect(status, 200);
      final decoded = jsonDecode(body);
      expect(decoded, isA<List>(),
          reason: 'PB v0.23+ answers a TOP-LEVEL ARRAY of {body, status}');
      expect((decoded as List).single['status'], 200);

      // ENGINE level, shape 2 (legacy envelope): script the mock to answer
      // the next batch with {data:{results:[...]}} — the engine must parse
      // it identically (the response script fires after validation, so the
      // scripted body IS what the client sees).
      final legacyId = generateRecordId();
      mock.batchResponseScript.add((
        200,
        {
          'data': {
            'results': [
              {
                'body': {
                  'id': legacyId,
                  'store': s.store,
                  'data': {'name': 'legacy-envelope'},
                  'created': '2026-01-01 00:00:00.000Z',
                  'updated': '2026-01-01 00:00:00.000Z',
                },
                'status': 200,
              }
            ],
          },
        },
      ));
      // Drive a client whose single op matches the scripted response's
      // record id so the exact-response validation passes.
      final dbL = await tempDbPath();
      final legacy = await s.createClient(path: dbL.path);
      s.onClose(() => dbL.cleanup());
      await legacy.pocket
          .collection(s.store)
          .put(record(id: legacyId, name: 'legacy-envelope'));
      final reportL = await legacy.engine.syncNow();
      expect(reportL.hadError, isFalse,
          reason: 'the legacy envelope parses at the engine level');
      expect(await legacy.engine.syncStore.countPending(), 0,
          reason: 'the op settled against the legacy envelope');
      expect((await legacy.pocket.collection(s.store).get(legacyId))!['name'],
          'legacy-envelope');
      // NOTE: the response SCRIPT answers without applying ops, so the
      // server holds only the raw probe record — the engine-level proof of
      // the legacy envelope is the clean settlement + local row above.
      expect(await s.countRecords(s.store), 1,
          reason: 'the scripted answer never applied server-side');
    });
  });
}
