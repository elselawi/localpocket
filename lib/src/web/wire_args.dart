library;

import 'protocol.dart';

/// Validated, typed access to a wire request's arguments.
///
/// The outer envelope ([WebRequest.fromJson]) validates the envelope shape,
/// but operation arguments vary per operation. Historically handlers read
/// arguments with direct casts (`req.args['store'] as String`), which leak
/// `TypeError`/cast errors when a caller sends a malformed value and make
/// dart2js diagnostics unpredictable.
///
/// These helpers centralize argument validation so a malformed operation
/// argument always surfaces as a stable [ProtocolEnvelopeException] (a typed
/// protocol error), never a raw cast error. The worker's `_stableErrorType`
/// maps `ProtocolEnvelopeException` to a fixed, minification-stable category.
final class WireArgs {
  final Map<String, Object?> _map;

  const WireArgs(this._map);

  /// Returns [key] as [T], throwing [ProtocolEnvelopeException] when the
  /// value is absent or not exactly a [T].
  T require<T>(String key, {String? op}) {
    final v = _map[key];
    if (v is! T) {
      throw ProtocolEnvelopeException(
        'Missing or invalid "$key" argument${op == null ? '' : ' for $op'}: '
        'expected ${_describe<T>()}, got ${v == null ? 'null' : _describeValue(v)}.',
      );
    }
    return v;
  }

  /// An optional [key] that must be a [T] when present (null is allowed).
  T? optional<T>(String key) {
    if (!_map.containsKey(key) || _map[key] == null) return null;
    final v = _map[key]!;
    if (v is! T) {
      throw ProtocolEnvelopeException(
        'Invalid "$key" argument: expected ${_describe<T>()}, '
        'got ${_describeValue(v)}.',
      );
    }
    return v as T;
  }

  /// A required [key] that must be a non-null int.
  int requireInt(String key, {String? op}) => require<int>(key, op: op);

  /// An optional [key] that must be an int when present.
  int? optionalInt(String key) => optional<int>(key);

  /// A required [key] that must be a non-null String.
  String requireString(String key, {String? op}) =>
      require<String>(key, op: op);

  /// An optional [key] that must be a String when present.
  String? optionalString(String key) => optional<String>(key);

  /// A required [key] that must be a non-null bool.
  bool requireBool(String key, {String? op}) => require<bool>(key, op: op);

  /// An optional [key] that must be a bool when present.
  bool? optionalBool(String key) => optional<bool>(key);

  /// A required [key] that must be a non-null List.
  List requireList(String key, {String? op}) => require<List>(key, op: op);

  /// An optional [key] that must be a List when present.
  List? optionalList(String key) => optional<List>(key);

  /// A required [key] that must be a non-null Map.
  Map requireMap(String key, {String? op}) => require<Map>(key, op: op);

  static String _describe<T>() => T.toString();

  static String _describeValue(Object v) => v.runtimeType.toString();
}
