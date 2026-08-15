import 'package:localpocket/localpocket.dart';
import 'package:localpocket/sync.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';
import 'engine/engine_helpers.dart';

/// remote normalization input matrix.
///
/// Every declared field kind is checked for missing required values, nulls,
/// wrong types, invalid enums/refs, JSON scalars, `jsonList` objects, and
/// malformed ids. One bad record must quarantine without stalling valid ones.
void main() {
  final schema = widgetsSchema();

  RemoteRecord rec(Map<String, Object?> data, {String? id, String? updated}) {
    final rid = id ?? generateRecordId();
    return RemoteRecord(
      id: rid,
      store: 'widgets',
      updated: updated ?? '2026-01-01 00:00:00.000Z',
      data: data,
    );
  }

  String? errorOf(Map<String, Object?> data, {String? id}) {
    final n = normalizeSingleRemote(schema, rec(data, id: id));
    return n.error;
  }

  group('remote normalization input matrix', () {
    test('missing required field is a MapFailure', () {
      expect(errorOf({'qty': 1}), isNotNull, reason: 'name is required');
      expect(errorOf({}), isNotNull);
      // Non-required fields may be absent.
      expect(errorOf({'name': 'x'}), isNull);
    });

    test('null values are accepted and preserved as null', () {
      final n = normalizeSingleRemote(
          schema,
          rec({
            'name': 'x',
            'qty': null,
            'price': null,
            'active': null,
            'made_on': null,
            'size': null,
            'meta': null,
            'tags': null,
            'owner_id': null,
          }));
      expect(n.isSuccess, isTrue);
      expect(n.logical!['qty'], isNull);
      expect(n.logical!['size'], isNull);
    });

    test('wrong types are MapFailures for every kind', () {
      expect(errorOf({'name': 5}), contains('name'));
      expect(errorOf({'name': 'x', 'qty': '5'}), contains('qty'));
      expect(errorOf({'name': 'x', 'price': '1.5'}), contains('price'));
      expect(errorOf({'name': 'x', 'active': 1}), contains('active'));
      expect(errorOf({'name': 'x', 'made_on': '2026'}), contains('made_on'));
      expect(errorOf({'name': 'x', 'size': 5}), contains('size'));
      expect(errorOf({'name': 'x', 'owner_id': 5}), contains('owner_id'));
      expect(errorOf({'name': 'x', 'meta': 42}), contains('meta'));
      expect(errorOf({'name': 'x', 'tags': 'not-a-list'}), contains('tags'));
    });

    test('invalid enum values are MapFailures', () {
      expect(errorOf({'name': 'x', 'size': 'XL'}), contains('size'));
      for (final s in ['S', 'M', 'L']) {
        expect(errorOf({'name': 'x', 'size': s}), isNull, reason: s);
      }
    });

    test('ref fields accept any string (no membership validation)', () {
      final n = normalizeSingleRemote(
          schema,
          rec({
            'name': 'x',
            'owner_id': 'some-reference-id',
          }));
      expect(n.isSuccess, isTrue);
      expect(n.logical!['owner_id'], 'some-reference-id');
    });

    test('jsonList objects are rejected (matches local validation)', () {
      final err = errorOf({
        'name': 'x',
        'tags': {'a': 1}
      });
      expect(err, isNotNull, reason: 'a jsonList must be an array');
      expect(err, contains('tags'));
      // A list is fine.
      expect(
          errorOf({
            'name': 'x',
            'tags': ['a', 'b']
          }),
          isNull);
      // A json field accepts both maps and lists.
      expect(
          errorOf({
            'name': 'x',
            'meta': {'a': 1}
          }),
          isNull);
      expect(
          errorOf({
            'name': 'x',
            'meta': [1, 2]
          }),
          isNull);
    });

    test('malformed data.id is a MapFailure', () {
      final bad = errorOf({'id': 'other-id', 'name': 'x'});
      expect(bad, isNotNull);
      expect(bad, contains('data.id'));
      expect(bad, contains('does not match'));
    });

    test('missing data.id falls back to the top-level id', () {
      final id = generateRecordId();
      final n = normalizeSingleRemote(schema, rec({'name': 'x'}, id: id));
      expect(n.isSuccess, isTrue);
      expect(n.logical!['id'], id);
    });

    test('unknown extra keys are preserved on the logical doc', () {
      final n = normalizeSingleRemote(
          schema,
          rec({
            'name': 'x',
            'custom_field': {'nested': true},
            'other': [1, 2, 3],
          }));
      expect(n.isSuccess, isTrue);
      expect(n.logical!['custom_field'], {'nested': true});
      expect(n.logical!['other'], [1, 2, 3]);
    });

    test('archived is normalized to a boolean', () {
      expect(
          normalizeSingleRemote(schema, rec({'name': 'x', 'archived': true}))
              .logical!['archived'],
          true);
      expect(
          normalizeSingleRemote(schema, rec({'name': 'x', 'archived': false}))
              .logical!['archived'],
          false);
      // archived omitted -> false (never null).
      expect(
          normalizeSingleRemote(schema, rec({'name': 'x'}))
              .logical!['archived'],
          false);
    });

    test('timestamp is not part of normalization (cursor concern)', () {
      // normalizeRemote only reads `data`; a malformed `updated` does not
      // affect normalization (timestamp validity is the pull cursor's job).
      final n = normalizeSingleRemote(
          schema, rec({'name': 'x'}, updated: 'not-a-timestamp'));
      expect(n.isSuccess, isTrue);
    });

    test('a structurally invalid payload becomes a quarantine error', () {
      // An unsupported extra value (not JSON-serializable) must not throw out
      // of normalization — it is captured as a per-record error.
      final n = normalizeSingleRemote(
          schema,
          rec({
            'name': 'x',
            'bad_value': DateTime.utc(2026),
          }));
      expect(n.isSuccess, isFalse);
      expect(n.error, isNotNull);
    });

    test('one bad record quarantines without stalling valid records', () async {
      final h = await EngineHarness.create();
      addTearDown(h.close);
      final ok1 =
          h.mock.seed(store: 'widgets', data: {'name': 'ok1', 'qty': 1});
      final bad = h.mock
          .seed(store: 'widgets', data: {'qty': 1}); // missing required name
      final ok2 =
          h.mock.seed(store: 'widgets', data: {'name': 'ok2', 'qty': 2});

      await h.engine.syncNow();

      expect(await h.pocket.collection('widgets').query().count(), 2,
          reason: 'valid records applied despite the poison record');
      expect(await h.pocket.collection('widgets').get(ok1), isNotNull);
      expect(await h.pocket.collection('widgets').get(ok2), isNotNull);

      final dl = await h.pocket.db.query('lp_dead_letter',
          where: 'kind = ?', whereArgs: ['map_failure']);
      expect(dl.single['record_id'], bad);
      final sr = await h.pocket.outbox.readSyncRow(h.pocket.db, 'widgets', bad);
      expect(sr!.syncState, SyncState.quarantine);
    });
  });
}
