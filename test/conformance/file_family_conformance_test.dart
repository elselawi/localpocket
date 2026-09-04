import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:localpocket/src/adapters/pocketbase/backend.dart'
    show PocketBaseSyncBackendFactory;
import 'package:crypto/crypto.dart' show sha256;
import 'package:localpocket/src/kernel/capabilities.dart';
import 'package:localpocket/src/kernel/database_adapter.dart';
import 'package:localpocket/src/kernel/files/blob_store.dart';
import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/contract/contract.dart';
import 'package:localpocket/src/runtime/remote_runtime_client.dart';
import 'package:localpocket/src/runtime/runtime_client.dart';
import 'package:sqlite3/sqlite3.dart' as sqlite;
import 'package:test/test.dart';

import '../support/helpers.dart';
import '../support/mock_pb_server.dart';
import '../support/worker_harness.dart';

/// File-family conformance: bounded upload sessions, credit-windowed
/// downloads, and the metadata RPCs must produce equal results over the
/// direct runtime, the loopback runtime (full codec round-trip), and the
/// remote runtime (contract envelopes through the worker engine).
void main() {
  for (final runtimeName in const ['direct', 'loopback', 'remote']) {
    group('file family conformance over $runtimeName runtime', () {
      late RuntimeClient runtime;
      WorkerHarness? harness;
      late LocalPocket db;
      final fileChunkEvents = <FileChunkEvent>[];
      // Cancelled by the tear-down registered in setUp.
      // ignore: cancel_subscriptions
      StreamSubscription<Event>? eventSub;

      setUp(() async {
        if (runtimeName == 'remote') {
          // Forwards worker events to the remote runtime's event feed while
          // the engine keeps recording them on the harness sink.
          final pipe = _PipeSink();
          harness = await WorkerHarness.open(
            stores: [widgetsSchema()],
            blobStore: MemoryBlobStore(),
            sink: pipe,
          );
          addTearDown(harness!.close);
          final client = RemoteRuntimeClient(transport: harness!.customRequest);
          pipe.target = client.handleWorkerEvent;
          runtime = client;
          db = harness!.pocket;
        } else {
          final rawDb = sqlite.sqlite3.openInMemory();
          final adapter = DirectSqliteDatabase(rawDb);
          db = await LocalPocket.open(
            path: ':memory:',
            database: adapter,
            stores: [widgetsSchema()],
            platform: PlatformProfile.native,
            blobStore: MemoryBlobStore(),
            syncBackendFactory: const PocketBaseSyncBackendFactory(),
          );
          addTearDown(db.close);
          runtime = runtimeName == 'direct'
              ? LocalRuntimeClient(db.commands)
              : LoopbackRuntimeClient(db.commands);
        }
        fileChunkEvents.clear();
        eventSub = runtime.events.listen((event) {
          if (event is FileChunkEvent) fileChunkEvents.add(event);
        });
        addTearDown(eventSub!.cancel);
      });

      Future<String> attach(String recordId, List<int> payload) async {
        await db
            .collection('widgets')
            .put({'id': recordId, 'name': 'with-file', 'qty': 1});
        final session = (await runtime.send(FileBeginUploadRequest(
          store: 'widgets',
          recordId: recordId,
          size: payload.length,
          allowVolatileBlobs: true,
        )))
            .session;
        for (var offset = 0; offset < payload.length; offset += 5) {
          final end = offset + 5 < payload.length ? offset + 5 : payload.length;
          await runtime.send(FileChunkRequest(
            session: session,
            chunk: Uint8List.fromList(payload.sublist(offset, end)),
          ));
        }
        final ref =
            (await runtime.send(FileFinishRequest(session: session))).ref!;
        return ref.refId;
      }

      List<FileChunkEvent> streamChunks(String stream) => [
            for (final e in fileChunkEvents)
              if (e.stream == stream) e,
          ];

      test('bounded upload session stores and lists an attachment', () async {
        final id = generateRecordId();
        final payload = utf8.encode('conformance file payload');
        final refId = await attach(id, payload);

        final refs = (await runtime.send(FilesListRequest(
          store: 'widgets',
          recordId: id,
        )))
            .refs;
        expect(refs, hasLength(1));
        expect(refs.single.refId, refId);
        expect(refs.single.state, 'pending_upload');
        expect(refs.single.store, 'widgets');
        expect(refs.single.recordId, id);
        expect(refs.single.field, 'imgs');
      });

      test('download streams credit-windowed chunks with a terminal event',
          () async {
        final id = generateRecordId();
        final payload = utf8.encode('stream me back in chunks');
        final refId = await attach(id, payload);

        final opened = await runtime.send(FileOpenRequest(
          store: 'widgets',
          recordId: id,
          refId: refId,
        ));
        // Chunk events flow asynchronously (the source stream delivers on
        // microtasks, and on the remote runtime they ride the worker sink);
        // wait for the terminal event on every runtime.
        final deadline = DateTime.now().add(const Duration(seconds: 5));
        while (DateTime.now().isBefore(deadline)) {
          final pending = streamChunks(opened.stream);
          if (pending.isNotEmpty && pending.last.last) break;
          await Future<void>.delayed(const Duration(milliseconds: 10));
        }
        final chunks = streamChunks(opened.stream);
        expect(chunks, isNotEmpty);
        expect(chunks.last.last, isTrue,
            reason: 'the stream ends with a terminal event');
        expect(utf8.decode(chunks.expand((c) => c.chunk).toList()),
            'stream me back in chunks');
      });

      test('storage status reports the volatile blob store honestly', () async {
        final status = await runtime.send(const StorageStatusRequest());
        expect(status.durable, isFalse,
            reason: 'the conformance blob store is a MemoryBlobStore');
      });

      test('remove of a never-uploaded ref vanishes it; gc and cap round-trip',
          () async {
        final id = generateRecordId();
        await attach(id, utf8.encode('to be removed'));

        await runtime
            .send(FileRemoveRequest(store: 'widgets', recordId: id, index: 0));
        final refs = (await runtime.send(FilesListRequest(
          store: 'widgets',
          recordId: id,
        )))
            .refs;
        // remote_name is only set by upload completion, so this ref was
        // never uploaded: remove drops it instead of queueing a bogus
        // remote delete (pending_remove state needs an uploaded ref).
        expect(refs, isEmpty);

        final gc = await runtime
            .send(const FileGcRequest(blobGraceMs: 0, tmpGraceMs: 0));
        expect(gc.cleaned, isA<int>());
        final cap =
            await runtime.send(const EnforceStorageCapRequest(maxBytes: 1024));
        expect(cap.evicted, isA<int>());
      });

      test('unknown sessions and streams fail typed', () async {
        await expectLater(
          runtime.send(FileChunkRequest(
            session: 'u9999',
            chunk: Uint8List.fromList([1]),
          )),
          throwsA(isA<ValidationException>()),
        );
        await expectLater(
          runtime.send(const FileFinishRequest(session: 'u9999')),
          throwsA(isA<ValidationException>()),
        );
        await expectLater(
          runtime.send(const FileCreditRequest(stream: 'f9999', bytes: 1)),
          throwsA(isA<StateError>()),
        );
      });

      test('fileDownload hydrates a remote_only ref on every runtime',
          () async {
        // Seed an attachment on the server that the engine has never
        // downloaded: pull observes it (no prefetch) and records a
        // remote_only ref.
        final server = await MockPbServer().start();
        addTearDown(server.stop);
        final bytes = utf8.encode('on-demand hydration payload');
        final recId = server.seed(
          store: 'widgets',
          data: {'name': 'hydrated', 'qty': 1},
          attachments: ['ondemand.bin'],
        );
        server.fileBytes['$recId/ondemand.bin'] = bytes;

        await runtime.send(SyncStartRequest(
          baseUrl: server.baseUrl.toString(),
          scopeId: 'ff-download',
        ));
        await runtime.send(const SyncNowRequest());

        final refsBefore = (await runtime.send(FilesListRequest(
          store: 'widgets',
          recordId: recId,
        )))
            .refs;
        expect(refsBefore, hasLength(1));
        expect(refsBefore.single.state, 'remote_only',
            reason: 'a pull without prefetch records the remote file as '
                'remote_only');

        // Open fails typed while the bytes are absent.
        await expectLater(
          runtime.send(FileOpenRequest(
            store: 'widgets',
            recordId: recId,
            refId: refsBefore.single.refId,
          )),
          throwsA(isA<RemoteOnlyError>()),
        );

        // On-demand download settles the ref synced with the real hash.
        final after = (await runtime.send(FileDownloadRequest(
          store: 'widgets',
          recordId: recId,
          field: refsBefore.single.field,
          refId: refsBefore.single.refId,
        )))
            .ref!;
        expect(after.state, 'synced');
        expect(after.remoteName, 'ondemand.bin');
        expect(after.hash, sha256.convert(bytes).toString());

        // Replay short-circuits: no network, same ref bytes.
        final replay = (await runtime.send(FileDownloadRequest(
          store: 'widgets',
          recordId: recId,
          field: after.field,
          refId: after.refId,
        )))
            .ref!;
        expect(replay.hash, after.hash);
        expect(replay.state, 'synced');
      });
    });
  }
}

/// Forwarding worker-event sink: hands every event the engine emits to the
/// remote runtime's event feed (keeping the harness's recording behavior).
class _PipeSink extends RecordingSink {
  void Function(Map<Object?, Object?> event)? target;

  @override
  void emit(Map<String, Object?> event) {
    super.emit(event);
    target?.call(event);
  }
}
