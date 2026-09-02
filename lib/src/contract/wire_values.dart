part of 'contract.dart';

/// Tagged wire encoding for values crossing a runtime boundary.
///
/// JSON-representable values pass through unchanged; non-JSON values
/// ([DateTime], [Uint8List]) are wrapped in a tagged form so the decode side
/// reconstructs the exact type.
const String _wireTagKey = '__lp_t';

/// Encodes [value] for the wire; throws [WireException] for non-wire-safe
/// types.
///
/// Timestamps are instants: encoding stores epoch milliseconds (which are
/// independent of the source `DateTime.isUtc` flag) and decoding always
/// reconstructs a UTC `DateTime`. The wire therefore normalizes timestamps
/// to UTC representation; it never applies a timezone offset to the instant.
/// Wall-clock locality is not part of the wire contract.
Object? encodeWireValue(Object? value) {
  if (value is DateTime) {
    return {_wireTagKey: 'datetime', 'v': value.millisecondsSinceEpoch};
  }
  if (value is Uint8List) {
    return {_wireTagKey: 'bytes', 'v': base64Encode(value)};
  }
  if (value is List) {
    return [for (final v in value) encodeWireValue(v)];
  }
  if (value is Map) {
    // JSON-object cells may legitimately carry the reserved tag key; escape
    // them so decode cannot mistake the user's data for a tagged value.
    if (value.containsKey(_wireTagKey)) {
      return {
        _wireTagKey: 'map',
        'v': {
          for (final e in value.entries)
            e.key.toString(): encodeWireValue(e.value),
        },
      };
    }
    return {
      for (final e in value.entries) e.key.toString(): encodeWireValue(e.value),
    };
  }
  if (value == null || value is bool || value is num || value is String) {
    return value;
  }
  throw WireException('Value of type ${value.runtimeType} is not wire-safe.');
}

/// Reverses [encodeWireValue], reconstructing tagged values to their exact
/// types; plain maps and lists decode recursively.
Object? decodeWireValue(Object? value) {
  if (value is Map) {
    final tag = value[_wireTagKey];
    if (tag == 'datetime') {
      final v = value['v'];
      if (v is int) return DateTime.fromMillisecondsSinceEpoch(v, isUtc: true);
      throw WireException('Malformed datetime wire value.');
    }
    if (tag == 'bytes') {
      final v = value['v'];
      if (v is String) {
        try {
          return base64Decode(v);
        } on FormatException {
          throw WireException('Malformed bytes wire value.');
        }
      }
      throw WireException('Malformed bytes wire value.');
    }
    if (tag == 'map') {
      // Unescape a user JSON-object that carried the reserved tag key. The
      // inner map is literal data: only its ENTRY VALUES decode recursively.
      final inner = value['v'];
      if (inner is! Map) throw WireException('Malformed map wire value.');
      return {
        for (final e in inner.entries)
          if (e.key is String) e.key as String: decodeWireValue(e.value),
      };
    }
    return {
      for (final e in value.entries)
        if (e.key is String) e.key as String: decodeWireValue(e.value),
    };
  }
  if (value is List) {
    return [for (final v in value) decodeWireValue(v)];
  }
  return value;
}

/// Raised for any malformed wire payload, value, or unknown tag — never a raw
/// cast exception.
///
/// {@template localpocket.wire_exception}
/// {@endtemplate}
class WireException implements Exception {
  /// {@macro localpocket.wire_exception}
  WireException(this.message);

  /// Human-readable description of the malformed payload.
  final String message;

  @override
  String toString() => 'WireException: $message';
}

// ---------------------------------------------------------------------------
// Typed required-field extraction. Decoder factories use these instead of
// raw casts so a malformed payload always surfaces as a [WireException] —
// the boundary's only error type — never as a null-check or cast error.
// ---------------------------------------------------------------------------

/// Extracts a required non-null [String] wire field.
String _wireString(Object? v, String field) {
  if (v is String) return v;
  throw WireException('Malformed wire field "$field".');
}

/// Extracts a required non-null [int] wire field.
int _wireInt(Object? v, String field) {
  if (v is int) return v;
  throw WireException('Malformed wire field "$field".');
}

/// Extracts an optional [String] wire field: `null` passes through; a
/// present wrong-typed value is rejected.
String? _optWireString(Object? v, String field) {
  if (v == null) return null;
  return _wireString(v, field);
}

/// Extracts an optional [int] wire field with [fallback] for absence; a
/// present wrong-typed value is rejected.
int _optWireInt(Object? v, String field, int fallback) {
  if (v == null) return fallback;
  return _wireInt(v, field);
}

/// Extracts an optional [DateTime] wire field; a present wrong-typed value
/// is rejected rather than read as "absent".
DateTime? _optWireDateTime(Object? v, String field) {
  if (v == null) return null;
  if (v is DateTime) return v;
  throw WireException('Malformed wire field "$field".');
}

/// Extracts an optional [bool] wire field with [fallback] for absence; a
/// present wrong-typed value is rejected rather than coerced.
bool _optWireBool(Object? v, String field, bool fallback) {
  if (v == null) return fallback;
  if (v is bool) return v;
  throw WireException('Malformed wire field "$field".');
}

/// Extracts an optional [num] wire field; `null` passes through, a present
/// wrong-typed value is rejected.
num? _optWireNum(Object? v, String field) {
  if (v == null) return null;
  if (v is num) return v;
  throw WireException('Malformed wire field "$field".');
}

/// Extracts a string wire field with [fallback] for absence; a present
/// wrong-typed value is rejected instead of silently defaulted.
String _optWireStringFallback(Object? v, String field, String fallback) {
  if (v == null) return fallback;
  return _wireString(v, field);
}

/// Extracts a required list of strings; any non-string element is rejected.
List<String> _wireStringList(Object? v, String field) {
  if (v is List) {
    final out = <String>[];
    for (final e in v) {
      if (e is! String) {
        throw WireException('Malformed wire field "$field".');
      }
      out.add(e);
    }
    return out;
  }
  throw WireException('Malformed wire field "$field".');
}

/// Extracts a required set of strings from a wire list; any non-string
/// element is rejected.
Set<String> _wireStringSet(Object? v, String field) {
  if (v is List) {
    final out = <String>{};
    for (final e in v) {
      if (e is! String) {
        throw WireException('Malformed wire field "$field".');
      }
      out.add(e);
    }
    return out;
  }
  throw WireException('Malformed wire field "$field".');
}
