import 'dart:typed_data';

import 'package:localpocket/src/contract/contract.dart';
import 'package:test/test.dart';

void main() {
  group('stable tags', () {
    test('every request tag is unique', () {
      final tags = ContractCodec.requestSamples.map((r) => r.tag).toSet();
      expect(tags.length, ContractCodec.requestSamples.length,
          reason: 'duplicate tags would let one command be decoded as another');
    });

    test('every request declares the result family that answers it', () {
      final resultTags = ContractCodec.resultSamples.map((r) => r.tag).toSet();
      for (final request in ContractCodec.requestSamples) {
        expect(resultTags, contains(request.resultTag),
            reason: '${request.tag} names an unknown result family');
      }
    });

    test('request/result tag pairs are consistent', () {
      // Two requests may share a result family, but one request tag must map
      // to exactly one result tag.
      final map = ContractCodec.requestResultTags;
      expect(map.length, ContractCodec.requestSamples.length);
    });
  });

  group('request round-trips', () {
    for (final sample in ContractCodec.requestSamples) {
      test('round-trips ${sample.tag}', () {
        final wire = ContractCodec.encodeRequest(sample);
        final decoded = ContractCodec.decodeRequest(wire);
        expect(decoded.tag, sample.tag);
        expect(decoded.toJson(), sample.toJson());
      });
    }

    test('decoding an unknown tag fails with a typed wire error', () {
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'timeTravel',
          'payload': <String, Object?>{},
        }),
        throwsA(isA<WireException>()),
      );
    });

    test('decoding with a missing payload fails', () {
      expect(
        () => ContractCodec.decodeRequest({'tag': 'health'}),
        throwsA(isA<WireException>()),
      );
    });

    test('decoding with malformed typed fields fails', () {
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'get',
          'payload': encodeWireValue({'store': 3, 'id': 'x'}),
        }),
        throwsA(isA<WireException>()),
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'txBegin',
          'payload': encodeWireValue({'readOnly': 'yes'}),
        }),
        throwsA(isA<WireException>()),
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'query',
          'payload': encodeWireValue({
            'store': 's',
            'spec': {
              'where': [
                {'field': 'qty', 'op': 'bogus'},
              ],
            },
          }),
        }),
        throwsA(isA<WireException>()),
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'distinct',
          'payload': encodeWireValue({
            'store': 's',
            'field': 'f',
            'spec': {
              'where': [
                {'field': 'qty', 'op': 'bogus'},
              ],
            },
          }),
        }),
        throwsA(isA<WireException>()),
        reason: 'a malformed condition inside a distinct spec fails typed',
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'distinct',
          'payload': encodeWireValue({
            'store': 's',
            'field': 'f',
            'spec': 'not-a-map',
          }),
        }),
        throwsA(isA<WireException>()),
        reason: 'a non-map distinct spec fails typed',
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'mutate',
          'payload': encodeWireValue({
            'store': 's',
            'mutation': {'kind': 'explode', 'id': 'x'},
          }),
        }),
        throwsA(isA<WireException>()),
        reason: 'an unknown mutation kind fails typed',
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'mutate',
          'payload': encodeWireValue({
            'store': 's',
            'mutation': {'kind': 'put', 'record': 'not-a-map'},
          }),
        }),
        throwsA(isA<WireException>()),
        reason: 'a non-map mutation record fails typed',
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'mutate',
          'payload': encodeWireValue({
            'store': 's',
            'mutation': {'kind': 'patch', 'changes': <String, Object?>{}},
          }),
        }),
        throwsA(isA<WireException>()),
        reason: 'a patch without an id fails typed',
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'fileBeginUpload',
          'payload': encodeWireValue({'store': 's', 'recordId': 'r'}),
        }),
        throwsA(isA<WireException>()),
        reason: 'an upload begin without a declared size fails typed',
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'fileChunk',
          'payload': encodeWireValue({'session': 'u1', 'chunk': 'not-bytes'}),
        }),
        throwsA(isA<WireException>()),
        reason: 'an upload chunk without binary bytes fails typed',
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'fileCredit',
          'payload': encodeWireValue({'stream': 'f1', 'bytes': 'many'}),
        }),
        throwsA(isA<WireException>()),
        reason: 'a download credit without a byte count fails typed',
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'fileGc',
          'payload': encodeWireValue({'blobGraceMs': 0}),
        }),
        throwsA(isA<WireException>()),
        reason: 'a gc request without both grace windows fails typed',
      );
    });
  });

  group('result round-trips with correlation', () {
    test('each result decodes against its matching request', () {
      // Build one request per result family and check the pair decodes.
      final byResultTag = {
        for (final r in ContractCodec.requestSamples) r.resultTag: r,
      };
      for (final sample in ContractCodec.resultSamples) {
        final request = byResultTag[sample.tag];
        expect(request, isNotNull,
            reason: 'no request sample produces ${sample.tag}');
        final decoded = ContractCodec.decodeResult(
          request!,
          ContractCodec.encodeResult(sample),
        );
        expect(decoded.tag, sample.tag);
      }
    });

    test('a result for the wrong operation is rejected', () {
      const request = GetRequest(store: 's', id: 'i');
      expect(
        () => ContractCodec.decodeResult(
          request,
          ContractCodec.encodeResult(
              const HealthResult(ok: true, sqliteVersion: '3')),
        ),
        throwsA(isA<WireException>()),
      );
    });

    test('malformed result payloads fail', () {
      const request = CountRequest(store: 's', spec: QuerySpecData());
      expect(
        () => ContractCodec.decodeResult(
          request,
          {
            'tag': 'count',
            'payload': encodeWireValue({'value': 'many'})
          },
        ),
        throwsA(isA<WireException>()),
      );
    });
  });

  group('event round-trips', () {
    for (final sample in ContractCodec.eventSamples) {
      test('round-trips ${sample.tag}', () {
        final decoded =
            ContractCodec.decodeEvent(ContractCodec.encodeEvent(sample));
        expect(decoded.tag, sample.tag);
        expect(decoded.toJson(), sample.toJson());
      });
    }

    test('unknown events fail', () {
      expect(
        () => ContractCodec.decodeEvent({'tag': 'mystery', 'payload': {}}),
        throwsA(isA<WireException>()),
      );
    });

    test('decoding with malformed typed fields fails', () {
      expect(
        () => ContractCodec.decodeEvent({
          'tag': 'committedChange',
          'payload': encodeWireValue({
            'store': 's',
            'id': 'i',
            'origin': 'sideways',
            'action': 'create',
          }),
        }),
        throwsA(isA<WireException>()),
        reason: 'an unknown change origin fails typed',
      );
      expect(
        () => ContractCodec.decodeEvent({
          'tag': 'committedChange',
          'payload': encodeWireValue({
            'store': 's',
            'id': 'i',
            'origin': 'local',
            'action': 'teleport',
          }),
        }),
        throwsA(isA<WireException>()),
        reason: 'an unknown change action fails typed',
      );
      expect(
        () => ContractCodec.decodeEvent({
          'tag': 'committedChange',
          'payload': encodeWireValue({
            'store': 's',
            'origin': 'local',
            'action': 'create',
          }),
        }),
        throwsA(isA<WireException>()),
        reason: 'a missing record id fails typed',
      );
      expect(
        () => ContractCodec.decodeEvent({
          'tag': 'fileChunk',
          'payload': encodeWireValue({
            'stream': 'f1',
            'chunk': 'not-bytes',
            'last': true,
          }),
        }),
        throwsA(isA<WireException>()),
        reason: 'a file chunk event without binary bytes fails typed',
      );
    });
  });

  group('wire values', () {
    test('datetime and bytes round-trip exactly', () {
      final at = DateTime.utc(2026, 8, 30, 12, 34, 56);
      final bytes = Uint8List.fromList(const [1, 2, 3, 255]);
      final decoded = decodeWireValue(encodeWireValue([at, bytes]))! as List;
      expect(decoded[0], at);
      expect(decoded[1], bytes);
    });

    test('nested maps get string keys and deep decoding', () {
      final decoded = decodeWireValue(encodeWireValue({
        'a': {
          'b': 1,
          'c': [true, null]
        },
      }))! as Map;
      expect(decoded['a']['b'], 1);
      expect(decoded['a']['c'], [true, null]);
    });

    test('non-representable values are rejected', () {
      expect(
        () => encodeWireValue(Object()),
        throwsA(isA<WireException>()),
      );
    });
  });

  group('error codec', () {
    test('typed kernel errors keep their identity', () {
      final encoded = encodeError(StorageError('disk full'));
      final decoded = decodeError(encoded);
      expect(decoded,
          isA<StorageError>().having((e) => e.message, 'message', 'disk full'));
    });

    test('validation errors keep their field detail', () {
      final decoded =
          decodeError(encodeError(ValidationException('bad', field: 'qty')));
      expect(decoded, isA<ValidationException>());
      expect((decoded as ValidationException).field, 'qty');
    });

    test('projection misses keep their field detail', () {
      final decoded =
          decodeError(encodeError(FieldNotSelectedError('priority')));
      expect(
        decoded,
        isA<FieldNotSelectedError>()
            .having((e) => e.field, 'field', 'priority'),
      );
    });

    test('unknown errors degrade to a typed wire error', () {
      final decoded = decodeError(encodeError(const FormatException('nope')));
      expect(decoded, isA<WireException>());
    });

    test('every typed kernel error keeps its identity across the wire', () {
      final cases = <Object, Matcher>{
        ValidationException('bad'): isA<ValidationException>(),
        UniqueConstraintException(field: 'qty', message: 'dup'):
            isA<UniqueConstraintException>(),
        NotNullConstraintException(field: 'title', message: 'null'):
            isA<NotNullConstraintException>(),
        CheckConstraintException('check'): isA<CheckConstraintException>(),
        PrimaryKeyConstraintException('pk'):
            isA<PrimaryKeyConstraintException>(),
        ForeignKeyConstraintException('fk'):
            isA<ForeignKeyConstraintException>(),
        UnsupportedSchemaFeatureError('nope'):
            isA<UnsupportedSchemaFeatureError>(),
        FtsUnavailableError('no fts'): isA<FtsUnavailableError>(),
        SchemaRegistrationError('bad schema'): isA<SchemaRegistrationError>(),
        SchemaTooNewError('too new'): isA<SchemaTooNewError>(),
        StorageError('disk full'): isA<StorageError>(),
        RecordNotFoundException('gone'): isA<RecordNotFoundException>(),
        StaleCursorError('stale'): isA<StaleCursorError>(),
        MissingLimitError('limit'): isA<MissingLimitError>(),
        ConflictBlockedError('blocked'): isA<ConflictBlockedError>(),
        DestructiveMigrationRefusedError('refused'):
            isA<DestructiveMigrationRefusedError>(),
        ReadOnlyTxError('read only'): isA<ReadOnlyTxError>(),
        TypedStoreMismatchError('mismatch'): isA<TypedStoreMismatchError>(),
      };
      cases.forEach((error, matcher) {
        final decoded = decodeError(encodeError(error));
        expect(decoded, matcher,
            reason: '${error.runtimeType} lost its identity over the wire');
        expect((decoded as LocalPocketError).message,
            (error as LocalPocketError).message);
      });
    });

    test('constraint field details survive the wire', () {
      final unique =
          decodeError(encodeError(UniqueConstraintException(field: 'qty')))
              as UniqueConstraintException;
      expect(unique.field, 'qty');

      final notNull =
          decodeError(encodeError(NotNullConstraintException(field: 'title')))
              as NotNullConstraintException;
      expect(notNull.field, 'title');
    });

    test('plain errors carry no details key', () {
      final encoded = encodeError(StorageError('disk full'));
      expect(encoded.containsKey('details'), isFalse);
    });

    test('runtime error categories are named, never raw', () {
      expect(
          decodeError(encodeError(WireException('w'))), isA<WireException>());
      expect(decodeError(encodeError(StateError('s'))), isA<StateError>());
      final decodedArg =
          decodeError(encodeError(ArgumentError('a'))) as ArgumentError;
      expect(decodedArg.message, 'a');
      final decodedRange =
          decodeError(encodeError(RangeError('r'))) as RangeError;
      expect(decodedRange.message, 'r');
    });

    test('a truly unknown object degrades with a category name', () {
      final encoded = encodeError(const FormatException('nope'));
      expect(encoded['type'], 'unknown');
      final decoded = decodeError(encoded) as WireException;
      expect(decoded.message, contains('nope'));
    });

    test('decoding a wire error without a message yields an empty message', () {
      final decoded = decodeError({'type': 'StorageError'}) as StorageError;
      expect(decoded.message, '');
    });
  });

  group('malformed payload hardening', () {
    ConflictData validConflict() => ConflictData(
          store: 's',
          recordId: 'i',
          base: {'id': 'i'},
          local: {'id': 'i'},
          remote: {'id': 'i'},
          dirtyLocal: const {'a'},
          dirtyRemote: const {'b'},
          detectedAt: 7,
        );

    test('a conflict with a missing or wrong-typed required field fails typed',
        () {
      for (final field in ['store', 'recordId', 'base', 'detectedAt']) {
        final payload = validConflict().toJson()..remove(field);
        expect(
          () => ConflictData.fromJson(payload),
          throwsA(isA<WireException>()),
          reason: 'missing "$field" fails typed',
        );
        final wrongTyped = validConflict().toJson();
        wrongTyped[field] = field == 'detectedAt' ? 'seven' : 42;
        expect(
          () => ConflictData.fromJson(wrongTyped),
          throwsA(isA<WireException>()),
          reason: 'wrong-typed "$field" fails typed',
        );
      }
      final badDirty = validConflict().toJson();
      badDirty['dirtyLocal'] = ['a', 3];
      expect(
        () => ConflictData.fromJson(badDirty),
        throwsA(isA<WireException>()),
        reason: 'a non-string dirty-field entry fails typed',
      );
    });

    test('a file ref with a wrong-typed optional field fails typed', () {
      expect(
        () => FileRefData.fromJson({
          'refId': 'r',
          'store': 's',
          'recordId': 'i',
          'field': 'blob',
          'hash': 'h',
          'state': 'synced',
          'nextRetryAt': 'soon',
        }),
        throwsA(isA<WireException>()),
        reason: 'a wrong-typed nextRetryAt fails typed, never defaults',
      );
      expect(
        () => FileRefData.fromJson({
          'refId': 'r',
          'store': 's',
          'recordId': 'i',
          'field': 'blob',
          'hash': 9,
          'state': 'synced',
        }),
        throwsA(isA<WireException>()),
        reason: 'a wrong-typed hash fails typed',
      );
    });

    test('a wrong-typed status timestamp fails typed, never reads as never',
        () {
      final payload = SyncStatusData.closed.toJson();
      payload['lastSyncAt'] = 12345;
      expect(
        () => SyncStatusData.fromJson(payload),
        throwsA(isA<WireException>()),
        reason: 'a present non-DateTime lastSyncAt is rejected',
      );
      expect(SyncStatusData.fromJson(SyncStatusData.closed.toJson()).lastSyncAt,
          isNull,
          reason: 'an absent timestamp legitimately means never');
    });

    test('a wrong-typed query predicate fails typed, never becomes unfiltered',
        () {
      final payload = QuerySpecData().toJson();
      payload['predicate'] = 7;
      expect(
        () => QuerySpecData.fromJson(payload),
        throwsA(isA<WireException>()),
      );
      // Absent and null stay legal: no predicate means no filter.
      expect(QuerySpecData.fromJson(payload..remove('predicate')).predicate,
          isNull);
    });

    test('a wrong-typed tx durability fails typed, never silently normal', () {
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'txBegin',
          'payload': {'readOnly': false, 'durability': 123},
        }),
        throwsA(isA<WireException>()),
      );
      final decoded = ContractCodec.decodeRequest({
        'tag': 'txBegin',
        'payload': {'readOnly': false, 'durability': 'full'},
      });
      expect((decoded as TransactionBeginRequest).durability,
          TransactionDurability.full);
      // Absent keeps the documented default.
      final defaulted = ContractCodec.decodeRequest({
        'tag': 'txBegin',
        'payload': {'readOnly': false},
      }) as TransactionBeginRequest;
      expect(defaulted.durability, TransactionDurability.normal);
    });

    test('a malformed element in a list payload names its index', () {
      try {
        ContractCodec.decodeResult(
            const RowsRequest(store: 's', ids: ['a', 'b', 'c']), {
          'tag': RowsResult.tagValue,
          'payload': encodeWireValue({
            'rows': [
              {'id': 'a'},
              {'id': 'b'},
              'not-a-map',
            ],
          }),
        });
        fail('expected a WireException');
      } on WireException catch (e) {
        expect(e.message, contains('rows[2]'));
      }
    });

    test('every event sample family round-trips, conflicts included', () {
      final tags = ContractCodec.eventSamples.map((e) => e.tag).toSet();
      expect(tags, contains(ConflictsSnapshot.tagValue));
    });
  });
}
