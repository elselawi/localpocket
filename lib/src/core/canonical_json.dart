import 'dart:convert';

/// Canonical JSON serialization.
/// i.e. turns a Dart object into a string
///
/// Rules:
/// - Object keys are sorted lexicographically.
/// - Numbers are normalized: integral doubles print as integers (`1.0` -> `1`).
/// - No insignificant whitespace.
///
/// The canonical form is load-bearing: it is used for document hashing,
/// conflict base snapshots, and payload generation.
String canonicalize(Object? value) {
  final buffer = StringBuffer();
  _writeCanonical(buffer, value);
  return buffer.toString();
}

void _writeCanonical(StringBuffer out, Object? value) {
  if (value == null) {
    out.write('null');
  } else if (value is bool) {
    out.write(value ? 'true' : 'false');
  } else if (value is int) {
    out.write(value.toString());
  } else if (value is double) {
    if (value.isFinite &&
        value == value.roundToDouble() &&
        value.abs() < 1e15) {
      out.write(value.round().toString());
    } else {
      out.write(value.toString());
    }
  } else if (value is num) {
    out.write(value.toString());
  } else if (value is String) {
    out.write(jsonEncode(value));
  } else if (value is List) {
    out.write('[');
    for (var i = 0; i < value.length; i++) {
      if (i > 0) out.write(',');
      _writeCanonical(out, value[i]);
    }
    out.write(']');
  } else if (value is Map) {
    // Keys are stringified and sorted lexicographically. Lookups must use the
    // ORIGINAL key (a non-String key never matches its `toString()` form), and
    // two distinct keys that stringify identically (e.g. `1` vs `'1'`) cannot
    // be represented losslessly in JSON — fail loudly rather than silently
    // dropping a value or emitting a duplicate key.
    final entries = <(String, Object)>[];
    for (final original in value.keys) {
      final s = original.toString();
      if (entries.any((e) => e.$1 == s)) {
        throw ArgumentError(
            'Cannot canonicalize map: keys collide after toString() ("$s").');
      }
      entries.add((s, original));
    }
    entries.sort((a, b) => a.$1.compareTo(b.$1));
    out.write('{');
    var first = true;
    for (final (key, original) in entries) {
      if (!first) out.write(',');
      first = false;
      out.write(jsonEncode(key));
      out.write(':');
      _writeCanonical(out, value[original]);
    }
    out.write('}');
  } else {
    throw ArgumentError(
        'Cannot canonicalize value of type ${value.runtimeType}');
  }
}
