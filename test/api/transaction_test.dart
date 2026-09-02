import 'package:localpocket/src/contract/contract.dart' show CommandHandler;
import 'package:localpocket/src/runtime/runtime_client.dart';
import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import 'tasks_store.dart';

LocalPocketOptions _options() =>
    LocalPocketOptions(path: ':memory:', stores: [Tasks.store]);

void main() {
  group('Transaction', () {
    test('session-bound reads see their own uncommitted writes; commit lands',
        () async {
      final db = await LocalPocket.open(_options());
      addTearDown(db.close);
      final tasks = db.store(Tasks.store);

      final insideId = await db.transaction((tx) async {
        final txTasks = tx.store(Tasks.store);
        final created = await txTasks.put([Tasks.title.set('inside tx')]);
        final page = await txTasks.query(
            QuerySpec<Tasks>(where: [Tasks.title.eq('inside tx')], limit: 10));
        expect(page.items.single.id, created.id,
            reason: 'the session sees its own write');
        return created.id;
      });

      expect((await tasks.get(insideId))!(Tasks.title), 'inside tx',
          reason: 'the facade future resolves only after commit');
    });

    test('a throwing body rolls back and rethrows', () async {
      final db = await LocalPocket.open(_options());
      addTearDown(db.close);
      final tasks = db.store(Tasks.store);

      await expectLater(
        db.transaction((tx) async {
          await tx.store(Tasks.store).put([Tasks.title.set('doomed')]);
          throw StateError('caller aborted');
        }),
        throwsA(isA<StateError>()),
      );

      final page = await tasks.query(
          QuerySpec<Tasks>(where: [Tasks.title.eq('doomed')], limit: 10));
      expect(page.items, isEmpty, reason: 'rolled-back work never commits');
    });

    test('savepoints roll back without leaking rows or events', () async {
      final db = await LocalPocket.open(_options());
      addTearDown(db.close);
      final tasks = db.store(Tasks.store);

      final events = <ChangeNotification>[];
      final sub = db.changes.listen(events.add);
      addTearDown(sub.cancel);

      final keptId = await db.transaction((tx) async {
        final txTasks = tx.store(Tasks.store);
        final kept = await txTasks.put([Tasks.title.set('kept')]);

        final sp = await tx.savepoint();
        await txTasks.put([Tasks.title.set('doomed')]);
        await tx.rollbackTo(sp);

        final doomed = await txTasks.query(
            QuerySpec<Tasks>(where: [Tasks.title.eq('doomed')], limit: 10));
        expect(doomed.items, isEmpty,
            reason: 'rolled-back savepoint work is invisible in-session');
        await tx.release(await tx.savepoint());
        return kept.id;
      });

      expect((await tasks.get(keptId))!(Tasks.title), 'kept');
      await _waitFor(() => events.isNotEmpty);
      expect(
        events.expand((e) => e.ids),
        contains(keptId),
      );
      final titles = [
        for (final row
            in (await tasks.query(const QuerySpec<Tasks>(limit: 50))).items)
          row(Tasks.title)
      ];
      expect(titles, isNot(contains('doomed')),
          reason: 'no committed trace of the savepoint rollback');
    });

    test('read sessions reject writes with ReadOnlyTxError', () async {
      final db = await LocalPocket.open(_options());
      addTearDown(db.close);
      final tasks = db.store(Tasks.store);
      final created = await tasks.put([Tasks.title.set('read-only target')]);

      final title = await db.read((tx) async =>
          (await tx.store(Tasks.store).get(created.id))!(Tasks.title));
      expect(title, 'read-only target');

      await expectLater(
        db.read((tx) => tx.store(Tasks.store).patch(
              created.id,
              [Tasks.title.set('mutated')],
            )),
        throwsA(isA<ReadOnlyTxError>()),
      );
      expect((await tasks.get(created.id))!(Tasks.title), 'read-only target',
          reason: 'nothing was written');
    });

    test('watches inside transactions are rejected', () async {
      final db = await LocalPocket.open(_options());
      addTearDown(db.close);

      await db.transaction((tx) async {
        expect(
          () => tx.store(Tasks.store).watch(const QuerySpec<Tasks>(limit: 5)),
          throwsA(isA<ValidationException>()),
        );
      });
    });

    test('the same body runs over both runtimes', () async {
      final handlers = <RuntimeClient Function(CommandHandler)>[
        LocalRuntimeClient.new,
        LoopbackRuntimeClient.new,
      ];
      for (final createRuntime in handlers) {
        final db = await LocalPocket.openWith(_options(), createRuntime);
        addTearDown(db.close);
        final tasks = db.store(Tasks.store);

        final id = await db.transaction((tx) async {
          final txTasks = tx.store(Tasks.store);
          final created = await txTasks.put([Tasks.title.set('both')]);
          expect((await txTasks.get(created.id))!(Tasks.title), 'both');
          return created.id;
        });
        expect((await tasks.get(id))!(Tasks.title), 'both');
      }
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
