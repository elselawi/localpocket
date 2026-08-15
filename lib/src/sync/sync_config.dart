/// Engine tuning knobs. Every value is
/// overridable so tests can shrink timers and freeze jitter/clock.
library;

import 'dart:math';

/// Configuration for pull, push, retry, sweep, and sync scheduling.
///
/// The constructor is `const` and therefore does not validate or throw;
/// invalid values are instead **clamped at point of use**:
/// - `delayFor` treats attempts < 1 as attempt 1,
/// - jitter results are clamped to the documented `0.5..1.5` range,
/// - negative `backoffBase`/`backoffCap` behave as zero,
/// - exponential growth is integer and overflow-safe (capped at `backoffCap`).
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
  ///
  /// Retry-After may be integer seconds (optional sign, surrounding
  /// whitespace) or an HTTP-date; malformed values fall back to 1 second.
  /// Negative integer seconds and dates in the past clamp to zero.
  /// Attempts below 1 are treated as 1; jitter is clamped to `0.5..1.5` and
  /// the exponential is integer-doubled with overflow protection, never
  /// exceeding [backoffCap].
  Duration delayFor(int attempt, {String? retryAfter}) {
    if (retryAfter != null) {
      final parsed = _parseRetryAfter(retryAfter);
      if (parsed is int) {
        return Duration(seconds: parsed < 0 ? 0 : parsed);
      }
      if (parsed is DateTime) {
        final delayMs = parsed.millisecondsSinceEpoch - now();
        return delayMs <= 0 ? Duration.zero : Duration(milliseconds: delayMs);
      }
      return const Duration(seconds: 1);
    }
    final n = attempt < 1 ? 1 : attempt;
    final baseUs =
        backoffBase.inMicroseconds < 0 ? 0 : backoffBase.inMicroseconds;
    final capUs = backoffCap.inMicroseconds < 0 ? 0 : backoffCap.inMicroseconds;
    var exp = baseUs > capUs ? capUs : baseUs;
    for (var i = 1; i < n && exp < capUs; i++) {
      final doubled = exp * 2;
      exp = doubled > capUs ? capUs : doubled;
    }
    final j = jitter(n).clamp(0.5, 1.5).toDouble();
    return Duration(microseconds: (exp * j).round());
  }

  /// Parses a `Retry-After` header value: integer seconds or an HTTP-date.
  /// Returns `null` for malformed input.
  Object? _parseRetryAfter(String s) {
    final trimmed = s.trim();
    final seconds = int.tryParse(trimmed);
    if (seconds != null) return seconds;
    return _tryParseHttpDate(trimmed);
  }

  static int? _monthNumber(String name) => switch (name.toLowerCase()) {
        'jan' => 1,
        'feb' => 2,
        'mar' => 3,
        'apr' => 4,
        'may' => 5,
        'jun' => 6,
        'jul' => 7,
        'aug' => 8,
        'sep' => 9,
        'oct' => 10,
        'nov' => 11,
        'dec' => 12,
        _ => null,
      };

  /// Minimal HTTP-date parser (RFC 7231 §7.1.1.1): RFC 1123
  /// (`Sun, 06 Nov 1994 08:49:37 GMT`), RFC 850 (`Sunday, 06-Nov-94 …`), and
  /// asctime (`Sun Nov  6 08:49:37 1994`). Day names are case-insensitive;
  /// anything else returns null. Avoids `dart:io` for web compatibility.
  static DateTime? _tryParseHttpDate(String s) {
    final rfc1123 = RegExp(
        r'^[A-Za-z]{3}, (\d{2}) ([A-Za-z]{3}) (\d{4}) (\d{2}):(\d{2}):(\d{2}) GMT$');
    var m = rfc1123.firstMatch(s);
    if (m != null) {
      final month = _monthNumber(m.group(2)!);
      if (month == null) return null;
      return _safeUtc(
        int.parse(m.group(3)!),
        month,
        int.parse(m.group(1)!),
        int.parse(m.group(4)!),
        int.parse(m.group(5)!),
        int.parse(m.group(6)!),
      );
    }
    // RFC 850: 2-digit year (>=70 → 19xx, else 20xx).
    final rfc850 = RegExp(
        r'^[A-Za-z]+, (\d{2})-([A-Za-z]{3})-(\d{2}) (\d{2}):(\d{2}):(\d{2}) GMT$');
    m = rfc850.firstMatch(s);
    if (m != null) {
      final month = _monthNumber(m.group(2)!);
      if (month == null) return null;
      final yy = int.parse(m.group(3)!);
      final year = yy >= 70 ? 1900 + yy : 2000 + yy;
      return _safeUtc(
        year,
        month,
        int.parse(m.group(1)!),
        int.parse(m.group(4)!),
        int.parse(m.group(5)!),
        int.parse(m.group(6)!),
      );
    }
    final asctime = RegExp(
        r'^[A-Za-z]{3} ([A-Za-z]{3}) {1,2}(\d{1,2}) (\d{2}):(\d{2}):(\d{2}) (\d{4})$');
    m = asctime.firstMatch(s);
    if (m != null) {
      final month = _monthNumber(m.group(1)!);
      if (month == null) return null;
      return _safeUtc(
        int.parse(m.group(6)!),
        month,
        int.parse(m.group(2)!),
        int.parse(m.group(3)!),
        int.parse(m.group(4)!),
        int.parse(m.group(5)!),
      );
    }
    return null;
  }

  static DateTime? _safeUtc(int y, int mo, int d, int h, int mi, int s) {
    if (mo < 1 || mo > 12 || d < 1 || d > 31 || h > 23 || mi > 59 || s > 59) {
      return null;
    }
    try {
      return DateTime.utc(y, mo, d, h, mi, s);
    } catch (_) {
      return null;
    }
  }
}
