import 'package:sqlite3_web/sqlite3_web.dart';

/// A connector that only spawns dedicated workers, returning null for shared workers.
///
/// This enforces the single-engine-instance-per-tab architecture from §6.9.
final class DedicatedOnlyConnector implements WorkerConnector {
  final String workerUrl;

  const DedicatedOnlyConnector(this.workerUrl);

  @override
  WorkerHandle? spawnDedicatedWorker() {
    return WorkerConnector.defaultWorkers(workerUrl).spawnDedicatedWorker();
  }

  // never called, this is a documented limitation
  // required by :memory: path
  @override
  WorkerHandle? spawnSharedWorker() => null;
}
