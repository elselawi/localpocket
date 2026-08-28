import 'dart:io';

import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../sync/engine/engine_helpers.dart';
import '../sync/engine/mock_backend.dart';

/// A batch-enabled mock that records the opIds of every batch attempt.
class _RecordingBatchBackend extends MockSyncBackend {

  _RecordingBatchBackend() {
    batchEnabled = true;
  }
  final List<List<String>> sentOpIds = [];

  @override
  Future<List<PushResult>> pushBatch(List<PushOp> ops) async {
    sentOpIds.add([for (final o in ops) o.opId]);
    return super.pushBatch(ops);
  }
}

/// Idempotency contract (#37): the pusher's retries are only safe if the
/// backend honors the documented keys. This test pins BOTH sides so the
/// contract cannot silently drift:
/// - the `SyncBackend` API docs state the invariant, and
/// - the client actually reuses the keys it promises (stable batch opIds,
///   the same baseUpdated on a retried update, the client id as the create
///   key).
void main() {
  final backendSource =
      File('lib/src/sync/sync_backend.dart').readAsStringSync();

  Future<SyncRowState?> sr(LocalPocket pocket, String id) =>
      pocket.outbox.readSyncRow(pocket.db, 'widgets', id);

  group('SyncBackend idempotency contract docs', () {
    test('pushBatch documents the (scopeId, opId) idempotency key', () {
      expect(backendSource, contains('Idempotency contract'),
          reason: 'the batch retry-safety invariant must stay documented');
      expect(backendSource, contains('idempotency key'));
      expect(backendSource, contains('binary-split retry'),
          reason: 'the doc must explain WHY the invariant exists');
      expect(backendSource, contains('applies the mutation twice'));
    });

    test('createRecord documents the client id as the create key', () {
      expect(backendSource, contains('the same [id] either creates the record'),
          reason: 'a retried create must never produce a second copy');
      expect(backendSource, contains('DuplicateIdError'));
    });

    test('updateRecord documents the full-state retry safety contract', () {
      expect(backendSource, contains('Retry contract'));
      expect(backendSource, contains('FULL desired record state'),
          reason: 're-applying the full payload while the base still matches '
              'is what makes update retries idempotent');
      expect(backendSource, contains('RemoteVersionConflict'));
    });
  });

  group('client honors its side of the contract', () {
    test('a retried update carries the same baseUpdated', () async {
      final h = await EngineHarness.create(
          config: testConfig(backoffBase: Duration.zero));
      addTearDown(h.close);
      final id = h.mock.seed(store: 'widgets', data: {'name': 'v1'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(id, {'name': 'edited'});

      h.mock.script('updateRecord', [MockThrow(TransientNetworkError())]);
      final first = await h.engine.syncNow();
      expect(first.hadError, isTrue);
      expect(h.mock.updateCalls, 1);
      expect(h.mock.updateRecordBaseVersions.single, isNotNull,
          reason: 'every update carries the base version it is based on');

      // The retry re-sends the same desired state guarded by the SAME base.
      final second = await h.engine.syncNow();
      expect(second.pushed, 1);
      expect(h.mock.updateCalls, 2);
      expect(h.mock.updateRecordBaseVersions[1],
          h.mock.updateRecordBaseVersions[0],
          reason: 'the retried update is based on the same remote version');
      expect((await sr(h.pocket, id))!.syncState, SyncState.clean);
      expect(h.mock.records.length, 1, reason: 'exactly one remote record');
    });

    test('batch retries re-send the same opIds (the idempotency key)',
        () async {
      final mock = _RecordingBatchBackend();
      final h = await EngineHarness.create(mock: mock);
      addTearDown(h.close);
      final a = h.mock.seed(store: 'widgets', data: {'name': 'A'});
      final b = h.mock.seed(store: 'widgets', data: {'name': 'B'});
      await h.engine.syncNow();
      await h.pocket.collection('widgets').patch(a, {'name': 'A-ok'});
      await h.pocket.collection('widgets').patch(b, {'name': 'poison'});

      final opA = await h.pocket.outbox.readOp(h.pocket.db, 'widgets', a);
      final opB = await h.pocket.outbox.readOp(h.pocket.db, 'widgets', b);

      final report = await h.engine.syncNow();

      expect(report.pushed, 1, reason: 'the healthy op settles via its split');
      expect(report.deadLettered, 1, reason: 'the poison op is isolated');
      expect(mock.sentOpIds.length, greaterThanOrEqualTo(2),
          reason: 'the failed batch was split and re-sent');

      final initial = mock.sentOpIds.first.toSet();
      expect(initial, {opA!.opId, opB!.opId});
      for (final call in mock.sentOpIds.skip(1)) {
        for (final opId in call) {
          expect(initial, contains(opId),
              reason: 'retries MUST reuse the original opId as the '
                  'server-side idempotency key');
        }
      }
      expect(mock.sentOpIds.expand((c) => c).where((o) => o == opA.opId),
          hasLength(greaterThanOrEqualTo(2)),
          reason: 'the healthy opId was re-sent in its split half');
    });
  });
}
