import 'package:flutter_test/flutter_test.dart';

import 'package:localpocket_playground/app.dart';
import 'package:localpocket_playground/core/schemas.dart';
import 'package:localpocket_playground/core/tasks.dart';

void main() {
  testWidgets('playground boots to the shell', (WidgetTester tester) async {
    await tester.pumpWidget(const LocalPocketPlayground());
    // Allow the async database open + seed to complete.
    await tester.pumpAndSettle(const Duration(milliseconds: 200));
    expect(
      find.text('LocalPocket Playground'),
      findsWidgets,
    ); // app bar or navigation
  });

  test('typed and raw playground schemas coexist', () {
    final tasks = PlaygroundSchemas.tasks;
    expect(identical(tasks, PlaygroundTasks.store.collectionSchema), isTrue);
    expect(tasks.name, 'tasks');
    expect(tasks.fts, isNotNull);
    expect(PlaygroundSchemas.users.name, 'users');
  });
}
