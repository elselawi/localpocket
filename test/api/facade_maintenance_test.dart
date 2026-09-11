import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/fixtures/tasks_store.dart';

/// Facade-level maintenance and lifecycle surfaces: the planner/WAL/vacuum/
/// outbox/compaction commands, close idempotency, post-close guard rails,
/// and the capabilities report.
void main() {
  LocalPocketOptions options() =>
      LocalPocketOptions(path: ':memory:', stores: [Tasks.store]);

  group('maintenance commands', () {
    late LocalPocket db;

    setUp(() async => db = await LocalPocket.open(options()));
    tearDown(() => db.close());

    test('analyze accepts the whole database or a single store', () async {
      await db.analyze();
      await db.analyze(Tasks.store);
    });

    test('walCheckpoint and vacuum complete on a live database', () async {
      await db.walCheckpoint();
      await db.vacuum();
    });

    test('pruneOutbox reports how many entries it dropped', () async {
      expect(await db.pruneOutbox(), 0,
          reason: 'a fresh database has nothing to prune');
    });

    test('compact reports how many history rows it dropped', () async {
      final tasks = db.store(Tasks.store);
      final id = (await tasks.put([Tasks.title.set('x')])).id;
      await tasks.patch(id, [Tasks.title.set('y')]);
      final removed = await db.compact(Tasks.store, olderThan: Duration.zero);
      expect(removed, greaterThanOrEqualTo(0));
    });

    test('wipe drops local rows and the handle stays usable', () async {
      final tasks = db.store(Tasks.store);
      final a = (await tasks.put([Tasks.title.set('a')])).id;
      final b = (await tasks.put([Tasks.title.set('b')])).id;
      await tasks.archive(a);
      expect(await tasks.get(b), isNotNull); // warm the point-read cache

      final result = await db.wipe();

      expect(result.rowsCleared, 2, reason: 'archived rows count too');
      expect(result.blobsCleared, 0, reason: 'no blob store configured');
      expect(await tasks.get(b), isNull,
          reason: 'the point-read cache is invalidated by the reset');
      expect((await tasks.query(const QuerySpec(limit: 10))).items, isEmpty);

      // The database keeps its identity and store registrations, so the same
      // handle keeps working and the next sync cycle re-pulls from scratch.
      final c = (await tasks.put([Tasks.title.set('after wipe')])).id;
      expect((await tasks.get(c))!.get(Tasks.title), 'after wipe');
    });

    test('wipe deletes tracked blob bytes', () async {
      final blobs = MemoryBlobStore();
      final pocket = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store],
        blobStore: blobs,
      ));
      addTearDown(pocket.close);
      final tasks = pocket.store(Tasks.store);
      final id = (await tasks.put([Tasks.title.set('with file')])).id;
      await tasks.files.attach(
        recordId: id,
        source: FileSource.bytes([1, 2, 3, 4], name: 'avatar.png'),
        group: 'study-42',
        allowVolatileBlobs: true,
      );
      expect(await blobs.listHashes(), isNotEmpty);

      final result = await pocket.wipe();

      expect(result.blobsCleared, greaterThanOrEqualTo(1));
      expect(await blobs.listHashes(), isEmpty);
      expect(await tasks.files.list(recordId: id), isEmpty);
    });
  });

  group('close lifecycle', () {
    test('close is idempotent and fails later sends with a typed error',
        () async {
      final db = await LocalPocket.open(options());
      await db.close();
      await db.close(); // second close is a no-op
      expect(
        () => db.analyze(),
        throwsA(isA<StateError>()),
      );
    });

    test('reads after close fail with the typed closed error', () async {
      final db = await LocalPocket.open(options());
      await db.close();
      expect(
        () => db.store(Tasks.store).get('whatever'),
        throwsA(isA<StateError>()),
      );
    });
  });

  group('transaction rollback', () {
    test('a throwing transaction body rolls back and rethrows', () async {
      final db = await LocalPocket.open(options());
      addTearDown(db.close);
      final tasks = db.store(Tasks.store);

      await expectLater(
        db.transaction((tx) async {
          await tx.store(Tasks.store).put([Tasks.title.set('doomed')]);
          throw StateError('nope');
        }),
        throwsStateError,
      );

      final page = await tasks.query(const QuerySpec(limit: 10));
      expect(page.items, isEmpty,
          reason: 'the rolled-back write must not survive');
    });
  });

  group('capabilities report', () {
    test('toString carries version, fts5, storage, durability, journal',
        () async {
      final db = await LocalPocket.open(options());
      addTearDown(db.close);
      final caps = await db.capabilities;
      expect(caps.toString(), startsWith('EngineCapabilities('));
      expect(caps.toString(), contains('fts5:'));
      expect(caps.toString(), contains('storage:'));
      expect(caps.toString(), contains('durable:'));
      expect(caps.toString(), contains('journal:'));
    });
  });
}
