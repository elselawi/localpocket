import 'dart:typed_data';

import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

void main() {
  test('Worker controller request parsing and dispatch', () {
    // 1. Verify schema serialization through WebRequest
    final schema = CollectionSchema<Object?>(
      name: 'notes',
      version: 1,
      fields: [
        Field.text('title', required: true),
        Field.int('priority'),
        Field.bool('done'),
      ],
    );

    final openArgs = {
      'stores': [schema.toJson()],
      'maxDocBytes': 1000000,
      'destructiveBackup': true,
    };

    final openReq = WebRequest(
      version: webProtocolVersion,
      requestId: 1,
      op: WireOp.open,
      args: openArgs,
    );

    expect(openReq.op, WireOp.open);
    expect(openReq.version, webProtocolVersion);
    expect(openReq.args['stores'], isList);

    // 2. Verify the typed contract envelope round-trips through WebRequest
    //    JSON like every other op.
    final mutateReq = WebRequest(
      version: webProtocolVersion,
      requestId: 2,
      op: WireOp.contractRequest,
      args: {
        'request': contract.ContractCodec.encodeRequest(
          contract.MutateRequest(
            store: 'notes',
            mutation: contract.MutationPut({
              'id': 'note1',
              'title': 'Hello',
              'priority': 1,
              'done': false,
            }),
          ),
        ),
      },
    );

    final mutateDecoded = WebRequest.fromJson(mutateReq.toJson());
    expect(mutateDecoded.op, WireOp.contractRequest);
    final decodedRequest = contract.ContractCodec.decodeRequest(
        (mutateDecoded.args['request']! as Map).cast<String, Object?>());
    expect(decodedRequest.tag, 'mutate');
    expect(
        ((decodedRequest as contract.MutateRequest).mutation
                as contract.MutationPut)
            .record,
        {
          'id': 'note1',
          'title': 'Hello',
          'priority': 1,
          'done': false,
        });

    // 3. Verify a sync envelope round-trips
    final syncNowReq = WebRequest(
      version: webProtocolVersion,
      requestId: 3,
      op: WireOp.syncNow,
      args: {'store': 'notes'},
    );

    final syncNowDecoded = WebRequest.fromJson(syncNowReq.toJson());
    expect(syncNowDecoded.op, WireOp.syncNow);
    expect(syncNowDecoded.args['store'], 'notes');

    // 4. Verify a file contract request round-trips through WebRequest JSON,
    //    binary chunk included (the same envelope the facade's files surface
    //    sends).
    final chunkReq = WebRequest(
      version: webProtocolVersion,
      requestId: 4,
      op: WireOp.contractRequest,
      args: {
        'request': contract.ContractCodec.encodeRequest(
          contract.FileChunkRequest(
            session: 'u1',
            chunk: Uint8List.fromList(List<int>.generate(1024, (i) => i % 256)),
          ),
        ),
      },
    );
    final chunkDecoded = WebRequest.fromJson(chunkReq.toJson());
    final decodedChunk = contract.ContractCodec.decodeRequest(
        (chunkDecoded.args['request']! as Map).cast<String, Object?>());
    expect(decodedChunk, isA<contract.FileChunkRequest>());
    expect((decodedChunk as contract.FileChunkRequest).chunk, hasLength(1024));
  });
}
