import 'package:localpocket/src/kernel/ids.dart';
import 'package:localpocket/src/kernel/local_pocket.dart';
import 'package:localpocket/src/kernel/transaction_coordinator.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Durability-class handling: `DurabilityClass.normal` skips the
/// `PRAGMA synchronous=FULL` toggle for every mutation API, and the
/// per-mutation `durability:` argument is ignored inside a transaction (the
/// enclosing `transaction(durability:)` governs).
void main() {
  group('durability normal skips the synchronous toggle', () {
    Future<(LocalPocket, StatementRecorder)> openFileBacked() async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final recorder = StatementRecorder();
      // keepUnsyncedArchives keeps rows around on archive so restore has a
      // target regardless of sync state.
      final pocket = await openPocket(
          path: t.path,
          stores: [widgetsSchema(keepUnsyncedArchives: true)],
          testHooks: TestHooks(onExecute: recorder.record));
      addTearDown(pocket.close);
      // open() itself applies synchronous=NORMAL; ignore that baseline.
      recorder.statements.clear();
      return (pocket, recorder);
    }

    List<String> pragmaToggles(StatementRecorder recorder) =>
        recorder.statements
            .where((s) => s.contains('PRAGMA synchronous'))
            .toList();

    test('put with normal durability never toggles synchronous', () async {
      final (pocket, recorder) = await openFileBacked();
      await pocket.collection('widgets').put(
          record(id: generateRecordId(), name: 'x'),
          durability: DurabilityClass.normal);
      expect(pragmaToggles(recorder), isEmpty,
          reason: 'normal must not raise synchronous to FULL');
    });

    test('patch with normal durability never toggles synchronous', () async {
      final (pocket, recorder) = await openFileBacked();
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'x'));
      recorder.statements.clear();
      await pocket
          .collection('widgets')
          .patch(id, {'qty': 1}, durability: DurabilityClass.normal);
      expect(pragmaToggles(recorder), isEmpty);
    });

    test('putAll with normal durability never toggles synchronous', () async {
      final (pocket, recorder) = await openFileBacked();
      await pocket.collection('widgets').putAll([
        record(id: generateRecordId(), name: 'a'),
        record(id: generateRecordId(), name: 'b')
      ], durability: DurabilityClass.normal);
      expect(pragmaToggles(recorder), isEmpty);
    });

    test('archive with normal durability never toggles synchronous', () async {
      final (pocket, recorder) = await openFileBacked();
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'x'));
      recorder.statements.clear();
      await pocket
          .collection('widgets')
          .archive(id, durability: DurabilityClass.normal);
      expect(pragmaToggles(recorder), isEmpty);
    });

    test('restore with normal durability never toggles synchronous', () async {
      final (pocket, recorder) = await openFileBacked();
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'x'));
      await pocket.collection('widgets').archive(id);
      recorder.statements.clear();
      await pocket
          .collection('widgets')
          .restore(id, durability: DurabilityClass.normal);
      expect(pragmaToggles(recorder), isEmpty);
    });

    test('purge with normal durability never toggles synchronous', () async {
      final (pocket, recorder) = await openFileBacked();
      final id = generateRecordId();
      await pocket.collection('widgets').put(record(id: id, name: 'x'));
      recorder.statements.clear();
      await pocket
          .collection('widgets')
          .purge(id, durability: DurabilityClass.normal);
      expect(pragmaToggles(recorder), isEmpty);
    });

    test('normal durability leaves synchronous=NORMAL for the next write',
        () async {
      final (pocket, recorder) = await openFileBacked();
      final id = generateRecordId();
      await pocket
          .collection('widgets')
          .put(record(id: id, name: 'x'), durability: DurabilityClass.normal);
      recorder.statements.clear();
      // A subsequent normal write must not need to restore NORMAL: the
      // synchronous state was never raised, so no toggle pair appears.
      await pocket
          .collection('widgets')
          .patch(id, {'qty': 1}, durability: DurabilityClass.normal);
      expect(pragmaToggles(recorder), isEmpty);
    });

    test('full durability on the same connection restores NORMAL afterwards',
        () async {
      final (pocket, recorder) = await openFileBacked();
      await pocket.collection('widgets').put(
          record(id: generateRecordId(), name: 'x'),
          durability: DurabilityClass.full);
      final toggles = pragmaToggles(recorder);
      expect(toggles, contains('PRAGMA synchronous=FULL'));
      expect(toggles, contains('PRAGMA synchronous=NORMAL'));
      expect(toggles.indexOf('PRAGMA synchronous=FULL'),
          lessThan(toggles.lastIndexOf('PRAGMA synchronous=NORMAL')),
          reason: 'FULL is raised for the write and NORMAL restored after');
    });
  });

  group('durability argument inside a transaction', () {
    test('is ignored: inner full does not toggle when the outer is normal',
        () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final recorder = StatementRecorder();
      final pocket = await openPocket(
          path: t.path, testHooks: TestHooks(onExecute: recorder.record));
      addTearDown(pocket.close);
      recorder.statements.clear();

      await pocket.transaction(
        (tx) async {
          await tx.collection('widgets').put(
              record(id: generateRecordId(), name: 'x'),
              durability: DurabilityClass.full);
        },
        durability: DurabilityClass.normal,
      );

      expect(
          recorder.statements
              .where((s) => s.contains('PRAGMA synchronous'))
              .toList(),
          isEmpty,
          reason: 'the per-mutation durability inside a Tx is ignored; the '
              'outer normal transaction governs');
    });

    test(
        'is ignored: the outer full transaction still toggles for an inner '
        'normal write', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final recorder = StatementRecorder();
      final pocket = await openPocket(
          path: t.path, testHooks: TestHooks(onExecute: recorder.record));
      addTearDown(pocket.close);
      recorder.statements.clear();

      await pocket.transaction((tx) async {
        await tx.collection('widgets').put(
            record(id: generateRecordId(), name: 'x'),
            durability: DurabilityClass.normal);
      }, durability: DurabilityClass.full);

      final toggles = recorder.statements
          .where((s) => s.contains('PRAGMA synchronous'))
          .toList();
      expect(toggles, contains('PRAGMA synchronous=FULL'),
          reason: 'the outer transaction default (full) governs the write');
    });
  });
}
