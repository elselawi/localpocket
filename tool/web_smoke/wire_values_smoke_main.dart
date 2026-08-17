import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:typed_data';

import 'package:localpocket/src/core/canonical_json.dart';
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/facade.dart';

Future<void> main() async {
  void report(String status, [String? detail]) {
    globalContext.setProperty('__wire_values_smoke'.toJS, status.toJS);
    if (detail != null) {
      globalContext.setProperty('__wire_values_smoke_detail'.toJS, detail.toJS);
    }
  }

  try {
    final huge = BigInt.parse('123456789012345678901234567890123456789');
    final decodedHuge = decodeWireValue(encodeWireValue(huge));
    if (decodedHuge is! BigInt ||
        decodedHuge + BigInt.one != huge + BigInt.one ||
        decodedHuge.compareTo(huge) != 0) {
      throw StateError('Browser BigInt identity/arithmetic/comparison failed.');
    }

    final specialValues = <Object?>[
      -0.0,
      double.nan,
      double.infinity,
      double.negativeInfinity,
      '',
      'Unicode ✓ שלום 世界',
      <Object?>[],
      <String, Object?>{
        '1': 'string key',
        '1.0': 'decimal key',
        'nested': [
          null,
          true,
          {'deep': 'value'}
        ],
      },
    ];
    for (final value in specialValues) {
      final roundTrip = decodeWireValue(encodeWireValue(value));
      if (value is double && value.isNaN) {
        if (roundTrip is! double || !roundTrip.isNaN) {
          throw StateError('NaN wire round-trip failed.');
        }
      } else if (value is double && value.isInfinite) {
        if (roundTrip != value) {
          throw StateError(
              'Infinity wire round-trip failed: $value -> $roundTrip');
        }
      } else if (value is double && value == 0.0 && value.isNegative) {
        if (roundTrip is! double || roundTrip != 0.0 || !roundTrip.isNegative) {
          throw StateError('Negative zero wire round-trip failed.');
        }
      } else if ('$roundTrip' != '$value') {
        throw StateError('Wire value round-trip failed: $value -> $roundTrip');
      }
    }

    final schema = CollectionSchema<Object?>(
      name: 'wire_values',
      version: 1,
      fields: [
        Field.text('name', required: true),
        Field.json('payload'),
        Field.int('rank'),
      ],
    );
    final pocket = await LocalPocket.open(
      path: 'wire_values_${DateTime.now().microsecondsSinceEpoch}',
      stores: [schema],
    );
    try {
      final collection = pocket.collection('wire_values');
      final largeText = 'payload-✓-' * 20000;
      final nested = <String, Object?>{
        'unicode': '✓ שלום 世界',
        'numbers': List<Object?>.generate(2000, (i) => i),
        'deep': {
          'a': {
            'b': [
              'c',
              {'d': true}
            ]
          }
        },
      };
      await collection.put({
        'id': 'wirevalue000001',
        'name': largeText,
        'payload': nested,
        'rank': 1,
      });
      final record = await collection.get('wirevalue000001');
      if (record?['name'] != largeText ||
          canonicalize(record?['payload']) != canonicalize(nested)) {
        throw StateError('Large nested record round-trip failed.');
      }

      final projected = await collection
          .query()
          .select(['id', 'name', 'payload'])
          .limit(5)
          .fetch();
      if (projected.items.length != 1 ||
          projected.items.single['name'] != largeText ||
          projected.items.single['payload'] is! Map) {
        throw StateError('Large projected query payload failed.');
      }

      await pocket.transaction((tx) async {
        final txCollection = tx.collection('wire_values');
        await txCollection.put({
          'id': 'wirevalue000002',
          'name': 'transaction ✓',
          'payload': nested,
          'rank': 2,
        });
        final txPage = await tx.query('wire_values').limit(10).fetch();
        if (txPage.items.length != 2) {
          throw StateError('Large transaction response failed.');
        }
      });

      final bytes = Uint8List.fromList(
          List<int>.generate(700000, (index) => (index * 31) & 0xff));
      final original = List<int>.from(bytes);
      final uploaded = await pocket.filesUpload(
        store: 'wire_values',
        recordId: 'wirevalue000001',
        bytes: bytes,
        field: 'payload',
        name: 'wire-values.bin',
      );
      if (uploaded['hash'] is! String || bytes.length != original.length) {
        throw StateError('Upload mutated source length or returned no hash.');
      }
      for (var i = 0; i < original.length; i++) {
        if (bytes[i] != original[i]) {
          throw StateError('Upload mutated source bytes at offset $i.');
        }
      }
      final readBack = await pocket.filesOpen(
        store: 'wire_values',
        recordId: 'wirevalue000001',
        field: 'payload',
      );
      if (readBack.length != original.length) {
        throw StateError('Byte length changed across upload/download.');
      }
      for (var i = 0; i < original.length; i++) {
        if (readBack[i] != original[i]) {
          throw StateError('Byte mismatch at offset $i.');
        }
      }
    } finally {
      await pocket.close();
    }

    report('passed');
  } catch (error, stack) {
    report('failed', '$error\n$stack');
  }
}
