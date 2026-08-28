/// A second canonical typed store used to prove cross-store compile errors
/// and independent registry binding.
library;

import 'package:localpocket/typed.dart';

/// The canonical typed definition of the `users` store.
final class Users extends StoreDef<Users> {
  Users._() : super(name: 'users', version: 1);

  /// The single instance.
  static final Users store = Users._();

  late final _email = schema.text('email').req();
  late final _age = schema.integer('age');

  static TextFieldReq<Users> get email => store._email;
  static IntFieldOpt<Users> get age => store._age;

  @override
  List<FieldDef<Users, Object?>> get fields => [_email, _age];
}
