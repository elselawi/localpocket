// Case 153: set(Tasks.role)('admin') — a String into an enum field.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';

void f(Draft<Tasks> w) {
  // expect: argument_type_not_assignable
  w.set(Tasks.role)('admin');
}
