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
      expect(changes.first.newRecord, isA<Row<Tasks>>());
      final newRecord = changes.first.newRecord;
      if (newRecord is Row<Tasks>) {
        expect(newRecord(Tasks.title), 'x');
      }
      expect(changes.first.changedFields, contains('title'));
    });

    test('db.changes supports pattern matching on oldRecord and newRecord',
        () async {
      final tasks = db.store(Tasks.store);
      final changes = <ChangeNotification>[];
      final sub = db.changes.listen(changes.add);
      addTearDown(sub.cancel);

      final row = await tasks.put([Tasks.title.set('initial')]);
      await tasks.patch(row.id, [Tasks.title.set('updated')]);
      await tasks.purge(row.id);
      await Future<void>.delayed(Duration.zero);
      await Future<void>.delayed(Duration.zero);

      expect(changes, hasLength(3));

      // 1. Create: oldRecord is null, newRecord is Row<Tasks>
      final createEvent = changes[0];
      expect(createEvent.oldRecord, isNull);
      expect(createEvent.newRecord is Row<Tasks>, isTrue);
      final createdTitle = switch (createEvent.newRecord) {
        final Row<Tasks> task => task(Tasks.title),
        _ => null,
      };
      expect(createdTitle, 'initial');

      // 2. Update: both oldRecord and newRecord are Row<Tasks>
      final updateEvent = changes[1];
      expect(updateEvent.oldRecord is Row<Tasks>, isTrue);
      expect(updateEvent.newRecord is Row<Tasks>, isTrue);
      final titleTransition = (
        switch (updateEvent.oldRecord) {
          final Row<Tasks> task => task(Tasks.title),
          _ => null,
        },
        switch (updateEvent.newRecord) {
          final Row<Tasks> task => task(Tasks.title),
          _ => null,
        },
      );
      expect(titleTransition, ('initial', 'updated'));

      // 3. Purge: oldRecord is Row<Tasks>, newRecord is null
      final purgeEvent = changes[2];
      expect(purgeEvent.newRecord, isNull);
      expect(purgeEvent.oldRecord is Row<Tasks>, isTrue);
      if (purgeEvent.oldRecord is Row<Tasks>) {
        final purgedTask = purgeEvent.oldRecord as Row<Tasks>;
        expect(purgedTask(Tasks.title), 'updated');
      }
    });

    test('store.changes carries decoded typed Row snapshots', () async {
      final tasks = db.store(Tasks.store);
      final storeChanges = <ChangeNotification>[];
      final sub = tasks.changes.listen(storeChanges.add);
      addTearDown(sub.cancel);

      final row = await tasks.put([Tasks.title.set('store_event')]);
      await tasks.patch(row.id, [Tasks.title.set('store_patched')]);
      await Future<void>.delayed(Duration.zero);
      await Future<void>.delayed(Duration.zero);

      expect(storeChanges, hasLength(2));
      expect(storeChanges[0].newRecord, isA<Row<Tasks>>());
      if (storeChanges[0].newRecord is Row<Tasks>) {
        final r = storeChanges[0].newRecord as Row<Tasks>;
        expect(r(Tasks.title), 'store_event');
      }

      expect(storeChanges[1].oldRecord, isA<Row<Tasks>>());
      expect(storeChanges[1].newRecord, isA<Row<Tasks>>());
      if (storeChanges[1].oldRecord is Row<Tasks> &&
          storeChanges[1].newRecord is Row<Tasks>) {
        final oldR = storeChanges[1].oldRecord as Row<Tasks>;
        final newR = storeChanges[1].newRecord as Row<Tasks>;
        expect(oldR(Tasks.title), 'store_event');
        expect(newR(Tasks.title), 'store_patched');
      }
    });

    test(
        'pattern matching discriminates between different stores on db.changes',
        () async {
      final multiDb = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Tasks.store, _Notes.store],
      ));
      addTearDown(multiDb.close);

      final logged = <String>[];
      final sub = multiDb.changes.listen((change) {
        switch (change.newRecord) {
          case final Row<Tasks> task:
            logged.add('task:${task(Tasks.title)}');
          case final Row<_Notes> note:
            logged.add('note:${note(_Notes.body)}');
          case null:
            logged.add('deleted');
        }
      });
      addTearDown(sub.cancel);

      await multiDb.store(Tasks.store).put([Tasks.title.set('Task 1')]);
      await multiDb.store(_Notes.store).put([_Notes.body.set('Note 1')]);
      await Future<void>.delayed(Duration.zero);
      await Future<void>.delayed(Duration.zero);

      expect(logged, ['task:Task 1', 'note:Note 1']);
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

final class _Notes extends StoreDef<_Notes> {
  _Notes._() : super(name: 'notes', version: 1);
  static final _Notes store = _Notes._();

  static final body = store.schema.text('body').req();

  @override
  List<FieldDef<_Notes, Object?>> get fields => [body];
}
