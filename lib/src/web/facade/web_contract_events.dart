import 'package:localpocket/src/contract/contract.dart' as contract;
import 'package:localpocket/src/core/change_bus.dart';
import 'package:localpocket/src/runtime/remote_runtime_client.dart';

/// Maps one contract committed-change event onto the record-change event the
/// change bus publishes. One committed envelope feeds every record-event
/// stream — record payloads arrive decoded from the contract codec.
RecordChangeEvent recordEventFromContract(contract.CommittedChange change) =>
    RecordChangeEvent(
      store: change.store,
      id: change.id,
      origin: change.origin,
      action: change.action,
      oldRecord: change.oldRecord == null
          ? null
          : Map<String, Object?>.of(change.oldRecord!),
      newRecord: change.newRecord == null
          ? null
          : Map<String, Object?>.of(change.newRecord!),
      changedFields: Set<String>.of(change.changedFields),
    );

/// Publishes every contract committed-change event on [changeBus]. The
/// subscription is owned by the runtime's lifetime: closing the runtime
/// closes its event stream and with it this subscription.
void bindRecordEventStream({
  required RemoteRuntimeClient runtime,
  required ChangeBus changeBus,
}) {
  // ignore: cancel_subscriptions
  runtime.events.listen((event) {
    if (event is contract.CommittedChange) {
      changeBus.emitEvent(recordEventFromContract(event));
    }
  });
}
