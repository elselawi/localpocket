/// Web cipher bridge: serializes the field cipher across the worker boundary.
///
/// Only the pure-Dart [AesGcmFieldCipher] can cross postMessage — its whole
/// state is the 32-byte AES-256 key, and the key DOES cross (the worker asset
/// is same-origin trusted). App-supplied [CryptoProvider] instances have no
/// serializable form, so a non-null provider is rejected loudly rather than
/// silently ignored; any other [FieldCipher] is likewise web-unsupported.
/// Pure Dart (no `dart:js_interop`), so testable on the VM.
library;

import 'dart:typed_data';

import '../../kernel/cipher.dart';
import '../../kernel/errors.dart';
import '../../kernel/schema.dart';

/// Tag identifying the AES-256-GCM cipher envelope.
const String cipherEnvelopeTypeAesGcm = 'aes-gcm';

/// {@template localpocket.web_cipher_unsupported_error}
/// Thrown when a cipher configuration cannot be honored on the web platform.
/// A `fieldCipher` / `cryptoProvider` argument that cannot be honored must
/// never be silently ignored: the web open fails loudly.
///
/// A member of the sealed [LocalPocketError] family (via
/// [ValidationException] — the configuration is a caller bug, never
/// retriable), so one `catch (LocalPocketError)` covers it everywhere.
/// {@endtemplate}
final class WebCipherUnsupportedError extends ValidationException {
  /// Creates an error for an unsupported web cipher configuration.
  ///
  /// {@macro localpocket.web_cipher_unsupported_error}
  WebCipherUnsupportedError(super.message);

  @override
  String toString() => 'WebCipherUnsupportedError: $message';
}

/// Builds the serializable `fieldCipher` envelope for `openArgs`, or throws a
/// typed [WebCipherUnsupportedError] when the configuration cannot cross the
/// worker boundary (never silently ignore an argument):
/// - non-null [cryptoProvider]: web-unsupported (no serializable form);
/// - [fieldCipher] must be [AesGcmFieldCipher], the only serializable form;
/// - no cipher with encrypted [stores] would produce unwritable stores.
///
/// Returns `null` when no cipher is configured (and none is required).
Map<String, Object?>? buildFieldCipherEnvelope({
  required List<CollectionSchema<Object?>> stores,
  Object? fieldCipher,
  Object? cryptoProvider,
}) {
  if (cryptoProvider != null) {
    throw WebCipherUnsupportedError(
        'CryptoProvider is not supported on web: it is an app-supplied '
        'interface with no serializable form. Pass an AesGcmFieldCipher via '
        'fieldCipher instead.');
  }
  if (fieldCipher == null) {
    if (_hasEncryptedFields(stores)) {
      throw WebCipherUnsupportedError(
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
