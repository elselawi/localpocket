import 'package:localpocket/typed.dart';

import '../support/tasks.dart';

Future<num?> rejectDateTimeAggregate(TypedCollection<Tasks> tasks) {
  // expect: argument_type_not_assignable
  return tasks.sum(Tasks.dueAt);
}
