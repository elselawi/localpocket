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
String quote(String s) => "'${s.replaceAll("'", "\\'")}'";

/// `(store='{store}' && updated>='{fromUpdated}')` — the delta-pull filter.
String pullFilter(String store, String fromUpdated) =>
    "(store=${quote(store)} && updated>=${quote(fromUpdated)})";

/// Appends the tuple tie-break for the sweep keyset to an existing filter.
String pullPageFilter(String filter, String fromId) =>
    "$filter && id>${quote(fromId)}";

/// `(store='{store}' && id~'{bucket}%' [&& id>'{fromId}'])` — the anti-entropy
/// bucket scan. The keyset continuation is appended only when [fromId] is set.
String sweepFilter(String store, String bucket, {String? fromId}) {
  final base = "(store=${quote(store)} && id~${quote('$bucket%')}";
  if (fromId == null) return '$base)';
  return "$base && id>${quote(fromId)})";
}
