import 'package:localpocket/src/kernel/cipher.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import '../../support/invariants_oracle.dart';
import '../support/wire_server.dart';

/// Cipher + lifecycle / restart over the wire (tests.md #31-34) — a single
/// source of scenarios run against BOTH the in-process MockPbServer and the
/// LIVE PocketBase server via [wireTest].
///
/// Unified (mock + live):
/// - two clients sharing ONE `AesGcmFieldCipher` decrypt an encrypted field
///   identically after a round-trip; the WIRE carries the logical (plaintext)
///   value while the domain tables store ciphertext at rest;
/// - a client that writes offline, closes, and reopens the SAME file DB
///   drains its durable outbox to the server (outbox survives the restart);
/// - two full restarts in the same store never re-withdraw or duplicate
///   already-applied work (server count stays exact, cursor persists);
/// - sweep + pull + realtime all active during `syncNow` stress keeps the
///   sync invariants (oracle) intact on every touched row.
void main() {
  /// A schema with one encrypted field for the shared-cipher round-trip.
  CollectionSchema<Object?> encryptedSchema(String store) => CollectionSchema(
        name: store,
        version: 1,
        fields: [
          Field.text('name', required: true),
          Field.text('secret', encrypted: true),
        ],
      );

  /// Hard-closes a client (engine + backend + pocket) so its file DB can be
  /// reopened by a later generation.
  Future<void> closeClient(WireClient c) async {
    await c.engine.stop();
    c.backend.close();
    await c.pocket.close();
  }

  group('E2E cipher & lifecycle over the wire', () {
    wireTest('two clients sharing a cipher decrypt identically over the wire',
        (s) async {
      final cipher = AesGcmFieldCipher(List<int>.filled(32, 7));
      final dbA = await tempDbPath();
      final dbB = await tempDbPath();
      final a = await s.createClient(
          path: dbA.path,
          storeBuilders: [encryptedSchema],
          fieldCipher: cipher);
      final b = await s.createClient(
          path: dbB.path,
          storeBuilders: [encryptedSchema],
          fieldCipher: cipher);
      s.onClose(() => dbA.cleanup());
      s.onClose(() => dbB.cleanup());

      const secret = 'attack-at-dawn';
      final id = generateRecordId();
      await a.pocket
          .collection(s.store)
          .put({'id': id, 'name': 'op', 'secret': secret});
      await a.engine.syncNow();

      // The wire carries the LOGICAL value (encryption is at-rest only).
      expect(
          (await s.readRecord(s.store, id))!['data']! as Map<String, Object?>,
          containsPair('secret', secret),
          reason: 'the wire transports the logical (plaintext) value');
      // ...but A's domain table stores ciphertext, never the plaintext.
      final rawA = await a.pocket.db.query(s.store,
          columns: ['secret'], where: 'id = ?', whereArgs: [id]);
      expect(rawA.single['secret'], isNot(secret),
          reason: 'the secret is encrypted at rest');

      // B pulls and decrypts identically with the shared key.
      await b.engine.syncNow();
      final got = await b.pocket.collection(s.store).get(id);
      expect(got!['secret'], secret,
          reason: 'B decrypts identically with the shared cipher');
      final rawB = await b.pocket.db.query(s.store,
          columns: ['secret'], where: 'id = ?', whereArgs: [id]);
      expect(rawB.single['secret'], isNot(secret),
          reason: "B's copy is also encrypted at rest");
    });

    wireTest('offline writes survive close+reopen on the same file DB',
        (s) async {
      final db = await tempDbPath();

      final h1 = await s.createClient(path: db.path, autoStart: false);
      await h1.pocket.collection(s.store).put(record(name: 'offline-1'));
      await h1.pocket.collection(s.store).put(record(name: 'offline-2'));
      expect(await h1.engine.syncStore.countPending(), 2);
      await closeClient(h1); // engine + backend + pocket (durable commit)

      // Reopen the SAME file DB and drain to the server.
      final h2 = await s.createClient(path: db.path, autoStart: false);
      s.onClose(() => db.cleanup());
      // The durable outbox is on disk BEFORE any cycle runs.
      expect(await h2.engine.syncStore.countPending(), 2,
          reason: 'the durable outbox survived the restart');
      await h2.engine.start();
      // start() runs an initial cycle; drain anything left over.
      var guard = 0;
      while (await h2.engine.syncStore.countPending() > 0) {
        await h2.engine.syncNow();
        guard++;
        if (guard > 20) fail('drain did not converge after the reopen');
      }
      expect(await s.countRecords(s.store), 2,
          reason: 'the offline writes drained to the server after reopen');
      expect(await h2.pocket.collection(s.store).query().all().count(), 2);
    });

    wireTest('two full restarts never re-withdraw or duplicate applied work',
        (s) async {
      final db = await tempDbPath();

      // Generation 1.
      final h1 = await s.createClient(path: db.path, autoStart: false);
      await h1.engine.start();
      await h1.pocket.collection(s.store).put(record(name: 'gen-1'));
      await h1.engine.syncNow();
      expect(await s.countRecords(s.store), 1);
      await closeClient(h1);

      // Generation 2 (same DB).
      final h2 = await s.createClient(path: db.path, autoStart: false);
      await h2.engine.start();
      await h2.pocket.collection(s.store).put(record(name: 'gen-2'));
      await h2.engine.syncNow();
      expect(await s.countRecords(s.store), 2,
          reason: 'the second generation pushed exactly one new record');
      await closeClient(h2);

      // Generation 3 (same DB): a plain cycle never re-pushes the settled
      // work and a server-side record still pulls cleanly.
      final h3 = await s.createClient(path: db.path);
      s.onClose(() => db.cleanup());
      await h3.engine.syncNow();
      expect(await s.countRecords(s.store), 2,
          reason: 'no duplicate push after the second restart');
      expect(await h3.pocket.collection(s.store).query().all().count(), 2,
          reason: 'no local duplication across generations');

      final remoteId = await s.createRecord(s.store, {'name': 'added'});
      await h3.engine.syncNow();
      expect(await h3.pocket.collection(s.store).get(remoteId), isNotNull,
          reason: 'the restarted client still pulls fresh server records');
      expect(await s.countRecords(s.store), 3);
    });

    wireTest(
        'sweep + pull + realtime active during syncNow stress keeps '
        'invariants', (s) async {
      final db = await tempDbPath();
      final a = await s.createClient(
          path: db.path,
          config: wireConfig(
            sweepInterval: Duration.zero,
            bucketsPerSweep: 36,
            pushDebounce: const Duration(milliseconds: 20),
          ));
      s.onClose(() => db.cleanup());
      await a.backend.startRealtime();
      await Future<void>.delayed(const Duration(milliseconds: 300));

      // Seed server-side records and one initial pull.
      final remoteIds = <String>[];
      for (var i = 0; i < 6; i++) {
        remoteIds.add(await s.createRecord(s.store, {'name': 's$i', 'qty': i}));
      }
      await a.engine.syncNow();
      for (final id in remoteIds) {
        await expectSyncInvariants(a.pocket, s.store, id);
      }

      // Stress: interleave local writes, server-side writes pushed over SSE
      // (fast path), and full cycles with the sweep active.
      final localIds = <String>[];
      for (var round = 0; round < 3; round++) {
        final lid = generateRecordId();
        localIds.add(lid);
        await a.pocket
            .collection(s.store)
            .put(record(id: lid, name: 'local-$round', qty: round));

        // Server-side create + (on the mock) an explicit realtime event.
        final sid = await s
            .createRecord(s.store, {'name': 'server-$round', 'qty': 100});
        remoteIds.add(sid);
        if (s is MockWireServer) {
          s.mock.pushEvent(
              record: s.mock.records[sid]!.toJson(), action: 'create');
        }

        final report = await a.engine.syncNow();
        expect(report.hadError, isFalse);

        // The oracle holds on every touched row.
        for (final rid in [...remoteIds, ...localIds]) {
          await expectSyncInvariants(a.pocket, s.store, rid);
        }
      }

      // Everything converged: local writes pushed, server writes applied.
      // (6 seeded + 3 direct server creates + 3 local pushes.)
      expect(await s.countRecords(s.store), 6 + 3 + 3);
      for (var i = 0; i < 3; i++) {
        expect(
            (await a.pocket.collection(s.store).get(remoteIds[i + 6]))!['name'],
            'server-$i',
            reason: 'the server create landed on the touched rows');
      }
      for (final lid in localIds) {
        expect(await a.pocket.collection(s.store).get(lid), isNotNull);
      }
      expect(await a.engine.syncStore.countPending(), 0);
    });
  });
}
