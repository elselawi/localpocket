// v2: conditions carry their store — a Tasks condition cannot enter a Users
// query through the named-argument terminals.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';
import '../support/users.dart';

Future<TypedPage<Users>> f(TypedCollection<Users> users) {
  // expect: argument_type_not_assignable
  return users.query(where: [Tasks.done.eq(false)]);
}
