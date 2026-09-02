/// Field-level encryption and cipher abstractions.
///
/// ## Threat model
/// Field-level encryption protects values **at rest** (inside the SQLite file
/// or its backups) against a casual reader who can open the raw database file.
/// It is *not* full-database encryption: schema, row ids, `extra` JSON keys,
/// and the set of encrypted fields remain visible. On native it does not
/// defend against a local attacker who can read the process's memory (the key
/// must be supplied by the app on every open).
///
/// Every encrypted value is an AES-256-GCM box with a fresh 12-byte nonce, a
/// 128-bit tag, and an **explicit ciphertext format version byte**. The
/// authenticated data (`AAD`) is bound to the exact `(store, field, recordId)`
/// triple the value belongs to (see [fieldAad]), so a ciphertext captured from
/// one cell cannot be replayed into another same-shaped cell of the same store
/// or record.
///
/// ## Ciphertext format (v1)
/// ```text
/// [0]       version byte: 0x01 (AES-256-GCM, AAD-bound, package:cryptography)
/// [1..13)   12-byte random nonce
/// [13..n)   AES-GCM ciphertext
/// [n..n+16) AES-GCM 128-bit authentication tag
/// ```
/// The version byte is the migration hook: a future algorithm change must keep
/// byte 0 readable, and unknown versions are rejected loudly rather than
/// guessed at (see [AesGcmFieldCipher.decrypt]).
library;

import 'dart:convert';
import 'dart:math';
import 'dart:typed_data';

import 'package:cryptography/cryptography.dart';
import 'package:cryptography/dart.dart';

/// Format version for AES-256-GCM field ciphertext (v1).
///
/// v1 is AES-256-GCM over `package:cryptography`'s pure-Dart engine
/// ([DartAesGcm]) on every platform, nonce `[1..13)`, 16-byte tag, and the
/// field's AAD bound per [fieldAad].
const int _fieldCipherVersion = 0x01;

/// Number of header/footer bytes in v1 ciphertext: version + nonce + tag.
const int _fieldCipherV1Overhead = 1 + 12 + 16;

/// Builds the associated data bound to one encrypted field value.
///
/// The binding is `store \x00 field \x00 recordId`, NUL-separated so the
/// concatenation cannot alias even if a component could contain a separator
/// (store/field names are restricted identifiers and record ids are validated,
/// but the encoding must not silently collide). The record id is part of the
/// AAD, so a ciphertext copied out of one record's field cannot be pasted into
/// the same field of a different record (or a different field of the same
/// record) and still authenticate.
///
/// The codec binds this AAD on every encrypted-field encode and decode;
/// callers of [FieldCipher] outside the codec (e.g. blob encryption) bind
/// whatever identity applies to *their* payload, or none at all.
List<int> fieldAad(String store, String field, String recordId) =>
    Uint8List.fromList(utf8.encode('$store\x00$field\x00$recordId'));

/// App-supplied cipher interface for field-level at-rest encryption.
abstract class FieldCipher {
  /// Encrypts one plaintext value.
  ///
  /// [aad] is authenticated (but not encrypted) alongside [plaintext]: the
  /// codec passes `store \x00 field \x00 recordId` so a ciphertext cannot be
  /// transplanted into another cell. Callers outside the codec may pass their
  /// own binding or leave it empty (no binding).
  List<int> encrypt(List<int> plaintext, {List<int> aad = const []});

  /// Decrypts one ciphertext value and verifies its authentication tag.
  ///
  /// [aad] must match the value used at [encrypt] time or verification fails.
  List<int> decrypt(List<int> ciphertext, {List<int> aad = const []});

  /// Encrypts [plaintext] asynchronously.
  ///
  /// Runs inline; [isolateThresholdBytes] is accepted for interface
  /// compatibility and ignored (no isolate offload exists today).
  Future<List<int>> encryptAsync(
    List<int> plaintext, {
    List<int> aad = const [],
    int isolateThresholdBytes = 64 * 1024,
  }) async =>
      encrypt(plaintext, aad: aad);

  /// Decrypts [ciphertext] asynchronously; runs inline (see [encryptAsync]).
  Future<List<int>> decryptAsync(
    List<int> ciphertext, {
    List<int> aad = const [],
    int isolateThresholdBytes = 64 * 1024,
  }) async =>
      decrypt(ciphertext, aad: aad);

  /// Encrypts a batch of plaintexts asynchronously, applying [encrypt] to
  /// each element with the same [aad]. Failures surface on the returned
  /// future, never as a synchronous throw.
  Future<List<List<int>>> batchEncrypt(
    List<List<int>> plaintexts, {
    List<int> aad = const [],
    int isolateThreshold = 10,
  }) async =>
      [for (final plaintext in plaintexts) encrypt(plaintext, aad: aad)];

  /// Decrypts a batch of ciphertexts asynchronously, applying [decrypt] to
  /// each element with the same [aad]. Failures surface on the returned
  /// future, never as a synchronous throw.
  Future<List<List<int>>> batchDecrypt(
    List<List<int>> ciphertexts, {
    List<int> aad = const [],
    int isolateThreshold = 10,
  }) async =>
      [for (final ciphertext in ciphertexts) decrypt(ciphertext, aad: aad)];
}

/// Provider that supplies [FieldCipher] instances per store / field.
abstract class CryptoProvider {
  /// Returns the cipher for [storeName] and [fieldName], or `null` when none is configured.
  FieldCipher? getFieldCipher(String storeName, String fieldName);
}

/// {@template localpocket.single_key_crypto_provider}
/// Simple [CryptoProvider] wrapping a single default [FieldCipher].
/// {@endtemplate}
class SingleKeyCryptoProvider implements CryptoProvider {
  /// Creates a provider backed by one cipher.
  ///
  /// {@macro localpocket.single_key_crypto_provider}
  SingleKeyCryptoProvider(this.cipher);

  /// Cipher returned for every requested field.
  final FieldCipher cipher;

  @override
  FieldCipher? getFieldCipher(String storeName, String fieldName) => cipher;
}

/// {@template localpocket.aes_gcm_field_cipher}
/// Standard AES-256-GCM field cipher with a fresh 12-byte random IV per value.
///
/// Uses [DartAesGcm] constructed DIRECTLY — never `Cryptography.instance`:
/// its browser resolution probes `window.isSecureContext`, which crashes in
/// a dedicated worker (the web consumer of this class). Output is the
/// versioned v1 format documented at the top of this library:
/// `0x01 ‖ nonce(12) ‖ ciphertext ‖ tag(16)`, AAD-bound via [fieldAad].
/// {@endtemplate}
class AesGcmFieldCipher extends FieldCipher {
  /// {@macro localpocket.aes_gcm_field_cipher}
  AesGcmFieldCipher(List<int> keyBytes, {Random? random})
      : _key = _validatedKey(keyBytes),
        _random = random ?? Random.secure(),
        // Same engine as AesGcm.with256bits() without touching
        // Cryptography.instance (see the class doc).
        _engine = DartAesGcm(secretKeyLength: 32, nonceLength: 12),
        _secretKey = SecretKeyData(_validatedKey(keyBytes),
            overwriteWhenDestroyed: true);

  /// Creates an AES-256-GCM field cipher from a 32-byte key.
  final Uint8List _key;
  final DartAesGcm _engine;
  final SecretKeyData _secretKey;
  final Random _random;

  static Uint8List _validatedKey(List<int> keyBytes) {
    if (keyBytes.length != 32) {
      throw ArgumentError('AES-256 key must be exactly 32 bytes.');
    }
    return Uint8List.fromList(keyBytes);
  }

  /// Returns a defensive copy so the cached expanded key cannot be mutated by
  /// callers after construction.
  Uint8List get key => Uint8List.fromList(_key);

  /// Encrypts [plaintext] with a fresh random nonce, authenticated against
  /// [aad] (see [fieldAad] for the codec's binding).
  @override
  List<int> encrypt(List<int> plaintext, {List<int> aad = const []}) {
    final nonce = Uint8List(12);
    for (var i = 0; i < 12; i++) {
      nonce[i] = _random.nextInt(256);
    }
    final box = _engine.encryptSync(
      Uint8List.fromList(plaintext),
      secretKeyData: _secretKey,
      nonce: nonce,
      aad: aad,
    );

    final out = Uint8List(_fieldCipherV1Overhead + box.cipherText.length);
    out[0] = _fieldCipherVersion;
    out.setRange(1, 13, box.nonce);
    out.setRange(13, 13 + box.cipherText.length, box.cipherText);
    out.setRange(13 + box.cipherText.length, out.length, box.mac.bytes);
    return out;
  }

  /// Decrypts [ciphertext] and throws if authentication fails or the format
  /// version is unknown.
  ///
  /// [aad] must be the same bytes used at [encrypt] time. A ciphertext written
  /// by a future version (any version byte other than `0x01`) is rejected with
  /// a `StateError` naming the version, never silently misinterpreted.
  @override
  List<int> decrypt(List<int> ciphertext, {List<int> aad = const []}) {
    if (ciphertext.length < _fieldCipherV1Overhead) {
      throw ArgumentError(
          'Ciphertext too short for AES-GCM (minimum 29 bytes).');
    }
    final version = ciphertext[0];
    if (version != _fieldCipherVersion) {
      throw StateError('Unsupported ciphertext version 0x'
          '${version.toRadixString(16).padLeft(2, '0')} '
          '(expected 0x01).');
    }
    final nonce = Uint8List.fromList(ciphertext.sublist(1, 13));
    final tag = Uint8List.fromList(ciphertext.sublist(ciphertext.length - 16));
    final cipherBytes =
        Uint8List.fromList(ciphertext.sublist(13, ciphertext.length - 16));

    try {
      return _engine.decryptSync(
        SecretBox(cipherBytes, nonce: nonce, mac: Mac(tag)),
        secretKeyData: _secretKey,
        aad: aad,
      );
    } on SecretBoxAuthenticationError {
      throw StateError(
          'AES-GCM decryption failed: MAC verification failed (tampered ciphertext).');
    }
  }
}
