/// Phase-1 definition tests: descriptor → `Field` parity, definition edge
/// cases, and `StoreDef` assembly.
///
/// Descriptor-level cases use fresh local probe stores rather than
/// `Tasks.store.schema`: every descriptor created through a store's `schema.` is
/// recorded for the omitted-field check, so throwaway descriptors on the
/// canonical `Tasks` instance would make `Tasks.store.schema` fail
/// `verify()`.
library;

import 'package:localpocket/localpocket.dart';
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

/// Overrides the never-synced archive policy — the typed mirror of the
/// engine's `keepUnsyncedArchives` knob (plus `prefetchFiles`).
final class _KeepArchives extends StoreDef<_KeepArchives> {
  _KeepArchives() : super(name: 'keep', version: 1);

  @override
  bool get keepUnsyncedArchives => true;

  @override
  bool get prefetchFiles => true;

  @override
  List<FieldDef<_KeepArchives, Object?>> get fields => const [];
}

/// 100-field store for the wide-definition case.
final class _Wide extends StoreDef<_Wide> {
  _Wide() : super(name: 'wide', version: 1);

  late final List<FieldDef<_Wide, Object?>> _fs = [
    for (var i = 0; i < 100; i++) schema.integer('c$i'),
  ];

  @override
  List<FieldDef<_Wide, Object?>> get fields => _fs;
}

/// `date` and `dateTime` on different columns coexist.
final class _DuePair extends StoreDef<_DuePair> {
  _DuePair() : super(name: 'duepair', version: 1);

  late final _day = schema.date('due');
  late final _at = schema.dateTime('dueAt');

  @override
  List<FieldDef<_DuePair, Object?>> get fields => [_day, _at];
}

/// `date` and `dateTime` on the same column name → duplicate-column error.
final class _DueClash extends StoreDef<_DueClash> {
  _DueClash() : super(name: 'dueclash', version: 1);

  late final _day = schema.date('due');
  late final _at = schema.dateTime('due');

  @override
  List<FieldDef<_DueClash, Object?>> get fields => [_day, _at];
}

/// Duplicate column name.
final class _Dup extends StoreDef<_Dup> {
  _Dup() : super(name: 'dup', version: 1);

  late final _a = schema.text('x');
  late final _b = schema.integer('x');

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

  static final _Omit store = _Omit();

  late final _kept = schema.text('kept');
  late final _forgotten = schema.text('forgotten');

  static FieldDef<_Omit, String?> get forgotten => store._forgotten;

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
  List<FieldDef<_Reserved, Object?>> get fields => [schema.text(badName)];
}

/// Index referencing a field that is not declared.
final class _BadIndex extends StoreDef<_BadIndex> {
  _BadIndex() : super(name: 'badindex', version: 1);

  late final _a = schema.text('a');

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

  late final _title = schema.text('title');
  late final _priority = schema.integer('priority');

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

  late final _a = schema.text('a');

  @override
  List<FieldDef<_BadFts, Object?>> get fields => [_a];

  @override
  FtsSpec? get fts => const FtsSpec(['nope']);
}

/// Forwards every schema extra verbatim.
final class _Forward extends StoreDef<_Forward> {
  _Forward() : super(name: 'forward', version: 2);

  late final _a = schema.text('a');
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
    ('text', probe.schema.text('t').toField(), Field.text('t')),
    (
      'text enc',
      probe.schema.text('te', encrypted: true).toField(),
      Field.text('te', encrypted: true)
    ),
    (
      'text req',
      probe.schema.text('tr').req().toField(),
      Field.text('tr', required: true)
    ),
    ('int', probe.schema.integer('i').toField(), Field.int('i')),
    (
      'int enc',
      probe.schema.integer('ie', encrypted: true).toField(),
      Field.int('ie', encrypted: true)
    ),
    ('real', probe.schema.real('r').toField(), Field.real('r')),
    (
      'real enc',
      probe.schema.real('re', encrypted: true).toField(),
      Field.real('re', encrypted: true)
    ),
    ('bool', probe.schema.boolean('b').toField(), Field.bool('b')),
    ('date', probe.schema.date('d').toField(), Field.date('d')),
    ('dateTime', probe.schema.dateTime('dt').toField(), Field.date('dt')),
    (
      'enum',
      probe.schema.enumOf('en', Role.values).toField(),
      Field.enumValue('en', ['admin', 'member', 'guest'])
    ),
    ('json', probe.schema.json('j').toField(), Field.json('j')),
    (
      'json enc',
      probe.schema.json('je', encrypted: true).toField(),
      Field.json('je', encrypted: true)
    ),
    (
      'jsonList',
      probe.schema.jsonList<String>('jl').toField(),
      Field.jsonList('jl')
    ),
    (
      'jsonList enc',
      probe.schema.jsonList<String>('jle', encrypted: true).toField(),
      Field.jsonList('jle', encrypted: true)
    ),
    (
      'ref',
      probe.schema.ref('rf', to: 'users').toField(),
      Field.ref('rf', to: 'users')
    ),
    (
      'ref fk',
      probe.schema.ref('rf2', to: 'users', enforceFk: true).toField(),
      Field.ref('rf2', to: 'users', enforceFk: true)
    ),
  ];

  group('descriptor -> Field parity', () {
    test('case 1: schema.text is a Field.text twin (optional)', () {
      final TextFieldOpt<_Probe> t = probe.schema.text('x');
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
      final TextFieldReq<_Probe> r = probe.schema.text('x').req();
      expect(r.required, isTrue);
      expect(r.toField().required, isTrue);
      expect(r.toField().toJson(), Field.text('x', required: true).toJson());
      final String s = r.decode('v'); // statically non-nullable
      expect(s, 'v');
    });

    test('case 3: uniqueWhenActive exists on text only', () {
      expect(
          probe.schema
              .text('u', uniqueWhenActive: true)
              .toField()
              .uniqueWhenActive,
          isTrue);
      expect(probe.schema.text('u2').toField().uniqueWhenActive, isFalse);
      expect(probe.schema.integer('i2').toField().uniqueWhenActive, isFalse);
    });

    test('case 4: encrypted text stores as TEXT (ciphertext column)', () {
      final e = probe.schema.text('e', encrypted: true);
      expect(e.toField().encrypted, isTrue);
      expect(e.toField().sqlType, 'TEXT');
      expect(e.toField().toJson(), Field.text('e', encrypted: true).toJson());
    });

    test('case 5: schema.integer and .req() map to Field.int / INTEGER', () {
      final IntFieldOpt<_Probe> i = probe.schema.integer('i');
      expect(i.toField().kind, FieldKind.int);
      expect(i.toField().sqlType, 'INTEGER');
      expect(i.toField().toJson(), Field.int('i').toJson());
      expect(i.decode(null), isNull);

      final IntFieldReq<_Probe> ir = probe.schema.integer('i').req();
      expect(ir.required, isTrue);
      expect(ir.toField().toJson(), Field.int('i', required: true).toJson());
      final int v = ir.decode(42);
      expect(v, 42);
    });

    test('case 6: schema.real maps to REAL; encrypted real becomes TEXT', () {
      expect(probe.schema.real('r').toField().sqlType, 'REAL');
      final enc = probe.schema.real('re', encrypted: true);
      expect(enc.toField().sqlType, 'TEXT');
      expect(enc.toField().encrypted, isTrue);
    });

    test('case 7: schema.boolean maps to Field.bool (no encrypted parameter)',
        () {
      final BoolFieldOpt<_Probe> b = probe.schema.boolean('b');
      expect(b.toField().kind, FieldKind.bool);
      expect(b.toField().toJson(), Field.bool('b').toJson());
      expect(b.decode(true), isTrue);
      // `schema.boolean('x', encrypted: true)` does not compile — the parameter
      // does not exist (pinned by the compile-fail harness).
    });

    test('case 8: schema.date maps to Field.date with logical int', () {
      final DateFieldOpt<_Probe> d = probe.schema.date('d');
      expect(d.toField().kind, FieldKind.date);
      expect(d.toField().sqlType, 'INTEGER');
      expect(d.toField().toJson(), Field.date('d').toJson());
      expect(d.decode(1788134400000), 1788134400000);
      expect(d.encode(1788134400000), 1788134400000);
      expect(d.decode(null), isNull);
      final DateFieldReq<_Probe> dr = probe.schema.date('d').req();
      final int epoch = dr.decode(1788134400000);
      expect(epoch, 1788134400000);
    });

    test('case 9: schema.dateTime maps to Field.date; codec is UTC-pinned', () {
      final DateTimeFieldOpt<_Probe> dt = probe.schema.dateTime('due');
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

      final DateTime d = probe.schema.dateTime('due').req().decode(epoch);
      expect(d, DateTime.fromMillisecondsSinceEpoch(epoch, isUtc: true));
    });

    test('case 10: schema.enumOf derives Field.enumValue from E.values', () {
      final fd = probe.schema.enumOf('role', Role.values);
      expect(fd.toField().toJson(),
          Field.enumValue('role', ['admin', 'member', 'guest']).toJson());
      expect(fd.toField().enumValues, ['admin', 'member', 'guest']);
      expect(fd.decode('admin'), Role.admin);
      expect(fd.encode(Role.member), 'member');
      expect(fd.decode(null), isNull);
    });

    test('case 11: enum wire overrides flow to enumValues', () {
      final fd =
          probe.schema.enumOf('role', Role.values, wire: {Role.admin: 'ADMIN'});
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

    test('case 12: schema.json maps to Field.json (required always false)', () {
      final JsonField<_Probe> j = probe.schema.json('j');
      expect(j.required, isFalse);
      expect(j.toField().toJson(), Field.json('j').toJson());
      final map = {'a': 1};
      expect(identical(j.decode(map), map), isTrue);
      expect(j.decode(null), isNull);
      // There is no `required` parameter to pass — `Field.json` has none.
    });

    test('case 13: schema.jsonList<T> maps to Field.jsonList', () {
      final JsonListField<_Probe, String> jl =
          probe.schema.jsonList<String>('jl');
      expect(jl.toField().toJson(), Field.jsonList('jl').toJson());
      expect(jl.decode(['a', 'b']), ['a', 'b']);
      expect(jl.decode(null), isNull);
    });

    test('case 14: schema.ref passes to/enforceFk through', () {
      final RefField<_Probe> r = probe.schema.ref('owner', to: 'users');
      expect(r.toField().toJson(), Field.ref('owner', to: 'users').toJson());
      expect(r.toField().refTo, 'users');
      expect(r.toField().enforceFk, isFalse);
      final r2 = probe.schema.ref('owner2', to: 'users', enforceFk: true);
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
      final title = probe.schema.text('title');
      final priority = probe.schema.integer('priority');
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
      final title = probe.schema.text('title').req();
      expect(indexSpec<_Probe>([title]).columns, ['title']);
      expect(indexSpec<_Probe>([]).columns, isEmpty);
      expect(indexSpec<_Probe>([]).toJson(), const IndexSpec([]).toJson());
    });

    test('ftsSpec derives names and forwards options', () {
      final title = probe.schema.text('title');
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
      final typed = _HelperStore().collectionSchema;
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
      expect(probe.schema.enumOf('s', _Single.values).toField().enumValues,
          ['only']);
      final many = probe.schema.enumOf('m', _Many.values).toField();
      expect(many.enumValues, [for (final v in _Many.values) v.name]);
      expect(many.enumValues!.length, 26);
    });

    test('case 18: partial wire override falls back to .name', () {
      final fd =
          probe.schema.enumOf('r', Role.values, wire: {Role.guest: 'GUEST'});
      expect(fd.toField().enumValues, ['admin', 'member', 'GUEST']);
      expect(fd.decode('GUEST'), Role.guest);
      expect(fd.decode('admin'), Role.admin);
    });

    test('case 19: keyword-looking enum names use the literal name', () {
      expect(probe.schema.enumOf('w', _Weird.values).toField().enumValues,
          ['group', 'order', 'select']);
    });

    test('case 20: a wire override to the empty string is accepted', () {
      final fd = probe.schema.enumOf('r', Role.values, wire: {Role.admin: ''});
      expect(fd.toField().enumValues, ['', 'member', 'guest']);
      expect(fd.decode(''), Role.admin);
      expect(fd.encode(Role.admin), '');
    });

    test('enum values are snapshotted and wire names must be bijective', () {
      final values = <Role>[Role.admin, Role.member];
      final fd = probe.schema.enumOf('stable', values);
      values
        ..clear()
        ..add(Role.guest);
      expect(fd.toField().enumValues, ['admin', 'member']);

      expect(
        () => probe.schema.enumOf(
          'duplicateWire',
          Role.values,
          wire: {Role.admin: 'same', Role.member: 'same'},
        ),
        throwsStateError,
      );
      expect(
        () => probe.schema.enumOf(
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
        expect(probe.schema.text(kw).toField().name, kw);
      }
    });

    test('case 22: unicode names accepted; whitespace/punctuation rejected',
        () {
      expect(() => Field.validateName('名前'), returnsNormally);
      expect(probe.schema.text('名前').toField().name, '名前');
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
      expect(probe.schema.text('id').toField().toJson(),
          Field.text('id').toJson());
      expect(probe.schema.text('archived').toField().toJson(),
          Field.text('archived').toJson());
    });

    test('case 24: .req() exists only on the Opt variant', () {
      final opt = probe.schema.text('x');
      final first = opt.req();
      // `first.req()` does not compile — the Req variant has no req() member
      // (pinned by the compile-fail harness). Repeat calls
      // on the Opt return the same descriptor.
      expect(identical(opt.req(), first), isTrue);
      expect(first.required, isTrue);
    });

    test('case 25: date and dateTime coexist on different columns', () {
      final pair = _DuePair();
      expect(pair.collectionSchema.fields.map((f) => f.kind),
          everyElement(FieldKind.date));
      expect(
          () => _DueClash().collectionSchema,
          throwsA(isA<StateError>()
              .having((e) => e.message, 'message', contains('"due"'))));
    });

    test('case 26: a store with zero user fields builds a valid schema', () {
      final schema = _Probe().collectionSchema;
      expect(schema.name, 'probe');
      expect(schema.version, 1);
      expect(schema.fields, isEmpty);
    });

    test('case 27: 100 fields build without ordering issues', () {
      final wide = _Wide().collectionSchema;
      expect(wide.fields.length, 100);
      expect([for (final f in wide.fields) f.name],
          [for (var i = 0; i < 100; i++) 'c$i']);
    });
  });

  group('StoreDef assembly', () {
    test('case 28: schema name/version/order match the fields list', () {
      final schema = Tasks.store.collectionSchema;
      expect(schema.name, 'tasks');
      expect(schema.version, 1);
      expect([for (final f in schema.fields) f.name],
          [for (final d in Tasks.store.fields) d.name]);
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
      expect(Tasks.store.collectionSchema.toJson(), handBuilt.toJson());
    });

    test('case 30: fields ordering is stable across repeated reads', () {
      final expected = [for (final d in Tasks.store.fields) d.name];
      expect([for (final d in Tasks.store.fields) d.name], expected);
      expect(identical(Tasks.store.fields.first, Tasks.store.fields.first),
          isTrue);
    });

    test('case 31: index override reaches schema verbatim', () {
      expect(Tasks.store.collectionSchema.indexes.single.columns, ['title']);
      expect(
          Tasks.store.collectionSchema.conflictPolicy, isA<ConflictPolicy>());
    });

    test('case 31b: schema-extra overrides reach the schema', () {
      final keep = _KeepArchives().collectionSchema;
      expect(keep.keepUnsyncedArchives, isTrue);
      expect(keep.prefetchFiles, isTrue);
      expect(keep.toJson()['keepUnsyncedArchives'], isTrue);
      expect(keep.toJson()['prefetchFiles'], isTrue);
      // Both defaults stay off, matching the engine defaults:
      expect(Tasks.store.collectionSchema.keepUnsyncedArchives, isFalse);
      expect(Tasks.store.collectionSchema.prefetchFiles, isFalse);
    });

    test('case 32: duplicate column name rejected with StateError', () {
      expect(
        () => _Dup().collectionSchema,
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', contains('"x"'))),
      );
    });

    test('case 33: foreign descriptor rejected naming store + field', () {
      final donor = _Borrower();
      // The descriptor's static type matches the borrower's S, but its
      // runtime owner is the donor — the verify() backstop fires.
      final shared = donor.schema.text('shared');
      final borrower = _Borrower(shared);
      expect(
        () => borrower.collectionSchema,
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
        () => _BadNull().collectionSchema,
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', contains('nullable'))),
      );
    });

    test('case 35: reserved names rejected through the DdlCompiler path', () {
      for (final reserved in ['id', 'archived', 'hidden', 'extra']) {
        expect(
          () => DdlCompiler(caps).compile(_Reserved(reserved).collectionSchema),
          throwsA(isA<SchemaRegistrationError>()),
          reason: reserved,
        );
      }
    });

    test('case 36: system descriptors are typed and outside fields', () {
      final FieldDef<Tasks, String> idField = Tasks.store.id;
      final FieldDef<Tasks, bool> archivedField = Tasks.store.archived;
      expect(idField.name, 'id');
      expect(archivedField.name, 'archived');
      expect(idField.decode('abc'), 'abc');
      expect(archivedField.decode(true), isTrue);
      final names = [for (final d in Tasks.store.fields) d.name];
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
        () => _Omit.store.collectionSchema,
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', contains('forgotten'))),
      );
      // Sanity: forcing a *registered* field first is fine.
      expect(Tasks.title.name, 'title');
      expect(Tasks.store.collectionSchema.name, 'tasks');
    });

    test('case 38: schema is memoized (identical on repeat reads)', () {
      expect(
          identical(Tasks.store.collectionSchema, Tasks.store.collectionSchema),
          isTrue);
    });

    test('case 39: unknown FTS field surfaces the engine error', () {
      final store = _BadFts();
      expect(store.collectionSchema.fts!.fields, ['nope']);
      expect(
        () => DdlCompiler(caps).compile(store.collectionSchema),
        throwsA(isA<SchemaRegistrationError>().having(
            (e) => e.message, 'message', contains('not a declared field'))),
      );
    });

    test('case 39: unknown index field surfaces the engine registration error',
        () async {
      final schema =
          _BadIndex().collectionSchema; // raw IndexSpec remains supported
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
      final schema = store.collectionSchema;
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

  group('required-variant descriptors and boundary decode edges', () {
    test('required real/bool/date twins build required Fields and round-trip',
        () {
      final RealFieldReq<_Probe> r = probe.schema.real('r').req();
      expect(r.required, isTrue);
      expect(r.toField().toJson(), Field.real('r', required: true).toJson());
      expect(r.decode(1.5), 1.5);
      expect(r.encode(1.5), 1.5);

      final BoolFieldReq<_Probe> b = probe.schema.boolean('b').req();
      expect(b.required, isTrue);
      expect(b.toField().toJson(), Field.bool('b', required: true).toJson());
      expect(b.decode(true), isTrue);
      expect(b.encode(false), isFalse);

      final DateFieldReq<_Probe> d = probe.schema.date('d').req();
      expect(d.toField().toJson(), Field.date('d', required: true).toJson());
    });

    test(
        'required dateTime decodes/encodes UTC-pinned and builds a required '
        'Field', () {
      final DateTimeFieldReq<_Probe> dt = probe.schema.dateTime('due').req();
      expect(dt.toField().toJson(), Field.date('due', required: true).toJson());
      const epoch = 1751366400000;
      expect(dt.decode(epoch),
          DateTime.fromMillisecondsSinceEpoch(epoch, isUtc: true));
      // A non-int stored value is a typed validation error naming the field.
      expect(
        () => dt.decode('not-an-int'),
        throwsA(
            isA<ValidationException>().having((e) => e.field, 'field', 'due')),
      );
      expect(dt.encode(DateTime.utc(2026, 9, 1)),
          DateTime.utc(2026, 9, 1).millisecondsSinceEpoch);
    });

    test('required enum decodes non-nullably and builds a required Field', () {
      final EnumFieldReq<_Probe, Role> req =
          probe.schema.enumOf('role', Role.values).req();
      expect(req.required, isTrue);
      expect(
          req.toField().toJson(),
          Field.enumValue('role', ['admin', 'member', 'guest'], required: true)
              .toJson());
      expect(req.decode('admin'), Role.admin);
      expect(req.encode(Role.member), 'member');
      // A null stored value on a required enum is a typed error.
      expect(
        () => req.decode(null),
        throwsA(isA<ValidationException>()
            .having((e) => e.field, 'field', 'role')
            .having((e) => e.message, 'message', contains('required'))),
      );
    });

    test('enum decode of a non-string stored value fails naming the field', () {
      final fd = probe.schema.enumOf('role', Role.values);
      expect(
        () => fd.decode(42),
        throwsA(isA<ValidationException>()
            .having((e) => e.field, 'field', 'role')
            .having((e) => e.message, 'message', contains('not a string'))),
      );
    });

    test('enumOf rejects duplicate values in the value list', () {
      expect(
        () => probe.schema.enumOf('dup', [Role.admin, Role.admin, Role.guest]),
        throwsA(isA<StateError>()
            .having((e) => e.message, 'message', contains('duplicate values'))),
      );
    });

    test('jsonList decode rejects a non-list and a mis-typed element', () {
      final JsonListField<_Probe, String> jl =
          probe.schema.jsonList<String>('jl');
      expect(
        () => jl.decode('not-a-list'),
        throwsA(isA<ValidationException>()
            .having((e) => e.field, 'field', 'jl')
            .having((e) => e.message, 'message', contains('JSON array'))),
      );
      // A well-formed list with an off-contract element fails loudly on the
      // per-element cast rather than silently coercing.
      expect(() => jl.decode(['ok', 42]), throwsA(isA<TypeError>()));
      expect(jl.decode(['ok', 'also-ok']), ['ok', 'also-ok']);
    });

    test('descriptor toString names the generic type and the field', () {
      final text = probe.schema.text('title');
      final rendered = text.toString();
      expect(rendered, contains('FieldDef'));
      expect(rendered, contains('"title"'));
    });
  });
}
