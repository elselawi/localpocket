import 'dart:async';
import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:typed_data';

import 'package:localpocket/src/api/api.dart';
import 'package:localpocket/src/typed/typed.dart';
import 'package:localpocket/src/web/cipher_bridge.dart' show WebCipherUnsupportedError;

/// Browser smoke for the field-AES-256-GCM cipher bridge through the
/// destination facade over the worker runtime.
///
/// Proves, through the real worker:
/// 1. An encrypted-field store opens with `EncryptionConfig.aesGcm256` (the
///    32-byte key crosses postMessage into the same-origin worker).
/// 2. An encrypted text + JSON field round-trip: put -> get returns plaintext.
/// 3. Cross-instance decryption parity: the ciphertext persisted by the
///    worker (encrypted with the reconstructed cipher) is readable by a
///    freshly configured cipher with the SAME key — i.e. the stored bytes are
///    native-compatible AES-256-GCM, not plaintext.
/// 4. Opening an encrypted store WITHOUT a cipher throws the typed
///    `WebCipherUnsupportedError` instead of silently opening.
final class Vault extends StoreDef<Vault> {
  Vault._() : super(name: 'vault', version: 1);
  static final Vault store = Vault._();

  static final label = store.schema.text('label').req();
  static final secret = store.schema.text('secret', encrypted: true);
  static final meta = store.schema.json('meta', encrypted: true);

  @override
  List<FieldDef<Vault, Object?>> get fields => [label, secret, meta];

  @override
  List<IndexSpec> get indexes => const [];

  @override
  FtsSpec? get fts => null;
}

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

  Future<LocalPocket> openEncrypted(String path, List<int> keyBytes) =>
      LocalPocket.open(
        LocalPocketOptions(
          path: path,
          stores: [Vault.store],
          encryption: EncryptionConfig.aesGcm256(
              key: Uint8List.fromList(keyBytes)),
          bootstrap: const BootstrapOptions(
            workerAssetPath: 'assets/localpocket_worker.js',
            wasmAssetPath: 'assets/sqlite3.wasm',
          ),
        ),
      );

  try {
    // Fixed key so repeated smoke runs (OPFS persistence) interoperate: the
    // ciphertext from the previous run is decryptable by this run's key.
    final keyBytes = List<int>.generate(32, (i) => (i * 7 + 13) % 256);
    const secretValue = 'Top secret clinical note — unicode ✓ 1234567890!@#';
    const recordId = 'vault0000000000';

    // 1. Open with a main-thread cipher; the key is serialized into openArgs.
    mark('open-encrypted');
    final pocket = await openEncrypted('cipher_smoke_db', keyBytes);

    // 2. Round-trip encrypted fields through the destination store.
    mark('roundtrip');
    final vault = pocket.store(Vault.store);
    await vault.put([
      Writes.id(recordId),
      Vault.label.set('patient-1'),
      Vault.secret.set(secretValue),
      Vault.meta.set({'heartRate': 72, 'bp': '120/80'}),
    ]);
    final doc = await vault.get(recordId);
    if (doc == null ||
        doc(Vault.secret) != secretValue ||
        doc(Vault.label) != 'patient-1') {
      throw StateError('Encrypted round-trip mismatch: $doc');
    }
    final meta = doc(Vault.meta);
    if (meta == null || meta['heartRate'] != 72 || meta['bp'] != '120/80') {
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
    final reopened = await openEncrypted('cipher_smoke_db', keyBytes);
    final doc2 = await reopened.store(Vault.store).get(recordId);
    if (doc2 == null || doc2(Vault.secret) != secretValue) {
      throw StateError('Cross-instance decrypt mismatch (same key)');
    }
    await reopened.close();
    await Future<void>.delayed(const Duration(milliseconds: 400));

    // 4. Negative: encrypted store WITHOUT a cipher must throw a typed error
    //    (never silently open).
    mark('negative-no-cipher');
    var noCipherThrew = false;
    try {
      await LocalPocket.open(
        LocalPocketOptions(
          path: 'cipher_negative_db',
          stores: [Vault.store],
          bootstrap: const BootstrapOptions(
            workerAssetPath: 'assets/localpocket_worker.js',
            wasmAssetPath: 'assets/sqlite3.wasm',
          ),
        ),
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
            'and no-cipher rejection all passed. (stage=$stage)');
  } catch (e, stack) {
    report('failed', 'stage=$stage\n$e\n$stack');
  }
}
