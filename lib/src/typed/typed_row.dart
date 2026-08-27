/// Typed row reads: a view over the engine's decoded logical map.
library;

import 'package:localpocket/localpocket.dart';

import 'field_def.dart';
import 'store_def.dart';

/// A typed view over one decoded record.
///
/// Wraps the engine's logical map **by reference** — no copy, no
/// revalidation — so reads are one map lookup plus a cast. The row is a
/// snapshot: fetching it once and reading it repeatedly returns the same
/// decoded values even if the underlying store changes afterwards.
///
/// It deliberately does **not** implement `Map`: the untyped
/// `Object? operator [](Object?)` signature would blur the typed boundary.
/// Use [asMap] for the raw logical map.
final class TypedRow<S extends StoreDef<S>> {
  /// Creates a row over [map]. Rows are normally obtained from
  /// `TypedCollection.get`; this constructor exists for advanced use (POJO
  /// projections, tests) and takes the map by reference.
  ///
  /// [projected], when non-null, records the set of field names included by
  /// a `select` projection; reading a field outside the set throws a
  /// [ValidationException] naming the field.
  TypedRow(this.def, Map<String, Object?> map, {Set<String>? projected})
      : _map = map,
        _projected = projected;

  /// The store definition this row belongs to.
  final S def;

  final Map<String, Object?> _map;
  final Set<String>? _projected;

  /// The record id (system column).
  String get id => _readSystem<String>('id');

  /// Whether the record is archived (system column).
  bool get archived => _readSystem<bool>('archived');

  /// Undeclared keys stored in `extra`, excluding the declared fields and
  /// the system columns. Values are live references into the backing map.
  Map<String, Object?> get extra {
    final declared = def.collectionSchema.declaredFieldNames;
    return Map.unmodifiable(<String, Object?>{
      for (final e in _map.entries)
        if (e.key != 'id' && e.key != 'archived' && !declared.contains(e.key))
          e.key: e.value,
    });
  }

  /// The live logical map this row wraps (advanced: mutations are visible to
  /// later reads through the same row).
  Map<String, Object?> asMap() => _map;

  /// Reads [field] with the descriptor's static type — the call form:
  /// `rec(tasks.title)` returns `String`.
  V call<V>(FieldDef<S, V> field) => get<V>(field);

  /// Reads [field] — the `.get` alias of the call form.
  ///
  /// Failure modes are loud and package-standard:
  /// - a foreign descriptor (a cast defeated the type system) →
  ///   [TypedStoreMismatchError];
  /// - a required value missing in a corrupt row →
  ///   `ValidationException('Field "x" is required.', field: 'x')`;
  /// - a value of an unexpected stored type →
  ///   [ValidationException] naming the field (never a silent wrong-typed
  ///   value);
  /// - a field excluded by `select` → [ValidationException] naming it.
  V get<V>(FieldDef<S, V> field) {
    if (!identical(field.owner, def)) {
      throw TypedStoreMismatchError('Field "${field.name}" belongs to store '
          '${field.owner.runtimeType}, but this row is a $S. Cross-store '
          'reads are compile errors; a cast has defeated the type system.');
    }
    final projected = _projected;
    if (projected != null && !projected.contains(field.name)) {
      throw ValidationException(
          'Field "${field.name}" was not selected and is unavailable in '
          'this row.',
          field: field.name);
    }
    final raw = _map[field.name];
    if (raw == null && field.required) {
      throw ValidationException('Field "${field.name}" is required.',
          field: field.name);
    }
    try {
      return field.decode(raw);
    } on ValidationException {
      rethrow;
    } catch (e) {
      throw ValidationException(
          'Field "${field.name}" could not be decoded from its stored '
          'value: $e',
          field: field.name);
    }
  }

  T _readSystem<T>(String name) {
    final projected = _projected;
    if (projected != null && !projected.contains(name)) {
      throw ValidationException(
        'Field "$name" was not selected and is unavailable in this row.',
        field: name,
      );
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
}
