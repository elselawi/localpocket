import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

void main() {
  test('compile-only QueryBuilder produces compiler-owned SQL and bindings',
      () {
    final schema = CollectionSchema<Object?>(
      name: 'items',
      version: 1,
      fields: [
        Field.text('name'),
        Field.int('qty'),
      ],
    );
    final query = QueryBuilder.compileOnly(schema)
        .where('qty', inValues: [1, 2, 3], between: (0, 10))
        .orderBy('qty')
        .limit(4);

    final plan = query.compilePlan(limitOverride: 5);
    expect(plan.operation, 'query');
    expect(plan.compilerVersion, 1);
    expect(plan.store, 'items');
    expect(plan.schemaFingerprint, isNotEmpty);
    expect(plan.argumentCount, 5);
    expect(plan.sql, contains('IN (?, ?, ?)'));
    expect(plan.sql, contains('LIMIT 5'));
    expect(plan.args, [1, 2, 3, 0, 10]);
    expect(plan.sql, isNot(contains('1, 2, 3')));
  });

  test('compiled plan preserves projection, scopes, and pagination limit', () {
    final schema = CollectionSchema<Object?>(
      name: 'items',
      version: 2,
      fields: [
        Field.text('name'),
        Field.int('qty'),
      ],
    );
    final query = QueryBuilder.compileOnly(schema)
        .where('qty', between: (1, 9))
        .select(['id', 'name'])
        .includeArchived()
        .includeHidden()
        .limit(3);
    final plan = query.compilePlan(limitOverride: 4);
    expect(plan.schemaVersion, 2);
    expect(plan.sql, contains('"qty" >= ? AND "qty" < ?'));
    expect(plan.sql, contains('LIMIT 4'));
    expect(plan.projection, ['id', 'name']);
  });

  test('compile-only QueryBuilder cannot execute', () async {
    final schema = CollectionSchema<Object?>(
      name: 'items',
      version: 1,
      fields: [Field.text('name')],
    );
    expect(
      () => QueryBuilder.compileOnly(schema).all().fetch(),
      throwsStateError,
    );
  });
}
