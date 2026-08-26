// Case 157: date and dateTime adapters are not interchangeable at call sites.
import '../support/tasks.dart';

void f() {
  // expect: argument_type_not_assignable
  Tasks.dueAt.gt(1);
  // expect: argument_type_not_assignable
  Tasks.dueDay.gt(DateTime.utc(2026));
}
