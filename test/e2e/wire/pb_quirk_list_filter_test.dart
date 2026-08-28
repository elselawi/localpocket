import 'dart:convert';
import 'dart:io';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../secret.dart';
import '../support/wire_server.dart';

/// PocketBase wire-contract quirks — list & filter (tests.md section 2,
/// items 6-11). A single source of scenarios run against BOTH the in-process
/// MockPbServer and the LIVE PocketBase server via [wireTest].
///
/// - the adapter ALWAYS sends an explicit `perPage` (never relying on PB's
///   default of 30) and clamps it to PB's 500 cap — a `maxPage` above 500 is
///   rejected by the server with a 400 unless clamped;
/// - a pull that ends on an EMPTY page terminates cleanly (the adapter
///   keysets, so it never trusts `totalPages` and never page-walks);
/// - filter literals escape `'` → `\'` and `\` → `\\` via the lib's
///   `quote()`/`pullFilter` and STILL match on the server;
/// - PB's `~` auto-wraps in `%...%` ONLY when no `%` is present — the sweep's
///   `id~'a%'` bucket probe is a PREFIX match precisely because of this
///   no-re-wrap rule;
/// - the sweep's `fields=id,updated` projection OMITS keys entirely (no
///   nulls): the engine never treats the absent `data` as an empty record —
///   it targeted-GETs the full payload;
/// - the pull cursor is always a plain fixed-width UTC literal — the server's
///   string-lexicographic `updated >=` evaluator round-trips it without
///   drift (an offset/precision variant would silently mismatch).
void main() {
  /// Raw HTTP create against either backend (no adapter): returns the parsed
  /// JSON response.
  Future<Map<String, Object?>> rawCreate(
      WireServer s, String store, Map<String, Object?> data,
      {String? id}) async {
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

  /// Raw HTTP list against either backend with a raw PB filter literal.
  Future<List<Map<String, Object?>>> rawList(
      WireServer s, String filter) async {
    await s.start();
    final client = HttpClient();
    try {
      final base = s is MockWireServer
          ? Uri.parse(s.mock.baseUrl.toString())
          : Uri.parse(testPBServer);
      final req = await client.getUrl(base
          .resolve('/api/collections/data/records')
          .replace(queryParameters: {
        'filter': filter,
        'perPage': '200',
        'sort': 'updated,id',
      }));
      if (s is RealWireServer) {
        final token = await s.tokens.currentToken();
        req.headers.set('Authorization', 'Bearer ${token.value}');
      }
      final res = await req.close();
      final text = await res.transform(utf8.decoder).join();
      expect(res.statusCode, inInclusiveRange(200, 299),
          reason: 'raw list: ${res.statusCode} $text');
      final body = jsonDecode(text) as Map<String, Object?>;
      return (body['items']! as List).cast<Map<String, Object?>>();
    } finally {
      client.close(force: true);
    }
  }

  /// Seeds [total] records directly on the server.
  Future<void> seedRecords(WireServer s, int total) async {
    for (var i = 0; i < total; i++) {
      await s.createRecord(s.store, {'name': 'r$i', 'qty': i});
    }
  }

  group('E2E PB wire-contract quirks — list & filter', () {
    wireTest(
        'perPage: an explicit ≤500 page size is sent and honored (never '
        'the 30 default)', (s) async {
      final mock = s is MockWireServer ? s.mock : null;
      final a = await s.createClient(config: wireConfig(maxPage: 40));
      const total = 80; // 2 full pages of 40 — above PB's default of 30
      await seedRecords(s, total);
      await a.engine.syncNow();

      // If the server silently defaulted to perPage=30, the first page would
      // be partial (< maxPage) and the pull would stop at 30. All 80 landing
      // proves the adapter's explicit perPage was honored end to end.
      expect(await a.pocket.collection(s.store).query().all().count(), total);
      expect(await a.engine.syncStore.countPending(), 0);
      if (mock != null) {
        expect(mock.lastPerPage, 40,
            reason: 'the adapter sent its own page size, not the server '
                'default of 30');
        expect(mock.lastPerPage, lessThanOrEqualTo(500));
      }
    });

    wireTest(
        'perPage: a maxPage above the 500 cap is clamped and still '
        'converges', (s) async {
      final mock = s is MockWireServer ? s.mock : null;
      // maxPage 600 > PB's hard cap of 500: without a clamp the server would
      // answer 400 and the store could never sync.
      final a = await s.createClient(config: wireConfig(maxPage: 600));
      const total = 80;
      await seedRecords(s, total);
      await a.engine.syncNow();
      expect(await a.pocket.collection(s.store).query().all().count(), total,
          reason: 'a >500 maxPage still pulls (clamped to the 500 cap)');
      expect(await a.engine.syncStore.countPending(), 0);
      if (mock != null) {
        expect(mock.lastPerPage, 500, reason: 'the request was clamped to 500');
      }
    });

    wireTest(
        'a pull that ends on an EMPTY page terminates (no re-request '
        'storm)', (s) async {
      final mock = s is MockWireServer ? s.mock : null;
      final a = await s.createClient(config: wireConfig(maxPage: 40));
      const total = 120; // 3 full pages of 40 + 1 empty terminator
      await seedRecords(s, total);
      final callsBefore = mock?.listCalls ?? 0;
      final report = await a.engine.syncNow();
      expect(report.hadError, isFalse);
      expect(await a.pocket.collection(s.store).query().all().count(), total);
      expect(a.engine.state, SyncEngineState.idle);
      if (mock != null) {
        // Exactly 3 full pages + 1 empty page terminate the walk — never an
        // infinite re-request (a naive `page > totalPages` loop would spin on
        // the -1 totals under skipTotal).
        expect(mock.listCalls - callsBefore, 4,
            reason: 'full pages then an empty page ends the pull');
      }
      // A follow-up cycle is a clean no-op.
      final again = await a.engine.syncNow();
      expect(again.hadError, isFalse);
      expect(await a.engine.syncStore.countPending(), 0);
    }, timeout: const Timeout(Duration(seconds: 90)));

    wireTest("filter escaping: quotes escape as \\'; backslashes pass through",
        (s) async {
      await s.start();
      // Store FIELD values carrying quotes/backslashes are legal server-side
      // (only the LOCAL table name constrains the client's store), so the
      // wire escaping round-trip is pinned raw through the LIB's own filter
      // builder. Real PB treats `\` as an escape ONLY before `'` (verified
      // live): `\'` -> `'`, and a backslash elsewhere is literal.
      const quoteStore = "o'brien's";
      const slashStore = r'o\x';
      final idQ =
          (await rawCreate(s, quoteStore, {'name': 'q'}))['id']! as String;
      final idS =
          (await rawCreate(s, slashStore, {'name': 's'}))['id']! as String;

      // The lib escapes `'` -> `\'`; backslashes pass through verbatim.
      final fQuote = pullFilter(quoteStore, '1970-01-01 00:00:00.000Z');
      final fSlash = pullFilter(slashStore, '1970-01-01 00:00:00.000Z');
      expect(fQuote, contains(r"store='o\'brien\'s'"),
          reason: "a quote is escaped as \\'");
      expect(fSlash, contains(r"store='o\x'"),
          reason: 'backslashes are NOT escaped (PB treats them literally)');

      // Both servers parse the escaped quote back and match.
      final listQuote = await rawList(s, fQuote);
      expect([for (final r in listQuote) r['id']], contains(idQ),
          reason: 'escaped quote matches on the server');
      // ...and a literal backslash matches too (escaping it to `\\` would
      // NOT match on real PB).
      final listSlash = await rawList(s, fSlash);
      expect([for (final r in listSlash) r['id']], contains(idS),
          reason: 'a literal backslash matches on the server');
    });

    wireTest('~ no-auto-wrap: id~\'a%\' is a PREFIX match, never a contains',
        (s) async {
      await s.start();
      // Controlled ids: one starting with 'a', one NOT starting with 'a' but
      // containing it (an auto-wrapping server would over-return both).
      const idA = 'aaaaaaaaaaaaaaa';
      const idB = 'bbbbbbbbbbbbaaa'; // 15 chars, contains 'a' mid-string
      await rawCreate(s, s.store, {'name': 'a'}, id: idA);
      await rawCreate(s, s.store, {'name': 'b'}, id: idB);

      // The LIB's sweep filter builder emits id~'a%' (the bucket prefix
      // probe). Because PB does NOT re-wrap a value that already carries `%`,
      // this is a PREFIX match.
      final prefixFilter = sweepFilter(s.store, 'a');
      expect(prefixFilter, contains("id~'a%'"),
          reason: 'the sweep probe carries an explicit %');
      final prefixList = await rawList(s, prefixFilter);
      expect([for (final r in prefixList) r['id']], contains(idA));
      expect([for (final r in prefixList) r['id']], isNot(contains(idB)),
          reason: 'an explicit % is a literal wildcard, never auto-wrapped');

      // The contrast: WITHOUT a `%` PB auto-wraps to a CONTAINS match — the
      // observable difference the no-auto-wrap rule depends on.
      final containsFilter = "(store=${quote(s.store)} && id~'a')";
      final containsList = await rawList(s, containsFilter);
      expect([for (final r in containsList) r['id']], containsAll([idA, idB]),
          reason: 'no-% auto-wraps into a contains match');
    });

    wireTest(
        'fields=id,updated projection: absent data is GET-fetched, never '
        'applied as empty', (s) async {
      final mock = s is MockWireServer ? s.mock : null;
      final a = await s.createClient(autoStart: false);
      final ids = <String>[];
      for (var i = 0; i < 3; i++) {
        ids.add(await s.createRecord(s.store, {'name': 'full-$i', 'qty': i}));
      }
      // A forced FULL sweep (no pull) discovers the records through the
      // fields=id,updated keyset projection and targeted-GETs the full
      // payloads — the projection omits `data` entirely (no nulls), so the
      // engine must never treat the absence as an empty record.
      await a.engine.sweeper.sweepIfDue(force: true);
      for (var i = 0; i < 3; i++) {
        final row = await a.pocket.collection(s.store).get(ids[i]);
        expect(row, isNotNull);
        expect(row!['name'], 'full-$i',
            reason:
                'full data applied — absent projection never written as {}');
        expect(row['qty'], i);
        final sr =
            await a.pocket.outbox.readSyncRow(a.pocket.db, s.store, ids[i]);
        expect(sr!.syncState, SyncState.clean);
      }
      expect(await a.engine.syncStore.countPending(), 0);
      if (mock != null) {
        expect(mock.lastFields, 'id,updated',
            reason: 'the sweep bucket probe is a keyset projection');
      }
    }, timeout: const Timeout(Duration(seconds: 90)));

    wireTest(
        'cursor literals are fixed-width UTC: the server round-trip '
        'never mismatches', (s) async {
      final mock = s is MockWireServer ? s.mock : null;
      final a = await s.createClient();
      await s.createRecord(s.store, {'name': 'r1', 'qty': 1});
      await a.engine.syncNow();
      if (mock != null) {
        // The pull's `updated>=` literal is plain fixed-width UTC (with Z) —
        // never an offset like +02:00, never a different precision. An offset
        // literal would silently string-compare differently on the server.
        final m =
            RegExp(r"updated>='(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3})Z'")
                .firstMatch(mock.lastFilter!);
        expect(m, isNotNull, reason: 'fixed-width UTC cursor literal');
      }
      // Repeated cycles round-trip the cursor through the server's strict
      // string-lexicographic `updated >=` evaluator with no drift.
      for (var i = 0; i < 3; i++) {
        final report = await a.engine.syncNow();
        expect(report.hadError, isFalse);
      }
      expect(await a.pocket.collection(s.store).query().all().count(), 1,
          reason: 'no loss/dup across cursor round-trips');
      expect(await a.engine.syncStore.countPending(), 0);
    });
  });
}
