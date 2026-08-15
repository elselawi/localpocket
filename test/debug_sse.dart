import 'package:localpocket/pocketbase.dart';
import 'package:localpocket/sync.dart';
import 'pocketbase/mock_pb_server.dart';
import 'pocketbase/pb_helpers.dart';

Future<void> main() async {
  final server = await MockPbServer().start();
  final backend = PocketBaseBackend(
    baseUrl: server.baseUrl,
    tokenProvider: TestTokenProvider(),
    stores: const ['widgets', 'owners'],
    realtimeDebounce: const Duration(milliseconds: 30),
  );
  final hints = <BackendHint>[];
  final sub = backend.hints().listen(hints.add);
  await backend.startRealtime();
  await Future<void>.delayed(const Duration(milliseconds: 250));
  print('after start: connects=${server.realtimeConnects} hints=${hints.length}');
  server.closeSse();
  await Future<void>.delayed(const Duration(milliseconds: 800));
  print('after close: connects=${server.realtimeConnects} hints=${hints.map((x) => x.store).toList()}');
  await sub.cancel();
  backend.close();
  await server.stop();
}
