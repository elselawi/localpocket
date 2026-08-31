import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:localpocket/src/web/worker_engine.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../support/mock_pb_server.dart';
import 'support/worker_harness.dart';

/// Waits (polling, deadline-bounded) until [predicate] holds. Watch emissions
/// and change-bus forwarding are asynchronous; this keeps tests deterministic
/// without fixed sleeps.
Future<void> waitUntil(
  Future<bool> Function() predicate, {
  Duration timeout = const Duration(seconds: 5),
}) async {
  final deadline = DateTime.now().add(timeout);
  while (DateTime.now().isBefore(deadline)) {
    if (await predicate()) return;
    await Future<void>.delayed(const Duration(milliseconds: 10));
  }
  fail('Timed out after $timeout waiting for condition.');
}

void main() {
  group('WorkerEngine — envelope & protocol', () {
    late WorkerHarness h;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(() async {
        await h.close();
      });
    });

    test('capabilities rides the contract and reports live engine facts',
        () async {
      final caps = await h.runtime.send(const contract.CapabilitiesRequest());
      expect(caps.sqliteVersion, isA<String>());
      expect(caps.hasStrict, isA<bool>());
      expect(caps.walSupported, isA<bool>());
      expect(caps.hasFts5, isA<bool>());
      // Storage facts are honest: the harness backs the engine with a
      // volatile MemoryBlobStore.
      expect(caps.durable, isFalse);
      expect(caps.journal, isA<String>());
    });

    test('success replies echo the request id', () async {
      final reply =
          await h.engine.handleRequest(h.sink, h.req(WireOp.open).toJson());
      expect(reply, isA<WorkerSuccess>());
      expect((reply as WorkerSuccess).requestId, 0);
    });

    test('version mismatch fails with protocolMismatch + expected/actual',
        () async {
      final bad = WebRequest(
        version: webProtocolVersion + 99,
        requestId: 0,
        op: WireOp.open,
      );
      final err = await h.sendError(bad, code: WireErrorCode.protocolMismatch);
      expect(err.requestId, 0);
      expect(err.details?['expected'], webProtocolVersion);
      expect(err.details?['actual'], webProtocolVersion + 99);
      expect(err.message, contains('Version mismatch'));
    });

    test('unknown operations are rejected at the envelope', () async {
      final err = await h.sendRaw({
        'v': webProtocolVersion,
        'i': 1,
        'op': 'not-a-real-op',
        'a': <String, Object?>{},
      });
      expect(err, isA<WorkerError>());
      expect((err as WorkerError).code, WireErrorCode.protocolEnvelope);
    });

    test('malformed envelopes fail with protocolEnvelope', () async {
      final payloads = <Map<String, Object?>>[
        {'i': 1, 'op': WireOp.open, 'a': <String, Object?>{}}, // no v
        {'v': 'one', 'i': 1, 'op': WireOp.open, 'a': {}}, // v not int
        {'v': webProtocolVersion, 'op': WireOp.open, 'a': {}}, // no i
        {'v': webProtocolVersion, 'i': 1, 'op': WireOp.open}, // no args
      ];
      for (final payload in payloads) {
        final err = await h.sendRaw(payload);
        expect(err, isA<WorkerError>(), reason: 'payload: $payload');
        expect((err as WorkerError).code, WireErrorCode.protocolEnvelope);
      }
    });
  });

  group('WorkerEngine — CRUD over the contract', () {
    late WorkerHarness h;

    setUp(() async {
      // keepUnsyncedArchives: engine archives of never-remote records hard-
      // delete by default; classic archive/restore semantics need the flag.
      h = await WorkerHarness.open(
          stores: [widgetsSchema(keepUnsyncedArchives: true)]);
      addTearDown(() async {
        await h.close();
      });
    });

    test('put then get round-trips a record', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'apple', qty: 5), id: id);

      final doc = await h.get('widgets', id);
      expect(doc, isNotNull);
      expect(doc!['name'], 'apple');
      expect(doc['qty'], 5);
    });

    test('single mutations: patch, archive, restore, purge', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'widget', qty: 1), id: id);

      Future<void> mutate(contract.Mutation mutation) => h.runtime
          .send(contract.MutateRequest(store: 'widgets', mutation: mutation));

      // patch
      await mutate(contract.MutationPatch(id, {'qty': 9}));
      expect((await h.get('widgets', id))!['qty'], 9);

      // archive
      await mutate(contract.MutationArchive(id));
      final archived = (await h.pocket
              .collection('widgets')
              .query()
              .includeArchived()
              .all()
              .fetch())
          .items;
      expect(archived.single['archived'], isTrue);

      // restore
      await mutate(contract.MutationRestore(id));
      final restored = await h.get('widgets', id);
      expect(restored, isNotNull);

      // purge
      await mutate(contract.MutationPurge(id));
      expect(await h.get('widgets', id), isNull);
    });

    test('upsert merges into existing and creates when missing', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'widget', qty: 1), id: id);

      // Merge: only `qty` changes, `name` survives.
      await h.runtime.send(contract.MutateRequest(
        store: 'widgets',
        mutation: contract.MutationUpsert({'id': id, 'qty': 9}),
      ));
      final merged = await h.get('widgets', id);
      expect(merged!['name'], 'widget',
          reason: 'upsert preserves unspecified fields');
      expect(merged['qty'], 9);

      // Create-when-missing.
      final fresh = generateRecordId();
      await h.runtime.send(contract.MutateRequest(
        store: 'widgets',
        mutation: contract.MutationUpsert(record(name: 'fresh', id: fresh)),
      ));
      expect((await h.get('widgets', fresh))!['name'], 'fresh');
    });

    test(
        'a contract transaction session commits a multi-step batch '
        'atomically', () async {
      final a = generateRecordId();
      final b = generateRecordId();
      final session = (await h.runtime
              .send(const contract.TransactionBeginRequest(readOnly: false)))
          .session;
      Future<void> mutate(contract.Mutation mutation) =>
          h.runtime.send(contract.MutateRequest(
              store: 'widgets', mutation: mutation, session: session));
      await mutate(contract.MutationPut(record(name: 'a', qty: 1, id: a)));
      await mutate(contract.MutationPut(record(name: 'b', qty: 2, id: b)));
      await mutate(contract.MutationPatch(a, {'qty': 11}));
      await h.runtime.send(contract.TransactionCommitRequest(session: session));

      expect((await h.get('widgets', a))!['qty'], 11);
      expect((await h.get('widgets', b))!['qty'], 2);
    });

    test('a failing session mutation rolls the whole batch back', () async {
      final a = generateRecordId();
      final session = (await h.runtime
              .send(const contract.TransactionBeginRequest(readOnly: false)))
          .session;
      await h.runtime.send(contract.MutateRequest(
        store: 'widgets',
        mutation: contract.MutationPut(record(name: 'a', qty: 1, id: a)),
        session: session,
      ));
      // A schema violation inside the session fails typed...
      await expectLater(
        h.runtime.send(contract.MutateRequest(
          store: 'widgets',
          mutation: contract.MutationPut({'id': generateRecordId()}),
          session: session,
        )),
        throwsA(isA<ValidationException>()),
      );
      // ...and the facade settles the session with a rollback, so the
      // earlier put of the batch never lands.
      await h.runtime
          .send(contract.TransactionRollbackRequest(session: session));
      final page = await h.pocket.collection('widgets').query().all().fetch();
      expect(page.items, isEmpty);
    });

    test('get of a missing record succeeds with a null result', () async {
      final row = await h.get('widgets', generateRecordId());
      expect(row, isNull);
    });

    test('a mutation violating a schema rule fails with a typed error',
        () async {
      await expectLater(
        h.runtime.send(contract.MutateRequest(
          store: 'widgets',
          mutation: contract.MutationPut({'id': generateRecordId()}),
        )),
        throwsA(isA<ValidationException>()),
      );
    });

    test('mutations broadcast the contract committed change (E4)', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'apple'), id: id);
      // Group commit emits post-commit notifications after the commit
      // boundary; give the broadcast a turn to land.
      await Future<void>.delayed(Duration.zero);

      final events = h.sink.byOp(WireOp.contractEvent);
      expect(events, isNotEmpty);
      final ev = events.last['event'];
      expect(ev, isA<Map>());
      final event = contract.ContractCodec.decodeEvent(
          (ev! as Map).cast<String, Object?>());
      expect(event, isA<contract.CommittedChange>());
      final change = event as contract.CommittedChange;
      expect(change.store, 'widgets');
      expect(change.id, id);
      expect(change.action, contract.ChangeAction.create);
      expect(change.origin, contract.ChangeOrigin.local);
    });

    test(
        'a contract transaction begun at full durability commits through '
        'the durable path', () async {
      final id = generateRecordId();
      final session = (await h.runtime.send(
              const contract.TransactionBeginRequest(
                  readOnly: false,
                  durability: contract.TransactionDurability.full)))
          .session;
      await h.runtime.send(contract.MutateRequest(
        store: 'widgets',
        mutation: contract.MutationPut(record(name: 'durable', qty: 1, id: id)),
        session: session,
      ));
      await h.runtime.send(contract.TransactionCommitRequest(session: session));
      expect((await h.get('widgets', id))!['name'], 'durable');
    });
  });

  group('WorkerEngine — interactive transactions over the contract', () {
    // The wire contract for a settle (commit/rollback must not acknowledge
    // before the real SQL runs) is exercised through the contract session
    // commands; application failures ride the contract error codec.
    late WorkerHarness h;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(() async {
        await h.close();
      });
    });

    Future<String> begin() async => (await h.runtime
            .send(const contract.TransactionBeginRequest(readOnly: false)))
        .session;

    test('session CRUD + commit persists', () async {
      final session = await begin();
      final id = generateRecordId();
      await h.runtime.send(contract.MutateRequest(
        store: 'widgets',
        mutation: contract.MutationPut(record(name: 'tx', qty: 42, id: id)),
        session: session,
      ));
      // The write is visible in-session...
      final inTx = await h.runtime.send(
          contract.GetRequest(store: 'widgets', id: id, session: session));
      expect(inTx.row?['qty'], 42);

      await h.runtime.send(contract.TransactionCommitRequest(session: session));

      final committed = await h.get('widgets', id);
      expect(committed, isNotNull);
      expect(committed!['qty'], 42);
    });

    test('rollback discards the session work', () async {
      final session = await begin();
      final id = generateRecordId();
      await h.runtime.send(contract.MutateRequest(
        store: 'widgets',
        mutation: contract.MutationPut(record(name: 'gone', qty: 1, id: id)),
        session: session,
      ));
      await h.runtime
          .send(contract.TransactionRollbackRequest(session: session));
      expect(await h.get('widgets', id), isNull);
    });

    test('savepoint rollback-to discards nested work and releases the name',
        () async {
      final session = await begin();
      final id = generateRecordId();
      await h.runtime.send(contract.MutateRequest(
        store: 'widgets',
        mutation: contract.MutationPut(record(name: 'outer', qty: 1, id: id)),
        session: session,
      ));

      const spName = 'sp1';
      await h.runtime.send(
          contract.TransactionSavepointRequest(session: session, name: spName));
      await h.runtime.send(contract.MutateRequest(
        store: 'widgets',
        mutation: contract.MutationPatch(id, {'qty': 99}),
        session: session,
      ));
      // Rolling back to a savepoint also releases it, so a later savepoint
      // may reuse the name (no unbounded growth / collision).
      await h.runtime.send(contract.TransactionRollbackToRequest(
          session: session, name: spName));
      final inTx = await h.runtime.send(
          contract.GetRequest(store: 'widgets', id: id, session: session));
      expect(inTx.row?['qty'], 1);

      await h.runtime.send(
          contract.TransactionSavepointRequest(session: session, name: spName));
      await h.runtime.send(contract.MutateRequest(
        store: 'widgets',
        mutation: contract.MutationPatch(id, {'qty': 2}),
        session: session,
      ));
      await h.runtime.send(contract.TransactionCommitRequest(session: session));
      expect((await h.get('widgets', id))!['qty'], 2);
    });

    test('session ops on an unknown session fail typed', () async {
      await expectLater(
        h.runtime.send(const contract.GetRequest(
            store: 'widgets', id: 'x', session: 'tx9999')),
        throwsA(isA<StateError>()),
      );
    });

    test('a second session while one is active fails typed', () async {
      final first = await begin();
      await expectLater(
        h.runtime.send(const contract.TransactionBeginRequest(readOnly: false)),
        throwsA(isA<StateError>()),
      );
      await expectLater(
        h.runtime.send(const contract.TransactionBeginRequest(readOnly: true)),
        throwsA(isA<StateError>()),
      );
      await h.runtime.send(contract.TransactionRollbackRequest(session: first));
      // After the writer settles, a new session begins cleanly.
      final second = await begin();
      await h.runtime
          .send(contract.TransactionRollbackRequest(session: second));
    });

    test(
        'a failed COMMIT surfaces a typed error, releases the session, and '
        'the record is not committed', () async {
      final hooks = TestHooks();
      final h2 = await WorkerHarness.open(testHooks: hooks);
      addTearDown(h2.close);

      final session = await (h2.runtime
              .send(const contract.TransactionBeginRequest(readOnly: false)))
          .then((b) => b.session);
      final id = generateRecordId();
      await h2.runtime.send(contract.MutateRequest(
        store: 'widgets',
        mutation: contract.MutationPut(record(name: 'doomed', qty: 7, id: id)),
        session: session,
      ));

      hooks.commitCrashPoint =
          () => throw StateError('simulated COMMIT failure (disk full)');
      await expectLater(
        h2.runtime.send(contract.TransactionCommitRequest(session: session)),
        throwsA(isA<StateError>()),
      );
      hooks.commitCrashPoint = null;

      // The session was released: a fresh session settles cleanly, and the
      // failed COMMIT rolled the write back.
      final fresh = await (h2.runtime
              .send(const contract.TransactionBeginRequest(readOnly: false)))
          .then((b) => b.session);
      await h2.runtime
          .send(contract.TransactionRollbackRequest(session: fresh));
      expect(await h2.get('widgets', id), isNull);
    });

    test(
        'close mid-transaction settles the session without surfacing an '
        'unhandled error', () async {
      final h3 = await WorkerHarness.open();
      await h3.runtime
          .send(const contract.TransactionBeginRequest(readOnly: false));

      // Closing while the kernel session is held open settles it: the close
      // reply is a success and no unhandled async error escapes.
      final reply = await h3.close();
      expect(reply, isA<WorkerSuccess>());
    });
  });
  group('WorkerEngine — reactive watchers', () {
    late WorkerHarness h;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(() async {
        await h.close();
      });
    });

    Future<contract.WatchStartedResult> startContractWatch(
        contract.QuerySpecData spec) async {
      final request = contract.WatchRequest(store: 'widgets', spec: spec);
      final reply = (await h.customRequest({
        'v': webProtocolVersion,
        'i': 0,
        'op': WireOp.contractRequest,
        'a': {
          'request': contract.ContractCodec.encodeRequest(request),
        },
      }))! as Map<String, Object?>;
      final r = (reply['r']! as Map).cast<String, Object?>();
      final result = (r['result']! as Map).cast<String, Object?>();
      return contract.ContractCodec.decodeResult(request, result)
          as contract.WatchStartedResult;
    }

    Future<contract.OkResult> cancelContractWatch(String subscription) async {
      final request = contract.WatchCancelRequest(subscription: subscription);
      final reply = (await h.customRequest({
        'v': webProtocolVersion,
        'i': 0,
        'op': WireOp.contractRequest,
        'a': {
          'request': contract.ContractCodec.encodeRequest(request),
        },
      }))! as Map<String, Object?>;
      final r = (reply['r']! as Map).cast<String, Object?>();
      final result = (r['result']! as Map).cast<String, Object?>();
      return contract.ContractCodec.decodeResult(request, result)
          as contract.OkResult;
    }

    List<contract.WatchSnapshot> snapshots(String subscription) => [
          for (final e in h.sink.byOp(WireOp.contractEvent))
            if (contract.ContractCodec.decodeEvent(
                    (e['event']! as Map).cast<String, Object?>())
                case final contract.WatchSnapshot s
                when s.subscription == subscription)
              s,
        ];

    test(
        'a contract watch emits its initial snapshot and dedupes unrelated '
        'changes', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'apple', qty: 1), id: id);

      final started = await startContractWatch(contract.QuerySpecData(
        predicate: contract.LeafSpecData(contract.QueryConditionData(
            'name', contract.QueryConditionOp.eq,
            value: 'apple')),
        limit: 50,
      ));
      await waitUntil(() async => snapshots(started.subscription).isNotEmpty);
      var current = snapshots(started.subscription);
      expect(current.single.items.single['name'], 'apple');

      // A mutation matching the query emits a fresh snapshot.
      await h.put('widgets', record(name: 'apple', qty: 2, id: id), id: id);
      await waitUntil(() async => snapshots(started.subscription).length >= 2);
      current = snapshots(started.subscription);
      expect(current.last.items.single['qty'], 2);

      // A mutation NOT affecting the snapshot is digest-deduped.
      final emitted = snapshots(started.subscription).length;
      await h.put('widgets', record(name: 'banana', qty: 100),
          id: generateRecordId());
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(snapshots(started.subscription).length, emitted,
          reason: 'Unrelated row must not re-emit an unchanged snapshot');
    });

    test('an ordered contract watch re-emits on a pure reorder', () async {
      final a = generateRecordId();
      final b = generateRecordId();
      await h.put('widgets', record(name: 'a', qty: 1, id: a), id: a);
      await h.put('widgets', record(name: 'b', qty: 2, id: b), id: b);

      final started = await startContractWatch(contract.QuerySpecData(
        order: [contract.QueryOrderTermData('qty', desc: true)],
        limit: 50,
      ));
      await waitUntil(() async {
        final s = snapshots(started.subscription);
        return s.isNotEmpty &&
            s.first.items.map((r) => r['id']).toList().toString() == '[$b, $a]';
      });

      // A pure reorder: same rows, new positions (b drops below a).
      await h.put('widgets', record(name: 'b', qty: 0, id: b), id: b);
      await waitUntil(() async {
        final s = snapshots(started.subscription);
        if (s.isEmpty) return false;
        final ids = s.last.items.map((r) => r['id']).toList();
        return ids.first == a && ids.last == b;
      });
    });

    test('a projected contract watch emits projected rows', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'apple', qty: 1, price: 1.5), id: id);

      final started = await startContractWatch(contract.QuerySpecData(
        select: ['name'],
        limit: 50,
      ));
      await waitUntil(() async => snapshots(started.subscription).isNotEmpty);
      final s = snapshots(started.subscription).single;
      expect(s.items.single.keys, ['name']);
    });

    test('a contract watch on an unknown field fails with a typed error',
        () async {
      final request = contract.WatchRequest(
        store: 'widgets',
        spec: contract.QuerySpecData(order: [
          contract.QueryOrderTermData('no_such_column'),
        ]),
      );
      final reply = (await h.customRequest({
        'v': webProtocolVersion,
        'i': 0,
        'op': WireOp.contractRequest,
        'a': {
          'request': contract.ContractCodec.encodeRequest(request),
        },
      }))! as Map<String, Object?>;
      final r = (reply['r']! as Map).cast<String, Object?>();
      final error = (r['error']! as Map).cast<String, Object?>();
      expect(contract.decodeError(error), isA<ValidationException>());
    });

    test('a contract watch cancel stops further emissions', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'apple', qty: 1), id: id);
      final started = await startContractWatch(contract.QuerySpecData(
        predicate: contract.LeafSpecData(contract.QueryConditionData(
            'name', contract.QueryConditionOp.eq,
            value: 'apple')),
        limit: 50,
      ));
      await waitUntil(() async => snapshots(started.subscription).isNotEmpty);
      await cancelContractWatch(started.subscription);

      final emitted = snapshots(started.subscription).length;
      await h.put('widgets', record(name: 'apple', qty: 5, id: id), id: id);
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(snapshots(started.subscription).length, emitted,
          reason: 'No emissions after watch cancel');
    });

    test('contract watch_one: initial item + update emission', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'one', qty: 1), id: id);

      final started = await h.runtime
          .send(contract.WatchOneRequest(store: 'widgets', id: id));
      // The kernel emits the initial snapshot on registration.
      await waitUntil(() async => snapshots(started.subscription).isNotEmpty);
      expect(
          snapshots(started.subscription).single.items.single['name'], 'one');

      await h.put('widgets', record(name: 'one-updated', qty: 2), id: id);
      await waitUntil(() async => snapshots(started.subscription).length >= 2);
      expect(snapshots(started.subscription).last.items.single['name'],
          'one-updated');
    });

    test('a contract watch_one over an undecodable record fails typed',
        () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'x', qty: 1), id: id);
      // Corrupt the meta JSON column out-of-band (valid SQLite TEXT, but
      // undecodable) so the record decode throws.
      h.rawDb.execute(
          'UPDATE "widgets" SET meta = ? WHERE id = ?', ['not-json', id]);
      h.pocket.notifyExternalChange({'widgets'});

      // The registration validates the record first: the request fails with
      // a typed error instead of registering a broken watcher.
      await expectLater(
        h.runtime.send(contract.WatchOneRequest(store: 'widgets', id: id)),
        throwsA(isA<Exception>()),
      );
      // Cancelling an unknown subscription is a safe no-op.
      final cancel = await h.runtime
          .send(const contract.WatchCancelRequest(subscription: 'w0'));
      expect(cancel.tag, 'ok');
    });
  });

  group('WorkerEngine — sync handler validation', () {
    late WorkerHarness h;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(() async {
        await h.close();
      });
    });

    test('sync start without baseUrl → ValidationException (E15)', () async {
      await expectLater(
        h.runtime.send(const contract.SyncStartRequest(baseUrl: '')),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('baseUrl'))),
      );
    });

    test('sync ops before start → StateError (E15)', () async {
      for (final request in <contract.Request>[
        const contract.SyncNowRequest(),
        const contract.SyncPauseRequest(),
        const contract.SyncResumeRequest(),
        const contract.SyncUpdateAuthRequest(token: 'x'),
        const contract.SyncSetConnectivityRequest(online: true),
      ]) {
        await expectLater(
          h.runtime.send(request),
          throwsA(isA<StateError>().having(
              (e) => e.message, 'message', contains('Sync is not started'))),
          reason: '${request.tag} before start fails typed',
        );
      }
    });

    test('sync status before start reports closed', () async {
      final status =
          (await h.runtime.send(const contract.SyncStatusRequest())).status;
      expect(status.state, contract.SyncEngineState.closed);
      expect(status.pending, 0);
      expect(status.blocked, 0);
    });
  });

  group('WorkerEngine — sync lifecycle against a mock server', () {
    late WorkerHarness h;
    late MockPbServer server;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(() async {
        await h.close();
      });
      server = await MockPbServer().start();
      addTearDown(server.stop);
    });

    List<contract.SyncStatusEvent> statusEvents() => [
          for (final e in h.sink.byOp(WireOp.contractEvent))
            if (contract.ContractCodec.decodeEvent(
                    (e['event']! as Map).cast<String, Object?>())
                case final contract.SyncStatusEvent s)
              s,
        ];

    test('sync start builds a live engine; every lifecycle op round-trips',
        () async {
      final start = await h.runtime.send(contract.SyncStartRequest(
        baseUrl: server.baseUrl.toString(),
        scopeId: 'worker-test',
        token: 'jwt',
      ));
      expect(start.state, isA<contract.SyncEngineState>());

      // Status reflects the running engine and is pushed as contract events.
      final status =
          (await h.runtime.send(const contract.SyncStatusRequest())).status;
      expect(status.pending, isA<int>());
      expect(status.conflicts, isA<int>());
      expect(status.hidden, isA<int>());
      expect(status.blocked, isA<int>());
      await waitUntil(() async => statusEvents().isNotEmpty);
      expect(statusEvents().last.status.state, isA<contract.SyncEngineState>(),
          reason: 'the engine pushes status events over the contract stream');

      // syncNow returns a complete report.
      final report =
          (await h.runtime.send(const contract.SyncNowRequest())).report;
      expect(report.pushed, isA<int>());
      expect(report.deadLettered, isA<int>());
      expect(report.discarded, isA<int>());
      expect(report.hadError, isA<bool>());

      // Pause/resume/connectivity/auth all succeed once started.
      Future<void> ok(contract.Request request) => h.runtime.send(request);

      await ok(const contract.SyncPauseRequest());
      await ok(const contract.SyncResumeRequest());
      await ok(const contract.SyncSetConnectivityRequest(online: false));
      await ok(const contract.SyncSetConnectivityRequest(online: true));
      await ok(const contract.SyncUpdateAuthRequest(token: 'refreshed-jwt'));

      // A second syncStart reuses the same engine path (restart).
      final restart = await h.runtime.send(contract.SyncStartRequest(
        baseUrl: server.baseUrl.toString(),
        scopeId: 'worker-test',
      ));
      expect(restart.state, isA<contract.SyncEngineState>());

      // syncStop tears the engine down; later ops fail typed again.
      await ok(const contract.SyncStopRequest());
      await expectLater(
        h.runtime.send(const contract.SyncNowRequest()),
        throwsA(isA<StateError>()),
      );
    });

    test('an auth-required server emits AuthRequiredEvent and parks the engine',
        () async {
      server.authRequired = true;
      server.validToken = 'expected-token';

      await h.runtime.send(contract.SyncStartRequest(
        baseUrl: server.baseUrl.toString(),
        scopeId: 'auth-test',
        token: 'wrong-token',
      ));

      // The engine's onAuthRequired callback emits the contract event (the
      // token refresh retry is exercised on the 401 path too).
      List<contract.Event> authEvents() => [
            for (final e in h.sink.byOp(WireOp.contractEvent))
              contract.ContractCodec.decodeEvent(
                  (e['event']! as Map).cast<String, Object?>())
          ].where((e) => e is contract.AuthRequiredEvent).toList();
      await waitUntil(() async => authEvents().isNotEmpty);
      expect(authEvents().last, isA<contract.AuthRequiredEvent>());
    });

    test('sync start without a token still builds a working engine', () async {
      final start = await h.runtime.send(contract.SyncStartRequest(
        baseUrl: server.baseUrl.toString(),
        scopeId: 'no-token',
      ));
      expect(start.state, isA<contract.SyncEngineState>());
      // The empty token is materialized by the kernel-owned provider.
      final status =
          (await h.runtime.send(const contract.SyncStatusRequest())).status;
      expect(status.state, isA<contract.SyncEngineState>());
      await h.runtime.send(const contract.SyncStopRequest());
    });
  });

  group('WorkerEngine — files over the contract', () {
    late WorkerHarness h;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(() async {
        await h.close();
      });
    });

    Future<String> beginUpload(String recordId, int size) async =>
        (await h.runtime.send(contract.FileBeginUploadRequest(
          store: 'widgets',
          recordId: recordId,
          size: size,
          // The harness backs the engine with a volatile MemoryBlobStore, so
          // a real client would have to opt in before attaching.
          allowVolatileBlobs: true,
        )))
            .session;

    Future<void> chunk(String session, List<int> bytes) =>
        h.runtime.send(contract.FileChunkRequest(
            session: session, chunk: Uint8List.fromList(bytes)));

    List<contract.FileChunkEvent> streamChunks(String stream) => [
          for (final e in h.sink.byOp(WireOp.contractEvent))
            if (contract.ContractCodec.decodeEvent(
                    (e['event']! as Map).cast<String, Object?>())
                case final contract.FileChunkEvent c when c.stream == stream)
              c,
        ];

    test('begin/chunk/finish reassembles and attaches', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'with-file'), id: id);
      final payload = utf8.encode('hello worker file');
      final session = await beginUpload(id, payload.length);
      await chunk(session, payload.sublist(0, 5));
      await chunk(session, payload.sublist(5));

      final ref =
          (await h.runtime.send(contract.FileFinishRequest(session: session)))
              .ref!;
      expect(ref.refId, isA<String>());
      expect(ref.hash, isA<String>());
      expect(ref.state, 'pending_upload');
      expect(ref.store, 'widgets');
      expect(ref.recordId, id);

      // list sees the ref
      final refs = (await h.runtime
              .send(contract.FilesListRequest(store: 'widgets', recordId: id)))
          .refs;
      expect(refs, hasLength(1));
      expect(refs.single.refId, ref.refId);

      // open streams the bytes as credit-windowed chunk events, ending with
      // a terminal event (the page never receives a whole buffered file in
      // one reply).
      final opened = await h.runtime.send(contract.FileOpenRequest(
          store: 'widgets', recordId: id, refId: ref.refId));
      await waitUntil(() async {
        final cs = streamChunks(opened.stream);
        return cs.isNotEmpty && cs.last.last;
      });
      final cs = streamChunks(opened.stream);
      expect(
          utf8.decode(cs.expand((c) => c.chunk).toList()), 'hello worker file');
      expect(cs.last.chunk, isEmpty,
          reason: 'the terminal event carries no bytes');
    });

    test('a declared size mismatch fails the finish typed', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'with-file'), id: id);
      final session = await beginUpload(id, 100);
      await chunk(session, utf8.encode('short'));

      await expectLater(
        h.runtime.send(contract.FileFinishRequest(session: session)),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('size mismatch'))),
      );
    });

    test('a chunk for an unknown session fails typed', () async {
      await expectLater(
        h.runtime.send(contract.FileChunkRequest(
            session: 'u9999', chunk: Uint8List.fromList([1, 2, 3]))),
        throwsA(isA<ValidationException>()),
      );
    });

    test('abort releases the session so finish fails', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'with-file'), id: id);
      final session = await beginUpload(id, 4);
      await chunk(session, [1, 2, 3, 4]);
      await h.runtime.send(contract.FileAbortRequest(session: session));

      await expectLater(
        h.runtime.send(contract.FileFinishRequest(session: session)),
        throwsA(isA<ValidationException>()),
      );
    });

    test('remove/gc/storage-cap/storage-status ride the contract', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'with-file'), id: id);
      final session = await beginUpload(id, 4);
      await chunk(session, [1, 2, 3, 4]);
      await h.runtime.send(contract.FileFinishRequest(session: session));

      // remove by index parks the ref as pending_remove (engine semantics:
      // the ref row stays until the removal is settled).
      await h.runtime.send(contract.FileRemoveRequest(
        store: 'widgets',
        recordId: id,
        index: 0,
      ));
      final refs = (await h.runtime
              .send(contract.FilesListRequest(store: 'widgets', recordId: id)))
          .refs;
      expect(refs, hasLength(1));
      expect(refs.single.state, 'pending_remove',
          reason: 'remove transitions the ref to pending_remove');

      // gc with explicit grace windows, and again with the defaults.
      final gc = await h.runtime
          .send(const contract.FileGcRequest(blobGraceMs: 0, tmpGraceMs: 0));
      expect(gc.cleaned, isA<int>());
      final gcDefaults = await h.runtime.send(const contract.FileGcRequest());
      expect(gcDefaults.cleaned, isA<int>());

      // storage cap.
      final cap = await h.runtime
          .send(const contract.EnforceStorageCapRequest(maxBytes: 1024));
      expect(cap.evicted, isA<int>());

      // storage status reports the blob store's durability (honest volatile
      // reporting for the harness's MemoryBlobStore).
      final status =
          await h.runtime.send(const contract.StorageStatusRequest());
      expect(status.durable, isFalse);
    });

    test('a credit for an unknown stream fails typed', () async {
      await expectLater(
        h.runtime
            .send(const contract.FileCreditRequest(stream: 'f9999', bytes: 1)),
        throwsA(isA<StateError>()),
      );
    });
  });

  group('WorkerEngine — conflicts over the contract', () {
    late WorkerHarness h;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(() async {
        await h.close();
      });
    });

    /// Creates a domain record plus a directly-inserted open conflict row,
    /// returning the record id.
    Future<String> seedConflict({
      Map<String, Object?> local = const {'name': 'local'},
      Map<String, Object?> remote = const {'name': 'remote'},
    }) async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'base'), id: id);
      h.rawDb.execute(
        'INSERT INTO lp_conflicts '
        '(store, record_id, base_json, local_json, remote_json, '
        'dirty_local, dirty_remote, detected_at) '
        'VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [
          'widgets',
          id,
          jsonEncode({'name': 'base'}),
          jsonEncode(local),
          jsonEncode(remote),
          jsonEncode(['name']),
          jsonEncode(['name']),
          1000,
        ],
      );
      return id;
    }

    test('conflicts list/get surface the open row as a typed snapshot',
        () async {
      final id = await seedConflict();
      final list =
          await h.runtime.send(contract.ConflictsListRequest(store: 'widgets'));
      expect(list.conflicts, hasLength(1));
      expect(list.conflicts.single.recordId, id);
      expect(list.conflicts.single.detectedAt, 1000);

      final got = await h.runtime
          .send(contract.ConflictGetRequest(store: 'widgets', id: id));
      expect(got.conflict, isNotNull);
      expect(got.conflict!.local, {'name': 'local'});
      expect(got.conflict!.remote, {'name': 'remote'});
    });

    test('resolve clears the row and writes the merged doc', () async {
      final id = await seedConflict();
      await h.runtime.send(contract.ResolveConflictRequest(
        store: 'widgets',
        id: id,
        merged: {'name': 'merged'},
      ));
      final list =
          await h.runtime.send(contract.ConflictsListRequest(store: 'widgets'));
      expect(list.conflicts, isEmpty);
      final rec = await h.get('widgets', id);
      expect(rec!['name'], 'merged');
    });

    test('accept_local/accept_remote resolve with their version', () async {
      final a = await seedConflict();
      await h.runtime
          .send(contract.AcceptLocalRequest(store: 'widgets', id: a));
      expect((await h.get('widgets', a))!['name'], 'local');

      final b = await seedConflict();
      await h.runtime
          .send(contract.AcceptRemoteRequest(store: 'widgets', id: b));
      expect((await h.get('widgets', b))!['name'], 'remote');
    });

    test('accept_remote with a remote deletion purges the record', () async {
      final id = await seedConflict(remote: {'__lp_deleted__': true});
      await h.runtime
          .send(contract.AcceptRemoteRequest(store: 'widgets', id: id));
      expect(await h.get('widgets', id), isNull,
          reason: 'accepting a remote deletion mirrors the remote');
    });

    test('conflicts watch emits snapshots and cancel stops them', () async {
      final id = await seedConflict();
      final started = await h.runtime
          .send(const contract.ConflictsWatchRequest(store: 'widgets'));

      // The initial list is emitted as a contract event.
      List<contract.ConflictsSnapshot> snapshots() => [
            for (final e in h.sink.byOp(WireOp.contractEvent))
              if (contract.ContractCodec.decodeEvent(
                      (e['event']! as Map).cast<String, Object?>())
                  case contract.ConflictsSnapshot s
                  when s.subscription == started.subscription)
                s,
          ];
      await waitUntil(() async => snapshots().isNotEmpty);
      expect(snapshots().single.conflicts.single.recordId, id);

      await h.runtime
          .send(contract.AcceptLocalRequest(store: 'widgets', id: id));
      await waitUntil(() async => snapshots().last.conflicts.isEmpty);

      // Cancelling the watch stops further emissions.
      await h.runtime.send(
          contract.WatchCancelRequest(subscription: started.subscription));
      final emitted = snapshots().length;
      final other = await seedConflict();
      await h.runtime
          .send(contract.AcceptLocalRequest(store: 'widgets', id: other));
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(snapshots().length, emitted,
          reason: 'no emissions after watch cancel');
    });
  });
  group('WorkerEngine — maintenance & close', () {
    test('maintenance requests execute against the engine', () async {
      final h = await WorkerHarness.open();
      addTearDown(() => h.close());

      await h.put('widgets', record(name: 'a'), id: generateRecordId());
      await h.put('widgets', record(name: 'b'), id: generateRecordId());

      await h.runtime.send(contract.AnalyzeRequest(store: 'widgets'));
      await h.runtime.send(const contract.WalCheckpointRequest());
      await h.runtime.send(const contract.VacuumRequest());
      final pruned = await h.runtime.send(const contract.PruneOutboxRequest());
      expect(pruned.removed, isA<int>());
      final compacted = await h.runtime
          .send(contract.CompactRequest(store: 'widgets', olderThanMs: 0));
      expect(compacted.removed, isA<int>());
      await h.runtime
          .send(const contract.RunMaintenanceRequest(compactOlderThanMs: 0));
    });

    test('open registers additional stores over the wire (E2/E15)', () async {
      final h = await WorkerHarness.open(stores: []);
      addTearDown(() => h.close());

      final schema = CollectionSchema<Object?>(
        name: 'notes',
        version: 1,
        fields: [Field.text('title', required: true)],
      );
      final result = await h.sendOk(h.req(WireOp.open, args: {
        'stores': [schema.toJson()],
      }));
      expect(result, {'ok': true});

      final noteId = generateRecordId();
      await h.put('notes', {'title': 'hello'}, id: noteId);
      final doc = await h.get('notes', noteId);
      expect(doc, isNotNull);
      expect(doc!['title'], 'hello');
    });

    test('close shuts the engine down; later requests fail typed', () async {
      final h = await WorkerHarness.open();
      await h.put('widgets', record(name: 'a'), id: generateRecordId());

      final closeReply = await h.close();
      expect(closeReply, isA<WorkerSuccess>());

      final reply = await h.send(h.req(WireOp.contractRequest, args: {
        'request': contract.ContractCodec.encodeRequest(
            contract.GetRequest(store: 'widgets', id: generateRecordId())),
      }));
      expect(reply, isA<WorkerSuccess>());
      final outcome =
          ((reply as WorkerSuccess).result! as Map).cast<String, Object?>();
      expect(outcome['error'], isA<Map>(),
          reason: 'the kernel failure rides the contract envelope as a typed '
              'error, never as a silent success');
    });
  });
}
