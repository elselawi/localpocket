import 'dart:async';

import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/page_callbacks.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/kernel/schema_manifest.dart';
import 'package:localpocket/src/kernel/sync/merge.dart';
import 'package:test/test.dart';

Map<dynamic, dynamic> _store(Map<String, Object?>? envelope) =>
    envelope!['widgets']! as Map<dynamic, dynamic>;

class ThemedLocalWins extends LocalWinsResolver {
  const ThemedLocalWins();
}

CollectionSchema<Object?> _schema({
  String name = 'widgets',
  ConflictPolicy policy = const ConflictPolicy(),
  FutureOr<List<String>> Function(Map<String, Object?>)? validator,
  Map<int, DocumentMigration> documentMigrations = const {},
  List<StoreMigration> migrations = const [],
}) =>
    CollectionSchema<Object?>(
      name: name,
      version: 1,
      fields: [Field.text('name', required: true), Field.int('qty')],
      conflictPolicy: policy,
      validator: validator,
      documentMigrations: documentMigrations,
      migrations: migrations,
    );

/// A scripted [CallbackInvoker]: records invocations and answers each one by
/// delegating to the supplied handler.
final class _ScriptedInvoker implements CallbackInvoker {
  _ScriptedInvoker(
      Future<Object?> Function(String channel, Map<String, Object?> args) run)
      : _run = run;

  final Future<Object?> Function(String channel, Map<String, Object?> args)
      _run;
  final List<(String, Map<String, Object?>)> calls = [];

  @override
  Future<Object?> invoke(String channel, Map<String, Object?> args) {
    calls.add((channel, args));
    return _run(channel, args);
  }
}

void main() {
  group('encodeStorePolicies', () {
    test('returns null when every store uses default configuration', () {
      final envelope = encodeStorePolicies([_schema()], null);
      expect(envelope, isNull);
    });

    test('carries data-only conflict policy without any callback ids', () {
      final schema = _schema(
        policy: const ConflictPolicy(
          editsUnarchive: true,
          missingRemote: MissingRemotePolicy.recreate,
        ),
      );
      final envelope = encodeStorePolicies([schema], null)!;
      expect(envelope['widgets'], {
        'conflictPolicy': {
          'editsUnarchive': true,
          'missingRemote': 'recreate',
        },
      });
    });

    test('encodes every closure-free built-in resolver structurally', () {
      final schema = _schema(
        policy: ConflictPolicy(
          collectionResolver: const LocalWinsResolver(),
          fieldOverrides: {
            'qty': const RemoteWinsResolver(),
            'name': const SetUnionWithDeletionWinsResolver(),
          },
        ),
      );
      final envelope = encodeStorePolicies([schema], null)!;
      final policy =
          _store(envelope)['conflictPolicy'] as Map<dynamic, dynamic>;
      expect(policy['collectionResolver'], {'kind': 'localWins'});
      final overrides = policy['fieldOverrides'] as Map;
      expect(overrides['qty'], {'kind': 'remoteWins'});
      expect(
          policy['fieldOverrides']['name'], {'kind': 'setUnionDeletionWins'});
    });

    test('encodes counter bounds and the append-only resolvers', () {
      final schema = _schema(
        policy: const ConflictPolicy(
          fieldOverrides: {
            'qty': CounterResolver(min: 0, max: 10),
            'name': AppendOnlyLinesResolver(),
          },
        ),
      );
      final envelope = encodeStorePolicies([schema], null)!;
      final overrides =
          _store(envelope)['conflictPolicy']['fieldOverrides'] as Map;
      expect(overrides['qty'], {'kind': 'counter', 'min': 0, 'max': 10});
      expect(overrides['name'], {'kind': 'appendOnlyLines'});
    });

    test('a closure-free AppendOnlyListResolver is structural', () {
      final schema = _schema(
        policy: const ConflictPolicy(
          fieldOverrides: {'tags': AppendOnlyListResolver()},
        ),
      );
      final envelope = encodeStorePolicies([schema], null)!;
      final overrides =
          _store(envelope)['conflictPolicy']['fieldOverrides'] as Map;
      expect(overrides['tags'], {'kind': 'appendOnlyList'});
    });

    test('an executable resolver must be registered', () {
      final schema = _schema(
        policy: ConflictPolicy(
          collectionResolver: CustomResolver((ctx) => null),
        ),
      );
      expect(
        () => encodeStorePolicies([schema], null),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('not registered'))),
      );
    });

    test('a registered CustomResolver is referenced by identity', () {
      const resolver = CustomResolver(_decline);
      final schema =
          _schema(policy: ConflictPolicy(collectionResolver: resolver));
      final envelope = encodeStorePolicies([
        schema
      ], {
        'widgets': StorePageCallbacks(resolvers: {'review': resolver}),
      })!;
      expect(_store(envelope)['conflictPolicy']['collectionResolver'],
          {'kind': 'custom', 'id': 'review'});
    });

    test('a built-in resolver subclass is executable, never structural', () {
      final schema = _schema(
        policy: const ConflictPolicy(
          fieldOverrides: {'name': ThemedLocalWins()},
        ),
      );
      expect(
        () => encodeStorePolicies([schema], null),
        throwsA(isA<ValidationException>()),
      );
    });

    test('an identity-bearing AppendOnlyListResolver must be registered', () {
      final schema = _schema(
        policy: ConflictPolicy(
          fieldOverrides: {
            'name': AppendOnlyListResolver(identity: (v) => v.toString()),
          },
        ),
      );
      expect(
        () => encodeStorePolicies([schema], null),
        throwsA(isA<ValidationException>()),
      );
    });

    test('registry coverage must match the schema exactly', () {
      final validatorSchema = _schema(validator: (doc) => const <String>[]);
      expect(
        () => encodeStorePolicies([validatorSchema], null),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('validator'))),
      );

      final plainSchema = _schema();
      expect(
        () => encodeStorePolicies([
          plainSchema
        ], {
          'widgets': const StorePageCallbacks(validator: _emptyValidator),
        }),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('validator'))),
      );

      final migratedSchema = _schema(documentMigrations: {2: _addVersion});
      expect(
        () => encodeStorePolicies([migratedSchema], null),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('document'))),
      );

      final transformSchema = _schema(migrations: [
        StoreMigration(toVersion: 2, transform: (row) => row),
      ]);
      expect(
        () => encodeStorePolicies([transformSchema], null),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('transform'))),
      );

      // A registration for a store outside the open call is rejected.
      expect(
        () => encodeStorePolicies(
            [plainSchema], {'ghosts': const StorePageCallbacks()}),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('ghosts'))),
      );
    });

    test('an unused registered resolver id is rejected', () {
      const resolver = CustomResolver(_decline);
      final schema = _schema(
        policy: ConflictPolicy(collectionResolver: resolver),
      );
      expect(
        () => encodeStorePolicies([
          schema
        ], {
          'widgets': StorePageCallbacks(resolvers: {
            'review': resolver,
            'unused': const LocalWinsResolver(),
          }),
        }),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('unused'))),
      );
    });
  });

  group('attachStorePolicy', () {
    test('data-only policies survive the plain-JSON round trip', () {
      final page = _schema(
        policy: const ConflictPolicy(
          editsUnarchive: true,
          missingRemote: MissingRemotePolicy.recreate,
        ),
      );
      final reparsed = CollectionSchema<Object?>.fromJson(page.toJson());
      // The plain JSON drops the policy; the envelope restores it.
      final attached = attachStorePolicy(
        reparsed,
        encodeStorePolicies([page], null)!['widgets'],
        invoker: null,
      );
      expect(attached.conflictPolicy.editsUnarchive, isTrue);
      expect(
          attached.conflictPolicy.missingRemote, MissingRemotePolicy.recreate);
      // The manifest handshake compares page and worker compilations.
      expect(
        SchemaManifest.compile(page).fingerprint,
        SchemaManifest.compile(attached).fingerprint,
      );
    });

    test('structural resolvers reconstruct as the real classes', () {
      final page = _schema(
        policy: ConflictPolicy(
          collectionResolver: const LocalWinsResolver(),
          fieldOverrides: {'qty': const CounterResolver(min: 0)},
        ),
      );
      final reparsed = CollectionSchema<Object?>.fromJson(page.toJson());
      final attached = attachStorePolicy(
        reparsed,
        encodeStorePolicies([page], null)!['widgets'],
        invoker: null,
      );
      expect(
          attached.conflictPolicy.collectionResolver, isA<LocalWinsResolver>());
      final override = attached.conflictPolicy.fieldOverrides['qty']!;
      expect(override, isA<CounterResolver>());
      expect((override as CounterResolver).min, 0);
      expect(
        SchemaManifest.compile(page).fingerprint,
        SchemaManifest.compile(attached).fingerprint,
      );
    });

    test('custom resolvers attach as channel proxies and invoke the page',
        () async {
      const resolver = CustomResolver(_decline);
      final page = _schema(
        policy: ConflictPolicy(
          collectionResolver: resolver,
          fieldOverrides: {'qty': resolver},
        ),
      );
      final invoker = _ScriptedInvoker((channel, args) async {
        expect(channel, callbackChannelResolver);
        return {
          'merged': {...(args['ctx'] as Map)['local'] as Map, 'resolved': true},
          'needsReview': false,
        };
      });
      final reparsed = CollectionSchema<Object?>.fromJson(page.toJson());
      final attached = attachStorePolicy(
        reparsed,
        encodeStorePolicies([
          page
        ], {
          'widgets': StorePageCallbacks(resolvers: {'review': resolver}),
        })!['widgets'],
        invoker: invoker,
      );

      final collection = attached.conflictPolicy.collectionResolver!;
      expect(collection, isA<ProxiedResolver>());
      final result = await collection.resolve(MergeContext(
        store: 'widgets',
        recordId: 'r1',
        base: {'qty': 1},
        local: {'qty': 2},
        remote: {'qty': 3},
      ));
      expect(result!.merged['resolved'], isTrue);
      expect(invoker.calls.single.$2['id'], 'review');
      expect(invoker.calls.single.$2['scope'], resolverScopeRecord);

      final field =
          attached.conflictPolicy.fieldOverrides['qty']! as ProxiedResolver;
      await field.resolve(MergeContext(
        store: 'widgets',
        recordId: 'r1',
        base: {'qty': 1},
        local: {'qty': 2},
        remote: {'qty': 3},
      ));
      expect(invoker.calls.last.$2['scope'], resolverScopeField);
      expect(invoker.calls.last.$2['field'], 'qty');
    });

    test('custom resolvers require a callback channel', () {
      const resolver = CustomResolver(_decline);
      final page = _schema(
        policy: ConflictPolicy(collectionResolver: resolver),
      );
      final reparsed = CollectionSchema<Object?>.fromJson(page.toJson());
      expect(
        () => attachStorePolicy(
          reparsed,
          encodeStorePolicies([
            page
          ], {
            'widgets': StorePageCallbacks(resolvers: {'review': resolver}),
          })!['widgets'],
          invoker: null,
        ),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('callback channel'))),
      );
    });

    test('a declined (null) page answer stays null for the merge engine',
        () async {
      const resolver = CustomResolver(_decline);
      final page = _schema(
        policy: ConflictPolicy(collectionResolver: resolver),
      );
      final attached = attachStorePolicy(
        CollectionSchema<Object?>.fromJson(page.toJson()),
        encodeStorePolicies([
          page
        ], {
          'widgets': StorePageCallbacks(resolvers: {'review': resolver}),
        })!['widgets'],
        invoker: _ScriptedInvoker((channel, args) async => null),
      );
      final result = await attached.conflictPolicy.collectionResolver!
          .resolve(MergeContext(
        store: 'widgets',
        recordId: 'r1',
        base: {'qty': 1},
        local: {'qty': 2},
        remote: {'qty': 3},
      ));
      expect(result, isNull);
    });

    test('validator, document-migration, and transform hooks attach', () async {
      final page = _schema(
        validator: (doc) => const <String>[],
        documentMigrations: {2: _addVersion},
        migrations: [StoreMigration(toVersion: 2, transform: (row) => row)],
      );
      final invoker = _ScriptedInvoker((channel, args) async {
        switch (channel) {
          case callbackChannelValidator:
            return ['blocked'];
          case callbackChannelDocumentMigration:
            return {...(args['document'] as Map), 'version': 2};
          case callbackChannelMigrationTransform:
            return {'name': (args['document'] as Map)['name']};
          default:
            throw StateError('unexpected channel $channel');
        }
      });
      final reparsed = CollectionSchema<Object?>.fromJson(page.toJson());
      final attached = attachStorePolicy(
        reparsed,
        encodeStorePolicies([
          page
        ], {
          'widgets': const StorePageCallbacks(
            validator: _emptyValidator,
            documentMigrations: {2: _addVersion},
            migrationTransforms: {2: _identity},
          ),
        })!['widgets'],
        invoker: invoker,
      );

      expect(await attached.validator!({'name': 'x'}), ['blocked']);
      expect(await attached.documentMigrations[2]!({'name': 'x'}),
          {'name': 'x', 'version': 2});
      expect(
          (await attached.migrations.single.transform!({'name': 'y'}))['name'],
          'y');
      final channels = invoker.calls.map((c) => c.$1).toList();
      expect(
        channels,
        containsAllInOrder([
          callbackChannelValidator,
          callbackChannelDocumentMigration,
          callbackChannelMigrationTransform,
        ]),
      );
    });

    test('channel-backed hooks require an invoker', () {
      final page = _schema(validator: (doc) => const <String>[]);
      final reparsed = CollectionSchema<Object?>.fromJson(page.toJson());
      expect(
        () => attachStorePolicy(
          reparsed,
          encodeStorePolicies([
            page
          ], {
            'widgets': const StorePageCallbacks(validator: _emptyValidator),
          })!['widgets'],
          invoker: null,
        ),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('callback channel'))),
      );
    });

    test('malformed envelope values fail typed, never by cast', () {
      final plain = attachTarget();
      expect(
        () => attachStorePolicy(plain, 'nope', invoker: null),
        throwsA(isA<ValidationException>()),
      );
      expect(
        () =>
            attachStorePolicy(plain, {'conflictPolicy': 'nope'}, invoker: null),
        throwsA(isA<ValidationException>()),
      );
      expect(
        () => attachStorePolicy(
            plain,
            {
              'conflictPolicy': {
                'collectionResolver': {'kind': 'bogus'},
              },
            },
            invoker: null),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('bogus'))),
      );
      expect(
        () => attachStorePolicy(
            plain,
            {
              'conflictPolicy': {
                'collectionResolver': {'kind': 'counter', 'min': 'zero'},
              },
            },
            invoker: null),
        throwsA(isA<ValidationException>()),
      );
      expect(
        () => attachStorePolicy(plain, {'validator': 'yes'}, invoker: null),
        throwsA(isA<ValidationException>()),
      );
      expect(
        () => attachStorePolicy(
            plain,
            {
              'documentMigrations': ['two']
            },
            invoker: null),
        throwsA(isA<ValidationException>()),
      );
      expect(
        () => attachStorePolicy(
            plain,
            {
              'conflictPolicy': {'missingRemote': 'explode'},
            },
            invoker: null),
        throwsA(isA<ValidationException>()
            .having((e) => e.message, 'message', contains('missingRemote'))),
      );
    });
  });

  group('executableFeaturesSupported', () {
    test('structural resolvers need no channel', () {
      final schema = _schema(
        policy: ConflictPolicy(
          collectionResolver: const LocalWinsResolver(),
          fieldOverrides: {'qty': const CounterResolver(min: 0)},
        ),
      );
      expect(executableFeaturesSupported(schema, null), isTrue);
    });

    test('data-only policies need no channel', () {
      final schema = _schema(
        policy: const ConflictPolicy(
          editsUnarchive: true,
          missingRemote: MissingRemotePolicy.discardLocal,
        ),
      );
      expect(executableFeaturesSupported(schema, null), isTrue);
    });

    test('executable members need a channel', () {
      const resolver = CustomResolver(_decline);
      expect(
        executableFeaturesSupported(
          _schema(policy: ConflictPolicy(collectionResolver: resolver)),
          null,
        ),
        isFalse,
      );
      expect(
        executableFeaturesSupported(_schema(validator: (d) => const []), null),
        isFalse,
      );
      expect(
        executableFeaturesSupported(
            _schema(documentMigrations: {2: _addVersion}), null),
        isFalse,
      );
      expect(
        executableFeaturesSupported(
          _schema(migrations: [
            StoreMigration(toVersion: 2, transform: (row) => row),
          ]),
          null,
        ),
        isFalse,
      );
      // With a channel everything is runnable.
      final invoker = _ScriptedInvoker((channel, args) async => null);
      expect(
        executableFeaturesSupported(
          _schema(policy: ConflictPolicy(collectionResolver: resolver)),
          invoker,
        ),
        isTrue,
      );
    });
  });

  group('merge context/result codecs', () {
    test('context round-trips through the wire form', () {
      final ctx = MergeContext(
        store: 'widgets',
        recordId: 'r1',
        base: {
          'name': 'base',
          'meta': {'a': 1}
        },
        local: {
          'name': 'local',
          'meta': {'a': 2}
        },
        remote: {
          'name': 'remote',
          'meta': {'a': 1}
        },
      );
      final decoded =
          decodeMergeContext(encodeMergeContext(ctx), where: 'test');
      expect(decoded.store, 'widgets');
      expect(decoded.recordId, 'r1');
      expect(decoded.base, ctx.base);
      expect(decoded.local, ctx.local);
      expect(decoded.remote, ctx.remote);
      expect(decoded.dirtyLocal, {'name', 'meta', 'meta.a'});
      expect(decoded.dirtyRemote, {'name'});
    });

    test('result round-trips and rejects wrong-typed values', () {
      final result = const MergeResult(
        merged: {'name': 'x'},
        needsReview: true,
        note: 'review me',
      );
      final decoded =
          decodeMergeResult(encodeMergeResult(result), where: 'test');
      expect(decoded.merged, {'name': 'x'});
      expect(decoded.needsReview, isTrue);
      expect(decoded.note, 'review me');

      expect(() => decodeMergeResult('nope', where: 'test'),
          throwsA(isA<ValidationException>()));
      expect(
        () => decodeMergeResult({'merged': 'nope'}, where: 'test'),
        throwsA(isA<ValidationException>()),
      );
      expect(
        () => decodeMergeContext({'store': 3}, where: 'test'),
        throwsA(isA<ValidationException>()),
      );
    });
  });
}

CollectionSchema<Object?> attachTarget() {
  final schema = _schema();
  return CollectionSchema<Object?>.fromJson(schema.toJson());
}

FutureOr<MergeResult?> _decline(MergeContext ctx) => null;

FutureOr<List<String>> _emptyValidator(Map<String, Object?> record) =>
    const <String>[];

Map<String, Object?> _addVersion(Map<String, Object?> doc) =>
    {...doc, 'version': 1};

Map<String, Object?> _identity(Map<String, Object?> doc) => doc;
