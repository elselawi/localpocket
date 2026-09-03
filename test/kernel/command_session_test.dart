import 'package:localpocket/src/contract/contract.dart';
import 'package:localpocket/src/kernel/files/blob_store.dart'
    show MemoryBlobStore;
import 'package:localpocket/src/kernel/local_pocket.dart' as kernel;
import 'package:localpocket/src/kernel/schema.dart'
    show CollectionSchema, Field;
import 'package:test/test.dart';

import '../support/fixtures/tasks_store.dart';

/// The command dispatcher's interactive-transaction surface, driven directly
/// through [kernel.KernelDatabase.commands] — the same requests the web
/// worker and the loopback runtime carry. Covers the session-bound mutation
/// path, savepoint nesting/rollback/release, session lookup errors, the
/// spec-lowering variants, and the file download window controls.
void main() {
  late kernel.KernelDatabase db;
  late CommandHandler commands;

  setUp(() async {
    db = await kernel.KernelDatabase.open(
      path: ':memory:',
      stores: [Tasks.store.compiledSchema],
      blobStore: MemoryBlobStore(),
    );
    commands = db.commands;
  });
  tearDown(() async => db.close());

  Future<TransactionBeginResult> begin() async {
    final result =
        await commands.handle(const TransactionBeginRequest(readOnly: false));
    return result as TransactionBeginResult;
  }

  Future<Result> mutate(String session, Mutation mutation) => commands.handle(
      MutateRequest(store: 'tasks', mutation: mutation, session: session));

  test('a session-bound mutation commits with its transaction', () async {
    final begun = await begin();
    await mutate(begun.session,
        MutationPut({'id': 'sid000000000001', 'title': 'in-session'}));
    await commands.handle(TransactionCommitRequest(session: begun.session));

    final row = await commands
        .handle(const GetRequest(store: 'tasks', id: 'sid000000000001'));
    expect((row as RowResult).row!['title'], 'in-session');
  });

  test('session reads see their own uncommitted writes; rollback undoes them',
      () async {
    final begun = await begin();
    final s = begun.session;
    await mutate(
        s, MutationPut({'id': 'sid000000000002', 'title': 'uncommitted'}));

    final inside = await commands
        .handle(GetRequest(store: 'tasks', id: 'sid000000000002', session: s));
    expect((inside as RowResult).row!['title'], 'uncommitted');

    await commands.handle(TransactionRollbackRequest(session: s));
    final outside = await commands
        .handle(const GetRequest(store: 'tasks', id: 'sid000000000002'));
    expect((outside as RowResult).row, isNull);
  });

  group('savepoints', () {
    test('rollback-to undoes the savepoint tail; release keeps it', () async {
      final begun = await begin();
      final s = begun.session;
      await mutate(s, MutationPut({'id': 'sid000000000003', 'title': 'base'}));
      await commands
          .handle(TransactionSavepointRequest(session: s, name: 'sp1'));
      await mutate(s, MutationPut({'id': 'sid000000000004', 'title': 'sp1'}));

      await commands
          .handle(TransactionRollbackToRequest(session: s, name: 'sp1'));
      final base = await commands.handle(
          GetRequest(store: 'tasks', id: 'sid000000000003', session: s));
      expect((base as RowResult).row!['title'], 'base');
      final sp1Gone = await commands.handle(
          GetRequest(store: 'tasks', id: 'sid000000000004', session: s));
      expect((sp1Gone as RowResult).row, isNull);

      // The savepoints opened before the rollback are gone too; a fresh one
      // opens, releases, and the transaction still commits.
      await commands
          .handle(TransactionSavepointRequest(session: s, name: 'sp3'));
      await commands.handle(TransactionReleaseRequest(session: s, name: 'sp3'));
      await commands.handle(TransactionCommitRequest(session: s));

      final kept = await commands
          .handle(const GetRequest(store: 'tasks', id: 'sid000000000003'));
      expect((kept as RowResult).row, isNotNull);
    });

    test('rolling back to an unknown savepoint fails typed', () async {
      final begun = await begin();
      await commands.handle(
          TransactionSavepointRequest(session: begun.session, name: 'real'));
      await expectLater(
        commands.handle(TransactionRollbackToRequest(
            session: begun.session, name: 'ghost')),
        throwsStateError,
      );
      await commands.handle(TransactionRollbackRequest(session: begun.session));
    });

    test('releasing a non-innermost savepoint fails typed', () async {
      final begun = await begin();
      final s = begun.session;
      await commands.handle(TransactionSavepointRequest(session: s, name: 'a'));
      await commands.handle(TransactionSavepointRequest(session: s, name: 'b'));
      await expectLater(
        commands.handle(TransactionReleaseRequest(session: s, name: 'a')),
        throwsStateError,
      );
      await commands.handle(TransactionRollbackRequest(session: s));
    });

    test('a savepoint on an unknown session fails typed', () async {
      await expectLater(
        commands.handle(
            const TransactionSavepointRequest(session: 'bogus', name: 'a')),
        throwsStateError,
      );
    });

    test('a session abandoned past the idle deadline is force-rolled back',
        () async {
      final tiny = await kernel.KernelDatabase.open(
        path: ':memory:',
        stores: [Tasks.store.compiledSchema],
        blobStore: MemoryBlobStore(),
        txSessionTtl: const Duration(milliseconds: 120),
      );
      addTearDown(tiny.close);
      final cmds = tiny.commands;

      final begun = await cmds.handle(const TransactionBeginRequest(
        readOnly: false,
      ));
      final s = (begun as TransactionBeginResult).session;

      await cmds.handle(MutateRequest(
        store: 'tasks',
        mutation: MutationPut({'id': 'ttl000000000001', 'title': 'staged'}),
        session: s,
      ));

      // The caller wedges and never settles. The idle sweeper force-rolls the
      // session back so the write queue cannot stay wedged forever.
      await Future<void>.delayed(const Duration(milliseconds: 500));

      await expectLater(
        cmds.handle(TransactionCommitRequest(session: s)),
        throwsStateError,
        reason: 'the abandoned session no longer exists',
      );
      final row = await cmds
          .handle(const GetRequest(store: 'tasks', id: 'ttl000000000001'));
      expect((row as RowResult).row, isNull,
          reason: 'the staged write was rolled back, never half-committed');

      // The queue is live: a fresh session works normally.
      final fresh = await cmds.handle(const TransactionBeginRequest(
        readOnly: false,
      ));
      await cmds.handle(TransactionCommitRequest(
          session: (fresh as TransactionBeginResult).session));
    });
  });

  group('spec-lowering variants', () {
    setUp(() async {
      final col = db.collection('tasks');
      await col.put({'id': 'sid000000000006', 'title': 'match', 'priority': 1});
      await col.put({'id': 'sid000000000007', 'title': 'other', 'priority': 9});
      await col
          .put({'id': 'sid000000000008', 'title': 'archived', 'priority': 2});
      await db.kernel.traceExecute(
          'UPDATE tasks SET archived = 1 WHERE id = ?', ['sid000000000008']);
    });

    Future<List<String>> titles(QuerySpecData spec) async {
      final result =
          await commands.handle(QueryRequest(store: 'tasks', spec: spec));
      return [
        for (final r in (result as QueryRowsResult).items) r['title'] as String,
      ]..sort();
    }

    test('text operators lower through the flat condition list', () async {
      expect(
        await titles(const QuerySpecData(where: [
          QueryConditionData('title', QueryConditionOp.startsWith,
              value: 'match'),
        ], limit: 10)),
        ['match'],
      );
      expect(
        await titles(const QuerySpecData(where: [
          QueryConditionData('title', QueryConditionOp.endsWith, value: 'her'),
        ], limit: 10)),
        ['other'],
      );
      expect(
        await titles(const QuerySpecData(where: [
          QueryConditionData('title', QueryConditionOp.contains, value: 'atc'),
        ], limit: 10)),
        ['match'],
      );
      expect(
        await titles(const QuerySpecData(where: [
          QueryConditionData('title', QueryConditionOp.neq, value: 'other'),
        ], limit: 10)),
        ['match'],
      );
      expect(
        await titles(const QuerySpecData(where: [
          QueryConditionData('priority', QueryConditionOp.inValues,
              values: [1, 9]),
        ], limit: 10)),
        ['match', 'other'],
      );
      expect(
        await titles(const QuerySpecData(where: [
          QueryConditionData('priority', QueryConditionOp.between,
              values: [1, 2]),
        ], limit: 10)),
        ['match'],
      );
    });

    test('isNull and isNotNull lower through the builder', () async {
      expect(
        await titles(const QuerySpecData(
          where: [QueryConditionData('priority', QueryConditionOp.isNull)],
          limit: 10,
        )),
        isEmpty,
        reason: 'every seeded row has a priority',
      );
      expect(
        await titles(const QuerySpecData(
          where: [QueryConditionData('priority', QueryConditionOp.isNotNull)],
          limit: 10,
          includeArchived: true,
        )),
        ['archived', 'match', 'other'],
      );
    });

    test('eq(null) on the flat path lowers to IS NULL, never no-op', () async {
      // Seed a row with a null priority, then confirm eq(null) matches ONLY
      // that row — a no-op lowering would return every row unfiltered.
      final col = db.collection('tasks');
      await col.put({'id': 'sid000000000009', 'title': 'nullprio'});

      expect(
        await titles(const QuerySpecData(
          where: [QueryConditionData('priority', QueryConditionOp.eq)],
          limit: 10,
        )),
        ['nullprio'],
        reason: 'eq(null) reads as IS NULL, not as an absent filter',
      );
    });

    test('or-groups lower their eq members; predicate trees lower every op',
        () async {
      final orGroups = await commands.handle(const QueryRequest(
        store: 'tasks',
        spec: QuerySpecData(
          orGroups: [
            [
              QueryConditionData('title', QueryConditionOp.eq, value: 'match'),
              QueryConditionData('title', QueryConditionOp.eq, value: 'other'),
            ],
          ],
          limit: 10,
        ),
      ));
      expect((orGroups as QueryRowsResult).items, hasLength(2));

      // Empirical lowering contract: successive orWhere groups intersect
      // down to an empty result here, and a group whose members are all
      // non-eq contributes NO predicate at all (unfiltered).
      final twoGroups = await commands.handle(const QueryRequest(
        store: 'tasks',
        spec: QuerySpecData(
          orGroups: [
            [QueryConditionData('title', QueryConditionOp.eq, value: 'match')],
            [QueryConditionData('title', QueryConditionOp.eq, value: 'other')],
          ],
          limit: 10,
        ),
      ));
      expect((twoGroups as QueryRowsResult).items, isEmpty);

      // The or-group lowering only carries `eq` members: a non-eq member is
      // REJECTED with a typed error — silently dropping it would widen the
      // group (the filtered-query-becomes-unfiltered class). Multi-operator
      // OR filters go through the structured predicate tree.
      await expectLater(
        commands.handle(const QueryRequest(
          store: 'tasks',
          spec: QuerySpecData(
            orGroups: [
              [QueryConditionData('priority', QueryConditionOp.gt, value: 5)],
            ],
            limit: 10,
          ),
        )),
        throwsA(isA<ValidationException>()),
      );

      final predicate = await commands.handle(const QueryRequest(
        store: 'tasks',
        spec: QuerySpecData(
          predicate: AnySpecData([
            LeafSpecData(QueryConditionData('title', QueryConditionOp.eq,
                value: 'match')),
            LeafSpecData(
                QueryConditionData('priority', QueryConditionOp.gt, value: 5)),
          ]),
          limit: 10,
        ),
      ));
      expect((predicate as QueryRowsResult).items, hasLength(2));
    });

    test('projection and scopes read through the same lowering', () async {
      final projected = await commands.handle(const QueryRequest(
        store: 'tasks',
        spec: QuerySpecData(
          select: ['title'],
          includeArchived: true,
          limit: 10,
        ),
      ));
      final projectedRows = (projected as QueryRowsResult).items;
      expect(projectedRows, hasLength(3));
      expect(projectedRows.first.keys, isNot(contains('priority')),
          reason: 'select projects the returned columns');
    });

    test('search honors limits and all-mode', () async {
      final limited = await commands.handle(const SearchRequest(
        store: 'tasks',
        spec: SearchSpecData(term: 'match', limit: 5),
      ));
      expect((limited as SearchHitsResult).hits, hasLength(1));

      final everything = await commands.handle(const SearchRequest(
        store: 'tasks',
        spec: SearchSpecData(term: 'match', all: true),
      ));
      expect((everything as SearchHitsResult).hits, hasLength(1));
    });
  });

  group('file download window controls', () {
    test('crediting an unknown stream fails typed', () async {
      await expectLater(
        commands.handle(const FileCreditRequest(stream: 'nope', bytes: 10)),
        throwsStateError,
      );
    });

    test('closing a stream is an idempotent ok', () async {
      expect(
        await commands.handle(const FileCloseRequest(stream: 'never-opened')),
        isA<OkResult>(),
      );
      expect(
        await commands.handle(const FileCloseRequest(stream: 'never-opened')),
        isA<OkResult>(),
      );
    });

    test('an open download streams chunks then a terminal event', () async {
      final col = db.collection('tasks');
      const id = 'sid000000000009';
      await col.put({'id': id, 'title': 'with-file'});
      await db.files.attach(
        store: 'tasks',
        recordId: id,
        bytes: Stream.value([1, 2, 3, 4, 5]),
        allowVolatileBlobs: true,
      );

      final events = <Event>[];
      final sub = commands.events.listen(events.add);
      addTearDown(sub.cancel);

      final opened =
          await commands.handle(FileOpenRequest(store: 'tasks', recordId: id));
      final streamId = (opened as FileOpenResult).stream;
      expect(streamId, isNotEmpty);

      final deadline = DateTime.now().add(const Duration(seconds: 5));
      while (DateTime.now().isBefore(deadline) &&
          !events.any((e) => e is FileChunkEvent && e.last)) {
        await Future<void>.delayed(const Duration(milliseconds: 10));
      }
      final chunks = events.whereType<FileChunkEvent>().toList();
      expect(chunks, isNotEmpty);
      expect(chunks.any((e) => e.last), isTrue,
          reason: 'the download must end with a terminal chunk event');
      final bytes = [
        for (final c in chunks.where((c) => c.chunk.isNotEmpty)) ...c.chunk,
      ];
      expect(bytes, [1, 2, 3, 4, 5]);

      // The stream is finished; closing is still an ok.
      expect(
        await commands.handle(FileCloseRequest(stream: streamId)),
        isA<OkResult>(),
      );
    });
  });

  group('session-bound mutation vocabulary', () {
    test('every mutation variant routes through the transaction session',
        () async {
      final col = db.collection('tasks');
      final a = 'sid00000000000a';
      final b = 'sid00000000000b';
      await col.put({'id': a, 'title': 'pre-a'});
      await col.put({'id': b, 'title': 'pre-b'});

      // One short session per variant: each begin/mutate/commit cycle pins
      // that the variant reaches MutationService through the session.
      Future<void> inSession(Future<Result> Function(String s) body) async {
        final begun = await begin();
        await body(begun.session);
        await commands.handle(TransactionCommitRequest(session: begun.session));
      }

      await inSession(
          (s) => mutate(s, MutationUpsert({'id': a, 'title': 'up'})));
      await inSession((s) => mutate(
          s,
          MutationPutAll([
            {'id': 'sid00000000000c', 'title': 'new-c'},
          ])));
      await inSession((s) => mutate(
          s,
          MutationUpsertAll([
            {'id': b, 'done': true},
          ])));
      await inSession((s) => mutate(s, MutationPatch(b, {'priority': 3})));
      await inSession((s) => mutate(
          s,
          MutationPatchAll({
            a: {'priority': 4},
          })));
      await inSession((s) => mutate(s, MutationArchive(b)));
      await inSession((s) => mutate(s, MutationRestore(b)));
      await inSession((s) => mutate(s, MutationPurge(b)));

      expect((await col.get(a))!['priority'], 4);
      expect((await col.get(a))!['title'], 'up');
      expect((await col.get('sid00000000000c'))!['title'], 'new-c');
      expect(await col.get(b), isNull);
    });

    test('a session-less mutation still routes through the collection',
        () async {
      await commands.handle(const MutateRequest(
        store: 'tasks',
        mutation: MutationUpsert({'id': 'sid00000000000d', 'title': 'direct'}),
      ));
      expect((await db.collection('tasks').get('sid00000000000d'))!['title'],
          'direct');
    });
  });

  group('open registration over the contract', () {
    test('a fingerprint mismatch on re-registration is rejected', () async {
      final result = await commands.handle(OpenRequest(
        stores: [Tasks.store.compiledSchema.toJson()],
        manifestFingerprints: const {},
      ));
      expect(result, isA<OkResult>(),
          reason: 're-opening the identical schema is a no-op success');

      // A drifted definition under the same name cannot slip through.
      final drifted = CollectionSchema<Object?>(
        name: 'tasks',
        version: 1,
        fields: [
          Field.text('title', required: true),
          Field.int('sneaky'),
        ],
      );
      await expectLater(
        commands.handle(OpenRequest(
          stores: [drifted.toJson()],
          manifestFingerprints: const {},
        )),
        throwsA(isA<SchemaRegistrationError>()),
      );
    });

    test('a wrong expected fingerprint is rejected before answering ok',
        () async {
      final drifted = CollectionSchema<Object?>(
        name: 'other-store',
        version: 1,
        fields: [Field.text('x')],
      );
      await expectLater(
        commands.handle(OpenRequest(
          stores: [drifted.toJson()],
          manifestFingerprints: {'other-store': 'mismatched'},
        )),
        throwsA(isA<SchemaRegistrationError>()),
      );
    });
  });

  group('watch lifecycle', () {
    test('watch_one emits a snapshot on change and cancel stops it', () async {
      final col = db.collection('tasks');
      await col.put({'id': 'sid00000000000e', 'title': 'watched'});

      final started = await commands
          .handle(const WatchOneRequest(store: 'tasks', id: 'sid00000000000e'));
      final subscription = (started as WatchStartedResult).subscription;

      final events = <Event>[];
      final sub = commands.events.listen(events.add);
      addTearDown(sub.cancel);
      await col.patch('sid00000000000e', {'title': 'watched-2'});
      final deadline = DateTime.now().add(const Duration(seconds: 5));
      while (DateTime.now().isBefore(deadline) && events.isEmpty) {
        await Future<void>.delayed(const Duration(milliseconds: 10));
      }
      expect(events.whereType<WatchSnapshot>(), isNotEmpty);

      await commands.handle(WatchCancelRequest(subscription: subscription));
      await col.patch('sid00000000000e', {'title': 'watched-3'});
      await Future<void>.delayed(const Duration(milliseconds: 80));
      final after = events.whereType<WatchSnapshot>().length;
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events.whereType<WatchSnapshot>().length, after,
          reason: 'a cancelled watch stops emitting');
    });

    test('cancelling an unknown subscription is an ok', () async {
      expect(
        await commands.handle(const WatchCancelRequest(subscription: 'ghost')),
        isA<OkResult>(),
      );
    });
  });
}
