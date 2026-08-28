// Conditions carry their store: a foreign condition cannot be an operand of
// `&`, `|`, or `~` either — the algebra is store-typed like every other slot.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';
import '../support/users.dart';

Future<TypedPage<Users>> f(TypedCollection<Users> users) {
  // expect: argument_type_not_assignable
  return users.query(where: [Users.email.eq('x') & Tasks.done.eq(false)]);
}

Future<TypedPage<Users>> g(TypedCollection<Users> users) {
  // expect: argument_type_not_assignable
  return users.query(where: [Users.email.eq('x') | Tasks.done.eq(false)]);
}

Future<TypedPage<Users>> h(TypedCollection<Users> users) {
  // expect: argument_type_not_assignable
  return users.query(where: [~Tasks.done.eq(false)]);
}
