/// {@template localpocket.web_storage_capabilities}
/// Main-thread public `LocalPocket` implementation for web.
///
/// Dispatches public-API requests (`WebRequest`) to the dedicated engine worker
/// over `Database.customRequest`.
/// {@endtemplate}
class WebStorageCapabilities {

  /// {@macro localpocket.web_storage_capabilities}
  const WebStorageCapabilities({
    required this.storage,
    required this.durable,
    required this.persistent,
    required this.multiTabStorage,
    required this.multiTabSync,
    required this.worker,
  });
  final String storage;
  final bool durable;
  final bool persistent;
  final bool multiTabStorage;
  final bool multiTabSync;
  final bool worker;

  Map<String, Object?> toJson() => {
        'storage': storage,
        'durable': durable,
        'persistent': persistent,
        'multiTabStorage': multiTabStorage,
        'multiTabSync': multiTabSync,
        'worker': worker,
      };
}
