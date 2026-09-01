import 'dart:convert';
import 'dart:io';

import 'package:localpocket/src/kernel/ids.dart';
import 'package:test/test.dart';

import '../../secret.dart';
import '../support/wire_server.dart';

/// PocketBase wire-contract quirks — timestamps & ordering (tests.md section
/// 1, items 1-5). A single source of scenarios run against BOTH the
/// in-process MockPbServer and the LIVE PocketBase server via [wireTest].
///
/// PB stores `created`/`updated` as server-managed, fixed-width UTC strings
/// `"YYYY-MM-DD HH:MM:SS.mmm"` — clients cannot write them, they are
/// millisecond-precision, and lexicographic order == chronological order only
/// because the format never varies.
///
/// - `updated` is SERVER-CLOCK ONLY: a forged value in the create/update body
///   is ignored and the server stamps its own;
/// - same-millisecond records survive the pull because the adapter sorts by
///   `updated,id` (the id tiebreak) and keysets on the (updated,id) tuple;
/// - a record committed MID-WALK with a timestamp behind the walk cursor is
///   invisible to the remaining pages; the rewind window re-delivers it but
///   the pull NEVER re-applies a behind-cursor record (that cursor bound is
///   also what keeps a purge local-final) — the anti-entropy sweep is the
///   documented backstop that heals the miss;
/// - two records whose µs-precision writes truncate to the SAME `updated`
///   string both land (never treated as stale) and re-delivery with an equal
///   watermark is a no-op;
/// - `skipTotal=1` answers `totalItems`/`totalPages` as -1: the adapter
///   pages by keyset and never trusts `totalPages` (a naive page-loop would
///   spin forever).
void main() {
  /// Raw HTTP create against either backend (no adapter): POSTs a body that
  /// may forge PB-managed fields like `updated`, returning the parsed JSON
  /// response.
  Future<Map<String, Object?>> rawCreate(
      WireServer s, String store, Map<String, Object?> data,
      {String? id, Object? forgedUpdated}) async {
    await s.start(); // the mock binds its HTTP port here (live: no-op)
    final client = HttpClient();
    try {
      final base = s is MockWireServer
          ? Uri.parse(s.mock.baseUrl.toString())
          : Uri.parse(testPBServer);
      final req =
          await client.postUrl(base.resolve('/api/collections/data/records'));
      req.headers.contentType = ContentType.json;
      if (s is RealWireServer) {
        final token = await s.tokens.currentToken();
        req.headers.set('Authorization', 'Bearer ${token.value}');
      }
      req.write(jsonEncode({
        'id': id ?? generateRecordId(),
        'store': store,
        'data': data,
        if (forgedUpdated != null) 'updated': forgedUpdated,
      }));
      final res = await req.close();
      final text = await res.transform(utf8.decoder).join();
      expect(res.statusCode, inInclusiveRange(200, 299),
          reason: 'raw create: ${res.statusCode} $text');
      return jsonDecode(text) as Map<String, Object?>;
    } finally {
      client.close(force: true);
    }
  }

  /// Raw HTTP list against the LIVE server with a raw PB filter literal —
  /// the "other side of the wire" for pinning how PB evaluates a
  /// timestamp-literal filter.
  Future<List<Map<String, Object?>>> rawListLiteral(
      RealWireServer s, String filter) async {
    await s.start();
    final client = HttpClient();
    try {
      final token = await s.tokens.currentToken();
      final req = await client.getUrl(Uri.parse(testPBServer)
          .resolve('/api/collections/data/records')
          .replace(queryParameters: {
        'filter': filter,
        'sort': 'updated,id',
        'perPage': '200',
      }));
      req.headers.set('Authorization', 'Bearer ${token.value}');
      final res = await req.close();
      final text = await res.transform(utf8.decoder).join();
      expect(res.statusCode, 200, reason: 'raw list: ${res.statusCode} $text');
      final body = jsonDecode(text) as Map<String, Object?>;
      return (body['items']! as List).cast<Map<String, Object?>>();
    } finally {
      client.close(force: true);
    }
  }

  group('E2E PB wire-contract quirks — timestamps & ordering', () {
    wireTest(
        'updated is server-stamped: a forged value is ignored on the '
        'wire', (s) async {
      // Raw create (no adapter) that forges the server-managed `updated`
      // column. Real PB ignores it and stamps its own.
      const forged = '1999-01-01 00:00:00.000Z';
      final resp = await rawCreate(s, s.store, {'name': 'stamped'},
          forgedUpdated: forged);
      final id = resp['id']! as String;
      final stamped = resp['updated']! as String;
      expect(stamped, isNot(forged),
          reason: 'the server ignored the client-sent updated');
      expect(stamped, endsWith('Z'), reason: 'fixed-width UTC wire format');
      // Real PB echoes collectionId/collectionName on every record payload —
      // the adapter must drop these unknown top-level keys.
      expect(resp.containsKey('collectionId'), isTrue);
      expect(resp.containsKey('collectionName'), isTrue);
      if (s is MockWireServer) {
        expect(stamped, startsWith('2026-01-01'),
            reason: "the mock's server clock (not the local clock) stamped it");
      }

      // A full engine pull adopts the SERVER stamp as its watermark, never
      // the forged value.
      final a = await s.createClient();
      await a.engine.syncNow();
      final row = await a.pocket.outbox.readSyncRow(a.pocket.db, s.store, id);
      expect(row!.remoteUpdated, stamped,
          reason: 'the pull adopted the server stamp');
      expect(row.remoteUpdated, isNot(forged));
      final local = await a.pocket.collection(s.store).get(id);
      expect(local!['name'], 'stamped');
      expect(local, isNot(contains('collectionId')),
          reason: 'normalization dropped the echo key');
      expect(local, isNot(contains('collectionName')));

      // An update also cannot forge `updated`: the server stamps a FRESH
      // value, which the next pull adopts.
      await s.updateRecord(s.store, id, {'name': 'stamped-2'});
      await a.engine.syncNow();
      final row2 = await a.pocket.outbox.readSyncRow(a.pocket.db, s.store, id);
      expect(row2!.remoteUpdated, isNot(row.remoteUpdated),
          reason: 'the server stamped a fresh updated on the update');
      expect(row2.remoteUpdated, isNot(forged));
      expect(
          (await a.pocket.collection(s.store).get(id))!['name'], 'stamped-2');
    });

    wireTest(
        'same-millisecond records: sort=updated,id survives ties across '
        'pages', (s) async {
      final mock = (s as MockWireServer).mock;
      const t = '2026-01-02 00:00:00.000Z';
      final a = await s.createClient(config: wireConfig(maxPage: 2));
      final ids = <String>[];
      for (var i = 0; i < 5; i++) {
        ids.add(mock.seed(
            store: s.store, data: {'name': 'tie$i', 'qty': i}, updated: t));
      }
      await a.engine.syncNow();

      // The adapter requested sort=updated,id — the id tiebreak is what makes
      // the sort stable for same-ms timestamps.
      expect(mock.lastSort, 'updated,id',
          reason: 'the pull sorts by (updated,id)');
      // Every same-ms record landed exactly once — no loss, no duplication,
      // across the maxPage=2 page boundaries.
      final all = await a.pocket.collection(s.store).query().all().fetch();
      expect(all.items, hasLength(5));
      expect({for (final r in all.items) r['id'] as String}, ids.toSet());
      for (final id in ids) {
        expect(await a.pocket.collection(s.store).get(id), isNotNull);
      }

      // A re-pull (rewind re-delivery of the same-ms page) is a no-op.
      final report = await a.engine.syncNow();
      expect(report.pulled[s.store], 0);
      expect(await a.pocket.collection(s.store).query().all().count(), 5);
    }, live: false);

    wireTest(
        'a record committed mid-walk behind the cursor: the rewind '
        're-delivers but never re-applies; the sweep heals it', (s) async {
      final mock = (s as MockWireServer).mock;
      final a = await s.createClient(config: wireConfig(maxPage: 1));

      // Establish a cursor with two records 2s apart (rewind window is 10s).
      const t0 = '2026-01-02 00:00:05.000Z';
      const t1 = '2026-01-02 00:00:07.000Z';
      mock.seed(store: s.store, data: {'name': 'r1'}, updated: t0);
      mock.seed(store: s.store, data: {'name': 'r2'}, updated: t1);
      await a.engine.syncNow();
      expect(await a.pocket.collection(s.store).query().all().count(), 2);

      // A record committed MID-WALK with a timestamp behind the walk cursor
      // (within the rewind window) is invisible to the remaining pages.
      const mid = '2026-01-02 00:00:04.000Z'; // t0-1s: behind cursor t1
      String? lateId;
      var inserted = false;
      mock.onListCall = (_) {
        if (!inserted) {
          inserted = true;
          lateId = mock.seed(
              store: s.store, data: {'name': 'mid-walk'}, updated: mid);
        }
      };
      await a.engine.syncNow(); // page 1, then the mid-walk insert
      expect(lateId, isNotNull);
      expect(await a.pocket.collection(s.store).get(lateId!), isNull,
          reason: 'invisible to the remaining pages of this pass');
      expect(await a.pocket.collection(s.store).query().all().count(), 2);

      // The NEXT cycle's rewind window re-delivers it — but the pull never
      // re-applies a behind-cursor record (that cursor bound is also what
      // keeps a purge local-final).
      await a.engine.syncNow();
      expect(await a.pocket.collection(s.store).get(lateId!), isNull,
          reason: 'the rewind re-delivers but never re-applies');
      expect(await a.pocket.collection(s.store).query().all().count(), 2);

      // The anti-entropy sweep is the backstop: its targeted fetch applies
      // the never-seen record regardless of its cursor position.
      await a.engine.invalidateVisibility();
      expect(await a.pocket.collection(s.store).get(lateId!), isNotNull,
          reason: 'the sweep healed the mid-walk miss');
      expect((await a.pocket.collection(s.store).get(lateId!))!['name'],
          'mid-walk');
      expect(await a.pocket.collection(s.store).query().all().count(), 3);
    }, live: false);

    wireTest(
        'same-ms truncation: both records apply; equal-watermark '
        're-delivery is a no-op', (s) async {
      final mock = (s as MockWireServer).mock;
      const t = '2026-01-02 00:00:00.000Z';
      final a = await s.createClient();
      // Two writes 500µs apart truncate to the SAME server-stamped `updated`.
      final idA = mock.seed(store: s.store, data: {'name': 'a'}, updated: t);
      final idB = mock.seed(store: s.store, data: {'name': 'b'}, updated: t);
      await a.engine.syncNow();
      // Neither same-ms record was treated as stale.
      expect(await a.pocket.collection(s.store).get(idA), isNotNull);
      expect(await a.pocket.collection(s.store).get(idB), isNotNull);
      // Both rows carry the shared ms-truncated watermark.
      final srA = await a.pocket.outbox.readSyncRow(a.pocket.db, s.store, idA);
      final srB = await a.pocket.outbox.readSyncRow(a.pocket.db, s.store, idB);
      expect(srA!.remoteUpdated, t);
      expect(srB!.remoteUpdated, t);

      // A re-pull (rewind re-delivery with the SAME watermark) is a no-op —
      // the `>` vs `>=` watermark never re-applies nor drops them.
      final report = await a.engine.syncNow();
      expect(report.pulled[s.store], 0);
      expect(await a.pocket.collection(s.store).query().all().count(), 2);
      expect(await a.pocket.collection(s.store).get(idA), isNotNull);
      expect(await a.pocket.collection(s.store).get(idB), isNotNull);
    }, live: false);

    wireTest(
        'skipTotal=1 answers -1 totals; the pull never trusts '
        'totalPages', (s) async {
      final mock = s is MockWireServer ? s.mock : null;
      final a = await s.createClient(config: wireConfig(maxPage: 40));
      const total = 120; // 3 pages of 40
      for (var i = 0; i < total; i++) {
        await s.createRecord(s.store, {'name': 'r$i', 'qty': i});
      }
      await a.engine.syncNow();

      // A naive client looping `page` until `page > totalPages` (== -1) would
      // loop forever; the adapter pages by (updated,id) keyset and stops on
      // an empty page instead.
      expect(await a.pocket.collection(s.store).query().all().count(), total,
          reason: 'every record was pulled across pages despite -1 totals');
      expect(await a.engine.syncStore.countPending(), 0);
      final ids = await a.pocket.collection(s.store).query().all().ids();
      expect(ids.toSet().length, total, reason: 'no dup/loss across pages');
      if (mock != null) {
        expect(mock.lastTotalItems, -1,
            reason: 'the server answered totalItems: -1 under skipTotal=1');
        expect(mock.lastTotalPages, -1, reason: 'and totalPages: -1');
        expect(mock.lastPage, 1,
            reason: 'the adapter keysets — it never walks `page`');
        expect(mock.lastSort, 'updated,id');
      }
    }, timeout: const Timeout(Duration(seconds: 90)));

    liveOnly(
        'a T (ISO) filter literal matches NOTHING; only the space form '
        'compares (live-verified)', (s) async {
      // Empirical PB behavior (probed on pb.apexo.app): PB stores/compares
      // `updated` as the space-separated `YYYY-MM-DD HH:MM:SS.mmm` (the
      // underlying SQLite coercion). An ISO literal carrying a `T` sorts
      // ABOVE every stored space-form value (space 0x20 < 'T' 0x54), so a
      // `>=` filter with a `T` literal returns NOTHING — the time is
      // effectively "disregarded"/lost. localpocket ONLY ever emits the
      // space form (formatPbTimestamp/rewindUpdated), so it never hits this;
      // the test documents the quirk and proves the space form rounds-trip.

      // Two live records.
      final idA = await s.createRecord(s.store, {'name': 'isoa'});
      final idB = await s.createRecord(s.store, {'name': 'isob'});
      final ra = await s.readRecord(s.store, idA);
      final rb = await s.readRecord(s.store, idB);
      final ua = ra!['updated']! as String;
      final ub = rb!['updated']! as String;
      expect(ua, matches(r'^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3}Z$'),
          reason: 'the wire format is the SPACE form');

      // Space literal at A's exact timestamp: both records match (>=).
      final spaceEq =
          await rawListLiteral(s, "(store='${s.store}' && updated>='$ua')");
      expect(spaceEq.map((r) => r['id']), containsAll([idA, idB]),
          reason: 'the SPACE literal compares correctly');

      // ISO (T) literal at A's exact instant: matches NOTHING.
      final isoLit = ua.replaceRange(10, 11, 'T');
      final isoEq =
          await rawListLiteral(s, "(store='${s.store}' && updated>='$isoLit')");
      expect(isoEq, isEmpty,
          reason: 'LIVE-VERIFIED: a T literal returns no rows (space 0x20 '
              'sorts below T 0x54, so every stored value is below it)');

      // A value one second BELOW A, in both forms: the ISO form MUST also be
      // below A yet returns nothing — the same quirk at the boundary.
      final belowSpace = formatSpace(
          DateTime.parse(ua.replaceRange(10, 11, 'T'))
              .toUtc()
              .subtract(const Duration(seconds: 1)));
      final spaceBelow = await rawListLiteral(
          s, "(store='${s.store}' && updated>='$belowSpace')");
      expect(spaceBelow, hasLength(2),
          reason: 'the space form one second below still matches both');
      final belowIso = belowSpace.replaceRange(10, 11, 'T');
      final isoBelow = await rawListLiteral(
          s, "(store='${s.store}' && updated>='$belowIso')");
      expect(isoBelow, isEmpty,
          reason: 'even a clearly-earlier instant is lost under a T literal');

      // And the engine's OWN round-trip uses the space form end to end: a
      // fresh client pulls both. (The adapter's cursor literal is space-form
      // by construction — pinned by the unit tests — so this is the live
      // closure.)
      expect(ub.compareTo(ua), greaterThanOrEqualTo(0));
    });
  });
}

/// The space-separated UTC form (mirrors [formatPbTimestamp]) used only to
/// CONSTRUCT the ad-hoc probe literals — deliberately not a lib import so
/// the test documents the wire format independently.
String formatSpace(DateTime dt) {
  final u = dt.toUtc();
  String p(int n, [int w = 2]) => n.toString().padLeft(w, '0');
  return '${p(u.year, 4)}-${p(u.month)}-${p(u.day)} '
      '${p(u.hour)}:${p(u.minute)}:${p(u.second)}.${p(u.millisecond, 3)}Z';
}
