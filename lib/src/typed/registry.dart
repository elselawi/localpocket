/// The reference-identity store registry: binds each store name to its one
/// canonical [StoreDef] instance.
library;

import 'package:localpocket/localpocket.dart';

/// A name-keyed registry mapping each store name to its one canonical
/// [StoreDef] instance, enforced by **reference identity**.
///
/// The first [bind] stores the instance; re-binding the identical instance
/// is idempotent; binding a non-identical instance under an already-bound
/// name throws [TypedStoreMismatchError] naming the store.
///
/// Structural `==` is deliberately not implemented: two definitions that
/// merely look alike must not pass as the same store. Combined with the
/// `StoreDef` canonical-instance convention, uniqueness holds by
/// construction; this registry is the runtime backstop.
final class TypedStoreRegistry {
  final Map<String, StoreDef<Object?>> _byName = {};

  /// Memoized non-transactional wrappers, keyed by definition instance
  /// (see [cachedCollection]).
  final Map<StoreDef<Object?>, TypedCollection<Object?>> _handles = {};

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

  /// Returns the memoized non-transactional wrapper for [def], building it
  /// via [create] on first request.
  ///
  /// Cache keys are definition instances and values were stored with their
  /// exact type pairing, so the erased lookup is safe to restore. A failed
  /// build is never memoized — [create] throwing leaves the cache
  /// untouched, so the next call retries. Name bindings deliberately
  /// outlive [clearHandles]: only wrappers expire when a connection
  /// closes.
  ///
  /// Transaction-scoped access (`tx.store`) deliberately bypasses this
  /// cache: transaction surfaces live only as long as the transaction.
  TypedCollection<T> cachedCollection<T extends StoreDef<T>>(
      T def, TypedCollection<T> Function() create) {
    final existing = _handles[def];
    if (existing != null) {
      return existing as TypedCollection<T>;
    }
    final created = create();
    _handles[def] = created;
    return created;
  }

  /// Discards cached wrappers while keeping every name binding intact —
  /// exactly the subset that dies with a connection.
  ///
  /// Connection close paths call this so a reopened connection builds
  /// fresh wrappers over fresh state instead of serving dead ones.
  void clearHandles() {
    _handles.clear();
  }
}
