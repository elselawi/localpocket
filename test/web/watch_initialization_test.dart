import 'package:localpocket/src/web/lifecycle.dart';
import 'package:test/test.dart';

void main() {
  test('failed watch initialization removes and disposes the registration',
      () async {
    var started = false;
    var registered = false;
    var cleaned = false;

    await expectLater(
      initializeWebWatch<void>(
        start: () => started = true,
        register: () => registered = true,
        initialize: () async {
          expect(started, isTrue);
          expect(registered, isTrue);
          throw StateError('initial query failed');
        },
        cleanup: () async => cleaned = true,
      ),
      throwsStateError,
    );

    expect(cleaned, isTrue);
  });

  test('successful watch initialization returns the initial snapshot',
      () async {
    var cleaned = false;

    final snapshot = await initializeWebWatch<String>(
      start: () {},
      register: () {},
      initialize: () async => 'initial snapshot',
      cleanup: () async => cleaned = true,
    );

    expect(snapshot, 'initial snapshot');
    expect(cleaned, isFalse);
  });
}
