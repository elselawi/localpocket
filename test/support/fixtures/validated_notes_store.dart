import 'dart:async';

import 'package:localpocket/localpocket.dart';

/// A store whose executable features are exercised by the conformance
/// suites: a validator hook (in-process on native, page-bridged on the
/// worker runtime), a data-only conflict policy, and a structural
/// counter override for the `qty` field.
final class ValidatedNotes extends StoreDef<ValidatedNotes> {
  ValidatedNotes._() : super(name: 'validated_notes', version: 1);
  static final ValidatedNotes store = ValidatedNotes._();

  static final title = store.schema.text('title').req();
  static final qty = store.schema.integer('qty');

  /// The validator closure shared by the schema and the page registry.
  static List<String> validate(Map<String, Object?> record) =>
      record['title'] == 'blocked' ? ['title is blocked'] : const [];

  @override
  List<FieldDef<ValidatedNotes, Object?>> get fields => [title, qty];

  @override
  ConflictPolicy get conflictPolicy => ConflictPolicy(
        editsUnarchive: true,
        fieldOverrides: {'qty': const CounterResolver(min: 0)},
      );

  @override
  FutureOr<List<String>> Function(Map<String, Object?> record)?
      get validator => validate;
}
