import 'package:isar/isar.dart';

part 'benchmark_models.g.dart';

// ------------------------------------------------------------------ Isar Model
// Both business fields are indexed so the benchmark exercises Isar's
// index-backed access paths (the same access pattern every other peer uses):
// - `recordId` gets a unique index (primary-key-style lookup).
// - `qty` gets a non-unique index (range queries / sorted top-K).
@collection
class IsarWidget {
  Id id = Isar.autoIncrement;

  @Index(unique: true, replace: true)
  late String recordId;

  late String name;

  @Index()
  late int qty;
}
