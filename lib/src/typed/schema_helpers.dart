/// Typed schema declaration helpers.
///
/// These helpers derive schema column names from the store-owned [FieldDef]
/// descriptors instead of accepting raw strings. Each helper mirrors its raw
/// database type by name — `IndexSpec` → [indexSpec], `FtsSpec` → [ftsSpec] —
/// while the raw constructors remain available for database-level schemas.
library;

import 'package:localpocket/localpocket.dart';

/// Builds an index declaration from store-owned field descriptors.
///
/// The descriptor names are copied into the same raw [IndexSpec] shape used by
/// the database. Supplying a foreign store's descriptor is rejected by the
/// static type checker when the call's type argument is the intended store
/// type. This helper is intentionally not `const`: descriptors are runtime
/// objects, so helper-based declarations trade const construction for
/// typo- and cross-store-resistant column selection.
IndexSpec indexSpec<S>(
  List<FieldDef<S, Object?>> fields, {
  bool unique = false,
  IndexScope scope = IndexScope.live,
}) =>
    IndexSpec(
      [for (final field in fields) field.name],
      unique: unique,
      scope: scope,
    );

/// Builds an FTS declaration from store-owned field descriptors.
///
/// The name is intentionally `ftsSpec`, rather than `fts`: [StoreDef] already
/// exposes an `fts` getter, and an instance member would shadow a top-level
/// helper with that name inside a store definition. This helper is also not
/// `const` because its descriptor inputs are runtime objects. Its output is
/// the same raw [FtsSpec] shape used by the database.
///
/// When the descriptor list is empty, pass the owner explicitly, for example
/// `ftsSpec<MyStore>([])`, so the intended store type is documented at the
/// call site.
FtsSpec ftsSpec<S>(
  List<FieldDef<S, Object?>> fields, {
  bool fuzzy = false,
  FtsNormalization normalize = const FtsNormalization(),
}) =>
    FtsSpec(
      [for (final field in fields) field.name],
      fuzzy: fuzzy,
      normalize: normalize,
    );
