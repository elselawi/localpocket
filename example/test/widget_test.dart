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

  test('playground store definitions are the canonical typed definitions', () {
    expect(identical(PlaygroundSchemas.tasks, PlaygroundTasks.store), isTrue);
    expect(PlaygroundSchemas.tasks.name, 'tasks');
    expect(PlaygroundSchemas.tasks.fts, isNotNull);
    expect(PlaygroundSchemas.users.name, 'users');
  });
}
