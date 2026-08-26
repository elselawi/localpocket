// Case 147: set(Users.email)('x') in a Draft<Tasks> — cross-store write.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';
import '../support/users.dart';

void f(Draft<Tasks> w) {
  // expect: argument_type_not_assignable
  w.set(Users.email)('x');
}
