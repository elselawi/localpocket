import 'dart:typed_data';

import 'package:localpocket/src/contract/contract.dart';
import 'package:localpocket/src/kernel/sync/sync_backend.dart'
    show
        SyncError,
        TransientNetworkError,
        ServerBusyError,
        ServerError,
        AuthError,
        ForbiddenError,
        NotFoundError,
        PayloadError,
        ProtocolError,
        DuplicateIdError,
        BatchFailedError,
        RemoteVersionConflict;
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

    test('every request variant has a sample', () {
      // The complete tag manifest: the decoder switch is compiler-exhaustive
      // over the sealed request family, so a new variant must land here AND in
      // requestSamples — a missing sample breaks runtime correlation for every
      // client that sends it.
      const allTags = [
        'open', 'capabilities', 'health', 'close', //
        'get', 'rows', 'mutate', 'query', 'count', 'countDistinct', 'distinct',
        'ids', 'aggregate', 'explain', 'search',
        'txBegin', 'txCommit', 'txRollback', 'txSavepoint', 'txRollbackTo',
        'txRelease',
        'watchOne', 'watch', 'watchCancel',
        'analyze', 'walCheckpoint', 'vacuum', 'pruneOutbox', 'compact',
        'runMaintenance',
        'conflictsList', 'conflictGet', 'conflictsResolve',
        'conflictsAcceptLocal', 'conflictsAcceptRemote', 'conflictsWatch',
        'fileBeginUpload', 'fileChunk', 'fileFinish', 'fileClose', 'fileAbort',
        'filesList', 'fileOpen', 'fileDownload', 'fileCredit', 'fileRemove',
        'fileGc',
        'fileEnforceStorageCap', 'fileStorageStatus',
        'syncStart', 'syncStop', 'syncNow', 'syncPause', 'syncResume',
        'syncUpdateAuth', 'syncSetConnectivity', 'syncStatus',
      ];
      final sampled = ContractCodec.requestSamples.map((r) => r.tag).toSet();
      for (final tag in allTags) {
        expect(sampled, contains(tag),
            reason: 'request "$tag" has no requestSamples entry — sends of it '
                'fail correlation on every runtime');
      }
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
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'txSavepoint',
          'payload': encodeWireValue({'txId': 7}),
        }),
        throwsA(isA<WireException>()),
        reason: 'a savepoint without a name fails typed',
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'watchCancel',
          'payload': encodeWireValue({'subscription': 7}),
        }),
        throwsA(isA<WireException>()),
        reason: 'a watch cancel without a string subscription fails typed',
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'compact',
          'payload': encodeWireValue({'aggressive': 'very'}),
        }),
        throwsA(isA<WireException>()),
        reason: 'a compact without a bool flag fails typed',
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'runMaintenance',
          'payload': encodeWireValue({'preserveBlobCacheMs': 'lots'}),
        }),
        throwsA(isA<WireException>()),
        reason: 'a maintenance run without an int window fails typed',
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'conflictsResolve',
          'payload': encodeWireValue({'conflictId': 7}),
        }),
        throwsA(isA<WireException>()),
        reason: 'a conflict resolve without a string id fails typed',
      );
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'fileEnforceStorageCap',
          'payload': encodeWireValue({'maxTotalBytes': 'big'}),
        }),
        throwsA(isA<WireException>()),
        reason: 'a storage-cap enforcement without an int cap fails typed',
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
      Request<Result> requestFor(String tag) =>
          ContractCodec.requestSamples.singleWhere((r) => r.tag == tag);
      Map<String, Object?> malformed(
              String tag, Map<String, Object?> payload) =>
          {
            'tag': tag,
            'payload': encodeWireValue(payload),
          };
      expect(
        () => ContractCodec.decodeResult(requestFor('watch'), {
          'tag': 'watchStarted',
          'payload': encodeWireValue({'subscription': 7}),
        }),
        throwsA(isA<WireException>()),
        reason: 'a watch start without a string subscription fails typed',
      );
      expect(
        () => ContractCodec.decodeResult(requestFor('pruneOutbox'),
            malformed('pruneOutbox', {'removed': 'many'})),
        throwsA(isA<WireException>()),
        reason: 'a prune report without an int count fails typed',
      );
      expect(
        () => ContractCodec.decodeResult(
            requestFor('compact'), malformed('compact', {'removed': 'many'})),
        throwsA(isA<WireException>()),
        reason: 'a compact report without an int count fails typed',
      );
      expect(
        () => ContractCodec.decodeResult(requestFor('conflictsList'), {
          'tag': 'conflicts',
          'payload': encodeWireValue({'conflicts': 'none'}),
        }),
        throwsA(isA<WireException>()),
        reason: 'a conflicts list without a list fails typed',
      );
      expect(
        () => ContractCodec.decodeResult(requestFor('fileBeginUpload'),
            malformed('fileUploadSession', {'session': 7})),
        throwsA(isA<WireException>()),
        reason: 'an upload session result without a string id fails typed',
      );
      expect(
        () => ContractCodec.decodeResult(requestFor('filesList'), {
          'tag': 'fileRefs',
          'payload': encodeWireValue({'refs': 'none'}),
        }),
        throwsA(isA<WireException>()),
        reason: 'a file refs result without a list fails typed',
      );
      expect(
        () => ContractCodec.decodeResult(
            requestFor('fileOpen'), malformed('fileOpen', {'stream': 7})),
        throwsA(isA<WireException>()),
        reason: 'a file open result without a string stream id fails typed',
      );
      expect(
        () => ContractCodec.decodeResult(requestFor('fileEnforceStorageCap'),
            malformed('fileCap', {'evicted': 'many'})),
        throwsA(isA<WireException>()),
        reason: 'a file cap result without an int count fails typed',
      );
      expect(
        () => ContractCodec.decodeResult(
            requestFor('syncStart'), malformed('syncStart', {'state': 0})),
        throwsA(isA<WireException>()),
        reason: 'a sync start result without a state name fails typed',
      );
      expect(
        () => ContractCodec.decodeResult(requestFor('syncStatus'),
            malformed('syncStatus', {'status': 'bad'})),
        throwsA(isA<WireException>()),
        reason: 'a sync status result without a status map fails typed',
      );
    });

    test('list element failures name the failing index', () {
      const request =
          SearchRequest(store: 's', spec: SearchSpecData(term: 'x'));
      expect(
        () => ContractCodec.decodeResult(
          request,
          {
            'tag': 'searchHits',
            'payload': encodeWireValue({
              'hits': [
                {'store': 's', 'id': 'a', 'score': 1.0},
                'not-a-hit',
              ],
            }),
          },
        ),
        throwsA(isA<WireException>().having(
          (e) => e.message,
          'message',
          contains('hits[1]'),
        )),
        reason: 'AGENTS gotcha: list decode errors name the failing index',
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

    test('committed record payloads are wire-encoded, never re-interpreted',
        () {
      // A user JSON-object may legitimately carry the reserved tag key; the
      // event encode side must escape it exactly like requests/results, so
      // the decode side reconstructs the user's data instead of mistaking
      // it for a tagged wrapper.
      const escapedUserMap = {
        '__lp_t': 'map',
        'v': {'x': 1}
      };
      final at = DateTime.utc(2026, 9, 1, 8, 0);
      final bytes = Uint8List.fromList(const [9, 8, 7]);
      final event = CommittedChange(
        store: 's',
        id: 'abc123',
        origin: ChangeOrigin.local,
        action: ChangeAction.update,
        oldRecord: null,
        newRecord: {
          'id': 'abc123',
          'meta': escapedUserMap,
          'at': at,
          'blob': bytes,
        },
        changedFields: const {'meta'},
      );

      final wire = ContractCodec.encodeEvent(event);
      // The escape survives the encode: the reserved-tag object is wrapped,
      // not treated as already-encoded.
      final payload = wire['payload']! as Map;
      final meta = (payload['newRecord']! as Map)['meta']! as Map;
      expect(meta['__lp_t'], 'map', reason: 'the escape must be wrapped once');

      final decoded = ContractCodec.decodeEvent(wire) as CommittedChange;
      expect(decoded.newRecord!['meta'], escapedUserMap);
      expect(decoded.newRecord!['at'], at);
      expect(decoded.newRecord!['blob'], bytes);
    });

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
      expect(
        () => ContractCodec.decodeEvent({
          'tag': 'watchSnapshot',
          'payload': encodeWireValue({'subscription': 'w1'}),
        }),
        throwsA(isA<WireException>()),
        reason: 'a watch snapshot without an items list fails typed',
      );
      expect(
        () => ContractCodec.decodeEvent({
          'tag': 'conflictsSnapshot',
          'payload': encodeWireValue({'subscription': 'w1'}),
        }),
        throwsA(isA<WireException>()),
        reason: 'a conflicts snapshot without a conflicts list fails typed',
      );
      expect(
        () => ContractCodec.decodeEvent({
          'tag': 'conflictsSnapshot',
          'payload': encodeWireValue({
            'subscription': 'w1',
            'conflicts': ['not-a-conflict'],
          }),
        }),
        throwsA(isA<WireException>()),
        reason: 'a malformed conflict inside the snapshot fails typed',
      );
      expect(
        () => ContractCodec.decodeEvent({
          'tag': 'syncStatusEvent',
          'payload': encodeWireValue({'status': 'bad'}),
        }),
        throwsA(isA<WireException>()),
        reason: 'a sync status event without a status map fails typed',
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

    test('a user map carrying the reserved tag key survives as a map', () {
      const userObject = {
        '__lp_t': 'datetime',
        'v': 1700000000000,
      };
      final decoded =
          decodeWireValue(encodeWireValue({'row': userObject}))! as Map;
      expect(decoded['row'], isA<Map>(),
          reason: 'a user JSON-object shaped like a tag must never be '
              'reconstructed into a DateTime');
      expect((decoded['row'] as Map)['__lp_t'], 'datetime');
      expect((decoded['row'] as Map)['v'], 1700000000000);
    });

    test('non-string map keys on a decode payload fail typed', () {
      // The encode side stringifies keys; a decode payload with non-string
      // keys is foreign or truncated. Silent key-dropping loses data.
      expect(
        () => decodeWireValue(<Object?, Object?>{1: 'a'}),
        throwsA(isA<WireException>()),
      );
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
        RemoteOnlyError('not local'): isA<RemoteOnlyError>(),
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

    test('the unique-constraint colliding value survives the wire', () {
      final decoded = decodeError(encodeError(UniqueConstraintException(
          field: 'qty',
          value: 7,
          message: 'dup'))) as UniqueConstraintException;
      expect(decoded.value, 7);

      // A non-wire-safe value is dropped rather than breaking the error path.
      final dropped = decodeError(encodeError(UniqueConstraintException(
          field: 'blob',
          value: Object(),
          message: 'dup'))) as UniqueConstraintException;
      expect(dropped.value, isNull);

      // A WireException keeps its message without double-labeling.
      final wire = decodeError(encodeError(WireException('bad envelope')))
          as WireException;
      expect(wire.message, 'bad envelope');
    });

    test('sync errors keep their subtype identity across the wire', () {
      final cases = <SyncError>[
        TransientNetworkError('net down'),
        ServerBusyError('3', 'busy'),
        ServerError('srv'),
        AuthError('auth'),
        ForbiddenError('no'),
        NotFoundError('gone'),
        PayloadError('bad'),
        ProtocolError('wire'),
        DuplicateIdError('dup'),
        BatchFailedError('poison'),
        RemoteVersionConflict(message: 'moved'),
      ];
      for (final error in cases) {
        final decoded = decodeError(encodeError(error)) as SyncError;
        expect(decoded.runtimeType, error.runtimeType,
            reason: '${error.runtimeType} lost its identity over the wire');
        expect(decoded.message, error.message);
      }

      // Retry-after rides the details map.
      final busy = decodeError(encodeError(ServerBusyError('7', 'busy')))
          as ServerBusyError;
      expect(busy.retryAfter, '7');
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

    test('standard runtime errors are named; strangers degrade to unknown', () {
      final encoded = encodeError(const FormatException('nope'));
      expect(encoded['type'], 'FormatException');
      // The message rides as the full textual form for getters without a
      // plain message field.
      expect(encoded['message'], contains('nope'));
      // A genuinely unclassified object still degrades to the unknown
      // category and decodes as the wire error type.
      final unknown = encodeError(Object());
      expect(unknown['type'], 'unknown');
      expect(decodeError(unknown), isA<WireException>());
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

    test('a malformed spec field fails typed, never degrades the query', () {
      final base = QuerySpecData(
        where: [QueryConditionData('qty', QueryConditionOp.eq, value: 3)],
        order: [QueryOrderTermData('qty')],
        limit: 10,
        cursor: 'c1',
        select: const ['name'],
      );

      void expectMalformed(String field, Object? value) {
        final payload = base.toJson();
        payload[field] = value;
        expect(
          () => QuerySpecData.fromJson(payload),
          throwsA(isA<WireException>()),
          reason: 'wrong-typed "$field" must fail typed',
        );
      }

      expectMalformed('order', 'qty');
      expectMalformed('limit', 'ten');
      expectMalformed('cursor', 5);
      expectMalformed('select', 'name');
      expectMalformed('all', 'yes');
      expectMalformed('includeHidden', 1);
      expectMalformed('backward', 'back');

      // A non-string select element is rejected, not stringified.
      final badElement = base.toJson();
      badElement['select'] = ['name', 5];
      expect(
        () => QuerySpecData.fromJson(badElement),
        throwsA(isA<WireException>()),
      );

      // Absent optional fields keep their documented defaults.
      final minimal = QuerySpecData.fromJson(QuerySpecData().toJson());
      expect(minimal.order, isEmpty);
      expect(minimal.limit, isNull);
      expect(minimal.select, isNull);
      expect(minimal.all, isFalse);
    });

    test('a non-string element in a required id list fails typed', () {
      expect(
        () => ContractCodec.decodeRequest({
          'tag': 'rows',
          'payload': encodeWireValue({
            'store': 's',
            'ids': ['a', 2],
          }),
        }),
        throwsA(isA<WireException>()),
        reason: 'a non-string ids element fails typed, never a raw cast',
      );
      expect(
        () => ContractCodec.decodeResult(
          const MutateRequest(store: 's', mutation: MutationPut({})),
          {
            'tag': MutationResult.tagValue,
            'payload': encodeWireValue({
              'ids': ['a', true],
            }),
          },
        ),
        throwsA(isA<WireException>()),
      );
    });

    test('a wrong-typed scalar result field fails typed, never coerces', () {
      // Aggregate: a present non-num value must not read as "no rows".
      expect(
        () => ContractCodec.decodeResult(
          const AggregateRequest(
              store: 's',
              fn: AggregateFn.sum,
              field: 'f',
              spec: QuerySpecData()),
          {
            'tag': AggregateResult.tagValue,
            'payload': encodeWireValue({'value': 'lots'}),
          },
        ),
        throwsA(isA<WireException>()),
      );
      // Capability bools: a present wrong-typed value must not flip meaning.
      expect(
        () => ContractCodec.decodeResult(
          const CapabilitiesRequest(),
          {
            'tag': CapabilitiesResult.tagValue,
            'payload': encodeWireValue({
              'sqliteVersion': '3.0.0',
              'durable': 'yes',
            }),
          },
        ),
        throwsA(isA<WireException>()),
      );
      // Committed-change field sets reject non-string entries.
      expect(
        () => ContractCodec.decodeEvent({
          'tag': CommittedChange.tagValue,
          'payload': {
            'store': 's',
            'id': 'i',
            'origin': 'local',
            'action': 'put',
            'changedFields': ['name', 7],
          },
        }),
        throwsA(isA<WireException>()),
      );
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
