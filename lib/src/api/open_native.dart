import '../runtime/runtime_client.dart';
import 'local_pocket.dart';
import 'options.dart';

/// Opens the facade with the direct in-process runtime: the kernel runs in
/// this process, requests never serialize, and events deliver in-process.
Future<LocalPocket> openPlatform(LocalPocketOptions options) =>
    LocalPocket.openWith(options, LocalRuntimeClient.new);
