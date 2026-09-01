import 'package:localpocket/localpocket.dart';

import 'schemas.dart';

/// Reads the `secret` column through the typed facade.
///
/// The destination API never exposes raw SQLite access; reads decrypt
/// transparently, so this returns the plaintext and the encryption page
/// proves the round-trip decryption succeeded.
Future<Object?> readRawSecret(LocalPocket db) async {
  final page = await db.store(PlaygroundSecrets.store).query(
        QuerySpec(
          where: [PlaygroundSecrets.label.eq('API key')],
          limit: 1,
        ),
      );
  return page.items.isEmpty
      ? null
      : page.items.first(PlaygroundSecrets.secret);
}
