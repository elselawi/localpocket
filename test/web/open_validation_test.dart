import 'package:localpocket/src/web/lifecycle.dart';
import 'package:test/test.dart';

void main() {
  group('validateWebOpenConfig', () {
    test(
        'rejects encrypted=true with UnsupportedError before asset/worker init',
        () {
      var assetLoaded = false;
      var workerStarted = false;

      void openAttempt() {
        validateWebOpenConfig(path: 'my_db', encrypted: true);
        assetLoaded = true;
        workerStarted = true;
      }

      expect(
        openAttempt,
        throwsA(isA<UnsupportedError>().having(
          (e) => e.message,
          'message',
          contains('SQLCipher is unsupported on web'),
        )),
      );
      expect(assetLoaded, isFalse,
          reason: 'Must not load assets when encrypted');
      expect(workerStarted, isFalse,
          reason: 'Must not start worker when encrypted');
    });

    test(
        'rejects path=":memory:" with UnsupportedError before asset/worker init',
        () {
      var assetLoaded = false;
      var workerStarted = false;

      void openAttempt() {
        validateWebOpenConfig(path: ':memory:', encrypted: false);
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
      expect(() => validateWebOpenConfig(path: 'test_db', encrypted: false),
          returnsNormally);
    });

    test('rejects both :memory: and encrypted=true with UnsupportedError', () {
      expect(
        () => validateWebOpenConfig(path: ':memory:', encrypted: true),
        throwsA(isA<UnsupportedError>()),
      );
    });

    test('error message for :memory: provides clear guidance to use named path',
        () {
      try {
        validateWebOpenConfig(path: ':memory:', encrypted: false);
        fail('Should have thrown UnsupportedError');
      } on UnsupportedError catch (e) {
        expect(e.message, contains(':memory:'));
        expect(e.message, contains('named database path'));
      }
    });
  });
}
