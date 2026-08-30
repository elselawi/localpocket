import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/sync_status_codec.dart';
import 'package:test/test.dart';

/// Decodes the tagged wire values (as the page-side event dispatch does)
/// before the tolerant codec decoders see the maps.
Map<String, Object?> _decodeWireMap(Map<String, Object?> wire) =>
    wire.map((k, v) => MapEntry(k, decodeWireValue(v)));

/// Phase 1 — refactor plan §4.9: sync status/report wire codecs must be
/// COMPLETE. Every field the model exposes survives encode → decode, including
/// `blocked`, `discarded`, timestamps, and error state. Before the fix the
/// report codec dropped `blocked` by design ("intentionally absent"), so a
/// decoded web report always claimed `blocked == 0`.
void main() {
  group('SyncReport wire codec', () {
    test('round-trips every field, including blocked', () {
      const report = SyncReport(
        pulled: {'widgets': 5, 'notes': 2},
        swept: {'widgets': 1},
        pushed: 7,
        deadLettered: 3,
        blocked: 4,
        discarded: 2,
        hadError: true,
      );
      final decoded = decodeSyncReport(encodeSyncReport(report));
      expect(decoded.pulled, report.pulled);
      expect(decoded.swept, report.swept);
      expect(decoded.pushed, report.pushed);
      expect(decoded.deadLettered, report.deadLettered);
      expect(decoded.blocked, report.blocked,
          reason: '§4.9: blocked must not disappear in the wire codec');
      expect(decoded.discarded, report.discarded);
      expect(decoded.hadError, report.hadError);
    });

    test('blocked defaults to zero on legacy payloads without the field', () {
      final decoded = decodeSyncReport({
        'pulled': {'widgets': 1},
        'swept': <String, int>{},
        'pushed': 0,
        'deadLettered': 0,
        'discarded': 0,
        'hadError': false,
      });
      expect(decoded.blocked, 0);
    });

    test('zero report round-trips', () {
      const report = SyncReport();
      final decoded = decodeSyncReport(encodeSyncReport(report));
      expect(decoded.pulled, isEmpty);
      expect(decoded.pushed, 0);
      expect(decoded.blocked, 0);
      expect(decoded.discarded, 0);
      expect(decoded.hadError, isFalse);
    });
  });

  group('SyncStatus wire codec', () {
    test('round-trips every field, including blocked and timestamps', () {
      final at = DateTime.utc(2026, 8, 30, 12, 0, 0);
      final status = SyncStatus(
        state: SyncEngineState.backoff,
        pending: 3,
        conflicts: 1,
        hidden: 2,
        blocked: 5,
        lastError: 'boom',
        lastSyncAt: at,
        lastSuccessfulSyncAt: at,
      );
      final decoded =
          decodeSyncStatus(_decodeWireMap(encodeSyncStatus(status)));
      expect(decoded.state, status.state);
      expect(decoded.pending, 3);
      expect(decoded.conflicts, 1);
      expect(decoded.hidden, 2);
      expect(decoded.blocked, 5);
      expect(decoded.lastError, 'boom');
      expect(decoded.lastSyncAt, at);
      expect(decoded.lastSuccessfulSyncAt, at);
    });

    test('malformed payload degrades to a usable zero status', () {
      final decoded = decodeSyncStatus({
        'state': 'not-a-state',
        'pending': 'x',
        'conflicts': null,
        'blocked': 1.9,
      });
      expect(decoded.state, SyncEngineState.closed);
      expect(decoded.pending, 0);
      expect(decoded.conflicts, 0);
      expect(decoded.blocked, 1, reason: 'numeric coercion stays an int');
      expect(decoded.lastError, isNull);
    });
  });
}
