import 'package:localpocket/src/kernel/ids.dart' show generateRecordId;
import 'package:localpocket/src/kernel/local_pocket.dart' as kernel
    show KernelDatabase;
import 'package:test/test.dart';

import '../support/fixtures/tasks_store.dart';

/// The [MutationService] is the named owner of every local mutation path.
/// The production caller is the command handler: a session-less mutation
/// routes through [Collection]'s own transactional wrappers, and the
/// service methods run against a TRANSACTION-BOUND collection inside the
/// session (a bare out-of-transaction `_mutate` would commit rows without
/// publishing the post-commit change set). These pins drive the service the
/// production way and lock in both halves of that contract.
void main() {
  late kernel.KernelDatabase db;

  setUp(() async {
    db = await kernel.KernelDatabase.open(
      path: ':memory:',
      stores: [Tasks.store.compiledSchema],
    );
  });
  tearDown(() => db.close());

  test('put creates and create-or-replaces', () async {
    final col = db.collection('tasks');
    final id = generateRecordId();
    await db.transaction((tx) async {
      await db.mutations.put(
          tx.collection('tasks'), {'id': id, 'title': 'first', 'done': true});
    });
    expect((await col.get(id))!['title'], 'first');

    await db.transaction((tx) async {
      await db.mutations
          .put(tx.collection('tasks'), {'id': id, 'title': 'replaced'});
    });
    final row = await col.get(id);
    expect(row!['title'], 'replaced');
    expect(row['done'], isNull,
        reason: 'create-or-replace clears fields absent from the payload');
  });

  test('upsert merges into the existing record', () async {
    final col = db.collection('tasks');
    final id = generateRecordId();
    await db.transaction((tx) async {
      await db.mutations
          .put(tx.collection('tasks'), {'id': id, 'title': 'keep'});
    });
    await db.transaction((tx) async {
      await db.mutations
          .upsert(tx.collection('tasks'), {'id': id, 'done': true});
    });

    final row = await col.get(id);
    expect(row!['title'], 'keep', reason: 'upsert keeps absent fields');
    expect(row['done'], true);
  });

  test('putAll inserts many records in one transaction', () async {
    final col = db.collection('tasks');
    final idA = generateRecordId();
    final idB = generateRecordId();
    await db.transaction((tx) async {
      await db.mutations.putAll(tx.collection('tasks'), [
        {'id': idA, 'title': 'a'},
        {'id': idB, 'title': 'b'},
      ]);
    });
    expect((await col.get(idA))!['title'], 'a');
    expect((await col.get(idB))!['title'], 'b');
  });

  test('upsertAll merges many records in one transaction', () async {
    final col = db.collection('tasks');
    final idA = generateRecordId();
    final idB = generateRecordId();
    await db.transaction((tx) async {
      await db.mutations.putAll(tx.collection('tasks'), [
        {'id': idA, 'title': 'before'},
      ]);
      await db.mutations.upsertAll(tx.collection('tasks'), [
        {'id': idA, 'done': false},
        {'id': idB, 'title': 'new'},
      ]);
    });
    final merged = await col.get(idA);
    expect(merged!['title'], 'before');
    expect(merged['done'], false);
    expect((await col.get(idB))!['title'], 'new');
  });

  test('patch applies a partial update only', () async {
    final col = db.collection('tasks');
    final id = generateRecordId();
    await db.transaction((tx) async {
      await db.mutations
          .put(tx.collection('tasks'), {'id': id, 'title': 'head'});
    });
    await db.transaction((tx) async {
      await db.mutations.patch(tx.collection('tasks'), id, {'priority': 7});
    });

    final row = await col.get(id);
    expect(row!['title'], 'head');
    expect(row['priority'], 7);
  });

  test('patchAll applies per-record partial updates', () async {
    final col = db.collection('tasks');
    final idA = generateRecordId();
    final idB = generateRecordId();
    await db.transaction((tx) async {
      await db.mutations.putAll(tx.collection('tasks'), [
        {'id': idA, 'title': 'one'},
        {'id': idB, 'title': 'two'},
      ]);
      await db.mutations.patchAll(tx.collection('tasks'), {
        idA: {'priority': 1},
        idB: {'priority': 2},
      });
    });
    expect((await col.get(idA))!['priority'], 1);
    expect((await col.get(idB))!['priority'], 2);
  });

  test('archive/restore/purge drive the record lifecycle', () async {
    final col = db.collection('tasks');
    final id = generateRecordId();
    await db.transaction((tx) async {
      await db.mutations
          .put(tx.collection('tasks'), {'id': id, 'title': 'cycle'});
    });

    await db.transaction((tx) async {
      await db.mutations.archive(tx.collection('tasks'), id);
    });
    expect((await col.get(id))!['archived'], true);

    await db.transaction((tx) async {
      await db.mutations.restore(tx.collection('tasks'), id);
    });
    expect((await col.get(id))!['archived'], false);

    await db.transaction((tx) async {
      await db.mutations.purge(tx.collection('tasks'), id);
    });
    expect(await col.get(id), isNull);
  });

  test('the kernel context exposes the same service instance', () async {
    final col = db.collection('tasks');
    expect(identical(db.kernel.mutations, db.mutations), isTrue);
    final id = generateRecordId();
    await db.transaction((tx) async {
      await db.kernel.mutations
          .put(tx.collection('tasks'), {'id': id, 'title': 'ctx'});
    });
    expect((await col.get(id))!['title'], 'ctx');
  });

  test('a committed service mutation publishes its change set', () async {
    final col = db.collection('tasks');
    final id = generateRecordId();
    await col.put({'id': id, 'title': 'cached'});
    // Warm the point-read cache with a committed read.
    expect((await col.get(id))!['title'], 'cached');

    await db.transaction((tx) async {
      await db.mutations
          .put(tx.collection('tasks'), {'id': id, 'title': 'fresh'});
    });

    // The committed transaction invalidates the cached row.
    expect((await col.get(id))!['title'], 'fresh');
  });
}
