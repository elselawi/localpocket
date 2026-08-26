/// A second canonical typed store used to prove cross-store compile errors
/// and independent registry binding.
library;

import 'package:localpocket/typed.dart';

/// The canonical typed definition of the `users` store.
final class Users extends StoreDef<Users> {
  Users._() : super(name: 'users', version: 1);

  /// The single instance.
  static final Users instance = Users._();

  late final _email = f.text('email').req();
  late final _age = f.integer('age');

  static TextFieldReq<Users> get email => instance._email;
  static IntFieldOpt<Users> get age => instance._age;

  @override
  List<FieldDef<Users, Object?>> get fields => [_email, _age];
}
