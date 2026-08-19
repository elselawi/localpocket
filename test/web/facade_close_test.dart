import 'package:localpocket/src/web/lifecycle.dart';
import 'package:test/test.dart';

void main() {
  test('close sends worker shutdown before marking the facade closed',
      () async {
    final events = <String>[];
    var closed = false;

    await closeWebResources(
      sendWorkerClose: () async {
        expect(closed, isFalse);
        events.add('worker-close');
      },
      markClosed: () {
        closed = true;
        events.add('facade-closed');
      },
      disposePageResources: () async {
        expect(closed, isTrue);
        events.add('page-disposed');
      },
    );

    expect(events, ['worker-close', 'facade-closed', 'page-disposed']);
  });

  test('page resources are disposed when worker shutdown fails', () async {
    final events = <String>[];
    var closed = false;

    await closeWebResources(
      sendWorkerClose: () async {
        events.add('worker-close');
        throw StateError('worker already gone');
      },
      markClosed: () {
        closed = true;
        events.add('facade-closed');
      },
      disposePageResources: () async {
        expect(closed, isTrue);
        events.add('page-disposed');
      },
    );

    expect(events, ['worker-close', 'facade-closed', 'page-disposed']);
  });
}
