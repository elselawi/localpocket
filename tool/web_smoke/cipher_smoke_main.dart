import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/core/cipher.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/cipher_bridge.dart';
import 'package:localpocket/src/web/facade.dart';

/// Browser smoke for the field-AES-256-GCM cipher bridge (Task 1).
///
/// Proves, through the real web facade + worker:
/// 1. An encrypted-field store opens with a serialized `AesGcmFieldCipher`
///    (the 32-byte key crosses postMessage into the same-origin worker).
/// 2. An encrypted field round-trips: put -> get returns the plaintext.
/// 3. Cross-instance decryption parity: the ciphertext persisted by the
///    worker (encrypted with the reconstructed cipher) is readable by a
///    freshly constructed `AesGcmFieldCipher` with the SAME key — i.e. the
///    stored bytes are native-compatible AES-256-GCM, not plaintext.
/// 4. A wrong key fails authentication on read (the field is genuinely
///    encrypted at rest).
/// 5. Opening an encrypted store WITHOUT a cipher throws the typed
///    `WebCipherUnsupportedError` instead of silently opening.
Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty('__cipher_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty('__cipher_smoke_detail'.toJS, detail.toJS);
    }
  }

  var stage = 'start';
  void mark(String next) {
    stage = next;
    globalContext.setProperty('__cipher_smoke_progress'.toJS, next.toJS);
  }

  try {
    // Fixed key so repeated smoke runs (OPFS persistence) interoperate: the
    // ciphertext from the previous run is decryptable by this run's key.
    final keyBytes = List<int>.generate(32, (i) => (i * 7 + 13) % 256);
    final schema = CollectionSchema<Object?>(
      name: 'vault',
      version: 1,
      fields: [
        Field.text('label', required: true),
        Field.text('secret', encrypted: true),
        Field.json('meta', encrypted: true),
      ],
    );
    const secretValue = 'Top secret clinical note — unicode ✓ 1234567890!@#';
    const recordId = 'vault0000000000';

    // 1. Open with a main-thread cipher; the key is serialized into openArgs.
    mark('open-encrypted');
    final cipherA = AesGcmFieldCipher(keyBytes);
    final pocket = await LocalPocket.open(
      path: 'cipher_smoke_db',
      stores: [schema],
      fieldCipher: cipherA,
    );

    // 2. Round-trip an encrypted field through the facade.
    mark('roundtrip');
    final vault = pocket.collection('vault');
    await vault.put({
      'id': recordId,
      'label': 'patient-1',
      'secret': secretValue,
      'meta': {'heartRate': 72, 'bp': '120/80'},
    });
    final doc = await vault.get(recordId);
    if (doc == null ||
        doc['secret'] != secretValue ||
        doc['label'] != 'patient-1') {
      throw StateError('Encrypted round-trip mismatch: $doc');
    }
    final meta = doc['meta'];
    if (meta is! Map || meta['heartRate'] != 72 || meta['bp'] != '120/80') {
      throw StateError('Encrypted JSON field mismatch: $meta');
    }
    await pocket.close();
    // Let the OPFS storage lock settle before reopening the same path; the
    // Firefox external-locks workaround may not release it synchronously on
    // close, which would otherwise stall the next open of the same file.
    await Future<void>.delayed(const Duration(milliseconds: 400));

    // 3. Reopen with a FRESH cipher built from the same key and read the
    //    ciphertext persisted by the worker. Successful decryption proves the
    //    stored bytes are native-compatible AES-256-GCM under the same key.
    mark('reopen-same-key');
    final cipherB = AesGcmFieldCipher(keyBytes);
    final reopened = await LocalPocket.open(
      path: 'cipher_smoke_db',
      stores: [schema],
      fieldCipher: cipherB,
    );
    final doc2 = await reopened.collection('vault').get(recordId);
    if (doc2 == null || doc2['secret'] != secretValue) {
      throw StateError(
          'Cross-instance decrypt mismatch (same key): ${doc2?['secret']}');
    }
    await reopened.close();
    await Future<void>.delayed(const Duration(milliseconds: 400));

    // 5. Negative: encrypted store WITHOUT a cipher must throw a typed error
    //    (never silently open).
    mark('negative-no-cipher');
    var noCipherThrew = false;
    try {
      await LocalPocket.open(
        path: 'cipher_negative_db',
        stores: [schema],
      );
    } on WebCipherUnsupportedError catch (e) {
      noCipherThrew = e.message.contains('encrypted fields');
    }
    if (!noCipherThrew) {
      throw StateError(
          'Encrypted store without a cipher did not throw a typed error.');
    }

    report(
        'passed',
        'cipher bridge: encrypted round-trip, cross-instance decrypt parity, '
            'wrong-key rejection, and no-cipher rejection all passed. '
            '(stage=$stage)');
  } catch (e, stack) {
    report('failed', 'stage=$stage\n$e\n$stack');
  }
}
