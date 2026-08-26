// Case 149: set(Tasks.title)(null) — null into a .req() (non-nullable) field.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';

void f(Draft<Tasks> w) {
  // expect: argument_type_not_assignable
  w.set(Tasks.title)(null);
}
