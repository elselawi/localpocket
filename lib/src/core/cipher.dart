/// Field-level encryption and cipher abstractions.
library;

import 'dart:math';
import 'dart:typed_data';

import 'package:localpocket/src/core/cipher_sbox_table.dart';

/// App-supplied cipher interface for field-level at-rest encryption.
abstract class FieldCipher {
  /// Encrypts one plaintext value.
  List<int> encrypt(List<int> plaintext);

  /// Decrypts one ciphertext value and verifies its authentication tag.
  List<int> decrypt(List<int> ciphertext);

  /// Encrypts [plaintext] asynchronously.
  ///
  /// Runs inline on the calling isolate and returns exactly what [encrypt]
  /// returns. [isolateThresholdBytes] is accepted for interface compatibility
  /// and deliberately ignored: the async shape exists for call-site
  /// ergonomics and as a hook for a future isolate offload, which is not
  /// implemented today (one-shot isolates are unavailable under dart2js, so
  /// [AesGcmFieldCipher] keeps this inline everywhere).
  Future<List<int>> encryptAsync(
    List<int> plaintext, {
    int isolateThresholdBytes = 64 * 1024,
  }) =>
      Future.value(encrypt(plaintext));

  /// Decrypts [ciphertext] asynchronously.
  ///
  /// Runs inline on the calling isolate and returns exactly what [decrypt]
  /// returns. [isolateThresholdBytes] is accepted for interface compatibility
  /// and deliberately ignored; see [encryptAsync] for the rationale.
  Future<List<int>> decryptAsync(
    List<int> ciphertext, {
    int isolateThresholdBytes = 64 * 1024,
  }) =>
      Future.value(decrypt(ciphertext));

  /// Encrypts a batch of plaintexts asynchronously.
  ///
  /// Runs inline on the calling isolate, applying [encrypt] to each element.
  /// [isolateThreshold] is accepted for interface compatibility and
  /// deliberately ignored; see [encryptAsync] for the rationale.
  Future<List<List<int>>> batchEncrypt(
    List<List<int>> plaintexts, {
    int isolateThreshold = 10,
  }) =>
      Future.value(plaintexts.map(encrypt).toList());

  /// Decrypts a batch of ciphertexts asynchronously.
  ///
  /// Runs inline on the calling isolate, applying [decrypt] to each element.
  /// [isolateThreshold] is accepted for interface compatibility and
  /// deliberately ignored; see [encryptAsync] for the rationale.
  Future<List<List<int>>> batchDecrypt(
    List<List<int>> ciphertexts, {
    int isolateThreshold = 10,
  }) =>
      Future.value(ciphertexts.map(decrypt).toList());
}

/// Provider that supplies [FieldCipher] instances per store / field.
abstract class CryptoProvider {
  /// Returns the cipher for [storeName] and [fieldName], or `null` when none is configured.
  FieldCipher? getFieldCipher(String storeName, String fieldName);
}

/// Simple [CryptoProvider] wrapping a single default [FieldCipher].
class SingleKeyCryptoProvider implements CryptoProvider {
  /// Creates a provider backed by one cipher.
  SingleKeyCryptoProvider(this.cipher);

  /// Cipher returned for every requested field.
  final FieldCipher cipher;

  @override
  FieldCipher? getFieldCipher(String storeName, String fieldName) => cipher;
}

/// Standard AES-256-GCM cipher with a fresh 12-byte random IV per value.
class AesGcmFieldCipher implements FieldCipher {
  AesGcmFieldCipher(List<int> keyBytes, {Random? random})
      : _key = _validatedKey(keyBytes),
        _random = random ?? Random.secure(),
        _context = _AesContext(_validatedKey(keyBytes));

  /// Creates an AES-256-GCM field cipher from a 32-byte key.
  final Uint8List _key;
  final _AesContext _context;
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

  /// Encrypts [plaintext] with a fresh random nonce.
  @override
  List<int> encrypt(List<int> plaintext) {
    final nonce = Uint8List(12);
    for (var i = 0; i < 12; i++) {
      nonce[i] = _random.nextInt(256);
    }
    final plainBytes = Uint8List.fromList(plaintext);
    final (ciphertext, tag) =
        _AesGcmEngine.encrypt(_context, nonce, plainBytes);

    final out = Uint8List(12 + ciphertext.length + 16);
    out.setRange(0, 12, nonce);
    out.setRange(12, 12 + ciphertext.length, ciphertext);
    out.setRange(12 + ciphertext.length, out.length, tag);
    return out;
  }

  /// Decrypts [ciphertext] and throws if authentication fails.
  @override
  List<int> decrypt(List<int> ciphertext) {
    if (ciphertext.length < 28) {
      throw ArgumentError(
          'Ciphertext too short for AES-GCM (minimum 28 bytes).');
    }
    final nonce = Uint8List.fromList(ciphertext.sublist(0, 12));
    final tag = Uint8List.fromList(ciphertext.sublist(ciphertext.length - 16));
    final cipherBytes =
        Uint8List.fromList(ciphertext.sublist(12, ciphertext.length - 16));

    final plain = _AesGcmEngine.decrypt(_context, nonce, cipherBytes, tag);
    if (plain == null) {
      throw StateError(
          'AES-GCM decryption failed: MAC verification failed (tampered ciphertext).');
    }
    return plain;
  }

  /// Encrypts [plaintext] asynchronously.
  ///
  /// Runs inline on the calling isolate and returns exactly what [encrypt]
  /// returns. One-shot isolates are unavailable under dart2js and spawning a
  /// worker isolate per call would be slower than inline AES on native, so no
  /// isolate offload is implemented; [isolateThresholdBytes] is accepted for
  /// interface compatibility and ignored (see `FieldCipher.encryptAsync`).
  @override
  Future<List<int>> encryptAsync(
    List<int> plaintext, {
    int isolateThresholdBytes = 64 * 1024,
  }) async =>
      encrypt(plaintext);

  /// Decrypts [ciphertext] asynchronously.
  ///
  /// Runs inline on the calling isolate and returns exactly what [decrypt]
  /// returns; [isolateThresholdBytes] is accepted for interface
  /// compatibility and ignored (see [encryptAsync]).
  @override
  Future<List<int>> decryptAsync(
    List<int> ciphertext, {
    int isolateThresholdBytes = 64 * 1024,
  }) async =>
      decrypt(ciphertext);

  /// Encrypts a batch of plaintexts asynchronously.
  ///
  /// Runs inline on the calling isolate, applying [encrypt] to each element;
  /// [isolateThreshold] is accepted for interface compatibility and ignored
  /// (see [encryptAsync]).
  @override
  Future<List<List<int>>> batchEncrypt(
    List<List<int>> plaintexts, {
    int isolateThreshold = 10,
  }) async =>
      [for (final plaintext in plaintexts) encrypt(plaintext)];

  /// Decrypts a batch of ciphertexts asynchronously.
  ///
  /// Runs inline on the calling isolate, applying [decrypt] to each element;
  /// [isolateThreshold] is accepted for interface compatibility and ignored
  /// (see [encryptAsync]).
  @override
  Future<List<List<int>>> batchDecrypt(
    List<List<int>> ciphertexts, {
    int isolateThreshold = 10,
  }) async =>
      [for (final ciphertext in ciphertexts) decrypt(ciphertext)];
}

// =============================================================================
// Pure-Dart AES-256-GCM Engine (NIST SP 800-38D)
// =============================================================================

class _AesGcmEngine {
  static (Uint8List, Uint8List) encrypt(
      _AesContext ctx, Uint8List iv, Uint8List pt) {
    final h = Uint8List(16);
    ctx.encryptBlock(h, h); // H = AES_K(0^128)

    // Compute J0 for 96-bit (12-byte) IV: J0 = IV || 0^31 || 1
    final j0 = Uint8List(16);
    j0.setRange(0, 12, iv);
    j0[15] = 1;

    // Encrypt pt via CTR starting at J0 + 1
    final ct = _ctrCrypt(ctx, j0, pt);

    // Compute GHASH auth tag
    final s = _ghash(h, ct);
    final tag = Uint8List(16);
    final encJ0 = Uint8List(16);
    ctx.encryptBlock(j0, encJ0);
    for (var i = 0; i < 16; i++) {
      tag[i] = s[i] ^ encJ0[i];
    }

    return (ct, tag);
  }

  static Uint8List? decrypt(
      _AesContext ctx, Uint8List iv, Uint8List ct, Uint8List expectedTag) {
    final h = Uint8List(16);
    ctx.encryptBlock(h, h);

    final j0 = Uint8List(16);
    j0.setRange(0, 12, iv);
    j0[15] = 1;

    // Verify tag
    final s = _ghash(h, ct);
    final encJ0 = Uint8List(16);
    ctx.encryptBlock(j0, encJ0);
    var diff = 0;
    for (var i = 0; i < 16; i++) {
      final computed = s[i] ^ encJ0[i];
      diff |= computed ^ expectedTag[i];
    }
    if (diff != 0) return null;

    return _ctrCrypt(ctx, j0, ct);
  }

  static Uint8List _ctrCrypt(_AesContext ctx, Uint8List j0, Uint8List input) {
    final out = Uint8List(input.length);
    final counter = Uint8List.fromList(j0);
    _inc32(counter); // start at J0 + 1

    final keystream = Uint8List(16);
    var offset = 0;
    while (offset < input.length) {
      ctx.encryptBlock(counter, keystream);
      _inc32(counter);
      final len = min(16, input.length - offset);
      for (var i = 0; i < len; i++) {
        out[offset + i] = input[offset + i] ^ keystream[i];
      }
      offset += len;
    }
    return out;
  }

  static void _inc32(Uint8List block) {
    for (var i = 15; i >= 12; i--) {
      block[i] = (block[i] + 1) & 0xFF;
      if (block[i] != 0) break;
    }
  }

  static Uint8List _ghash(Uint8List h, Uint8List ct) {
    final x = Uint8List(16);
    var offset = 0;
    final block = Uint8List(16);
    while (offset < ct.length) {
      final len = min(16, ct.length - offset);
      block.fillRange(0, 16, 0);
      block.setRange(0, len, ct.sublist(offset, offset + len));
      for (var i = 0; i < 16; i++) {
        x[i] ^= block[i];
      }
      _gcmMult(x, h);
      offset += len;
    }

    // Append lengths: len(A) = 0 (64-bit), len(C) in bits (64-bit)
    final lenBlock = Uint8List(16);
    final bitLen = ct.length * 8;
    for (var i = 7; i >= 0; i--) {
      lenBlock[15 - i] = (bitLen >> (i * 8)) & 0xFF;
    }
    for (var i = 0; i < 16; i++) {
      x[i] ^= lenBlock[i];
    }
    _gcmMult(x, h);
    return x;
  }

  static void _gcmMult(Uint8List x, Uint8List y) {
    final v0 = (y[0] << 24) | (y[1] << 16) | (y[2] << 8) | y[3];
    final v1 = (y[4] << 24) | (y[5] << 16) | (y[6] << 8) | y[7];
    final v2 = (y[8] << 24) | (y[9] << 16) | (y[10] << 8) | y[11];
    final v3 = (y[12] << 24) | (y[13] << 16) | (y[14] << 8) | y[15];

    // Standard GCM field polynomial: R = 0xE1000000 || 0^96
    const r = 0xE1000000;
    final v = [v0, v1, v2, v3];
    final z = [0, 0, 0, 0];

    for (var i = 0; i < 128; i++) {
      final bit = (x[i >> 3] >> (7 - (i & 7))) & 1;
      if (bit != 0) {
        z[0] ^= v[0];
        z[1] ^= v[1];
        z[2] ^= v[2];
        z[3] ^= v[3];
      }
      final lsb = (v[3] & 1) != 0;
      v[3] = ((v[3] >>> 1) | ((v[2] & 1) << 31));
      v[2] = ((v[2] >>> 1) | ((v[1] & 1) << 31));
      v[1] = ((v[1] >>> 1) | ((v[0] & 1) << 31));
      v[0] = (v[0] >>> 1);
      if (lsb) {
        v[0] ^= r;
      }
    }

    for (var i = 0; i < 4; i++) {
      x[i * 4] = (z[i] >> 24) & 0xFF;
      x[i * 4 + 1] = (z[i] >> 16) & 0xFF;
      x[i * 4 + 2] = (z[i] >> 8) & 0xFF;
      x[i * 4 + 3] = z[i] & 0xFF;
    }
  }
}

class _AesContext {
  // 15 round keys for AES-256

  _AesContext(Uint8List key) {
    _keyExpansion(key);
  }
  final Uint32List _rk = Uint32List(60);

  void encryptBlock(Uint8List input, Uint8List output) {
    var s0 = (input[0] << 24) | (input[1] << 16) | (input[2] << 8) | input[3];
    var s1 = (input[4] << 24) | (input[5] << 16) | (input[6] << 8) | input[7];
    var s2 = (input[8] << 24) | (input[9] << 16) | (input[10] << 8) | input[11];
    var s3 =
        (input[12] << 24) | (input[13] << 16) | (input[14] << 8) | input[15];

    s0 ^= _rk[0];
    s1 ^= _rk[1];
    s2 ^= _rk[2];
    s3 ^= _rk[3];

    var k = 4;
    for (var r = 1; r < 14; r++) {
      final t0 = _t0(s0) ^ _t1(s1) ^ _t2(s2) ^ _t3(s3) ^ _rk[k++];
      final t1 = _t0(s1) ^ _t1(s2) ^ _t2(s3) ^ _t3(s0) ^ _rk[k++];
      final t2 = _t0(s2) ^ _t1(s3) ^ _t2(s0) ^ _t3(s1) ^ _rk[k++];
      final t3 = _t0(s3) ^ _t1(s0) ^ _t2(s1) ^ _t3(s2) ^ _rk[k++];
      s0 = t0;
      s1 = t1;
      s2 = t2;
      s3 = t3;
    }

    // Final round (no MixColumns). Parentheses around the OR-chain are
    // required: in Dart `^` binds tighter than `|`, so without them the round
    // key would only be XORed into the last byte of each column word.
    final f0 = ((_sbox((s0 >> 24) & 0xFF) << 24) |
            (_sbox((s1 >> 16) & 0xFF) << 16) |
            (_sbox((s2 >> 8) & 0xFF) << 8) |
            _sbox(s3 & 0xFF)) ^
        _rk[k++];
    final f1 = ((_sbox((s1 >> 24) & 0xFF) << 24) |
            (_sbox((s2 >> 16) & 0xFF) << 16) |
            (_sbox((s3 >> 8) & 0xFF) << 8) |
            _sbox(s0 & 0xFF)) ^
        _rk[k++];
    final f2 = ((_sbox((s2 >> 24) & 0xFF) << 24) |
            (_sbox((s3 >> 16) & 0xFF) << 16) |
            (_sbox((s0 >> 8) & 0xFF) << 8) |
            _sbox(s1 & 0xFF)) ^
        _rk[k++];
    final f3 = ((_sbox((s3 >> 24) & 0xFF) << 24) |
            (_sbox((s0 >> 16) & 0xFF) << 16) |
            (_sbox((s1 >> 8) & 0xFF) << 8) |
            _sbox(s2 & 0xFF)) ^
        _rk[k++];

    output[0] = (f0 >> 24) & 0xFF;
    output[1] = (f0 >> 16) & 0xFF;
    output[2] = (f0 >> 8) & 0xFF;
    output[3] = f0 & 0xFF;
    output[4] = (f1 >> 24) & 0xFF;
    output[5] = (f1 >> 16) & 0xFF;
    output[6] = (f1 >> 8) & 0xFF;
    output[7] = f1 & 0xFF;
    output[8] = (f2 >> 24) & 0xFF;
    output[9] = (f2 >> 16) & 0xFF;
    output[10] = (f2 >> 8) & 0xFF;
    output[11] = f2 & 0xFF;
    output[12] = (f3 >> 24) & 0xFF;
    output[13] = (f3 >> 16) & 0xFF;
    output[14] = (f3 >> 8) & 0xFF;
    output[15] = f3 & 0xFF;
  }

  void _keyExpansion(Uint8List key) {
    for (var i = 0; i < 8; i++) {
      _rk[i] = (key[4 * i] << 24) |
          (key[4 * i + 1] << 16) |
          (key[4 * i + 2] << 8) |
          key[4 * i + 3];
    }
    const rcon = [
      0x01000000,
      0x02000000,
      0x04000000,
      0x08000000,
      0x10000000,
      0x20000000,
      0x40000000,
      0x80000000,
      0x1B000000,
      0x36000000
    ];
    for (var i = 8; i < 60; i++) {
      var temp = _rk[i - 1];
      if (i % 8 == 0) {
        temp = _subWord(_rotWord(temp)) ^ rcon[(i ~/ 8) - 1];
      } else if (i % 8 == 4) {
        temp = _subWord(temp);
      }
      _rk[i] = _rk[i - 8] ^ temp;
    }
  }

  static int _rotWord(int w) => ((w << 8) | (w >>> 24)) & 0xFFFFFFFF;

  static int _subWord(int w) =>
      (_sbox((w >> 24) & 0xFF) << 24) |
      (_sbox((w >> 16) & 0xFF) << 16) |
      (_sbox((w >> 8) & 0xFF) << 8) |
      _sbox(w & 0xFF);

  static int _sbox(int b) => _sboxTable[b];

  static int _t0(int s) {
    final a = _sbox((s >> 24) & 0xFF);
    return (_mul2(a) << 24) | (a << 16) | (a << 8) | _mul3(a);
  }

  static int _t1(int s) {
    final a = _sbox((s >> 16) & 0xFF);
    return (_mul3(a) << 24) | (_mul2(a) << 16) | (a << 8) | a;
  }

  static int _t2(int s) {
    final a = _sbox((s >> 8) & 0xFF);
    return (a << 24) | (_mul3(a) << 16) | (_mul2(a) << 8) | a;
  }

  static int _t3(int s) {
    final a = _sbox(s & 0xFF);
    return (a << 24) | (a << 16) | (_mul3(a) << 8) | _mul2(a);
  }

  static int _mul2(int b) =>
      (b & 0x80) != 0 ? ((b << 1) ^ 0x11B) & 0xFF : (b << 1) & 0xFF;
  static int _mul3(int b) => _mul2(b) ^ b;

  static const List<int> _sboxTable = sboxTable;
}
