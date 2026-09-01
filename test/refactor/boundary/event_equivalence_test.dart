import 'dart:async';

import 'package:localpocket/src/internal/raw_surface.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';

/// Coarse and detailed change
/// feeds are not identical) and Rule 7 (events are committed facts).
///
/// One internal committed fact must feed BOTH consumers: the coarse
/// watch-invalidation feed (ChangeSet → watchers/cache) and the detailed
/// typed record events. These tests pin their equivalence on the native
/// runtime: for every committed mutation both fire, for the same store/id,
/// and a savepoint rollback leaks NEITHER.
void main() {
  late LocalPocket pocket;
  late Collection col;
  final emissions = <Map<String, List<Map<String, Object?>>>>[];

  setUp(() async {
    pocket = await openPocket();
    col = pocket.collection('widgets');
  });
  tearDown(() => pocket.close());

  Future<void> pump() async {
    for (var i = 0; i < 8; i++) {
      await Future<void>.delayed(Duration.zero);
    }
    await Future<void>.delayed(const Duration(milliseconds: 30));
  }

  test('every committed mutation feeds both the coarse and detailed feeds',
      () async {
    final recordEvents = <RecordChangeEvent>[];
    final sub = col.events.listen(recordEvents.add);
    addTearDown(sub.cancel);

    final watchSnapshots = emissions.length;
    final watchSub = col
        .query()
        .where('name', eq: 'dual')
        .limit(50)
        .watch()
        .listen((rows) => emissions.add({'dual': rows}));
    addTearDown(watchSub.cancel);
    await pump();

    final id = generateRecordId();
    await col.put(record(name: 'dual', qty: 1, id: id));
    await pump();

    // Detailed feed: one create event for this record.
    final mine = recordEvents
        .where((e) => e.id == id && e.action == ChangeAction.create);
    expect(mine, isNotEmpty,
        reason: 'detailed feed carries the committed fact');
    expect(mine.single.store, 'widgets');
    expect(mine.single.isLocal, isTrue);

    // Coarse feed: the watch refreshed for the same committed fact.
    await _waitFor(
      () =>
          emissions.length > watchSnapshots &&
          emissions.last['dual']!.any((r) => r['id'] == id),
      reason: 'coarse invalidation reflects the same committed fact',
    );
  });

  test('a rolled-back savepoint leaks neither feed (Rule 7)', () async {
    final recordEvents = <RecordChangeEvent>[];
    final sub = col.events.listen(recordEvents.add);
    addTearDown(sub.cancel);
    await pump();
    recordEvents.clear();

    final watchSub = col
        .query()
        .where('name', eq: 'ghost')
        .limit(50)
        .watch()
        .listen((rows) => emissions.add({'ghost': rows}));
    addTearDown(watchSub.cancel);
    await pump();
    emissions.clear();

    await pocket.transaction((tx) async {
      try {
        await tx.transaction((nested) async {
          await nested.collection('widgets').put(record(name: 'ghost'));
          throw StateError('rollback');
        });
      } on StateError {
        // expected
      }
      // Committed work after the rollback.
      await tx.collection('widgets').put(record(name: 'real'));
    });
    await pump();

    expect(
      recordEvents.where((e) => e.newRecord?['name'] == 'ghost'),
      isEmpty,
      reason: 'no record event may leak from a rolled-back savepoint',
    );
    expect(
      emissions.expand((m) => m.values).expand((rows) => rows).where(
            (r) => r['name'] == 'ghost',
          ),
      isEmpty,
      reason: 'no watch snapshot may leak from a rolled-back savepoint',
    );
    expect(
      recordEvents.where((e) => e.newRecord?['name'] == 'real'),
      isNotEmpty,
      reason: 'the committed sibling still emits',
    );
  });

  test('record event fields equal the committed row state', () async {
    final recordEvents = <RecordChangeEvent>[];
    final sub = col.events.listen(recordEvents.add);
    addTearDown(sub.cancel);

    final id = generateRecordId();
    await col.put(record(name: 'payload', qty: 5, id: id));
    await col.put(record(name: 'payload', qty: 6, id: id));
    await pump();

    final updates = recordEvents
        .where((e) => e.id == id && e.action == ChangeAction.update);
    expect(updates, hasLength(1));
    expect(updates.single.oldRecord?['qty'], 5);
    expect(updates.single.newRecord?['qty'], 6);
    expect(updates.single.changedFields, contains('qty'));
    // The coarse feed cannot carry old/new values — but both feeds agree on
    // store/id/origin/action for the same committed fact.
    expect(updates.single.store, 'widgets');
    expect(updates.single.origin, ChangeOrigin.local);
  });
}

Future<void> _waitFor(
  bool Function() predicate, {
  Duration timeout = const Duration(seconds: 5),
  String reason = 'condition',
}) async {
  final deadline = DateTime.now().add(timeout);
  while (DateTime.now().isBefore(deadline)) {
    if (predicate()) return;
    await Future<void>.delayed(const Duration(milliseconds: 10));
  }
  fail('Timed out waiting for: $reason');
}
