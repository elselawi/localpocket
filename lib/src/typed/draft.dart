/// The mutable typed write builder: accumulates one logical record map that
/// the engine's existing `put`/`patch`/`putAll`/`patchAll` paths consume.
library;

import 'package:localpocket/localpocket.dart';

import 'field_def.dart';
import 'store_def.dart';

/// A mutable builder for one typed write.
///
/// `set` binds the field and its value type at compile time (wrong-store and
/// wrong-type usage are compile errors). It only protects the typed namespace
/// by rejecting declared/system keys passed to [setExtra]; record validation
/// (required fields, enum membership, size caps, and id format) remains the
/// engine's responsibility and surfaces through its existing
/// [ValidationException]s. Mutable by design: the
/// discarded-builder-chain hazard of immutable builders is structurally
/// impossible here.
///
/// ```dart
/// await db.store(tasks).put((w) => w
///   ..setId('tprobe0000000a1')   // optional; the engine generates an id
///   ..set(tasks.title)('Ship it')
///   ..set(tasks.role)(Role.admin)
///   ..setExtra('legacy_key', 'kept'));
/// ```
final class Draft<S extends StoreDef<S>> {
  Draft(this._def);

  final S _def;
  final Map<String, Object?> _values = {};

  /// The store definition this draft writes to.
  S get def => _def;

  /// Returns a typed setter for [field], binding the store and the value type
  /// at compile time: `w.set(tasks.title)('Ship it')`.
  ///
  /// The setter is **curried** deliberately: a single two-argument
  /// `set<V>(field, V value)` cannot be exact in Dart — generic-method
  /// inference widens `V` to the least upper bound of the field's and the
  /// value's types, so `set(tasks.title, 42)` would infer `V = Object` and
  /// compile. Inferring `V` from the field **alone** yields its exact value
  /// type, and the returned closure then rejects a wrong-typed value (and a
  /// foreign store's field) at compile time.
  ///
  /// System descriptors (`id`, `archived`) are plain [FieldDef]s, not
  /// [SettableFieldDef]s, so `set(tasks.instance.id)` does not compile —
  /// `archive()`/`restore()` own that state transition.
  void Function(V) set<V>(SettableFieldDef<S, V> field) {
    _checkOwner(field);
    return (V value) {
      _values[field.name] = field.encode(value);
    };
  }

  /// Sets the record id explicitly. Optional: when omitted, the engine
  /// generates a PocketBase-compatible `[a-z0-9]{15}` id at write time.
  /// Malformed ids surface as the engine's `ValidationException`.
  void setId(String id) => _values['id'] = id;

  /// Adds an undeclared key. It lands in the record's `extra` storage and
  /// round-trips losslessly.
  ///
  /// Declared and system keys are rejected: typed descriptors are the only
  /// route to declared fields, [setId] is the only id route, and
  /// `archive()`/`restore()` own archive state.
  void setExtra(String key, Object? value) {
    const systemKeys = {'id', 'archived', 'hidden', 'extra'};
    if (systemKeys.contains(key) ||
        _def.collectionSchema.declaredFieldNames.contains(key)) {
      throw ValidationException(
        'Key "$key" is declared or engine-owned and cannot be set as extra.',
        field: key,
      );
    }
    _values[key] = value;
  }

  /// The accumulated logical record map. The engine validates and encodes
  /// it exactly as a hand-written map would be.
  Map<String, Object?> build() => Map.of(_values);

  void _checkOwner<V>(SettableFieldDef<S, V> field) {
    if (!identical(field.owner, _def)) {
      throw TypedStoreMismatchError('Field "${field.name}" belongs to store '
          '${field.owner.runtimeType}, but this draft writes to $_def. '
          'Cross-store writes are compile errors; a cast has defeated the '
          'type system.');
    }
  }
}
