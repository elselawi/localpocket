import 'dart:async';
import 'dart:convert';

import 'package:localpocket/src/api/api.dart';
import 'package:localpocket/src/kernel/database_adapter.dart' show Database;
import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/ids.dart' show generateRecordId;
import 'package:localpocket/src/kernel/files/blob_store.dart'
    show MemoryBlobStore;
import 'package:localpocket/src/kernel/page_callbacks.dart'
    show StorePageCallbacks, encodeStorePolicies;
import 'package:localpocket/src/kernel/sync/merge.dart' show CounterResolver;
import 'package:localpocket/src/platform/web/page/callback_server.dart'
    show PageCallbackServer;
import 'package:localpocket/src/adapters/pocketbase/backend.dart'
    show PocketBaseSyncBackendFactory;
import 'package:localpocket/src/runtime/remote_runtime_client.dart';
import 'package:localpocket/src/runtime/runtime_client.dart';
import 'package:localpocket/src/api/writes.dart';
import 'package:test/test.dart';

import '../support/fixtures/tasks_store.dart';
import '../support/fixtures/validated_notes_store.dart';
import '../support/helpers.dart';
import '../support/mock_pb_server.dart';
import '../support/worker_harness.dart';

/// Surface conformance for the Phase-8 destination API families: files,
/// conflicts, and the PocketBase sync attachment must behave identically over
/// the direct runtime, the loopback runtime (full codec round-trip), and the
/// remote runtime (contract envelopes through the worker engine). Files ride
/// the same bounded upload/download flow as the raw contract (the kernel
/// owns the behavior); conflicts are seeded into `lp_conflicts` directly and
/// listed/watched/resolved through the typed surface; sync drives the
/// kernel-owned engine against an in-process PocketBase wire server.
void main() {
  for (final runtimeName in const ['direct', 'loopback', 'remote']) {
    group('surface conformance over $runtimeName runtime', () {
      late LocalPocket db;
      late Database rawDb;
      WorkerHarness? harness;

      /// Opens the facade over a raw kernel that carries a blob store (files)
      /// and exposes its adapter (conflict seeding). On the remote runtime the
      /// kernel runs in the worker engine harness (which configures the sync
      /// backend factory itself).
      Future<void> openRaw() async {
        if (runtimeName == 'remote') {
          final pipe = _PipeSink();
          harness = await WorkerHarness.open(
            stores: [Tasks.store.compiledSchema],
            blobStore: MemoryBlobStore(),
            sink: pipe,
          );
          addTearDown(harness!.close);
          final client = RemoteRuntimeClient(transport: harness!.customRequest);
          pipe.target = client.handleWorkerEvent;
          db = LocalPocket.internal(client);
          rawDb = harness!.pocket.db;
        } else {
          final raw = await openPocket(
            stores: [Tasks.store.compiledSchema],
            blobStore: MemoryBlobStore(),
          );
          addTearDown(() => raw.close());
          final runtime = runtimeName == 'direct'
              ? LocalRuntimeClient(raw.commands)
              : LoopbackRuntimeClient(raw.commands);
          db = LocalPocket.internal(runtime);
          rawDb = raw.db;
        }
      }

      group('files', () {
        setUp(openRaw);

        test('bounded upload stores and streams an attachment back', () async {
          final tasks = db.store(Tasks.store);
          final files = tasks.files;
          final id = (await tasks.put([Tasks.title.set('with-file')])).id;
          final payload = utf8.encode('conformance file payload');
          final ref = await files.attach(
            recordId: id,
            source: FileSource.bytes(payload, name: 'c.bin'),
            allowVolatileBlobs: true,
          );
          expect(ref.state, 'pending_upload');
          expect(ref.recordId, id);
          expect((await files.list(recordId: id)).single.refId, ref.refId);

          final bytes = await (await files.open(ref)).expand((c) => c).toList();
          expect(utf8.decode(bytes), 'conformance file payload');

          expect(await files.isBlobStorageDurable, isFalse,
              reason: 'the conformance blob store is a MemoryBlobStore');
          await files.remove(ref);
          // remote_name is only set by upload completion, so this ref was
          // never uploaded: remove drops it instead of queueing a bogus
          // remote delete.
          expect(await files.list(recordId: id), isEmpty);
        });

        test('gc and storage cap round-trip the kernel counters', () async {
          final files = db.store(Tasks.store).files;
          expect(await files.gc(), isA<int>());
          expect(await files.enforceStorageCap(maxBytes: 1024), isA<int>());
        });
      });

      group('conflicts', () {
        setUp(openRaw);

        Future<String> seed(String id) async {
          await db.store(Tasks.store).put([
            Tasks.title.set('base'),
            Writes.id(id),
          ]);
          await rawDb.execute(
            'INSERT INTO lp_conflicts '
            '(store, record_id, base_json, local_json, remote_json, '
            'dirty_local, dirty_remote, detected_at) '
            'VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [
              'tasks',
              id,
              jsonEncode({'title': 'base'}),
              jsonEncode({'title': 'local'}),
              jsonEncode({'title': 'remote'}),
              jsonEncode(['title']),
              jsonEncode(['title']),
              1000,
            ],
          );
          return id;
        }

        test('list, resolve, and accept round-trip typed snapshots', () async {
          final conflicts = db.store(Tasks.store).conflicts;
          final id = await seed(generateRecordId());

          final open = await conflicts.listOpen();
          expect(open.single.recordId, id);
          expect(open.single.local(Tasks.title), 'local');
          expect(open.single.remote(Tasks.title), 'remote');

          await conflicts.resolve(id, merged: [Tasks.title.set('chosen')]);
          expect(await conflicts.listOpen(), isEmpty);
          expect((await db.store(Tasks.store).get(id))!(Tasks.title), 'chosen');

          final b = await seed(generateRecordId());
          await conflicts.acceptRemote(b);
          expect((await db.store(Tasks.store).get(b))!(Tasks.title), 'remote');
        });

        test('watch emits the initial list and re-emits on resolution',
            () async {
          final conflicts = db.store(Tasks.store).conflicts;
          final id = await seed(generateRecordId());
          final seen = <List<Conflict<Tasks>>>[];
          final done = Completer<void>();
          final sub = conflicts.watch().listen((list) {
            seen.add(list);
            if (seen.length >= 2 && !done.isCompleted) done.complete();
          });
          addTearDown(sub.cancel);

          await waitUntil(() async => seen.isNotEmpty);
          await conflicts.acceptLocal(id);
          await done.future;
          expect(seen.first.single.recordId, id);
          expect(seen.last, isEmpty);
        });
      });

      group('sync', () {
        setUp(() async {
          if (runtimeName == 'remote') {
            await openRaw();
          } else {
            db = await LocalPocket.openWith(
              LocalPocketOptions(
                path: ':memory:',
                stores: [Tasks.store],
                syncBackendFactory: const PocketBaseSyncBackendFactory(),
              ),
              runtimeName == 'direct'
                  ? LocalRuntimeClient.new
                  : LoopbackRuntimeClient.new,
            );
            addTearDown(() => db.close());
          }
        });

        test('sync attachment lifecycle round-trips against the wire server',
            () async {
          final server = await MockPbServer().start();
          addTearDown(server.stop);
          final sync = db.attachPocketBaseSync(PocketBaseSyncOptions(
            baseUrl: server.baseUrl,
            tokenProvider: _FakeTokens('jwt'),
            identity: 'conformance-sync',
          ));
          expect(sync.isRunning, isFalse);

          await sync.start();
          expect(sync.isRunning, isTrue);
          final report = await sync.syncNow();
          expect(report.hadError, isA<bool>());
          expect(report.pushed, isA<int>());

          await sync.pause();
          await sync.resume();
          await sync.setConnectivity(false);
          await sync.setConnectivity(true);
          await sync.updateAuth('refreshed-jwt');

          await sync.stop();
          expect(sync.isRunning, isFalse);
        });
      });
    });
  }

  for (final runtimeName in const ['direct', 'loopback', 'remote']) {
    group('executable schema features over $runtimeName runtime', () {
      late LocalPocket db;
      WorkerHarness? harness;

      setUp(() async {
        final schema = ValidatedNotes.store.compiledSchema;
        if (runtimeName == 'remote') {
          final pageCallbacks = {
            'validated_notes':
                StorePageCallbacks(validator: ValidatedNotes.validate),
          };
          final pipe = _PipeSink(
            callbackServer: PageCallbackServer(stores: pageCallbacks),
          );
          harness = await WorkerHarness.open(
            stores: [schema],
            storePolicies: encodeStorePolicies([schema], pageCallbacks),
            pageCallbacks: pageCallbacks,
            blobStore: MemoryBlobStore(),
            sink: pipe,
          );
          addTearDown(harness!.close);
          final client = RemoteRuntimeClient(transport: harness!.customRequest);
          pipe.target = client.handleWorkerEvent;
          db = LocalPocket.internal(client);
        } else {
          final raw = await openPocket(
            stores: [schema],
            blobStore: MemoryBlobStore(),
          );
          addTearDown(() => raw.close());
          final runtime = runtimeName == 'direct'
              ? LocalRuntimeClient(raw.commands)
              : LoopbackRuntimeClient(raw.commands);
          db = LocalPocket.internal(runtime);
        }
      });

      test('the validator hook rejects and accepts writes identically',
          () async {
        final notes = db.store(ValidatedNotes.store);

        await expectLater(
          notes.put([ValidatedNotes.title.set('blocked')]),
          throwsA(isA<ValidationException>().having(
              (e) => e.message, 'message', contains('title is blocked'))),
        );
        final id = (await notes.put([ValidatedNotes.title.set('ok')])).id;
        expect((await notes.get(id))?.get(ValidatedNotes.title), 'ok');
      });

      test('the data-only conflict policy reaches the runtime', () async {
        final schema = runtimeName == 'remote'
            ? harness!.pocket.requireTable('validated_notes').schema
            : ValidatedNotes.store.compiledSchema;
        expect(schema.conflictPolicy.editsUnarchive, isTrue);
        expect(schema.conflictPolicy.fieldOverrides['qty'],
            isA<CounterResolver>());
      });
    });
  }
}

class _FakeTokens implements TokenProvider {
  _FakeTokens(this._value);
  final String _value;
  @override
  Future<Token> currentToken() async => Token(_value);
  @override
  Future<Token> refreshToken(Token current) async => Token(_value);
  @override
  String get identity => 'conformance-sync';
}

/// Forwarding worker-event sink: hands every event the engine emits to the
/// remote runtime's event feed (keeping the harness's recording behavior).
class _PipeSink extends RecordingSink {
  _PipeSink({super.callbackServer});

  void Function(Map<Object?, Object?> event)? target;

  @override
  void emit(Map<String, Object?> event) {
    super.emit(event);
    target?.call(event);
  }
}

/// Polls (deadline-bounded) until [predicate] holds.
Future<void> waitUntil(
  Future<bool> Function() predicate, {
  Duration timeout = const Duration(seconds: 5),
}) async {
  final deadline = DateTime.now().add(timeout);
  while (DateTime.now().isBefore(deadline)) {
    if (await predicate()) return;
    await Future<void>.delayed(const Duration(milliseconds: 10));
  }
  fail('Timed out after $timeout waiting for condition.');
}
