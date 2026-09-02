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
