import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Transaction query/search
/// reads must never execute through the outer database executor.
///
/// The structural fix has landed: an explicit ExecutionContext routes every
/// read (plan Rule 5). A store obtained from a `Tx` permanently carries the
/// transaction context — `store.dart` query()/search() receive the tx
/// executor through it, and the root/`_exec ?? _pocket.db` fallback no longer
/// exists anywhere in the kernel. These tests continue to pin the OBSERVABLE
/// behavior that fix must preserve: reads-your-writes inside the transaction,
/// and full visibility reversal after a savepoint rollback, for BOTH the
/// query builder and the search builder created from a `Tx`.
void main() {
  group('reads inside a transaction', () {
    test('query built from Tx reads its own uncommitted writes', () async {
      final p = await openPocket(stores: [
        widgetsSchema(fts: const FtsSpec(['name']))
      ]);
      addTearDown(p.close);
      await p.collection('widgets').put(record(name: 'committed', qty: 1));

      await p.transaction((tx) async {
        await tx.collection('widgets').put(record(name: 'uncommitted', qty: 2));

        final page = await tx
            .collection('widgets')
            .query()
            .where('name', eq: 'uncommitted')
            .limit(10)
            .fetch();
        expect(page.items, hasLength(1),
            reason: 'reads-your-writes inside the tx');
        expect(page.items.single['qty'], 2);
      });
    });

    test('search built from Tx reads its own uncommitted writes', () async {
      final p = await openPocket(stores: [
        widgetsSchema(fts: const FtsSpec(['name']))
      ]);
      addTearDown(p.close);
      await p.collection('widgets').put(record(name: 'zebra'));

      await p.transaction((tx) async {
        await tx.collection('widgets').put(record(name: 'aardvark'));
        final hits =
            await tx.collection('widgets').search('aardvark').limit(10).fetch();
        expect(hits.map((h) => h.id), isNotEmpty);
      });
    });

    test('savepoint rollback reverses visibility for in-tx queries', () async {
      final p = await openPocket(stores: [
        widgetsSchema(fts: const FtsSpec(['name']))
      ]);
      addTearDown(p.close);

      await p.transaction((tx) async {
        await tx.collection('widgets').put(record(name: 'kept'));
        try {
          await tx.transaction((nested) async {
            await nested.collection('widgets').put(record(name: 'doomed'));
            final seen = await nested
                .collection('widgets')
                .query()
                .where('name', eq: 'doomed')
                .limit(10)
                .fetch();
            expect(seen.items, hasLength(1));
            throw StateError('rollback the savepoint');
          });
        } on StateError {
          // expected
        }
        final after = await tx
            .collection('widgets')
            .query()
            .where('name', eq: 'doomed')
            .limit(10)
            .fetch();
        expect(after.items, isEmpty,
            reason: 'rolled-back savepoint work is invisible');
      });
    });

    test('a read transaction sees committed state', () async {
      final p = await openPocket();
      addTearDown(p.close);
      final id = generateRecordId();
      await p
          .collection('widgets')
          .put(record(name: 'visible', qty: 9, id: id));

      await p.read((tx) async {
        final row = await tx.collection('widgets').get(id);
        expect(row?['name'], 'visible');
      });
    });
  });
}
