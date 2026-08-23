import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

/// P2.6 opt-in group-commit coalescing window:
///  - mutations submitted within the window share ONE SQLite transaction,
///  - `db.read()` during the window flushes the pending group early
///    (read-your-writes + FIFO, no waiting out the window),
///  - the default (zero) window keeps the end-of-turn behavior.
void main() {
  group('group commit window', () {
    test('bursts within the window share one transaction', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await LocalPocket.open(
        path: t.path,
        stores: [widgetsSchema()],
        groupCommitWindow: const Duration(milliseconds: 50),
      );
      addTearDown(pocket.close);

      final f1 = pocket.transaction(
          (tx) => tx.collection('widgets').put(record(id: generateRecordId(), name: 'a')));
      final f2 = pocket.transaction(
          (tx) => tx.collection('widgets').put(record(id: generateRecordId(), name: 'b')));
      await f1;
      await f2;

      expect(pocket.perf.groupCommits, 1,
          reason: 'both mutations must share one commit');
      expect(pocket.perf.groupCommitMembers, 2);
      expect(await pocket.collection('widgets').query().count(), 2);
    });

    test('a read during the window flushes the pending group early', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await LocalPocket.open(
        path: t.path,
        stores: [widgetsSchema()],
        groupCommitWindow: const Duration(seconds: 2),
      );
      addTearDown(pocket.close);

      final id = generateRecordId();
      final sw = Stopwatch()..start();
      final write = pocket.transaction((tx) =>
          tx.collection('widgets').put(record(id: id, name: 'x', qty: 1)));
      // A queued read while the window is open must flush the group instead
      // of blocking for the full 2s window.
      final name =
          await pocket.read((tx) async => (await tx.collection('widgets').get(id))?['name']);
      await write;
      sw.stop();

      expect(name, 'x', reason: 'read-your-writes must hold during the window');
      expect(sw.elapsed, lessThan(const Duration(seconds: 1)),
          reason: 'the read must flush the pending group, not wait out the window');
    });

    test('default zero window keeps end-of-turn coalescing', () async {
      final t = await tempDbPath();
      addTearDown(t.cleanup);
      final pocket = await LocalPocket.open(
        path: t.path,
        stores: [widgetsSchema()],
      );
      addTearDown(pocket.close);

      final f1 = pocket.transaction(
          (tx) => tx.collection('widgets').put(record(id: generateRecordId(), name: 'a')));
      final f2 = pocket.transaction(
          (tx) => tx.collection('widgets').put(record(id: generateRecordId(), name: 'b')));
      await f1;
      await f2;

      expect(pocket.perf.groupCommits, 1,
          reason: 'same-turn submissions still coalesce with no window');
      expect(await pocket.collection('widgets').query().count(), 2);
    });
  });
}
