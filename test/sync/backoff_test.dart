import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/sync/backoff.dart';
import 'package:localpocket/src/sync/sync_config.dart';
import 'package:test/test.dart';

/// Phase 1 — refactor plan §4.12: ONE retry primitive. Sync cycle backoff and
/// realtime reconnect backoff share `exponentialBackoffDelay`. Before the fix
/// the SSE reconnect loop carried a verbatim COPY of the SyncConfig logic
/// ("mirroring"), which is exactly the drift the destination architecture
/// forbids.
void main() {
  group('exponentialBackoffDelay (shared primitive)', () {
    const fixed = 1.0; // deterministic jitter
    Duration at(Duration base, Duration cap, int attempt) =>
        exponentialBackoffDelay(
            base: base, cap: cap, attempt: attempt, jitter: (_) => fixed);

    test('doubles per attempt and honors the cap', () {
      const base = Duration(seconds: 1);
      const cap = Duration(seconds: 10);
      expect(at(base, cap, 1), base);
      expect(at(base, cap, 2), const Duration(seconds: 2));
      expect(at(base, cap, 3), const Duration(seconds: 4));
      expect(at(base, cap, 4), const Duration(seconds: 8));
      expect(at(base, cap, 5), cap);
      expect(at(base, cap, 500), cap, reason: 'overflow-safe: stays at cap');
    });

    test('attempts below 1 are treated as 1', () {
      const base = Duration(seconds: 1);
      expect(at(base, base, 0), base);
      expect(at(base, base, -7), base);
    });

    test('negative base/cap behave as zero', () {
      expect(
        at(const Duration(seconds: -5), const Duration(seconds: 10), 3),
        Duration.zero,
      );
      expect(
        at(const Duration(seconds: 5), const Duration(seconds: -1), 3),
        Duration.zero,
      );
    });

    test('jitter is clamped to 0.5..1.5', () {
      final low = exponentialBackoffDelay(
          base: const Duration(seconds: 4),
          cap: const Duration(minutes: 5),
          attempt: 1,
          jitter: (_) => 0.1);
      final high = exponentialBackoffDelay(
          base: const Duration(seconds: 4),
          cap: const Duration(minutes: 5),
          attempt: 1,
          jitter: (_) => 9.0);
      expect(low, const Duration(seconds: 2));
      expect(high, const Duration(seconds: 6));
    });

    test('SyncConfig.delayFor delegates to the same primitive', () {
      final config = SyncConfig(
        backoffBase: const Duration(seconds: 1),
        backoffCap: const Duration(seconds: 10),
        jitter: (_) => 1.0,
      );
      for (final attempt in [1, 2, 3, 5, 9, 42]) {
        expect(
          config.delayFor(attempt),
          exponentialBackoffDelay(
            base: const Duration(seconds: 1),
            cap: const Duration(seconds: 10),
            attempt: attempt,
            jitter: (_) => 1.0,
          ),
          reason: 'attempt $attempt',
        );
      }
    });

    test('giant attempt counts do not overflow (cap still respected)', () {
      final d = exponentialBackoffDelay(
        base: const Duration(milliseconds: 200),
        cap: const Duration(minutes: 5),
        attempt: 1 << 40,
        jitter: (_) => 1.0,
      );
      expect(d, const Duration(minutes: 5));
    });
  });
}
