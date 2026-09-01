import 'dart:io';

import 'package:localpocket/src/kernel/capabilities.dart' show PlatformProfile;
import 'package:localpocket/src/kernel/cipher.dart'
    show CryptoProvider, FieldCipher;
import 'package:localpocket/src/kernel/database_adapter.dart' show Database;
import 'package:localpocket/src/kernel/local_pocket.dart'
    show LocalPocket, TestHooks;
import 'package:localpocket/src/kernel/schema.dart';
import 'package:localpocket/src/files/blob_store.dart' show BlobStore;
import 'package:path/path.dart' as p;

const String inMemoryDatabasePath = ':memory:';

int? firstInt(List<Map<String, Object?>> rows) {
  if (rows.isEmpty) return null;
  final v = rows.first.values.first;
  return v is int ? v : int.tryParse('$v');
}

/// A valid `[a-z0-9]{15}` record id derived from [label] and [n].
String rid(String label, int n) =>
    '$label${n.toString().padLeft(15 - label.length, '0')}';

/// Reads a golden file, normalizing CRLF and trimming trailing whitespace so
/// goldens are portable across Windows/Linux/macOS.
Future<String> readGolden(String relPath) async {
  final content = await File(relPath).readAsString();
  return content.replaceAll('\r\n', '\n').trim();
}

/// The canonical test schema (all field kinds, live index, unique field).
CollectionSchema<Object?> widgetsSchema({
  String name = 'widgets',
  int version = 1,
  List<Field> extraFields = const [],
  List<IndexSpec> indexes = const [
    IndexSpec(['name', 'qty'])
  ],
  List<StoreMigration> migrations = const [],
  bool keepUnsyncedArchives = false,
  Map<int, DocumentMigration>? documentMigrations,
  FtsSpec? fts,
  bool refFk = false,
}) =>
    CollectionSchema(
      name: name,
      version: version,
      fields: [
        Field.text('name', required: true),
        Field.int('qty'),
        Field.real('price'),
        Field.bool('active'),
        Field.date('made_on'),
        Field.enumValue('size', ['S', 'M', 'L']),
        Field.json('meta'),
        Field.jsonList('tags'),
        Field.ref('owner_id', to: 'owners', enforceFk: refFk),
        Field.text('phone', uniqueWhenActive: true),
        ...extraFields,
      ],
      indexes: indexes,
      migrations: migrations,
      keepUnsyncedArchives: keepUnsyncedArchives,
      documentMigrations: documentMigrations ?? const {},
      fts: fts,
    );

Future<LocalPocket> openPocket({
  Database? database,
  List<CollectionSchema>? stores,
  String? path,
  PlatformProfile platform = PlatformProfile.native,
  bool encrypted = false,
  FieldCipher? fieldCipher,
  CryptoProvider? cryptoProvider,
  bool destructiveBackup = true,
  TestHooks? testHooks,
  int maxDocBytes = 1900000,
  BlobStore? blobStore,
  int Function()? now,
}) async =>
    LocalPocket.open(
      path: path ?? ':memory:',
      database: database,
      stores: stores ?? [widgetsSchema()],
      platform: platform,
      encrypted: encrypted,
      fieldCipher: fieldCipher,
      cryptoProvider: cryptoProvider,
      destructiveBackup: destructiveBackup,
      testHooks: testHooks,
      maxDocBytes: maxDocBytes,
      blobStore: blobStore,
      now: now,
    );

/// A record builder for the `widgets` schema.
Map<String, Object?> record({
  String? id,
  String? name,
  int? qty,
  double? price,
  bool? active,
  int? madeOn,
  String? size,
  Object? meta,
  Object? tags,
  String? ownerId,
  String? phone,
  bool? archived,
  Map<String, Object?> extra = const {},
}) =>
    {
      if (id != null) 'id': id,
      if (name != null) 'name': name,
      if (qty != null) 'qty': qty,
      if (price != null) 'price': price,
      if (active != null) 'active': active,
      if (madeOn != null) 'made_on': madeOn,
      if (size != null) 'size': size,
      if (meta != null) 'meta': meta,
      if (tags != null) 'tags': tags,
      if (ownerId != null) 'owner_id': ownerId,
      if (phone != null) 'phone': phone,
      if (archived != null) 'archived': archived,
      ...extra,
    };

/// A temporary file-backed database (for WAL / concurrency tests).
class TempDb {
  TempDb(this.path);
  final String path;

  Future<void> cleanup() async {
    for (final suffix in ['', '-wal', '-shm']) {
      final f = File('$path$suffix');
      if (await f.exists()) {
        try {
          await f.delete();
        } catch (_) {}
      }
    }
  }
}

Future<TempDb> tempDbPath() async {
  final dir = await Directory.systemTemp.createTemp('lp_test_');
  return TempDb(p.join(dir.path, 'test.db'));
}

/// A recorder for `TestHooks.onExecute`/`onQuery` (statement tracing).
class StatementRecorder {
  final List<String> statements = [];

  void record(String sql) => statements.add(sql);

  int countSelectsLike(String needle) => statements
      .where((s) => s.startsWith('SELECT') && s.contains(needle))
      .length;
}
