/// Façade ↔ engine equivalence:
/// typed and raw paths agree byte-for-byte; the engine is never bypassed.
library;

import 'dart:convert';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'support/secrets.dart';
import 'support/tasks.dart';

/// The hand-built twin of `Tasks.store.schema` — the worker contract.
CollectionSchema<Object?> rawTasksSchema() => CollectionSchema<Object?>(
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

final class _ParityHelpers extends StoreDef<_ParityHelpers> {
  _ParityHelpers._() : super(name: 'parity_helpers', version: 1);

  static final _ParityHelpers store = _ParityHelpers._();

  late final _title = schema.text('title');
  late final _priority = schema.integer('priority');

  @override
  List<FieldDef<_ParityHelpers, Object?>> get fields => [_title, _priority];

  @override
  List<IndexSpec> get indexes => [
        indexSpec(<FieldDef<_ParityHelpers, Object?>>[_title, _priority],
            unique: true, scope: IndexScope.notArchived),
      ];

  @override
  FtsSpec get fts => ftsSpec([_title]);
}

Future<LocalPocket> openTasks() =>
    LocalPocket.open(path: ':memory:', stores: [Tasks.store.collectionSchema]);

void main() {
  test('typed index and FTS helpers preserve schema JSON and DDL parity', () {
    final typedSchema = _ParityHelpers.store.collectionSchema;
    final rawSchema = CollectionSchema<Object?>(
      name: 'parity_helpers',
      version: 1,
      fields: [Field.text('title'), Field.int('priority')],
      indexes: const [
        IndexSpec(['title', 'priority'],
            unique: true, scope: IndexScope.notArchived),
      ],
      fts: const FtsSpec(['title']),
    );

    expect(typedSchema.toJson(), rawSchema.toJson());
    final typedDdl = DdlCompiler(SqliteCapabilities.forVersion('3.44.2'))
        .compile(typedSchema);
    final rawDdl =
        DdlCompiler(SqliteCapabilities.forVersion('3.44.2')).compile(rawSchema);
    expect(typedDdl.tableDdl, rawDdl.tableDdl);
    expect(typedDdl.indexDdl, rawDdl.indexDdl);
    expect(typedDdl.ftsDdl, rawDdl.ftsDdl);
  });

  group('façade <-> engine parity', () {
    test('case 83: typed put produces the byte-identical logical map',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('partcase', 83);
      await db.store(Tasks.store).put([
        Writes.id(id),
        Tasks.title.set('parity'),
        Tasks.role.set(Role.member),
        Tasks.count.set(3),
        Tasks.dueAt.set(DateTime.utc(2026, 9, 1)),
        Writes.extra('legacy', true),
      ]);

      final raw = await db.collection('tasks').get(id);
      expect(raw, {
        'id': id,
        'title': 'parity',
        'priority': null,
        'role': 'member',
        'done': null,
        'dueDay': null,
        'dueAt': DateTime.utc(2026, 9, 1).millisecondsSinceEpoch,
        'estimate': null,
        'count': 3,
        'tags': null,
        'meta': null,
        'ownerId': null,
        'archived': false,
        'legacy': true,
      });
    });

    test(
        'case 84: raw put then typed read returns identical decoded values '
        '(reverse direction)', () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('partcase', 84);
      final epoch = DateTime.utc(2026, 9, 1).millisecondsSinceEpoch;
      await db.collection('tasks').put({
        'id': id,
        'title': 'raw',
        'role': 'guest',
        'priority': 'urgent',
        'done': true,
        'dueDay': epoch,
        'dueAt': epoch,
        'estimate': 2.5,
        'count': 9,
        'tags': ['a'],
        'meta': {'k': 'v'},
        'ownerId': 'users0000000001',
        'legacy': [1, null, 'x'],
      });

      final rec = (await db.store(Tasks.store).get(id))!;
      expect(rec(Tasks.title), 'raw');
      expect(rec(Tasks.role), Role.guest);
      expect(rec(Tasks.priority), Priority.urgent);
      expect(rec(Tasks.done), isTrue);
      expect(rec(Tasks.dueDay), epoch);
      expect(rec(Tasks.dueAt),
          DateTime.fromMillisecondsSinceEpoch(epoch, isUtc: true));
      expect(rec(Tasks.estimate), 2.5);
      expect(rec(Tasks.count), 9);
      expect(rec(Tasks.tags), ['a']);
      expect(rec(Tasks.meta), {'k': 'v'});
      expect(rec(Tasks.ownerId), 'users0000000001');
      expect(rec.extra['legacy'], [1, null, 'x']);
    });

    test(
        'case 85: encrypted field — typed read is plaintext, raw column is '
        'ciphertext, both agree', () async {
      final keyBytes = List<int>.generate(32, (i) => (i * 7 + 13) % 256);
      final db = await LocalPocket.open(
        path: ':memory:',
        stores: [SecretNotes.store.collectionSchema],
        fieldCipher: AesGcmFieldCipher(keyBytes),
      );
      addTearDown(db.close);
      final id = rid('partcase', 85);
      await db.store(SecretNotes.store).put([
        Writes.id(id),
        SecretNotes.label.set('n'),
        SecretNotes.note.set('plaintext'),
      ]);

      final rec = (await db.store(SecretNotes.store).get(id))!;
      expect(rec(SecretNotes.note), 'plaintext');
      final rows = await db.db
          .rawQuery('SELECT note FROM secretnotes WHERE id = ?', [id]);
      expect(rows.single['note'], isNot('plaintext'));
      expect(rows.single['note'], isA<String>(),
          reason: 'stored column is base64 ciphertext');
    });

    test('case 86: extra is lossless in both directions including nesting',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      const payload = {
        'deep': {
          'list': [
            1,
            null,
            {'in': 'side'}
          ],
        },
        'nul': null,
        'unicode': 'héllo ✓',
      };
      final id = rid('partcase', 861);
      await db.store(Tasks.store).put([
        Writes.id(id),
        Tasks.title.set('x'),
        Writes.extra('deep', payload['deep']),
      ]);
      await db
          .collection('tasks')
          .patch(id, {'nul': null, 'unicode': 'héllo ✓'});

      final rec = (await db.store(Tasks.store).get(id))!;
      expect(rec.extra, payload);

      // Reverse direction: raw write, typed read.
      final id2 = rid('partcase', 862);
      await db.collection('tasks').put({'id': id2, 'title': 'x', ...payload});
      final rec2 = (await db.store(Tasks.store).get(id2))!;
      expect(rec2.extra, payload);
    });

    test('case 87: outbox payload for a typed write carries wire strings',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('partcase', 87);
      await db.store(Tasks.store).put([
        Writes.id(id),
        Tasks.title.set('x'),
        Tasks.role.set(Role.admin),
      ]);

      final op = await db.outbox.readOp(db.db, 'tasks', id);
      expect(op, isNotNull);
      expect(op!.payloadJson, contains('"admin"'));
      expect(op.payloadJson, isNot(contains('Role.admin')));
    });

    test('case 88: same-store mixed access behaves identically to all-raw',
        () async {
      final db = await openTasks();
      addTearDown(db.close);
      final id = rid('partcase', 88);
      await db.store(Tasks.store).put([
        Writes.id(id),
        Tasks.title.set('typed'),
        Tasks.count.set(1),
      ]);
      await db.collection('tasks').patch(id, {'count': 2});
      await db.store(Tasks.store).patch(id, [Tasks.role.set(Role.admin)]);

      final rec = (await db.store(Tasks.store).get(id))!;
      expect(rec(Tasks.title), 'typed');
      expect(rec(Tasks.count), 2);
      expect(rec(Tasks.role), Role.admin);
      expect(rec.asMap(), await db.collection('tasks').get(id));
    });

    test('case 89: PRAGMA table_info matches the raw schema column-for-column',
        () async {
      final typedDb = await openTasks();
      addTearDown(typedDb.close);
      final rawDb =
          await LocalPocket.open(path: ':memory:', stores: [rawTasksSchema()]);
      addTearDown(rawDb.close);

      final typedCols = await typedDb.db.rawQuery('PRAGMA table_info(tasks)');
      final rawCols = await rawDb.db.rawQuery('PRAGMA table_info(tasks)');
      expect(typedCols, rawCols);
    });

    test(
        'case 90: encodeDbRow bytes are identical for field-native and '
        'hand-built maps', () async {
      final id = rid('partcase', 90);
      final List<Write<Tasks>> writes = [
        Writes.id(id),
        Tasks.title.set('bytes'),
        Tasks.role.set(Role.admin),
        Writes.extra('k', 1),
      ];
      final record = <String, Object?>{};
      for (final write in writes) {
        switch (write) {
          case final FieldWrite<Tasks> f:
            record[f.name] = f.encoded;
          case final IdWrite<Tasks> i:
            record['id'] = i.id;
          case final ExtraWrite<Tasks> e:
            record[e.key] = e.value;
        }
      }
      final fromWrites = encodeDbRow(
        Tasks.store.collectionSchema,
        id: id,
        logical: record,
        archived: false,
      );
      final fromHand = encodeDbRow(
        Tasks.store.collectionSchema,
        id: id,
        logical: {'id': id, 'title': 'bytes', 'role': 'admin', 'k': 1},
        archived: false,
      );
      expect(fromWrites, fromHand);
    });

    test(
        'case 91: persisted definition_json equals the hand-built schema '
        'with no spurious migration on reopen', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final first = await LocalPocket.open(
          path: t.path, stores: [Tasks.store.collectionSchema]);
      await first.close();

      final db = await LocalPocket.open(
          path: t.path, stores: [Tasks.store.collectionSchema]);
      addTearDown(db.close);
      final rows = await db.db.query('lp_stores',
          columns: ['definition_json', 'schema_ver'],
          where: 'store = ?',
          whereArgs: ['tasks']);
      final stored = jsonDecode(rows.single['definition_json']! as String)
          as Map<String, Object?>;
      expect(stored, rawTasksSchema().toJson());
      expect(rows.single['schema_ver'], 1);
    });
  });
}
