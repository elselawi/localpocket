// Case 151: numeric descriptors do not expose text LIKE operators.
import '../support/tasks.dart';

void f() {
  // expect: undefined_method
  Tasks.estimate.startsWith('x');
}
