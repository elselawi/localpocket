import 'dart:convert';

import 'package:localpocket/src/kernel/cipher.dart';
import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/platform/web/crypto.dart';
import 'package:test/test.dart';

/// A custom [FieldCipher] that is NOT serializable (used to prove custom
/// implementations are rejected on web). Extends the abstract class so the
/// default async/batch implementations are inherited.
class _CustomFieldCipher extends FieldCipher {
  @override
  List<int> encrypt(List<int> plaintext, {List<int> aad = const []}) =>
      plaintext.reversed.toList();

  @override
  List<int> decrypt(List<int> ciphertext, {List<int> aad = const []}) =>
      ciphertext.reversed.toList();
}

CollectionSchema<Object?> encryptedSchema(String name) => CollectionSchema(
      name: name,
      version: 1,
      fields: [
        Field.text('label', required: true),
        Field.text('secret', encrypted: true),
      ],
    );

CollectionSchema<Object?> plainSchema(String name) => CollectionSchema(
      name: name,
      version: 1,
      fields: [Field.text('label', required: true)],
    );

void main() {
  final keyBytes = List<int>.generate(32, (i) => (i * 7 + 13) % 256);

  group('buildFieldCipherEnvelope', () {
    test('returns null when no cipher is configured and no field is encrypted',
        () {
      final envelope = buildFieldCipherEnvelope(
        stores: [plainSchema('plain')],
      );
      expect(envelope, isNull);
    });

    test('serializes an AesGcmFieldCipher as a tagged envelope', () {
      final cipher = AesGcmFieldCipher(keyBytes);
      final envelope = buildFieldCipherEnvelope(
        fieldCipher: cipher,
        stores: [encryptedSchema('vault')],
      );
      expect(envelope, isNotNull);
      expect(envelope!['type'], 'aes-gcm');
      final key = envelope['key'] as List;
      expect(key, hasLength(32));
      expect(key, equals(keyBytes));
    });

    test('cipher + encrypted store is accepted (no throw)', () {
      final cipher = AesGcmFieldCipher(keyBytes);
      expect(
        () => buildFieldCipherEnvelope(
          fieldCipher: cipher,
          stores: [encryptedSchema('vault')],
        ),
        returnsNormally,
      );
    });

    test('non-null cryptoProvider fails loudly with a typed error', () {
      final provider = SingleKeyCryptoProvider(AesGcmFieldCipher(keyBytes));
      expect(
        () => buildFieldCipherEnvelope(
          cryptoProvider: provider,
          stores: [encryptedSchema('vault')],
        ),
        throwsA(isA<WebCipherUnsupportedError>()
            .having((e) => e.message, 'message', contains('CryptoProvider'))),
      );
    });

    test('custom FieldCipher implementation fails loudly with a typed error',
        () {
      expect(
        () => buildFieldCipherEnvelope(
          fieldCipher: _CustomFieldCipher(),
          stores: [encryptedSchema('vault')],
        ),
        throwsA(isA<WebCipherUnsupportedError>().having(
            (e) => e.message, 'message', contains('AesGcmFieldCipher'))),
      );
    });

    test('encrypted store without any cipher fails loudly with a typed error',
        () {
      expect(
        () => buildFieldCipherEnvelope(stores: [encryptedSchema('vault')]),
        throwsA(isA<WebCipherUnsupportedError>()
            .having((e) => e.message, 'message', contains('encrypted fields'))),
      );
    });

    test('cryptoProvider is rejected even when a valid fieldCipher is given',
        () {
      final cipher = AesGcmFieldCipher(keyBytes);
      final provider = SingleKeyCryptoProvider(cipher);
      // The provider is an argument that cannot be honored -> must throw,
      // even though the cipher alone would be fine.
      expect(
        () => buildFieldCipherEnvelope(
          fieldCipher: cipher,
          cryptoProvider: provider,
          stores: [encryptedSchema('vault')],
        ),
        throwsA(isA<WebCipherUnsupportedError>()),
      );
    });

    test('the unsupported-cipher error belongs to the LocalPocketError family',
        () {
      // One `catch (LocalPocketError)` must cover the web cipher rejection
      // like every other caller-facing failure.
      try {
        buildFieldCipherEnvelope(
          cryptoProvider: SingleKeyCryptoProvider(AesGcmFieldCipher(keyBytes)),
          stores: [encryptedSchema('vault')],
        );
        fail('expected WebCipherUnsupportedError');
      } on LocalPocketError catch (e) {
        expect(e, isA<ValidationException>());
        expect(e.toString(), startsWith('WebCipherUnsupportedError:'));
      }
    });
  });

  group('parseFieldCipherEnvelope', () {
    test('returns null for a null envelope', () {
      expect(parseFieldCipherEnvelope(null), isNull);
    });

    test('round-trips a built envelope into an operational cipher', () {
      final cipher = AesGcmFieldCipher(keyBytes);
      final envelope = buildFieldCipherEnvelope(
        fieldCipher: cipher,
        stores: [encryptedSchema('vault')],
      );
      final reconstructed = parseFieldCipherEnvelope(envelope);
      expect(reconstructed, isA<AesGcmFieldCipher>());

      // Decrypt-equality parity: ciphertext produced by the worker-style
      // reconstructed cipher decrypts with the original main-thread cipher
      // (and vice versa), proving both sides use the same AES-256-GCM key.
      final plaintext = utf8.encode('classified payload ✓ 1234567890');
      final workerCt = reconstructed!.encrypt(plaintext);
      expect(utf8.decode(cipher.decrypt(workerCt)), utf8.decode(plaintext));

      final mainCt = cipher.encrypt(plaintext);
      expect(
          utf8.decode(reconstructed.decrypt(mainCt)), utf8.decode(plaintext));

      // Both reconstructed and original decrypt each other's ciphertexts.
      expect(reconstructed.decrypt(mainCt), plaintext);
      expect(cipher.decrypt(workerCt), plaintext);
    });

    test('key never leaks into the envelope as raw text', () {
      final cipher = AesGcmFieldCipher(keyBytes);
      final envelope = buildFieldCipherEnvelope(
        fieldCipher: cipher,
        stores: [encryptedSchema('vault')],
      )!;
      final serialized = envelope.toString();
      expect(serialized, isNot(contains(base64Encode(keyBytes))));
    });

    test('malformed envelopes are rejected with FormatException', () {
      // Not a map.
      expect(() => parseFieldCipherEnvelope('nope'),
          throwsA(isA<FormatException>()));
      // Unknown type.
      expect(
        () => parseFieldCipherEnvelope({'type': 'twofish', 'key': keyBytes}),
        throwsA(isA<FormatException>()),
      );
      // Missing key.
      expect(
        () => parseFieldCipherEnvelope({'type': 'aes-gcm'}),
        throwsA(isA<FormatException>()),
      );
      // Wrong key length.
      expect(
        () => parseFieldCipherEnvelope(
            {'type': 'aes-gcm', 'key': List.filled(31, 1)}),
        throwsA(isA<FormatException>()),
      );
      // Out-of-range byte.
      expect(
        () => parseFieldCipherEnvelope({
          'type': 'aes-gcm',
          'key': [for (var i = 0; i < 31; i++) 1, 256],
        }),
        throwsA(isA<FormatException>()),
      );
      // Non-int byte.
      expect(
        () => parseFieldCipherEnvelope({
          'type': 'aes-gcm',
          'key': [for (var i = 0; i < 31; i++) 1, 'x'],
        }),
        throwsA(isA<FormatException>()),
      );
    });

    test('decrypted ciphertext is byte-exact after envelope round-trip', () {
      final cipher = AesGcmFieldCipher(keyBytes);
      final envelope = buildFieldCipherEnvelope(
        fieldCipher: cipher,
        stores: [encryptedSchema('vault')],
      );
      final reconstructed = parseFieldCipherEnvelope(envelope)!;
      // Binary payload with the full byte range.
      final binary = List<int>.generate(257, (i) => i % 256);
      final ct = reconstructed.encrypt(binary);
      expect(cipher.decrypt(ct), binary);
    });

    test('a wrong key fails authentication on decrypt (genuine ciphertext)',
        () {
      // Build an envelope with one key, then reconstruct a cipher from a
      // DIFFERENT key and confirm decryption of the persisted ciphertext fails
      // (this is the wrong-key rejection the web facade must surface).
      final cipherA = AesGcmFieldCipher(keyBytes);
      final envelope = buildFieldCipherEnvelope(
        fieldCipher: cipherA,
        stores: [encryptedSchema('vault')],
      )!;
      final cipherB = parseFieldCipherEnvelope({
        'type': envelope['type'],
        'key': List<int>.generate(32, (i) => (i * 31 + 17) % 256),
      })!;
      final plaintext = utf8.encode('wrong key must not decrypt this');
      final ct = cipherA.encrypt(plaintext);
      // cipherB uses a different key -> authentication fails.
      expect(() => cipherB.decrypt(ct), throwsStateError);
      // cipherA still decrypts its own ciphertext.
      expect(cipherA.decrypt(ct), plaintext);
    });
  });
}
