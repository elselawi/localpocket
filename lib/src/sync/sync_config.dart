/// Engine tuning knobs. Every value is
/// overridable so tests can shrink timers and freeze jitter/clock.
library;

import 'dart:math';

/// Configuration for pull, push, retry, sweep, and sync scheduling.
class SyncConfig {
  /// Pull page size (server max 500; default 200).
  final int maxPage;

  /// Bound a single pull pass (resume next pass).
  final int maxPagesPerPass;

  /// Rewind window for commit-vs-timestamp reordering.
  final Duration rewind;

  /// Anti-entropy: 36 buckets by first id char; buckets per sweep cycle.
  final int sweepBucketCount;
  final int bucketsPerSweep;
  final Duration sweepInterval;

  /// Local write → push debounce.
  final Duration pushDebounce;

  /// Periodic sync timer.
  final Duration syncInterval;

  /// Connectivity-regained settle delay (captive portals).
  final Duration connectivitySettle;

  /// Push batch cap: `min(backend.maxBatch, maxBatch)`.
  final int maxBatch;

  /// Retry backoff: delay(n) = min(base * 2^(n-1), cap) * jitter.
  final Duration backoffBase;
  final Duration backoffCap;
  final int maxAttempts;

  /// Jitter source, 0.5..1.5 (default uniform). Inject for determinism.
  final double Function(int attempt) jitter;

  /// Retention duration for hidden rows before purging (default null = keep forever).
  final Duration? purgeHiddenAfter;

  /// Injectable clock (epoch ms). Defaults to the wall clock.
  final int Function() now;

  /// Creates synchronization configuration with conservative defaults.
  const SyncConfig({
    this.maxPage = 200,
    this.maxPagesPerPass = 100,
    this.rewind = const Duration(seconds: 5),
    this.sweepBucketCount = 36,
    this.bucketsPerSweep = 2,
    this.sweepInterval = const Duration(hours: 24),
    this.pushDebounce = const Duration(milliseconds: 500),
    this.syncInterval = const Duration(minutes: 5),
    this.connectivitySettle = const Duration(seconds: 1),
    this.maxBatch = 25,
    this.backoffBase = const Duration(seconds: 1),
    this.backoffCap = const Duration(minutes: 5),
    this.maxAttempts = 8,
    this.purgeHiddenAfter,
    double Function(int attempt)? jitter,
    int Function()? now,
  })  : jitter = jitter ?? _defaultJitter,
        now = now ?? _wallClock;

  static double _defaultJitter(int attempt) => 0.5 + Random().nextDouble();

  static int _wallClock() => DateTime.now().millisecondsSinceEpoch;

  /// Backoff delay for attempt `n` (1-based) honoring Retry-After.
  Duration delayFor(int attempt, {String? retryAfter}) {
    if (retryAfter != null) {
      return Duration(seconds: int.tryParse(retryAfter) ?? 1);
    }
    final raw = backoffBase * pow(2, attempt - 1).toInt();
    final capped = raw < backoffCap ? raw : backoffCap;
    return Duration(microseconds: (capped.inMicroseconds * jitter(attempt)).round());
  }
}
