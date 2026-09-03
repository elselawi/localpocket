/// Typed schema declaration helpers.
///
/// These helpers derive schema column names from the store-owned [FieldDef]
/// descriptors instead of accepting raw strings. Each helper mirrors its raw
/// database type by name — `IndexSpec` → [indexSpec], `FtsSpec` → [ftsSpec] —
/// while the raw constructors remain available for database-level schemas.
library;

import 'package:localpocket/src/kernel/schema.dart';
import 'field_def.dart';

/// Builds an index declaration from store-owned field descriptors.
///
/// Descriptor names are copied into the same raw [IndexSpec] shape the
/// database uses; a foreign store's descriptor is rejected by the static type
/// checker. Intentionally not `const`: descriptors are runtime objects, so
/// helper-based declarations trade const construction for typo- and
/// cross-store-resistant column selection.
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
/// Named `ftsSpec` rather than `fts`: [StoreDef] already exposes an `fts`
/// getter, which would shadow a top-level helper inside a store definition.
/// Not `const` — descriptor inputs are runtime objects. Output is the same
/// raw [FtsSpec] shape used by the database.
///
/// [fields] must name at least one field: an empty list is rejected at schema
/// registration (FTS5 requires at least one indexed column).
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
