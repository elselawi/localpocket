// Passing a Users descriptor to an index owned by Tasks must not compile.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';
import '../support/users.dart';

void f() {
  // expect: argument_type_not_assignable
  indexSpec<Tasks>(<FieldDef<Tasks, Object?>>[Users.email]);
}
