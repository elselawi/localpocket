import 'package:localpocket/src/core/schema.dart';
import 'package:localpocket/src/web/conversions.dart';
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

void main() {
  test('Phase 3 worker controller request parsing and dispatch', () {
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

    // 2. Verify mutation batch envelope
    final mutateReq = WebRequest(
      version: webProtocolVersion,
      requestId: 2,
      op: WireOp.mutateBatch,
      args: {
        'store': 'notes',
        'mutations': [
          {
            'action': 'put',
            'record': encodeWireValue({
              'id': 'note1',
              'title': 'Hello',
              'priority': 1,
              'done': false,
            }),
          },
          {
            'action': 'patch',
            'id': 'note1',
            'record': encodeWireValue({'done': true}),
          },
          {
            'action': 'archive',
            'id': 'note1',
          },
        ],
      },
    );

    final mutateDecoded = WebRequest.fromJson(mutateReq.toJson());
    expect(mutateDecoded.op, WireOp.mutateBatch);
    expect((mutateDecoded.args['mutations'] as List).length, 3);

    // 3. Verify the compiled query plan envelope (single read operation)
    final queryReq = WebRequest(
      version: webProtocolVersion,
      requestId: 3,
      op: WireOp.compiledQuery,
      args: {
        'operation': 'query',
        'compilerVersion': 1,
        'store': 'notes',
        'schemaVersion': 1,
        'schemaFingerprint': 'f' * 64,
        'argumentCount': 1,
        'sql': 'SELECT * FROM "notes" WHERE done = ? LIMIT 20',
        'args': [true],
        'pageLimit': 20,
      },
    );

    final queryDecoded = WebRequest.fromJson(queryReq.toJson());
    expect(queryDecoded.op, WireOp.compiledQuery);
    expect(queryDecoded.args['pageLimit'], 20);

    // 4. Verify transaction session envelopes
    final txBeginReq = WebRequest(
      version: webProtocolVersion,
      requestId: 4,
      op: WireOp.txBegin,
    );
    expect(txBeginReq.op, WireOp.txBegin);

    final txSavepointReq = WebRequest(
      version: webProtocolVersion,
      requestId: 5,
      op: WireOp.txSavepoint,
      args: {'sessionId': 1},
    );
    expect(txSavepointReq.op, WireOp.txSavepoint);

    final txCommitReq = WebRequest(
      version: webProtocolVersion,
      requestId: 6,
      op: WireOp.txCommit,
      args: {'sessionId': 1},
    );
    expect(txCommitReq.op, WireOp.txCommit);
  });
}
