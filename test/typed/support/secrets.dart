/// A canonical typed store with an encrypted field, for encryption-boundary
/// tests.
library;

import 'package:localpocket/typed.dart';

/// A store mixing an encrypted and a plain text field.
final class SecretNotes extends StoreDef<SecretNotes> {
  SecretNotes._() : super(name: 'secretnotes', version: 1);

  /// The single instance.
  static final SecretNotes store = SecretNotes._();

  late final _label = schema.text('name').req();
  late final _note = schema.text('note', encrypted: true);

  /// The `name` column descriptor. The accessor is named `label` because
  /// `StoreDef.name` already occupies the `name` member slot.
  static TextFieldReq<SecretNotes> get label => store._label;
  static TextFieldOpt<SecretNotes> get note => store._note;

  @override
  List<FieldDef<SecretNotes, Object?>> get fields => [_label, _note];
}
