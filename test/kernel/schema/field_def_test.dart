import 'package:localpocket/src/kernel/errors.dart' show ValidationException;
import 'package:localpocket/src/kernel/schema.dart' show Field;
import 'package:localpocket/src/schema/cond.dart';
import 'package:localpocket/src/schema/field_def.dart';
import 'package:localpocket/src/schema/store_def.dart';
import 'package:test/test.dart';

/// A minimal store definition used purely as a descriptor owner: none of
/// these descriptors ever reach a database in the unit groups below.
final class Box extends StoreDef<Box> {
  Box._() : super(name: 'box', version: 1);
  static final Box store = Box._();

  static final label = store.schema.text('label').req();
  static final count = store.schema.integer('count');
  static final score = store.schema.real('score');
  static final active = store.schema.boolean('active');
  static final madeOn = store.schema.date('made_on');
  static final dueAt = store.schema.dateTime('due_at');
  static final stage =
      store.schema.enumOf('stage', Stage.values, wire: {Stage.draft: 'DRAFT'});
  static final meta = store.schema.json('meta');
  static final tags = store.schema.jsonList<String>('tags');
  static final owner = store.schema.ref('owner', to: 'box');

  @override
  List<FieldDef<Box, Object?>> get fields =>
      [label, count, score, active, madeOn, dueAt, stage, meta, tags, owner];
}

enum Stage { draft, active }

/// A hand-built descriptor that violates the `required` + nullable guard —
/// impossible through the [Fields] factories, which is the point.
final class _RequiredNullable extends FieldDef<Box, String?> {
  _RequiredNullable() : super(Box.store, 'broken', required: true);

  @override
  Field toField() => Field.text('broken', required: true);
}

void main() {
  group('FieldDef construction guards', () {
    test('required: true with a nullable value type is a StateError', () {
      expect(() => _RequiredNullable(), throwsStateError);
    });

    test('inValues rejects an empty list', () {
      expect(() => Box.count.inValues(const []), throwsArgumentError);
    });

    test('inValues encodes every value through the boundary codec', () {
      final cond = Box.stage.inValues([Stage.draft, Stage.active]);
      expect(cond.operator, 'inValues');
      expect(cond.args, ['DRAFT', 'active']);
    });
  });

  group('condition value construction', () {
    test('between carries both encoded endpoints', () {
      final cond = Box.count.between(1, 5);
      expect(cond.operator, 'between');
      expect(cond.args, [1, 5]);
    });

    test('asc/desc order terms bind the descriptor and direction', () {
      expect(Box.count.asc.desc, isFalse);
      expect(Box.count.desc.desc, isTrue);
      expect(identical(Box.count.asc.field, Box.count), isTrue);
    });

    test('comparable members encode their single argument', () {
      expect(Box.count.gt(1).operator, 'gt');
      expect(Box.count.gt(1).args, [1]);
      expect(Box.count.gte(1).operator, 'gte');
      expect(Box.count.lt(1).operator, 'lt');
      expect(Box.count.lte(1).operator, 'lte');
    });

    test('null comparison args are rejected, never compiled to SQL', () {
      // `> NULL` and friends never match a row, so the condition would
      // silently yield an empty result set; `eq(null)` has real IS NULL
      // semantics, these operators do not.
      expect(() => Box.count.gt(null), throwsArgumentError);
      expect(() => Box.count.gte(null), throwsArgumentError);
      expect(() => Box.count.lt(null), throwsArgumentError);
      expect(() => Box.count.lte(null), throwsArgumentError);
      expect(() => Box.madeOn.gt(null), throwsArgumentError);
      expect(() => Box.count.between(1, null), throwsArgumentError);
      expect(() => Box.count.between(null, 5), throwsArgumentError);
      expect(() => Box.count.inValues([1, null]), throwsArgumentError);
      expect(
          () => Box.stage.inValues([Stage.draft, null]), throwsArgumentError);
    });

    test('text members carry the raw pattern', () {
      expect(Box.label.startsWith('a').operator, 'startsWith');
      expect(Box.label.startsWith('a').args, ['a']);
      expect(Box.label.endsWith('z').operator, 'endsWith');
      expect(Box.label.contains('m').operator, 'contains');
    });

    test('isNull is spelled only through the nullable member', () {
      final cond = Box.count.isNull();
      expect(cond.operator, 'isNull');
      expect(cond.args, isEmpty);
    });

    test('descriptor toString names the value type and field', () {
      expect(Box.count.toString(), 'FieldDef<int?>("count")');
    });
  });

  group('AllCond / AnyCond trees', () {
    test('a conjunction needs at least one condition', () {
      expect(() => AllCond<Box>(const []), throwsArgumentError);
    });

    test('a disjunction needs at least one condition', () {
      expect(() => AnyCond<Box>(const []), throwsArgumentError);
    });

    test('nested conjunctions flatten into one node', () {
      final inner = AllCond<Box>([Box.count.gt(1), Box.count.lt(9)]);
      final outer = AllCond<Box>([Box.count.gte(0), inner]);
      expect(outer.children, hasLength(3));
    });

    test('nested disjunctions flatten into one node', () {
      final inner = AnyCond<Box>([Box.label.eq('a'), Box.label.eq('b')]);
      final outer = AnyCond<Box>([inner, Box.label.eq('c')]);
      expect(outer.children, hasLength(3));
    });

    test('negation wraps its child without flattening', () {
      final not = ~Box.label.eq('x');
      expect(not, isA<NotCond<Box>>());
    });
  });

  group('decodeStored error wrapping', () {
    test('rethrows a ValidationException unchanged', () {
      try {
        decodeStored(Box.stage.req(), null);
        fail('expected a ValidationException');
      } on ValidationException catch (e) {
        expect(e.field, 'stage');
        expect(e.message, contains('required'));
      }
    });

    test('wraps any other decode failure in a field-naming error', () {
      // The default int decode is a cast; a string raw value fails it.
      expect(
        () => decodeStored(Box.count, 'not-an-int'),
        throwsA(isA<ValidationException>()
            .having((e) => e.field, 'field', 'count')
            .having(
                (e) => e.message, 'message', contains('could not be decoded'))),
      );
    });
  });

  group('enum boundary codec', () {
    test('wireOf uses the override first, then the value name', () {
      expect(Box.stage.wireOf(Stage.draft), 'DRAFT');
      expect(Box.stage.wireOf(Stage.active), 'active');
    });

    test('optional decode: null passes through', () {
      expect(Box.stage.decode(null), isNull);
    });

    test('required decode: null is a field-naming error', () {
      expect(
        () => Box.stage.req().decode(null),
        throwsA(isA<ValidationException>()
            .having((e) => e.field, 'field', 'stage')),
      );
    });

    test('a non-string raw value fails with a field-naming error', () {
      expect(
        () => Box.stage.decode(7),
        throwsA(isA<ValidationException>()
            .having((e) => e.field, 'field', 'stage')),
      );
    });

    test('an unknown wire string fails with a field-naming error', () {
      expect(
        () => Box.stage.decode('nope'),
        throwsA(isA<ValidationException>()
            .having((e) => e.field, 'field', 'stage')
            .having((e) => e.message, 'message', contains('nope'))),
      );
    });

    test('encode maps null to null and values through wireOf', () {
      expect(Box.stage.encode(null), isNull);
      expect(Box.stage.encode(Stage.draft), 'DRAFT');
      expect(Box.stage.req().encode(Stage.active), 'active');
    });

    test('duplicate enum values are rejected at construction', () {
      expect(
        () => Box.store.schema.enumOf('dup', [Stage.draft, Stage.draft]),
        throwsStateError,
      );
    });

    test('an empty enum value list is rejected at construction', () {
      expect(
        () => Box.store.schema.enumOf<Enum>('empty', const []),
        throwsStateError,
        reason: 'an enum with no members cannot encode or decode anything; '
            'it must fail at declaration, not at first use',
      );
    });

    test('wire overrides for values the field does not accept are rejected',
        () {
      expect(
        () => Box.store.schema
            .enumOf('foreign', [Stage.draft], wire: {Stage.active: 'ACTIVE'}),
        throwsStateError,
      );
    });

    test('two values mapped to one wire string are rejected', () {
      expect(
        () => Box.store.schema
            .enumOf('collide', Stage.values, wire: {Stage.active: 'draft'}),
        throwsStateError,
      );
    });
  });

  group('date-time boundary codec', () {
    test('optional decode: null passes through', () {
      expect(Box.dueAt.decode(null), isNull);
    });

    test('decode pins the instant to UTC', () {
      final value = Box.dueAt.decode(0) as DateTime;
      expect(value.isUtc, isTrue);
      expect(value.millisecondsSinceEpoch, 0);
    });

    test('a non-integer raw value fails with a field-naming error', () {
      expect(
        () => Box.dueAt.req().decode('soon'),
        throwsA(isA<ValidationException>()
            .having((e) => e.field, 'field', 'due_at')),
      );
    });

    test('encode converts through toUtc so the instant is wall-clock safe', () {
      final local = DateTime(2026, 1, 2, 12); // local wall clock
      final encoded = Box.dueAt.encode(local) as int;
      expect(encoded, local.toUtc().millisecondsSinceEpoch);
      expect(encoded, Box.dueAt.encode(local.toUtc()));
    });

    test('the UTC codec round-trips through the raw column value', () {
      final instant = DateTime.utc(2026, 9, 2, 10, 30);
      final raw = Box.dueAt.encode(instant);
      final decoded = Box.dueAt.decode(raw) as DateTime;
      expect(decoded, instant);
      expect(decoded.isUtc, isTrue);
    });
  });

  group('jsonList boundary codec', () {
    test('null passes through', () {
      expect(Box.tags.decode(null), isNull);
    });

    test('a non-list raw value fails with a field-naming error', () {
      expect(
        () => Box.tags.decode('nope'),
        throwsA(
            isA<ValidationException>().having((e) => e.field, 'field', 'tags')),
      );
    });

    test('a well-formed list decodes per element', () {
      expect(Box.tags.decode(['a', 'b']), ['a', 'b']);
    });

    test('an off-contract element is wrapped by decodeStored', () {
      expect(
        () => decodeStored(Box.tags, ['a', 7]),
        throwsA(
            isA<ValidationException>().having((e) => e.field, 'field', 'tags')),
      );
    });
  });

  group('required counterpart bookkeeping', () {
    test('req() memoizes one counterpart per optional descriptor', () {
      expect(identical(Box.count.req(), Box.count.req()), isTrue);
      expect(identical(Box.count.reqCounterpart, Box.count.req()), isTrue);
    });

    test('a descriptor without a req() call has no counterpart yet', () {
      expect(Box.label.reqCounterpart, isNull);
    });

    test('every kind exposes a required counterpart', () {
      expect(Box.score.req(), isA<FieldDef<Box, num>>());
      expect(Box.active.req(), isA<FieldDef<Box, bool>>());
      expect(Box.madeOn.req(), isA<FieldDef<Box, int>>());
      expect(Box.dueAt.req(), isA<FieldDef<Box, DateTime>>());
      expect(Box.stage.req(), isA<FieldDef<Box, Stage>>());
    });

    test('required descriptors have no counterpart', () {
      expect(Box.label.reqCounterpart, isNull);
      expect(Box.count.req().reqCounterpart, isNull);
    });

    test('json, jsonList, and ref have no required variant', () {
      expect(Box.meta.reqCounterpart, isNull);
      expect(Box.tags.reqCounterpart, isNull);
      expect(Box.owner.reqCounterpart, isNull);
    });
  });

  group('descriptor → database field mapping', () {
    test('kinds map to their column types', () {
      expect(Box.label.toField().sqlType, 'TEXT');
      expect(Box.count.toField().sqlType, 'INTEGER');
      expect(Box.score.toField().sqlType, 'REAL');
      expect(Box.active.toField().sqlType, 'INTEGER');
      expect(Box.madeOn.toField().sqlType, 'INTEGER');
      expect(Box.dueAt.toField().sqlType, 'INTEGER');
      expect(Box.stage.toField().sqlType, 'TEXT');
      expect(Box.meta.toField().sqlType, 'TEXT');
      expect(Box.tags.toField().sqlType, 'TEXT');
      expect(Box.owner.toField().sqlType, 'TEXT');
    });

    test('encrypted fields flip the column type to TEXT', () {
      final box = Box.store.schema;
      expect(box.integer('hushed', encrypted: true).toField().sqlType, 'TEXT');
      expect(box.real('hushed', encrypted: true).toField().sqlType, 'TEXT');
      expect(box.json('hushed', encrypted: true).toField().sqlType, 'TEXT');
      expect(box.jsonList<String>('hushed', encrypted: true).toField().sqlType,
          'TEXT');
    });

    test('the enum field inherits the descriptor wire strings', () {
      expect(Box.stage.toField().toJson()['enumValues'], ['DRAFT', 'active']);
    });

    test('the ref field carries its target and enforcement flag', () {
      expect(Box.owner.toField().toJson()['refTo'], 'box');
      expect(Box.owner.toField().toJson()['enforceFk'], false);
      final enforced =
          Box.store.schema.ref('parent', to: 'box', enforceFk: true);
      expect(enforced.toField().toJson()['enforceFk'], true);
    });

    test('required counterparts compile to required columns', () {
      expect(Box.label.toField().required, isTrue);
      expect(Box.count.toField().required, isFalse);
      expect(Box.count.req().toField().required, isTrue);
      expect(Box.stage.req().toField().toJson()['enumValues'],
          ['DRAFT', 'active']);
    });
  });
}
