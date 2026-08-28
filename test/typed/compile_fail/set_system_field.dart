// Case 155: Tasks.store.id.set(...) / archived.set(...) — system fields
// are not SettableFieldDefs, so the field-native `set` does not exist on
// them; ids travel through Writes.id and archive state is engine-owned.
import '../support/tasks.dart';

void f() {
  // expect: undefined_method
  Tasks.store.id.set('x');
  // expect: undefined_method
  Tasks.store.archived.set(true);
}
