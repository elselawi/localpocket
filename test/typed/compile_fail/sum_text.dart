// Case 152: typed aggregates accept numeric descriptors only.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';

void f(TypedQuery<Tasks> query) {
  // expect: argument_type_not_assignable
  query.sum(Tasks.title);
}
