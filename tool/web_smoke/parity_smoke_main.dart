import 'dart:js_interop';
import 'dart:js_interop_unsafe';

import 'package:localpocket/src/core/ids.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/facade.dart';

Future<void> main() async {
  var stage = 'start';
  void report(String status, [String? detail]) {
    globalContext.setProperty('__parity_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty('__parity_smoke_detail'.toJS, detail.toJS);
    }
  }

  void mark(String next) {
    stage = next;
    globalContext.setProperty('__parity_smoke_progress'.toJS, next.toJS);
  }

  try {
    final schema = CollectionSchema<Object?>(
      name: 'parity',
      version: 1,
      fields: [
        Field.text('name', required: true),
        Field.int('score'),
        Field.bool('active'),
        Field.json('metadata'),
      ],
    );
    mark('open');
    final db = await LocalPocket.open(
        path: 'parity_db_${DateTime.now().microsecondsSinceEpoch}',
        stores: [schema]);
    final col = db.collection('parity');

    // CRUD and typed values
    mark('put');
    final firstId = generateRecordId();
    final secondId = generateRecordId();
    await col.put({
      'id': firstId,
      'name': 'Alice',
      'score': 42,
      'active': true,
      'metadata': {'source': 'web'},
    });
    await col.put({
      'id': secondId,
      'name': 'Bob',
      'score': 7,
      'active': false,
      'metadata': {'source': 'web'},
    });

    final alice = await col.get(firstId);
    if (alice?['name'] != 'Alice' ||
        alice?['score'] != 42 ||
        alice?['active'] != true) {
      throw StateError('typed CRUD parity failed: $alice');
    }
    // Query, pagination, count, aggregate
    mark('query');
    final page = await col.query().where('active', eq: true).limit(10).fetch();
    if (page.items.length != 1 || page.items.first['name'] != 'Alice') {
      throw StateError('query parity failed: ${page.items}');
    }
    if (await col.query().count() != 2) {
      throw StateError('count parity failed');
    }
    if (await col.query().sum('score') != 49.0) {
      throw StateError('aggregate parity failed');
    }

    // Archive on an unsynced row vanishes it (keepUnsyncedArchives=false),
    // matching the documented native contract.
    mark('archive');
    await col.archive(secondId);
    if (await col.get(secondId) != null) {
      throw StateError('archive parity failed: unsynced row must vanish');
    }
    // Restore of a vanished row is a typed error.
    var restoreRejected = false;
    try {
      await col.restore(secondId);
    } catch (_) {
      restoreRejected = true;
    }
    if (!restoreRejected) {
      throw StateError('restore parity failed: vanished row must throw');
    }
    // Purge the surviving row.
    await col.purge(firstId);
    if (await col.get(firstId) != null) {
      throw StateError('purge parity failed');
    }

    // Interactive transaction and rollback
    mark('rollback');
    final rollbackId = generateRecordId();
    try {
      await db.transaction((tx) async {
        await tx.collection('parity').put({
          'id': rollbackId,
          'name': 'Rolled Back',
          'score': 1,
          'active': true,
        });
        throw StateError('intentional rollback');
      });
    } catch (_) {}
    if (await col.get(rollbackId) != null) {
      throw StateError('rollback parity failed');
    }

    await db.close();
    mark('done');
    report('passed',
        'CRUD, typed values, queries, aggregate, archive/restore/purge, transaction rollback passed.');
  } catch (e, stack) {
    report('failed', 'stage=$stage\n$e\n$stack');
  }
}
