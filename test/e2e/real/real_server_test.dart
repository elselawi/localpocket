@Tags(['real'])
library;

import 'dart:async';
import 'dart:convert';

import 'package:localpocket/src/adapters/pocketbase/transport.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../../secret.dart';
import '../../support/helpers.dart';
import 'real_helpers.dart';

/// LIVE PocketBase E2E suite — hits the real server in `test/secret.dart`.
///
/// Every test runs in an isolated remote `store` (unique per run) and cleans
/// up after itself. Run with:
///   dart test test/e2e/real/real_server_test.dart
void main() {
  /// Polls until [predicate] or fails after [deadlineMs]. The shared live
  /// server's realtime delivery latency varies under concurrent load, so
  /// latency-dependent assertions poll instead of trusting a fixed sleep.
  Future<void> waitFor(FutureOr<bool> Function() predicate, String reason,
      {int deadlineMs = 15000}) async {
    final deadline = DateTime.now().add(Duration(milliseconds: deadlineMs));
    while (!await predicate()) {
      if (DateTime.now().isAfter(deadline)) fail(reason);
      await Future<void>.delayed(const Duration(milliseconds: 100));
    }
  }

  group('live PocketBase E2E (real server)', () {
    test('real_superuser_auth_and_scoped_requests', () async {
      final tokens = RealPbTokenProvider(
        baseUrl: Uri.parse(testPBServer),
        email: testPBEmail,
        password: testPBPassword,
      );
      addTearDown(() => tokens.transport.close());

      final token = await tokens.currentToken();
      expect(token.value, isNotEmpty);
      expect(tokens.identity, isNotEmpty);
      expect(token.value, isNot(contains(testPBPassword)),
          reason: 'the password never appears in the token');

      // An authenticated list against the real collection succeeds.
      final res = await tokens.transport.send(HttpRequest(
        method: 'GET',
        url: Uri.parse(testPBServer)
            .resolve('/api/collections/data/records')
            .replace(queryParameters: {
          'filter':
              "(store='$testPBServer' && updated>='1970-01-01 00:00:00.000Z')",
          'perPage': '1',
        }),
        headers: {'Authorization': 'Bearer ${token.value}'},
      ));
      expect(res.status, 200);
    });

    test('real_create_pull_roundtrip', () async {
      final store = uniqueStore();
      final h = await RealHarness.create(store: store);
      registerCleanup(h);

      final id = generateRecordId();
      final created = await h.backend.createRecord(
          id: id, store: store, dataJson: '{"name":"roundtrip","qty":7}');
      expect(created.id, id);
      expect(created.store, store);
      expect(created.data['name'], 'roundtrip');

      // The engine pulls it and applies it locally as a clean row.
      await h.engine.syncNow();
      final local = await h.pocket.collection(store).get(id);
      expect(local, isNotNull);
      expect(local!['name'], 'roundtrip');
      expect(local['qty'], 7);
      final sr = await h.pocket.outbox.readSyncRow(h.pocket.db, store, id);
      expect(sr!.syncState, SyncState.clean);
      expect(sr.remoteUpdated, isNotNull);
    });

    test('real_custom_id_and_duplicate_rejected', () async {
      final store = uniqueStore();
      final h = await RealHarness.create(store: store);
      registerCleanup(h);

      final id = generateRecordId(); // 15 chars [a-z0-9]
      await h.backend
          .createRecord(id: id, store: store, dataJson: '{"name":"first"}');
      // The real server rejects a duplicate with validation_pk_invalid.
      await expectLater(
        h.backend
            .createRecord(id: id, store: store, dataJson: '{"name":"second"}'),
        throwsA(isA<DuplicateIdError>()),
      );
    });

    test('real_id_length_constraint_enforced', () async {
      final store = uniqueStore();
      final h = await RealHarness.create(store: store);
      registerCleanup(h);

      // The data collection enforces exactly 15 characters (live-verified).
      await expectLater(
        h.backend.createRecord(
            id: 'shortid123', // 9 chars
            store: store,
            dataJson: '{"name":"x"}'),
        throwsA(isA<PayloadError>()),
      );
      await expectLater(
        h.backend.createRecord(
            id: 'waytoolongid12345', // 17 chars
            store: store,
            dataJson: '{"name":"x"}'),
        throwsA(isA<PayloadError>()),
      );
    });

    test('real_json_patch_replaces_whole_data', () async {
      final store = uniqueStore();
      final h = await RealHarness.create(store: store);
      registerCleanup(h);

      final id = generateRecordId();
      await h.backend.createRecord(
          id: id,
          store: store,
          dataJson: '{"name":"orig","qty":1,"meta":{"a":1}}');
      // Full-payload discipline: PATCH replaces the whole data object.
      await h.backend.updateRecord(id: id, dataJson: '{"name":"renamed"}');
      final now = await h.backend.getRecord(id);
      expect(now!.data['name'], 'renamed');
      expect(now.data.containsKey('qty'), isFalse);
      expect(now.data.containsKey('meta'), isFalse);
    });

    test('real_batch_probe_and_upsert', () async {
      final store = uniqueStore();
      final h = await RealHarness.create(store: store);
      registerCleanup(h);

      // The real server has batch enabled (settings batch.enabled=true).
      await h.backend.prepare();
      expect(h.backend.capabilities.batchEnabled, isTrue,
          reason: 'real pb.apexo.app has batch enabled');

      final createId = generateRecordId();
      final updateId = generateRecordId();
      await h.backend
          .createRecord(id: updateId, store: store, dataJson: '{"name":"old"}');
      final results = await h.backend.pushBatch([
        PushOp(
            opId: 'c1',
            store: store,
            id: createId,
            dataJson: '{"name":"new"}',
            upsert: true),
        PushOp(
            opId: 'u1',
            store: store,
            id: updateId,
            dataJson: '{"name":"updated"}',
            baseUpdated: 'x',
            upsert: true),
      ]);
      expect(results.length, 2);
      expect(results.every((r) => r.ok), isTrue);
      final created = await h.backend.getRecord(createId);
      final updated = await h.backend.getRecord(updateId);
      expect(created!.data['name'], 'new');
      expect(updated!.data['name'], 'updated');
    });

    test('real_batch_over_max_requests_binary_splits', () async {
      final store = uniqueStore();
      // maxBatch 200 > the server's maxRequests=101: one over-limit batch is
      // sent, rejected, and binary-split until every op lands.
      final h = await RealHarness.create(store: store);
      registerCleanup(h);

      for (var i = 0; i < 120; i++) {
        await h.pocket.collection(store).put(record(name: 'n$i', qty: i));
      }
      await h.engine.syncNow();
      expect(await h.engine.syncStore.countPending(), 0,
          reason: 'the over-limit batch was binary-split and drained');

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
      final body = jsonDecode(res.body) as Map<String, Object?>;
      expect((body['items']! as List).length, 120,
          reason: 'all 120 records landed despite the batch cap');
    });

    test('real_offline_drain_converges', () async {
      final store = uniqueStore();
      final h = await RealHarness.create(store: store, start: false);
      registerCleanup(h);

      for (var i = 0; i < 150; i++) {
        await h.pocket.collection(store).put(record(name: 'op$i', qty: i));
      }
      expect(await h.engine.syncStore.countPending(), 150);

      await h.engine.start();
      var guard = 0;
      while (await h.engine.syncStore.countPending() > 0) {
        await h.engine.syncNow();
        guard++;
        if (guard > 20) fail('drain did not converge');
      }
      expect(await h.engine.syncStore.countPending(), 0);

      // Verify on the server: every record landed in this store.
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
      final body = jsonDecode(res.body) as Map<String, Object?>;
      expect((body['items']! as List).length, 150);
    });

    test('real_two_client_disjoint_edits_converge', () async {
      final store = uniqueStore();
      final a = await RealHarness.create(store: store);
      final b = await createSecondClient(store);
      registerCleanup(a);
      registerCleanup(b);

      final id = generateRecordId();
      await a.backend.createRecord(
          id: id, store: store, dataJson: '{"name":"n0","qty":1}');
      await a.engine.syncNow();
      await b.engine.syncNow();

      await a.pocket.collection(store).patch(id, {'name': 'from-A'});
      await b.pocket.collection(store).patch(id, {'qty': 99});
      await a.engine.syncNow();
      await b.engine.syncNow();
      await a.engine.syncNow();

      final la = await a.pocket.collection(store).get(id);
      final lb = await b.pocket.collection(store).get(id);
      expect(la!['name'], 'from-A');
      expect(la['qty'], 99);
      expect(lb!['name'], 'from-A');
      expect(lb['qty'], 99);
      final server = await a.backend.getRecord(id);
      expect(server!.data['name'], 'from-A');
      expect(server.data['qty'], 99);
    });

    test('real_two_client_overlap_remote_wins', () async {
      final store = uniqueStore();
      final a = await RealHarness.create(store: store);
      final b = await createSecondClient(store);
      registerCleanup(a);
      registerCleanup(b);

      final id = generateRecordId();
      await a.backend
          .createRecord(id: id, store: store, dataJson: '{"name":"n0"}');
      await a.engine.syncNow();
      await b.engine.syncNow();

      await a.pocket.collection(store).patch(id, {'name': 'from-A'});
      await b.pocket.collection(store).patch(id, {'name': 'from-B'});
      await a.engine.syncNow();
      await b.engine.syncNow();
      await a.engine.syncNow();

      final la = await a.pocket.collection(store).get(id);
      final lb = await b.pocket.collection(store).get(id);
      expect(la!['name'], 'from-A', reason: 'D4 remote wins');
      expect(lb!['name'], 'from-A');
    });

    test('real_realtime_fastpath_applies', () async {
      final store = uniqueStore();
      final a = await RealHarness.create(store: store);
      final b = await createSecondClient(store);
      registerCleanup(a);
      registerCleanup(b);
      await a.backend.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 800));

      // B (a second client) creates a record through the real server.
      final id = generateRecordId();
      await b.backend
          .createRecord(id: id, store: store, dataJson: '{"name":"via-sse"}');

      // A's realtime receives the embedded record and fast-path applies it
      // WITHOUT an explicit syncNow.
      await waitFor(
          () async => (await a.pocket.collection(store).get(id)) != null,
          'realtime fast-path never applied the record');
      final local = await a.pocket.collection(store).get(id);
      expect(local!['name'], 'via-sse');
    });

    test('real_realtime_update_fastpath', () async {
      final store = uniqueStore();
      final a = await RealHarness.create(store: store);
      final b = await createSecondClient(store);
      registerCleanup(a);
      registerCleanup(b);

      final id = generateRecordId();
      await a.backend.createRecord(
          id: id, store: store, dataJson: '{"name":"v1","qty":1}');
      await a.engine.syncNow();
      await b.engine.syncNow();
      expect((await a.pocket.collection(store).get(id))!['qty'], 1);

      // A connects its realtime feed; the connect doorbell only schedules a
      // far-future pull-only cycle, so A's ONLY path to the update below is
      // the realtime fast-path.
      await a.backend.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 800));
      final actionsBefore = a.engine.debugActions.length;

      // B updates the EXISTING record through the real server.
      await b.pocket.collection(store).patch(id, {'qty': 42});
      await b.engine.syncNow();

      // A's realtime fast-path applies the new field WITHOUT an explicit
      // syncNow (and without any full cycle).
      await waitFor(() async {
        final rec = await a.pocket.collection(store).get(id);
        return rec != null && rec['qty'] == 42;
      }, 'the update fast-path never applied the new field');
      final local = await a.pocket.collection(store).get(id);
      expect(local, isNotNull);
      expect(local!['qty'], 42,
          reason: 'the update fast-path applied the new field');
      expect(local['name'], 'v1', reason: 'untouched fields are preserved');

      final actions = a.engine.debugActions.sublist(actionsBefore);
      expect(actions, contains('fast:$store'),
          reason: 'the update took the realtime fast path on A');
      expect(actions, isNot(contains('cycle')),
          reason: 'A never ran a full sync cycle');
    });

    test('real_realtime_delete_emits_verified_hint', () async {
      final store = uniqueStore();
      final a = await RealHarness.create(store: store);
      registerCleanup(a);
      await a.backend.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 800));

      final id = generateRecordId();
      await a.backend
          .createRecord(id: id, store: store, dataJson: '{"name":"to-delete"}');
      await Future<void>.delayed(const Duration(milliseconds: 800));

      final hints = <BackendHint>[];
      final sub = a.backend.hints().listen(hints.add);

      // Delete it server-side (direct superuser HTTP).
      final token = await a.tokens.currentToken();
      await a.tokens.transport.send(HttpRequest(
        method: 'DELETE',
        url: Uri.parse(testPBServer)
            .resolve('/api/collections/data/records/$id'),
        headers: {'Authorization': 'Bearer ${token.value}'},
      ));
      await waitFor(() => hints.any((h) => h.kind == BackendHintKind.deleted),
          'delete events never emitted the verified hint');
      await sub.cancel();
      expect(hints.any((h) => h.kind == BackendHintKind.deleted), isTrue,
          reason: 'delete events verify via GET then emit a deleted hint');
    });

    test('real_sweep_finds_direct_server_create', () async {
      final store = uniqueStore();
      final h = await RealHarness.create(store: store);
      registerCleanup(h);

      // A record created DIRECTLY on the server (never seen by the pull).
      final id = generateRecordId();
      final token = await h.tokens.currentToken();
      await h.tokens.transport.send(HttpRequest(
        method: 'POST',
        url: Uri.parse(testPBServer).resolve('/api/collections/data/records'),
        headers: {
          'Authorization': 'Bearer ${token.value}',
          'Content-Type': 'application/json',
        },
        body: jsonEncode({
          'id': id,
          'store': store,
          'data': {'name': 'swept'}
        }),
      ));

      // A forced sweep (fields=id,updated projection) must discover it.
      await h.engine.invalidateVisibility();
      final local = await h.pocket.collection(store).get(id);
      expect(local, isNotNull, reason: 'sweep found the direct server create');
      expect(local!['name'], 'swept');
    });

    test('real_sweep_unhide', () async {
      final store = uniqueStore();
      final h = await RealHarness.create(store: store);
      registerCleanup(h);

      final id = generateRecordId();
      final token = await h.tokens.currentToken();
      final base = Uri.parse(testPBServer);
      Future<void> create(Map<String, Object?> data) async {
        final res = await h.tokens.transport.send(HttpRequest(
          method: 'POST',
          url: base.resolve('/api/collections/data/records'),
          headers: {
            'Authorization': 'Bearer ${token.value}',
            'Content-Type': 'application/json',
          },
          body: jsonEncode({'id': id, 'store': store, 'data': data}),
        ));
        expect(res.status, inInclusiveRange(200, 299));
      }

      Future<void> remove() async {
        final res = await h.tokens.transport.send(HttpRequest(
          method: 'DELETE',
          url: base.resolve('/api/collections/data/records/$id'),
          headers: {'Authorization': 'Bearer ${token.value}'},
        ));
        expect(res.status, 204, reason: 'PB answers 204 with an empty body');
      }

      await create({'name': 'swing'});
      await h.engine.syncNow();
      expect(await h.pocket.collection(store).get(id), isNotNull);

      // Raw server-side delete (no SSE event): the forced sweep HIDES the
      // row — retained but out of the default query scope.
      await remove();
      await h.engine.invalidateVisibility();
      expect(await h.pocket.collection(store).get(id), isNotNull,
          reason: 'hidden, never hard-deleted');
      expect(await h.pocket.collection(store).query().all().count(), 0);

      // The SAME id is re-created server-side (the record is visible again).
      // A forced sweep re-sees it and the row leaves the hidden scope. (The
      // live server stamps a fresh `updated`, so the pull may be the first
      // re-seer; the pin is the hidden -> visible anti-entropy round-trip,
      // which the create-only sweep test does not cover.)
      await create({'name': 'swing-again'});
      await h.engine.invalidateVisibility();
      expect(await h.pocket.collection(store).query().all().count(), 1,
          reason: 'the re-listed record is visible again after the sweep');
      expect(
          (await h.pocket.collection(store).get(id))!['name'], 'swing-again');
      final sr = await h.pocket.outbox.readSyncRow(h.pocket.db, store, id);
      expect(sr!.accessState, AccessState.visible);
    });

    test('real_archived_convention', () async {
      final store = uniqueStore();
      final h = await RealHarness.create(store: store);
      registerCleanup(h);

      final live = await h.backend.createRecord(
          id: generateRecordId(), store: store, dataJson: '{"name":"a"}');
      expect(live.data.containsKey('archived'), isFalse,
          reason: 'archived=false is omitted from the wire');

      final gone = await h.backend.createRecord(
          id: generateRecordId(),
          store: store,
          dataJson: '{"name":"b","archived":true}');
      expect(gone.data['archived'], isTrue);
    });

    test('real_404_maps_to_not_found', () async {
      final store = uniqueStore();
      final h = await RealHarness.create(store: store);
      registerCleanup(h);
      await expectLater(
        h.backend.getRecord(generateRecordId()),
        throwsA(isA<NotFoundError>()),
      );
    });

    test('real_store_isolation', () async {
      final storeA = uniqueStore();
      final storeB = uniqueStore();
      final a = await RealHarness.create(store: storeA);
      final b = await createSecondClient(storeB);
      registerCleanup(a);
      registerCleanup(b);

      final idA = generateRecordId();
      final idB = generateRecordId();
      await a.backend
          .createRecord(id: idA, store: storeA, dataJson: '{"name":"in-A"}');
      await b.backend
          .createRecord(id: idB, store: storeB, dataJson: '{"name":"in-B"}');

      // Client A pulls only its own store.
      await a.engine.syncNow();
      expect(await a.pocket.collection(storeA).get(idA), isNotNull);
      expect(await a.pocket.collection(storeA).get(idB), isNull,
          reason: "B's record never leaks into A's store");
    });

    test('real_property_roundtrip_diff_only_mutated_field', () async {
      final store = uniqueStore();
      final h = await RealHarness.create(store: store);
      registerCleanup(h);

      final id = generateRecordId();
      await h.backend.createRecord(
          id: id,
          store: store,
          dataJson:
              '{"name":"orig","qty":5,"meta":{"nested":{"deep":[1,2,3]}},"tags":["a","b"]}');
      await h.engine.syncNow();
      await h.pocket.collection(store).patch(id, {'name': 'renamed'});
      await h.engine.syncNow();

      final server = await h.backend.getRecord(id);
      expect(server!.data['name'], 'renamed');
      expect(server.data['qty'], 5, reason: 'unmutated fields preserved');
      expect(server.data['meta'], {
        'nested': {
          'deep': [1, 2, 3]
        }
      });
      expect(server.data['tags'], ['a', 'b']);
    });

    test('real_file_upload_and_single_file_clear', () async {
      // Live-verified file modifier semantics: a streamed upload
      // APPENDS a file to the record's attachments list; `removeNames` clears one
      // file (single-file clearing). Requires the real data collection to
      // expose an `attachments` file field.
      final store = uniqueStore();
      final h = await RealHarness.create(store: store);
      registerCleanup(h);
      final id = generateRecordId();
      await h.backend
          .createRecord(id: id, store: store, dataJson: '{"name":"f"}');

      final bytes = List<int>.generate(1024, (i) => i % 251);
      final uploaded = await h.backend.updateRecordFilesStream(
        id: id,
        uploads: {
          'probe.bin': StreamFileUpload(
            filename: 'probe.bin',
            length: bytes.length,
            streamFactory: () async => Stream.value(bytes),
          ),
        },
      );
      expect(uploaded.attachments, hasLength(1),
          reason: 'the upload appends one entry to attachments');
      final remoteName = uploaded.attachments.single;

      // Single-file clearing: remove exactly that file.
      final cleared = await h.backend.updateRecordFiles(
        id: id,
        removeNames: [remoteName],
      );
      expect(cleared.attachments, isEmpty, reason: 'the single file is cleared');

      // The remote record reflects the empty list.
      final fetched = await h.backend.getRecord(id);
      expect(fetched!.attachments, isEmpty);
    });

    test('real_realtime_gap_hint_on_connect', () async {
      // Live-verified SSE contract: every (re)connect closes a gap,
      // so the backend hints every configured store to re-pull.
      final store = uniqueStore();
      final h = await RealHarness.create(store: store);
      registerCleanup(h);

      final hints = <BackendHint>[];
      final sub = h.backend.hints().listen(hints.add);
      addTearDown(() => sub.cancel());
      await h.backend.startRealtime();
      await waitFor(() => hints.any((hint) => hint.store == store),
          'the connect (gap close) never hinted the store');
      expect(hints.any((hint) => hint.store == store), isTrue,
          reason: 'the connect (gap close) hints the store');
    }, timeout: const Timeout(Duration(seconds: 30)));
  });
}
