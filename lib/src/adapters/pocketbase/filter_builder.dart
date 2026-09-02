/// PocketBase filter builder — the single tested implementation
/// of the wire filter syntax used by pulls and sweeps.
///
/// ```
/// quote(s) = "'" + s.replaceAll("'", "\\'") + "'"
/// pullFilter(store, fromUpdated)   = (store='{store}' && updated>='{from}')
/// pullPageFilter(+fromId)          = && id>'{fromId}'        # appended for sweep keyset
/// sweepFilter(store, bucket, fromId) = (store='{store}' && id~'{bucket}%' [&& id>'{fromId}'])
/// ```
library;

/// Single-quote a string literal for a PB filter, escaping embedded quotes.
///
/// Real PocketBase treats `\` as an escape ONLY before `'`: `\'` → `'`, and
/// a backslash before any other character is a LITERAL backslash — `\\` stays
/// two backslashes and `\x` stays `\x` (verified live against pb.apexo.app).
/// So only quotes are escaped and backslashes pass through verbatim. That is
/// injection-safe: every `'` in the value is escaped, so no embedded quote —
/// even one preceded by a backslash — can ever terminate the literal early.
String quote(String s) => "'${s.replaceAll("'", "\\'")}'";

/// `(store='{store}' && updated>='{fromUpdated}')` — the delta-pull filter.
/// [storeField] names the record's store field (default `store`).
String pullFilter(String store, String fromUpdated,
        {String storeField = 'store'}) =>
    '($storeField=${quote(store)} && updated>=${quote(fromUpdated)})';

/// Appends the tuple tie-break for the sweep keyset to an existing filter.
String pullPageFilter(String filter, String fromId) =>
    '$filter && id>${quote(fromId)}';

/// `(store='{store}' && id~'{bucket}%' [&& id>'{fromId}'])` — the anti-entropy
/// bucket scan. The keyset continuation is appended only when [fromId] is set.
/// [storeField] names the record's store field (default `store`).
String sweepFilter(String store, String bucket,
    {String? fromId, String storeField = 'store'}) {
  final base =
      '($storeField=${quote(store)} && id~${quote('$bucket%')}';
  if (fromId == null) return '$base)';
  return '$base && id>${quote(fromId)})';
}
