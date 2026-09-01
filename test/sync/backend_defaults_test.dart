import 'package:localpocket/src/kernel/sync/sync_backend.dart';
import 'package:test/test.dart';

/// The `SyncBackend` seam's DEFAULT file methods — the concrete bodies a
/// backend inherits when it does NOT override them. Every in-repo test backend
/// (mock, PocketBaseBackend) overrides these, so a backend that relies on the
/// defaults is otherwise unverified.
///
/// Contract pinned here:
/// - `updateRecordFiles` and `downloadFile` default to `UnimplementedError`.
/// - `updateRecordFilesStream` is the compatibility shim: with no uploads it
///   delegates straight to `updateRecordFiles`; with uploads it buffers each
///   stream fully in memory, keyed by filename, before delegating.
class _MinimalBackend extends SyncBackend {
  @override
  BackendCapabilities get capabilities => const BackendCapabilities();

  @override
  String get scopeId => 'minimal';

  @override
  Future<List<RemoteRecord>> listChanges(
    String store, {
    String? fromUpdated,
    String? fromId,
    String? idPrefix,
    int perPage = 200,
  }) async =>
      const [];

  @override
  Future<RemoteRecord?> getRecord(String id) async => null;

  @override
  Future<RemoteRecord> createRecord({
    required String id,
    required String store,
    required String dataJson,
  }) async =>
      RemoteRecord(
          id: id,
          store: store,
          updated: '2026-01-01 00:00:00.000Z',
          data: {'id': id});

  @override
  Future<RemoteRecord> updateRecord({
    required String id,
    required String dataJson,
    String? baseUpdated,
  }) async =>
      RemoteRecord(
          id: id,
          store: 'widgets',
          updated: '2026-01-01 00:00:00.000Z',
          data: {'id': id});

  @override
  Future<List<PushResult>> pushBatch(List<PushOp> ops) async => const [];

  @override
  Stream<BackendHint> hints() => const Stream.empty();
}

/// Overrides only `updateRecordFiles` (to observe the buffered uploads); the
/// default `updateRecordFilesStream` shim stays inherited.
class _CapturingBackend extends _MinimalBackend {
  Map<String, List<int>>? lastUploads;
  String? lastDataJson;
  List<String>? lastKeepNames;
  List<String>? lastRemoveNames;

  @override
  Future<RemoteRecord> updateRecordFiles({
    required String id,
    String? dataJson,
    Map<String, List<int>>? uploads,
    List<String>? keepNames,
    List<String>? removeNames,
  }) async {
    lastUploads = uploads;
    lastDataJson = dataJson;
    lastKeepNames = keepNames;
    lastRemoveNames = removeNames;
    return RemoteRecord(
        id: id,
        store: 'widgets',
        updated: '2026-01-01 00:00:00.000Z',
        data: {'id': id});
  }
}

void main() {
  group('SyncBackend default seam', () {
    test('updateRecordFiles defaults to UnimplementedError', () {
      final b = _MinimalBackend();
      expect(
        b.updateRecordFiles(id: 'a', dataJson: '{}'),
        throwsA(isA<UnimplementedError>()),
      );
    });

    test('downloadFile defaults to UnimplementedError', () {
      final b = _MinimalBackend();
      expect(
        b.downloadFile(recordId: 'a', filename: 'f.bin'),
        throwsA(isA<UnimplementedError>()),
      );
    });

    test(
        'updateRecordFilesStream with no uploads delegates to updateRecordFiles',
        () {
      // Without uploads the shim forwards the modifier matrix unchanged to
      // `updateRecordFiles`, which defaults to UnimplementedError here.
      final b = _MinimalBackend();
      expect(
        b.updateRecordFilesStream(id: 'a', dataJson: '{}'),
        throwsA(isA<UnimplementedError>()),
      );
    });

    test('the buffering shim drains upload streams and delegates the bytes',
        () async {
      final b = _CapturingBackend();
      var consumed = false;
      Stream<List<int>> chunks() async* {
        consumed = true;
        yield [1, 2];
        yield [3, 4];
        yield [5, 6];
      }

      final upload = StreamFileUpload(
        filename: 'f.bin',
        length: 6,
        streamFactory: () async => chunks(),
      );

      final rec = await b.updateRecordFilesStream(
        id: 'a',
        dataJson: '{"qty":1}',
        uploads: {'f.bin': upload},
        keepNames: ['old.bin'],
      );

      expect(consumed, isTrue, reason: 'the upload stream was drained');
      expect(
          b.lastUploads,
          {
            'f.bin': [1, 2, 3, 4, 5, 6]
          },
          reason: 'chunks are concatenated in order and keyed by filename');
      expect(b.lastDataJson, '{"qty":1}');
      expect(b.lastKeepNames, ['old.bin']);
      expect(b.lastRemoveNames, isNull);
      expect(rec.id, 'a', reason: 'the delegated result is returned');
    });

    test('a throwing upload stream propagates out of the buffering shim',
        () async {
      final b = _CapturingBackend();
      Stream<List<int>> thrower() async* {
        yield [1];
        throw StateError('stream down');
      }

      final upload = StreamFileUpload(
        filename: 'f.bin',
        length: 2,
        streamFactory: () async => thrower(),
      );

      await expectLater(
        b.updateRecordFilesStream(id: 'a', uploads: {'f.bin': upload}),
        throwsA(isA<StateError>()),
      );
    });

    test('prepare() defaults to a no-op that completes', () async {
      final b = _MinimalBackend();
      await expectLater(b.prepare(), completes,
          reason: 'a backend that does not override prepare warms up as a '
              'no-op (e.g. a non-PocketBase backend with no batch probe)');
    });

    test('RemoteRecord.copyWith replaces selected fields and keeps the rest',
        () {
      const base = RemoteRecord(
        id: 'a',
        store: 'widgets',
        updated: '2026-01-01 00:00:00.000Z',
        data: {'name': 'old'},
        imgs: ['f.bin'],
      );

      final newData = base.copyWith(data: {'name': 'new'});
      expect(newData.id, 'a');
      expect(newData.store, 'widgets');
      expect(newData.updated, '2026-01-01 00:00:00.000Z',
          reason: 'updated is preserved when not replaced');
      expect(newData.data, {'name': 'new'});
      expect(newData.imgs, ['f.bin']);

      final newUpdated = base.copyWith(updated: '2026-02-02 00:00:00.000Z');
      expect(newUpdated.updated, '2026-02-02 00:00:00.000Z');
      expect(newUpdated.data, {'name': 'old'},
          reason: 'data is preserved when not replaced');

      final both = base.copyWith(
        updated: '2026-03-03 00:00:00.000Z',
        data: {'qty': 1},
      );
      expect(both.updated, '2026-03-03 00:00:00.000Z');
      expect(both.data, {'qty': 1});
      expect(both.id, 'a');
    });
  });
}
