// lib/src/api/limits.dart
/// Page-size sentinels for typed reads.
abstract final class Limits {
  /// Pass as `limit:` to run the read without a page size. Expanded to the
  /// no-LIMIT path at the typed surface boundary — the raw value never
  /// reaches a builder's limit slot, compiled SQL, or the worker wire.
  /// 2^53 − 1: the largest integer exactly representable on dart2js,
  /// native i64, and the JSON wire alike, so an accidental raw crossing
  /// degrades to a harmless bound instead of corruption.
  static const int unbounded = 0x1FFFFFFFFFFFFF;

  /// The engine's default cap on unbounded [distinct] scans — mirrors the
  /// raw builder's `LIMIT 1000` fallback for distinct reads.
  static const int distinctDefault = 1000;
}
