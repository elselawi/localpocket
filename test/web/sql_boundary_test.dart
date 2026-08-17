import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

void main() {
  test('web protocol exposes no SQL or ATTACH operation', () {
    expect(WireOp.allKnown, isNot(contains('sql')));
    expect(WireOp.allKnown, isNot(contains('attach')));
    expect(
      () => WebRequest.fromJson({
        'v': webProtocolVersion,
        'i': 1,
        'op': 'attach',
        'a': <String, Object?>{},
      }),
      throwsA(isA<ProtocolEnvelopeException>()),
    );
  });
}
