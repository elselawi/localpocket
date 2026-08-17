/// Hand-rolled wire conversions for values that structured clone cannot
/// represent faithfully as plain Dart values.
///
/// This library is pure Dart (no `dart:js_interop`, no `dart:io`) so it is
/// testable on the VM and compiles for both dart2js and dart2wasm. The
/// transport layer converts the wire-safe values produced here to and from
/// JSAny.
///
/// Encoding rules:
/// - [DateTime] is tagged with its UTC epoch microseconds.
/// - [BigInt] is tagged as its decimal string. Off the wire it is ALWAYS
///   re-coerced with `BigInt.parse(...)` because a reconstructed value is not
///   guaranteed to satisfy `is BigInt` (nor to support `+` / `compareTo`).
/// - [Uint8List] is tagged as a list of byte integers. The current transport
///   does not implement transferable ArrayBuffers; large file payloads use
///   bounded tagged chunks instead.
/// - Everything else must already be structured-clone-safe: null, bool, int,
///   double, String, List, and Map with string keys.
library;

import 'dart:typed_data';

const String _dateTag = 'lp:datetime';
const String _bigIntTag = 'lp:bigint';
const String _bytesTag = 'lp:bytes';

/// Encodes [value] into a wire-safe Dart value.
Object? encodeWireValue(Object? value) {
  if (value is DateTime) {
    return {_dateTag: value.microsecondsSinceEpoch};
  }
  if (value is BigInt) {
    return {_bigIntTag: value.toString()};
  }
  if (value is Uint8List) {
    return {_bytesTag: List<int>.unmodifiable(value)};
  }
  if (value is List) {
    return List<Object?>.unmodifiable(value.map(encodeWireValue).toList());
  }
  if (value is Map) {
    final out = <String, Object?>{};
    value.forEach((k, v) {
      out[k.toString()] = encodeWireValue(v);
    });
    return out;
  }
  if (value == null ||
      value is bool ||
      value is int ||
      value is double ||
      value is String) {
    return value;
  }
  throw ArgumentError(
      'Value of type ${value.runtimeType} is not wire-safe. Only null, bool, '
      'int, double, String, DateTime, BigInt, Uint8List, List, and Map are '
      'supported.');
}

/// Decodes a wire-safe value back into Dart values, re-coercing every decoded
/// [BigInt] with [BigInt.parse].
Object? decodeWireValue(Object? value) {
  if (value is Map) {
    if (value.length == 1 && value.containsKey(_dateTag)) {
      final raw = value[_dateTag];
      if (raw is int) {
        return DateTime.fromMicrosecondsSinceEpoch(raw, isUtc: true);
      }
      throw ArgumentError('Malformed wire DateTime: $raw');
    }
    if (value.length == 1 && value.containsKey(_bigIntTag)) {
      final raw = value[_bigIntTag];
      if (raw is String) {
        // HARD RULE: never trust the reconstructed value; parse from string.
        return BigInt.parse(raw);
      }
      throw ArgumentError('Malformed wire BigInt: $raw');
    }
    if (value.length == 1 && value.containsKey(_bytesTag)) {
      final raw = value[_bytesTag];
      if (raw is List) {
        final bytes = Uint8List(raw.length);
        for (var i = 0; i < raw.length; i++) {
          final b = raw[i];
          if (b is! int || b < 0 || b > 255) {
            throw ArgumentError('Malformed wire byte at index $i: $b');
          }
          bytes[i] = b;
        }
        return bytes;
      }
      throw ArgumentError('Malformed wire bytes: $raw');
    }
    final out = <String, Object?>{};
    value.forEach((k, v) {
      out[k.toString()] = decodeWireValue(v);
    });
    return out;
  }
  if (value is List) {
    return List<Object?>.unmodifiable(value.map(decodeWireValue).toList());
  }
  return value;
}

/// Decodes a wire [BigInt] field, always re-coercing from its string form.
BigInt decodeBigInt(Object? value) {
  return BigInt.parse(value.toString());
}

/// Encodes a [BigInt] as a tagged wire value.
Object? encodeBigInt(BigInt value) => {_bigIntTag: value.toString()};

/// Encodes a [DateTime] as a tagged wire value.
Object? encodeDateTime(DateTime value) =>
    {_dateTag: value.microsecondsSinceEpoch};

/// Encodes bytes as a tagged wire value (small payloads).
Object? encodeBytes(Uint8List value) =>
    {_bytesTag: List<int>.unmodifiable(value)};
