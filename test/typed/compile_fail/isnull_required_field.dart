// v2: IS NULL on a required (NOT NULL) column is meaningless — the
// null-testing members are unspellable on `.req()` descriptors.
import '../support/tasks.dart';

void f() {
  // expect: undefined_method
  Tasks.title.isNull();
}
