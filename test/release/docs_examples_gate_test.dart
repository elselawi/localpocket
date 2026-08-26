import 'package:test/test.dart';

import '../../tool/docs_examples_test.dart';

void main() {
  test('case 166: marked typed snippets form one analyzed program', () {
    const markdown = '''
$compileMarker
```dart
final class Definition {}
```

Unrelated prose and an unchecked fragment:
```dart
not standalone
```

$compileMarker
```dart
void main() {
  Definition();
}
```
''';

    expect(
      extractCompileCheckedDart(markdown),
      contains('final class Definition {}\n\nvoid main()'),
    );
    expect(
        extractCompileCheckedDart(markdown), isNot(contains('not standalone')));
  });

  test('compile marker requires a Dart fence', () {
    expect(
      () => extractCompileCheckedDart('$compileMarker\n```text\nno\n```'),
      throwsFormatException,
    );
  });
}
