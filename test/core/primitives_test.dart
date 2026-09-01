import 'dart:convert';
import 'dart:math';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

/// Tests for the public hashing and record-ID helpers.
void main() {
  group('sha256Hex', () {
    test('published SHA-256 vectors', () {
      // NIST / well-known published vectors.
      expect(
        sha256Hex(''),
        'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      );
      expect(
        sha256Hex('abc'),
        'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
      );
      expect(
        sha256Hex('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq'),
        '248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1',
      );
      expect(
        sha256Hex('The quick brown fox jumps over the lazy dog'),
        'd7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592',
      );
    });

    test('always returns a 64-character lowercase hex digest', () {
      for (final input in ['', 'a', 'hello world', 'x' * 1000]) {
        final h = sha256Hex(input);
        expect(h, hasLength(64));
        expect(RegExp(r'^[0-9a-f]{64}$').hasMatch(h), isTrue);
      }
    });

    test('handles unicode and binary-ish string inputs', () {
      // Deterministic, distinct for distinct inputs.
      final a = sha256Hex('héllo 🎉');
      final b = sha256Hex('héllo 🎉');
      final c = sha256Hex('héllo 🎈');
      expect(a, b);
      expect(a, isNot(c));
      expect(RegExp(r'^[0-9a-f]{64}$').hasMatch(a), isTrue);
    });

    test('empty string hashes to the empty-input digest', () {
      expect(
        sha256Hex(''),
        'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      );
    });
  });

  group('sha256HexBytes', () {
    test('published vectors for raw bytes', () {
      // Independent values computed with an OpenSSL-backed implementation.
      expect(
        sha256HexBytes(<int>[]),
        'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      );
      expect(
        sha256HexBytes([0x00]),
        '6e340b9cffb37a989ca544e6bb780a2c78901d3fb33738768511a30617afa01d',
      );
      expect(
        sha256HexBytes([0xff, 0x00, 0x01, 0xfe]),
        '1f4f2bee2a6768fd183230e8d93b608ae6894e9700d7a03e6db8022ea794094a',
      );
      // 256 distinct bytes (all values 0..255).
      expect(
        sha256HexBytes(List.generate(256, (i) => i)),
        isNot(
            'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'),
      );
    });

    test('agrees with sha256Hex on UTF-8 encodings', () {
      for (final input in ['', 'abc', 'hello', 'héllo 🎉', 'x' * 500]) {
        expect(sha256HexBytes(utf8.encode(input)), sha256Hex(input));
      }
    });

    test('byte-order sensitivity (ff00 vs 00ff)', () {
      expect(sha256HexBytes([0xff, 0x00]), isNot(sha256HexBytes([0x00, 0xff])));
    });
  });

  group('generateRecordId', () {
    test('produces exactly 15 lowercase [a-z0-9] characters', () {
      for (var i = 0; i < 100; i++) {
        final id = generateRecordId();
        expect(id, hasLength(15));
        expect(RegExp(r'^[a-z0-9]{15}$').hasMatch(id), isTrue,
            reason: 'id "$id" must be 15 lowercase alphanumerics');
        expect(id, id.toLowerCase());
      }
    });

    test('random suffix is deterministic with an injected Random', () {
      final rng1 = Random(42);
      final rng2 = Random(42);
      final id1 = generateRecordId(random: rng1);
      final id2 = generateRecordId(random: rng2);
      // The 8-char counter prefix is wall-clock derived, so equality is
      // pinned on the random suffix.
      expect(id1.substring(8), id2.substring(8));
      // Same seed => same sequence of ids.
      final seq1 = List.generate(5, (_) => generateRecordId(random: Random(7)));
      final seq2 = List.generate(5, (_) => generateRecordId(random: Random(7)));
      expect(
          [for (final id in seq1) id.substring(8)],
          [for (final id in seq2) id.substring(8)]);
    });

    test('uses the full alphabet across positions', () {
      // The alphabet is [a-z0-9] (36 chars). With a fixed seeded generator,
      // a large sample must hit every alphabet character.
      final rng = Random(1234);
      final seen = <String>{};
      for (var i = 0; i < 2000; i++) {
        seen.addAll(generateRecordId(random: rng).split(''));
      }
      const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
      for (final c in alphabet.split('')) {
        expect(seen, contains(c), reason: 'alphabet char $c never generated');
      }
      expect(seen, hasLength(36));
    });

    test('each random-suffix position draws from the alphabet', () {
      final rng = Random(99);
      final ids = List.generate(500, (_) => generateRecordId(random: rng));
      // Positions 0..7 are the monotonic counter prefix (near-constant in a
      // tight loop); the 7-char suffix must vary at every position.
      for (var pos = 8; pos < 15; pos++) {
        final chars = {for (final id in ids) id[pos]};
        expect(chars.length, greaterThan(1),
            reason: 'position $pos is not varying');
      }
    });

    test('generates distinct ids without an injected Random', () {
      final ids = {for (var i = 0; i < 1000; i++) generateRecordId()};
      expect(ids, hasLength(1000), reason: 'collision in generated ids');
    });

    test('generated ids sort by creation order (monotonic prefix)', () {
      final seq = List.generate(5000, (_) => generateRecordId());
      for (var i = 1; i < seq.length; i++) {
        expect(seq[i].compareTo(seq[i - 1]), isNonNegative,
            reason:
                'id $i (${seq[i]}) must sort at or after id ${i - 1} '
                '(${seq[i - 1]}) so B-tree inserts append in order');
      }
    });

    test('generated ids are accepted by isValidRecordId', () {
      for (var i = 0; i < 100; i++) {
        expect(isValidRecordId(generateRecordId()), isTrue);
      }
    });
  });

  group('isValidRecordId', () {
    test('accepts well-formed lowercase alphanumeric ids', () {
      expect(isValidRecordId('a' * 15), isTrue);
      expect(isValidRecordId('0' * 15), isTrue);
      expect(isValidRecordId('z' * 15), isTrue);
      expect(isValidRecordId('9' * 15), isTrue);
      expect(isValidRecordId('a1b2c3d4e5f6a7b'), isTrue);
      expect(isValidRecordId(generateRecordId(random: Random(5))), isTrue);
    });

    test('rejects empty and wrong-length ids', () {
      expect(isValidRecordId(''), isFalse);
      expect(isValidRecordId('a' * 14), isFalse);
      expect(isValidRecordId('a' * 16), isFalse);
      expect(isValidRecordId('a' * 0), isFalse);
    });

    test('rejects uppercase ids', () {
      expect(isValidRecordId('A' * 15), isFalse);
      expect(isValidRecordId('aAaaaaaaaaaaaa'), isFalse);
      expect(isValidRecordId('ABCDEFGHIJKLMNO'), isFalse);
    });

    test('rejects punctuation and symbols', () {
      expect(isValidRecordId('a' * 14 + '-'), isFalse);
      expect(isValidRecordId('a' * 14 + '_'), isFalse);
      expect(isValidRecordId('a' * 14 + '.'), isFalse);
      expect(isValidRecordId('a' * 14 + '!'), isFalse);
      expect(isValidRecordId('a' * 14 + '~'), isFalse);
    });

    test('rejects whitespace and unicode', () {
      expect(isValidRecordId('a' * 14 + ' '), isFalse);
      expect(isValidRecordId(' ' * 15), isFalse);
      expect(isValidRecordId('a' * 14 + '\n'), isFalse);
      expect(isValidRecordId('\t' * 15), isFalse);
      expect(isValidRecordId('é' * 15), isFalse);
      expect(isValidRecordId('名前名前名前'), isFalse);
      expect(isValidRecordId('a' * 14 + 'é'), isFalse);
    });

    test('rejects ids that mix valid chars with invalid ones', () {
      expect(isValidRecordId('${'a' * 7}Z${'a' * 7}'), isFalse);
      expect(isValidRecordId('${'a' * 7} ${'a' * 7}'), isFalse);
    });

    test('recordIdPattern agrees with isValidRecordId', () {
      final good = ['a' * 15, '0' * 15, 'a1b2c3d4e5f6a7b'];
      final bad = ['', 'a' * 14, 'A' * 15, 'a' * 14 + '!', 'é' * 15];
      for (final id in good) {
        expect(recordIdPattern.hasMatch(id), isTrue);
        expect(isValidRecordId(id), isTrue);
      }
      for (final id in bad) {
        expect(recordIdPattern.hasMatch(id), isFalse);
        expect(isValidRecordId(id), isFalse);
      }
    });
  });
}
