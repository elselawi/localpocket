part of 'contract.dart';

/// Tagged wire encoding for values that cross a runtime boundary.
///
/// JSON-representable values pass through unchanged (maps with string keys,
/// lists, String, num, bool, null). Non-JSON values are wrapped in a tagged
/// form so the decode side can reconstruct the exact type.
const String _wireTagKey = '__lp_t';

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
    return {
      for (final e in value.entries) e.key.toString(): encodeWireValue(e.value),
    };
  }
  if (value == null || value is bool || value is num || value is String) {
    return value;
  }
  throw WireException('Value of type ${value.runtimeType} is not wire-safe.');
}

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

/// Raised for any malformed wire payload, value, or unknown tag. Never a raw
/// cast exception.
class WireException implements Exception {
  WireException(this.message);
  final String message;

  @override
  String toString() => 'WireException: $message';
}
