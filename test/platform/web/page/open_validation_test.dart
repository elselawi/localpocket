import 'package:localpocket/src/platform/web/page/lifecycle.dart';
import 'package:test/test.dart';

void main() {
  group('validateWebOpenConfig', () {
    test(
        'rejects path=":memory:" with UnsupportedError before asset/worker init',
        () {
      var assetLoaded = false;
      var workerStarted = false;

      void openAttempt() {
        validateWebOpenConfig(path: ':memory:');
        assetLoaded = true;
        workerStarted = true;
      }

      expect(
        openAttempt,
        throwsA(isA<UnsupportedError>().having(
          (e) => e.message,
          'message',
          contains(':memory:'),
        )),
      );
      expect(assetLoaded, isFalse, reason: 'Must not load assets for :memory:');
      expect(workerStarted, isFalse,
          reason: 'Must not start worker for :memory:');
    });

    test('accepts unencrypted configuration with valid path', () {
      expect(() => validateWebOpenConfig(path: 'test_db'), returnsNormally);
    });

    test('rejects :memory: with UnsupportedError', () {
      expect(
        () => validateWebOpenConfig(path: ':memory:'),
        throwsA(isA<UnsupportedError>()),
      );
    });

    test('error message for :memory: provides clear guidance to use named path',
        () {
      try {
        validateWebOpenConfig(path: ':memory:');
        fail('Should have thrown UnsupportedError');
      } on UnsupportedError catch (e) {
        expect(e.message, contains(':memory:'));
        expect(e.message, contains('named database path'));
      }
    });
  });
}
