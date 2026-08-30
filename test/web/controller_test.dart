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

    // 3. Verify a maintenance envelope round-trips
    final analyzeReq = WebRequest(
      version: webProtocolVersion,
      requestId: 3,
      op: WireOp.analyze,
      args: {'store': 'notes'},
    );

    final analyzeDecoded = WebRequest.fromJson(analyzeReq.toJson());
    expect(analyzeDecoded.op, WireOp.analyze);
    expect(analyzeDecoded.args['store'], 'notes');

    // 4. Verify an old-wire watch cancel envelope round-trips (the int-id
    // channel that remains for conflicts watches)
    final watchCancelReq = WebRequest(
      version: webProtocolVersion,
      requestId: 4,
      op: WireOp.watchCancel,
      args: {'watchId': 7},
    );
    expect(watchCancelReq.op, WireOp.watchCancel);
    expect(watchCancelReq.args['watchId'], 7);
  });

  test('file upload protocol envelopes round-trip through WebRequest', () {
    final begin = WebRequest(
      version: webProtocolVersion,
      requestId: 10,
      op: WireOp.fileUploadBegin,
      args: {
        'store': 'tasks',
        'recordId': 'task000000000001',
        'field': 'imgs',
        'name': 'photo.bin',
        'size': 700000,
        'expectedSha256': 'a' * 64,
      },
    );
    final decoded = WebRequest.fromJson(begin.toJson());
    expect(decoded.op, WireOp.fileUploadBegin);
    expect(decoded.args['size'], 700000);
    expect(decoded.args['expectedSha256'], 'a' * 64);

    final chunk = WebRequest(
      version: webProtocolVersion,
      requestId: 11,
      op: WireOp.fileUploadChunk,
      args: {
        'uploadId': 1,
        'chunk': encodeWireValue(
            Uint8List.fromList(List<int>.generate(1024, (i) => i % 256))),
      },
    );
    final chunkDecoded = WebRequest.fromJson(chunk.toJson());
    expect(chunkDecoded.op, WireOp.fileUploadChunk);
    expect(chunkDecoded.args['uploadId'], 1);

    final finish = WebRequest(
      version: webProtocolVersion,
      requestId: 12,
      op: WireOp.fileUploadFinish,
      args: {'uploadId': 1},
    );
    expect(finish.op, WireOp.fileUploadFinish);
  });

  test('file list/open/remove/gc protocol envelopes', () {
    final listReq = WebRequest(
      version: webProtocolVersion,
      requestId: 20,
      op: WireOp.fileList,
      args: {'store': 'tasks', 'recordId': 'task000000000001'},
    );
    expect(listReq.op, WireOp.fileList);

    final openReq = WebRequest(
      version: webProtocolVersion,
      requestId: 21,
      op: WireOp.fileOpen,
      args: {'store': 'tasks', 'recordId': 'task000000000001', 'refId': 'ref1'},
    );
    expect(openReq.op, WireOp.fileOpen);
    expect(openReq.args['refId'], 'ref1');

    final removeReq = WebRequest(
      version: webProtocolVersion,
      requestId: 22,
      op: WireOp.fileRemove,
      args: {'store': 'tasks', 'recordId': 'task000000000001', 'refId': 'ref1'},
    );
    expect(removeReq.op, WireOp.fileRemove);

    final gcReq = WebRequest(
      version: webProtocolVersion,
      requestId: 23,
      op: WireOp.fileGc,
      args: {'blobGraceMs': 0, 'tmpGraceMs': 0},
    );
    expect(gcReq.op, WireOp.fileGc);

    final capReq = WebRequest(
      version: webProtocolVersion,
      requestId: 24,
      op: WireOp.fileEnforceStorageCap,
      args: {'maxBytes': 1000000},
    );
    expect(capReq.op, WireOp.fileEnforceStorageCap);
  });
}
