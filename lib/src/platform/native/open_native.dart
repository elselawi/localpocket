import '../../api/local_pocket.dart';
import '../../api/options.dart';
import '../../runtime/runtime_client.dart';

/// Opens the facade with the direct in-process runtime: the kernel runs in
/// this process, requests never serialize, and events deliver in-process.
///
/// Native open implementation — selected by the conditional export in
/// `lib/src/api/open_platform.dart`; the api layer never imports platform
/// code directly.
Future<LocalPocket> openPlatform(LocalPocketOptions options) =>
    LocalPocket.openWith(options, LocalRuntimeClient.new);
