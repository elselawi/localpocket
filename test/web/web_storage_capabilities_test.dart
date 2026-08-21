import 'package:localpocket/src/web/facade/web_storage_capabilities.dart';
import 'package:test/test.dart';

void main() {
  test('toJson emits the exact capability keys and values', () {
    const caps = WebStorageCapabilities(
      storage: 'opfs',
      durable: true,
      persistent: false,
      multiTabStorage: true,
      multiTabSync: false,
      worker: true,
    );
    expect(caps.toJson(), {
      'storage': 'opfs',
      'durable': true,
      'persistent': false,
      'multiTabStorage': true,
      'multiTabSync': false,
      'worker': true,
    });
  });

  test('toJson round-trips a non-default capability set', () {
    const caps = WebStorageCapabilities(
      storage: 'idb',
      durable: false,
      persistent: true,
      multiTabStorage: false,
      multiTabSync: true,
      worker: false,
    );
    final json = caps.toJson();
    expect(json.keys, unorderedEquals({
      'storage',
      'durable',
      'persistent',
      'multiTabStorage',
      'multiTabSync',
      'worker',
    }));
    expect(json['storage'], 'idb');
    expect(json['durable'], isFalse);
    expect(json['persistent'], isTrue);
    expect(json['multiTabStorage'], isFalse);
    expect(json['multiTabSync'], isTrue);
    expect(json['worker'], isFalse);
  });
}
