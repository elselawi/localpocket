import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/kernel/ids.dart' show generateRecordId;
import 'package:test/test.dart';

import '../support/fixtures/tasks_store.dart';

/// Edge coverage for the typed row surface, the write envelope, and the
/// store-definition verification guard rails.
final class Alpha extends StoreDef<Alpha> {
  Alpha._() : super(name: 'alpha', version: 1);
  static final Alpha store = Alpha._();

  static final title = store.schema.text('name').req();

  @override
  List<FieldDef<Alpha, Object?>> get fields => [title];
}

final class Beta extends StoreDef<Beta> {
  Beta._() : super(name: 'beta', version: 1);
  static final Beta store = Beta._();

  static final title = store.schema.text('title').req();

  @override
  List<FieldDef<Beta, Object?>> get fields => [title];
}

void main() {
  group('Row read guards', () {
    final map = {'id': 'a1', 'name': 'x', 'archived': 0};

    test('typedStoreMismatch names both stores', () {
      expect(
        typedStoreMismatch(
          owner: Beta.store,
          name: 'title',
          target: Alpha,
          targetKind: 'row',
        ),
        isA<TypedStoreMismatchError>().having((e) => e.message, 'message',
            allOf(contains('Beta'), contains('Alpha'), contains('row'))),
      );
    });

    test('a projected row rejects unselected system fields', () {
      final row = Row(Alpha.store, map, projected: {'name'});
      expect(
        () => row.id,
        throwsA(
            isA<FieldNotSelectedError>().having((e) => e.field, 'field', 'id')),
      );
    });

    test('a corrupt system field is a field-naming error', () {
      final row = Row(Alpha.store, {'id': 5, 'name': 'x', 'archived': 0});
      expect(
        () => row.id,
        throwsA(
            isA<ValidationException>().having((e) => e.field, 'field', 'id')),
      );
    });

    test('required-but-missing and required-null are distinct failures', () {
      final missing = Row(Alpha.store, {'id': 'a1', 'archived': 0});
      expect(
        () => missing.get(Alpha.title),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('missing'))),
      );
      final nullValue = Row(Alpha.store, {
        'id': 'a1',
        'name': null,
        'archived': 0,
      });
      expect(
        () => nullValue.get(Alpha.title),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('null'))),
      );
    });

    test('the call form and the get alias agree', () {
      final row = Row(Alpha.store, map);
      expect(row(Alpha.title), 'x');
      expect(row.get(Alpha.title), 'x');
    });

    test('toString names the row type and id', () {
      final row = Row(Alpha.store, map);
      expect(row.toString(), 'Row<Alpha>(a1)');
    });

    test('extra round-trips undeclared keys', () {
      final row = Row(Alpha.store, {
        'id': 'a1',
        'name': 'x',
        'archived': 0,
        'label': 'keep',
      });
      expect(row.extra, {'label': 'keep'});
    });
  });

  group('system field descriptors', () {
    test('are exposed for typed reads but never compile into the schema', () {
      expect(Alpha.store.id.name, 'id');
      expect(Alpha.store.archived.name, 'archived');
      expect(Alpha.store.id.required, isFalse);
      expect(
        () => Alpha.store.id.toField(),
        throwsA(isA<SchemaRegistrationError>()),
        reason: 'the engine owns the id column; it is not a schema field',
      );
    });

    test('they are not settable through the typed write path', () {
      // Compile-time proof: `Alpha.store.id.set(...)` does not compile
      // because _SystemFieldDef is not a SettableFieldDef. The runtime pin
      // below documents the descriptor kind.
      expect(Alpha.store.archived.toField,
          throwsA(isA<SchemaRegistrationError>()));
    });
  });

  group('StoreDef.verify guard rails', () {
    test('verify() passes for the canonical definitions', () {
      expect(Alpha.store.verify, returnsNormally);
      expect(Tasks.store.verify, returnsNormally);
    });

    test('a created-but-omitted field is an error, never silent', () {
      // An unforced late-final descriptor is invisible; touching it exposes
      // the omission to the verify pass.
      _Omitted.b;
      expect(_Omitted.store.verify, throwsA(isA<SchemaRegistrationError>()));
    });

    test('a duplicate column name fails', () {
      expect(_Duplicate.store.verify, throwsA(isA<SchemaRegistrationError>()));
    });

    test('compiledSchema memoizes one compiled instance', () {
      expect(identical(Alpha.store.compiledSchema, Alpha.store.compiledSchema),
          isTrue);
      expect(Alpha.store.compiledSchema.name, 'alpha');
      expect(Alpha.store.compiledSchema.fields.map((f) => f.name), ['name'],
          reason: 'system columns (id/archived) are engine-owned, never '
              'part of the declared schema fields');
    });
  });

  group('Writes.extra', () {
    late LocalPocket db;

    setUp(() async {
      db = await LocalPocket.open(LocalPocketOptions(
          path: ':memory:', stores: [Alpha.store, Beta.store]));
    });
    tearDown(() => db.close());

    test('undeclared keys round-trip losslessly through the row extra',
        () async {
      final alpha = db.store(Alpha.store);
      final id = generateRecordId();
      await alpha.put([
        Writes.id(id),
        Alpha.title.set('with-extra'),
        Writes.extra('custom_key', 42),
      ]);
      final row = (await alpha.get(id))!;
      expect(row.extra['custom_key'], 42);
    });

    test('declared and database-owned keys are rejected', () async {
      final alpha = db.store(Alpha.store);
      final id = generateRecordId();
      await expectLater(
        alpha.put([
          Writes.id(id),
          Alpha.title.set('x'),
          Writes.extra('name', 'sneaky'),
        ]),
        throwsA(isA<ValidationException>()),
      );
    });
  });

  group('query predicate backstops', () {
    late LocalPocket db;

    setUp(() async {
      db = await LocalPocket.open(LocalPocketOptions(
          path: ':memory:', stores: [Alpha.store, Beta.store]));
    });
    tearDown(() => db.close());

    test('an unknown condition operator fails with the field named', () async {
      // A dynamic cast (e.g. from serialized specs) can hand a bogus
      // operator string to the lowerer; it must fail typed with the field.
      final cond = FieldCond<Alpha>(
        Alpha.store,
        Alpha.title.name,
        'explode',
        ['x'],
      );
      await expectLater(
        db.store(Alpha.store).query(QuerySpec<Alpha>(
              where: [cond],
              limit: 5,
            )),
        throwsA(isA<ValidationException>().having((e) => e.message, 'message',
            allOf(contains('explode'), contains('name')))),
      );
    });
  });
}

/// Declares two fields but lists only one in `fields`.
final class _Omitted extends StoreDef<_Omitted> {
  _Omitted() : super(name: 'omitted', version: 1);
  static final _Omitted store = _Omitted();
  static final a = store.schema.text('a').req();
  // Created through the factory but deliberately omitted from `fields`.
  // ignore: unused_field
  static final b = store.schema.text('b').req();

  @override
  List<FieldDef<_Omitted, Object?>> get fields => [a];
}

/// Lists the same column name twice.
final class _Duplicate extends StoreDef<_Duplicate> {
  _Duplicate() : super(name: 'duplicate', version: 1);
  static final _Duplicate store = _Duplicate();
  static final a = store.schema.text('a').req();
  static final b = store.schema.text('a').req();

  @override
  List<FieldDef<_Duplicate, Object?>> get fields => [a, b];
}
