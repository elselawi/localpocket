/// The ONE shared overflow-safe exponential backoff primitive.
///
/// Sync retry delays and realtime reconnect backoff must
/// share one primitive (or clearly composed policies) so their timing
/// contracts can never drift. Both [SyncConfig.delayFor] (sync cycles) and
/// the SSE reconnect loop (PocketBase realtime) delegate here.
///
/// Contract (pinned by tests and preserved verbatim from the previous
/// duplicated implementations):
/// - attempts below 1 are treated as 1;
/// - negative `base`/`cap` behave as zero;
/// - the exponential is integer-doubled with overflow protection and never
///   exceeds `cap`;
/// - jitter results are clamped to the documented `0.5..1.5` range.
library;

import 'dart:math';

/// Default jitter: uniform in `[0.5, 1.5)`.
double defaultBackoffJitter(int attempt) => 0.5 + Random().nextDouble();

/// Backoff delay for attempt [attempt] (1-based):
/// `min(base * 2^(attempt-1), cap) * jitter`.
Duration exponentialBackoffDelay({
  required Duration base,
  required Duration cap,
  required int attempt,
  double Function(int attempt)? jitter,
}) {
  final n = attempt < 1 ? 1 : attempt;
  final baseUs = base.inMicroseconds < 0 ? 0 : base.inMicroseconds;
  final capUs = cap.inMicroseconds < 0 ? 0 : cap.inMicroseconds;
  var exp = baseUs > capUs ? capUs : baseUs;
  for (var i = 1; i < n && exp < capUs; i++) {
    final doubled = exp * 2;
    exp = doubled > capUs ? capUs : doubled;
  }
  final j = (jitter ?? defaultBackoffJitter)(n).clamp(0.5, 1.5).toDouble();
  return Duration(microseconds: (exp * j).round());
}
