/// The reference-identity store registry: binds each store name to its one
/// canonical [StoreDef] instance.
library;

import 'package:localpocket/localpocket.dart';

import 'store_def.dart';

/// A name-keyed registry mapping each store name to its one canonical
/// [StoreDef] instance, enforced by **reference identity**.
///
/// The first [bind] stores the instance; re-binding the identical instance
/// is idempotent; binding a non-identical instance under an already-bound
/// name throws [TypedStoreMismatchError] naming the store.
///
/// Structural `==`/`hashCode` equality is deliberately **not** implemented:
/// walking the `fields` list to compare kind and constraints per descriptor
/// would need `==` on every descriptor subtype and would bless two
/// divergent definitions that merely look alike. Reference identity is
/// cheap and clear, and — combined with the `StoreDef` canonical-instance
/// convention (private constructor + static `instance`) — enforces
/// uniqueness *by construction*; this registry is the runtime backstop for
/// definitions that ignore the convention.
final class TypedStoreRegistry {
  final Map<String, StoreDef<Object?>> _byName = {};

  /// Binds [def] under its [StoreDef.name] and returns the canonical
  /// instance for that name.
  ///
  /// The first bind stores [def]. Re-binding the identical instance is
  /// idempotent (no throw, same canonical instance). Binding a different,
  /// non-identical instance under an already-bound name throws
  /// [TypedStoreMismatchError] naming the store.
  S bind<S extends StoreDef<S>>(S def) {
    final existing = _byName[def.name];
    if (existing == null) {
      _byName[def.name] = def;
      return def;
    }
    if (!identical(existing, def)) {
      throw TypedStoreMismatchError(
          'Store "${def.name}" is already bound to a different '
          '${existing.runtimeType} instance. Share the canonical instance '
          '(see the StoreDef docs).');
    }
    return def;
  }
}
