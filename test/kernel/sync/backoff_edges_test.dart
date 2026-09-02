import 'dart:math';

import 'package:localpocket/src/kernel/sync/backoff.dart';
import 'package:test/test.dart';

/// The shared backoff primitive's remaining edges beyond the contract pins:
/// the default jitter source and its documented clamp.
void main() {
  test('omitting jitter uses the default 0.5..1.5 uniform source', () {
    for (var attempt = 1; attempt <= 12; attempt++) {
      final delay = exponentialBackoffDelay(
        base: const Duration(milliseconds: 100),
        cap: const Duration(seconds: 10),
        attempt: attempt,
      );
      final cap = const Duration(milliseconds: 100) * pow(2, attempt - 1);
      final upper = cap > const Duration(seconds: 10)
          ? const Duration(milliseconds: 15000)
          : cap * 1.5;
      expect(delay, lessThanOrEqualTo(upper),
          reason: 'attempt $attempt exceeded the jittered cap');
      expect(delay, greaterThanOrEqualTo(const Duration(milliseconds: 50)),
          reason: 'attempt $attempt fell below the jitter floor');
    }
  });

  test('the default jitter itself stays inside 0.5..1.5', () {
    for (var i = 0; i < 200; i++) {
      final jitter = defaultBackoffJitter(1);
      expect(jitter, greaterThanOrEqualTo(0.5));
      expect(jitter, lessThan(1.5));
    }
  });
}
