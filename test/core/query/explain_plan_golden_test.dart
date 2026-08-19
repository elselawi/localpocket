import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// EXPLAIN QUERY PLAN goldens: captures the actual SQL
/// produced by representative query and sync shapes and pins the planner's
/// chosen plans, so an accidental plan regression (index loss, temp B-tree,
/// table scan) shows up in CI. Regenerate with:
///   `dart run probe/explain_plan_probe.dart > test/goldens/explain_plan.golden`
CollectionSchema<Object?> planSchema() => CollectionSchema(
      name: 'widgets',
      version: 1,
      fields: [
        Field.text('name', required: true),
        Field.int('qty'),
        Field.text('body'),
      ],
      indexes: const [
        IndexSpec(['qty']),
        IndexSpec(['name'])
      ],
      fts: const FtsSpec(['name', 'body']),
    );

void main() {
  test('explain query plan goldens', () async {
    final sql = <String>[];
    final hooks = TestHooks(onQuery: sql.add);
    final db = await openPocket(stores: [planSchema()], testHooks: hooks);
    addTearDown(db.close);
    final col = db.collection('widgets');

    for (var i = 0; i < 10; i++) {
      await col.put({
        'id': generateRecordId(),
        'name': 'n$i',
        'qty': i,
        'body': 'body $i'
      });
    }

    // 1. Default-scope indexed range + sort.
    await col.query().where('qty', gte: 3).orderBy('qty').limit(50).fetch();
    // 2. Archived scope (expect no partial index — full scan + temp B-tree).
    await col
        .query()
        .includeArchived()
        .where('qty', gte: 3)
        .orderBy('qty')
        .limit(50)
        .fetch();
    // 3. Keyset continuation (row-value predicate, index seek).
    final page = await col.query().orderBy('qty').limit(3).fetch();
    await col.query().orderBy('qty').limit(3).keysetAfter(page.nextCursor!);
    // 4. FTS search join.
    await col.search('n1').limit(50).fetch();
    // 5. Outbox drain join (raw query — added explicitly below).
    await db.outbox.drain(limit: 10);
    sql.add("SELECT o.* FROM lp_outbox o "
        "JOIN lp_sync_row s ON o.store = s.store AND o.record_id = s.record_id "
        "WHERE s.sync_state NOT IN ('error','quarantine','conflict') "
        "AND (s.next_retry_at IS NULL OR s.next_retry_at <= ?) "
        "ORDER BY o.created_at ASC, o.rowid ASC LIMIT ?");
    // 6. Sweep bucket scan.
    sql.add(
        'SELECT record_id FROM lp_sync_row WHERE store = ? AND record_id LIKE ?');

    final buf = StringBuffer();
    final seen = <String>{};
    for (final q in sql) {
      if (!seen.add(q)) continue;
      buf.writeln('=== $q ===');
      final placeholders = '?'.allMatches(q).length;
      final plan = await db.db
          .rawQuery('EXPLAIN QUERY PLAN $q', List.filled(placeholders, 0));
      for (final row in plan) {
        buf.writeln(
            '  ${row['id']}|${row['parent']}|${row['notused']}|${row['detail']}');
      }
      buf.writeln('');
    }

    expect(buf.toString().trim(),
        await readGolden('test/goldens/explain_plan.golden'));
  });
}
