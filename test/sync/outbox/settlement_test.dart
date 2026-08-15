import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// outbox settlement and ACK races.
///
/// The durable invariant: a newer local edit is never cleared or overwritten
/// by settlement, a public `ack()`, or a dead-letter — regardless of what the
/// server returned or whether the row was purged mid-flight.
void main() {
  const t0 = '2026-01-01 00:00:00.000Z';
  const t1 = '2026-01-02 00:00:00.000Z';

  group('outbox settlement and ack races', () {
    late LocalPocket pocket;

    setUp(() async {
      pocket = await openPocket();
    });

    tearDown(() => pocket.close());

    Future<SyncRowState?> sr(String id) =>
        pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

    Future<OutboxOp?> readOp(String id) =>
        pocket.outbox.readOp(pocket.db, 'widgets', id);

    Future<String> seedClean(String name) async {
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: name));
      await pocket.outbox.ack('widgets', id, serverUpdated: t0);
      return id;
    }

    test('empty settlement batches are a no-op', () async {
      await pocket.outbox.settlePushBatch(const []);
      // A subsequent settlement still behaves normally.
      final id = await seedClean('x');
      await pocket.collection('widgets').patch(id, {'qty': 1});
      final o = await readOp(id);
      await pocket.outbox.settlePush(
        store: 'widgets',
        id: id,
        pushedPayloadHash: sha256Hex(o!.payloadJson),
        serverDataJson: o.payloadJson,
        serverUpdated: t1,
      );
      expect((await sr(id))!.syncState, SyncState.clean);
    });

    test('clean settlement removes op and clears base', () async {
      final id = await seedClean('x');
      await pocket.collection('widgets').patch(id, {'qty': 1});
      final o = await readOp(id);
      expect(o, isNotNull);

      await pocket.outbox.settlePush(
        store: 'widgets',
        id: id,
        pushedPayloadHash: sha256Hex(o!.payloadJson),
        serverDataJson: o.payloadJson,
        serverUpdated: t1,
      );

      final row = await sr(id);
      expect(row!.syncState, SyncState.clean);
      expect(row.baseJson, isNull);
      expect(row.baseHash, isNull);
      expect(row.baseUpdated, isNull);
      expect(row.remoteUpdated, t1);
      expect(row.dirtyFields, isEmpty);
      expect(await readOp(id), isNull, reason: 'op acked away');
      expect((await pocket.collection('widgets').get(id))!['qty'], 1,
          reason: 'domain edit retained');
    });

    test('edit during HTTP keeps the row dirty and advances the base',
        () async {
      final id = await seedClean('x');
      await pocket.collection('widgets').patch(id, {'qty': 1});
      final pushed = await readOp(id);
      final pushedHash = sha256Hex(pushed!.payloadJson);

      // A second local edit lands while the HTTP request is in flight.
      await pocket.collection('widgets').patch(id, {'qty': 2});
      final current = await readOp(id);
      expect(current!.payloadJson, isNot(pushed.payloadJson));

      await pocket.outbox.settlePush(
        store: 'widgets',
        id: id,
        pushedPayloadHash: pushedHash,
        serverDataJson: '{"id":"$id","name":"x","qty":1}',
        serverUpdated: t1,
      );

      final row = await sr(id);
      expect(row!.syncState, SyncState.dirty,
          reason: 'newer local edit survives the push');
      expect(row.remoteUpdated, t1);
      expect(row.baseUpdated, t1, reason: 'base advanced to server state');
      expect(row.baseHash, sha256Hex('{"id":"$id","name":"x","qty":1}'));

      final kept = await readOp(id);
      expect(kept, isNotNull, reason: 'outbox row preserved');
      expect(jsonDecode(kept!.payloadJson)['qty'], 2,
          reason: 'the second edit is the live payload');
      expect(kept.baseHash, row.baseHash);
      expect(kept.baseUpdated, t1);
      expect((await pocket.collection('widgets').get(id))!['qty'], 2);
    });

    test('public ack followed by a new edit never loses the edit', () async {
      final id = await seedClean('x');
      await pocket.collection('widgets').patch(id, {'qty': 1});
      await pocket.outbox.ack('widgets', id, serverUpdated: t1);

      expect((await sr(id))!.syncState, SyncState.clean);
      expect(await readOp(id), isNull);

      // New edit after the ack: re-dirtied with its own op.
      await pocket.collection('widgets').patch(id, {'name': 'after-ack'});
      expect((await sr(id))!.syncState, SyncState.dirty);
      final fresh = await readOp(id);
      expect(fresh, isNotNull);
      expect(jsonDecode(fresh!.payloadJson)['name'], 'after-ack');
      expect(
          (await pocket.collection('widgets').get(id))!['name'], 'after-ack');
    });

    test('a row purged during settlement is cleaned without errors', () async {
      final id = await seedClean('x');
      await pocket.collection('widgets').patch(id, {'qty': 1});
      final pushed = await readOp(id);

      // The record is hard-purged while the HTTP request is in flight: the
      // domain row, outbox op and sync row are all removed.
      await pocket.collection('widgets').purge(id);
      expect(await pocket.collection('widgets').get(id), isNull);
      expect(await readOp(id), isNull);
      expect(await sr(id), isNull);

      // Settlement of the stale op must complete without error and must not
      // resurrect any row.
      await pocket.outbox.settlePush(
        store: 'widgets',
        id: id,
        pushedPayloadHash: sha256Hex(pushed!.payloadJson),
        serverDataJson: pushed.payloadJson,
        serverUpdated: t1,
      );

      expect(await readOp(id), isNull, reason: 'stale op stays gone');
      expect(await sr(id), isNull, reason: 'no sync row resurrected');
      expect(await pocket.collection('widgets').get(id), isNull);
    });

    test('server payload differing from the sent payload becomes the base',
        () async {
      final id = await seedClean('x');
      await pocket.collection('widgets').patch(id, {'qty': 1});
      final pushed = await readOp(id);
      // A second edit keeps the row dirty so settlement lands in the
      // advance-base branch.
      await pocket.collection('widgets').patch(id, {'name': 'edited-again'});

      // Server returns a payload with an extra field the client did not send.
      const serverData = '{"id":"#","name":"x","qty":1,"server_note":"hi"}';
      final serverWithId = serverData.replaceFirst('#', id);

      await pocket.outbox.settlePush(
        store: 'widgets',
        id: id,
        pushedPayloadHash: sha256Hex(pushed!.payloadJson),
        serverDataJson: serverWithId,
        serverUpdated: t1,
      );

      final row = await sr(id);
      expect(row!.baseHash, sha256Hex(serverWithId),
          reason: 'base reflects the server payload, not what we sent');
      expect(row.baseUpdated, t1);
      expect(row.syncState, SyncState.dirty, reason: 'second edit kept');
      final kept = await readOp(id);
      expect(kept!.baseHash, sha256Hex(serverWithId));
    });

    test('advanceBase preserves dirty fields and op identity', () async {
      final id = await seedClean('x');
      await pocket.collection('widgets').patch(id, {'qty': 1});
      final before = await readOp(id);

      await pocket.transaction((tx) => pocket.outbox.advanceBase(
          tx.executor, 'widgets', id,
          baseJson: '{"base":true}',
          baseHash: 'bhash',
          baseUpdated: t1,
          newPayloadJson: '{"id":"$id","name":"x","qty":9}'));

      final row = await sr(id);
      expect(row!.baseHash, 'bhash');
      expect(row.baseUpdated, t1);
      expect(row.baseJson, '{"base":true}');
      expect(row.syncState, SyncState.dirty, reason: 'still dirty');
      expect(row.dirtyFields, ['qty'],
          reason: 'dirty fields preserved by advanceBase');

      final after = await readOp(id);
      expect(after!.opId, before!.opId, reason: 'op identity stable');
      expect(after.baseHash, 'bhash');
      expect(after.baseUpdated, t1);
      expect(after.payloadJson, '{"id":"$id","name":"x","qty":9}',
          reason: 'payload optionally replaced');
      expect(after.dirtyFields, ['qty']);
    });

    test('markDeadLetter preserves payload, base, and op fields', () async {
      final id = await seedClean('x');
      await pocket.collection('widgets').patch(id, {'qty': 1, 'name': 'v2'});
      final before = await readOp(id);

      await pocket.outbox.markDeadLetter(
        store: 'widgets',
        id: id,
        kind: 'validation_push',
        error: 'boom',
        payloadJson: before!.payloadJson,
      );

      // A dead-letter row is recorded with the full payload.
      final dl = await pocket.db.query('lp_dead_letter');
      expect(dl.single['kind'], 'validation_push');
      expect(dl.single['error'], 'boom');
      expect(dl.single['payload_json'], before.payloadJson);
      expect(dl.single['record_id'], id);

      // The sync row moves to error, but base + outbox op survive.
      final row = await sr(id);
      expect(row!.syncState, SyncState.error);
      expect(row.lastError, 'boom');
      expect(row.baseHash, before.baseHash, reason: 'base preserved');
      expect(row.baseUpdated, before.baseUpdated);

      final kept = await readOp(id);
      expect(kept!.opId, before.opId, reason: 'op preserved for recovery');
      expect(kept.payloadJson, before.payloadJson);
      expect(kept.baseHash, before.baseHash);
      expect(kept.dirtyFields, before.dirtyFields);
      expect(kept.kind, before.kind);

      // The local domain row is untouched.
      expect((await pocket.collection('widgets').get(id))!['name'], 'v2');
    });
  });
}
