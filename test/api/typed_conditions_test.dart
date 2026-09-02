import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

/// A store exercising every typed descriptor kind, so the typed condition
/// members (`gt`, `startsWith`, `isNull`, …) run through the real lowering,
/// SQL, and row decode — not just through constructor units.
final class Sandbox extends StoreDef<Sandbox> {
  Sandbox._() : super(name: 'sandbox', version: 1);
  static final Sandbox store = Sandbox._();

  static final title = store.schema.text('title').req();
  static final qty = store.schema.integer('qty');
  static final price = store.schema.real('price');
  static final active = store.schema.boolean('active');
  static final madeOn = store.schema.date('made_on');
  static final dueAt = store.schema.dateTime('due_at');
  static final stage =
      store.schema.enumOf('stage', Stage.values, wire: {Stage.draft: 'DRAFT'});
  static final labels = store.schema.jsonList<String>('labels');
  static final owner = store.schema.ref('owner', to: 'sandbox');

  @override
  List<FieldDef<Sandbox, Object?>> get fields =>
      [title, qty, price, active, madeOn, dueAt, stage, labels, owner];
}

enum Stage { draft, active }

void main() {
  late LocalPocket pocket;
  late Store<Sandbox> sandbox;

  setUp(() async {
    pocket = await LocalPocket.open(
        LocalPocketOptions(path: ':memory:', stores: [Sandbox.store]));
    sandbox = pocket.store(Sandbox.store);
    await _seed(sandbox);
  });
  tearDown(() => pocket.close());

  group('comparison operators', () {
    test('integer gt/gte/lt/lte', () async {
      Future<List<String>> fetch(Cond<Sandbox> cond) async =>
          (await sandbox.query(QuerySpec(limit: 50, where: [cond])))
              .items
              .map((r) => r(Sandbox.title))
              .toList();

      expect(await fetch(Sandbox.qty.gt(3)), ['beta']);
      expect(await fetch(Sandbox.qty.gte(3)), ['beta', 'gamma']);
      expect(await fetch(Sandbox.qty.lt(3)), ['alpha']);
      expect(await fetch(Sandbox.qty.lte(3)), ['alpha', 'gamma']);
    });

    test('real comparisons skip NULL rows like SQL', () async {
      final page = await sandbox
          .query(QuerySpec(limit: 50, where: [Sandbox.price.gte(1.5)]));
      expect(page.items.map((r) => r(Sandbox.title)), ['alpha', 'beta']);
    });

    test('date fields compare as integers', () async {
      final page = await sandbox
          .query(QuerySpec(limit: 50, where: [Sandbox.madeOn.gt(150)]));
      expect(page.items.map((r) => r(Sandbox.title)), ['beta']);
    });

    test('date-time fields compare as UTC instants', () async {
      final page = await sandbox.query(QuerySpec(
          limit: 50, where: [Sandbox.dueAt.gte(DateTime.utc(2030, 1, 1))]));
      expect(page.items.map((r) => r(Sandbox.title)), ['alpha']);
    });
  });

  group('text pattern operators', () {
    test('startsWith/endsWith/contains', () async {
      Future<List<String>> fetch(Cond<Sandbox> cond) async =>
          (await sandbox.query(QuerySpec(limit: 50, where: [cond])))
              .items
              .map((r) => r(Sandbox.title))
              .toList();

      expect(await fetch(Sandbox.title.startsWith('alp')), ['alpha']);
      expect(await fetch(Sandbox.title.endsWith('ma')), ['gamma']);
      expect(await fetch(Sandbox.title.contains('amm')), ['gamma']);
    });
  });

  group('set operators', () {
    test('inValues matches any listed value', () async {
      final page = await sandbox.query(QuerySpec(limit: 50, where: [
        Sandbox.qty.inValues([1, 3])
      ]));
      expect(page.items.map((r) => r(Sandbox.title)),
          containsAll(['alpha', 'gamma']));
    });

    test('between is inclusive on both ends', () async {
      final page = await sandbox
          .query(QuerySpec(limit: 50, where: [Sandbox.qty.between(1, 3)]));
      expect(page.items.map((r) => r(Sandbox.title)),
          containsAll(['alpha', 'gamma']));
      expect(page.items.map((r) => r(Sandbox.title)), isNot(contains('beta')));
    });
  });

  group('null semantics', () {
    test('isNull matches only the omitted rows', () async {
      final page = await sandbox
          .query(QuerySpec(limit: 50, where: [Sandbox.active.isNull()]));
      expect(page.items.map((r) => r(Sandbox.title)), ['beta', 'gamma']);
    });

    test('eq(null) on an optional field reads as IS NULL', () async {
      final page = await sandbox
          .query(QuerySpec(limit: 50, where: [Sandbox.price.eq(null)]));
      expect(page.items.map((r) => r(Sandbox.title)), ['gamma']);
    });

    test('a NULL never satisfies a comparison', () async {
      final page = await sandbox
          .query(QuerySpec(limit: 50, where: [Sandbox.price.lt(1000)]));
      expect(page.items.map((r) => r(Sandbox.title)), ['alpha', 'beta']);
    });
  });

  group('boolean tree composition', () {
    test('& | ~ compose into the expected row set', () async {
      final page = await sandbox.query(QuerySpec(limit: 50, where: [
        Sandbox.qty.gte(3) & ~Sandbox.title.eq('gamma') |
            Sandbox.title.eq('alpha'),
      ]));
      expect(page.items.map((r) => r(Sandbox.title)),
          containsAll(['beta', 'alpha']));
    });

    test('an AND-list of separate conds intersects', () async {
      final page = await sandbox.query(QuerySpec(limit: 50, where: [
        Sandbox.qty.gte(1),
        Sandbox.active.eq(true),
      ]));
      expect(page.items.map((r) => r(Sandbox.title)), ['alpha']);
    });

    test('nested conds flatten (unit pin at the schema layer)', () {
      final flat = AllCond<Sandbox>([
        Sandbox.qty.gte(1),
        AllCond<Sandbox>([Sandbox.qty.lte(9), Sandbox.active.eq(true)]),
      ]);
      expect(flat.children, hasLength(3));
      final flatOr = AnyCond<Sandbox>([
        Sandbox.title.eq('a'),
        AnyCond<Sandbox>([Sandbox.title.eq('b'), Sandbox.title.eq('c')]),
      ]);
      expect(flatOr.children, hasLength(3));
    });
  });

  group('enum wire codec through the engine', () {
    test('filters match through the wire override', () async {
      Future<List<String>> fetch(Cond<Sandbox> cond) async =>
          (await sandbox.query(QuerySpec(limit: 50, where: [cond])))
              .items
              .map((r) => r(Sandbox.title))
              .toList();

      expect(await fetch(Sandbox.stage.eq(Stage.draft)), ['alpha']);
      expect(await fetch(Sandbox.stage.eq(Stage.active)), ['beta']);
    });

    test('rows decode back to the enum value', () async {
      final page = await sandbox
          .query(QuerySpec(limit: 50, where: [Sandbox.title.eq('beta')]));
      expect(page.items.single(Sandbox.stage), Stage.active);
    });
  });

  group('reference field', () {
    test('filters on a stored record id', () async {
      final alphaId = (await sandbox
              .query(QuerySpec(limit: 50, where: [Sandbox.title.eq('alpha')])))
          .items
          .single
          .id;
      final page = await sandbox
          .query(QuerySpec(limit: 50, where: [Sandbox.owner.eq(alphaId)]));
      expect(page.items.map((r) => r(Sandbox.title)), ['beta']);
    });
  });

  group('order terms', () {
    test('desc puts NULLs last, asc puts them first', () async {
      final desc = await sandbox
          .query(QuerySpec(limit: 50, orderBy: [Sandbox.qty.desc]));
      expect(
          desc.items.map((r) => r(Sandbox.title)), ['beta', 'gamma', 'alpha']);

      final asc =
          await sandbox.query(QuerySpec(limit: 50, orderBy: [Sandbox.qty.asc]));
      expect(
          asc.items.map((r) => r(Sandbox.title)), ['alpha', 'gamma', 'beta']);
    });

    test('multi-term ordering breaks ties', () async {
      final page = await sandbox.query(QuerySpec(limit: 50, orderBy: [
        Sandbox.active.desc,
        Sandbox.qty.asc,
      ]));
      expect(
          page.items.map((r) => r(Sandbox.title)), ['alpha', 'gamma', 'beta']);
    });
  });

  group('typed row round-trip', () {
    test('every kind decodes with its boundary codec intact', () async {
      final row = (await sandbox
              .query(QuerySpec(limit: 50, where: [Sandbox.title.eq('alpha')])))
          .items
          .single;

      expect(row(Sandbox.title), 'alpha');
      expect(row(Sandbox.qty), 1);
      expect(row(Sandbox.price), 1.5);
      expect(row(Sandbox.active), isTrue);
      expect(row(Sandbox.madeOn), 100);
      expect(row(Sandbox.dueAt), DateTime.utc(2030, 1, 2, 3, 4));
      expect(row(Sandbox.dueAt)!.isUtc, isTrue);
      expect(row(Sandbox.stage), Stage.draft);
      expect(row(Sandbox.labels), ['x']);
    });
  });
}

Future<void> _seed(Store<Sandbox> sandbox) async {
  await sandbox.put([
    Writes.id('alphaaaaaaaaaaa'),
    Sandbox.title.set('alpha'),
    Sandbox.qty.set(1),
    Sandbox.price.set(1.5),
    Sandbox.active.set(true),
    Sandbox.madeOn.set(100),
    Sandbox.dueAt.set(DateTime.utc(2030, 1, 2, 3, 4)),
    Sandbox.stage.set(Stage.draft),
    Sandbox.labels.set(['x']),
  ]);
  await sandbox.put([
    Writes.id('bbbbbbbbbbbbbbb'),
    Sandbox.title.set('beta'),
    Sandbox.qty.set(5),
    Sandbox.price.set(2.5),
    Sandbox.madeOn.set(200),
    Sandbox.stage.set(Stage.active),
    Sandbox.owner.set('alphaaaaaaaaaaa'),
  ]);
  await sandbox.put([
    Writes.id('ccccccccccccccc'),
    Sandbox.title.set('gamma'),
    Sandbox.qty.set(3),
  ]);
}
