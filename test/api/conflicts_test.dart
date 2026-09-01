import 'dart:async';
import 'dart:convert';

import 'package:localpocket/src/api/api.dart';
import 'package:localpocket/src/kernel/ids.dart' show generateRecordId;
import 'package:localpocket/src/kernel/local_pocket.dart' as kernel
    show KernelDatabase;
import 'package:localpocket/src/runtime/runtime_client.dart';
import 'package:localpocket/src/api/writes.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'tasks_store.dart';

/// Store-scoped conflicts on the destination facade over the direct runtime.
/// Conflict rows are seeded directly into `lp_conflicts` (the kernel's
/// conflict service owns the real detection); the suite proves the typed
/// surface lists, watches, and resolves them through the contract.
void main() {
  group('StoreConflicts on the store facade', () {
    late kernel.KernelDatabase raw;
    late LocalPocket db;

    setUp(() async {
      raw = await openPocket(stores: [Tasks.store.collectionSchema]);
      db = LocalPocket.internal(LocalRuntimeClient(raw.commands));
      addTearDown(() => db.close());
    });

    Future<String> seedConflict({
      Map<String, Object?> local = const {'title': 'local'},
      Map<String, Object?> remote = const {'title': 'remote'},
    }) async {
      final id = generateRecordId();
      await raw.collection('tasks').put({'id': id, 'title': 'base'});
      await raw.db.execute(
        'INSERT INTO lp_conflicts '
        '(store, record_id, base_json, local_json, remote_json, '
        'dirty_local, dirty_remote, detected_at) '
        'VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [
          'tasks',
          id,
          jsonEncode({'title': 'base'}),
          jsonEncode(local),
          jsonEncode(remote),
          jsonEncode(['title']),
          jsonEncode(['title']),
          1000,
        ],
      );
      return id;
    }

    test('listOpen and get surface typed Conflict snapshots', () async {
      final id = await seedConflict();
      final open = await db.store(Tasks.store).conflicts.listOpen();
      expect(open, hasLength(1));
      final c = open.single;
      expect(c.recordId, id);
      expect(c.store, 'tasks');
      expect(c.local(Tasks.title), 'local');
      expect(c.remote(Tasks.title), 'remote');
      expect(c.base(Tasks.title), 'base');
      expect(c.local.id, id, reason: 'the row view is enriched with the id');
      expect(c.dirtyLocal, contains('title'));
      expect(c.dirtyRemote, contains('title'));
      expect(c.detectedAt, DateTime.fromMillisecondsSinceEpoch(1000));
      expect(c.resolved, isNull);
      expect(c.remoteDeleted, isFalse);

      final got = await db.store(Tasks.store).conflicts.get(id);
      expect(got, isNotNull);
      expect(got!.remote(Tasks.title), 'remote');
      expect(await db.store(Tasks.store).conflicts.get('nope'), isNull);
    });

    test('a remote-deletion conflict is flagged on the snapshot', () async {
      final id = await seedConflict(remote: {'__lp_deleted__': true});
      final open = await db.store(Tasks.store).conflicts.listOpen();
      expect(open.single.remoteDeleted, isTrue);
      expect(open.single.remote.toJson(), {'__lp_deleted__': true, 'id': id});
    });

    test('resolve lowers typed writes into the merged document', () async {
      final id = await seedConflict();
      await db.store(Tasks.store).conflicts.resolve(id, merged: [
        Tasks.title.set('chosen'),
        Tasks.done.set(true),
      ]);

      final open = await db.store(Tasks.store).conflicts.listOpen();
      expect(open, isEmpty, reason: 'resolution clears the conflict row');
      final rec = await raw.collection('tasks').get(id);
      expect(rec!['title'], 'chosen');
      expect(rec['done'], true);
      // An unmentioned field keeps the local value (here: absent stays
      // absent), not a silent reset to null semantics drift.
      expect(rec['priority'], isNull);
    });

    test('resolve on an unknown conflict fails typed', () async {
      await expectLater(
        db.store(Tasks.store).conflicts.resolve('nope', merged: const []),
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', contains('No conflict'))),
      );
    });

    test('acceptLocal and acceptRemote resolve with their version', () async {
      final a = await seedConflict();
      await db.store(Tasks.store).conflicts.acceptLocal(a);
      expect((await raw.collection('tasks').get(a))!['title'], 'local');

      final b = await seedConflict();
      await db.store(Tasks.store).conflicts.acceptRemote(b);
      expect((await raw.collection('tasks').get(b))!['title'], 'remote');
    });

    test('accepting a remote deletion purges the record', () async {
      final id = await seedConflict(remote: {'__lp_deleted__': true});
      await db.store(Tasks.store).conflicts.acceptRemote(id);
      expect(await raw.collection('tasks').get(id), isNull,
          reason: 'accepting a remote deletion mirrors the remote');
    });

    test('watch emits the initial list and re-emits on resolution', () async {
      final id = await seedConflict();
      final seen = <List<Conflict<Tasks>>>[];
      final done = Completer<void>();
      final sub = db.store(Tasks.store).conflicts.watch().listen((list) {
        seen.add(list);
        if (seen.length >= 2 && !done.isCompleted) done.complete();
      });
      addTearDown(sub.cancel);

      // Wait for the initial snapshot, then resolve so the kernel re-emits
      // the current (empty) list.
      await waitUntil(() async => seen.isNotEmpty);
      await db.store(Tasks.store).conflicts.acceptLocal(id);
      await done.future;
      expect(seen.first.single.recordId, id);
      expect(seen.last, isEmpty,
          reason: 'the kernel re-emits the current list after resolution');
    });
  });
}

/// Polls (deadline-bounded) until [predicate] holds — watch emissions and
/// change-bus forwarding are asynchronous.
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
