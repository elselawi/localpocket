import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

/// persisted sync-model decoding.
///
/// Every enum and row-model factory must tolerate null/default values, parse
/// valid data, and turn malformed data (bad JSON, wrong SQLite types, unknown
/// enum strings, missing required columns) into a typed [StorageError]
/// corruption failure instead of leaking a raw `TypeError`/`ArgumentError`/
/// `FormatException`.
void main() {
  group('sync model decoding', () {
    group('SyncRowState.fromRow', () {
      Map<String, Object?> baseRow({
        Object? store = 'widgets',
        Object? recordId = 'abc123',
        Object? remoteUpdated,
        Object? lastSeenAt,
        Object? baseUpdated,
        Object? baseHash,
        Object? baseJson,
        Object? syncState = 'clean',
        Object? dirtyFields,
        Object? localRev,
        Object? accessState = 'visible',
        Object? opId,
        Object? attemptCount,
        Object? nextRetryAt,
        Object? lastError,
        Object? schemaVer,
      }) =>
          {
            'store': store,
            'record_id': recordId,
            'remote_updated': remoteUpdated,
            'last_seen_at': lastSeenAt,
            'base_updated': baseUpdated,
            'base_hash': baseHash,
            'base_json': baseJson,
            'sync_state': syncState,
            'dirty_fields': dirtyFields,
            'local_rev': localRev,
            'access_state': accessState,
            'op_id': opId,
            'attempt_count': attemptCount,
            'next_retry_at': nextRetryAt,
            'last_error': lastError,
            'schema_ver': schemaVer,
          };

      test('parses a complete valid row', () {
        final r = SyncRowState.fromRow(baseRow(
          remoteUpdated: '2026-01-01 00:00:00.000Z',
          lastSeenAt: 1000,
          baseUpdated: '2026-01-02 00:00:00.000Z',
          baseHash: 'abc',
          baseJson: '{"name":"x"}',
          syncState: 'dirty',
          dirtyFields: '["name","qty"]',
          localRev: 7,
          accessState: 'hidden',
          opId: 'op1',
          attemptCount: 3,
          nextRetryAt: 5000,
          lastError: 'boom',
          schemaVer: 2,
        ));
        expect(r.store, 'widgets');
        expect(r.recordId, 'abc123');
        expect(r.remoteUpdated, '2026-01-01 00:00:00.000Z');
        expect(r.lastSeenAt, 1000);
        expect(r.baseUpdated, '2026-01-02 00:00:00.000Z');
        expect(r.baseHash, 'abc');
        expect(r.baseJson, '{"name":"x"}');
        expect(r.syncState, SyncState.dirty);
        expect(r.dirtyFields, ['name', 'qty']);
        expect(r.localRev, 7);
        expect(r.accessState, AccessState.hidden);
        expect(r.opId, 'op1');
        expect(r.attemptCount, 3);
        expect(r.nextRetryAt, 5000);
        expect(r.lastError, 'boom');
        expect(r.schemaVer, 2);
      });

      test('null and default values are tolerated', () {
        final r = SyncRowState.fromRow(baseRow());
        expect(r.remoteUpdated, isNull);
        expect(r.lastSeenAt, isNull);
        expect(r.baseUpdated, isNull);
        expect(r.baseHash, isNull);
        expect(r.baseJson, isNull);
        expect(r.syncState, SyncState.clean);
        expect(r.dirtyFields, isEmpty);
        expect(r.localRev, 0);
        expect(r.accessState, AccessState.visible);
        expect(r.opId, isNull);
        expect(r.attemptCount, 0);
        expect(r.nextRetryAt, 0);
        expect(r.lastError, isNull);
        expect(r.schemaVer, 1);
      });

      test('every sync state and access state parses', () {
        for (final s in SyncState.values) {
          final r = SyncRowState.fromRow(baseRow(syncState: s.name));
          expect(r.syncState, s, reason: s.name);
        }
        for (final a in AccessState.values) {
          final r = SyncRowState.fromRow(baseRow(accessState: a.name));
          expect(r.accessState, a, reason: a.name);
        }
      });

      test('dirty-field json variants', () {
        expect(SyncRowState.fromRow(baseRow(dirtyFields: null)).dirtyFields,
            isEmpty);
        expect(SyncRowState.fromRow(baseRow(dirtyFields: '')).dirtyFields,
            isEmpty);
        expect(SyncRowState.fromRow(baseRow(dirtyFields: '[]')).dirtyFields,
            isEmpty);
        expect(
            SyncRowState.fromRow(baseRow(dirtyFields: '["a","b"]')).dirtyFields,
            ['a', 'b']);
      });

      test('malformed dirty-field json is a typed corruption error', () {
        for (final bad in [
          '{not json',
          '{"a": 1}',
          '[1, 2]',
          '["a", 5]',
          '[null]',
          '42',
          '"just a string"',
        ]) {
          expect(
            () => SyncRowState.fromRow(baseRow(dirtyFields: bad)),
            throwsA(isA<StorageError>().having(
                (e) => e.message, 'message', contains('Corrupt lp_sync_row'))),
            reason: 'dirty_fields = $bad',
          );
        }
      });

      test('unknown enum strings are typed corruption errors', () {
        expect(() => SyncRowState.fromRow(baseRow(syncState: 'deleted')),
            throwsA(isA<StorageError>()));
        expect(() => SyncRowState.fromRow(baseRow(accessState: 'invisible')),
            throwsA(isA<StorageError>()));
        expect(() => SyncRowState.fromRow(baseRow(syncState: 5)),
            throwsA(isA<StorageError>()));
      });

      test('missing and wrong-typed columns are typed corruption errors', () {
        final cases = <String, Map<String, Object?>>{
          'missing store': baseRow()..remove('store'),
          'missing record_id': baseRow()..remove('record_id'),
          'missing sync_state': baseRow()..remove('sync_state'),
          'store wrong type': baseRow(store: 5),
          'record_id wrong type': baseRow(recordId: 5),
          'local_rev as string': baseRow(localRev: '7'),
          'last_seen_at as string': baseRow(lastSeenAt: '1000'),
          'attempt_count as string': baseRow(attemptCount: '3'),
          'next_retry_at as string': baseRow(nextRetryAt: '5'),
          'schema_ver as string': baseRow(schemaVer: '2'),
        };
        cases.forEach((name, row) {
          expect(
            () => SyncRowState.fromRow(row),
            throwsA(isA<StorageError>()),
            reason: name,
          );
        });
      });
    });

    group('OutboxOp.fromRow', () {
      Map<String, Object?> baseRow({
        Object? store = 'widgets',
        Object? recordId = 'rid1',
        Object? kind = 'upsert',
        Object? payloadJson = '{"name":"a"}',
        Object? baseUpdated,
        Object? baseHash = 'hash',
        Object? dirtyFields = '[]',
        Object? opId = 'op1',
        Object? createdAt = 100,
        Object? updatedAt = 200,
        Object? dependsOnOp,
      }) =>
          {
            'store': store,
            'record_id': recordId,
            'kind': kind,
            'payload_json': payloadJson,
            'base_updated': baseUpdated,
            'base_hash': baseHash,
            'dirty_fields': dirtyFields,
            'op_id': opId,
            'created_at': createdAt,
            'updated_at': updatedAt,
            'depends_on_op': dependsOnOp,
          };

      test('parses a complete valid row', () {
        final op = OutboxOp.fromRow(baseRow(
          kind: 'archive',
          baseUpdated: '2026-01-01 00:00:00.000Z',
          dirtyFields: '["name"]',
          dependsOnOp: 'op0',
        ));
        expect(op.store, 'widgets');
        expect(op.recordId, 'rid1');
        expect(op.kind, OutboxKind.archive);
        expect(op.payloadJson, '{"name":"a"}');
        expect(op.baseUpdated, '2026-01-01 00:00:00.000Z');
        expect(op.baseHash, 'hash');
        expect(op.dirtyFields, ['name']);
        expect(op.opId, 'op1');
        expect(op.createdAt, 100);
        expect(op.updatedAt, 200);
        expect(op.dependsOnOp, 'op0');
      });

      test('null base_hash and optional columns default', () {
        final op = OutboxOp.fromRow(baseRow(baseHash: null, dependsOnOp: null));
        expect(op.baseHash, '', reason: 'null base_hash defaults to empty');
        expect(op.baseUpdated, isNull);
        expect(op.dependsOnOp, isNull);
      });

      test('all outbox kinds parse', () {
        for (final k in OutboxKind.values) {
          final op = OutboxOp.fromRow(baseRow(kind: k.name));
          expect(op.kind, k, reason: k.name);
        }
      });

      test('unknown kind is a typed corruption error', () {
        expect(
            () => OutboxOp.fromRow(baseRow(kind: 'delete')),
            throwsA(isA<StorageError>().having(
                (e) => e.message, 'message', contains('Corrupt lp_outbox'))));
        expect(() => OutboxOp.fromRow(baseRow(kind: 3)),
            throwsA(isA<StorageError>()));
      });

      test('missing and wrong-typed columns are typed corruption errors', () {
        final cases = <String, Map<String, Object?>>{
          'missing payload': baseRow()..remove('payload_json'),
          'missing op_id': baseRow()..remove('op_id'),
          'missing created_at': baseRow()..remove('created_at'),
          'missing updated_at': baseRow()..remove('updated_at'),
          'payload wrong type': baseRow(payloadJson: 42),
          'op_id wrong type': baseRow(opId: 42),
          'created_at as string': baseRow(createdAt: '100'),
          'updated_at as string': baseRow(updatedAt: '200'),
        };
        cases.forEach((name, row) {
          expect(
            () => OutboxOp.fromRow(row),
            throwsA(isA<StorageError>()),
            reason: name,
          );
        });
      });

      test('dirty-field malformed values are typed corruption errors', () {
        for (final bad in ['{', '{"x":1}', '[true]', '7']) {
          expect(
            () => OutboxOp.fromRow(baseRow(dirtyFields: bad)),
            throwsA(isA<StorageError>()),
            reason: bad,
          );
        }
      });
    });

    group('OpQueueRow.fromRow', () {
      Map<String, Object?> baseRow({
        Object? seq = 1,
        Object? opId = 'opq1',
        Object? store = 'widgets',
        Object? recordId = 'rid1',
        Object? kind = 'fileUpload',
        Object? payloadJson = '{"ref_id":"r"}',
        Object? state = 'pending',
        Object? attemptCount,
        Object? nextRetryAt,
        Object? lastError,
        Object? dependsOnOp,
        Object? createdAt = 300,
      }) =>
          {
            'seq': seq,
            'op_id': opId,
            'store': store,
            'record_id': recordId,
            'kind': kind,
            'payload_json': payloadJson,
            'state': state,
            'attempt_count': attemptCount,
            'next_retry_at': nextRetryAt,
            'last_error': lastError,
            'depends_on_op': dependsOnOp,
            'created_at': createdAt,
          };

      test('parses a complete valid row', () {
        final op = OpQueueRow.fromRow(baseRow(
          kind: 'fileRemove',
          state: 'failed',
          attemptCount: 4,
          nextRetryAt: 9000,
          lastError: 'network',
          dependsOnOp: 'op0',
        ));
        expect(op.seq, 1);
        expect(op.opId, 'opq1');
        expect(op.store, 'widgets');
        expect(op.recordId, 'rid1');
        expect(op.kind, OpQueueKind.fileRemove);
        expect(op.payloadJson, '{"ref_id":"r"}');
        expect(op.state, 'failed');
        expect(op.attemptCount, 4);
        expect(op.nextRetryAt, 9000);
        expect(op.lastError, 'network');
        expect(op.dependsOnOp, 'op0');
        expect(op.createdAt, 300);
      });

      test('defaults and all kinds parse', () {
        final op = OpQueueRow.fromRow(baseRow());
        expect(op.attemptCount, 0);
        expect(op.nextRetryAt, 0);
        expect(op.lastError, isNull);
        expect(op.dependsOnOp, isNull);
        for (final k in OpQueueKind.values) {
          expect(OpQueueRow.fromRow(baseRow(kind: k.name)).kind, k,
              reason: k.name);
        }
      });

      test('unknown kind and malformed columns are typed errors', () {
        expect(
            () => OpQueueRow.fromRow(baseRow(kind: 'fileDelete')),
            throwsA(isA<StorageError>().having(
                (e) => e.message, 'message', contains('Corrupt lp_op_queue'))));
        for (final row in [
          baseRow()..remove('seq'),
          baseRow()..remove('op_id'),
          baseRow()..remove('created_at'),
          baseRow(seq: '1'),
          baseRow(opId: 5),
          baseRow(payloadJson: 5),
          baseRow(createdAt: '300'),
        ]) {
          expect(() => OpQueueRow.fromRow(row), throwsA(isA<StorageError>()));
        }
      });
    });
  });
}
