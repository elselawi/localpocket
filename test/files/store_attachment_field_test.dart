import 'dart:async';
import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/kernel/ids.dart' show generateRecordId;
import 'package:localpocket/src/kernel/schema.dart';
import 'package:test/test.dart';

import '../sync/engine/engine_helpers.dart';
import '../sync/engine/mock_backend.dart';

/// A kernel schema that declares its own attachment field.
CollectionSchema<Object?> docsSchema() => CollectionSchema<Object?>(
      name: 'docs',
      version: 1,
      fields: const [],
      attachmentField: 'docs',
    );

void main() {
  group('per-store attachment field (StoreDef.attachmentField)', () {
    test('kernel file APIs default to the store\'s declared attachment field',
        () async {
      final h = await EngineHarness.create(
        stores: [docsSchema()],
        blobStore: MemoryBlobStore(),
        start: false,
      );
      addTearDown(h.close);

      final recId = generateRecordId();
      await h.pocket.collection('docs').put({'id': recId});

      final ref = await h.pocket.files.attach(
        store: 'docs',
        recordId: recId,
        bytes: Stream.value(utf8.encode('bytes')),
        allowVolatileBlobs: true,
      );
      expect(ref.field, 'docs',
          reason: 'no explicit field -> the store\'s declared field');
      expect(await h.pocket.files.list(store: 'docs', recordId: recId),
          hasLength(1),
          reason: 'list() resolves the same declared field');
    });

    test('remote-only refs from a pull land under the declared field',
        () async {
      final mock = MockSyncBackend();
      final h = await EngineHarness.create(
        stores: [docsSchema()],
        blobStore: MemoryBlobStore(),
        mock: mock,
        start: false,
      );
      addTearDown(h.close);

      final recId = mock.seed(
        store: 'docs',
        data: {'name': 'w'},
        attachments: ['remote_doc.pdf'],
      );
      await h.engine.start();
      await h.engine.syncNow();

      final refs = await h.pocket.files.list(store: 'docs', recordId: recId);
      expect(refs, hasLength(1));
      expect(refs.first.state, 'remote_only');
      expect(refs.first.field, 'docs',
          reason: 'pull-side refs use the store\'s declared field, '
              'not the shared default');
    });

    test('facade attach/list default to the StoreDef declaration', () async {
      final db = await LocalPocket.open(
        LocalPocketOptions(
          path: ':memory:',
          stores: [TasksDef.store],
          blobStore: MemoryBlobStore(),
        ),
      );
      addTearDown(db.close);
      final store = db.store(TasksDef.store);

      final created = await store.put([TasksDef.title.set('x')]);
      final ref = await store.files.attach(
        recordId: created.id,
        source: FileSource.bytes(utf8.encode('hello')),
        allowVolatileBlobs: true,
      );
      expect(ref.field, 'attachments',
          reason: 'no explicit field -> the StoreDef declaration');
      expect(await store.files.list(recordId: created.id), hasLength(1));

      // An explicit field still wins and forms its own group.
      final explicit = await store.files.attach(
        recordId: created.id,
        source: FileSource.bytes(utf8.encode('other')),
        field: 'explicit',
        allowVolatileBlobs: true,
      );
      expect(explicit.field, 'explicit');
      expect(
        await store.files.list(recordId: created.id, field: 'attachments'),
        hasLength(1),
      );
      expect(
        await store.files.list(recordId: created.id, field: 'explicit'),
        hasLength(1),
      );
    });
  });
}

final class TasksDef extends StoreDef<TasksDef> {
  TasksDef._() : super(name: 'tasks_field_test', version: 1);
  static final TasksDef store = TasksDef._();
  static final title = store.schema.text('title');

  @override
  String? get attachmentField => 'attachments';

  @override
  List<FieldDef<TasksDef, Object?>> get fields => [title];
}
