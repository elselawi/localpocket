// Case 147: Users.email.set('x') inside a tasks patch — cross-store write.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';
import '../support/users.dart';

Future<void> f(TypedCollection<Tasks> tasks) {
  // expect: argument_type_not_assignable
  return tasks.patch('id', [Users.email.set('x')]);
}
