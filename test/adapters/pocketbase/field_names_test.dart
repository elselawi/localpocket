import 'dart:convert';

import 'package:localpocket/src/adapters/pocketbase/auth.dart';
import 'package:localpocket/src/adapters/pocketbase/field_names.dart';
import 'package:localpocket/src/adapters/pocketbase/pb_client.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:test/test.dart';

import 'fake_transport.dart';

/// Custom wire-field names: every URL, body key, multipart modifier, and
/// record-parse key derives from [PbFieldNames] — a deployment that renamed
/// its data collection or record fields works without touching the kernel.
void main() {
  final names = const PbFieldNames(
    collection: 'app_data',
    storeField: 'kind',
    dataField: 'payload',
    attachmentsField: 'files',
  );

  PbClient client(FakeTransport t) => PbClient(
        transport: t,
        baseUrl: Uri.parse('https://pb.test'),
        auth: AuthManager(_StaticTokens()),
        fieldNames: names,
      );

  test('record URLs use the configured collection', () async {
    final t = FakeTransport()..sendStatus(200, '{"items":[]}');
    final c = client(t);
    await c.listRecords('tasks');
    expect(t.sends.single.url.path, '/api/collections/app_data/records');
  });

  test('create/update bodies use the configured field names', () async {
    final t = FakeTransport()
      ..sendStatus(
          200, '{"id":"r1","updated":"u","${names.storeField}":"tasks"}')
      ..sendStatus(200, '{"id":"r1","updated":"u"}');
    final c = client(t);
    await c.createRecord(id: 'r1', store: 'tasks', dataJson: '{"a":1}');
    await c.updateRecord(id: 'r1', dataJson: '{"a":2}');

    final createBody = jsonDecode(t.sends[0].body!) as Map<String, Object?>;
    expect(createBody['id'], 'r1');
    expect(createBody[names.storeField], 'tasks');
    expect(createBody[names.dataField], {'a': 1});

    final updateBody = jsonDecode(t.sends[1].body!) as Map<String, Object?>;
    expect(updateBody.keys, [names.dataField]);
    expect(updateBody[names.dataField], {'a': 2});
  });

  test('multipart modifiers derive from the configured attachment field',
      () async {
    final t = FakeTransport()
      ..multipartStatus(200,
          '{"id":"r1","updated":"u","${names.storeField}":"tasks","${names.dataField}":{},"${names.attachmentsField}":[]}');
    final c = client(t);
    await c.updateRecordFiles(
      id: 'r1',
      dataJson: '{"a":1}',
      keepNames: const ['a.bin'],
      removeNames: const ['b.bin'],
    );
    final req = t.multiparts.single;
    expect(req.fields[names.dataField], '{"a":1}');
    expect(req.fields['${names.attachmentsField}+'], 'a.bin');
    expect(req.fields['${names.attachmentsField}-'], '["b.bin"]');
  });

  test('file download URLs use the configured collection', () async {
    final t = FakeTransport()..streamData(200, utf8.encode('bytes'));
    final c = client(t);
    final stream = await c.downloadFile(recordId: 'r1', filename: 'a.png');
    await stream.drain<void>();
    expect(t.streams.single.url.path, '/api/files/app_data/r1/a.png',
        reason: 'downloads must not hardcode the default collection name');
  });

  test('record parsing reads the configured field names', () async {
    final t = FakeTransport()
      ..sendStatus(
          200,
          jsonEncode({
            'id': 'r1',
            'updated': '2026-01-01 00:00:00.000Z',
            names.storeField: 'tasks',
            names.dataField: {'a': 1},
            names.attachmentsField: ['one.bin'],
          }));
    final c = client(t);
    final rec = await c.getRecord('r1');
    expect(rec!.store, 'tasks');
    expect(rec.data, {'a': 1});
    expect(rec.attachments, ['one.bin']);
  });

  test('batch item URLs use the configured collection', () async {
    final t = FakeTransport()
      ..sendStatus(200,
          '[{"body":{"id":"r1","updated":"u","${names.storeField}":"tasks","${names.dataField}":{}},"status":200}]');
    final c = client(t);
    await c.pushBatch([
      PushOp(
        opId: 'op1',
        id: 'r1',
        store: 'tasks',
        baseUpdated: null,
        dataJson: '{"a":1}',
      ),
    ]);
    final body = jsonDecode(t.sends.single.body!) as Map<String, Object?>;
    final requests = body['requests']! as List;
    expect(
        (requests.single as Map)['url'], '/api/collections/app_data/records');
    expect(
        ((requests.single as Map)['body'] as Map)[names.storeField], 'tasks');
  });
}

class _StaticTokens implements TokenProvider {
  @override
  Future<Token> currentToken() async => Token('t');

  @override
  Future<Token> refreshToken(Token current) async => Token('t');

  @override
  String get identity => 'test';
}
