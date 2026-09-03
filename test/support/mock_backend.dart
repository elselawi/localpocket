/// A scriptable in-memory PocketBase stand-in for tests.
/// Supports chaos scripts per method, auth toggling,
/// batch capability, lost-response simulation, and concurrency tracking.
library;

import 'dart:async';
import 'dart:convert';

import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart';

class MockRecord {
  MockRecord({
    required this.id,
    required this.store,
    required this.data,
    required this.updated,
    this.attachments = const [],
  });
  final String id;
  final String store;
  Map<String, Object?> data;
  String updated;
  List<String> attachments;
  RemoteRecord toRemote() => RemoteRecord(
      id: id,
      store: store,
      updated: updated,
      data: data,
      attachments: attachments);
}

/// Scripted behaviors consumed one at a time per method.
sealed class MockBehavior {}

/// Throw this exact error.
class MockThrow extends MockBehavior {
  MockThrow(this.error);
  final Object error;
}

/// Return this exact value instead of the default behavior.
class MockReturn extends MockBehavior {
  MockReturn(this.value);
  final Object? value;
}

/// Simulate a network drop (transient error).
class MockDrop extends MockBehavior {}

class MockSyncBackend implements SyncBackend {
  final Map<String, MockRecord> records = {};
  bool authValid = true;
  bool batchEnabled = false;
  int maxBatch = 25;

  @override
  Future<void> prepare() async {
    // Batch is a static capability in the mock; nothing to probe.
  }
  int maxPage = 200;

  /// Apply the mutation and then lose the response.
  bool lostCreateResponse = false;
  bool lostUpdateResponse = false;

  /// When set, `updateRecord` awaits this completer before applying, and
  /// completes [updateRecordEntered] first — so tests can interleave a local
  /// edit while the request is "in flight".
  Completer<void>? updateRecordBarrier;

  /// Completes when an `updateRecord` call reaches the barrier.
  Completer<void>? updateRecordEntered;

  /// Poison marker: any op whose payload contains `"poison"` fails the batch.
  bool poisonEnabled = true;

  final int _clockBase = DateTime.utc(2026, 1, 1).millisecondsSinceEpoch;
  int _tick = 0;

  final Map<String, List<MockBehavior>> _scripts = {};
  final Map<String, int> _scriptPos = {};

  // Observability / counters.
  int listChangesCalls = 0;
  int sweepListChangesCalls = 0; // listChanges calls with an idPrefix (sweep)
  int getCalls = 0;
  int createCalls = 0;
  int updateCalls = 0;

  /// Every `baseUpdated` value sent to [updateRecord], in call order — lets
  /// contract tests pin that a retried update carries the same base version.
  final List<String?> updateRecordBaseVersions = [];
  int updateFilesCalls = 0;
  int downloadFileCalls = 0;
  int batchCalls = 0;
  final List<int> batchSizes = []; // ops per pushBatch call, in call order
  int activeListChanges = 0;
  int maxConcurrentListChanges = 0;
  final List<String> lastBatchOps = []; // 'create' | 'update' | 'upsert'
  final Map<String, List<int>> serverFiles = {}; // 'recordId/filename' -> bytes

  @override
  BackendCapabilities get capabilities => BackendCapabilities(
      batchEnabled: batchEnabled, maxBatch: maxBatch, maxPage: maxPage);

  @override
  String get scopeId => 'mock-scope';

  String nextUpdated() => formatPbTimestamp(DateTime.fromMillisecondsSinceEpoch(
      _clockBase + _tick++ * 1000,
      isUtc: true));

  /// Seeds a remote record; returns its id.
  String seed({
    required String store,
    Map<String, Object?>? data,
    String? id,
    String? updated,
    List<String>? attachments,
  }) {
    final rid = id ?? generateRecordId();
    records[rid] = MockRecord(
      id: rid,
      store: store,
      data: data ?? const {},
      updated: updated ?? nextUpdated(),
      attachments: attachments ?? const [],
    );
    return rid;
  }

  /// Overrides behavior for a method: 'listChanges' | 'getRecord' |
  /// 'createRecord' | 'updateRecord' | 'pushBatch'.
  void script(String method, List<MockBehavior> behaviors) {
    _scripts[method] = behaviors;
    _scriptPos[method] = 0;
  }

  /// Simulates another writer changing an existing record.
  void mutate(String id, Map<String, Object?> data) {
    final rec = records[id];
    if (rec == null) throw StateError('no mock record $id');
    rec.data = data;
    rec.updated = nextUpdated();
  }

  /// Simulates another writer deleting the record server-side.
  void delete(String id) {
    records.remove(id);
  }

  Future<MockBehavior?> _next(String method) async {
    final s = _scripts[method];
    if (s != null && (_scriptPos[method] ?? 0) < s.length) {
      final b = s[_scriptPos[method]!];
      _scriptPos[method] = _scriptPos[method]! + 1;
      return b;
    }
    return null;
  }

  void _checkAuth() {
    if (!authValid) throw AuthError('mock 401');
  }

  @override
  Future<List<RemoteRecord>> listChanges(
    String store, {
    String? fromUpdated,
    String? fromId,
    String? idPrefix,
    int perPage = 200,
  }) async {
    listChangesCalls++;
    if (idPrefix != null) sweepListChangesCalls++;
    activeListChanges++;
    if (activeListChanges > maxConcurrentListChanges) {
      maxConcurrentListChanges = activeListChanges;
    }
    try {
      final b = await _next('listChanges');
      if (b is MockThrow) throw b.error;
      if (b is MockReturn) return (b.value! as List).cast<RemoteRecord>();
      if (b is MockDrop) throw TransientNetworkError();
      _checkAuth();

      var list = records.values.where((r) => r.store == store).toList();
      if (idPrefix != null) {
        // Sweep mode: id-ordered keyset.
        list = list
            .where((r) =>
                r.id.startsWith(idPrefix) &&
                (fromId == null || r.id.compareTo(fromId) > 0))
            .toList()
          ..sort((a, b) => a.id.compareTo(b.id));
      } else {
        // Pull mode: (updated, id) tuple keyset.
        if (fromUpdated != null) {
          list = list.where((r) {
            final u = r.updated.compareTo(fromUpdated);
            if (u > 0) return true;
            if (u < 0) return false;
            return fromId == null || r.id.compareTo(fromId) > 0;
          }).toList();
        }
        list.sort((a, b) {
          final u = a.updated.compareTo(b.updated);
          if (u != 0) return u;
          return a.id.compareTo(b.id);
        });
      }
      return list.take(perPage).map((r) => r.toRemote()).toList();
    } finally {
      activeListChanges--;
    }
  }

  @override
  Future<RemoteRecord?> getRecord(String id) async {
    getCalls++;
    final b = await _next('getRecord');
    if (b is MockThrow) throw b.error;
    if (b is MockReturn) return b.value as RemoteRecord?;
    if (b is MockDrop) throw TransientNetworkError();
    _checkAuth();
    final r = records[id];
    if (r == null) throw NotFoundError();
    return r.toRemote();
  }

  @override
  Future<RemoteRecord> createRecord({
    required String id,
    required String store,
    required String dataJson,
  }) async {
    createCalls++;
    final b = await _next('createRecord');
    if (b is MockThrow) throw b.error;
    if (b is MockReturn) return b.value as RemoteRecord;
    if (b is MockDrop) throw TransientNetworkError();
    _checkAuth();
    if (records.containsKey(id)) throw DuplicateIdError();
    final rec = MockRecord(
      id: id,
      store: store,
      data: jsonDecode(dataJson) as Map<String, Object?>,
      updated: nextUpdated(),
    );
    records[id] = rec;
    if (lostCreateResponse) throw TransientNetworkError();
    return rec.toRemote();
  }

  @override
  Future<RemoteRecord> updateRecordFilesStream({
    required String id,
    String? dataJson,
    Map<String, StreamFileUpload>? uploads,
    List<String>? keepNames,
    List<String>? removeNames,
  }) async {
    final bytes = <String, List<int>>{};
    if (uploads != null) {
      for (final entry in uploads.entries) {
        final data = <int>[];
        final stream = await entry.value.streamFactory();
        await for (final chunk in stream) {
          data.addAll(chunk);
        }
        bytes[entry.value.filename] = data;
      }
    }
    return updateRecordFiles(
      id: id,
      dataJson: dataJson,
      uploads: bytes,
      keepNames: keepNames,
      removeNames: removeNames,
    );
  }

  @override
  Future<RemoteRecord> updateRecordFiles({
    required String id,
    String? dataJson,
    Map<String, List<int>>? uploads,
    List<String>? keepNames,
    List<String>? removeNames,
  }) async {
    updateFilesCalls++;
    final b = await _next('updateRecordFiles');
    if (b is MockThrow) throw b.error;
    if (b is MockReturn) return b.value as RemoteRecord;
    if (b is MockDrop) throw TransientNetworkError();
    _checkAuth();

    final rec = records[id];
    if (rec == null) throw NotFoundError('record $id not found');

    final currentImgs = List<String>.from(rec.attachments);
    if (removeNames != null) {
      currentImgs.removeWhere((name) => removeNames.contains(name));
    }
    if (keepNames != null) {
      currentImgs.retainWhere((name) => keepNames.contains(name));
    }
    if (uploads != null) {
      for (final entry in uploads.entries) {
        final serverFilename = '${entry.key}_mock_${_tick++}.bin';
        currentImgs.add(serverFilename);
        serverFiles['$id/$serverFilename'] = entry.value;
      }
    }

    rec.attachments = currentImgs;
    if (dataJson != null) {
      final decoded = jsonDecode(dataJson);
      if (decoded is Map) {
        rec.data = Map<String, Object?>.from(decoded);
      }
    }
    rec.updated = nextUpdated();
    return rec.toRemote();
  }

  @override
  Future<Stream<List<int>>> downloadFile({
    required String recordId,
    required String filename,
    String? thumb,
  }) async {
    downloadFileCalls++;
    final b = await _next('downloadFile');
    if (b is MockThrow) throw b.error;
    if (b is MockReturn) return b.value! as Stream<List<int>>;
    if (b is MockDrop) throw TransientNetworkError();
    _checkAuth();

    final bytes = serverFiles['$recordId/$filename'] ??
        utf8.encode('mock_file_content_$filename');
    return Stream.value(bytes);
  }

  @override
  Future<RemoteRecord> updateRecord({
    required String id,
    required String dataJson,
    String? baseUpdated,
  }) async {
    updateCalls++;
    updateRecordBaseVersions.add(baseUpdated);
    final b = await _next('updateRecord');
    if (b is MockThrow) throw b.error;
    if (b is MockReturn) return b.value as RemoteRecord;
    if (b is MockDrop) throw TransientNetworkError();
    _checkAuth();
    final barrier = updateRecordBarrier;
    if (barrier != null) {
      // Re-entry safe: a version-conflict retry calls updateRecord again while
      // the test barrier may still be armed.
      final entered = updateRecordEntered;
      if (entered != null && !entered.isCompleted) entered.complete();
      await barrier.future;
    }
    final rec = records[id];
    if (rec == null) throw NotFoundError();
    // Optimistic concurrency: reject the write when the base version moved
    // since the client's GET — the pusher re-fetches, re-merges and retries
    // instead of blindly overwriting the concurrent edit.
    if (baseUpdated != null && rec.updated != baseUpdated) {
      throw RemoteVersionConflict(current: rec.toRemote());
    }
    rec.data = jsonDecode(dataJson) as Map<String, Object?>;
    rec.updated = nextUpdated();
    if (lostUpdateResponse) throw TransientNetworkError();
    return rec.toRemote();
  }

  @override
  Future<List<PushResult>> pushBatch(List<PushOp> ops) async {
    batchCalls++;
    batchSizes.add(ops.length);
    lastBatchOps
      ..clear()
      ..addAll(ops.map((o) =>
          o.upsert ? 'upsert' : (o.baseUpdated == null ? 'create' : 'update')));
    final b = await _next('pushBatch');
    if (b is MockThrow) throw b.error;
    if (b is MockReturn) return (b.value! as List).cast<PushResult>();
    if (b is MockDrop) throw TransientNetworkError();
    _checkAuth();
    if (poisonEnabled && ops.any((o) => o.dataJson.contains('"poison"'))) {
      throw BatchFailedError('poison in batch');
    }
    // Optimistic concurrency: every op whose base version moved since the
    // client's preflight GET is rejected as a version conflict (all-or-
    // nothing). The pusher re-runs each op through the per-record OCC path.
    for (final op in ops) {
      if (op.baseUpdated == null) continue; // create path
      final existing = records[op.id];
      if (existing != null && existing.updated != op.baseUpdated) {
        throw RemoteVersionConflict(
            message: 'record ${op.id} changed since the preflight GET');
      }
    }
    // Transactional: all or nothing.
    final results = <PushResult>[];
    for (final op in ops) {
      final existing = records[op.id];
      final updated = nextUpdated();
      if (existing == null) {
        records[op.id] = MockRecord(
          id: op.id,
          store: op.store,
          data: jsonDecode(op.dataJson) as Map<String, Object?>,
          updated: updated,
        );
      } else {
        existing.data = jsonDecode(op.dataJson) as Map<String, Object?>;
        existing.updated = updated;
      }
      final rec = records[op.id]!;
      results.add(PushResult(
        opId: op.opId,
        ok: true,
        record: rec.toRemote(),
        pushedJson: op.dataJson,
      ));
    }
    return results;
  }

  @override
  Stream<BackendHint> hints() => const Stream.empty();
}
