// Case 155: set(Tasks.id)(...) / set(Tasks.archived)(...) — system fields are
// not SettableFieldDefs, so Draft.set rejects them at compile time.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';

void f(Draft<Tasks> w) {
  // expect: argument_type_not_assignable
  w.set(Tasks.instance.id)('x');
  // expect: argument_type_not_assignable
  w.set(Tasks.instance.archived)(true);
}
