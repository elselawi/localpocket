// lib/src/api/limits.dart
/// Page-size sentinels for typed reads.
abstract final class Limits {
  /// Pass as `limit:` to run the read without a page size. Expanded to the
  /// no-LIMIT path at the typed boundary; the raw value never reaches
  /// compiled SQL or the worker wire. 2^53 − 1 is the largest integer exact
  /// on dart2js, native i64, and the JSON wire alike, so an accidental raw
  /// crossing degrades to a harmless bound instead of corruption.
  static const int unbounded = 0x1FFFFFFFFFFFFF;
}
