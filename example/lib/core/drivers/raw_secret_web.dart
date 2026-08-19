import 'package:localpocket/localpocket.dart';

/// Web: the web facade does not expose raw SQLite access. Instead, run a query
/// selecting the `secret` field; the worker decodes it, but we can still show
/// encryption transparency by checking the decoded value matches the plaintext
/// input (i.e. the read DID decrypt to the original value). The on-disk
/// ciphertext proof is demonstrated natively; on web we show the round-trip
/// decryption succeeded.
Future<Object?> readRawSecretImpl(LocalPocket db) async {
  final page = await db
      .collection('secrets')
      .query()
      .select(['label', 'secret'])
      .all()
      .fetch();
  for (final r in page.items) {
    if (r['label'] == 'API key') return r['secret'];
  }
  return null;
}
