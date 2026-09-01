import 'dart:convert';

import 'package:localpocket/src/kernel/cipher.dart';
import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
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

    test('editing an error row resets the full retry bookkeeping', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);
      // A real failure leaves attempt count, a backoff deadline, and an error.
      await pocket.outbox.recordFailure('widgets', id,
          error: 'boom',
          attempts: 3,
          nextRetryAt: 1 << 40,
          state: SyncState.error);

      await pocket.collection('widgets').patch(id, {'qty': 1});

      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.dirty, reason: 'edit replaces the error');
      expect(sr.lastError, isNull, reason: 'last_error cleared by the edit');
      expect(sr.attemptCount, 0, reason: 'attempt_count reset by the edit');
      expect(sr.nextRetryAt, 0, reason: 'next_retry_at reset by the edit');
      expect((await pocket.outbox.readOp(pocket.db, 'widgets', id)), isNotNull);
    });

    test('editing a quarantine row re-dirties it but keeps retry bookkeeping',
        () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);
      // Unlike `error`, the edit path only resets bookkeeping for the error
      // state: a quarantine row keeps its attempt count, deadline and error.
      await pocket.outbox.recordFailure('widgets', id,
          error: 'malformed',
          attempts: 2,
          nextRetryAt: 42,
          state: SyncState.quarantine);

      await pocket.collection('widgets').patch(id, {'qty': 1});

      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.dirty,
          reason: 'edit clears the quarantine state');
      expect(sr.attemptCount, 2,
          reason: 'attempt_count preserved for a quarantine row');
      expect(sr.nextRetryAt, 42,
          reason: 'next_retry_at preserved for a quarantine row');
      expect(sr.lastError, 'malformed',
          reason: 'last_error preserved for a quarantine row');
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

  group('coalescing beyond the base matrix', () {
    test('null and extra payload variants coalesce losslessly', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a', qty: 1));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);

      // Set qty to null and add an extra key, then coalesce another edit.
      await pocket.collection('widgets').patch(id, {'qty': null});
      await pocket.collection('widgets').patch(id, {
        'name': 'b',
        'extra_thing': {
          'nested': [1, 2]
        },
      });

      expect(await pocket.outbox.outboxCount(), 1);
      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      final payload = jsonDecode(op!.payloadJson) as Map<String, Object?>;
      expect(payload['qty'], isNull,
          reason: 'explicit null retained (key may be omitted as null)');
      expect(payload['name'], 'b');
      expect(
          payload['extra_thing'],
          {
            'nested': [1, 2]
          },
          reason: 'extra key coalesced');
      expect(op.dirtyFields, containsAll(['name', 'qty']));
    });

    test('repeated archive/restore cycles keep one live op', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);

      final kinds = <OutboxKind>[];
      for (var i = 0; i < 4; i++) {
        await pocket.collection('widgets').archive(id);
        kinds.add((await pocket.outbox.readOp(pocket.db, 'widgets', id))!.kind);
        await pocket.collection('widgets').restore(id);
        kinds.add((await pocket.outbox.readOp(pocket.db, 'widgets', id))!.kind);
      }

      expect(await pocket.outbox.outboxCount(), 1, reason: 'one live row');
      expect(kinds[0], OutboxKind.archive);
      expect(kinds[1], OutboxKind.restore);
      final finalOp = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(finalOp!.kind, OutboxKind.restore);
      expect(jsonDecode(finalOp.payloadJson).containsKey('archived'), isFalse,
          reason: 'restored payload omits archived');
    });

    test('edits after error and quarantine re-dirty the row', () async {
      for (final state in [SyncState.error, SyncState.quarantine]) {
        final pocket = await open();
        addTearDown(pocket.close);
        final id = generateRecordId();
        await pocket.collection('widgets').put(record(id: id, name: 'a'));
        await pocket.outbox.ack('widgets', id, serverUpdated: t0);
        await pocket.outbox.setSyncState('widgets', id, state);

        await pocket.collection('widgets').patch(id, {'qty': 7});

        final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
        expect(sr!.syncState, SyncState.dirty,
            reason: 'edit after ${state.name} clears the state');
        expect(sr.lastError, isNull);
        expect(sr.attemptCount, 0);
        final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
        expect(jsonDecode(op!.payloadJson)['qty'], 7);
      }
    });

    test('edits after hidden state remain dirty and visible locally', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);

      await pocket.db.execute(
          "UPDATE lp_sync_row SET access_state = 'hidden' WHERE record_id = ?",
          [id]);
      await pocket.collection('widgets').patch(id, {'name': 'visible-again'});

      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      expect(sr!.syncState, SyncState.dirty);
      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(jsonDecode(op!.payloadJson)['name'], 'visible-again');
      expect((await pocket.collection('widgets').get(id))!['name'],
          'visible-again');
    });

    test('duplicate putAll ids coalesce to one live row', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').putAll([
        record(id: id, name: 'v1', qty: 1),
        record(id: id, name: 'v2', qty: 2),
        record(id: id, name: 'v3', qty: 3),
      ]);

      expect(await pocket.outbox.outboxCount(), 1);
      final op = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(jsonDecode(op!.payloadJson)['name'], 'v3',
          reason: 'last write wins within the batch');
      final sr = await pocket.outbox.readSyncRow(pocket.db, 'widgets', id);
      expect(sr!.localRev, 3);
      expect((await pocket.collection('widgets').get(id))!['name'], 'v3');
    });

    test('attached files keep one op with a stable dependency', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      final op1 = await pocket.outbox.readOp(pocket.db, 'widgets', id);

      await pocket.db.insert('lp_file_refs', {
        'ref_id': 'ref1',
        'store': 'widgets',
        'record_id': id,
        'field': 'imgs',
        'hash': 'h1',
        'state': 'pending_upload',
      });
      await pocket.opQueue.enqueue(
        store: 'widgets',
        recordId: id,
        kind: OpQueueKind.fileUpload,
        payload: {'ref_id': 'ref1', 'hash': 'h1', 'name': 'a.png'},
        dependsOnOp: op1!.opId,
      );

      // Coalesce more edits; op identity and dependency survive.
      await pocket.collection('widgets').patch(id, {'qty': 1});
      await pocket.collection('widgets').patch(id, {'qty': 2});

      expect(await pocket.outbox.outboxCount(), 1);
      final op2 = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      expect(op2!.opId, op1.opId, reason: 'record op stable');
      final qrow = await pocket.db
          .query('lp_op_queue', where: 'record_id = ?', whereArgs: [id]);
      expect(qrow.single['depends_on_op'], op1.opId,
          reason: 'file op dependency preserved across coalescing');
      // The file op stays gated on the record op.
      expect(await pocket.opQueue.drain(), isEmpty);
    });

    test('vanished unsynced record leaves no wire ops for files', () async {
      final pocket = await open();
      addTearDown(pocket.close);
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'a'));
      final opA = await pocket.outbox.readOp(pocket.db, 'widgets', id);
      await pocket.db.insert('lp_file_refs', {
        'ref_id': 'refv',
        'store': 'widgets',
        'record_id': id,
        'field': 'imgs',
        'hash': 'hv',
        'state': 'pending_upload',
      });
      await pocket.opQueue.enqueue(
        store: 'widgets',
        recordId: id,
        kind: OpQueueKind.fileUpload,
        payload: {'ref_id': 'refv', 'hash': 'hv', 'name': 'v.png'},
        dependsOnOp: opA!.opId,
      );

      // Vanish: unsynced create + archive deletes everything.
      await pocket.collection('widgets').archive(id);

      expect(await pocket.collection('widgets').get(id), isNull);
      expect(await pocket.outbox.outboxCount(), 0,
          reason: 'no record wire op for a vanished row');
      final qrows = await pocket.db.query('lp_op_queue');
      expect(qrows.where((r) => r['state'] != 'done'), isEmpty,
          reason: 'file ops neutralized');
      final refs = await pocket.db.query('lp_file_refs');
      expect(refs, isEmpty);
      expect(await pocket.opQueue.drain(), isEmpty,
          reason: 'no unintended wire operation');
    });

    test('encrypted fields coalesce plaintext payloads', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final esc = CollectionSchema<Object?>(
        name: 'vault',
        version: 1,
        fields: [
          Field.text('label'),
          Field.text('secret', encrypted: true),
        ],
      );
      final cipher =
          AesGcmFieldCipher(List<int>.generate(32, (i) => (i * 3 + 7) % 256));
      final pocket =
          await openPocket(path: t.path, stores: [esc], fieldCipher: cipher);
      addTearDown(pocket.close);
      final col = pocket.collection('vault');
      final id = generateRecordId();
      await col.put({'id': id, 'label': 'a', 'secret': 's3cr3t'});
      await pocket.outbox.ack('vault', id, serverUpdated: t0);

      await col.patch(id, {'secret': 'updated-secret'});
      await col.patch(id, {'label': 'b'});

      expect(await pocket.outbox.outboxCount(), 1);
      final op = await pocket.outbox.readOp(pocket.db, 'vault', id);
      final payload = jsonDecode(op!.payloadJson) as Map<String, Object?>;
      expect(payload['secret'], 'updated-secret',
          reason: 'outbox carries plaintext for the wire');
      expect(payload['label'], 'b');
      // Domain stores ciphertext at rest.
      final raw = await pocket.db
          .rawQuery('SELECT secret FROM vault WHERE id = ?', [id]);
      expect(raw.single['secret'], isNot('updated-secret'),
          reason: 'at-rest value is ciphertext');
      final doc = await col.get(id);
      expect(doc!['id'], id);
      expect(doc['label'], 'b');
      expect(doc['secret'], 'updated-secret');
    });
  });
}
