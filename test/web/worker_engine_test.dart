import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/core/query_plan.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:localpocket/src/web/worker_engine.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
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

/// Converts a [QueryPlan] into the wire payload the worker's
/// `_parseCompiledPlan` expects (mirrors `send_plan.dart`).
Map<String, Object?> planPayload(QueryPlan plan, {int? pageLimit}) => {
      'type': plan.typeName,
      'operation': plan.operation,
      'compilerVersion': plan.compilerVersion,
      'store': plan.store,
      'schemaVersion': plan.schemaVersion,
      'schemaFingerprint': plan.schemaFingerprint,
      'argumentCount': plan.argumentCount,
      'sql': plan.sql,
      'args': plan.args.map(encodeWireValue).toList(),
      'limit': plan.limit,
      'projection': plan.projection,
      'decodeColumns': plan.decodeColumns,
      'shape': plan.shape,
      if (pageLimit != null) 'pageLimit': pageLimit,
    };

void main() {
  group('WorkerEngine — envelope & protocol', () {
    late WorkerHarness h;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(() async {
        await h.close();
      });
    });

    test('health reports a live engine', () async {
      final result =
          (await h.sendOk(h.req(WireOp.health)))! as Map<String, Object?>;
      expect(result['ok'], isTrue);
      expect(result['sqliteVersion'], isA<String>());
      expect(result['journalMode'], isA<String>());
    });

    test('capabilities reports the live engine capability snapshot', () async {
      final result =
          (await h.sendOk(h.req(WireOp.capabilities)))! as Map<String, Object?>;
      expect(result['worker'], isTrue);
      expect(result['durable'], isTrue);
      expect(result['persistent'], isTrue);
      expect(result['journal'], isA<String>());
      expect(result['sqliteVersion'], isA<String>());
      expect(result['hasStrict'], isA<bool>());
      expect(result['walSupported'], isA<bool>());
      expect(result['hasFts5'], isA<bool>());
    });

    test('success replies echo the request id', () async {
      final reply =
          await h.engine.handleRequest(h.sink, h.req(WireOp.health).toJson());
      expect(reply, isA<WorkerSuccess>());
      expect((reply as WorkerSuccess).requestId, 0);
    });

    test('version mismatch fails with protocolMismatch + expected/actual',
        () async {
      final bad = WebRequest(
        version: webProtocolVersion + 99,
        requestId: 0,
        op: WireOp.health,
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
        {'i': 1, 'op': WireOp.health, 'a': <String, Object?>{}}, // no v
        {'v': 'one', 'i': 1, 'op': WireOp.health, 'a': {}}, // v not int
        {'v': webProtocolVersion, 'op': WireOp.health, 'a': {}}, // no i
        {'v': webProtocolVersion, 'i': 1, 'op': WireOp.health}, // no args
      ];
      for (final payload in payloads) {
        final err = await h.sendRaw(payload);
        expect(err, isA<WorkerError>(), reason: 'payload: $payload');
        expect((err as WorkerError).code, WireErrorCode.protocolEnvelope);
      }
    });
  });

  group('WorkerEngine — CRUD over the wire', () {
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

    test('single-op batches: patch, archive, restore, purge', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'widget', qty: 1), id: id);

      Future<void> single(String action, Map<String, Object?> args) async {
        await h.sendOk(h.req(WireOp.mutateBatch, args: {
          'store': 'widgets',
          'mutations': [
            {
              'action': action,
              ...args,
            }
          ],
        }));
      }

      // patch
      await single('patch', {
        'id': id,
        'record': encodeWireValue({'qty': 9})
      });
      expect((await h.get('widgets', id))!['qty'], 9);

      // archive
      await single('archive', {'id': id});
      final archived = (await h.pocket
              .collection('widgets')
              .query()
              .includeArchived()
              .all()
              .fetch())
          .items;
      expect(archived.single['archived'], isTrue);

      // restore
      await single('restore', {'id': id});
      final restored = await h.get('widgets', id);
      expect(restored, isNotNull);

      // purge
      await single('purge', {'id': id});
      expect(await h.get('widgets', id), isNull);
    });

    test('multi-op batches run atomically in one transaction', () async {
      final a = generateRecordId();
      final b = generateRecordId();
      await h.sendOk(h.req(WireOp.mutateBatch, args: {
        'store': 'widgets',
        'mutations': [
          {
            'action': 'put',
            'record': encodeWireValue(record(name: 'a', qty: 1, id: a))
          },
          {
            'action': 'put',
            'record': encodeWireValue(record(name: 'b', qty: 2, id: b))
          },
          {
            'action': 'patch',
            'id': a,
            'record': encodeWireValue({'qty': 11})
          },
        ],
      }));

      expect((await h.get('widgets', a))!['qty'], 11);
      expect((await h.get('widgets', b))!['qty'], 2);
    });

    test('unknown mutation action → ValidationException (E15)', () async {
      final err = await h.sendError(h.req(WireOp.mutateBatch, args: {
        'store': 'widgets',
        'mutations': [
          {'action': 'explode', 'id': generateRecordId()}
        ],
      }));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.details?['type'], 'ValidationException');
      expect(err.message, contains('Unknown mutation action'));
    });

    test('get of a missing record succeeds with a null result', () async {
      final reply = await h.send(h.req(WireOp.get, args: {
        'store': 'widgets',
        'id': generateRecordId(),
      }));
      expect(reply, isA<WorkerSuccess>());
      expect((reply as WorkerSuccess).result, isNull);
    });

    test('missing required field → ValidationException', () async {
      final err = await h.sendError(h.req(WireOp.mutateBatch, args: {
        'store': 'widgets',
        'mutations': [
          {
            'action': 'put',
            'record': encodeWireValue({'id': generateRecordId()})
          }
        ],
      }));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.details?['type'], 'ValidationException');
    });

    test('missing store arg → ProtocolEnvelopeException (WireArgs)', () async {
      final err = await h.sendError(h.req(WireOp.mutateBatch, args: {
        'mutations': [
          {
            'action': 'put',
            'record': encodeWireValue({'id': generateRecordId(), 'name': 'x'})
          }
        ],
      }));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.details?['type'], 'ProtocolEnvelopeException');
    });

    test('non-string mutation action → typed ProtocolEnvelopeException',
        () async {
      final err = await h.sendError(h.req(WireOp.mutateBatch, args: {
        'store': 'widgets',
        'mutations': [
          {
            'action': 42,
            'record': encodeWireValue({'id': generateRecordId(), 'name': 'x'})
          }
        ],
      }));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.details?['type'], 'ProtocolEnvelopeException');
      expect(err.message, isNot(contains('TypeError')));
      expect(err.message, contains('action'));
    });

    test('non-map mutation element → typed ProtocolEnvelopeException',
        () async {
      final err = await h.sendError(h.req(WireOp.mutateBatch, args: {
        'store': 'widgets',
        'mutations': ['not-a-map'],
      }));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.details?['type'], 'ProtocolEnvelopeException');
      expect(err.message, isNot(contains('TypeError')));
    });

    test('non-map element in a multi-op batch fails inside the transaction',
        () async {
      final err = await h.sendError(h.req(WireOp.mutateBatch, args: {
        'store': 'widgets',
        'mutations': [
          {
            'action': 'put',
            'record': encodeWireValue({'id': generateRecordId(), 'name': 'x'})
          },
          'not-a-map',
        ],
      }));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.details?['type'], 'ProtocolEnvelopeException');
      expect(err.message, isNot(contains('TypeError')));
      // The batch ran atomically: the first put must not have been applied.
      final page = await h.pocket.collection('widgets').query().all().fetch();
      expect(page.items, isEmpty);
    });

    test('mutations broadcast recordEvent to the sink (E4)', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'apple'), id: id);
      // Group commit emits post-commit notifications after the commit
      // boundary; give the broadcast a turn to land.
      await Future<void>.delayed(Duration.zero);

      final events = h.sink.byOp(WireOp.recordEvent);
      expect(events, isNotEmpty);
      final ev = events.last['event'];
      expect(ev, isA<Map>());
      final event = (ev! as Map).map((k, v) => MapEntry(k.toString(), v));
      expect(event['store'], 'widgets');
      expect(event['id'], id);
      expect(event['action'], 'create');
      expect(event['origin'], 'local');
    });

    test(
        'durability: full on a single-op batch commits via the durable '
        'transaction path', () async {
      final id = generateRecordId();
      await h.sendOk(h.req(WireOp.mutateBatch, args: {
        'store': 'widgets',
        // An explicit durability request must NOT take the no-transaction
        // fast path: it rides pocket.transaction so synchronous=FULL applies.
        'durability': 'full',
        'mutations': [
          {
            'action': 'put',
            'record': encodeWireValue(record(name: 'durable', qty: 1, id: id))
          },
        ],
      }));
      expect((await h.get('widgets', id))!['name'], 'durable');
    });

    test('unknown durability value → typed ProtocolEnvelopeException',
        () async {
      final err = await h.sendError(h.req(WireOp.mutateBatch, args: {
        'store': 'widgets',
        'durability': 'eventually',
        'mutations': [
          {
            'action': 'put',
            'record': encodeWireValue({'id': generateRecordId(), 'name': 'x'})
          }
        ],
      }));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.details?['type'], 'ProtocolEnvelopeException');
      expect(err.message, contains('durability'));
    });
  });

  group('WorkerEngine — compiled query plan', () {
    late WorkerHarness h;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(() async {
        await h.close();
      });
      await h.put('widgets', record(name: 'apple', qty: 7),
          id: generateRecordId());
      await h.put('widgets', record(name: 'banana', qty: 8),
          id: generateRecordId());
      await h.put('widgets', record(name: 'cherry', qty: 9),
          id: generateRecordId());
    });

    test('query op executes and decodes rows', () async {
      final plan = h.pocket
          .collection('widgets')
          .query()
          .where('name', eq: 'banana')
          .limit(50)
          .compilePlan();
      final result = (await h
              .sendOk(h.req(WireOp.compiledQuery, args: planPayload(plan))))!
          as Map<String, Object?>;
      final items = (result['items']! as List).cast<Map>();
      expect(items, hasLength(1));
      expect(items.first['name'], 'banana');
    });

    test('count / ids / sum aggregate ops', () async {
      Future<Map<String, Object?>> run(QueryPlan plan) async => (await h
              .sendOk(h.req(WireOp.compiledQuery, args: planPayload(plan))))!
          as Map<String, Object?>;

      final count = await run(
          h.pocket.collection('widgets').query().limit(50).compileCountPlan());
      expect(count['value'], 3);

      final ids = await run(
          h.pocket.collection('widgets').query().limit(50).compileIdsPlan());
      expect((ids['ids']! as List), hasLength(3));

      final sum = await run(h.pocket
          .collection('widgets')
          .query()
          .limit(50)
          .compileAggregatePlan('SUM', 'qty'));
      expect(sum['value'], 24);
    });

    test('explain op wraps the validated SELECT', () async {
      final plan =
          h.pocket.collection('widgets').query().limit(50).compileExplainPlan();
      final result = (await h
              .sendOk(h.req(WireOp.compiledQuery, args: planPayload(plan))))!
          as Map<String, Object?>;
      expect(result['plan'], isA<String>());
      expect(result['plan'], isNotEmpty);
    });

    test('pageLimit produces hasMore + lastRow cursor', () async {
      final plan = h.pocket
          .collection('widgets')
          .query()
          .orderBy('name')
          .limit(50)
          .compilePlan();
      final result = (await h.sendOk(h.req(WireOp.compiledQuery,
          args: planPayload(plan, pageLimit: 2))))! as Map<String, Object?>;
      expect(result['hasMore'], isTrue);
      expect((result['items']! as List), hasLength(2));
      expect(result['lastRow'], isA<Map>());
    });

    test('plan validation matrix → ProtocolEnvelopeException (E15)', () async {
      final plan = h.pocket
          .collection('widgets')
          .query()
          .where('name', eq: 'apple')
          .limit(50)
          .compilePlan();
      final good = planPayload(plan);

      final tampered = <String, Object?>{
        // unknown operation vocabulary
        ...good,
        'operation': 'delete',
      };
      final wrongCompiler = {
        ...good,
        'compilerVersion': queryCompilerVersion + 1
      };
      final staleSchemaVersion = {...good, 'schemaVersion': 999};
      final staleFingerprint = {...good, 'schemaFingerprint': 'deadbeef'};
      final argCountMismatch = {...good, 'argumentCount': 99};
      final nonSelect = {...good, 'sql': 'DELETE FROM "widgets"'};
      final wrongType = {...good, 'type': 'not_a_plan'};

      for (final entry in {
        'unknown operation': tampered,
        'wrong compiler version': wrongCompiler,
        'stale schema version': staleSchemaVersion,
        'stale schema fingerprint': staleFingerprint,
        'argument count mismatch': argCountMismatch,
        'non-SELECT sql': nonSelect,
        'wrong plan type': wrongType,
      }.entries) {
        final err =
            await h.sendError(h.req(WireOp.compiledQuery, args: entry.value));
        expect(err.code, WireErrorCode.localpocket, reason: entry.key);
        expect(err.details?['type'], 'ProtocolEnvelopeException',
            reason: entry.key);
        expect(err.message, anyOf(contains('Malformed'), contains('Stale')),
            reason: entry.key);
      }
    });

    test('stale plan against a mutated schema is rejected', () async {
      // Open with a schema, then compile a plan from a DIFFERENT engine whose
      // schema has an extra field → fingerprint mismatch on the wire.
      final other = await WorkerHarness.open(stores: [
        widgetsSchema(extraFields: [Field.text('nickname')])
      ]);
      addTearDown(() => other.close());
      final plan = other.pocket
          .collection('widgets')
          .query()
          .where('name', eq: 'apple')
          .limit(50)
          .compilePlan();

      final err = await h
          .sendError(h.req(WireOp.compiledQuery, args: planPayload(plan)));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.details?['type'], 'ProtocolEnvelopeException');
      expect(err.message, contains('Stale'));
    });
  });

  group('WorkerEngine — interactive transactions', () {
    late WorkerHarness h;
    late int sessionId;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(() async {
        await h.close();
      });
      final result =
          (await h.sendOk(h.req(WireOp.txBegin)))! as Map<String, Object?>;
      sessionId = (result['sessionId']! as int);
    });

    test('tx session CRUD + commit persists', () async {
      final id = generateRecordId();
      await h.sendOk(h.req(WireOp.txMutateBatch, args: {
        'sessionId': sessionId,
        'store': 'widgets',
        'mutations': [
          {
            'action': 'put',
            'record': encodeWireValue(record(name: 'tx', qty: 42, id: id))
          },
        ],
      }));

      final doc = await h.sendOk(h.req(WireOp.txGet, args: {
        'sessionId': sessionId,
        'store': 'widgets',
        'id': id,
      }));
      expect(decodeWireValue(doc), isA<Map>());

      await h.sendOk(h.req(WireOp.txCommit, args: {'sessionId': sessionId}));

      final committed = await h.get('widgets', id);
      expect(committed, isNotNull);
      expect(committed!['qty'], 42);
    });

    test('tx rollback discards the session work', () async {
      final id = generateRecordId();
      await h.sendOk(h.req(WireOp.txMutateBatch, args: {
        'sessionId': sessionId,
        'store': 'widgets',
        'mutations': [
          {
            'action': 'put',
            'record': encodeWireValue(record(name: 'gone', qty: 1, id: id))
          },
        ],
      }));

      await h.sendOk(h.req(WireOp.txRollback, args: {'sessionId': sessionId}));

      expect(await h.get('widgets', id), isNull);
    });

    test('savepoint → rollback_to → release bookkeeping (E15)', () async {
      final id = generateRecordId();
      await h.sendOk(h.req(WireOp.txMutateBatch, args: {
        'sessionId': sessionId,
        'store': 'widgets',
        'mutations': [
          {
            'action': 'put',
            'record': encodeWireValue(record(name: 'outer', qty: 1, id: id))
          },
        ],
      }));

      final sp = (await h.sendOk(
              h.req(WireOp.txSavepoint, args: {'sessionId': sessionId})))!
          as Map<String, Object?>;
      final spName = sp['savepoint']! as String;

      await h.sendOk(h.req(WireOp.txMutateBatch, args: {
        'sessionId': sessionId,
        'store': 'widgets',
        'mutations': [
          {
            'action': 'patch',
            'id': id,
            'record': encodeWireValue({'qty': 99})
          },
        ],
      }));

      // Rollback to the savepoint discards the patch.
      await h.sendOk(h.req(WireOp.txRollbackTo, args: {
        'sessionId': sessionId,
        'savepoint': spName,
      }));

      final inTx = await h.sendOk(h.req(WireOp.txGet, args: {
        'sessionId': sessionId,
        'store': 'widgets',
        'id': id,
      }));
      expect((decodeWireValue(inTx) as Map)['qty'], 1);

      // Bookkeeping: the savepoint was removed, so a new savepoint reuses the
      // name (no unbounded growth / collision).
      final sp2 = (await h.sendOk(
              h.req(WireOp.txSavepoint, args: {'sessionId': sessionId})))!
          as Map<String, Object?>;
      expect(sp2['savepoint'], spName);

      await h.sendOk(h.req(WireOp.txRelease, args: {
        'sessionId': sessionId,
        'savepoint': spName,
      }));
      await h.sendOk(h.req(WireOp.txCommit, args: {'sessionId': sessionId}));
    });

    test('_requireSession rejects unknown / absent sessions (E15)', () async {
      final err = await h.sendError(h.req(WireOp.txGet, args: {
        'sessionId': 9999,
        'store': 'widgets',
        'id': generateRecordId(),
      }));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.details?['type'], 'StateError');

      final err2 = await h.sendError(h.req(WireOp.txGet, args: {
        'store': 'widgets',
        'id': generateRecordId(),
      }));
      expect(err2.details?['type'], 'StateError');
    });

    test('non-map mutation element in tx_mutate_batch → typed error', () async {
      final err = await h.sendError(h.req(WireOp.txMutateBatch, args: {
        'sessionId': sessionId,
        'store': 'widgets',
        'mutations': [
          {
            'action': 'put',
            'record': encodeWireValue({'id': generateRecordId(), 'name': 'x'})
          },
          'not-a-map',
        ],
      }));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.details?['type'], 'ProtocolEnvelopeException');
      expect(err.message, isNot(contains('TypeError')));
    });

    test('a second txBegin while one is active → StateError', () async {
      final err = await h.sendError(h.req(WireOp.txBegin));
      expect(err.details?['type'], 'StateError');
      expect(err.message, contains('already active'));
    });

    test('session ops after commit → StateError', () async {
      await h.sendOk(h.req(WireOp.txCommit, args: {'sessionId': sessionId}));
      final err = await h.sendError(h.req(WireOp.txGet, args: {
        'sessionId': sessionId,
        'store': 'widgets',
        'id': generateRecordId(),
      }));
      expect(err.details?['type'], 'StateError');
    });
  });

  group('WorkerEngine — interactive transaction settle failures', () {
    // The wire contract (E: tx_commit/tx_rollback must not acknowledge
    // before the real SQL COMMIT/ROLLBACK runs): a failed settle surfaces as
    // a WorkerError — never a false success — the session is released, and
    // the rolled-back work is absent from a fresh read.
    test(
        'a failed COMMIT surfaces a WorkerError, releases the session, and '
        'the record is not committed', () async {
      final hooks = TestHooks();
      final h = await WorkerHarness.open(testHooks: hooks);
      addTearDown(h.close);

      final begin =
          (await h.sendOk(h.req(WireOp.txBegin)))! as Map<String, Object?>;
      final sessionId = begin['sessionId']! as int;

      final id = generateRecordId();
      await h.sendOk(h.req(WireOp.txMutateBatch, args: {
        'sessionId': sessionId,
        'store': 'widgets',
        'mutations': [
          {
            'action': 'put',
            'record': encodeWireValue(record(name: 'doomed', qty: 7, id: id))
          },
        ],
      }));

      // Arm the commit-fault hook: the COMMIT now fails and rolls back.
      final commitFault = StateError('simulated COMMIT failure (disk full)');
      hooks.commitCrashPoint = () => throw commitFault;

      final err = await h
          .sendError(h.req(WireOp.txCommit, args: {'sessionId': sessionId}));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.message, contains('simulated COMMIT failure'));

      // Disarm the fault hook so the follow-up session settles cleanly.
      hooks.commitCrashPoint = null;

      // The session was released: a fresh tx_begin (and rollback) works.
      final begin2 =
          (await h.sendOk(h.req(WireOp.txBegin)))! as Map<String, Object?>;
      await h.sendOk(
          h.req(WireOp.txRollback, args: {'sessionId': begin2['sessionId']}));

      // The failed COMMIT rolled back the session's write.
      expect(await h.get('widgets', id), isNull);
    });

    test(
        'a failed ROLLBACK surfaces a WorkerError, releases the session, '
        'and the record is absent', () async {
      final hooks = TestHooks();
      final h = await WorkerHarness.open(testHooks: hooks);
      addTearDown(h.close);

      final begin =
          (await h.sendOk(h.req(WireOp.txBegin)))! as Map<String, Object?>;
      final sessionId = begin['sessionId']! as int;

      final id = generateRecordId();
      await h.sendOk(h.req(WireOp.txMutateBatch, args: {
        'sessionId': sessionId,
        'store': 'widgets',
        'mutations': [
          {
            'action': 'put',
            'record': encodeWireValue(record(name: 'doomed', qty: 8, id: id))
          },
        ],
      }));

      // Arm the rollback-fault hook: the ROLLBACK is reported as failed.
      final rollbackFault = StateError('simulated ROLLBACK failure (I/O)');
      hooks.rollbackCrashPoint = () => throw rollbackFault;

      final err = await h
          .sendError(h.req(WireOp.txRollback, args: {'sessionId': sessionId}));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.message, contains('simulated ROLLBACK failure'));

      // Disarm the fault hook so the follow-up session rolls back cleanly.
      hooks.rollbackCrashPoint = null;

      // The session was released and the rollback ran: the write is gone.
      final begin2 =
          (await h.sendOk(h.req(WireOp.txBegin)))! as Map<String, Object?>;
      await h.sendOk(
          h.req(WireOp.txRollback, args: {'sessionId': begin2['sessionId']}));
      expect(await h.get('widgets', id), isNull);
    });

    test(
        'an unarmed session still commits and rolls back (no hook = no '
        'fault)', () async {
      final hooks = TestHooks();
      final h = await WorkerHarness.open(testHooks: hooks);
      addTearDown(h.close);

      final id = generateRecordId();
      final begin =
          (await h.sendOk(h.req(WireOp.txBegin)))! as Map<String, Object?>;
      final sessionId = begin['sessionId']! as int;
      await h.sendOk(h.req(WireOp.txMutateBatch, args: {
        'sessionId': sessionId,
        'store': 'widgets',
        'mutations': [
          {
            'action': 'put',
            'record': encodeWireValue(record(name: 'kept', qty: 1, id: id))
          },
        ],
      }));
      await h.sendOk(h.req(WireOp.txCommit, args: {'sessionId': sessionId}));
      expect((await h.get('widgets', id))?['qty'], 1);
    });

    test(
        'close mid-transaction settles the session without surfacing an '
        'unhandled error', () async {
      final h = await WorkerHarness.open();
      await h.sendOk(h.req(WireOp.txBegin));

      // Closing while the tx is held open fails the body with
      // DatabaseWorkerClosedException, the transaction rolls back, and the
      // session's `done` outcome is consumed by the guard listener — no
      // unhandled-async-error failure.
      final reply = await h.close();
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

    test('watch_query: initial snapshot + emissions + digest dedupe (E17)',
        () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'apple', qty: 1), id: id);

      final plan = h.pocket
          .collection('widgets')
          .query()
          .where('name', eq: 'apple')
          .limit(50)
          .compilePlan();
      const watchId = 7;
      final result = (await h.sendOk(h.req(WireOp.watchQuery, args: {
        ...planPayload(plan),
        'watchId': watchId,
      })))! as Map<String, Object?>;
      expect(result['watchId'], watchId);
      final initial = (result['items']! as List).cast<Map>();
      expect(initial, hasLength(1));
      expect(initial.first['name'], 'apple');

      // A mutation matching the query emits a workerEvent.
      await h.put('widgets', record(name: 'apple', qty: 2, id: id));
      await waitUntil(() async => h.sink.byOp(WireOp.workerEvent).isNotEmpty);
      final events = h.sink.byOp(WireOp.workerEvent);
      expect(events.last['watchId'], watchId);
      expect(events.last['op'], WireOp.workerEvent);
      expect(events.last['value'], isA<List>());

      // A mutation NOT affecting the snapshot is digest-deduped (no emission).
      final emitted = h.sink.byOp(WireOp.workerEvent).length;
      await h.put('widgets', record(name: 'banana', qty: 100),
          id: generateRecordId());
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(h.sink.byOp(WireOp.workerEvent).length, emitted,
          reason: 'Unrelated row must not re-emit an unchanged snapshot');
    });

    test('watch_query honors projections', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'apple', qty: 1, price: 1.5), id: id);

      final plan = h.pocket
          .collection('widgets')
          .query()
          .select(['name'])
          .limit(50)
          .compilePlan();
      const watchId = 8;
      final result = (await h.sendOk(h.req(WireOp.watchQuery, args: {
        ...planPayload(plan),
        'watchId': watchId,
      })))! as Map<String, Object?>;
      final initial = (result['items']! as List).cast<Map>();
      expect(initial.single.keys, ['name']);
    });

    test('watch_cancel stops further emissions', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'apple', qty: 1), id: id);
      final plan = h.pocket
          .collection('widgets')
          .query()
          .where('name', eq: 'apple')
          .limit(50)
          .compilePlan();
      const watchId = 9;
      await h.sendOk(h.req(WireOp.watchQuery, args: {
        ...planPayload(plan),
        'watchId': watchId,
      }));
      await h.sendOk(h.req(WireOp.watchCancel, args: {'watchId': watchId}));

      await h.put('widgets', record(name: 'apple', qty: 5, id: id));
      await Future<void>.delayed(const Duration(milliseconds: 120));
      expect(h.sink.byOp(WireOp.workerEvent), isEmpty,
          reason: 'No emissions after watch_cancel');
    });

    test('watch_one: initial item + update emission', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'one', qty: 1), id: id);

      const watchId = 10;
      final result = (await h.sendOk(h.req(WireOp.watchOne, args: {
        'watchId': watchId,
        'store': 'widgets',
        'id': id,
      })))! as Map<String, Object?>;
      expect((decodeWireValue(result['item']) as Map)['name'], 'one');

      await h.put('widgets', record(name: 'one-updated', qty: 2), id: id);
      // The watcher emits its initial snapshot on registration, then the
      // update — wait for the second (update) emission.
      await waitUntil(() async => h.sink.byOp(WireOp.workerEvent).length >= 2);
      final ev = h.sink.byOp(WireOp.workerEvent).last;
      expect(ev['watchId'], watchId);
      final item = decodeWireValue(ev['value']) as Map?;
      expect(item?['name'], 'one-updated');
    });

    test('watch_query rejects a stale plan', () async {
      final plan = h.pocket
          .collection('widgets')
          .query()
          .where('name', eq: 'apple')
          .limit(50)
          .compilePlan();
      final err = await h.sendError(h.req(WireOp.watchQuery, args: {
        ...planPayload(plan),
        'schemaFingerprint': 'stale',
        'watchId': 11,
      }));
      expect(err.details?['type'], 'ProtocolEnvelopeException');
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

    test('sync_start without baseUrl → ValidationException (E15)', () async {
      final err = await h.sendError(h.req(WireOp.syncStart, args: {}));
      expect(err.details?['type'], 'ValidationException');
      expect(err.message, contains('baseUrl'));

      final err2 =
          await h.sendError(h.req(WireOp.syncStart, args: {'baseUrl': ''}));
      expect(err2.details?['type'], 'ValidationException');
    });

    test('sync ops before start → StateError (E15)', () async {
      for (final op in [
        WireOp.syncNow,
        WireOp.syncPause,
        WireOp.syncResume,
        WireOp.syncUpdateAuth,
      ]) {
        final err = await h.sendError(h.req(op, args: {'token': 'x'}));
        expect(err.details?['type'], 'StateError', reason: op);
        expect(err.message, contains('Sync is not started'));
      }

      final connErr = await h
          .sendError(h.req(WireOp.syncSetConnectivity, args: {'online': true}));
      expect(connErr.details?['type'], 'StateError');
    });

    test('sync_status before start reports closed', () async {
      final result =
          (await h.sendOk(h.req(WireOp.syncStatus)))! as Map<String, Object?>;
      expect(result['state'], 'closed');
    });
  });

  group('WorkerEngine — chunked file upload', () {
    late WorkerHarness h;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(() async {
        await h.close();
      });
    });

    Future<int> beginUpload(String recordId, int size) async {
      final result = (await h.sendOk(h.req(WireOp.fileUploadBegin, args: {
        'store': 'widgets',
        'recordId': recordId,
        'size': size,
        // The harness backs the engine with a volatile MemoryBlobStore, so a
        // real client would have to opt in before attaching.
        'allowVolatileBlobs': true,
      })))! as Map<String, Object?>;
      return result['uploadId']! as int;
    }

    Future<void> chunk(int uploadId, List<int> bytes) async {
      await h.sendOk(h.req(WireOp.fileUploadChunk, args: {
        'uploadId': uploadId,
        'chunk': encodeWireValue(Uint8List.fromList(bytes)),
      }));
    }

    test('begin/chunk/finish reassembles and attaches (E15)', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'with-file'), id: id);
      final payload = utf8.encode('hello worker file');
      final uploadId = await beginUpload(id, payload.length);
      await chunk(uploadId, payload.sublist(0, 5));
      await chunk(uploadId, payload.sublist(5));

      final result = (await h.sendOk(
              h.req(WireOp.fileUploadFinish, args: {'uploadId': uploadId})))!
          as Map<String, Object?>;
      expect(result['refId'], isA<String>());
      expect(result['hash'], isA<String>());
      expect(result['state'], 'pending_upload');

      // list sees the ref
      final list = (await h.sendOk(h.req(WireOp.fileList, args: {
        'store': 'widgets',
        'recordId': id,
      })))! as Map<String, Object?>;
      final refs = (list['refs']! as List).cast<Map>();
      expect(refs, hasLength(1));
      expect(refs.single['refId'], result['refId']);

      // open round-trips the bytes
      final opened = (await h.sendOk(h.req(WireOp.fileOpen, args: {
        'store': 'widgets',
        'recordId': id,
        'refId': result['refId'],
      })))! as Map<String, Object?>;
      final bytes = decodeWireValue(opened['bytes']) as List<int>;
      expect(utf8.decode(bytes), 'hello worker file');
      expect(opened['size'], payload.length);
    });

    test('expectedSize mismatch → StateError (E3)', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'with-file'), id: id);
      final uploadId = await beginUpload(id, 100);
      await chunk(uploadId, utf8.encode('short'));

      final err = await h.sendError(
          h.req(WireOp.fileUploadFinish, args: {'uploadId': uploadId}));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.details?['type'], 'ValidationException');
      expect(err.message, contains('size mismatch'));
    });

    test('chunk without begin → error', () async {
      final err = await h.sendError(h.req(WireOp.fileUploadChunk, args: {
        'uploadId': 1,
        'chunk': encodeWireValue(Uint8List.fromList([1, 2, 3])),
      }));
      expect(err.code, WireErrorCode.localpocket);
    });

    test('abort removes the session so finish fails', () async {
      final id = generateRecordId();
      await h.put('widgets', record(name: 'with-file'), id: id);
      final uploadId = await beginUpload(id, 4);
      await chunk(uploadId, [1, 2, 3, 4]);
      await h
          .sendOk(h.req(WireOp.fileUploadAbort, args: {'uploadId': uploadId}));

      final err = await h.sendError(
          h.req(WireOp.fileUploadFinish, args: {'uploadId': uploadId}));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.details?['type'], 'ValidationException');
    });
  });

  group('WorkerEngine — conflicts', () {
    late WorkerHarness h;

    setUp(() async {
      h = await WorkerHarness.open();
      addTearDown(() async {
        await h.close();
      });
    });

    test('conflicts_list on a clean store is empty', () async {
      final result = (await h
              .sendOk(h.req(WireOp.conflictsList, args: {'store': 'widgets'})))!
          as Map<String, Object?>;
      expect(result['conflicts'], isEmpty);
    });

    test('conflicts_get for an unknown record returns null result', () async {
      final reply = await h.send(h.req(WireOp.conflictsGet, args: {
        'store': 'widgets',
        'id': generateRecordId(),
      }));
      expect(reply, isA<WorkerSuccess>());
      expect((reply as WorkerSuccess).result, isNull);
    });

    test('conflicts_resolve for an unknown record → StateError', () async {
      final err = await h.sendError(h.req(WireOp.conflictsResolve, args: {
        'store': 'widgets',
        'id': generateRecordId(),
        'merged': encodeWireValue({'name': 'x'}),
      }));
      expect(err.details?['type'], 'StateError');
    });
  });

  group('WorkerEngine — maintenance & close', () {
    test('maintenance ops execute against the engine', () async {
      final h = await WorkerHarness.open();
      addTearDown(() => h.close());

      await h.put('widgets', record(name: 'a'), id: generateRecordId());
      await h.put('widgets', record(name: 'b'), id: generateRecordId());

      await h.sendOk(h.req(WireOp.analyze, args: {'store': 'widgets'}));
      await h.sendOk(h.req(WireOp.walCheckpoint));
      await h.sendOk(h.req(WireOp.vacuum));
      final pruned =
          (await h.sendOk(h.req(WireOp.pruneOutbox)))! as Map<String, Object?>;
      expect(pruned['pruned'], isA<int>());
      final compacted = (await h.sendOk(h.req(WireOp.compact, args: {
        'store': 'widgets',
        'olderThanMs': 0,
      })))! as Map<String, Object?>;
      expect(compacted['compacted'], isA<int>());
      await h.sendOk(h.req(WireOp.runMaintenance));
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

      final reply = await h.close();
      expect(reply, isA<WorkerSuccess>());

      final err = await h.sendError(h.req(WireOp.get,
          args: {'store': 'widgets', 'id': generateRecordId()}));
      expect(err.code, WireErrorCode.localpocket);
      expect(err.message, isNotEmpty);
    });
  });
}
