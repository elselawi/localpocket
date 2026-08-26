// Case 148: a Tasks query cannot use Users.email.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';
import '../support/users.dart';

void f(TypedQuery<Tasks> query) {
  // expect: argument_type_not_assignable
  query.where(Users.email)(eq: 'x');
}
