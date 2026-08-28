// Case 152: typed aggregates accept numeric descriptors only.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';

Future<num?> f(TypedCollection<Tasks> tasks) {
  // expect: argument_type_not_assignable
  return tasks.sum(Tasks.title);
}
