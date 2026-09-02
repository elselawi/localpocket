/// Immutable typed row snapshots.
///
/// A row is a snapshot of one record at read time: values never change under
/// it, and reads are strictly typed through the store's field descriptors.
/// It deliberately does **not** implement `Map` — use [toJson] for the raw
/// logical form.
library;

import '../kernel/errors.dart';
import '../schema/field_def.dart';
import '../schema/store_def.dart';

/// {@template localpocket.row}
/// One immutable typed record snapshot.
///
/// - `row(Tasks.title)` (or `row.get(Tasks.title)`) returns the field's
///   static type;
/// - `id` and `archived` read the system columns;
/// - `extra` is a defensive snapshot of the undeclared keys;
/// - reading a field excluded by a projection throws
///   [FieldNotSelectedError] naming the field;
/// - decoding a corrupt stored value surfaces the package's typed
///   [ValidationException] naming the field — never a silent wrong-typed
///   value.
/// {@endtemplate}
final class Row<S extends StoreDef<S>> {
  /// Creates a row snapshot over [map]. The map is copied: later mutations
  /// to the caller's map are invisible to the row.
  ///
  /// [projected], when non-null, records the set of field names included by
  /// a `select` projection; reading a field outside the set throws
  /// [FieldNotSelectedError].
  Row(this.def, Map<String, Object?> map, {Set<String>? projected})
      : _map = _copyMap(map),
        _projected = projected == null ? null : Set<String>.of(projected);

  /// The store definition this row belongs to.
  final S def;

  final Map<String, Object?> _map;
  final Set<String>? _projected;

  /// The record id (system column).
  String get id => _readSystem<String>('id');

  /// Whether the record is archived (system column).
  bool get archived => _readSystem<bool>('archived');

  /// A defensive snapshot of the undeclared keys stored in `extra`, excluding
  /// the declared fields and the system columns.
  Map<String, Object?> get extra {
    final declared = def.compiledSchema.declaredFieldNames;
    return Map.unmodifiable(<String, Object?>{
      for (final e in _map.entries)
        if (e.key != 'id' && e.key != 'archived' && !declared.contains(e.key))
          e.key: _copyValue(e.value),
    });
  }

  /// A defensive JSON-shaped snapshot of the whole logical record.
  Map<String, Object?> toJson() => Map.unmodifiable(
        <String, Object?>{
          for (final e in _map.entries) e.key: _copyValue(e.value)
        },
      );

  /// Reads [field] with the descriptor's static type — the call form:
  /// `row(Tasks.title)` returns `String`.
  V call<V>(FieldDef<S, V> field) => get<V>(field);

  /// Reads [field] — the `.get` alias of the call form.
  ///
  /// Failure modes are loud and package-standard:
  /// - a foreign descriptor (a cast defeated the type system) →
  ///   [TypedStoreMismatchError];
  /// - a field excluded by `select` → [FieldNotSelectedError] naming it;
  /// - a required value missing in a corrupt row →
  ///   `ValidationException('Field "x" is required.', field: 'x')`;
  /// - a value of an unexpected stored type → [ValidationException] naming
  ///   the field.
  V get<V>(FieldDef<S, V> field) {
    if (!identical(field.owner, def)) {
      throw typedStoreMismatch(
        owner: field.owner,
        name: field.name,
        target: S,
        targetKind: 'row',
      );
    }
    final projected = _projected;
    if (projected != null && !projected.contains(field.name)) {
      throw FieldNotSelectedError(field.name);
    }
    final raw = _map[field.name];
    if (raw == null && field.required) {
      throw ValidationException('Field "${field.name}" is required.',
          field: field.name);
    }
    return decodeStored(field, raw);
  }

  T _readSystem<T>(String name) {
    final projected = _projected;
    if (projected != null && !projected.contains(name)) {
      throw FieldNotSelectedError(name);
    }
    final value = _map[name];
    if (value is! T) {
      throw ValidationException(
        'Record has no valid $name value.',
        field: name,
      );
    }
    return value;
  }

  @override
  String toString() => 'Row<$S>(${_map['id']})';
}

Map<String, Object?> _copyMap(Map<String, Object?> map) =>
    <String, Object?>{for (final e in map.entries) e.key: _copyValue(e.value)};

/// Deep-copies the JSON-shaped containers so a snapshot can never observe
/// later mutations of the backing record.
Object? _copyValue(Object? value) {
  if (value is List) {
    return List<Object?>.unmodifiable([for (final v in value) _copyValue(v)]);
  }
  if (value is Map) {
    return Map<String, Object?>.unmodifiable(<String, Object?>{
      for (final e in value.entries) e.key.toString(): _copyValue(e.value),
    });
  }
  return value;
}
