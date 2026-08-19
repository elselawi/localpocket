import 'package:localpocket/localpocket.dart';

/// Native: raw SQLite read of the `secret` column on the local (unencrypted-at
/// this layer) engine. The encrypted column stores base64 ciphertext.
Future<Object?> readRawSecretImpl(LocalPocket db) async {
  final rows = await db.db.rawQuery(
    'SELECT secret FROM "secrets" WHERE label = ? LIMIT 1',
    ['API key'],
  );
  return rows.isNotEmpty ? rows.first['secret'] : null;
}
