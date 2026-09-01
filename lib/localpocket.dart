/// LocalPocket — a local-first SQLite database with PocketBase sync.
///
/// One import gives you the whole destination API: open a [LocalPocket],
/// declare each store once as a [StoreDef], and work with typed [Store]s,
/// immutable [Row] snapshots, declarative [QuerySpec]/[SearchSpec]s,
/// interactive [Transaction]s, committed-change events, store-scoped
/// [Files]/[StoreConflicts], and the [PocketBaseSync] attachment. The same
/// import compiles on mobile, desktop, and web — the facade runs over the
/// direct runtime on native targets and the worker contract runtime on web.
///
/// ```dart
/// import 'package:localpocket/localpocket.dart';
///
/// final db = await LocalPocket.open(
///   LocalPocketOptions(path: 'app.db', stores: [Tasks.store]),
/// );
/// final tasks = db.store(Tasks.store);
/// await tasks.put([Tasks.title.set('Ship it')]);
/// ```
library;

// The destination public API: the facade barrel plus the schema declaration
// layer (typed descriptors ARE the destination schema source).
export 'src/api/api.dart';
export 'src/typed/cond.dart';
export 'src/typed/field_def.dart';
export 'src/typed/limits.dart';
export 'src/typed/schema_helpers.dart';
export 'src/typed/store_def.dart';
export 'src/typed/write.dart';

// The schema helper types store declarations name. The raw schema types
// (CollectionSchema, Field, ...) are kernel-internal and not exported.
export 'src/core/schema.dart'
    show IndexSpec, IndexScope, FtsSpec, FtsNormalization, StoreMigration;
