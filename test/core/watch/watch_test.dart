import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Watch tests.
void main() {
  group('watch', () {
    test('initial emission is current result', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      await col.put(record(id: generateRecordId(), name: 'a'));

      final events = <int>[];
      final sub = col.query().limit(10).watch().listen((items) {
        events.add(items.length);
      });
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(events, [1], reason: 'initial emission reflects current data');
    });

    test('500 writes in 16ms yield one requery one emit', () async {
      final recorder = StatementRecorder();
      final hooks = TestHooks(onQuery: recorder.record);
      final pocket = await openPocket(testHooks: hooks);
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');

      final events = <int>[];
      final sub = col.query().limit(500).watch().listen((items) {
        events.add(items.length);
      });
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(events, [0]);

      recorder.statements.clear();
      await pocket.transaction((tx) async {
        for (var i = 0; i < 500; i++) {
          await tx
              .collection('widgets')
              .put(record(id: generateRecordId(), name: 'n$i'));
        }
      });
      await Future<void>.delayed(const Duration(milliseconds: 100));

      expect(recorder.countSelectsLike('widgets'), 1,
          reason: 'a 500-write burst yields exactly one requery');
      expect(events, [0, 500], reason: 'initial + one coalesced emission');
    });

    test('identical snapshot does not emit', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final a = generateRecordId();

      final events = <int>[];
      final sub = col
          .query()
          .where('name', eq: 'x')
          .limit(10)
          .watch()
          .listen((items) => events.add(items.length));
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));

      await col.put(record(id: a, name: 'x'));
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events, [0, 1]);

      // A write that does not change the snapshot must not emit.
      await col.put(record(id: generateRecordId(), name: 'y'));
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events, [0, 1],
          reason: 'identical snapshot digest suppresses emit');
    });

    test('rollback emits nothing', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');

      final events = <int>[];
      final sub = col.query().limit(10).watch().listen((items) {
        events.add(items.length);
      });
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));

      await expectLater(pocket.transaction((tx) async {
        await tx
            .collection('widgets')
            .put(record(id: generateRecordId(), name: 'x'));
        throw StateError('rollback');
      }), throwsA(isA<StateError>()));
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events, [0], reason: 'rolled-back writes emit nothing');
    });

    test('watch one emits only for its id', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final a = generateRecordId();
      final b = generateRecordId();
      await col.put(record(id: a, name: 'a'));

      final events = <String?>[];
      final sub =
          col.watchOne(a).listen((r) => events.add(r?['name'] as String?));
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));
      expect(events, ['a']);

      await col.put(record(id: b, name: 'b'));
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events, ['a'], reason: 'other ids do not trigger this watchOne');

      await col.patch(a, {'name': 'a2'});
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events, ['a', 'a2']);
    });

    test('cancellation stops requeries', () async {
      final recorder = StatementRecorder();
      final hooks = TestHooks(onQuery: recorder.record);
      final pocket = await openPocket(testHooks: hooks);
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');

      final sub = col.query().limit(10).watch().listen((_) {});
      await Future<void>.delayed(const Duration(milliseconds: 60));
      recorder.statements.clear();

      await sub.cancel();
      await col.put(record(id: generateRecordId(), name: 'x'));
      await Future<void>.delayed(const Duration(milliseconds: 100));

      expect(recorder.countSelectsLike('widgets'), 0,
          reason: 'cancelled watchers never requery');
    });

    test('slow consumer skips intermediate snapshots', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');

      final events = <int>[];
      final sub = col.query().limit(100).watch().listen((items) async {
        events.add(items.length);
        // Slow consumer.
        await Future<void>.delayed(const Duration(milliseconds: 30));
      });
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));

      for (var i = 0; i < 10; i++) {
        await col.put(record(id: generateRecordId(), name: 'n$i'));
      }
      await Future<void>.delayed(const Duration(milliseconds: 250));

      expect(events, isNotEmpty);
      expect(events.length, lessThanOrEqualTo(3),
          reason: 'intermediate snapshots are skipped (latest-wins)');
      expect(events.last, 10);
    });

    test('external change hook triggers requery', () async {
      final pocket = await openPocket();
      addTearDown(pocket.close);
      final col = pocket.collection('widgets');
      final id = generateRecordId();

      final events = <int>[];
      final sub = col.query().limit(10).watch().listen((items) {
        events.add(items.length);
      });
      addTearDown(sub.cancel);
      await Future<void>.delayed(const Duration(milliseconds: 60));

      await col.put(record(id: id, name: 'x'));
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events, [0, 1]);

      // External change with unchanged data: requery runs, digest suppresses emit.
      pocket.notifyExternalChange({'widgets'});
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events, [0, 1]);

      // External change that actually modified data: re-emission happens.
      await pocket.db
          .execute("UPDATE widgets SET name = 'z' WHERE id = ?", [id]);
      pocket.notifyExternalChange({'widgets'});
      await Future<void>.delayed(const Duration(milliseconds: 80));
      expect(events.length, 3,
          reason: 'external change triggered a re-emission');
      expect(events.last, 1);
    });
  });
}
