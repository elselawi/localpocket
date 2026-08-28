/// Web cipher bridge: serializes the field cipher across the worker boundary.
///
/// Only the pure-Dart [AesGcmFieldCipher] can cross postMessage — its whole
/// state is the 32-byte AES-256 key. The key DOES cross postMessage into the
/// worker: the boundary is same-origin trusted (the worker asset is fetched
/// from the same origin as the app). App-supplied [CryptoProvider] instances
/// are abstract interface objects with no serializable form, so a non-null
/// provider is rejected loudly rather than silently ignored. Any other
/// [FieldCipher] implementation is likewise web-unsupported.
///
/// This library is pure Dart (no `dart:js_interop`, no `dart:io`) so the
/// envelope build/parse logic is testable on the VM and compiles for both
/// dart2js and dart2wasm.
library;

import 'dart:typed_data';

import '../core/cipher.dart';
import '../core/schema.dart';

/// Tag identifying the AES-256-GCM cipher envelope.
const String cipherEnvelopeTypeAesGcm = 'aes-gcm';

/// {@template localpocket.web_cipher_unsupported_error}
/// Thrown when a cipher configuration cannot be honored on the web platform.
///
/// A `fieldCipher` / `cryptoProvider` argument that cannot be honored must
/// never be silently ignored: the web open fails loudly instead. This is a
/// web-only typed error (like the protocol exceptions in `protocol.dart`),
/// not part of the native [LocalPocketError] hierarchy.
/// {@endtemplate}
final class WebCipherUnsupportedError implements Exception {
  /// Creates an error for an unsupported web cipher configuration.
  ///
  /// {@macro localpocket.web_cipher_unsupported_error}
  const WebCipherUnsupportedError(this.message);

  /// Human-readable explanation of why the web cipher configuration is unsupported.
  final String message;

  @override
  String toString() => 'WebCipherUnsupportedError: $message';
}

/// Builds the serializable `fieldCipher` envelope for `openArgs`, or throws a
/// typed [WebCipherUnsupportedError] when the requested cipher configuration
/// cannot cross the worker boundary.
///
/// Rules (never silently ignore an argument):
/// - A non-null [cryptoProvider] is web-unsupported: it is an abstract
///   app-supplied interface with no serializable form.
/// - [fieldCipher] must be an [AesGcmFieldCipher] — the only serializable
///   implementation. Any other [FieldCipher] is web-unsupported.
/// - If neither is supplied but [stores] declare `encrypted` fields, opening
///   would silently produce stores that cannot be written; that is rejected.
///
/// Returns `null` when no cipher is configured (and none is required).
Map<String, Object?>? buildFieldCipherEnvelope({
  required List<CollectionSchema<Object?>> stores,
  Object? fieldCipher,
  Object? cryptoProvider,
}) {
  if (cryptoProvider != null) {
    throw const WebCipherUnsupportedError(
        'CryptoProvider is not supported on web: it is an app-supplied '
        'interface with no serializable form. Pass an AesGcmFieldCipher via '
        'fieldCipher instead.');
  }
  if (fieldCipher == null) {
    if (_hasEncryptedFields(stores)) {
      throw const WebCipherUnsupportedError(
          'Store declares encrypted fields but no fieldCipher was provided. '
          'Open with an AesGcmFieldCipher to use field-level encryption on '
          'web.');
    }
    return null;
  }
  if (fieldCipher is! AesGcmFieldCipher) {
    throw WebCipherUnsupportedError(
        'Only AesGcmFieldCipher is supported on web. Custom FieldCipher '
        'implementations (${fieldCipher.runtimeType}) cannot cross the '
        'worker boundary.');
  }
  return {
    'type': cipherEnvelopeTypeAesGcm,
    'key': List<int>.unmodifiable(fieldCipher.key),
  };
}

/// Reconstructs the engine [AesGcmFieldCipher] from a wire envelope.
///
/// Returns `null` when no envelope is present. Throws [FormatException] on a
/// malformed envelope — a bad envelope must never be silently ignored.
AesGcmFieldCipher? parseFieldCipherEnvelope(Object? raw) {
  if (raw == null) return null;
  if (raw is! Map<Object?, Object?>) {
    throw const FormatException('fieldCipher envelope must be a map.');
  }
  final type = raw['type'];
  if (type != cipherEnvelopeTypeAesGcm) {
    throw FormatException('Unsupported fieldCipher type: $type');
  }
  final key = raw['key'];
  if (key is! List<Object?> || key.length != 32) {
    throw const FormatException(
        'AES-256-GCM fieldCipher key must be 32 bytes.');
  }
  final bytes = Uint8List(32);
  for (var i = 0; i < 32; i++) {
    final b = key[i];
    if (b is! int || b < 0 || b > 255) {
      throw FormatException('Malformed AES-256-GCM key byte at index $i: $b');
    }
    bytes[i] = b;
  }
  return AesGcmFieldCipher(bytes);
}

bool _hasEncryptedFields(List<CollectionSchema<Object?>> stores) =>
    stores.any((s) => s.fields.any((f) => f.encrypted));
