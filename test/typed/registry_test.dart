/// Reference-identity registry tests (plan §4.2, cases 41–49): direct
/// `TypedStoreRegistry` unit tests plus the `db.store`/`tx.store` wiring.
library;

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import 'support/tasks.dart';
import 'support/users.dart';

/// A different definition instance that happens to use the name `tasks` —
/// the registry's reference-identity backstop must reject it.
final class _Imposter extends StoreDef<_Imposter> {
  _Imposter() : super(name: 'tasks', version: 1);

  @override
  List<FieldDef<_Imposter, Object?>> get fields => const [];
}

/// A second, unrelated store.
final class _Users extends StoreDef<_Users> {
  _Users() : super(name: 'users', version: 1);

  @override
  List<FieldDef<_Users, Object?>> get fields => const [];
}

final class _Missing extends StoreDef<_Missing> {
  _Missing() : super(name: 'missing', version: 1);

  @override
  List<FieldDef<_Missing, Object?>> get fields => const [];
}

final class _WrongTasks extends StoreDef<_WrongTasks> {
  _WrongTasks() : super(name: 'tasks', version: 1);

  late final _different = schema.integer('different');

  @override
  List<FieldDef<_WrongTasks, Object?>> get fields => [_different];
}

void main() {
  group('TypedStoreRegistry', () {
    test('first bind stores the instance and returns it (case 41)', () {
      final registry = TypedStoreRegistry();
      final bound = registry.bind(Tasks.store);
      expect(identical(bound, Tasks.store), isTrue);
    });

    test('re-binding the same instance is idempotent (case 42)', () {
      final registry = TypedStoreRegistry();
      registry.bind(Tasks.store);
      expect(identical(registry.bind(Tasks.store), Tasks.store), isTrue);
    });

    test('same name + non-identical instance throws mismatch (case 43)', () {
      final registry = TypedStoreRegistry();
      registry.bind(Tasks.store);
      final imposter = _Imposter();
      expect(
        () => registry.bind(imposter),
        throwsA(isA<TypedStoreMismatchError>()
            .having((e) => e.message, 'message', contains('tasks'))),
      );
      // A failed bind does not disturb the canonical binding:
      expect(identical(registry.bind(Tasks.store), Tasks.store), isTrue);
    });

    test(
        'a hand-rolled second definition is rejected by the registry '
        '(case 44)', () {
      // _Imposter bypasses the private-constructor convention entirely —
      // the registry, not the convention, is the enforcement point.
      final registry = TypedStoreRegistry();
      registry.bind(Tasks.store);
      expect(() => registry.bind(_Imposter()),
          throwsA(isA<TypedStoreMismatchError>()));
      expect(() => registry.bind(_Imposter()),
          throwsA(isA<TypedStoreMismatchError>()));
    });

    test('two distinct stores bind independently (case 45)', () {
      final registry = TypedStoreRegistry();
      final tasks = registry.bind(Tasks.store);
      final users = registry.bind(_Users());
      expect(identical(tasks, Tasks.store), isTrue);
      expect(users.name, 'users');
      // Both remain reachable through their canonical instances:
      expect(identical(registry.bind(Tasks.store), Tasks.store), isTrue);
      expect(identical(registry.bind(users), users), isTrue);
    });

    test(
        'concurrent first-binds both succeed with no double-bind race '
        '(case 46)', () async {
      final registry = TypedStoreRegistry();
      final results = await Future.wait([
        Future<Tasks>(() => registry.bind(Tasks.store)),
        Future<Tasks>(() => registry.bind(Tasks.store)),
      ]);
      expect(results[0], same(Tasks.store));
      expect(results[1], same(Tasks.store));
      // And a non-identical same-name bind still fails afterwards:
      expect(() => registry.bind(_Imposter()),
          throwsA(isA<TypedStoreMismatchError>()));
    });
  });

  group('db.store / tx.store wiring', () {
    Future<LocalPocket> open() => LocalPocket.open(
        path: ':memory:',
        stores: [Tasks.store.collectionSchema, Users.store.collectionSchema]);

    test('case 41: db.store returns a handle whose def is the instance',
        () async {
      final db = await open();
      addTearDown(db.close);
      final handle = db.store(Tasks.store);
      expect(identical(handle.def, Tasks.store), isTrue);
      // Re-binding the same instance is idempotent:
      expect(identical(db.store(Tasks.store).def, Tasks.store), isTrue);
    });

    test('case 43/44: db.store rejects a non-identical same-name definition',
        () async {
      final db = await open();
      addTearDown(db.close);
      db.store(Tasks.store);
      expect(
          () => db.store(_Imposter()), throwsA(isA<TypedStoreMismatchError>()));
      expect(identical(db.store(Tasks.store).def, Tasks.store), isTrue);
    });

    test('case 45: two distinct stores bind independently through db.store',
        () async {
      final db = await open();
      addTearDown(db.close);
      expect(identical(db.store(Tasks.store).def, Tasks.store), isTrue);
      expect(identical(db.store(Users.store).def, Users.store), isTrue);
    });

    test('typed definition must match the registered engine schema', () async {
      final db = await open();
      addTearDown(db.close);
      expect(
        () => db.store(_WrongTasks()),
        throwsA(isA<TypedStoreMismatchError>()
            .having((e) => e.message, 'message', contains('registered'))),
      );
      expect(identical(db.store(Tasks.store).def, Tasks.store), isTrue);
    });

    test('failed missing-store lookup does not poison the registry', () async {
      final db = await open();
      addTearDown(db.close);
      final missing = _Missing();
      expect(() => db.store(missing), throwsStateError);
      await db.registerStore(missing.collectionSchema);
      expect(identical(db.store(missing).def, missing), isTrue);
    });

    test(
        'case 46: concurrent first-binds through db.store have no '
        'double-bind race', () async {
      final db = await open();
      addTearDown(db.close);
      final handles = await Future.wait([
        Future<TypedCollection<Tasks>>(() => db.store(Tasks.store)),
        Future<TypedCollection<Tasks>>(() => db.store(Tasks.store)),
      ]);
      expect(identical(handles[0].def, Tasks.store), isTrue);
      expect(identical(handles[1].def, Tasks.store), isTrue);
      expect(
          () => db.store(_Imposter()), throwsA(isA<TypedStoreMismatchError>()));
    });

    test(
        'case 47: binding after close surfaces the engine closed error, '
        'not a registry inconsistency', () async {
      final db = await open();
      db.store(Tasks.store);
      await db.close();
      // The registry is untouched by close: binding is still consistent…
      expect(() => db.store(Tasks.store), returnsNormally);
      // …and operations surface the same error as the raw path.
      Object? rawError;
      try {
        await db.collection('tasks').get('regcase47000001');
      } catch (e) {
        rawError = e;
      }
      Object? typedError;
      try {
        await db.store(Tasks.store).get('regcase47000001');
      } catch (e) {
        typedError = e;
      }
      expect(rawError, isNotNull);
      expect(typedError.runtimeType, rawError.runtimeType);
    });

    test('case 48: tx.store binds against the same registry as db.store',
        () async {
      final db = await open();
      addTearDown(db.close);
      db.store(Tasks.store);
      await db.transaction((tx) async {
        final handle = tx.store(Tasks.store);
        expect(identical(handle.def, Tasks.store), isTrue);
        // A tx can never shadow the canonical instance:
        expect(() => tx.store(_Imposter()),
            throwsA(isA<TypedStoreMismatchError>()));
      });
      expect(identical(db.store(Tasks.store).def, Tasks.store), isTrue);
    });

    test('case 49: two independent LocalPocket opens bind independently',
        () async {
      final a = await open();
      addTearDown(a.close);
      final b = await open();
      addTearDown(b.close);
      expect(identical(a.store(Tasks.store).def, Tasks.store), isTrue);
      expect(identical(b.store(Tasks.store).def, Tasks.store), isTrue);
    });
  });
}
