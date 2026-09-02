import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/fixtures/tasks_store.dart';

void main() {
  LocalPocketOptions options() =>
      LocalPocketOptions(path: ':memory:', stores: [Tasks.store]);

  group('typed record events', () {
    late LocalPocket db;

    setUp(() async => db = await LocalPocket.open(options()));
    tearDown(() => db.close());

    test('store events carry typed old/new rows, origin, and fields', () async {
      final tasks = db.store(Tasks.store);
      final events = <RecordChange<Tasks>>[];
      final sub = tasks.events.listen(events.add);
      addTearDown(sub.cancel);

      final createdRow = await tasks.put([Tasks.title.set('before')]);
      final id = createdRow.id;
      await tasks.patch(id, [Tasks.title.set('after')]);
      await Future<void>.delayed(Duration.zero);
      await Future<void>.delayed(Duration.zero);

      expect(events, hasLength(2));
      final createdEvent = events[0];
      expect(createdEvent.id, id);
      expect(createdEvent.action, ChangeAction.create);
      expect(createdEvent.origin, ChangeOrigin.local);
      expect(createdEvent.oldRecord, isNull);
      expect(createdEvent.newRecord!(Tasks.title), 'before');

      final updatedEvent = events[1];
      expect(updatedEvent.action, ChangeAction.update);
      expect(updatedEvent.oldRecord!(Tasks.title), 'before');
      expect(updatedEvent.newRecord!(Tasks.title), 'after');
      expect(updatedEvent.changedFields, contains('title'));
    });

    test('db.changes carries the full committed envelope', () async {
      final tasks = db.store(Tasks.store);
      final changes = <ChangeNotification>[];
      final sub = db.changes.listen(changes.add);
      addTearDown(sub.cancel);

      final id = (await tasks.put([Tasks.title.set('x')])).id;
      await Future<void>.delayed(Duration.zero);
      await Future<void>.delayed(Duration.zero);

      expect(changes, hasLength(1));
      expect(changes.first.storeName, 'tasks');
      expect(changes.first.id, id);
      expect(changes.first.ids, [id]);
      expect(changes.first.origin, ChangeOrigin.local);
      expect(changes.first.action, ChangeAction.create);
      expect(changes.first.newRecord, isNotNull);
      expect(changes.first.changedFields, contains('title'));
    });
  });

  group('notification surfaces', () {
    test('ChangeNotification prints store, id, action, and fields', () {
      const notification = ChangeNotification(
        storeName: 'tasks',
        id: 'r1',
        origin: ChangeOrigin.local,
        action: ChangeAction.update,
        changedFields: {'title'},
      );
      expect(notification.toString(),
          'ChangeNotification(tasks, r1, update, changed: {title})');
    });

    test('RecordChange prints the store type, id, and action', () {
      const change = RecordChange<Tasks>(
        id: 'r1',
        origin: ChangeOrigin.remote,
        action: ChangeAction.create,
      );
      expect(change.toString(), 'RecordChange<Tasks>(r1, create, changed: {})');
    });

    test('the ids convenience lists the single touched record', () {
      const notification = ChangeNotification(
        storeName: 'tasks',
        id: 'r2',
        origin: ChangeOrigin.resolution,
        action: ChangeAction.update,
      );
      expect(notification.ids, ['r2']);
    });
  });

  group('capabilities describe reality', () {
    test('the facade reports storage, durability, and journal mode', () async {
      final db = await LocalPocket.open(options());
      addTearDown(db.close);
      final caps = await db.capabilities;
      // Native runtime: the database lives in a file, the journal mode is
      // reported live by the engine, and durability is an honest blob-store
      // fact (false when no blob store is configured).
      expect(caps.storage, 'file');
      expect(caps.journal, isNotEmpty);
      expect(caps.durable, isA<bool>());
    });
  });

  group('one sync host per database', () {
    test('attaching twice returns the same host for the same options',
        () async {
      final db = await LocalPocket.open(options());
      addTearDown(db.close);
      final syncOptions = PocketBaseSyncOptions(
        baseUrl: Uri.parse('http://pb.test'),
        tokenProvider: _StaticTokens(),
      );
      final first = db.attachPocketBaseSync(syncOptions);
      final second = db.attachPocketBaseSync(syncOptions);
      expect(identical(first, second), isTrue);
    });

    test('attaching with different options is a hard error', () async {
      final db = await LocalPocket.open(options());
      addTearDown(db.close);
      db.attachPocketBaseSync(PocketBaseSyncOptions(
        baseUrl: Uri.parse('http://pb.test'),
        tokenProvider: _StaticTokens(),
      ));
      expect(
        () => db.attachPocketBaseSync(PocketBaseSyncOptions(
          baseUrl: Uri.parse('http://other.test'),
          tokenProvider: _StaticTokens(),
        )),
        throwsStateError,
      );
    });
  });
}

class _StaticTokens implements TokenProvider {
  @override
  Future<Token> currentToken() async => Token('token');

  @override
  Future<Token> refreshToken(Token current) async => Token('token');

  @override
  String? get identity => 'test-user';
}
