import 'package:isar/isar.dart';

part 'benchmark_models.g.dart';

// ------------------------------------------------------------------ Isar Model
@collection
class IsarWidget {
  Id id = Isar.autoIncrement;

  late String recordId;

  late String name;

  late int qty;
}
