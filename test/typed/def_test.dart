/// Phase-1 definition tests: descriptor → `Field` parity, definition edge
/// cases, and `StoreDef` assembly (plan §4.1, cases 1–40).
///
/// Descriptor-level cases use fresh local probe stores rather than
/// `Tasks.instance.f`: every descriptor created through a store's `f.` is
/// recorded for the omitted-field check, so throwaway descriptors on the
/// canonical `Tasks` instance would make `Tasks.instance.schema` fail
/// `verify()`.
library;

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/typed.dart';
import 'package:test/test.dart';

import 'support/tasks.dart';

// ---------------------------------------------------------------------------
// Local probe stores and enums
// ---------------------------------------------------------------------------

enum _Single { only }

enum _Many {
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  y,
  z
}

/// Enum values whose `.name` looks like a keyword but is a plain Dart
/// identifier — the wire string is the literal name.
enum _Weird { group, order, select }

/// Minimal store used for descriptor-level probing (never compiled).
final class _Probe extends StoreDef<_Probe> {
  _Probe() : super(name: 'probe', version: 1);

  @override
  List<FieldDef<_Probe, Object?>> get fields => const [];
}

/// 100-field store for the wide-definition case.
final class _Wide extends StoreDef<_Wide> {
  _Wide() : super(name: 'wide', version: 1);

  late final List<FieldDef<_Wide, Object?>> _fs = [
    for (var i = 0; i < 100; i++) f.integer('c$i'),
  ];

  @override
  List<FieldDef<_Wide, Object?>> get fields => _fs;
}

/// `date` and `dateTime` on different columns coexist.
final class _DuePair extends StoreDef<_DuePair> {
  _DuePair() : super(name: 'duepair', version: 1);

  late final _day = f.date('due');
  late final _at = f.dateTime('dueAt');

  @override
  List<FieldDef<_DuePair, Object?>> get fields => [_day, _at];
}

/// `date` and `dateTime` on the same column name → duplicate-column error.
final class _DueClash extends StoreDef<_DueClash> {
  _DueClash() : super(name: 'dueclash', version: 1);

  late final _day = f.date('due');
  late final _at = f.dateTime('due');

  @override
  List<FieldDef<_DueClash, Object?>> get fields => [_day, _at];
}

/// Duplicate column name.
final class _Dup extends StoreDef<_Dup> {
  _Dup() : super(name: 'dup', version: 1);

  late final _a = f.text('x');
  late final _b = f.integer('x');

  @override
  List<FieldDef<_Dup, Object?>> get fields => [_a, _b];
}

/// A store that can optionally borrow a descriptor created elsewhere.
/// A descriptor created by a *different instance* of the same class has the
/// right static type but the wrong runtime owner — the scenario the
/// verify() owner check catches. (A cross-class descriptor cannot even be
/// constructed: the type system forbids it, which is the primary defense.)
final class _Borrower extends StoreDef<_Borrower> {
  _Borrower([this.injected]) : super(name: 'borrower', version: 1);

  final FieldDef<_Borrower, Object?>? injected;

  @override
  List<FieldDef<_Borrower, Object?>> get fields =>
      injected == null ? const [] : [injected!];
}

/// A field created through `f.` but omitted from `fields` (forced via the
/// static accessor — the detectable omission case).
final class _Omit extends StoreDef<_Omit> {
  _Omit() : super(name: 'omit', version: 1);

  static final _Omit instance = _Omit();

  late final _kept = f.text('kept');
  late final _forgotten = f.text('forgotten');

  static FieldDef<_Omit, String?> get forgotten => instance._forgotten;

  @override
  List<FieldDef<_Omit, Object?>> get fields => [_kept];
}

/// Hand-rolled `required: true` + nullable `T` — impossible through the
/// factories, must fail the defense-in-depth guard.
final class _BrokenReq<S> extends FieldDef<S, String?> {
  _BrokenReq(super.owner, super.name) : super(required: true);

  @override
  Field toField() => Field.text(name, required: true);
}

/// A store listing a broken required+nullable descriptor.
final class _BadNull extends StoreDef<_BadNull> {
  _BadNull() : super(name: 'badnull', version: 1);

  @override
  List<FieldDef<_BadNull, Object?>> get fields =>
      [_BrokenReq<_BadNull>(this, 'oops')];
}

/// A store with one field whose name is chosen by the test.
final class _Reserved extends StoreDef<_Reserved> {
  _Reserved(this.badName) : super(name: 'reserved', version: 1);

  final String badName;

  @override
  List<FieldDef<_Reserved, Object?>> get fields => [f.text(badName)];
}

/// Index referencing a field that is not declared.
final class _BadIndex extends StoreDef<_BadIndex> {
  _BadIndex() : super(name: 'badindex', version: 1);

  late final _a = f.text('a');

  @override
  List<FieldDef<_BadIndex, Object?>> get fields => [_a];

  @override
  List<IndexSpec> get indexes => [
        const IndexSpec(['nope'])
      ];
}

/// Store used to exercise typed index and FTS helper forwarding.
final class _HelperStore extends StoreDef<_HelperStore> {
  _HelperStore() : super(name: 'helper', version: 1);

  late final _title = f.text('title');
  late final _priority = f.integer('priority');

  @override
  List<FieldDef<_HelperStore, Object?>> get fields => [_title, _priority];

  @override
  List<IndexSpec> get indexes => [
        indexSpec(<FieldDef<_HelperStore, Object?>>[_title, _priority],
            unique: true, scope: IndexScope.notArchived),
        indexSpec([]),
      ];

  @override
  FtsSpec? get fts => ftsSpec(
        [_title],
        fuzzy: true,
        normalize: const FtsNormalization(rules: {'é': 'e'}),
      );
}

/// FTS referencing a field that is not declared.
final class _BadFts extends StoreDef<_BadFts> {
  _BadFts() : super(name: 'badfts', version: 1);

  late final _a = f.text('a');

  @override
  List<FieldDef<_BadFts, Object?>> get fields => [_a];

  @override
  FtsSpec? get fts => const FtsSpec(['nope']);
}

/// Forwards every schema extra verbatim.
final class _Forward extends StoreDef<_Forward> {
  _Forward() : super(name: 'forward', version: 2);

  late final _a = f.text('a');
  late final _migration = StoreMigration(
    toVersion: 2,
    addedFields: [Field.text('b')],
  );
  late final _policy = ConflictPolicy(editsUnarchive: true);
  late final _documentMigrations = <int, DocumentMigration>{
    2: _docMigrate,
  };

  static Map<String, Object?> _docMigrate(Map<String, Object?> doc) =>
      {...doc, 'migrated': true};

  static List<String> _validator(Map<String, Object?> record) => const [];

  @override
  List<FieldDef<_Forward, Object?>> get fields => [_a];

  @override
  List<IndexSpec> get indexes => [
        indexSpec([_a])
      ];

  @override
  FtsSpec? get fts => ftsSpec([_a]);

  @override
  List<StoreMigration> get migrations => [_migration];

  @override
  ConflictPolicy? get conflictPolicy => _policy;

  @override
  Map<int, DocumentMigration> get documentMigrations => _documentMigrations;

  @override
  List<String> Function(Map<String, Object?> record)? get validator =>
      _validator;
}

// ---------------------------------------------------------------------------

void main() {
  final caps = SqliteCapabilities.forVersion('3.44.2');
  final probe = _Probe();

  // Descriptor → Field twins, per kind. Shared by the sqlType matrix
  // (case 16) and the JSON round-trip (case 15).
  final pairs = <(String, Field, Field)>[
    ('text', probe.f.text('t').toField(), Field.text('t')),
    (
      'text enc',
      probe.f.text('te', encrypted: true).toField(),
      Field.text('te', encrypted: true)
    ),
    (
      'text req',
      probe.f.text('tr').req().toField(),
      Field.text('tr', required: true)
    ),
    ('int', probe.f.integer('i').toField(), Field.int('i')),
    (
      'int enc',
      probe.f.integer('ie', encrypted: true).toField(),
      Field.int('ie', encrypted: true)
    ),
    ('real', probe.f.real('r').toField(), Field.real('r')),
    (
      'real enc',
      probe.f.real('re', encrypted: true).toField(),
      Field.real('re', encrypted: true)
    ),
    ('bool', probe.f.boolean('b').toField(), Field.bool('b')),
    ('date', probe.f.date('d').toField(), Field.date('d')),
    ('dateTime', probe.f.dateTime('dt').toField(), Field.date('dt')),
    (
      'enum',
      probe.f.enumOf('en', Role.values).toField(),
      Field.enumValue('en', ['admin', 'member', 'guest'])
    ),
    ('json', probe.f.json('j').toField(), Field.json('j')),
    (
      'json enc',
      probe.f.json('je', encrypted: true).toField(),
      Field.json('je', encrypted: true)
    ),
    (
      'jsonList',
      probe.f.jsonList<String>('jl').toField(),
      Field.jsonList('jl')
    ),
    (
      'jsonList enc',
      probe.f.jsonList<String>('jle', encrypted: true).toField(),
      Field.jsonList('jle', encrypted: true)
    ),
    (
      'ref',
      probe.f.ref('rf', to: 'users').toField(),
      Field.ref('rf', to: 'users')
    ),
    (
      'ref fk',
      probe.f.ref('rf2', to: 'users', enforceFk: true).toField(),
      Field.ref('rf2', to: 'users', enforceFk: true)
    ),
  ];

  group('descriptor -> Field parity', () {
    test('case 1: f.text is a Field.text twin (optional)', () {
      final TextFieldOpt<_Probe> t = probe.f.text('x');
      expect(t.required, isFalse);
      expect(t.toField().kind, FieldKind.text);
      expect(t.toField().required, isFalse);
      expect(t.toField().sqlType, 'TEXT');
      expect(t.toField().toJson(), Field.text('x').toJson());
      expect(t.decode('v'), 'v');
      expect(t.decode(null), isNull);
      expect(t.encode('v'), 'v');
    });

    test('case 2: .req() flips nullability to a required Field.text', () {
      final TextFieldReq<_Probe> r = probe.f.text('x').req();
      expect(r.required, isTrue);
      expect(r.toField().required, isTrue);
      expect(r.toField().toJson(), Field.text('x', required: true).toJson());
      final String s = r.decode('v'); // statically non-nullable
      expect(s, 'v');
    });

    test('case 3: uniqueWhenActive exists on text only', () {
      expect(
          probe.f.text('u', uniqueWhenActive: true).toField().uniqueWhenActive,
          isTrue);
      expect(probe.f.text('u2').toField().uniqueWhenActive, isFalse);
      expect(probe.f.integer('i2').toField().uniqueWhenActive, isFalse);
    });

    test('case 4: encrypted text stores as TEXT (ciphertext column)', () {
      final e = probe.f.text('e', encrypted: true);
      expect(e.toField().encrypted, isTrue);
      expect(e.toField().sqlType, 'TEXT');
      expect(e.toField().toJson(), Field.text('e', encrypted: true).toJson());
    });

    test('case 5: f.integer and .req() map to Field.int / INTEGER', () {
      final IntFieldOpt<_Probe> i = probe.f.integer('i');
      expect(i.toField().kind, FieldKind.int);
      expect(i.toField().sqlType, 'INTEGER');
      expect(i.toField().toJson(), Field.int('i').toJson());
      expect(i.decode(null), isNull);

      final IntFieldReq<_Probe> ir = probe.f.integer('i').req();
      expect(ir.required, isTrue);
      expect(ir.toField().toJson(), Field.int('i', required: true).toJson());
      final int v = ir.decode(42);
      expect(v, 42);
    });

    test('case 6: f.real maps to REAL; encrypted real becomes TEXT', () {
      expect(probe.f.real('r').toField().sqlType, 'REAL');
      final enc = probe.f.real('re', encrypted: true);
      expect(enc.toField().sqlType, 'TEXT');
      expect(enc.toField().encrypted, isTrue);
    });

    test('case 7: f.boolean maps to Field.bool (no encrypted parameter)', () {
      final BoolFieldOpt<_Probe> b = probe.f.boolean('b');
      expect(b.toField().kind, FieldKind.bool);
      expect(b.toField().toJson(), Field.bool('b').toJson());
      expect(b.decode(true), isTrue);
      // `f.boolean('x', encrypted: true)` does not compile — the parameter
      // does not exist (pinned by the §4.8 compile-fail harness in Phase 2).
    });

    test('case 8: f.date maps to Field.date with logical int', () {
      final DateFieldOpt<_Probe> d = probe.f.date('d');
      expect(d.toField().kind, FieldKind.date);
      expect(d.toField().sqlType, 'INTEGER');
      expect(d.toField().toJson(), Field.date('d').toJson());
      expect(d.decode(1788134400000), 1788134400000);
      expect(d.encode(1788134400000), 1788134400000);
      expect(d.decode(null), isNull);
      final DateFieldReq<_Probe> dr = probe.f.date('d').req();
      final int epoch = dr.decode(1788134400000);
      expect(epoch, 1788134400000);
    });

    test('case 9: f.dateTime maps to Field.date; codec is UTC-pinned', () {
      final DateTimeFieldOpt<_Probe> dt = probe.f.dateTime('due');
      expect(dt.toField().kind, FieldKind.date);
      expect(dt.toField().sqlType, 'INTEGER');
      expect(dt.toField().toJson(), Field.date('due').toJson());

      const epoch = 1751366400000;
      final decoded = dt.decode(epoch)!;
      expect(decoded, DateTime.fromMillisecondsSinceEpoch(epoch, isUtc: true));
      expect(decoded.isUtc, isTrue);
      expect(dt.decode(null), isNull);

      expect(dt.encode(DateTime.utc(2026, 9, 1)),
          DateTime.utc(2026, 9, 1).millisecondsSinceEpoch);
      // Encode pins UTC even for a local-zone input:
      final local = DateTime(2026, 9, 1, 12, 0, 0);
      expect(dt.encode(local), local.toUtc().millisecondsSinceEpoch);
      expect(dt.decode(dt.encode(local)!), local.toUtc());

      final DateTime d = probe.f.dateTime('due').req().decode(epoch);
      expect(d, DateTime.fromMillisecondsSinceEpoch(epoch, isUtc: true));
    });

    test('case 10: f.enumOf derives Field.enumValue from E.values', () {
      final fd = probe.f.enumOf('role', Role.values);
      expect(fd.toField().toJson(),
          Field.enumValue('role', ['admin', 'member', 'guest']).toJson());
      expect(fd.toField().enumValues, ['admin', 'member', 'guest']);
      expect(fd.decode('admin'), Role.admin);
      expect(fd.encode(Role.member), 'member');
      expect(fd.decode(null), isNull);
    });

    test('case 11: enum wire overrides flow to enumValues', () {
      final fd =
          probe.f.enumOf('role', Role.values, wire: {Role.admin: 'ADMIN'});
      expect(fd.toField().enumValues, ['ADMIN', 'member', 'guest']);
      expect(fd.decode('ADMIN'), Role.admin);
      expect(fd.decode('member'), Role.member);
      expect(fd.encode(Role.admin), 'ADMIN');
      expect(
        () => fd.decode('superuser'),
        throwsA(
            isA<ValidationException>().having((e) => e.field, 'field', 'role')),
      );
    });

    test('case 12: f.json maps to Field.json (required always false)', () {
      final JsonField<_Probe> j = probe.f.json('j');
      expect(j.required, isFalse);
      expect(j.toField().toJson(), Field.json('j').toJson());
      final map = {'a': 1};
      expect(identical(j.decode(map), map), isTrue);
      expect(j.decode(null), isNull);
      // There is no `required` parameter to pass — `Field.json` has none.
    });

    test('case 13: f.jsonList<T> maps to Field.jsonList', () {
      final JsonListField<_Probe, String> jl = probe.f.jsonList<String>('jl');
      expect(jl.toField().toJson(), Field.jsonList('jl').toJson());
      expect(jl.decode(['a', 'b']), ['a', 'b']);
      expect(jl.decode(null), isNull);
    });

    test('case 14: f.ref passes to/enforceFk through', () {
      final RefField<_Probe> r = probe.f.ref('owner', to: 'users');
      expect(r.toField().toJson(), Field.ref('owner', to: 'users').toJson());
      expect(r.toField().refTo, 'users');
      expect(r.toField().enforceFk, isFalse);
      final r2 = probe.f.ref('owner2', to: 'users', enforceFk: true);
      expect(r2.toField().enforceFk, isTrue);
      expect(r.decode('someid'), 'someid');
    });

    test('case 15: descriptor JSON round-trips equal to the hand-built twin',
        () {
      for (final (label, typed, raw) in pairs) {
        expect(Field.fromJson(typed.toJson()).toJson(), raw.toJson(),
            reason: label);
      }
    });

    test('case 16: sqlType matches Field.sqlType per kind x encrypted', () {
      for (final (label, typed, raw) in pairs) {
        expect(typed.sqlType, raw.sqlType, reason: label);
      }
    });
  });

  group('typed index and FTS helpers', () {
    test('index derives names and forwards options', () {
      final title = probe.f.text('title');
      final priority = probe.f.integer('priority');
      final typed = indexSpec<_Probe>(
        <FieldDef<_Probe, Object?>>[title, priority],
        unique: true,
        scope: IndexScope.notArchived,
      );
      final raw = const IndexSpec(
        ['title', 'priority'],
        unique: true,
        scope: IndexScope.notArchived,
      );
      expect(typed.columns, ['title', 'priority']);
      expect(typed.unique, isTrue);
      expect(typed.scope, IndexScope.notArchived);
      expect(typed.toJson(), raw.toJson());
      expect(typed.columns, isNot(contains('FieldDef')));
    });

    test('index supports empty lists and required descriptors', () {
      final title = probe.f.text('title').req();
      expect(indexSpec<_Probe>([title]).columns, ['title']);
      expect(indexSpec<_Probe>([]).columns, isEmpty);
      expect(indexSpec<_Probe>([]).toJson(), const IndexSpec([]).toJson());
    });

    test('ftsSpec derives names and forwards options', () {
      final title = probe.f.text('title');
      const normalize = FtsNormalization(rules: {'é': 'e'});
      final typed = ftsSpec<_Probe>(
        <FieldDef<_Probe, Object?>>[title],
        fuzzy: true,
        normalize: normalize,
      );
      final raw = const FtsSpec(
        ['title'],
        fuzzy: true,
        normalize: normalize,
      );
      expect(typed.fields, ['title']);
      expect(typed.fuzzy, isTrue);
      expect(typed.normalize, normalize);
      expect(typed.toJson(), raw.toJson());
    });

    test('helper-backed store schema equals hand-built raw twin', () {
      final typed = _HelperStore().schema;
      final raw = CollectionSchema<Object?>(
        name: 'helper',
        version: 1,
        fields: [Field.text('title'), Field.int('priority')],
        indexes: const [
          IndexSpec(['title', 'priority'],
              unique: true, scope: IndexScope.notArchived),
          IndexSpec([]),
        ],
        fts: const FtsSpec(
          ['title'],
          fuzzy: true,
          normalize: FtsNormalization(rules: {'é': 'e'}),
        ),
      );
      expect(typed.toJson(), raw.toJson());
    });
  });

  group('definition edge cases', () {
    test('case 17: single-value and many-value enums build valid value sets',
        () {
      expect(
          probe.f.enumOf('s', _Single.values).toField().enumValues, ['only']);
      final many = probe.f.enumOf('m', _Many.values).toField();
      expect(many.enumValues, [for (final v in _Many.values) v.name]);
      expect(many.enumValues!.length, 26);
    });

    test('case 18: partial wire override falls back to .name', () {
      final fd = probe.f.enumOf('r', Role.values, wire: {Role.guest: 'GUEST'});
      expect(fd.toField().enumValues, ['admin', 'member', 'GUEST']);
      expect(fd.decode('GUEST'), Role.guest);
      expect(fd.decode('admin'), Role.admin);
    });

    test('case 19: keyword-looking enum names use the literal name', () {
      expect(probe.f.enumOf('w', _Weird.values).toField().enumValues,
          ['group', 'order', 'select']);
    });

    test('case 20: a wire override to the empty string is accepted', () {
      final fd = probe.f.enumOf('r', Role.values, wire: {Role.admin: ''});
      expect(fd.toField().enumValues, ['', 'member', 'guest']);
      expect(fd.decode(''), Role.admin);
      expect(fd.encode(Role.admin), '');
    });

    test('enum values are snapshotted and wire names must be bijective', () {
      final values = <Role>[Role.admin, Role.member];
      final fd = probe.f.enumOf('stable', values);
      values
        ..clear()
        ..add(Role.guest);
      expect(fd.toField().enumValues, ['admin', 'member']);

      expect(
        () => probe.f.enumOf(
          'duplicateWire',
          Role.values,
          wire: {Role.admin: 'same', Role.member: 'same'},
        ),
        throwsStateError,
      );
      expect(
        () => probe.f.enumOf(
          'foreignWire',
          const [Role.admin],
          wire: const {Role.member: 'member'},
        ),
        throwsStateError,
      );
    });

    test('case 21: SQLite keyword field names are accepted', () {
      for (final kw in ['order', 'group', 'select']) {
        expect(() => Field.validateName(kw), returnsNormally);
        expect(probe.f.text(kw).toField().name, kw);
      }
    });

    test('case 22: unicode names accepted; whitespace/punctuation rejected',
        () {
      expect(() => Field.validateName('名前'), returnsNormally);
      expect(probe.f.text('名前').toField().name, '名前');
      expect(
        () => Field.validateName('has space'),
        throwsA(isA<SchemaRegistrationError>()),
      );
      expect(
        () => Field.validateName('x-y'),
        throwsA(isA<SchemaRegistrationError>()),
      );
    });

    test('case 23: reserved names pass the typed layer, rejected by the DDL',
        () {
      // The typed layer defers to the engine: construction and toField work,
      // DdlCompiler.compile rejects (see case 35 for the full matrix).
      expect(probe.f.text('id').toField().toJson(), Field.text('id').toJson());
      expect(probe.f.text('archived').toField().toJson(),
          Field.text('archived').toJson());
    });

    test('case 24: .req() exists only on the Opt variant', () {
      final opt = probe.f.text('x');
      final first = opt.req();
      // `first.req()` does not compile — the Req variant has no req() member
      // (pinned by the §4.8 compile-fail harness in Phase 2). Repeat calls
      // on the Opt return the same descriptor.
      expect(identical(opt.req(), first), isTrue);
      expect(first.required, isTrue);
    });

    test('case 25: date and dateTime coexist on different columns', () {
      final pair = _DuePair();
      expect(
          pair.schema.fields.map((f) => f.kind), everyElement(FieldKind.date));
      expect(
          () => _DueClash().schema,
          throwsA(isA<StateError>()
              .having((e) => e.message, 'message', contains('"due"'))));
    });

    test('case 26: a store with zero user fields builds a valid schema', () {
      final schema = _Probe().schema;
      expect(schema.name, 'probe');
      expect(schema.version, 1);
      expect(schema.fields, isEmpty);
    });

    test('case 27: 100 fields build without ordering issues', () {
      final wide = _Wide().schema;
      expect(wide.fields.length, 100);
      expect([for (final f in wide.fields) f.name],
          [for (var i = 0; i < 100; i++) 'c$i']);
    });
  });

  group('StoreDef assembly', () {
    test('case 28: schema name/version/order match the fields list', () {
      final schema = Tasks.instance.schema;
      expect(schema.name, 'tasks');
      expect(schema.version, 1);
      expect([for (final f in schema.fields) f.name],
          [for (final d in Tasks.instance.fields) d.name]);
      expect(schema.fields.length, 11);
    });

    test('case 29: schema.toJson equals the hand-built CollectionSchema', () {
      final handBuilt = CollectionSchema<Object?>(
        name: 'tasks',
        version: 1,
        fields: [
          Field.text('title', required: true),
          Field.enumValue('priority', ['low', 'normal', 'high', 'urgent']),
          Field.enumValue('role', ['admin', 'member', 'guest']),
          Field.bool('done'),
          Field.date('dueDay'),
          Field.date('dueAt'),
          Field.real('estimate'),
          Field.int('count'),
          Field.jsonList('tags'),
          Field.json('meta'),
          Field.ref('ownerId', to: 'users'),
        ],
        indexes: [
          const IndexSpec(['title'])
        ],
      );
      expect(Tasks.instance.schema.toJson(), handBuilt.toJson());
    });

    test('case 30: fields ordering is stable across repeated reads', () {
      final expected = [for (final d in Tasks.instance.fields) d.name];
      expect([for (final d in Tasks.instance.fields) d.name], expected);
      expect(
          identical(Tasks.instance.fields.first, Tasks.instance.fields.first),
          isTrue);
    });

    test('case 31: index override reaches schema verbatim', () {
      expect(Tasks.instance.schema.indexes.single.columns, ['title']);
      expect(Tasks.instance.schema.conflictPolicy, isA<ConflictPolicy>());
    });

    test('case 32: duplicate column name rejected with StateError', () {
      expect(
        () => _Dup().schema,
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', contains('"x"'))),
      );
    });

    test('case 33: foreign descriptor rejected naming store + field', () {
      final donor = _Borrower();
      // The descriptor's static type matches the borrower's S, but its
      // runtime owner is the donor — the verify() backstop fires.
      final shared = donor.f.text('shared');
      final borrower = _Borrower(shared);
      expect(
        () => borrower.schema,
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', contains('borrower'))
            .having((e) => e.message, 'message', contains('shared'))),
      );
    });

    test('case 34: required + nullable T fails the nullability guard', () {
      // Fires at descriptor construction (before verify() can see it)…
      expect(
        () => _BrokenReq<_Probe>(probe, 'oops'),
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', contains('nullable'))),
      );
      // …and therefore also through the schema/verify path.
      expect(
        () => _BadNull().schema,
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', contains('nullable'))),
      );
    });

    test('case 35: reserved names rejected through the DdlCompiler path', () {
      for (final reserved in ['id', 'archived', 'hidden', 'extra']) {
        expect(
          () => DdlCompiler(caps).compile(_Reserved(reserved).schema),
          throwsA(isA<SchemaRegistrationError>()),
          reason: reserved,
        );
      }
    });

    test('case 36: system descriptors are typed and outside fields', () {
      final FieldDef<Tasks, String> idField = Tasks.instance.id;
      final FieldDef<Tasks, bool> archivedField = Tasks.instance.archived;
      expect(idField.name, 'id');
      expect(archivedField.name, 'archived');
      expect(idField.decode('abc'), 'abc');
      expect(archivedField.decode(true), isTrue);
      final names = [for (final d in Tasks.instance.fields) d.name];
      expect(names, isNot(contains('id')));
      expect(names, isNot(contains('archived')));
      expect(() => idField.toField(), throwsStateError);
    });

    test('case 37: a field omitted from fields is caught at verify()', () {
      // Forcing the descriptor through the static accessor makes the
      // omission observable; schema/verify then names the missing field.
      final forgotten = _Omit.forgotten;
      expect(forgotten.name, 'forgotten');
      expect(
        () => _Omit.instance.schema,
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', contains('forgotten'))),
      );
      // Sanity: forcing a *registered* field first is fine.
      expect(Tasks.title.name, 'title');
      expect(Tasks.instance.schema.name, 'tasks');
    });

    test('case 38: schema is memoized (identical on repeat reads)', () {
      expect(identical(Tasks.instance.schema, Tasks.instance.schema), isTrue);
    });

    test('case 39: unknown FTS field surfaces the engine error', () {
      final store = _BadFts();
      expect(store.schema.fts!.fields, ['nope']);
      expect(
        () => DdlCompiler(caps).compile(store.schema),
        throwsA(isA<SchemaRegistrationError>().having(
            (e) => e.message, 'message', contains('not a declared field'))),
      );
    });

    test('case 39: unknown index field surfaces the engine registration error',
        () async {
      final schema = _BadIndex().schema; // raw IndexSpec remains supported
      expect(schema.indexes.single.columns, ['nope']);
      await expectLater(
        () => LocalPocket.open(path: ':memory:', stores: [schema]),
        throwsA(isA<SchemaRegistrationError>().having(
          (error) => error.message,
          'message',
          'Index column "nope" is not a declared field of store "badindex".',
        )),
      );
    });

    test(
        'case 40: migrations/documentMigrations/validator forwarded '
        'verbatim', () {
      final store = _Forward();
      final schema = store.schema;
      expect(schema.version, 2);
      expect(schema.migrations.single.toVersion, 2);
      expect(schema.documentMigrations, same(store.documentMigrations));
      expect(schema.validator, same(store.validator));
      expect(schema.conflictPolicy, same(store.conflictPolicy));
      expect(schema.fts!.toJson(), store.fts!.toJson());
      expect(schema.indexes.single.columns, ['a']);
      // The forwarded callbacks still behave:
      expect(schema.validator!({'a': 'x'}), isEmpty);
      expect(schema.documentMigrations[2]!({'a': 'x'}),
          {'a': 'x', 'migrated': true});
    });
  });
}
