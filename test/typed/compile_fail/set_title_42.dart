// Case 144: Tasks.title.set(42) — int into a String field.
import 'package:localpocket/src/internal/raw_surface.dart';

import '../support/tasks.dart';

void f() {
  // expect: argument_type_not_assignable
  Tasks.title.set(42);
}
