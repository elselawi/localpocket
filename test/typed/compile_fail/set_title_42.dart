// Case 144: set(Tasks.title)(42) — int into a String field.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';

void f(Draft<Tasks> w) {
  // expect: argument_type_not_assignable
  w.set(Tasks.title)(42);
}
