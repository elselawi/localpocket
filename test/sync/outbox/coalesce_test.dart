import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Outbox coalescing tests.
void main() {
  const t0 = '2026-01-01 00:00:00.000Z';

  Future<LocalPocket> open({bool keepUnsyncedArchives = false}) => openPocket(
      stores: [widgetsSchema(keepUnsyncedArchives: keepUnsyncedArchives)]);

  group('outbox coalescing', () {
    test('none create', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));

      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op, isNotNull);
      expect(op!.kind, OutboxKind.upsert);
      expect(op.baseUpdated, isNull, reason: 'never existed remotely');
      expect(op.baseHash, isEmpty);
      expect(op.opId, isNotEmpty);

      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.dirty);
      expect(sr.localRev, 1);
    });

    test('none update', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);

      await pocket.collection('widgets').put(record(id: id, name: 'a2'));

      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op!.kind, OutboxKind.upsert);
      expect(op.baseUpdated, t0, reason: 'base captured from remote_updated');
      expect(op.baseHash, isNotEmpty);
      expect(op.dirtyFields, contains('name'));

      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.dirty);
      expect(sr.baseJson, isNotNull);
      expect(sr.baseHash, isNotEmpty);
    });

    test('create update update', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.collection('widgets').put(record(id: id, name: 'b'));
      await pocket.collection('widgets').put(record(id: id, name: 'c'));

      expect(await pocket.outbox.outboxCount(), 1);
      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op!.kind, OutboxKind.upsert);
      expect(op.baseUpdated, isNull, reason: 'create keeps base NULL');
      expect(jsonDecode(op.payloadJson)['name'], 'c', reason: 'latest payload');

      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      expect(sr!.localRev, 3);
    });

    test('create archive vanish', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.collection('widgets').archive(id);

      expect(await pocket.collection('widgets').get(id), isNull);
      expect(await pocket.outbox.readOp(pocket.db, 'widgets', id), isNull);
      expect(await pocket.outbox.readSyncRow(pocket.db, 'widgets', id), isNull);
      expect(await pocket.outbox.outboxCount(), 0,
          reason: 'never existed remotely -> zero network ops');
    });

    test('keep unsynced archives keeps local only', () async {
      final pocket = await open(keepUnsyncedArchives: true);
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.collection('widgets').archive(id);

      final r = await pocket.collection('widgets').get(id);
      expect(r!['archived'], isTrue, reason: 'local copy kept');

      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op, isNotNull);
      expect(op!.kind, OutboxKind.upsert);
      expect(op.baseUpdated, isNull);
      expect(jsonDecode(op.payloadJson)['archived'], isTrue);
    });

    test('update update earliest base unchanged across 100 edits', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);

      await pocket.collection('widgets').put(record(id: id, name: 'e1'));
      final first = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(first!.baseUpdated, t0);
      final firstHash = first.baseHash;

      for (var i = 2; i <= 100; i++) {
        await pocket.collection('widgets').put(record(id: id, name: 'e$i'));
      }
      final last = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(last!.baseUpdated, t0, reason: 'earliest base preserved');
      expect(last.baseHash, firstHash, reason: 'earliest base hash preserved');
      expect(last.opId, first.opId);

      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      // local_rev is a monotonic per-record revision: create(1) + 100 edits.
      expect(sr!.localRev, 101);
    });

    test('update archive kind archive', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);

      await pocket.collection('widgets').put(record(id: id, name: 'a2'));
      expect((await pocket.outbox.readOp(pocket.db, 'widgets', id))!.kind,
          OutboxKind.upsert);

      await pocket.collection('widgets').archive(id);
      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op!.kind, OutboxKind.archive);
      expect(op.baseUpdated, t0, reason: 'base unchanged');
      expect(jsonDecode(op.payloadJson)['archived'], isTrue);
    });

    test('archive restore kind restore', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);

      await pocket.collection('widgets').archive(id);
      expect((await pocket.outbox.readOp(pocket.db, 'widgets', id))!.kind,
          OutboxKind.archive);

      await pocket.collection('widgets').restore(id);
      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op!.kind, OutboxKind.restore);
      expect(jsonDecode(op.payloadJson).containsKey('archived'), isFalse,
          reason: 'restored payload omits archived');
    });

    test('archive update stays archived', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);

      await pocket.collection('widgets').archive(id);
      await pocket.collection('widgets').patch(id, {'qty': 5});

      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op!.kind, OutboxKind.archive, reason: 'stays archive');
      expect(jsonDecode(op.payloadJson)['archived'], isTrue);
      expect(jsonDecode(op.payloadJson)['qty'], 5);
      expect((await pocket.collection('widgets').get(id))!['archived'], isTrue);
    });

    test('error replaced by new edit', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);
      await pocket.outbox.setSyncState('widgets', id, SyncState.error);

      await pocket.collection('widgets').patch(id, {'qty': 1});

      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.dirty, reason: 'edit replaces the error');
      expect(sr.lastError, isNull);
      expect(sr.attemptCount, 0);
      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op, isNotNull);
    });

    test('conflict blocks edits until resolved', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);
      await pocket.outbox.setSyncState('widgets', id, SyncState.conflict);

      await expectLater(pocket.collection('widgets').patch(id, {'qty': 1}),
          throwsA(isA<ConflictBlockedError>()));

      // Nothing changed.
      expect((await pocket.collection('widgets').get(id))!['qty'], isNull);
      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.conflict);
    });

    test('op id stable across coalescing', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      final op1 = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      await pocket.collection('widgets').put(record(id: id, name: 'b'));
      await pocket.collection('widgets').put(record(id: id, name: 'c'));
      final op2 = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op2!.opId, op1!.opId, reason: 'op_id is stable across coalescing');
    });
  });
}
