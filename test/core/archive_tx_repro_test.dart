import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../support/helpers.dart';

void main() {
  test('archive inside transaction finds a record put outside', () async {
    final pocket = await openPocket(stores: [
      CollectionSchema<Object?>(
        name: 'parity',
        version: 1,
        fields: [
          Field.text('name'),
          Field.int('score'),
          Field.bool('active'),
          Field.json('metadata'),
        ],
      ),
    ]);
    final col = pocket.collection('parity');
    final id = generateRecordId();
    await col.put({'id': id, 'name': 'Bob', 'score': 7, 'active': false});

    // Point read outside tx.
    expect(await col.get(id), isNotNull);

    // Transaction-scoped read.
    await pocket.transaction((tx) async {
      expect(await tx.collection('parity').get(id), isNotNull);
    });

    // Archive inside a transaction.
    await pocket.transaction((tx) async {
      await tx.collection('parity').archive(id);
    });

    expect((await col.query().all().fetch()).items, isEmpty);

    await pocket.close();
  });
}
