// A foreign descriptor must not be accepted by a helper with the local
// StoreDef type argument.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';
import '../support/users.dart';

void f() {
  // expect: argument_type_not_assignable
  ftsSpec<Tasks>(<FieldDef<Tasks, Object?>>[Users.email]);
}
