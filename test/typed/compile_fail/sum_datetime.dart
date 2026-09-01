import 'package:localpocket/src/internal/raw_surface.dart';

import '../support/tasks.dart';

Future<num?> rejectDateTimeAggregate(TypedCollection<Tasks> tasks) {
  // expect: argument_type_not_assignable
  return tasks.sum(Tasks.dueAt);
}
