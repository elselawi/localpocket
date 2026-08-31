/// Typed Web/WASM protocol invariants.
///
/// Runtime worker behavior is exercised by `tool/web_smoke/typed_smoke_main.dart`;
/// this VM test pins the exact wire vocabulary that the typed facade must reuse.
///
/// The two `contract_*` operations are the destination typed envelope, which
/// coexists with the string-op registry while each family routes through it;
/// they carry contract-codec payloads, never new string-op argument shapes.
library;

import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

void main() {
  test('case 160: typed APIs add no wire operation or protocol bump', () {
    expect(webProtocolVersion, 3);
    expect(
      WireOp.allKnown.toSet(),
      equals(<String>{
        'open',
        'contract_request',
        'contract_event',
      }),
    );
  });
}
