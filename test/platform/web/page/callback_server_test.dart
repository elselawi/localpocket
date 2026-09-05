import 'dart:async';

import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/files/blob_proxy.dart';
import 'package:localpocket/src/kernel/files/blob_store.dart';
import 'package:localpocket/src/kernel/page_callbacks.dart';
import 'package:localpocket/src/kernel/sync/merge.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:localpocket/src/kernel/sync/sync_proxy.dart';
import 'package:localpocket/src/kernel/sync/sync_wire.dart';
import 'package:localpocket/src/platform/web/page/blob_server.dart';
import 'package:localpocket/src/platform/web/page/callback_server.dart';
import 'package:localpocket/src/platform/web/page/protocol.dart';
import 'package:localpocket/src/platform/web/page/sync_server.dart';
import 'package:localpocket/src/platform/web/worker/worker_engine.dart';
import 'package:test/test.dart';

import '../../../support/fake_blob_store.dart';
import '../../../support/fake_sync_backend.dart';

/// A scripted worker-side channel: feeds the request to a handler and
/// resolves with whatever the handler returns (or fails).
final class _FakeChannel implements WorkerCallbackChannel {
  _FakeChannel(Future<Object?> Function(Map<String, Object?> message) handler)
      : _handler = handler;

  final Future<Object?> Function(Map<String, Object?> message) _handler;
  final List<Map<String, Object?>> sent = [];

  @override
  Future<Object?> call(Map<String, Object?> message) {
    sent.add(message);
    return _handler(message);
  }
}

Future<MergeResult?> _keepLocal(MergeContext ctx) async =>
    MergeResult(merged: {...ctx.local}, note: 'kept local');

void main() {
  group('PageCallbackServer', () {
    final resolver = CustomResolver(_keepLocal);
    final identityList =
        AppendOnlyListResolver(identity: (v) => (v as Map)['k']! as String);
    final server = PageCallbackServer(stores: {
      'widgets': StorePageCallbacks(
        resolvers: {'review': resolver, 'tags': identityList},
        validator: (record) => record['name'] == 'blocked' ? ['nope'] : [],
        documentMigrations: {
          2: (doc) => {...doc, 'v': 2},
        },
        migrationTransforms: {
          3: (row) => {...row, 't': 3},
        },
      ),
    });

    Map<String, Object?> request(String channel, Map<String, Object?> args) => {
          'kind': CallbackRpc.requestKind,
          'rpcId': 42,
          'channel': channel,
          'args': args,
        };

    Map<String, Object?> ctxArgs(String scope, {String? field}) => {
          'store': 'widgets',
          'recordId': 'r1',
          'id': scope == 'record' ? 'review' : 'tags',
          'scope': scope,
          if (field != null) 'field': field,
          'ctx': <String, Object?>{
            'store': 'widgets',
            'recordId': 'r1',
            'base': <String, Object?>{'tags': <Map<String, Object?>>[]},
            'local': <String, Object?>{'tags': <Map<String, Object?>>[]},
            'remote': <String, Object?>{'tags': <Map<String, Object?>>[]},
            'dirtyLocal': <String>[],
            'dirtyRemote': <String>[],
          },
        };

    test('non-callback messages return null so event handling proceeds', () {
      expect(server.serve({'kind': 'contract_event'}), completion(isNull));
    });

    test('record-scope resolver returns the encoded merge result', () async {
      final reply = await server.serve(request(
        callbackChannelResolver,
        {
          ...ctxArgs('record'),
          'ctx': {
            ...ctxArgs('record')['ctx'] as Map,
            'local': {'name': 'local'},
            'remote': {'name': 'remote'},
          },
        },
      ));
      expect(reply![CallbackRpc.ok], isTrue);
      expect(reply[CallbackRpc.rpcId], 42);
      final value = reply[CallbackRpc.value]! as Map;
      expect(value['merged'], {'name': 'local'});
      expect(value['note'], 'kept local');
    });

    test('field-scope built-in resolver applies field-level semantics',
        () async {
      // Append-only list semantics, not remote-wins: both sides' additions
      // survive.
      final reply = await server.serve(request(
        callbackChannelResolver,
        {
          ...ctxArgs('field', field: 'tags'),
          'ctx': {
            ...ctxArgs('field')['ctx'] as Map,
            'base': {
              'tags': [
                {'k': 'a'}
              ]
            },
            'local': {
              'tags': [
                {'k': 'a'},
                {'k': 'b'}
              ]
            },
            'remote': {
              'tags': [
                {'k': 'c'}
              ]
            },
          },
        },
      ));
      expect(reply![CallbackRpc.ok], isTrue);
      final value = reply[CallbackRpc.value]! as Map;
      expect((value['merged']! as Map)['tags'], [
        {'k': 'a'},
        {'k': 'b'},
        {'k': 'c'},
      ]);
    });

    test('validator round-trips the message list', () async {
      final blocked = await server.serve(request(
        callbackChannelValidator,
        {
          'store': 'widgets',
          'record': {'name': 'blocked'}
        },
      ));
      expect(blocked![CallbackRpc.value], ['nope']);
      final passing = await server.serve(request(
        callbackChannelValidator,
        {
          'store': 'widgets',
          'record': {'name': 'fine'}
        },
      ));
      expect(passing![CallbackRpc.value], isEmpty);
    });

    test('document migration and transform hooks round-trip', () async {
      final migrated = await server.serve(request(
        callbackChannelDocumentMigration,
        {
          'store': 'widgets',
          'toVersion': 2,
          'document': {'name': 'x'},
        },
      ));
      expect(migrated![CallbackRpc.value], {'name': 'x', 'v': 2});
      final transformed = await server.serve(request(
        callbackChannelMigrationTransform,
        {
          'store': 'widgets',
          'toVersion': 3,
          'document': {'name': 'y'},
        },
      ));
      expect(transformed![CallbackRpc.value], {'name': 'y', 't': 3});
    });

    test('unknown stores, ids, and channels fail with typed messages',
        () async {
      final cases = <Map<String, Object?>>[
        request(
            callbackChannelResolver, {...ctxArgs('record'), 'store': 'ghosts'}),
        request(
            callbackChannelResolver, {...ctxArgs('record'), 'id': 'unknown'}),
        request('not-a-channel', {}),
        request(callbackChannelValidator, {'store': 'ghosts', 'record': {}}),
        request(callbackChannelDocumentMigration,
            {'store': 'widgets', 'toVersion': 9, 'document': {}}),
      ];
      for (final payload in cases) {
        final reply = await server.serve(payload);
        expect(reply![CallbackRpc.ok], isFalse, reason: '$payload');
        expect(reply[CallbackRpc.error], isA<String>());
      }
    });

    test('malformed arguments fail instead of throwing across the boundary',
        () async {
      final reply = await server.serve(request(callbackChannelResolver, {
        'store': 'widgets',
        'id': 'review',
        'scope': 'record',
        'ctx': 'not-a-map',
      }));
      expect(reply![CallbackRpc.ok], isFalse);
    });
  });

  group('WorkerCallbackBridge', () {
    test('invoke without a connected page fails typed', () async {
      final bridge = WorkerCallbackBridge();
      await expectLater(
        bridge.invoke('validator', const {}),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('No connected'))),
      );
    });

    test('a page failure envelope surfaces as a typed error', () async {
      final bridge = WorkerCallbackBridge();
      bridge.attach(_FakeChannel((message) async => {
            'kind': CallbackRpc.resultKind,
            'rpcId': message['rpcId'],
            'ok': false,
            'error': 'page-side boom',
          }));
      await expectLater(
        bridge.invoke('validator', const {}),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('page-side boom'))),
      );
    });

    test('a timeout fails typed without hanging', () async {
      final bridge =
          WorkerCallbackBridge(timeout: const Duration(milliseconds: 20));
      bridge.attach(_FakeChannel((message) => Completer<Object?>().future));
      await expectLater(
        bridge.invoke('validator', const {}),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('did not answer'))),
      );
    });

    test('malformed replies fail with protocol errors', () async {
      final bridge = WorkerCallbackBridge();
      bridge.attach(_FakeChannel((message) async => 'not-a-map'));
      await expectLater(
        bridge.invoke('validator', const {}),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
      bridge.attach(_FakeChannel((message) async => {
            'kind': 'bogus',
            'ok': true,
          }));
      await expectLater(
        bridge.invoke('validator', const {}),
        throwsA(isA<ProtocolEnvelopeException>()),
      );
    });

    test('a successful reply passes the value through', () async {
      final bridge = WorkerCallbackBridge();
      bridge.attach(_FakeChannel((message) async => {
            'kind': CallbackRpc.resultKind,
            'rpcId': message['rpcId'],
            'ok': true,
            'value': ['a', 'b'],
          }));
      expect(await bridge.invoke('validator', const {}), ['a', 'b']);
    });

    test('requests carry the callback envelope vocabulary', () async {
      final channel = _FakeChannel((message) async => {
            'kind': CallbackRpc.resultKind,
            'rpcId': message['rpcId'],
            'ok': true,
            'value': null,
          });
      final bridge = WorkerCallbackBridge();
      bridge.attach(channel);
      expect(await bridge.invoke('validator', {'store': 'widgets'}), isNull);
      expect(channel.sent.single['kind'], CallbackRpc.requestKind);
      expect(channel.sent.single['channel'], 'validator');
      expect(channel.sent.single['args'], {'store': 'widgets'});
    });
  });

  group('SyncBackendServer (proxy sync channel)', () {
    late FakeSyncBackendFactory factory;
    late SyncBackendServer server;
    late ProxyBackendHub hub;
    late ServerCallbackInvoker invoker;
    late ProxySyncBackendFactory proxyFactory;
    final tokens = ScriptedTokenSource('jwt-1');

    /// Creates the page-backed proxy the way the worker open wires it:
    /// factory.create over the loopback invoker, hints/token reads routed
    /// back through the hub.
    Future<ProxySyncBackend> create() async {
      factory = FakeSyncBackendFactory();
      server = SyncBackendServer(
        factory: factory,
        push: (Map<String, Object?> args) => invoker.push(args),
      );
      hub = ProxyBackendHub();
      invoker = ServerCallbackInvoker(server.serve,
          onPush: (envelope) =>
              hub.pageCall((envelope['a'] as Map).cast<String, Object?>()));
      proxyFactory = ProxySyncBackendFactory(invoker: invoker, hub: hub);
      final backend = await proxyFactory.create(
        baseUrl: Uri.parse('http://pb.test'),
        tokenSource: tokens,
        stores: const ['widgets'],
        identity: 'account-1',
      );
      return backend as ProxySyncBackend;
    }

    test(
        'create forwards baseUrl/stores/identity and caches the sync '
        'facts', () async {
      final proxy = await create();
      expect(factory.creates.single.baseUrl, Uri.parse('http://pb.test'));
      expect(factory.creates.single.stores, ['widgets']);
      expect(factory.creates.single.identity, 'account-1');
      expect(proxy.capabilities.batchEnabled, isTrue);
      expect(proxy.capabilities.maxBatch, 10);
      expect(proxy.capabilities.maxPage, 300);
      expect(proxy.scopeId, 'fake-scope');
      expect(invoker.sent.single['method'], 'create');
    });

    test('prepare, listChanges, and getRecord round-trip their contracts',
        () async {
      final proxy = await create();
      final backend = factory.backend;
      final record = RemoteRecord(
        id: 'r1',
        store: 'widgets',
        updated: '2026-01-01 00:00:00.000Z',
        data: {'name': 'pulled'},
        attachments: const ['a.bin'],
      );
      backend.changes = [record];

      await proxy.prepare();
      expect(backend.prepareCalls, 1);

      final page = await proxy.listChanges(
        'widgets',
        fromUpdated: '2026-01-01 00:00:00.000Z',
        fromId: 'r0',
        idPrefix: 'abc',
        perPage: 33,
      );
      expect(page.single.id, 'r1');
      expect(page.single.store, 'widgets');
      expect(page.single.updated, '2026-01-01 00:00:00.000Z');
      expect(page.single.data, {'name': 'pulled'});
      expect(page.single.attachments, ['a.bin']);
      expect(backend.listChangesCalls.single.perPage, 33);
      expect(backend.listChangesCalls.single.idPrefix, 'abc');

      backend.recordToReturn = record;
      final got = await proxy.getRecord('r1');
      expect(got!.data, {'name': 'pulled'});
      // An absent remote record stays absent (never fabricated).
      backend.recordToReturn = null;
      expect(await proxy.getRecord('missing'), isNull);
    });

    test(
        'createRecord is idempotency-transparent; a duplicate-id replay '
        'fails with the exact typed error', () async {
      final proxy = await create();
      final backend = factory.backend;
      final first = await proxy.createRecord(
          id: 'rec1', store: 'widgets', dataJson: '{"name":"x"}');
      expect(backend.created.single.id, 'rec1');
      expect(first.data['echo'], '{"name":"x"}');
      // The replay (lost response) fails exactly as the page backend did.
      backend.throwOnCreate = DuplicateIdError('already there');
      await expectLater(
        proxy.createRecord(
            id: 'rec1', store: 'widgets', dataJson: '{"name":"x"}'),
        throwsA(isA<DuplicateIdError>()
            .having((e) => e.message, 'message', 'already there')),
      );
    });

    test(
        'updateRecord reconstructs RemoteVersionConflict with its current '
        'record', () async {
      final proxy = await create();
      final backend = factory.backend;
      backend.throwOnUpdate = RemoteVersionConflict(
          message: 'remote moved', current: _conflictCurrent());
      await expectLater(
        proxy.updateRecord(id: 'r1', dataJson: '{}', baseUpdated: 'stale'),
        throwsA(isA<RemoteVersionConflict>()
            .having((e) => e.message, 'message', 'remote moved')
            .having((e) => e.current!.id, 'current.id', 'cur1')
            .having(
                (e) => e.current!.data, 'current.data', {'name': 'moved-on'})),
      );
      expect(backend.updated.single.baseUpdated, 'stale');
    });

    test('file uploads and downloads cross chunked and byte-equal', () async {
      final proxy = await create();
      final backend = factory.backend;
      // One byte past the chunk size forces a two-chunk upload.
      final big = List<int>.generate(proxyChunkBytes + 7, (i) => i % 251);
      final record = await proxy.updateRecordFilesStream(
        id: 'r1',
        dataJson: '{"name":"with-file"}',
        uploads: {
          'field1': StreamFileUpload(
            filename: 'a.bin',
            length: big.length,
            streamFactory: () async => Stream.value(big),
          ),
        },
        keepNames: ['a.bin'],
      );
      final received = backend.receivedStreams['field1']!;
      expect(received.filename, 'a.bin');
      expect(received.bytes, big);
      expect(record.data['received'], 1);
      expect(
        invoker.sent.map((m) => m['method']),
        containsAllInOrder([
          'uploadBegin',
          'uploadChunk',
          'uploadChunk',
          'updateRecordFilesStream'
        ]),
      );

      // The buffered (non-stream) upload path crosses the same way.
      await proxy.updateRecordFiles(id: 'r1', uploads: {
        'bytes': [1, 2, 3]
      });
      expect(backend.receivedFiles['bytes'], [1, 2, 3]);

      // Download streams chunk by chunk and reassembles byte-equal.
      backend.downloadable['a.bin'] = big;
      final Stream<List<int>> stream = await proxy.downloadFile(
          recordId: 'r1', filename: 'a.bin', thumb: '100x100');
      final chunks = await stream.toList();
      expect(chunks.expand((List<int> c) => c), big);
      expect(backend.downloadCalls.single.thumb, '100x100');
      expect(
        invoker.sent.map((m) => m['method']),
        containsAllInOrder(
            ['downloadBegin', 'downloadChunk', 'downloadChunk', 'downloadEnd']),
      );
    });

    test('pushBatch forwards opIds untouched and returns typed results',
        () async {
      final proxy = await create();
      final backend = factory.backend;
      final ops = [
        const PushOp(
          opId: 'op-1',
          store: 'widgets',
          id: 'rec1',
          dataJson: '{"name":"a"}',
          baseUpdated: '2026-01-01 00:00:00.000Z',
        ),
        const PushOp(
          opId: 'op-2',
          store: 'widgets',
          id: 'rec2',
          dataJson: '{"name":"b"}',
          upsert: true,
        ),
      ];
      backend.batchResults = [
        PushResult(
          opId: 'op-1',
          ok: true,
          record: RemoteRecord(
            id: 'rec1',
            store: 'widgets',
            updated: '2026-01-02 00:00:00.000Z',
            data: const {'name': 'a'},
          ),
        ),
        const PushResult(opId: 'op-2', ok: false, error: 'rejected'),
      ];
      final results = await proxy.pushBatch(ops);
      expect(results.length, 2);
      expect(results[0].ok, isTrue);
      expect(results[0].record!.id, 'rec1');
      expect(results[1].ok, isFalse);
      expect(results[1].error, 'rejected');
      // Idempotency transparency: (scopeId, opId) crosses untouched.
      expect(backend.pushBatchCalls.single[0].opId, 'op-1');
      expect(backend.pushBatchCalls.single[0].baseUpdated,
          '2026-01-01 00:00:00.000Z');
      expect(backend.pushBatchCalls.single[1].upsert, isTrue);
      expect(backend.pushBatchCalls.single[1].baseUpdated, isNull);
    });

    test('every SyncError kind reconstructs as its exact type', () async {
      final proxy = await create();
      final backend = factory.backend;
      for (final (error, matcher) in _syncErrorCases) {
        backend.throwOnPrepare = error;
        await expectLater(
          proxy.prepare(),
          throwsA(matcher),
          reason: '${error.runtimeType} must reconstruct as its exact type',
        );
      }
      backend.throwOnPrepare = _noError;
    });

    test('hints flow page → worker into the proxy stream', () async {
      final proxy = await create();
      final backend = factory.backend;
      final seen = <BackendHint>[];
      final sub = proxy.hints().listen(seen.add);
      addTearDown(sub.cancel);
      await pumpEventQueue();

      backend.emitHint(BackendHint(
          'widgets',
          BackendHintKind.changed,
          RemoteRecord(
            id: 'r9',
            store: 'widgets',
            updated: '2026-01-01 00:00:00.000Z',
            data: const {'name': 'fast'},
          )));
      backend.emitHint(const BackendHint('widgets', BackendHintKind.deleted));
      await pumpEventQueue();

      expect(seen, hasLength(2));
      expect(seen[0].store, 'widgets');
      expect(seen[0].kind, BackendHintKind.changed);
      expect(seen[0].record!.data, {'name': 'fast'});
      expect(seen[1].kind, BackendHintKind.deleted);
      expect(seen[1].record, isNull);
    });

    test('the page backend reads the live token source through the channel',
        () async {
      final proxy = await create();
      final first =
          await proxy.createRecord(id: 'r1', store: 'widgets', dataJson: '{}');
      expect(first.data['token'], 'jwt-1');
      // An auth update on the worker reaches the page backend without a
      // rebuild: the read happens per call.
      tokens.token = 'jwt-2';
      final second =
          await proxy.createRecord(id: 'r2', store: 'widgets', dataJson: '{}');
      expect(second.data['token'], 'jwt-2');
    });

    test('dispose releases the page backend and stops routing', () async {
      final proxy = await create();
      await proxyFactory.dispose(proxy);
      expect(factory.backend.disposed, isTrue);
      // Pushes for a stopped backend fail typed (the worker side drops the
      // registration; stale page pushes cannot reach a live engine).
      await expectLater(
        hub.pageCall(const {'backend': 999, 'call': 'currentToken'}),
        throwsA(isA<ValidationException>()),
      );
    });

    test(
        'page-side non-sync failures reconstruct as typed validation '
        'errors', () async {
      await create();
      // A method for an unknown backend instance fails typed on the page.
      final raw = await invoker.invoke(callbackChannelSyncBackend, {
        'method': 'scopeId',
        'backend': 4242,
      });
      expect(
        () => decodeBackendResponse(raw, where: 'scopeId()'),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('4242'))),
      );
    });
  });

  group('BlobStoreServer (proxy blob channel)', () {
    late ScriptedBlobStore pageStore;
    late BlobStoreServer server;
    late ServerCallbackInvoker invoker;
    late ProxyBlobStore proxy;

    setUp(() {
      pageStore = ScriptedBlobStore();
      server = BlobStoreServer(store: pageStore);
      invoker = ServerCallbackInvoker(server.serve, onPush: (_) async => null);
      proxy = ProxyBlobStore(invoker: invoker);
    });

    test('put crosses chunked and byte-equal with its expectations', () async {
      // One byte past the chunk size forces multiple chunk messages.
      final big = List<int>.generate(proxyChunkBytes + 9, (i) => i % 253);
      final hash = await proxy.put(
        Stream.value(big),
        expectedSha256: 'a' * 64,
        expectedSize: big.length,
        key: 'k1',
      );
      expect(hash, 'a' * 64);
      expect(pageStore.blobs['a' * 64], big);
      final put = pageStore.puts['a' * 64]!;
      expect(put.expectedSha256, 'a' * 64);
      expect(put.expectedSize, big.length);
      expect(put.key, 'k1');
      expect(
        invoker.sent.map((m) => m['method']),
        containsAllInOrder(['putBegin', 'putChunk', 'putChunk', 'putFinish']),
      );
    });

    test('open streams back chunked and byte-equal', () async {
      final big = List<int>.generate(200000, (i) => i % 249);
      pageStore.blobs['b' * 64] = big;
      final stream = await proxy.open('b' * 64);
      final received = await stream.expand((c) => c).toList();
      expect(received, big);
      expect(
        invoker.sent.map((m) => m['method']),
        containsAllInOrder(['openBegin', 'openChunk', 'openChunk', 'openEnd']),
      );
    });

    test(
        'metadata methods round-trip with honest nulls and page '
        'durability', () async {
      expect(await proxy.exists('c' * 64), isFalse);
      expect(await proxy.size('c' * 64), isNull);
      // modifiedAt on an unknown hash stays null — never fabricated.
      expect(await proxy.modifiedAt('c' * 64), isNull);
      expect(await proxy.isDurable, isTrue,
          reason: 'isDurable reflects the PAGE store, not the worker');
      expect(await proxy.listHashes(), isEmpty);
      expect(await proxy.cleanTmp(olderThan: const Duration(hours: 1)), 0);
      expect(
        invoker.sent.singleWhere((m) => m['method'] == 'cleanTmp'),
        containsPair('olderThanMs', 3600000),
      );

      pageStore.blobs['c' * 64] = [1, 2, 3];
      pageStore.modified['c' * 64] = 4242;
      expect(await proxy.exists('c' * 64), isTrue);
      expect(await proxy.size('c' * 64), 3);
      expect(await proxy.modifiedAt('c' * 64), 4242);
      expect(await proxy.listHashes(), ['c' * 64]);
    });

    test('blob errors reconstruct as the exact types', () async {
      pageStore.putError = BlobStorageException('quota blown', 'e' * 64);
      await expectLater(
        proxy.put(Stream.value([1])),
        throwsA(isA<BlobStorageException>()
            .having((e) => e.hash, 'hash', 'e' * 64)
            .having((e) => e.cause, 'cause', 'quota blown')),
      );

      // Missing-blob classification survives the channel.
      await expectLater(
        proxy.open('d' * 64),
        throwsA(
            isA<BlobMissingError>().having((e) => e.hash, 'hash', 'd' * 64)),
      );
      await expectLater(
        proxy.delete('d' * 64),
        throwsA(isA<BlobMissingError>()),
      );
      try {
        await proxy.open('d' * 64);
        fail('expected BlobMissingError');
      } catch (e) {
        expect(isBlobMissing(e), isTrue,
            reason: 'the caller classifies via isBlobMissing');
      }
    });
  });

  group('sync_wire strict decoding', () {
    test(
        'every wrong-typed field fails with a ValidationException naming '
        'the location', () {
      void expectThrows(Object? Function() f, String fragment) {
        expect(
            f,
            throwsA(isA<ValidationException>()
                .having((e) => e.message, 'message', contains(fragment))));
      }

      // Response envelope.
      expectThrows(
          () => decodeBackendResponse('nope', where: 'w'), 'must be a map');
      expectThrows(
          () => decodeBackendResponse({'ok': 'yes'}, where: 'w'), '"ok"');
      expectThrows(() => decodeBackendResponse({'ok': false}, where: 'w'),
          'exactly one');
      expectThrows(
          () =>
              decodeBackendResponse({'ok': false, 'pageError': 5}, where: 'w'),
          '"pageError"');

      // Sync errors.
      expectThrows(() => decodeSyncError(7, where: 'w'), 'must be a map');
      expectThrows(
          () => decodeSyncError({'kind': 'nope'}, where: 'w'), 'Unknown');
      expectThrows(
          () => decodeSyncError({'kind': 'serverBusy', 'retryAfter': 5},
              where: 'w'),
          '"retryAfter"');
      expectThrows(
          () => decodeSyncError({
                'kind': 'remoteVersionConflict',
                'current': {'nope': true},
              }, where: 'w'),
          'current');

      // Records and ops.
      expectThrows(() => decodeRemoteRecord({'id': 5}, where: 'w'), '"id"');
      expect(
          decodeRemoteRecord(<String, Object?>{
            'id': 'a',
            'store': 's',
            'updated': 'u',
            'data': <String, Object?>{},
          }, where: 'w')
              .attachments,
          isEmpty,
          reason: 'attachments is absent-optional');
      expectThrows(
          () => decodeRemoteRecord(<String, Object?>{
                'id': 'a',
                'store': 's',
                'updated': 'u',
                'data': <String, Object?>{},
                'attachments': [5],
              }, where: 'w'),
          '"attachments"');
      expectThrows(() => decodePushOp({'opId': 1}, where: 'w'), '"opId"');
      expectThrows(
          () => decodePushOp({
                'opId': 'o',
                'store': 's',
                'id': 'i',
                'dataJson': 'd',
                'upsert': 'yes'
              }, where: 'w'),
          '"upsert"');
      expectThrows(
          () => decodePushResult({'opId': 'o', 'ok': 'x'}, where: 'w'), '"ok"');
      expectThrows(
          () => decodeBackendCapabilities({'maxPage': 'x'}, where: 'w'),
          '"maxPage"');
      expectThrows(
          () => decodeBackendHint({'store': 's', 'kind': 'nope'}, where: 'w'),
          'BackendHintKind');
      expectThrows(() => decodeBytes(5, where: 'w'), 'base64');
    });
  });
}

// ---------------------------------------------------------------------------
// The proxy sync channel helpers (see the SyncBackendServer group above).
// ---------------------------------------------------------------------------

const SyncError? _noError = null;

final List<(SyncError, Matcher)> _syncErrorCases = [
  (
    TransientNetworkError('reset'),
    isA<TransientNetworkError>().having((e) => e.message, 'message', 'reset'),
  ),
  (
    ServerError('503'),
    isA<ServerError>().having((e) => e.message, 'message', '503'),
  ),
  (
    ServerBusyError('7', 'slow down'),
    isA<ServerBusyError>()
        .having((e) => e.retryAfter, 'retryAfter', '7')
        .having((e) => e.message, 'message', 'slow down'),
  ),
  (
    AuthError('expired'),
    isA<AuthError>().having((e) => e.message, 'message', 'expired'),
  ),
  (
    ForbiddenError('no'),
    isA<ForbiddenError>().having((e) => e.message, 'message', 'no'),
  ),
  (
    NotFoundError('gone'),
    isA<NotFoundError>().having((e) => e.message, 'message', 'gone'),
  ),
  (
    PayloadError('too big'),
    isA<PayloadError>().having((e) => e.message, 'message', 'too big'),
  ),
  (
    ProtocolError('bad'),
    isA<ProtocolError>().having((e) => e.message, 'message', 'bad'),
  ),
  (
    DuplicateIdError('dup'),
    isA<DuplicateIdError>().having((e) => e.message, 'message', 'dup'),
  ),
  (
    SyncIdentityError('no identity'),
    isA<SyncIdentityError>().having((e) => e.message, 'message', 'no identity'),
  ),
  (
    BatchFailedError('poison'),
    isA<BatchFailedError>().having((e) => e.message, 'message', 'poison'),
  ),
  (
    RemoteVersionConflict(message: 'moved', current: _conflictCurrent()),
    isA<RemoteVersionConflict>()
        .having((e) => e.message, 'message', 'moved')
        .having((e) => e.current!.id, 'current.id', 'cur1')
        .having((e) => e.current!.data, 'current.data', {'name': 'moved-on'}),
  ),
];

RemoteRecord _conflictCurrent() => RemoteRecord(
      id: 'cur1',
      store: 'widgets',
      updated: '2026-01-05 00:00:00.000Z',
      data: {'name': 'moved-on'},
    );
