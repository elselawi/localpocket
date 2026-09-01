import 'dart:convert';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import 'fake_transport.dart';
import '../support/pb_helpers.dart';

/// PbClient-level request/response matrix: typed status mapping,
/// malformed response handling, URL/request encoding, and batch response
/// cardinality, all driven through [PocketBaseRawBackend] over a fake transport.
void main() {
  PocketBaseRawBackend backendWith(FakeTransport fake,
      {TestTokenProvider? tokens}) {
    final b = PocketBaseRawBackend(
      baseUrl: Uri.parse('https://pb.example.test'),
      tokenProvider: tokens ?? TestTokenProvider(),
      stores: const ['widgets'],
      transport: fake,
    );
    addTearDown(b.close);
    return b;
  }

  group('PbClient request/response matrix', () {
    test('invalid JSON dataJson sends no request', () async {
      final fake = FakeTransport();
      final b = backendWith(fake);
      await expectLater(
        b.createRecord(
            id: generateRecordId(), store: 'widgets', dataJson: '{oops'),
        throwsA(isA<FormatException>()),
      );
      expect(fake.sends, isEmpty, reason: 'no request for an unparseable body');

      await expectLater(
        b.updateRecord(id: generateRecordId(), dataJson: '["not","a","map"'),
        throwsA(isA<FormatException>()),
      );
      expect(fake.sends, isEmpty,
          reason: 'updateRecord also validates before sending');
    });

    test('list status matrix maps to typed errors', () async {
      // 200 success.
      final ok = FakeTransport();
      ok.sendStatus(200,
          '{"items":[${FakeTransport.recordBody('r1', data: {'id': 'r1'})}]}');
      final bOk = backendWith(ok);
      final recs = await bOk.listChanges('widgets');
      expect(recs.single.id, 'r1');
      expect(recs.single.store, 'widgets');
      expect(recs.single.data['id'], 'r1');

      Future<void> expectStatus(int status, Type error) async {
        final fake = FakeTransport();
        if (status == 401) {
          fake.sendStatus(401, '{"message":"no"}');
          fake.sendStatus(401, '{"message":"no"}');
        } else {
          fake.sendStatus(status, '{"message":"boom"}');
        }
        final b = backendWith(fake);
        await expectLater(
            b.listChanges('widgets'),
            throwsA(
                isA<SyncError>().having((e) => e.runtimeType, 'type', error)),
            reason: 'status $status');
      }

      await expectStatus(204, ProtocolError); // no list body
      await expectStatus(302, ProtocolError); // unexpected 3xx
      await expectStatus(400, PayloadError);
      await expectStatus(401, AuthError);
      await expectStatus(403, ForbiddenError);
      await expectStatus(404, NotFoundError);
      await expectStatus(408, ServerBusyError);
      await expectStatus(
          422, ProtocolError); // 422 is not an expected list code
      await expectStatus(429, ServerBusyError);
      await expectStatus(500, ServerError);
    });

    test('408/429 carry the retry-after header', () async {
      for (final status in [408, 429]) {
        final fake = FakeTransport();
        fake.sendStatus(status, '{"message":"busy"}', {'retry-after': '17'});
        final b = backendWith(fake);
        await expectLater(
          b.listChanges('widgets'),
          throwsA(isA<ServerBusyError>()
              .having((e) => e.retryAfter, 'retryAfter', '17')),
          reason: 'status $status',
        );
      }
    });

    test('malformed / non-object / missing-list responses are ProtocolErrors',
        () async {
      final malformed = FakeTransport();
      malformed.sendStatus(200, 'not json at all');
      final b1 = backendWith(malformed);
      await expectLater(
          b1.listChanges('widgets'), throwsA(isA<ProtocolError>()),
          reason: 'malformed JSON');

      final listBody = FakeTransport();
      listBody.sendStatus(200, '[1,2,3]');
      final b2 = backendWith(listBody);
      await expectLater(
          b2.listChanges('widgets'), throwsA(isA<ProtocolError>()),
          reason: 'non-object body');

      final noItems = FakeTransport();
      noItems.sendStatus(200, '{"page":1}');
      final b3 = backendWith(noItems);
      await expectLater(
          b3.listChanges('widgets'),
          throwsA(isA<ProtocolError>()
              .having((e) => e.message, 'message', contains('items'))),
          reason: 'list body missing items');
    });

    test('missing list items / malformed records are ProtocolErrors', () async {
      final nonMapItem = FakeTransport();
      nonMapItem.sendStatus(200, '{"items":["junk"]}');
      final b1 = backendWith(nonMapItem);
      await expectLater(
          b1.listChanges('widgets'), throwsA(isA<ProtocolError>()),
          reason: 'non-map list item');

      final missingId = FakeTransport();
      missingId.sendStatus(200, '{"items":[{"store":"widgets"}]}');
      final b2 = backendWith(missingId);
      await expectLater(
          b2.listChanges('widgets'),
          throwsA(isA<ProtocolError>()
              .having((e) => e.message, 'message', contains('id/updated'))),
          reason: 'record missing id/updated');
    });

    test('missing/invalid imgs normalize to an empty list (never crash)',
        () async {
      final fake = FakeTransport();
      fake.sendStatus(
          200,
          jsonEncode({
            'items': [
              {
                'id': 'r1',
                'store': 'widgets',
                'updated': '2026-08-15 10:00:00.000Z',
                'data': {'id': 'r1'},
                'imgs': [1, 2, 'ok.png'], // non-string entries
              },
              {
                'id': 'r2',
                'store': 'widgets',
                'updated': '2026-08-15 10:00:00.000Z',
                'data': {'id': 'r2'},
                // no imgs key at all
              },
            ],
          }));
      final b = backendWith(fake);
      final recs = await b.listChanges('widgets');
      expect(recs[0].imgs, ['ok.png'],
          reason: 'non-string imgs entries are filtered out');
      expect(recs[1].imgs, isEmpty, reason: 'missing imgs -> empty');
    });

    test('getRecord 404 is NotFoundError, 200 parses', () async {
      final fake = FakeTransport();
      fake.sendStatus(404, '{"message":"gone"}');
      final b = backendWith(fake);
      await expectLater(b.getRecord('x'), throwsA(isA<NotFoundError>()));

      final ok = FakeTransport();
      ok.sendStatus(200, FakeTransport.recordBody('r1'));
      final b2 = backendWith(ok);
      expect((await b2.getRecord('r1'))!.id, 'r1');
    });

    test('createRecord duplicate-id shape maps to DuplicateIdError', () async {
      final fake = FakeTransport();
      fake.sendStatus(
          400,
          jsonEncode({
            'message': 'Failed to create record.',
            'data': {
              'id': {'code': 'validation_pk_invalid'}
            },
          }));
      final b = backendWith(fake);
      await expectLater(
        b.createRecord(
            id: generateRecordId(), store: 'widgets', dataJson: '{}'),
        throwsA(isA<DuplicateIdError>()),
      );

      // Any other 400 is a plain validation failure.
      final other = FakeTransport();
      other.sendStatus(400, '{"message":"bad field"}');
      final b2 = backendWith(other);
      await expectLater(
        b2.createRecord(
            id: generateRecordId(), store: 'widgets', dataJson: '{}'),
        throwsA(isA<PayloadError>()),
      );
    });

    test('error bodies: message / data / plain text / long text', () async {
      // message wins.
      final msg = FakeTransport();
      msg.sendStatus(400, '{"message":"validation failed","data":{"a":1}}');
      final b1 = backendWith(msg);
      await expectLater(
        b1.createRecord(
            id: generateRecordId(), store: 'widgets', dataJson: '{}'),
        throwsA(isA<PayloadError>()
            .having((e) => e.message, 'message', 'validation failed')),
      );

      // no message -> data map serialized.
      final data = FakeTransport();
      data.sendStatus(400, '{"data":{"field":{"code":"required"}}}');
      final b2 = backendWith(data);
      await expectLater(
        b2.createRecord(
            id: generateRecordId(), store: 'widgets', dataJson: '{}'),
        throwsA(isA<PayloadError>()
            .having((e) => e.message, 'message', contains('"field"'))),
      );

      // plain-text body.
      final plain = FakeTransport();
      plain.sendStatus(400, 'plain error text');
      final b3 = backendWith(plain);
      await expectLater(
        b3.createRecord(
            id: generateRecordId(), store: 'widgets', dataJson: '{}'),
        throwsA(isA<PayloadError>()
            .having((e) => e.message, 'message', 'plain error text')),
      );

      // long body truncated to 500 chars.
      final long = FakeTransport();
      long.sendStatus(400, 'x' * 2000);
      final b4 = backendWith(long);
      await expectLater(
        b4.createRecord(
            id: generateRecordId(), store: 'widgets', dataJson: '{}'),
        throwsA(isA<PayloadError>()
            .having((e) => e.message.length, 'message length', 500)),
      );
    });
  });

  group('URL and request encoding', () {
    test('record ids are path-encoded without changing the path structure',
        () async {
      final cases = <String, String>{
        'a b': 'a%20b',
        'héllo': 'h%C3%A9llo',
        '50%': '50%25',
        'a/b': 'a%2Fb',
        'a"b': 'a%22b',
        '../etc/passwd': '..%2Fetc%2Fpasswd',
        // A single quote is a legal RFC-3986 sub-delim in a path, so it may
        // appear raw; it is never a path separator and never breaks structure.
        "o'brien": "o'brien",
      };
      for (final entry in cases.entries) {
        final fake = FakeTransport();
        fake.sendStatus(200, FakeTransport.recordBody(entry.key));
        final b = backendWith(fake);
        await b.getRecord(entry.key);
        final url = fake.sends.single.url;
        expect(url.toString(),
            'https://pb.example.test/api/collections/data/records/${entry.value}',
            reason: 'id "${entry.key}"');
        expect(url.pathSegments.length, 5,
            reason: 'path structure unchanged (no extra segments)');
        expect(url.pathSegments.last, entry.key,
            reason: 'the server-side path decodes back to the original id');
      }
    });

    test('list query parameters: filter/sort/perPage/skipTotal/fields',
        () async {
      final fake = FakeTransport();
      fake.sendStatus(200, '{"items":[]}');
      final b = backendWith(fake);
      await b.listChanges('widgets',
          fromUpdated: '2026-08-15 10:00:00.000Z', fromId: 'r100', perPage: 50);
      final q = fake.sends.single.url.queryParameters;
      expect(q['filter'],
          "(store='widgets' && updated>='2026-08-15 10:00:00.000Z') && id>'r100'");
      expect(q['sort'], 'updated,id');
      expect(q['perPage'], '50');
      expect(q['skipTotal'], '1');
      expect(q.containsKey('fields'), isFalse);

      // Sweep projection: idPrefix switches the sort and requests only the
      // keyset fields.
      final sweep = FakeTransport();
      sweep.sendStatus(200, '{"items":[]}');
      final b2 = backendWith(sweep);
      await b2.listChanges('widgets', idPrefix: 'a', fromId: 'r1');
      final q2 = sweep.sends.single.url.queryParameters;
      expect(q2['filter'], "(store='widgets' && id~'a%' && id>'r1')");
      expect(q2['sort'], 'id');
      expect(q2['fields'], 'id,updated');
    });

    test('downloadFile encodes record and filename, keeps thumb param',
        () async {
      final fake = FakeTransport();
      fake.streamData(200, utf8.encode('bytes'));
      final b = backendWith(fake);
      final stream = await b.downloadFile(
          recordId: 'rec with space',
          filename: 'my file.png',
          thumb: '120x120');
      final bytes = await stream.fold<List<int>>([], (a, c) => [...a, ...c]);
      expect(utf8.decode(bytes), 'bytes');
      final url = fake.streams.single.url;
      expect(url.path, '/api/files/data/rec%20with%20space/my%20file.png',
          reason: 'both segments encoded, structure intact');
      expect(url.queryParameters['thumb'], '120x120');

      // Traversal-like filename stays inside the files path.
      final fake2 = FakeTransport();
      fake2.streamData(200, utf8.encode('x'));
      final b2 = backendWith(fake2);
      await b2.downloadFile(recordId: 'r', filename: '../secret');
      expect(fake2.streams.single.url.path, '/api/files/data/r/..%2Fsecret',
          reason: 'the slash is percent-encoded, so no traversal');
      expect(fake2.streams.single.url.pathSegments.length, 5,
          reason: 'still five path segments');
    });

    test('downloadFile maps non-200 statuses to typed errors', () async {
      final fake = FakeTransport();
      fake.streamStatus(404);
      final b = backendWith(fake);
      await expectLater(
        b.downloadFile(recordId: 'r', filename: 'f.png'),
        throwsA(isA<NotFoundError>()),
      );
    });

    test('downloadFile propagates an openStream failure', () async {
      final fake = FakeTransport();
      fake.streamError(StateError('socket down'));
      final b = backendWith(fake);
      await expectLater(
        b.downloadFile(recordId: 'r', filename: 'f.png'),
        throwsA(isA<StateError>()),
      );
    });

    test('multipart fields for data/keep/remove and the auth header', () async {
      final fake = FakeTransport();
      fake.multipartStatus(
          200, FakeTransport.recordBody('r1', imgs: ['a.png', 'b.png']));
      final b = backendWith(fake);
      await b.updateRecordFilesStream(
        id: 'r1',
        dataJson: '{"name":"x"}',
        uploads: {
          'file.bin': const StreamFileUpload(
              filename: 'file.bin', length: 3, streamFactory: _threeBytes),
        },
        keepNames: ['a.png', 'b.png'],
        removeNames: ['old.png'],
      );
      final req = fake.multiparts.single;
      expect(req.method, 'PATCH');
      expect(req.url.path, '/api/collections/data/records/r1');
      expect(req.headers['Authorization'], startsWith('Bearer '));
      expect(req.fields['data'], '{"name":"x"}');
      expect(req.fields['imgs+'], 'a.png,b.png');
      expect(req.fields['imgs-'], '["old.png"]');
      expect(req.files.single.field, 'imgs+');
      expect(req.files.single.filename, 'file.bin');
      expect(req.files.single.length, 3);
    });

    test('json sends carry auth + content-type; headers never leak input',
        () async {
      final fake = FakeTransport();
      fake.sendStatus(200, FakeTransport.recordBody('r1'));
      final b = backendWith(fake);
      await b.updateRecord(id: 'r1', dataJson: '{"name":"x"}');
      final req = fake.sends.single;
      expect(req.method, 'PATCH');
      expect(req.headers['Authorization'], startsWith('Bearer '));
      expect(req.headers['Content-Type'], 'application/json');
      expect(req.body, '{"data":{"name":"x"}}');
      expect(req.url.path, '/api/collections/data/records/r1');
    });

    test('updateRecordFiles with only dataJson routes to a plain update',
        () async {
      final fake = FakeTransport();
      fake.sendStatus(200, FakeTransport.recordBody('r1'));
      final b = backendWith(fake);
      final rec = await b.updateRecordFiles(id: 'r1', dataJson: '{"name":"x"}');

      expect(fake.multiparts, isEmpty,
          reason: 'data-only never takes the multipart path');
      final req = fake.sends.single;
      expect(req.method, 'PATCH');
      expect(req.url.path, '/api/collections/data/records/r1');
      expect(req.body, '{"data":{"name":"x"}}');
      expect(rec.id, 'r1');
    });

    test('updateRecordFiles with keep/remove/upload uses multipart', () async {
      final keep = FakeTransport();
      keep.multipartStatus(
          200, FakeTransport.recordBody('r1', imgs: ['a.png']));
      await backendWith(keep).updateRecordFiles(id: 'r1', keepNames: ['a.png']);
      expect(keep.multiparts, hasLength(1),
          reason: 'keepNames forces the multipart path');
      expect(keep.sends, isEmpty);

      final remove = FakeTransport();
      remove.multipartStatus(200, FakeTransport.recordBody('r1'));
      await backendWith(remove)
          .updateRecordFiles(id: 'r1', removeNames: ['old.png']);
      expect(remove.multiparts, hasLength(1),
          reason: 'removeNames forces the multipart path');

      final upload = FakeTransport();
      upload.multipartStatus(
          200, FakeTransport.recordBody('r1', imgs: ['f.bin']));
      await backendWith(upload).updateRecordFiles(id: 'r1', uploads: {
        'f.bin': [1, 2, 3]
      });
      expect(upload.multiparts, hasLength(1),
          reason: 'uploads force the multipart path');
      expect(upload.sends, isEmpty);
    });
  });

  group('batch client response cardinality', () {
    List<PushOp> twoOps() => [
          PushOp(
              opId: 'a',
              store: 'widgets',
              id: 'r1',
              dataJson: '{"name":"a"}',
              upsert: true),
          PushOp(
              opId: 'b',
              store: 'widgets',
              id: 'r2',
              dataJson: '{"name":"b"}',
              upsert: true),
        ];

    Map<String, Object?> item(String id, {int status = 200}) => {
          'body': {
            'id': id,
            'store': 'widgets',
            'updated': '2026-08-15 10:00:00.000Z',
            'data': {'id': id, 'name': id},
          },
          'status': status,
        };

    test('top-level list and both envelope forms parse', () async {
      for (final body in [
        [item('r1'), item('r2')],
        {
          'data': {
            'results': [item('r1'), item('r2')]
          }
        },
        {
          'results': [item('r1'), item('r2')]
        },
      ]) {
        final fake = FakeTransport();
        fake.sendStatus(200, jsonEncode(body));
        final b = backendWith(fake);
        final results = await b.pushBatch(twoOps());
        expect(results.length, 2, reason: '$body');
        expect(results[0].opId, 'a');
        expect(results[0].ok, isTrue);
        expect(results[1].opId, 'b');
      }
    });

    test('empty/fewer/more results are ProtocolErrors (exact coverage)',
        () async {
      Future<void> expectProtocolError(FakeTransport t) async {
        final b = backendWith(t);
        await expectLater(b.pushBatch(twoOps()), throwsA(isA<ProtocolError>()));
      }

      final empty = FakeTransport();
      empty.sendStatus(200, '[]');
      await expectProtocolError(empty);

      final fewer = FakeTransport();
      fewer.sendStatus(200, jsonEncode([item('r1')]));
      await expectProtocolError(fewer);

      final more = FakeTransport();
      more.sendStatus(200, jsonEncode([item('r1'), item('r2'), item('r3')]));
      await expectProtocolError(more);
    });

    test('results map back by request index, not by content', () async {
      final fake = FakeTransport();
      fake.sendStatus(200, jsonEncode([item('r2'), item('r1')]));
      final b = backendWith(fake);
      final results = await b.pushBatch(twoOps());
      expect(results[0].opId, 'a', reason: 'index 0 is op a');
      expect(results[0].record!.id, 'r2');
      expect(results[1].opId, 'b');
      expect(results[1].record!.id, 'r1');
    });

    test('non-map entries are ProtocolErrors (never skipped)', () async {
      final fake = FakeTransport();
      fake.sendStatus(
          200,
          jsonEncode([
            'junk', // non-map -> protocol violation, not silently skipped
            {'body': item('r1')['body'], 'status': 200},
          ]));
      final b = backendWith(fake);
      await expectLater(
        b.pushBatch(twoOps()),
        throwsA(isA<ProtocolError>()),
      );
    });

    test('missing status/body handled without crashing', () async {
      final fake = FakeTransport();
      fake.sendStatus(
          200,
          jsonEncode(<Object?>[
            <String, Object?>{'status': 200}, // ok=true, no record
            <String, Object?>{}, // missing everything
          ]));
      final b = backendWith(fake);
      final results = await b.pushBatch(twoOps());
      expect(results.length, 2);
      expect(results[0].ok, isTrue);
      expect(results[0].record, isNull, reason: 'no body');
      expect(results[0].pushedJson, isNull);
      expect(results[1].ok, isFalse);
      expect(results[1].error, contains('batch item failed'));
    });

    test('per-item error message from response/message/status', () async {
      final fake = FakeTransport();
      fake.sendStatus(
          200,
          jsonEncode([
            {
              'status': 422,
              'response': {'message': 'validation failed'}
            },
            {'status': 500, 'message': 'boom'},
          ]));
      final b = backendWith(fake);
      final results = await b.pushBatch(twoOps());
      expect(results[0].error, 'validation failed');
      expect(results[1].error, 'boom');
    });

    test('malformed batch bodies are ProtocolErrors', () async {
      final notList = FakeTransport();
      notList.sendStatus(200, '{"nope":1}');
      final b1 = backendWith(notList);
      await expectLater(b1.pushBatch(twoOps()), throwsA(isA<ProtocolError>()));

      final badEnvelope = FakeTransport();
      badEnvelope.sendStatus(200, '{"data":{"results":"not-a-list"}}');
      final b2 = backendWith(badEnvelope);
      await expectLater(b2.pushBatch(twoOps()), throwsA(isA<ProtocolError>()));

      final scalar = FakeTransport();
      scalar.sendStatus(200, '42');
      final b3 = backendWith(scalar);
      await expectLater(b3.pushBatch(twoOps()), throwsA(isA<ProtocolError>()));
    });

    test('endpoint status matrix for pushBatch', () async {
      Future<void> expectStatus(int status, Type error) async {
        final fake = FakeTransport();
        if (status == 401) {
          fake.sendStatus(401, '{"message":"no"}');
          fake.sendStatus(401, '{"message":"no"}');
        } else {
          fake.sendStatus(status, '{"message":"boom"}');
        }
        final b = backendWith(fake);
        await expectLater(
            b.pushBatch(twoOps()),
            throwsA(
                isA<SyncError>().having((e) => e.runtimeType, 'type', error)),
            reason: 'status $status');
      }

      await expectStatus(400, BatchFailedError);
      await expectStatus(403, ForbiddenError);
      await expectStatus(401, AuthError);
      await expectStatus(429, ServerBusyError);
      await expectStatus(500, ServerError);
    });

    test('envelope forms with wrong cardinality are ProtocolErrors', () async {
      for (final body in [
        {
          'data': {
            'results': [item('r1')]
          }
        },
        {
          'results': [item('r1'), item('r2'), item('r3')]
        },
      ]) {
        final fake = FakeTransport();
        fake.sendStatus(200, jsonEncode(body));
        final b = backendWith(fake);
        await expectLater(
          b.pushBatch(twoOps()),
          throwsA(isA<ProtocolError>()),
          reason: 'envelope cardinality must match the request count: $body',
        );
      }
    });

    test('envelope form with a non-map entry is a ProtocolError', () async {
      final fake = FakeTransport();
      fake.sendStatus(
          200,
          jsonEncode({
            'data': {
              'results': [
                'junk',
                {'body': item('r2')['body'], 'status': 200},
              ]
            }
          }));
      final b = backendWith(fake);
      await expectLater(b.pushBatch(twoOps()), throwsA(isA<ProtocolError>()));
    });

    test('legacy envelopes with malformed inner shapes are ProtocolErrors',
        () async {
      for (final body in <Map<String, Object?>>[
        {
          'data': {'results': 'not-a-list'}
        },
        {
          'data': [1, 2]
        }, // data present but not a map; no top-level results
        {'data': {}}, // data map with no results
      ]) {
        final fake = FakeTransport();
        fake.sendStatus(200, jsonEncode(body));
        final b = backendWith(fake);
        await expectLater(
          b.pushBatch(twoOps()),
          throwsA(isA<ProtocolError>()),
          reason: '$body',
        );
      }
    });

    test('empty batch returns an empty result list', () async {
      final fake = FakeTransport();
      fake.sendStatus(200, '[]');
      final b = backendWith(fake);
      final results = await b.pushBatch(const []);
      expect(results, isEmpty);
    });

    test('probe status contract: only live answers enable', () async {
      // 200 -> enabled.
      final ok = FakeTransport();
      ok.sendStatus(200, '[]');
      final b1 = backendWith(ok);
      await b1.prepare();
      expect(b1.capabilities.batchEnabled, isTrue);

      // 400 (enabled server rejects empty batch) -> enabled.
      final bad = FakeTransport();
      bad.sendStatus(400, '{"message":"no requests"}');
      final b2 = backendWith(bad);
      await b2.prepare();
      expect(b2.capabilities.batchEnabled, isTrue, reason: '400 means alive');

      // 403 -> permanently disabled (no re-probe).
      final forbidden = FakeTransport();
      forbidden.sendStatus(403, '{"message":"disabled"}');
      final b3 = backendWith(forbidden);
      await b3.prepare();
      expect(b3.capabilities.batchEnabled, isFalse);
      await b3.prepare();
      expect(forbidden.sends.length, 1, reason: 'no re-probe after 403');

      // 401 -> prepare swallows the auth failure, batch stays disabled, and
      // the next start re-probes.
      final auth = FakeTransport();
      auth.sendStatus(401, '{"message":"no"}');
      auth.sendStatus(401, '{"message":"no"}');
      final b4 = backendWith(auth);
      await b4.prepare();
      expect(b4.capabilities.batchEnabled, isFalse);
      auth.sendStatus(200, '[]');
      await b4.prepare();
      expect(b4.capabilities.batchEnabled, isTrue,
          reason: 'a later start re-probes after a transient 401');

      // 500 -> transient; re-probes next start.
      final serverError = FakeTransport();
      serverError.sendStatus(500, '{"message":"boom"}');
      final b5 = backendWith(serverError);
      await b5.prepare();
      expect(b5.capabilities.batchEnabled, isFalse);
      serverError.sendStatus(200, '[]');
      await b5.prepare();
      expect(b5.capabilities.batchEnabled, isTrue);

      // Malformed body with 200 still enables (probe does not parse it).
      final malformed = FakeTransport();
      malformed.sendStatus(200, 'not json');
      final b6 = backendWith(malformed);
      await b6.prepare();
      expect(b6.capabilities.batchEnabled, isTrue);
    });
  });
}

Future<Stream<List<int>>> _threeBytes() async => Stream.value([1, 2, 3]);
