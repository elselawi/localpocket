import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/web/protocol.dart';
import 'package:test/test.dart';

/// Sync & auth travel as typed contract requests inside the
/// `contract_request` envelope; the retired `sync_*` string ops are pinned
/// gone by the case-160 vocabulary test.
void main() {
  group('Sync & auth contract envelopes', () {
    test('syncStart request round-trips through the wire envelope', () {
      const request = contract.SyncStartRequest(
        baseUrl: 'http://127.0.0.1:8090',
        scopeId: 'user_123',
        token: 'jwt_token_sample',
      );
      final decoded = contract.ContractCodec.decodeRequest(
        contract.ContractCodec.encodeRequest(request),
      ) as contract.SyncStartRequest;
      expect(decoded.baseUrl, 'http://127.0.0.1:8090');
      expect(decoded.scopeId, 'user_123');
      expect(decoded.token, 'jwt_token_sample');
    });

    test('syncUpdateAuth round-trips and tolerates a null token', () {
      const request =
          contract.SyncUpdateAuthRequest(token: 'new_refreshed_jwt');
      final decoded = contract.ContractCodec.decodeRequest(
        contract.ContractCodec.encodeRequest(request),
      ) as contract.SyncUpdateAuthRequest;
      expect(decoded.token, 'new_refreshed_jwt');

      const absent = contract.SyncUpdateAuthRequest();
      final decodedAbsent = contract.ContractCodec.decodeRequest(
        contract.ContractCodec.encodeRequest(absent),
      ) as contract.SyncUpdateAuthRequest;
      expect(decodedAbsent.token, isNull);
    });

    test('syncSetConnectivity round-trips the online flag', () {
      const request = contract.SyncSetConnectivityRequest(online: false);
      final decoded = contract.ContractCodec.decodeRequest(
        contract.ContractCodec.encodeRequest(request),
      ) as contract.SyncSetConnectivityRequest;
      expect(decoded.online, isFalse);
    });

    test('syncNow, syncPause, syncResume, syncStop round-trip', () {
      for (final contract.Request request in const <contract.Request>[
        contract.SyncNowRequest(),
        contract.SyncPauseRequest(),
        contract.SyncResumeRequest(),
        contract.SyncStopRequest(),
      ]) {
        final decoded = contract.ContractCodec.decodeRequest(
          contract.ContractCodec.encodeRequest(request),
        );
        expect(decoded.tag, request.tag);
      }
    });

    test('a sync status event round-trips with its timestamps', () {
      const event = contract.SyncStatusEvent(
        status: contract.SyncStatusData(
          state: contract.SyncEngineState.idle,
          pending: 2,
          conflicts: 1,
          hidden: 0,
          blocked: 3,
        ),
      );
      final decoded = contract.ContractCodec.decodeEvent(
        contract.ContractCodec.encodeEvent(event),
      ) as contract.SyncStatusEvent;
      expect(decoded.status.state, contract.SyncEngineState.idle);
      expect(decoded.status.pending, 2);
      expect(decoded.status.conflicts, 1);
      expect(decoded.status.blocked, 3);
    });

    test('an auth-required event round-trips', () {
      final decoded = contract.ContractCodec.decodeEvent(
        contract.ContractCodec.encodeEvent(const contract.AuthRequiredEvent()),
      );
      expect(decoded, isA<contract.AuthRequiredEvent>());
    });

    test('the contract envelopes ride the contract_request op on the wire', () {
      final envelope = WebRequest(
        version: webProtocolVersion,
        requestId: 13,
        op: WireOp.contractRequest,
        args: {
          'request': contract.ContractCodec.encodeRequest(
              const contract.SyncStartRequest(baseUrl: 'b')),
        },
      );
      final decoded = WebRequest.fromJson(envelope.toJson());
      expect(decoded.op, WireOp.contractRequest);
    });
  });
}
