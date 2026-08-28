// Case 149: Tasks.title.set(null) — null into a .req() (non-nullable) field.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';

void f() {
  // expect: argument_type_not_assignable
  Tasks.title.set(null);
}
