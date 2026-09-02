import 'dart:convert';

import 'package:localpocket/src/kernel/change_bus.dart';
import 'package:localpocket/src/kernel/codec.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/sync/merge.dart';
import 'package:test/test.dart';

import '../../../support/engine_helpers.dart';

void main() {
  final tasksSchema = CollectionSchema<Object?>(
    name: 'tasks',
    version: 1,
    keepUnsyncedArchives: true,
    fields: [
      Field.text('title', required: true),
      Field.bool('done'),
      Field.text('assignedTo'),
      Field.int('priority'),
    ],
  );

  group('Remote & Sync Hooks', () {
    test('pulling new remote record emits ChangeOrigin.remote with ChangeAction.create',
        () async {
      final h = await EngineHarness.create(stores: [tasksSchema]);
      addTearDown(h.close);

      final events = <RecordChangeEvent>[];
      final sub = h.pocket.collection('tasks').events.listen(events.add);

      // Seed a record in mock backend
      final recordId = h.mock.seed(
        store: 'tasks',
        data: {'title': 'Server Task', 'done': false, 'priority': 1},
      );

      await h.engine.syncNow();
      await Future<void>.delayed(Duration.zero);

      expect(events, hasLength(1));
      final event = events.single;
      expect(event.store, 'tasks');
      expect(event.id, recordId);
      expect(event.origin, ChangeOrigin.remote);
      expect(event.action, ChangeAction.create);
      expect(event.isRemote, isTrue);
      expect(event.isLocal, isFalse);
      expect(event.oldRecord, isNull);
      expect(event.newRecord?['title'], 'Server Task');
      expect(event.newRecord?['done'], false);
      expect(event.hasFieldChange('title'), isTrue);

      await sub.cancel();
    });

    test('pulling remote update on clean local record emits ChangeOrigin.remote update',
        () async {
      final h = await EngineHarness.create(stores: [tasksSchema]);
      addTearDown(h.close);

      final recordId = h.mock.seed(
        store: 'tasks',
        data: {'title': 'Server Task v1', 'done': false},
      );
      await h.engine.syncNow();

      final remoteEvents = <RecordChangeEvent>[];
      final sub = h.pocket.collection('tasks').onRemote().listen(remoteEvents.add);

      // Update on remote server
      h.mock.seed(
        store: 'tasks',
        id: recordId,
        data: {'title': 'Server Task v2', 'done': true},
        updated: h.mock.nextUpdated(),
      );

      await h.engine.syncNow();
      await Future<void>.delayed(Duration.zero);

      expect(remoteEvents, hasLength(1));
      final event = remoteEvents.single;
      expect(event.origin, ChangeOrigin.remote);
      expect(event.action, ChangeAction.update);
      expect(event.oldRecord?['title'], 'Server Task v1');
      expect(event.oldRecord?['done'], false);
      expect(event.newRecord?['title'], 'Server Task v2');
      expect(event.newRecord?['done'], true);
      expect(event.changedFields, {'title', 'done'});
      expect(event.isFieldTransition('done', from: false, to: true), isTrue);

      await sub.cancel();
    });

    test('markHidden emits ChangeOrigin.remote with ChangeAction.hide',
        () async {
      final h = await EngineHarness.create(stores: [tasksSchema]);
      addTearDown(h.close);

      final recordId = h.mock.seed(
        store: 'tasks',
        data: {'title': 'To be hidden', 'done': false},
      );
      await h.engine.syncNow();

      final events = <RecordChangeEvent>[];
      final sub = h.pocket.collection('tasks').events.listen(events.add);

      // Trigger markHidden directly via puller
      await h.engine.puller.markHidden('tasks', recordId);

      await Future<void>.delayed(Duration.zero);
      expect(events, hasLength(1));
      final event = events.single;
      expect(event.origin, ChangeOrigin.remote);
      expect(event.action, ChangeAction.hide);
      expect(event.oldRecord?['title'], 'To be hidden');
      expect(event.newRecord?['hidden'], true);
      expect(event.changedFields, {'hidden'});

      await sub.cancel();
    });

    test('3-way merge resolution emits ChangeOrigin.resolution', () async {
      final h = await EngineHarness.create(stores: [tasksSchema]);
      addTearDown(h.close);

      // Seed clean row
      final recordId = h.mock.seed(
        store: 'tasks',
        data: {'title': 'Original', 'done': false, 'priority': 1},
      );
      await h.engine.syncNow();

      // Make local edit to priority (dirty row)
      await h.pocket.collection('tasks').patch(recordId, {'priority': 5});

      final resolutionEvents = <RecordChangeEvent>[];
      final sub = h.pocket
          .collection('tasks')
          .onResolution()
          .listen(resolutionEvents.add);

      // Server changed title and marked done
      h.mock.seed(
        store: 'tasks',
        id: recordId,
        data: {'title': 'Server Updated Title', 'done': true, 'priority': 1},
        updated: h.mock.nextUpdated(),
      );

      // Pull merges: local priority: 5 preserved, server title & done applied
      await h.engine.syncNow();
      await Future<void>.delayed(Duration.zero);

      expect(resolutionEvents, hasLength(1));
      final event = resolutionEvents.single;
      expect(event.origin, ChangeOrigin.resolution);
      expect(event.action, ChangeAction.update);
      expect(event.oldRecord?['priority'], 5);
      expect(event.oldRecord?['title'], 'Original');
      expect(event.newRecord?['title'], 'Server Updated Title');
      expect(event.newRecord?['done'], true);
      expect(event.newRecord?['priority'], 5);
      expect(event.changedFields, contains('title'));
      expect(event.changedFields, contains('done'));

      await sub.cancel();
    });

    test('conflicts.resolve emits ChangeOrigin.resolution', () async {
      final conflictSchema = CollectionSchema<Object?>(
        name: 'tasks',
        version: 1,
        conflictPolicy: ConflictPolicy(
          collectionResolver: CustomResolver((ctx) => null), // Force conflict
        ),
        fields: [
          Field.text('title', required: true),
          Field.bool('done'),
        ],
      );

      final h = await EngineHarness.create(stores: [conflictSchema]);
      addTearDown(h.close);

      final recordId = h.mock.seed(
        store: 'tasks',
        data: {'title': 'V1', 'done': false},
      );
      await h.engine.syncNow();

      // Local edit
      await h.pocket.collection('tasks').patch(recordId, {'title': 'Local V2'});

      // Remote edit
      h.mock.seed(
        store: 'tasks',
        id: recordId,
        data: {'title': 'Remote V2', 'done': false},
        updated: h.mock.nextUpdated(),
      );

      // Pull escalates to conflict
      await h.engine.syncNow();

      final events = <RecordChangeEvent>[];
      final sub = h.pocket.collection('tasks').events.listen(events.add);

      // User resolves conflict
      await h.pocket.conflicts.resolve(
        store: 'tasks',
        id: recordId,
        merged: {'title': 'Resolved Title', 'done': true},
      );

      await Future<void>.delayed(Duration.zero);
      expect(events, hasLength(1));
      final event = events.single;
      expect(event.origin, ChangeOrigin.resolution);
      expect(event.action, ChangeAction.update);
      expect(event.oldRecord?['title'], 'Local V2');
      expect(event.newRecord?['title'], 'Resolved Title');
      expect(event.newRecord?['done'], true);

      await sub.cancel();
    });

    test('server transformed payload adoption in settlement emits ChangeOrigin.resolution',
        () async {
      final h = await EngineHarness.create(stores: [tasksSchema]);
      addTearDown(h.close);

      // Local write
      await h.pocket.collection('tasks').put({
        'id': 'task00000000001',
        'title': 'Original Title',
        'done': false,
      });

      final resolutionEvents = <RecordChangeEvent>[];
      final sub = h.pocket
          .collection('tasks')
          .onResolution()
          .listen(resolutionEvents.add);

      // Settle push with server-transformed payload
      final op = (await h.pocket.outbox.readOp(
          h.pocket.db, 'tasks', 'task00000000001'))!;
      final pushedHash = payloadHash(
          tasksSchema, {'title': 'Original Title', 'done': false, 'id': 'task00000000001'});

      final serverPayload = {
        'id': 'task00000000001',
        'title': 'SERVER_NORMALIZED_TITLE',
        'done': false,
        'archived': false,
      };

      await h.pocket.outbox.settlePush(
        store: op.store,
        id: op.recordId,
        serverUpdated: '2026-08-19 12:00:00.000Z',
        serverDataJson: jsonEncode(serverPayload),
        pushedPayloadHash: pushedHash,
      );

      await Future<void>.delayed(Duration.zero);
      expect(resolutionEvents, hasLength(1));
      final event = resolutionEvents.single;
      expect(event.origin, ChangeOrigin.resolution);
      expect(event.action, ChangeAction.update);
      expect(event.oldRecord?['title'], 'Original Title');
      expect(event.newRecord?['title'], 'SERVER_NORMALIZED_TITLE');
      expect(event.changedFields, {'title'});

      await sub.cancel();
    });
  });
}

