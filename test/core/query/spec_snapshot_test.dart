import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/core/query/query_builder/predicate_tree.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// The structured snapshot [QueryBuilder] records for the web facade's spec
/// lowering. Rebuilding a builder from the snapshot must compile the exact
/// SQL and args the original builder compiled — that is the parity contract
/// the re-routed web path depends on.
void main() {
  final schema = widgetsSchema();

  QueryBuilder rebuild(QueryBuilder source) {
    final nodes = source.filterNodes;
    var builder = QueryBuilder.compileOnly(schema);
    if (nodes.isNotEmpty) {
      builder = builder.wherePredicate(
          nodes.length == 1 ? nodes.single : AllPredicate(nodes));
    }
    for (final o in source.orderNodes) {
      builder = builder.orderBy(o.field, desc: o.desc);
    }
    if (source.allMode) {
      builder = builder.all();
    } else if (source.limitValue != null) {
      builder = builder.limit(source.limitValue!);
    }
    if (source.selectFields != null) {
      builder = builder.select(source.selectFields!);
    }
    if (source.includeArchivedFlag) builder = builder.includeArchived();
    if (source.includeHiddenFlag) builder = builder.includeHidden();
    return builder;
  }

  group('structured spec snapshot', () {
    test('where() operators capture as leaves and negations', () {
      final builder = QueryBuilder.compileOnly(schema)
          .where('qty', eq: 3, neq: 4, gt: 1, between: (2, 5))
          .where('name', startsWith: 'ap', inValues: null)
          .where('made_on', isNull: true)
          .where('size', isNotNull: true);

      final nodes = builder.filterNodes;
      expect(nodes, hasLength(7));
      expect(nodes[0], isA<LeafPredicate>());
      expect((nodes[0] as LeafPredicate).operator, 'eq');
      expect(nodes[1], isA<NotPredicate>(),
          reason: 'neq captures as NOT(eq) — the tree compiler has no neq');
      expect(
          ((nodes[1] as NotPredicate).child as LeafPredicate).operator, 'eq');
      expect((nodes[3] as LeafPredicate).operator, 'between');
      expect((nodes[3] as LeafPredicate).args, [2, 5]);
      expect((nodes[4] as LeafPredicate).operator, 'startsWith');
      expect((nodes[5] as LeafPredicate).operator, 'isNull');
      expect((nodes[5] as LeafPredicate).args, isEmpty);
      expect(nodes[6], isA<NotPredicate>(),
          reason: 'isNotNull captures as NOT(isNull)');
      // `inValues: null` adds no clause and no node.
    });

    test('orWhere captures one OR node of AND arms', () {
      final builder =
          QueryBuilder.compileOnly(schema).where('qty', eq: 3).orWhere([
        {'name': 'a'},
        {'name': 'b', 'qty': 1},
      ]);

      final nodes = builder.filterNodes;
      expect(nodes, hasLength(2));
      final or = nodes[1] as AnyPredicate;
      expect(or.children, hasLength(2));
      expect((or.children[0] as AllPredicate).children, hasLength(1));
      expect((or.children[1] as AllPredicate).children, hasLength(2));
    });

    test('empty orWhere groups add no node', () {
      final builder = QueryBuilder.compileOnly(schema).orWhere([]);
      expect(builder.filterNodes, isEmpty);
    });

    test('wherePredicate captures the node verbatim', () {
      const node = NotPredicate(LeafPredicate('qty', 'gt', [9]));
      final builder = QueryBuilder.compileOnly(schema).wherePredicate(node);
      expect(builder.filterNodes.single, same(node));
    });

    test('a single-leaf snapshot recompiles byte-identical SQL', () {
      final original = QueryBuilder.compileOnly(schema)
          .where('qty', eq: 3)
          .orderBy('qty', desc: true)
          .select(['id', 'name']).limit(9);

      final rebuiltSql = rebuild(original).debugCompile();
      final directSql = original.debugCompile();
      expect(rebuiltSql.$1, directSql.$1);
      expect(rebuiltSql.$2, directSql.$2);
    });

    test('a rebuilt builder with composite leaves returns the same rows',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      await col
          .put(record(name: 'a', qty: 5, madeOn: 100, id: generateRecordId()));
      await col
          .put(record(name: 'b', qty: 9, madeOn: 100, id: generateRecordId()));
      await col
          .put(record(name: 'c', qty: 1, madeOn: 200, id: generateRecordId()));
      await col
          .put(record(name: 'd', qty: 5, madeOn: 300, id: generateRecordId()));

      final original = col
          .query()
          .where('qty', gte: 3)
          .where('made_on', between: (100, 300))
          .orderBy('qty', desc: true)
          .select(['id', 'name'])
          .limit(9);

      final nodes = original.filterNodes;
      final rebuilt = col
          .query()
          .wherePredicate(
              nodes.length == 1 ? nodes.single : AllPredicate(nodes))
          .orderBy('qty', desc: true)
          .select(['id', 'name']).limit(9);

      final expected = await original.fetch();
      final actual = await rebuilt.fetch();
      expect(
        actual.items.map((r) => r['id']).toList(),
        expected.items.map((r) => r['id']).toList(),
      );
      expect(actual.hasNext, expected.hasNext);
    });

    test('a rebuilt builder with interleaved orWhere returns the same rows',
        () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      await col
          .put(record(name: 'a', qty: 5, madeOn: 100, id: generateRecordId()));
      await col
          .put(record(name: 'b', qty: 9, madeOn: 100, id: generateRecordId()));
      await col
          .put(record(name: 'c', qty: 1, madeOn: 200, id: generateRecordId()));
      await col
          .put(record(name: 'd', qty: 5, madeOn: 300, id: generateRecordId()));

      final original = col
          .query()
          .where('qty', gte: 3)
          .orWhere([
            {'name': 'a'},
            {'name': 'b'},
          ])
          .where('made_on', between: (100, 300))
          .orderBy('qty', desc: true)
          .limit(9);
      final nodes = original.filterNodes;
      final rebuilt = col
          .query()
          .wherePredicate(
              nodes.length == 1 ? nodes.single : AllPredicate(nodes))
          .orderBy('qty', desc: true)
          .limit(9);

      final expected = await original.fetch();
      final actual = await rebuilt.fetch();
      expect(
        actual.items.map((r) => r['id']).toList(),
        expected.items.map((r) => r['id']).toList(),
      );
      expect(actual.hasNext, expected.hasNext);
    });

    test('an unbounded query snapshot keeps all-mode', () {
      final original =
          QueryBuilder.compileOnly(schema).where('name', eq: 'x').all();
      final rebuilt = rebuild(original);
      expect(rebuilt.allMode, isTrue);
      final rebuiltSql = rebuilt.debugCompile();
      final directSql = original.debugCompile();
      expect(rebuiltSql.$1, directSql.$1);
      expect(rebuiltSql.$2, directSql.$2);
    });

    test('order, projection, and scope getters expose the declared state', () {
      final builder = QueryBuilder.compileOnly(schema)
          .select(['id', 'name'])
          .includeHidden()
          .orderBy('price');

      expect(builder.orderNodes.single.field, 'price');
      expect(builder.selectFields, ['id', 'name']);
      expect(builder.includeArchivedFlag, isFalse);
      expect(builder.includeHiddenFlag, isTrue);
    });
  });
}
