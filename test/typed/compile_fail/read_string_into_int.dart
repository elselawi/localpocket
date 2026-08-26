// Case 145: `final int x = rec(Tasks.title);` — String read into an int.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';

void f(TypedRow<Tasks> rec) {
  // expect: argument_type_not_assignable
  final int x = rec(Tasks.title);
}
