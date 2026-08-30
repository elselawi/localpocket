import 'dart:async';

import 'package:localpocket/src/api/api.dart';
import 'package:localpocket/src/contract/contract.dart';
import 'package:localpocket/src/core/local_pocket.dart' as kernel
    show KernelDatabase;
import 'package:localpocket/src/runtime/runtime_client.dart';
import 'package:localpocket/src/typed/typed.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../api/tasks_store.dart';

/// Runtime conformance for the public facade: the SAME bodies run against
/// the direct runtime and the loopback runtime (full codec round-trip) must
/// produce equal results and events. The loopback pass proves every payload
/// the facade builds survives the wire.
void main() {
  for (final entry in {
    'direct': LocalRuntimeClient.new,
    'loopback': LoopbackRuntimeClient.new,
  }.entries) {
    group('facade conformance over ${entry.key} runtime', () {
      late LocalPocket db;
      late RuntimeClient runtime;

      Future<LocalPocket> open({String? path}) async {
        RuntimeClient? captured;
        final pocket = await LocalPocket.openWith(
          LocalPocketOptions(
            path: path ?? ':memory:',
            stores: [Tasks.store],
          ),
          (handler) {
            captured = entry.value(handler);
            return captured!;
          },
        );
        runtime = captured!;
        return pocket;
      }

      test('capabilities and health agree with the engine', () async {
        db = await open();
        addTearDown(db.close);
        final caps = await db.capabilities;
        expect(caps.isWeb, isFalse);
        expect(caps.sqliteVersion, isNotEmpty);
        expect(caps.hasStrict, isA<bool>());
      });

      test('CRUD and batch writes round-trip', () async {
        db = await open();
        addTearDown(db.close);
        final tasks = db.store(Tasks.store);

        final a = await tasks.put([Tasks.title.set('a'), Tasks.priority.set(1)]);
        final b = await tasks.put([Tasks.title.set('b'), Tasks.priority.set(2)]);
        await tasks.putAll([
          [Tasks.title.set('c'), Tasks.priority.set(3)],
          [Tasks.title.set('d'), Tasks.priority.set(4)],
        ]);
        await tasks.upsertAll([
          [Writes.id(a.id), Tasks.priority.set(10)],
        ]);
        expect((await tasks.get(a.id))!(Tasks.priority), 10);

        final rows = await tasks.getAll([a.id, a.id, b.id]);
        expect(rows, hasLength(3), reason: 'one row per id occurrence');
        expect(rows[0]!.id, a.id);
        expect(rows[2]!(Tasks.title), 'b');

        await tasks.archive(b.id);
        await tasks.restore(b.id);
        expect((await tasks.get(b.id))!.archived, isFalse);

        await tasks.patchAll({
          a.id: [Tasks.priority.set(11)],
        });
        expect((await tasks.get(a.id))!(Tasks.priority), 11);

        await tasks.purge(a.id);
        expect(await tasks.get(a.id), isNull);
      });

      test('projection yields immutable rows and typed errors', () async {
        db = await open();
        addTearDown(db.close);
        final tasks = db.store(Tasks.store);
        final created =
            await tasks.put([Tasks.title.set('proj'), Tasks.priority.set(9)]);

        final page = await tasks.query(QuerySpec<Tasks>(
          where: [Tasks.store.id.eq(created.id)],
          select: [Tasks.title],
          limit: 5,
        ));
        final row = page.items.single;
        expect(row(Tasks.title), 'proj');
        expect(() => row(Tasks.priority),
            throwsA(isA<FieldNotSelectedError>()));
        expect(() => row.archived, throwsA(isA<FieldNotSelectedError>()));
        expect(row.toJson(), containsPair('title', 'proj'));
      });

      test('forward and backward cursors plus stale rejection', () async {
        db = await open();
        addTearDown(db.close);
        final tasks = db.store(Tasks.store);
        for (var i = 0; i < 4; i++) {
          await tasks
              .put([Tasks.title.set('row $i'), Tasks.priority.set(i)]);
        }

        const orderSpec = QuerySpecData(order: [
          QueryOrderTermData('priority', desc: false),
        ]);
        final page1 = await runtime.send(QueryRequest(
          store: 'tasks',
          spec: QuerySpecData(order: [QueryOrderTermData('priority')], limit: 2),
        ));
        expect(page1.items, hasLength(2));
        expect(page1.hasNext, isTrue);
        expect(page1.nextCursor, isNotNull);
        expect(page1.hasPrev, isFalse);

        final page2 = await runtime.send(QueryRequest(
          store: 'tasks',
          spec: QuerySpecData(
            order: [QueryOrderTermData('priority')],
            limit: 2,
            cursor: page1.nextCursor,
          ),
        ));
        expect(page2.items, hasLength(2));
        expect(page2.hasNext, isFalse);
        expect(page2.hasPrev, isTrue);

        final before = await runtime.send(QueryRequest(
          store: 'tasks',
          spec: QuerySpecData(
            order: [QueryOrderTermData('priority')],
            limit: 2,
            cursor: page2.prevCursor,
            backward: true,
          ),
        ));
        expect(before.items.map((m) => m['id']),
            page1.items.map((m) => m['id']),
            reason: 'backward continuation re-lands on the earlier window');

        // A cursor replayed against a different sort signature is stale.
        await expectLater(
          runtime.send(QueryRequest(
            store: 'tasks',
            spec: QuerySpecData(
              order: [QueryOrderTermData('title')],
              limit: 2,
              cursor: page1.nextCursor,
            ),
          )),
          throwsA(isA<StaleCursorError>()),
        );
        // ignore: unnecessary_statements
        orderSpec;
      });

      test('transactions and savepoints behave identically', () async {
        db = await open();
        addTearDown(db.close);
        final tasks = db.store(Tasks.store);

        final keptId = await db.transaction((tx) async {
          final txTasks = tx.store(Tasks.store);
          final kept = await txTasks.put([Tasks.title.set('kept')]);
          final sp = await tx.savepoint();
          await txTasks.put([Tasks.title.set('doomed')]);
          await tx.rollbackTo(sp);
          final doomed = await txTasks.query(QuerySpec<Tasks>(
              where: [Tasks.title.eq('doomed')], limit: 10));
          expect(doomed.items, isEmpty);
          return kept.id;
        });
        expect((await tasks.get(keptId))!(Tasks.title), 'kept');
      });

      test('ordered watches re-emit on pure reorder', () async {
        db = await open();
        addTearDown(db.close);
        final tasks = db.store(Tasks.store);
        final first = await tasks.put(
            [Tasks.title.set('alpha'), Tasks.priority.set(1)]);
        final second = await tasks
            .put([Tasks.title.set('zeta'), Tasks.priority.set(2)]);

        final snapshots = <List<String>>[];
        final sub = tasks
            .watch(QuerySpec<Tasks>(
              orderBy: [Tasks.title.desc],
              limit: 50,
            ))
            .listen((rows) => snapshots.add([for (final r in rows) r.id]));
        addTearDown(sub.cancel);
        await _waitFor(() => snapshots.isNotEmpty);

        // A pure reorder: patch the title of the second row so the sort order
        // flips while the row set is unchanged ('zeta' → 'aaa' drops it below
        // 'alpha' in the title-desc window).
        await tasks.patch(second.id, [Tasks.title.set('aaa')]);
        await _waitFor(() => snapshots.length > 1 && snapshots.last.length == 2);
        expect(snapshots.last, [first.id, second.id],
            reason: 'the window is re-emitted in the new order');
        expect(snapshots.first, [second.id, first.id],
            reason: 'the original window was zeta before alpha');
      });

      test('committed-change events flow through the facade', () async {
        db = await open();
        addTearDown(db.close);
        final tasks = db.store(Tasks.store);

        final changes = <ChangeNotification>[];
        final sub = db.changes.listen(changes.add);
        addTearDown(sub.cancel);

        final storeChanges = <ChangeNotification>[];
        final storeSub = tasks.changes.listen(storeChanges.add);
        addTearDown(storeSub.cancel);

        final created = await tasks.put([Tasks.title.set('eventful')]);
        await _waitFor(() => changes.isNotEmpty && storeChanges.isNotEmpty);
        expect(changes.single.storeName, 'tasks');
        expect(changes.single.ids, [created.id]);
        expect(storeChanges.single.ids, [created.id]);
      });

      test('typed errors survive the runtime', () async {
        db = await open();
        addTearDown(db.close);
        final tasks = db.store(Tasks.store);

        expect(await tasks.get('nonexistent-record'), isNull);
        await expectLater(
          tasks.patch('missing-id', [Tasks.title.set('y')]),
          throwsA(isA<RecordNotFoundException>()),
        );
        await expectLater(
          tasks.put([Tasks.title.set('v'), Writes.extra('title', 'no')]),
          throwsA(isA<ValidationException>()),
        );
        await expectLater(
          runtime.send(const GetRequest(store: 'nope', id: 'x')),
          throwsA(isA<StateError>()),
        );
        await expectLater(
          db.store(Tasks.store).query(const QuerySpec<Tasks>()),
          throwsA(isA<MissingLimitError>()),
        );
      });

      test('corrupt rows decode into typed errors', () async {
        final t = await tempDbPath();
        addTearDown(t.cleanup);
        db = await open(path: t.path);
        final created =
            await db.store(Tasks.store).put([Tasks.title.set('victim')]);
        await db.close();

        final raw = await kernel.KernelDatabase.open(path: t.path, stores: []);
        await raw.traceExecute(
            'UPDATE "tasks" SET "tags" = ? WHERE "id" = ?',
            ['{"not": "a list"}', created.id]);
        await raw.close();

        final reopened = await open(path: t.path);
        addTearDown(reopened.close);
        final row = await reopened.store(Tasks.store).get(created.id);
        expect(row, isNotNull);
        expect(() => row!(Tasks.tags), throwsA(isA<ValidationException>()));
      });

      test('aggregates, distinct, ids, and explain agree', () async {
        db = await open();
        addTearDown(db.close);
        final tasks = db.store(Tasks.store);
        for (var i = 0; i < 4; i++) {
          await tasks.put(
              [Tasks.title.set('agg $i'), Tasks.priority.set(i)]);
        }

        final where = [Tasks.priority.gte(2)];
        expect(await tasks.count(QuerySpec<Tasks>(where: where, limit: 10)), 2);
        expect(await tasks.sum(Tasks.priority, where: where), 5);
        expect(await tasks.min(Tasks.priority, where: where), 2);
        expect(await tasks.max(Tasks.priority, where: where), 3);
        expect(
            await tasks.avg(Tasks.priority, where: where), closeTo(2.5, 1e-9));
        expect(
            await tasks.countDistinct(Tasks.priority, where: where), 2);
        expect(await tasks.distinct(Tasks.priority, limit: 100).then((v) => v.toSet()),
            hasLength(4));
        expect(await tasks.ids(QuerySpec<Tasks>(limit: 10)), hasLength(4));
        expect(
            await tasks.explain(
                QuerySpec<Tasks>(orderBy: [Tasks.priority.asc], limit: 3)),
            isNotEmpty);
      });

      test('search agrees', () async {
        db = await open();
        addTearDown(db.close);
        final tasks = db.store(Tasks.store);
        final hit = await tasks.put([Tasks.title.set('findable needle')]);
        await tasks.put([Tasks.title.set('other row')]);

        final hits =
            await tasks.search(const SearchSpec<Tasks>(term: 'needle', limit: 10));
        expect(hits.map((h) => h.id), contains(hit.id));
        final fetched = await hits.first.fetch();
        expect(fetched!.id, hits.first.id);
      });
    });
  }
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
