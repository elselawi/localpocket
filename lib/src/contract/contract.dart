/// The sealed runtime contract: every operation that crosses a runtime
/// boundary is a typed [Request] carrying a named [Result], and every
/// asynchronous notification is a typed [Event].
///
/// Direct subtypes of the sealed bases live in this library (as `part`
/// files) so Dart's exhaustiveness checking applies to every `switch` over
/// them: adding a variant fails to compile until the encoders, decoders, and
/// the command handler handle it.
///
/// Commands carry meaning, never SQL or generic argument maps. Values that
/// cross the wire use [encodeWireValue]/[decodeWireValue]; errors use the
/// common error codec.
library;

import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:collection/collection.dart';
import 'package:localpocket/src/kernel/change_bus.dart'
    show ChangeAction, ChangeOrigin;
import 'package:localpocket/src/kernel/errors.dart';
import 'package:localpocket/src/kernel/files/attachment_field.dart';
import 'package:localpocket/src/kernel/sync/status.dart';

// The typed error hierarchy crosses the runtime boundary via the error
// codec, so it is part of the contract's public surface. The sync status
// models back the sync status/report payloads.
export '../kernel/change_bus.dart' show ChangeAction, ChangeOrigin;
export '../kernel/errors.dart';
export '../kernel/sync/status.dart';

part 'wire_values.dart';
part 'mutation.dart';
part 'conflict.dart';
part 'file.dart';
part 'sync.dart';
part 'query_spec.dart';
part 'request.dart';
part 'result.dart';
part 'event.dart';
part 'codec.dart';
part 'error_codec.dart';
part 'handler.dart';
