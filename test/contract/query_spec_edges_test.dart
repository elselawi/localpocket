import 'package:localpocket/src/contract/contract.dart';
import 'package:test/test.dart';

/// Wire-level edges of the query spec codec: condition serialization,
/// predicate-tree round-trips, and the malformed-input contracts.
void main() {
  group('QueryConditionData', () {
    test('inValues serializes through the values list', () {
      const condition = QueryConditionData(
        'tags',
        QueryConditionOp.inValues,
        values: ['a', 'b'],
      );
      final json = condition.toJson();
      expect(json['op'], 'inValues');
      expect(json['values'], ['a', 'b']);
      expect(json.containsKey('value'), isFalse);

      final back = QueryConditionData.fromJson(json);
      expect(back.field, 'tags');
      expect(back.op, QueryConditionOp.inValues);
      expect(back.values, ['a', 'b']);
    });

    test('scalar conditions serialize through value', () {
      const condition =
          QueryConditionData('qty', QueryConditionOp.gt, value: 5);
      final back = QueryConditionData.fromJson(condition.toJson());
      expect(back.value, 5);
      expect(back.values, isNull);
    });

    test('malformed conditions fail with a wire error', () {
      expect(() => QueryConditionData.fromJson('nope'),
          throwsA(isA<WireException>()));
      expect(() => QueryConditionData.fromJson({'op': 'eq'}),
          throwsA(isA<WireException>()));
      expect(() => QueryConditionData.fromJson({'field': 'x'}),
          throwsA(isA<WireException>()));
    });

    test('an unknown operator names the operator', () {
      expect(
        () => QueryConditionData.fromJson({
          'field': 'x',
          'op': 'shout',
          'value': 1,
        }),
        throwsA(isA<WireException>()),
      );
    });

    test('wire values survive the encode/decode round-trip', () {
      const condition = QueryConditionData(
        'meta',
        QueryConditionOp.eq,
        value: {
          'k': [1, 2.5, true, null]
        },
      );
      final back = QueryConditionData.fromJson(condition.toJson());
      expect(back.value, {
        'k': [1, 2.5, true, null],
      });
    });
  });

  group('PredicateSpecData trees', () {
    test('not/all/any round-trip through the wire map', () {
      const tree = AllSpecData([
        LeafSpecData(QueryConditionData('a', QueryConditionOp.eq, value: 1)),
        AnySpecData([
          LeafSpecData(
              QueryConditionData('b', QueryConditionOp.startsWith, value: 'x')),
          NotSpecData(
              LeafSpecData(QueryConditionData('c', QueryConditionOp.isNull))),
        ]),
      ]);

      final back = PredicateSpecData.fromJson(tree.toJson());
      expect(back, isA<AllSpecData>());
      final all = back as AllSpecData;
      expect(all.children, hasLength(2));
      final any = all.children[1] as AnySpecData;
      expect(any.children[1], isA<NotSpecData>());
      final leaf = (any.children[1] as NotSpecData).child as LeafSpecData;
      expect(leaf.condition.op, QueryConditionOp.isNull);
    });

    test('malformed trees fail with a wire error', () {
      expect(() => PredicateSpecData.fromJson('nope'),
          throwsA(isA<WireException>()));
      expect(
        () => PredicateSpecData.fromJson({
          'kind': 'all',
          'children': 'nope',
        }),
        throwsA(isA<WireException>()),
      );
      expect(
        () => PredicateSpecData.fromJson({'kind': 'banana'}),
        throwsA(isA<WireException>()),
      );
      expect(
        () => PredicateSpecData.fromJson({
          'kind': 'not',
          'child': {'kind': 'banana'},
        }),
        throwsA(isA<WireException>()),
      );
    });

    test('each node kind serializes its own shape', () {
      const leaf =
          LeafSpecData(QueryConditionData('x', QueryConditionOp.eq, value: 1));
      expect(leaf.toJson()['kind'], 'leaf');
      expect(NotSpecData(leaf).toJson()['kind'], 'not');
      expect(AllSpecData([leaf]).toJson()['kind'], 'all');
      expect(AnySpecData([leaf]).toJson()['kind'], 'any');
    });
  });

  group('QuerySpecData spec codec', () {
    test('or-groups and order terms survive the wire map', () {
      const spec = QuerySpecData(
        where: [QueryConditionData('a', QueryConditionOp.eq, value: 1)],
        orGroups: [
          [QueryConditionData('b', QueryConditionOp.eq, value: 2)],
          [QueryConditionData('c', QueryConditionOp.eq, value: 3)],
        ],
        order: [QueryOrderTermData('a', desc: true)],
        limit: 7,
        select: ['a', 'b'],
        includeArchived: true,
      );
      final back = QuerySpecData.fromJson(spec.toJson());
      expect(back.orGroups, hasLength(2));
      expect(back.order.single.desc, isTrue);
      expect(back.order.single.field, 'a');
      expect(back.limit, 7);
      expect(back.select, ['a', 'b']);
      expect(back.includeArchived, isTrue);
    });

    test('a wrong-typed predicate must never degrade into an unfiltered read',
        () {
      expect(
        () => QuerySpecData.fromJson({
          'where': <Object?>[],
          'orGroups': <Object?>[],
          'order': <Object?>[],
          'predicate': 'nope',
        }),
        throwsA(isA<WireException>()),
      );
    });

    test('malformed specs fail with a wire error', () {
      expect(
          () => QuerySpecData.fromJson('nope'), throwsA(isA<WireException>()));
      expect(
        () => QuerySpecData.fromJson({'where': 'nope'}),
        throwsA(isA<WireException>()),
      );
    });

    test('SearchSpecData validates its term and defaults its flags', () {
      final spec = SearchSpecData.fromJson({
        'term': 'hello',
        'limit': 5,
        'all': true,
      });
      expect(spec.term, 'hello');
      expect(spec.limit, 5);
      expect(spec.all, isTrue);
      expect(spec.includeArchived, isFalse);
      expect(spec.includeHidden, isFalse);

      expect(() => SearchSpecData.fromJson({'limit': 5}),
          throwsA(isA<WireException>()));
      expect(
          () => SearchSpecData.fromJson('nope'), throwsA(isA<WireException>()));
    });
  });
}
