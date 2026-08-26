// Case 156: a .req() field left unset is NOT a compile error (the known
// limit — the engine's required-missing ValidationException is the
// authority). This fixture must analyze with no errors.
import 'package:localpocket/typed.dart';

import '../support/tasks.dart';

void f(Draft<Tasks> w) {
  w.set(Tasks.priority)(Priority.low);
  w.setExtra('note', 'title intentionally unset');
}
