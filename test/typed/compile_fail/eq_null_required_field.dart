// v2: a required field's value type is non-nullable, so eq(null) — the IS
// NULL shorthand — cannot even be spelled on it.
import '../support/tasks.dart';

void f() {
  // expect: argument_type_not_assignable
  Tasks.title.eq(null);
}
