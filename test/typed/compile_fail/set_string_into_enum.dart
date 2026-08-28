// Case 153: Tasks.role.set('admin') — a String into an enum field.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';

void f() {
  // expect: argument_type_not_assignable
  Tasks.role.set('admin');
}
