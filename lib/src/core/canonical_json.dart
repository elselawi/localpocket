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
  writeCanonicalValue(buffer, value);
  return buffer.toString();
}

/// Serializes [value] canonically into [out] and returns the EXACT UTF-8
/// byte length of what was written (counted during the write itself — no
/// second pass over the buffer). Used by maxDocBytes validation on hot write
/// paths.
int canonicalizeInto(StringBuffer out, Object? value) => writeCanonicalValue(out, value);

/// The EXACT UTF-8 byte length of [s], counted per rune in one pass
/// (1/2/3/4 by code-point range) — the number `utf8.encode(s).length` would
/// produce without the encoded copy.
int utf8BytesOf(String s) {
  var bytes = 0;
  for (final rune in s.runes) {
    if (rune < 0x80) {
      bytes += 1;
    } else if (rune < 0x800) {
      bytes += 2;
    } else if (rune < 0x10000) {
      bytes += 3;
    } else {
      bytes += 4;
    }
  }
  return bytes;
}

/// The EXACT UTF-8 byte length of everything currently in [out], counted per
/// rune in one pass — the number `utf8.encode(out.toString()).length` would
/// produce without the encoded copy. Prefer [writeCanonicalValue]'s return
/// value on hot paths (it counts during the write, avoiding this buffer copy).
int utf8ByteLength(StringBuffer out) => utf8BytesOf(out.toString());

/// Writes [value] in canonical JSON form into [out] (sorted object keys,
/// integral-double normalization, no insignificant whitespace) and returns
/// the EXACT UTF-8 byte length written. Public so composed serializers (e.g.
/// the fused payload writer in the codec) can emit byte-identical output
/// without an intermediate map.
int writeCanonicalValue(StringBuffer out, Object? value) {
  if (value == null) {
    out.write('null');
    return 4;
  }
  if (value is bool) {
    out.write(value ? 'true' : 'false');
    return value ? 4 : 5;
  }
  if (value is int) {
    final s = value.toString();
    out.write(s);
    return s.length;
  }
  if (value is double) {
    final s =
        (value.isFinite && value == value.roundToDouble() && value.abs() < 1e15)
            ? value.round().toString()
            : value.toString();
    out.write(s);
    return s.length;
  }
  if (value is num) {
    final s = value.toString();
    out.write(s);
    return s.length;
  }
  if (value is String) {
    final s = jsonEncode(value);
    out.write(s);
    return utf8BytesOf(s);
  }
  if (value is List) {
    out.write('[');
    var bytes = 1;
    for (var i = 0; i < value.length; i++) {
      if (i > 0) {
        out.write(',');
        bytes++;
      }
      bytes += writeCanonicalValue(out, value[i]);
    }
    out.write(']');
    return bytes + 1;
  }
  if (value is Map) {
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
    var bytes = 1;
    var first = true;
    for (final (key, original) in entries) {
      if (!first) {
        out.write(',');
        bytes++;
      }
      first = false;
      final k = jsonEncode(key);
      out.write(k);
      bytes += utf8BytesOf(k);
      out.write(':');
      bytes++;
      bytes += writeCanonicalValue(out, value[original]);
    }
    out.write('}');
    return bytes + 1;
  }
  throw ArgumentError('Cannot canonicalize value of type ${value.runtimeType}');
}
