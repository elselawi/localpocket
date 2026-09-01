import 'dart:async';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:localpocket/src/core/write_queue.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

/// Transaction / durability / concurrency contract pins
///
/// - the `PRAGMA synchronous=FULL` toggle is finally-guarded: a transaction
///   that throws mid-body or a savepoint rollback still restores NORMAL;
/// - a read queued while a FULL-durability transaction is open is serialized
///   behind it, so it never observes the temporary setting and never sees the
///   uncommitted write;
/// - the single-writer queue is strictly FIFO: a steady stream of submissions
///   never reorders or starves an earlier action.
void main() {
  group('synchronous is restored on the error path', () {
    Future<(LocalPocket, StatementRecorder)> openFileBacked() async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final recorder = StatementRecorder();
      final pocket = await openPocket(
          path: t.path, testHooks: TestHooks(onExecute: recorder.record));
      addTearDown(pocket.close);
      // open() itself applies synchronous=NORMAL; ignore that baseline.
      recorder.statements.clear();
      return (pocket, recorder);
    }

    List<String> pragmaToggles(StatementRecorder recorder) =>
        recorder.statements
            .where((s) => s.contains('PRAGMA synchronous'))
            .toList();

    test('a transaction that throws mid-body restores NORMAL', () async {
      final (pocket, recorder) = await openFileBacked();

      await expectLater(
        pocket.transaction((tx) async {
          await tx
              .collection('widgets')
              .put(record(id: generateRecordId(), name: 'x'));
          throw StateError('mid-body boom');
        }, durability: DurabilityClass.full),
        throwsA(isA<StateError>()),
      );

      final toggles = pragmaToggles(recorder);
      expect(toggles, contains('PRAGMA synchronous=FULL'),
          reason: 'FULL was raised for the write');
      expect(toggles, contains('PRAGMA synchronous=NORMAL'),
          reason: 'the finally-guard restored NORMAL despite the throw');
      expect(toggles.indexOf('PRAGMA synchronous=FULL'),
          lessThan(toggles.lastIndexOf('PRAGMA synchronous=NORMAL')));

      // The live connection really is back to NORMAL (1), not FULL (2).
      final pragma = await pocket.db.rawQuery('PRAGMA synchronous');
      expect(pragma.single.values.single, 1,
          reason: 'the live pragma is NORMAL after the failed transaction');

      // The cached state is not stuck: a later write raises FULL again.
      recorder.statements.clear();
      await pocket.collection('widgets').put(
          record(id: generateRecordId(), name: 'y'),
          durability: DurabilityClass.full);
      expect(pragmaToggles(recorder), contains('PRAGMA synchronous=FULL'),
          reason: 'the synchronous cache is not stuck after the failure');
    });

    test('a savepoint rollback restores NORMAL after the outer commit',
        () async {
      final (pocket, recorder) = await openFileBacked();

      await pocket.transaction((tx) async {
        await tx
            .collection('widgets')
            .put(record(id: generateRecordId(), name: 'outer'));
        // The nested savepoint rolls back; the outer transaction continues.
        await expectLater(
          tx.transaction((tx2) async {
            await tx2
                .collection('widgets')
                .put(record(id: generateRecordId(), name: 'inner'));
            throw StateError('savepoint boom');
          }),
          throwsA(isA<StateError>()),
        );
      }, durability: DurabilityClass.full);

      final toggles = pragmaToggles(recorder);
      expect(toggles, contains('PRAGMA synchronous=FULL'),
          reason: 'the outer transaction ran under FULL');
      expect(toggles, contains('PRAGMA synchronous=NORMAL'),
          reason: 'NORMAL was restored after the (savepoint-rolled-back) '
              'transaction completed');
      expect(toggles.indexOf('PRAGMA synchronous=FULL'),
          lessThan(toggles.lastIndexOf('PRAGMA synchronous=NORMAL')));
      final pragma = await pocket.db.rawQuery('PRAGMA synchronous');
      expect(pragma.single.values.single, 1,
          reason: 'the live pragma is NORMAL after the savepoint rollback');
    });
  });

  group('no leaked FULL-synchronous interleaving', () {
    test(
        'a read queued during an open FULL-durability transaction never '
        'observes the temporary setting', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final recorder = StatementRecorder();
      final pocket = await openPocket(
          path: t.path, testHooks: TestHooks(onExecute: recorder.record));
      addTearDown(pocket.close);
      final committed = generateRecordId();
      await pocket
          .collection('widgets')
          .put(record(id: committed, name: 'committed'));
      recorder.statements.clear();

      final gate = Completer<void>();
      final uncommitted = generateRecordId();
      final txF = pocket.transaction((tx) async {
        await tx
            .collection('widgets')
            .put(record(id: uncommitted, name: 'uncommitted'));
        // Hold the FULL-durability transaction open: the connection is under
        // `synchronous=FULL` and the write is uncommitted.
        await gate.future;
      }, durability: DurabilityClass.full);
      await Future<void>.delayed(const Duration(milliseconds: 50));
      expect(
          recorder.statements
              .where((s) => s.contains('PRAGMA synchronous=FULL')),
          isNotEmpty,
          reason: 'the temporary FULL setting is live while the tx is open');

      // A read submitted while the write transaction is open is serialized
      // behind it through the single-writer queue: it cannot run until the
      // write commits and NORMAL is restored, so it can never observe the
      // temporary setting nor the uncommitted write.
      var readRan = false;
      final readF = pocket.read((tx) async {
        readRan = true;
        expect(
            recorder.statements
                .where((s) => s.contains('PRAGMA synchronous=NORMAL')),
            isNotEmpty,
            reason: 'the interleaved read runs only after NORMAL is restored');
        return tx.collection('widgets').get(committed);
      });
      await Future<void>.delayed(const Duration(milliseconds: 50));
      expect(readRan, isFalse,
          reason: 'the read is queued behind the open write transaction');

      gate.complete();
      await txF;
      final seen = await readF;
      expect(readRan, isTrue);
      expect(seen!['name'], 'committed',
          reason: 'the read observes the last committed value only — it never '
              'ran during the open write transaction (the write commits '
              'before the queued read runs)');

      // No leak: the connection is NORMAL after everything.
      final pragma = await pocket.db.rawQuery('PRAGMA synchronous');
      expect(pragma.single.values.single, 1,
          reason: 'the temporary FULL setting was fully restored');
    });
  });

  group('single-writer queue is FIFO', () {
    test('actions run strictly in submission order', () async {
      final q = WriteQueue();
      final order = <int>[];
      final futures = <Future<void>>[];
      for (var i = 0; i < 20; i++) {
        futures.add(q.run(() async {
          // Varying latency would expose reordering if the queue did not
          // serialize strictly in submission order.
          await Future<void>.delayed(Duration(milliseconds: 1 + i % 3));
          order.add(i);
        }));
      }
      await Future.wait(futures);
      expect(order, List.generate(20, (i) => i),
          reason: 'FIFO: no reordering under mixed latencies');
    });

    test('a steady stream of submissions never starves an earlier action',
        () async {
      final q = WriteQueue();
      final done = <String>[];
      // The first action is slow; the rest are enqueued while it runs.
      final first = q.run(() async {
        await Future<void>.delayed(const Duration(milliseconds: 5));
        done.add('first');
      });
      final late = <Future<void>>[];
      for (var i = 0; i < 10; i++) {
        late.add(q.run(() async => done.add('late-$i')));
      }
      await Future.wait([first, ...late]);

      expect(done, ['first', for (var i = 0; i < 10; i++) 'late-$i'],
          reason: 'each later action runs in order, none starved or skipped');
    });
  });
}
