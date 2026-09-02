import 'package:sqlite3_web/sqlite3_web.dart';

/// {@template localpocket.dedicated_only_connector}
/// A connector that only spawns dedicated workers (null for shared workers),
/// enforcing the single-engine-instance-per-tab architecture.
/// {@endtemplate}
final class DedicatedOnlyConnector implements WorkerConnector {
  /// Creates a connector that spawns workers from [workerUrl].
  ///
  /// {@macro localpocket.dedicated_only_connector}
  const DedicatedOnlyConnector(this.workerUrl);

  /// The URL of the worker script to spawn.
  final String workerUrl;

  @override
  WorkerHandle? spawnDedicatedWorker() =>
      WorkerConnector.defaultWorkers(workerUrl).spawnDedicatedWorker();

  @override
  WorkerHandle? spawnSharedWorker() => null;
}
