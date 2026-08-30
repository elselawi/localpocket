import 'package:localpocket/src/sync/status.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/sync_status_codec.dart';
import 'package:test/test.dart';

void main() {
  group('sync status codec', () {
    test('round-trips a full status through the wire', () {
      final status = SyncStatus(
        state: SyncEngineState.pulling,
        pending: 3,
        conflicts: 2,
        hidden: 1,
        blocked: 4,
        lastError: 'boom',
        lastSyncAt: DateTime.utc(2026, 1, 2, 3, 4, 5, 6, 7),
        lastSuccessfulSyncAt: DateTime.utc(2026, 1, 1),
      );
      final encoded = encodeSyncStatus(status);
      expect(encoded['state'], 'pulling');
      final decoded =
          decodeSyncStatus(decodeWireValue(encoded)! as Map<String, Object?>);
      expect(decoded.state, SyncEngineState.pulling);
      expect(decoded.pending, 3);
      expect(decoded.conflicts, 2);
      expect(decoded.hidden, 1);
      expect(decoded.blocked, 4);
      expect(decoded.lastError, 'boom');
      expect(decoded.lastSyncAt, DateTime.utc(2026, 1, 2, 3, 4, 5, 6, 7));
      expect(decoded.lastSuccessfulSyncAt, DateTime.utc(2026, 1, 1));
    });

    test('omits null optionals on encode', () {
      final encoded = encodeSyncStatus(const SyncStatus(
          state: SyncEngineState.idle, pending: 0, conflicts: 0, hidden: 0));
      expect(encoded.containsKey('lastError'), isFalse);
      expect(encoded.containsKey('lastSyncAt'), isFalse);
      expect(encoded.containsKey('lastSuccessfulSyncAt'), isFalse);
    });

    test('decode is tolerant of malformed and partial payloads', () {
      final decoded = decodeSyncStatus(const {});
      expect(decoded.state, SyncEngineState.closed);
      expect(decoded.pending, 0);
      expect(decoded.blocked, 0);
      expect(decoded.lastError, isNull);

      expect(decodeSyncStatus(const {'state': 'not-a-state'}).state,
          SyncEngineState.closed);
      expect(
          decodeSyncStatus(const {'state': 42}).state, SyncEngineState.closed);
      expect(decodeSyncStatus(const {'pending': 'seven'}).pending, 0);
      expect(decodeSyncStatus(const {'lastSyncAt': 'yesterday'}).lastSyncAt,
          isNull);
    });
  });

  group('sync report codec', () {
    test('round-trips a report through the wire', () {
      final report = const SyncReport(
        pulled: {'tasks': 5},
        swept: {'tasks': 9},
        pushed: 4,
        deadLettered: 1,
        discarded: 2,
        hadError: true,
      );
      final decoded = decodeSyncReport(
          decodeWireValue(encodeSyncReport(report))! as Map<String, Object?>);
      expect(decoded.pulled, {'tasks': 5});
      expect(decoded.swept, {'tasks': 9});
      expect(decoded.pushed, 4);
      expect(decoded.deadLettered, 1);
      expect(decoded.discarded, 2);
      expect(decoded.hadError, isTrue);
    });

    test('blocked is not on the wire and decode is tolerant', () {
      final encoded = encodeSyncReport(const SyncReport(pushed: 2));
      expect(encoded.containsKey('blocked'), isFalse);
      final decoded = decodeSyncReport(const {});
      expect(decoded.pushed, 0);
      expect(decoded.hadError, isFalse);
      expect(decoded.pulled, isEmpty);
    });
  });
}
