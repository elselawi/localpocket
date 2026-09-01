// Case 154: schema.boolean('x', encrypted: true) — the parameter does not exist
// (the engine's Field.bool has no encryption).
import 'package:localpocket/src/internal/raw_surface.dart';

import '../support/tasks.dart';

void f(Fields<Tasks> fields) {
  // expect: undefined_named_parameter
  fields.boolean('x', encrypted: true);
}
