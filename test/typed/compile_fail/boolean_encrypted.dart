// Case 154: f.boolean('x', encrypted: true) — the parameter does not exist
// (the engine's Field.bool has no encryption).
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';

void f(Fields<Tasks> fields) {
  // expect: undefined_named_parameter
  fields.boolean('x', encrypted: true);
}
