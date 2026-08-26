import 'package:localpocket/typed.dart';

import '../support/tasks.dart';

void rejectDateTimeAggregate(TypedQuery<Tasks> query) {
  // expect: argument_type_not_assignable
  query.sum(Tasks.dueAt);
}
