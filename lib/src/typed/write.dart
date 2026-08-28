/// Field-native typed writes: one value per field change.
///
/// Writes are **values** built beside the descriptors —
/// `Tasks.title.set('x')`, `Tasks.done.set(false)` — collected into
/// `put([...])`, `patch(id, [...])`, `putAll([[...]])`, and
/// `patchAll({...})`. The construction site is where the field's value type
/// is enforced: wrong types, wrong stores, and writes to database-owned
/// columns are compile errors. Setter nullability mirrors field nullability:
/// a required field takes a non-null value; an optional field accepts `null`
/// to clear.
library;

import 'field_def.dart';
import 'store_def.dart';

/// {@template localpocket.write}
/// One typed write: a declared-field assignment, an explicit record id, or
/// an undeclared `extra` key.
///
/// Built by `field.set(value)`, [Writes.id], and [Writes.extra]; consumed by
/// `TypedCollection.put`/`putAll`/`patch`/`patchAll`. There is no other write
/// path — the sealed hierarchy keeps the set of write kinds closed.
/// {@endtemplate}
sealed class Write<S extends StoreDef<S>> {
  /// {@macro localpocket.write}
  const Write();
}

/// {@template localpocket.field_write}
/// A declared-field write produced by `field.set(value)`; [encoded] has
/// already passed through the descriptor's boundary codec.
/// {@endtemplate}
final class FieldWrite<S extends StoreDef<S>> extends Write<S> {
  /// {@macro localpocket.field_write}
  const FieldWrite(this.owner, this.name, this.encoded);

  /// The canonical store definition instance owning the field (runtime
  /// backstop when a cast defeats the phantom type).
  final S owner;

  /// the database field name.
  final String name;

  /// The encoded value; `null` clears an optional field.
  final Object? encoded;
}

/// {@template localpocket.id_write}
/// An explicit record id write produced by [Writes.id]. the database generates
/// a `[a-z0-9]{15}` id when a put omits it; patch/patchAll reject this write
/// because record ids are immutable.
/// {@endtemplate}
final class IdWrite<S extends StoreDef<S>> extends Write<S> {
  /// {@macro localpocket.id_write}
  const IdWrite(this.id);

  /// The record id.
  final String id;
}

/// {@template localpocket.extra_write}
/// An undeclared `extra` key write produced by [Writes.extra]. Keys are
/// validated against the target store when the write is applied.
/// {@endtemplate}
final class ExtraWrite<S extends StoreDef<S>> extends Write<S> {
  /// {@macro localpocket.extra_write}
  const ExtraWrite(this.key, this.value);

  /// The extra key.
  final String key;

  /// The extra value.
  final Object? value;
}

/// Builds one [Write] per assignment on every settable field descriptor.
///
/// System descriptors (`id`, `archived`) are plain [FieldDef]s, not
/// [SettableFieldDef]s, so `Tasks.store.id.set(...)` does not compile —
/// ids travel through [Writes.id] and archive state stays owned by
/// `archive()`/`restore()`.
extension FieldSet<S extends StoreDef<S>, V> on SettableFieldDef<S, V> {
  /// Assigns [value] to this field. `null` clears an optional field; on a
  /// required field the null case is a compile error because the value type
  /// is non-nullable.
  Write<S> set(V value) => FieldWrite<S>(owner, name, encode(value));
}

/// Namespace for the non-field writes: explicit record ids and undeclared
/// `extra` keys.
final class Writes {
  Writes._();

  /// Assigns the record id explicitly. Optional: a put without it lets the
  /// database generate the id at write time; malformed ids surface as a
  /// `ValidationException`.
  static Write<S> id<S extends StoreDef<S>>(String value) => IdWrite<S>(value);

  /// Writes an undeclared key into the record's `extra` storage; it
  /// round-trips losslessly. Declared and database-owned keys are rejected
  /// when the write is applied.
  static Write<S> extra<S extends StoreDef<S>>(String key, Object? value) =>
      ExtraWrite<S>(key, value);
}
