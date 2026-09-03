/// PocketBase filter builder — the single tested implementation
/// of the wire filter syntax used by pulls and sweeps.
///
/// ```
/// quote(s) = "'" + escape(s) + "'"
/// pullFilter(store, fromUpdated)   = (store='{store}' && updated>='{from}')
/// pullPageFilter(+fromUpdated,+fromId) = && (updated>'U' || (updated='U' && id>'I'))
/// sweepFilter(store, bucket, fromId) = (store='{store}' && id~'{bucket}%' [&& id>'{fromId}'])
/// ```
library;

import '../../kernel/sync/sync_backend.dart' show ProtocolError;

/// Single-quote a string literal for a PB filter.
///
/// Live-verified: PB treats `\` as an escape ONLY before `'` — `\\` and
/// `\x` stay literal backslashes. So only quotes are escaped and backslashes
/// pass through verbatim; this stays injection-safe because every `'` is
/// escaped, so no embedded quote can terminate the literal early.
///
/// A value ENDING with a backslash is unrepresentable under this rule: any
/// backslash adjacent to the literal's closing quote escapes that quote and
/// leaves the filter unterminated (and doubling it keeps the second
/// backslash adjacent to the quote). Such a value is rejected with a typed
/// [ProtocolError] instead of emitting a malformed filter — legitimate
/// inputs (validated store names, generated ids, UTC timestamps, sweep
/// alphabet prefixes) never end with a backslash.
String quote(String s) {
  if (s.endsWith('\\')) {
    throw ProtocolError(
        'Filter value "$s" ends with a backslash: unrepresentable in a PB '
        'filter literal (the closing quote would be escaped).');
  }
  return "'${s.replaceAll("'", "\\'")}'";
}

/// `(store='{store}' && updated>='{fromUpdated}')` — the delta-pull filter.
/// [storeField] names the record's store field (default `store`).
String pullFilter(String store, String fromUpdated,
        {String storeField = 'store'}) =>
    '($storeField=${quote(store)} && updated>=${quote(fromUpdated)})';

/// Appends the `(updated, id)` tuple keyset to the pull filter: pages are
/// ordered `sort=updated,id`, so the continuation must be the disjunction
/// `updated>'U' || (updated='U' && id>'I')` — a plain `id>'I'` would skip
/// every newer record whose id sorts at or below the previous page's last
/// id.
String pullPageFilter(String filter, String fromUpdated, String fromId) =>
    '$filter && (updated>${quote(fromUpdated)} || '
    '(updated=${quote(fromUpdated)} && id>${quote(fromId)}))';

/// `(store='{store}' && id~'{bucket}%' [&& id>'{fromId}'])` — the anti-entropy
/// bucket scan; the keyset continuation is appended only when [fromId] is set.
/// [storeField] names the record's store field (default `store`).
String sweepFilter(String store, String bucket,
    {String? fromId, String storeField = 'store'}) {
  final base = '($storeField=${quote(store)} && id~${quote('$bucket%')}';
  if (fromId == null) return '$base)';
  return '$base && id>${quote(fromId)})';
}
