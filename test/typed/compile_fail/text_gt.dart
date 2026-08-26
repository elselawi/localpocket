// Case 150: text descriptors do not expose numeric comparison operators.
import '../support/tasks.dart';

void f() {
  // expect: undefined_method
  Tasks.title.gt(2);
}
