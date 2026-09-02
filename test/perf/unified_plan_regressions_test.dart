import 'dart:async';

import 'package:localpocket/src/kernel/capabilities.dart';
import 'package:localpocket/src/kernel/cipher.dart';
import 'package:localpocket/src/kernel/database_adapter.dart';
import 'package:localpocket/src/kernel/ddl_compiler.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/sync/mapping.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:localpocket/src/kernel/sync/sync_tables.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../support/engine_helpers.dart';
import '../support/mock_backend.dart';

class _DelayedBatchBackend extends MockSyncBackend {
  final started = Completer<void>();
  final release = Completer<void>();

  @override
  Future<List<PushResult>> pushBatch(List<PushOp> ops) async {
    if (!started.isCompleted) started.complete();
    await release.future;
    return super.pushBatch(ops);
  }
}

void main() {
  group('unified performance-plan regression guards', () {
    test('async normalization preserves inline results without requiring isolates',
        () async {
      final schema = CollectionSchema<Object?>(
        name: 'patients',
        version: 1,
        fields: [Field.text('name', required: true), Field.int('age')],
      );
      final remotes = [
        for (var i = 0; i < 80; i++)
          RemoteRecord(
            id: generateRecordId(),
            store: 'patients',
            updated: '2026-01-01 00:00:00.${i.toString().padLeft(3, '0')}Z',
            data: {'name': 'p$i', 'age': i},
          ),
      ];

      final inline = normalizeRemoteBatch(schema, remotes);
      final asyncResult = await normalizeRemoteBatchAsync(
        schema,
        remotes,
        isolateThreshold: 1,
      );

      expect(asyncResult.length, inline.length);
      for (var i = 0; i < inline.length; i++) {
        expect(asyncResult[i].isSuccess, inline[i].isSuccess);
        expect(asyncResult[i].remotePayloadJson, inline[i].remotePayloadJson);
        expect(asyncResult[i].remoteHash, inline[i].remoteHash);
        expect(asyncResult[i].logical, inline[i].logical);
      }
    });

    test('pulled rows record the current schema version', () async {
      var migrationCalls = 0;
      final schema = CollectionSchema<Object?>(
        name: 'widgets',
        version: 2,
        fields: [Field.text('name', required: true)],
        documentMigrations: {
          2: (doc) {
            migrationCalls++;
            return {...doc, 'migrated': true};
          },
        },
      );
      final backend = MockSyncBackend();
      final h = await EngineHarness.create(
        stores: [schema],
        mock: backend,
      );
      addTearDown(h.close);

      final id = backend.seed(
        store: 'widgets',
        data: {'name': 'remote'},
      );
      await h.engine.puller.pullStore('widgets');

      final sync = await h.pocket.db.query(
        'lp_sync_row',
        where: 'store = ? AND record_id = ?',
        whereArgs: ['widgets', id],
      );
      expect(sync.single['schema_ver'], 2);
      await h.pocket.collection('widgets').get(id);
      expect(migrationCalls, 0,
          reason: 'a current-shape pulled row must not lazily migrate forever');
    });

    test('file-op drain resolves dependencies with set-based queries', () async {
      final statements = <String>[];
      final h = await EngineHarness.create();
      final db = h.pocket.db as DirectSqliteDatabase;
      db.onExecute = (sql, _) => statements.add(sql);
      db.onQuery = (sql, _) => statements.add(sql);
      addTearDown(h.close);

      await h.pocket.collection('widgets').put(record(name: 'parent'));
      final parent = await h.pocket.outbox.readOp(
        h.pocket.db,
        'widgets',
        (await h.pocket.collection('widgets').query().all().ids()).single,
      );
      expect(parent, isNotNull);

      for (var i = 0; i < 10; i++) {
        await h.pocket.opQueue.enqueue(
          store: 'widgets',
          recordId: generateRecordId(),
          kind: OpQueueKind.fileUpload,
          payload: {'i': i},
          dependsOnOp: parent!.opId,
        );
      }
      statements.clear();

      expect(await h.pocket.opQueue.drain(limit: 10), isEmpty);
      expect(
        statements.where((sql) => sql.contains('COUNT(*)')).toList(),
        isEmpty,
        reason: 'dependency resolution must not issue one COUNT query per op',
      );
      expect(
        statements.where((sql) => sql.contains('op_id IN')).length,
        2,
        reason: 'one set-based probe per dependency table',
      );
    });

    test('batch settlement uses one local transaction and preserves edits in flight',
        () async {
      final backend = _DelayedBatchBackend()..batchEnabled = true;
      final statements = <String>[];
      final h = await EngineHarness.create(
        mock: backend,
        config: testConfig(maxBatch: 25),
      );
      final db = h.pocket.db as DirectSqliteDatabase;
      db.onExecute = (sql, _) => statements.add(sql);
      db.onQuery = (sql, _) => statements.add(sql);
      addTearDown(h.close);

      final id = generateRecordId();
      await h.pocket.collection('widgets').put(record(id: id, name: 'v1'));
      statements.clear();
      final cycle = h.engine.syncNow();
      await backend.started.future;

      await h.pocket.collection('widgets').patch(id, {'name': 'edited-in-flight'});
      statements.clear();
      backend.release.complete();
      await cycle;

      final local = await h.pocket.collection('widgets').get(id);
      expect(local!['name'], 'edited-in-flight');
      expect((await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', id))!.syncState,
          SyncState.dirty,
          reason: 'an edit during HTTP must remain pending');
      expect(await h.pocket.outbox.readOp(h.pocket.db, 'widgets', id), isNotNull);

      final begins = statements.where((sql) => sql.startsWith('BEGIN')).length;
      final pragmas = statements.where((sql) => sql.startsWith('PRAGMA')).length;
      expect(begins, 1,
          reason: 'successful batch settlement should use one local transaction');
      expect(pragmas, lessThanOrEqualTo(2),
          reason: 'settlement batch must not toggle durability per item');
    });

    test('FTS update trigger is conditional on indexed-field changes', () {
      final caps = SqliteCapabilities.forVersion('3.53.4');
      final compiled = DdlCompiler(caps).compile(CollectionSchema<Object?>(
        name: 'widgets',
        version: 1,
        fields: [Field.text('name'), Field.int('qty')],
        fts: const FtsSpec(['name']),
      ));

      expect(compiled.ftsDdl.last, contains('WHEN'));
      expect(compiled.ftsDdl.last, contains('new."name" IS NOT old."name"'));
      expect(compiled.ftsDdl.last, isNot(contains('new."qty"')));
    });

    test('cipher key exposure cannot mutate the cached encryption context', () {
      final cipher = AesGcmFieldCipher(List<int>.generate(32, (i) => i));
      final exposed = cipher.key;
      exposed[0] ^= 0xff;

      final plaintext = [1, 2, 3, 4, 5];
      final encrypted = cipher.encrypt(plaintext);
      expect(cipher.decrypt(encrypted), plaintext);
    });
  });
}
