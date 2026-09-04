import 'dart:async';

import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/page_callbacks.dart';
import 'package:localpocket/src/kernel/sync/merge.dart';
import 'package:localpocket/src/platform/web/page/callback_server.dart';
import 'package:localpocket/src/platform/web/page/protocol.dart';
import 'package:localpocket/src/platform/web/worker/worker_engine.dart';
import 'package:test/test.dart';

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
}
