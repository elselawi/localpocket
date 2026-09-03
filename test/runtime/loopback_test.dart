import 'dart:async';

import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/contract/contract.dart';
import 'package:localpocket/src/platform/web/page/protocol.dart'
    show WireOp, ProtocolEnvelopeException, webProtocolVersion;
import 'package:localpocket/src/runtime/remote_runtime_client.dart';
import 'package:localpocket/src/runtime/runtime_client.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

/// Runtime conformance: the SAME representative commands run through the
/// direct runtime and the loopback runtime (full codec round-trip) produce
/// equal canonical results and events.
void main() {
  group('direct vs loopback', () {
    late LocalPocket db;
    late List<RuntimeClient> runtimes;

    setUp(() async {
      db = await openPocket();
      runtimes = [
        LocalRuntimeClient(db.commands),
        LoopbackRuntimeClient(db.commands),
      ];
    });
    tearDown(() => db.close());

    test('health and capabilities agree on both runtimes', () async {
      for (final runtime in runtimes) {
        final health = await runtime.send(const HealthRequest());
        expect(health.ok, isTrue);
        expect(health.sqliteVersion, isNotEmpty);
        final caps = await runtime.send(const CapabilitiesRequest());
        expect(caps.hasFts5, isA<bool>());
        expect(caps.isWeb, isFalse);
      }
    });

    test('mutate, get, and rows produce identical results', () async {
      final id = generateRecordId();
      final record = {'id': id, 'name': 'parity', 'qty': 7};
      for (final runtime in runtimes) {
        final mutation = await runtime.send(
          MutateRequest(store: 'widgets', mutation: MutationPut(record)),
        );
        expect(mutation.ids, [id]);
        final row = await runtime.send(GetRequest(store: 'widgets', id: id));
        expect(row.row?['name'], 'parity');
        final rows = await runtime.send(
          RowsRequest(store: 'widgets', ids: [id, id]),
        );
        expect(rows.rows, hasLength(2));
        expect(rows.rows.first?['qty'], 7);
        // Clean up so the second runtime starts from the same state.
        await runtime.send(
          MutateRequest(store: 'widgets', mutation: MutationPurge(id)),
        );
      }
    });

    test('query pages with forward and backward continuation agree', () async {
      final ids = [generateRecordId(), generateRecordId(), generateRecordId()];
      for (var i = 0; i < ids.length; i++) {
        await db
            .collection('widgets')
            .put(record(name: 'p$i', qty: i, id: ids[i]));
      }
      for (final runtime in runtimes) {
        final page1 = await runtime.send(const QueryRequest(
          store: 'widgets',
          spec: QuerySpecData(order: [QueryOrderTermData('qty')], limit: 2),
        ));
        expect(page1.items, hasLength(2));
        expect(page1.hasNext, isTrue);
        expect(page1.nextCursor, isNotNull);
        expect(page1.hasPrev, isFalse);

        final page2 = await runtime.send(QueryRequest(
          store: 'widgets',
          spec: QuerySpecData(
            order: [QueryOrderTermData('qty')],
            limit: 2,
            cursor: page1.nextCursor,
          ),
        ));
        expect(page2.items, hasLength(1));
        expect(page2.hasNext, isFalse);
        expect(page2.hasPrev, isTrue);

        // The kernel owns page facts: backward continuation from page2.
        final before = await runtime.send(QueryRequest(
          store: 'widgets',
          spec: QuerySpecData(
            order: [QueryOrderTermData('qty')],
            limit: 2,
            cursor: page2.prevCursor,
            backward: true,
          ),
        ));
        expect(before.items, hasLength(2));
        expect(before.items.last['id'], ids[1]);
      }
    });

    test('count, ids, distinct, aggregate, and explain agree', () async {
      final id = generateRecordId();
      await db.collection('widgets').put(record(name: 'agg', qty: 3, id: id));
      const spec = QuerySpecData(where: [
        QueryConditionData('name', QueryConditionOp.eq, value: 'agg')
      ]);
      for (final runtime in runtimes) {
        expect(
            (await runtime.send(const CountRequest(
                    store: 'widgets', spec: QuerySpecData())))
                .value,
            greaterThanOrEqualTo(0));
        expect(
            (await runtime.send(CountRequest(store: 'widgets', spec: spec)))
                .value,
            1);
        expect(
            (await runtime.send(
              IdsRequest(
                  store: 'widgets', spec: const QuerySpecData(limit: 100)),
            ))
                .ids,
            isNotEmpty);
        expect(
            (await runtime.send(
              AggregateRequest(
                  store: 'widgets',
                  fn: AggregateFn.sum,
                  field: 'qty',
                  spec: spec),
            ))
                .value,
            3);
        expect(
            (await runtime.send(
              ExplainRequest(
                  store: 'widgets', spec: const QuerySpecData(limit: 10)),
            ))
                .plan,
            isNotEmpty);
      }
    });

    test('search agrees on both runtimes', () async {
      final schema = widgetsSchema(fts: const FtsSpec(['name']));
      final ftsDb = await openPocket(stores: [schema]);
      addTearDown(ftsDb.close);
      final id = generateRecordId();
      await ftsDb.collection('widgets').put(record(name: 'searchable', id: id));
      final runtimes = [
        LocalRuntimeClient(ftsDb.commands),
        LoopbackRuntimeClient(ftsDb.commands),
      ];
      for (final runtime in runtimes) {
        final result = await runtime.send(
          SearchRequest(
            store: 'widgets',
            spec: SearchSpecData(term: 'searchable', limit: 10),
          ),
        );
        expect(result.hits.map((h) => h.id), contains(id));
      }
    });

    test('typed errors survive the loopback codec', () async {
      for (final runtime in runtimes) {
        await expectLater(
          runtime.send(const GetRequest(store: 'nope', id: 'x')),
          throwsA(isA<StateError>()),
        );
      }
    });

    test('interactive transactions: savepoint rollback leaks nothing',
        () async {
      for (final runtime in runtimes) {
        final begun =
            await runtime.send(const TransactionBeginRequest(readOnly: false));
        final session = begun.session;

        final id = generateRecordId();
        await runtime.send(MutateRequest(
          store: 'widgets',
          mutation: MutationPut({'id': id, 'name': 'kept'}),
          session: session,
        ));

        await runtime.send(
          TransactionSavepointRequest(session: session, name: 'sp1'),
        );
        await runtime.send(MutateRequest(
          store: 'widgets',
          mutation: MutationPut({'id': generateRecordId(), 'name': 'doomed'}),
          session: session,
        ));
        await runtime.send(
          TransactionRollbackToRequest(session: session, name: 'sp1'),
        );

        final doomedRows = await runtime.send(
          QueryRequest(
            store: 'widgets',
            spec: QuerySpecData(
              limit: 10,
              where: [
                const QueryConditionData('name', QueryConditionOp.eq,
                    value: 'doomed'),
              ],
            ),
            session: session,
          ),
        );
        expect(doomedRows.items, isEmpty,
            reason: 'rolled-back savepoint work is invisible in-session');

        await runtime.send(TransactionCommitRequest(session: session));

        final kept = await runtime.send(GetRequest(store: 'widgets', id: id));
        expect(kept.row?['name'], 'kept');
      }
    });

    test('committed changes flow as events on both runtimes', () async {
      for (final runtime in runtimes) {
        final events = <CommittedChange>[];
        final sub = runtime.events.listen((e) {
          if (e is CommittedChange) events.add(e);
        });
        addTearDown(sub.cancel);

        final id = generateRecordId();
        await runtime.send(
          MutateRequest(
              store: 'widgets', mutation: MutationPut({'id': id, 'name': 'e'})),
        );
        // One committed envelope per affected record, carrying the record's
        // payload detail.
        await _waitFor(() => events.any((e) => e.id == id));
        expect(events.last.store, 'widgets');
        expect(events.last.action, ChangeAction.create);
        expect(events.last.newRecord?['name'], 'e');
      }
    });

    test('watch snapshots flow and cancel stops them', () async {
      final runtime = runtimes.last; // loopback: exercises event codec too
      final snapshots = <WatchSnapshot>[];
      final begun = await runtime.send(
        WatchRequest(
          store: 'widgets',
          spec: QuerySpecData(limit: 50),
        ),
      );
      final sub = runtime.events.listen((e) {
        if (e is WatchSnapshot && e.subscription == begun.subscription) {
          snapshots.add(e);
        }
      });
      addTearDown(sub.cancel);

      final id = generateRecordId();
      await db.collection('widgets').put(record(name: 'watched', id: id));
      await _waitFor(
          () => snapshots.any((s) => s.items.any((r) => r['id'] == id)));

      await runtime.send(
        WatchCancelRequest(subscription: begun.subscription),
      );
      await Future<void>.delayed(const Duration(milliseconds: 100));
      final count = snapshots.length;
      await db.collection('widgets').put(record(name: 'watched2'));
      await Future<void>.delayed(const Duration(milliseconds: 150));
      expect(snapshots.length, count, reason: 'no snapshots after cancel');
    });
  });

  /// The remote runtime's protocol-containment behavior, over fake transports:
  /// malformed envelopes are diagnosed correctly and one malformed event can
  /// never break delivery of the well-formed ones behind it.
  group('remote runtime containment', () {
    test('a non-map error field is a protocol error, not a missing result',
        () async {
      final client = RemoteRuntimeClient(
          transport: (envelope) async => {
                'v': webProtocolVersion,
                'i': envelope['i'],
                'r': {
                  'tag': 'health',
                  'error': 'something broke',
                },
              });
      await expectLater(
        client.send(const HealthRequest()),
        throwsA(isA<ProtocolEnvelopeException>().having(
            (e) => e.message, 'message', contains('malformed "error" field'))),
      );
    });

    test('a malformed event is dropped and the stream keeps delivering',
        () async {
      final client = RemoteRuntimeClient(
          transport: (envelope) async => {
                'v': webProtocolVersion,
                'i': envelope['i'],
                'r': {
                  'tag': 'health',
                  'result': {
                    'tag': 'health',
                    'payload': <String, String>{},
                  }
                },
              });
      final received = <Event>[];
      final sub = client.events.listen(received.add);
      addTearDown(sub.cancel);

      client.handleWorkerEvent({
        'v': webProtocolVersion,
        'op': WireOp.contractEvent,
        'event': {
          'tag': 'committedChange',
          'payload': encodeWireValue({'store': 's'}),
        },
      });
      client.handleWorkerEvent({
        'v': webProtocolVersion,
        'op': WireOp.contractEvent,
        'event': {
          'tag': 'committedChange',
          'payload': encodeWireValue({
            'store': 's',
            'id': 'i',
            'origin': 'local',
            'action': 'create',
            'changedFields': ['name'],
          }),
        },
      });
      await _waitFor(() => received.isNotEmpty);
      expect(received, hasLength(1),
          reason: 'the malformed event was dropped; the good one arrived');
      expect(received.first, isA<CommittedChange>());
    });

    test('an event envelope with a wrong protocol version is surfaced loudly',
        () async {
      final client = RemoteRuntimeClient(
          transport: (envelope) async => {
                'v': webProtocolVersion,
                'i': envelope['i'],
                'r': {
                  'tag': 'health',
                  'result': {
                    'tag': 'health',
                    'payload': <String, String>{},
                  }
                },
              });
      final errors = <Object>[];
      final received = <Event>[];
      final sub = client.events
          .listen(received.add, onError: errors.add, cancelOnError: false);
      addTearDown(sub.cancel);

      client.handleWorkerEvent({
        'v': webProtocolVersion + 1,
        'op': WireOp.contractEvent,
        'event': {
          'tag': 'committedChange',
          'payload': encodeWireValue({
            'store': 's',
            'id': 'i',
            'origin': 'local',
            'action': 'create',
            'changedFields': ['name'],
          }),
        },
      });
      await _waitFor(() => errors.isNotEmpty);
      expect(errors.single, isA<ProtocolEnvelopeException>());
      expect(received, isEmpty,
          reason: 'a version-skewed event is never decoded');
    });

    test('events arriving after close are ignored, never injected', () async {
      final client = RemoteRuntimeClient(
          transport: (envelope) async => {
                'v': webProtocolVersion,
                'i': envelope['i'],
                'r': {
                  'tag': 'health',
                  'result': {
                    'tag': 'health',
                    'payload': <String, String>{},
                  }
                },
              });
      final errors = <Object>[];
      final received = <Event>[];
      final sub = client.events
          .listen(received.add, onError: errors.add, cancelOnError: false);
      addTearDown(sub.cancel);

      await client.close();
      // Stray envelopes arriving in the teardown window must be dropped (the
      // controller is closed) rather than throwing a StateError from
      // add/addError on a closed broadcast controller.
      client.handleWorkerEvent({
        'v': webProtocolVersion + 1,
        'op': WireOp.contractEvent,
        'event': {'tag': 'committedChange', 'payload': <String, Object?>{}},
      });
      client.handleWorkerEvent({
        'v': webProtocolVersion,
        'op': WireOp.contractEvent,
        'event': {
          'tag': 'committedChange',
          'payload': encodeWireValue({
            'store': 's',
            'id': 'i',
            'origin': 'local',
            'action': 'create',
            'changedFields': ['name'],
          }),
        },
      });
      await Future<void>.delayed(const Duration(milliseconds: 20));
      expect(received, isEmpty, reason: 'nothing is delivered after close');
      expect(errors, isEmpty, reason: 'no error is injected after close');
    });
  });
}

Future<void> _waitFor(bool Function() predicate,
    {Duration timeout = const Duration(seconds: 5)}) async {
  final deadline = DateTime.now().add(timeout);
  while (DateTime.now().isBefore(deadline)) {
    if (predicate()) return;
    await Future<void>.delayed(const Duration(milliseconds: 10));
  }
  fail('Timed out waiting for condition.');
}
