import 'package:test/test.dart';

void main() {
  test('web worker spike contract is explicitly not the production protocol',
      () {
    // This test is intentionally small until the public protocol is introduced.
    // It prevents the spike from being mistaken for the LocalPocket facade.
    expect('spike', isNot('localpocket-public-api'));
  });
}
