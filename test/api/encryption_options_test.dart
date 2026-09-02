import 'dart:typed_data';

import 'package:localpocket/localpocket.dart';
import 'package:localpocket/src/kernel/cipher.dart' show AesGcmFieldCipher;
import 'package:localpocket/src/kernel/ids.dart' show generateRecordId;
import 'package:test/test.dart';

/// Options-level encryption wiring: `EncryptionConfig.aesGcm256` is the
/// consumer-facing way to arm field encryption. The kernel cipher has its
/// own known-answer suite (kernel/cipher); these pins cover the facade
/// plumbing — the factory, the key-shape guard, and an end-to-end encrypted
/// round trip through the typed store API.
final class Vault extends StoreDef<Vault> {
  Vault._() : super(name: 'vault', version: 1);
  static final Vault store = Vault._();

  static final label = store.schema.text('label').req();
  static final secret = store.schema.text('secret', encrypted: true);

  @override
  List<FieldDef<Vault, Object?>> get fields => [label, secret];
}

void main() {
  group('EncryptionConfig.aesGcm256', () {
    test('arms an AES-GCM field cipher', () {
      final config = EncryptionConfig.aesGcm256(key: _key());
      expect(config.fieldCipher, isA<AesGcmFieldCipher>());
    });

    test('rejects a key that is not 32 bytes', () {
      expect(
        () => EncryptionConfig.aesGcm256(key: Uint8List(16)),
        throwsArgumentError,
      );
      expect(
        () => EncryptionConfig.aesGcm256(key: Uint8List(64)),
        throwsArgumentError,
      );
    });
  });

  group('encrypted fields through the typed facade', () {
    late LocalPocket pocket;

    setUp(() async {
      pocket = await LocalPocket.open(LocalPocketOptions(
        path: ':memory:',
        stores: [Vault.store],
        encryption: EncryptionConfig.aesGcm256(key: _key()),
      ));
    });
    tearDown(() => pocket.close());

    test('an encrypted field round-trips opaquely', () async {
      final vault = pocket.store(Vault.store);
      final id = generateRecordId();
      await vault.put([
        Writes.id(id),
        Vault.label.set('entry'),
        Vault.secret.set('s3cret')
      ]);

      final row = (await vault.get(id))!;
      expect(row(Vault.label), 'entry');
      expect(row(Vault.secret), 's3cret');
    });

    test('two identical plaintext values decrypt independently', () async {
      final vault = pocket.store(Vault.store);
      final idA = generateRecordId();
      final idB = generateRecordId();
      await vault.put([
        Writes.id(idA),
        Vault.label.set('a'),
        Vault.secret.set('same'),
      ]);
      await vault.put([
        Writes.id(idB),
        Vault.label.set('b'),
        Vault.secret.set('same'),
      ]);

      final a = (await vault.get(idA))!;
      final b = (await vault.get(idB))!;
      expect(a(Vault.secret), 'same');
      expect(b(Vault.secret), 'same');
    });

    test('an optional encrypted field may stay null', () async {
      final vault = pocket.store(Vault.store);
      final id = generateRecordId();
      await vault.put([Writes.id(id), Vault.label.set('bare')]);

      final row = (await vault.get(id))!;
      expect(row(Vault.label), 'bare');
      expect(row(Vault.secret), isNull);
    });
  });
}

Uint8List _key() {
  final key = Uint8List(32);
  for (var i = 0; i < key.length; i++) {
    key[i] = i + 1;
  }
  return key;
}
