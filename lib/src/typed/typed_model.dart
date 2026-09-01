import '../schema/store_def.dart';
import 'typed_row.dart';

/// {@template localpocket.typed_model}
/// Base class for application-side domain wrappers around [TypedRow].
///
/// You keep exactly the typed, intent-named getters your domain needs —
/// the wrapper stores the row and forwards the system columns for free.
/// {@endtemplate}
abstract class TypedModel<S extends StoreDef<S>> {
  /// {@macro localpocket.typed_model}
  TypedModel(this.row);

  /// The row snapshot this model wraps (see [TypedRow] docs: immutable
  /// snapshot, re-fetch for fresh values).
  final TypedRow<S> row;

  String get id => row.id;
  bool get archived => row.archived;

  Map<String, Object?> get extra => row.extra;
  Map<String, Object?> asMap() => row.asMap();
}
