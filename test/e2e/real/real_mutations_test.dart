@Tags(['real'])
library;

import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/pocketbase.dart'
    show HttpRequest, PocketBaseBackend;
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../../secret.dart';
import '../../support/helpers.dart';
import 'real_helpers.dart';

/// LIVE PocketBase E2E — remote-authoritative mutations & idempotency
/// (tests.md #7-12) against the REAL server in `test/secret.dart`.
///
/// Pins, over the genuine HTTP wire:
/// - a server-side hard DELETE propagates as a HIDE (never a hard delete):
///   the row leaves query scope but `get()` still returns it;
/// - client `purge` is local-final (no resurrection) while peers reap only
///   via a server delete;
/// - archive -> restore round-trips between two clients through the server;
/// - archiving a never-synced create vanishes it locally before any wire
///   traffic (keepUnsyncedArchives=false), or survives to push (=true);
/// - two clients writing the SAME custom id converge on EXACTLY ONE record;
/// - concurrent id minting never collides and drains fully.
///
/// Run with:
///   dart test --tags real --run-skipped test/e2e/real/real_mutations_test.dart
void main() {
  /// Hard-deletes one record via raw superuser HTTP.
  Future<void> deleteRaw(RealHarness h, String id) async {
    final token = await h.tokens.currentToken();
    final res = await h.tokens.transport.send(HttpRequest(
      method: 'DELETE',
      url:
          Uri.parse(testPBServer).resolve('/api/collections/data/records/$id'),
      headers: {'Authorization': 'Bearer ${token.value}'},
    ));
    expect(res.status, 204, reason: 'PB answers 204 with an empty body');
  }

  /// Counts records for [store] on the live server via raw superuser HTTP.
  Future<int> remoteCount(RealHarness h, String store) async {
    final token = await h.tokens.currentToken();
    final res = await h.tokens.transport.send(HttpRequest(
      method: 'GET',
      url: Uri.parse(testPBServer)
          .resolve('/api/collections/data/records')
          .replace(queryParameters: {
        'filter': "(store='$store')",
        'perPage': '200',
        'skipTotal': '1',
      }),
      headers: {'Authorization': 'Bearer ${token.value}'},
    ));
    expect(res.status, 200);
    final body = jsonDecode(res.body) as Map<String, Object?>;
    return ((body['items'] as List).length);
  }

  group('live PocketBase E2E: remote mutations (real server)', () {
    test('real_two_client_delete_propagates_as_hide', () async {
      final store = uniqueStore();
      final a = await RealHarness.create(store: store);
      final b = await createSecondClient(store);
      registerCleanup(a);
      registerCleanup(b);

      final id = generateRecordId();
      await a.backend.createRecord(
          id: id, store: store, dataJson: '{"name":"doomed"}');
      await a.engine.syncNow();
      await b.engine.syncNow();

      // Server-side hard delete: no realtime event involved.
      await deleteRaw(a, id);

      // Both clients discover it independently via the forced full sweep.
      await a.engine.invalidateVisibility();
      expect(await a.pocket.collection(store).get(id), isNotNull,
          reason: 'hidden rows are retained — get() still returns them');
      expect(await a.pocket.collection(store).query().all().count(), 0,
          reason: 'the hidden row left the default query scope');
      final srA = await a.pocket.outbox.readSyncRow(a.pocket.db, store, id);
      expect(srA!.accessState, AccessState.hidden);

      await b.engine.invalidateVisibility();
      expect(await b.pocket.collection(store).query().all().count(), 0);
      expect(await b.pocket.collection(store).get(id), isNotNull,
          reason: 'B also keeps the row — hidden, never deleted');
      final srB = await b.pocket.outbox.readSyncRow(b.pocket.db, store, id);
      expect(srB!.accessState, AccessState.hidden);
    });

    test('real_client_purge_is_local_final', () async {
      final store = uniqueStore();
      final a = await RealHarness.create(store: store);
      registerCleanup(a);

      final id = generateRecordId();
      await a.backend.createRecord(
          id: id, store: store, dataJson: '{"name":"purged"}');
      await a.engine.syncNow();

      // Local purge: domain + sync metadata vanish locally.
      await a.pocket.collection(store).purge(id);
      expect(await a.pocket.collection(store).get(id), isNull);
      expect(
          await a.pocket.outbox.readSyncRow(a.pocket.db, store, id), isNull,
          reason: 'the sync row is dropped with the row');

      // The next cycle does NOT resurrect it: cursor-dedup suppresses
      // re-delivery of the unchanged remote version.
      await a.engine.syncNow();
      expect(await a.pocket.collection(store).get(id), isNull,
          reason: 'a purge is FINAL for this record version');

      // The REMOTE copy survives untouched (purge never deletes remotely).
      final remote = await a.backend.getRecord(id);
      expect(remote, isNotNull);
      expect(remote!.data['name'], 'purged');
    });

    test('real_archived_restore_epoch', () async {
      final store = uniqueStore();
      final a = await RealHarness.create(store: store);
      final b = await createSecondClient(store);
      registerCleanup(a);
      registerCleanup(b);

      final id = generateRecordId();
      await a.backend.createRecord(
          id: id, store: store, dataJson: '{"name":"flip-flop"}');
      await a.engine.syncNow();
      await b.engine.syncNow();

      // A archives: the flag flows onto the live server and back to B.
      await a.pocket.collection(store).archive(id);
      await a.engine.syncNow();
      var remote = await a.backend.getRecord(id);
      expect(remote!.data['archived'], isTrue,
          reason: 'the remote data carries the archive flag');
      expect(await a.pocket.collection(store).query().all().count(), 0,
          reason: 'archived rows leave the default scope locally');

      await b.engine.syncNow();
      expect(await b.pocket.collection(store).query().all().count(), 0,
          reason: 'B sees the record leave scope');
      final docB = await b.pocket.collection(store).get(id);
      expect(docB!['archived'], isTrue);

      // B restores: the unarchive round-trips back to A.
      await b.pocket.collection(store).restore(id);
      await b.engine.syncNow();
      remote = await a.backend.getRecord(id);
      expect(remote!.data['archived'], isNot(true),
          reason: 'unarchived remotely (key omitted or literal false)');
      await a.engine.syncNow();
      expect(await a.pocket.collection(store).query().all().count(), 1,
          reason: 'the restore propagated back to A');
      expect((await a.pocket.collection(store).get(id))!['archived'], isFalse);
    });

    test('real_keep_unsynced_archive_vanishes_before_wire', () async {
      final store = uniqueStore();
      // Default schema (keepUnsyncedArchives=false): the offline
      // create+archive vanishes at archive time and NEVER reaches the wire.
      final a = await RealHarness.create(store: store);
      registerCleanup(a);

      final id = generateRecordId();
      await a.pocket.collection(store).put(record(id: id, name: 'gone'));
      await a.pocket.collection(store).archive(id);
      expect(await a.pocket.collection(store).get(id), isNull,
          reason: 'vanished immediately at archive time');
      expect(await a.pocket.outbox.readOp(a.pocket.db, store, id), isNull,
          reason: 'no network op survives the vanish rule');
      expect(await a.engine.syncStore.countPending(), 0);

      await a.engine.syncNow();
      await expectLater(a.backend.getRecord(id), throwsA(isA<NotFoundError>()),
          reason: 'nothing was ever pushed');
    });

    test('real_keep_unsynced_archive_survives_to_push', () async {
      final store = uniqueStore();
      // Custom schema with keepUnsyncedArchives=true: the archived unsynced
      // create survives as a plain upsert. Built manually because RealHarness
      // pins widgetsSchema(name: store) without the flag.
      final tokens = RealPbTokenProvider(
        baseUrl: Uri.parse(testPBServer),
        email: testPBEmail,
        password: testPBPassword,
      );
      addTearDown(() => tokens.transport.close());
      final backend = PocketBaseBackend(
        baseUrl: Uri.parse(testPBServer),
        tokenProvider: tokens,
        stores: [store],
        transport: tokens.transport,
      );
      final pocket = await openPocket(
          stores: [widgetsSchema(name: store, keepUnsyncedArchives: true)]);
      final engine = SyncEngine(pocket: pocket, backend: backend,
          config: realConfig());
      await engine.start();
      addTearDown(() async {
        await engine.stop();
        backend.close();
        await pocket.close();
        try {
          await cleanupStore(tokens, store);
        } catch (_) {}
      });

      final id = generateRecordId();
      await pocket.collection(store).put(record(id: id, name: 'kept'));
      await pocket.collection(store).archive(id);
      final doc = await pocket.collection(store).get(id);
      expect(doc, isNotNull, reason: 'kept locally when configured');
      expect(doc!['archived'], isTrue);

      await engine.syncNow();
      final remote = await backend.getRecord(id);
      expect(remote, isNotNull,
          reason: 'the archived unsynced create reached the wire');
      expect(remote!.data['archived'], isTrue);
    });

    test('real_duplicate_custom_id_one_record_survives', () async {
      final store = uniqueStore();
      final a = await RealHarness.create(store: store);
      final b = await createSecondClient(store);
      registerCleanup(a);
      registerCleanup(b);

      final shared = generateRecordId();
      // Both clients write offline with the SAME id, different content.
      await a.pocket
          .collection(store)
          .put(record(id: shared, name: 'from-A', qty: 1));
      await b.pocket
          .collection(store)
          .put(record(id: shared, name: 'from-B', qty: 2));

      await a.engine.syncNow(); // A's create lands first
      await b.engine.syncNow(); // B pulls (merge) then settles

      // Exactly ONE remote record survives.
      final remote = await a.backend.getRecord(shared);
      expect(remote, isNotNull);
      expect(remote!.data['name'], 'from-A',
          reason: 'first-writer content survived');
      expect((await b.pocket.collection(store).get(shared)), isNotNull,
          reason: 'B holds a converged copy');
      expect((await b.pocket.collection(store).get(shared))!['name'], 'from-A');
      expect(await b.engine.syncStore.countPending(), 0);
    });

    test('real_concurrent_create_storm_converges', () async {
      final store = uniqueStore();
      final a = await RealHarness.create(store: store);
      final b = await createSecondClient(store);
      registerCleanup(a);
      registerCleanup(b);

      const nPerClient = 40;
      final idsA = <String>[];
      final idsB = <String>[];
      for (var i = 0; i < nPerClient; i++) {
        idsA.add(generateRecordId());
        idsB.add(generateRecordId());
      }
      expect(idsA.toSet().length, nPerClient,
          reason: 'no collisions inside one client');
      expect(idsA.toSet().intersection(idsB.toSet()), isEmpty,
          reason: 'no collisions ACROSS concurrent clients');

      for (var i = 0; i < nPerClient; i++) {
        await a.pocket
            .collection(store)
            .put(record(id: idsA[i], name: 'a$i', qty: i));
        await b.pocket
            .collection(store)
            .put(record(id: idsB[i], name: 'b$i', qty: 1000 + i));
      }
      await a.engine.syncNow();
      await b.engine.syncNow();

      expect(await remoteCount(a, store), nPerClient * 2,
          reason: 'every created record landed exactly once');
      expect(await a.engine.syncStore.countPending(), 0);
      expect(await b.engine.syncStore.countPending(), 0);
    });
  });
}
