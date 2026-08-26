// Case 146: rec(Users.email) on a TypedRow<Tasks> — cross-store read.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';
import '../support/users.dart';

void f(TypedRow<Tasks> rec) {
  // expect: argument_type_not_assignable
  rec(Users.email);
}
