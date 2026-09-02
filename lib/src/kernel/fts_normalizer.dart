/// Shared write/query-side text normalization for full-text search.
///
/// The SAME pure-Dart transform backs both sides of the FTS index: the write
/// side registers it as a per-store SQL user function (`lp_norm_<store>`) the
/// generated triggers call; the query side normalizes the term in Dart and
/// binds it as the MATCH argument (no query-time UDF, which keeps the web
/// compiled-plan transport working). Index and query parity hold by
/// construction.
library;

import 'database_adapter.dart';
import 'ddl_compiler.dart';
import 'schema.dart';

/// Registers the `lp_norm_<store>` SQL scalar function implementing
/// [normalize]'s parity rules on [db].
///
/// Called from [LocalPocket.registerStore] before any FTS trigger can fire.
/// Re-registering on an existing connection replaces the previous function,
/// so re-opening with updated rules takes effect immediately.
void registerFtsNormalizer(
    Database db, String store, FtsNormalization normalize) {
  final name = ftsNormalizerName(store);
  db.createFunction(
      functionName: name,
      function: (text) {
        if (text is! String) return text;
        return normalize.normalize(text);
      },
      deterministic: true);
}

/// The stable SQL function name for [store]'s FTS normalizer.
String ftsNormalizerName(String store) => 'lp_norm_$store';

/// Builds the normalized column expression used inside FTS trigger bodies:
/// `lp_norm_<store>(new."title")` when normalization is active, otherwise
/// the plain quoted reference. An empty [side] yields a bare column
/// reference (`lp_norm_<store>("title")`) for SELECT-list use during
/// reindexing.
String ftsTriggerExpr(
    String store, FtsNormalization normalize, String side, String column) {
  if (normalize.isEmpty) return '$side.${DdlCompiler.quote(column)}';
  final col = DdlCompiler.quote(column);
  final ref = side.isEmpty ? col : '${DdlCompiler.quote(side)}.$col';
  return '${DdlCompiler.quote(ftsNormalizerName(store))}($ref)';
}
