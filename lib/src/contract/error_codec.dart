part of 'contract.dart';

/// Encodes any boundary-crossing error into a stable wire form. Typed kernel
/// errors keep their identity; anything else is categorized so the caller
/// always receives a named error.
Map<String, Object?> encodeError(Object error) {
  String typeName;
  String message = error.toString();
  Map<String, Object?>? details;
  if (error is LocalPocketError) {
    typeName = _localPocketErrorType(error);
    message = error.message;
    if (error is ValidationException && error.field != null) {
      details = {'field': error.field};
    } else if (error is FieldNotSelectedError) {
      details = {'field': error.field};
    } else if (error is UniqueConstraintException) {
      details = {'field': error.field};
      // The colliding value rides along when it is wire-safe; the error
      // path must never throw, so an unsafe value is simply dropped.
      try {
        details['value'] = encodeWireValue(error.value);
      } on WireException {
        // value is not wire-safe; decode sees null.
      }
    } else if (error is NotNullConstraintException) {
      details = {'field': error.field};
    }
  } else if (error is SyncError) {
    // Sync failures keep their subtype identity so the engine's retry /
    // dead-letter decisions survive the boundary on every runtime.
    typeName = _syncErrorType(error);
    message = error.message;
    if (error is ServerBusyError && error.retryAfter != null) {
      details = {'retryAfter': error.retryAfter};
    }
  } else if (error is WireException) {
    typeName = 'WireException';
    message = error.message;
  } else if (error is StateError) {
    typeName = 'StateError';
    message = error.message;
  } else if (error is RangeError) {
    // RangeError before ArgumentError: it extends it, so a later check would
    // be unreachable and range failures would cross the wire mislabeled.
    typeName = 'RangeError';
    message = '${error.message}';
  } else if (error is ArgumentError) {
    typeName = 'ArgumentError';
    message = '${error.message}';
  } else {
    typeName = 'unknown';
  }
  return {
    'type': typeName,
    'message': message,
    if (details != null) 'details': details,
  };
}

String _localPocketErrorType(LocalPocketError error) => switch (error) {
      ValidationException() => 'ValidationException',
      UniqueConstraintException() => 'UniqueConstraintException',
      NotNullConstraintException() => 'NotNullConstraintException',
      CheckConstraintException() => 'CheckConstraintException',
      PrimaryKeyConstraintException() => 'PrimaryKeyConstraintException',
      ForeignKeyConstraintException() => 'ForeignKeyConstraintException',
      UnsupportedSchemaFeatureError() => 'UnsupportedSchemaFeatureError',
      FtsUnavailableError() => 'FtsUnavailableError',
      SchemaRegistrationError() => 'SchemaRegistrationError',
      SchemaTooNewError() => 'SchemaTooNewError',
      StorageError() => 'StorageError',
      RecordNotFoundException() => 'RecordNotFoundException',
      ConflictNotFoundException() => 'ConflictNotFoundException',
      StaleCursorError() => 'StaleCursorError',
      MissingLimitError() => 'MissingLimitError',
      ConflictBlockedError() => 'ConflictBlockedError',
      DestructiveMigrationRefusedError() => 'DestructiveMigrationRefusedError',
      ReadOnlyTxError() => 'ReadOnlyTxError',
      TypedStoreMismatchError() => 'TypedStoreMismatchError',
      FieldNotSelectedError() => 'FieldNotSelectedError',
    };

String _syncErrorType(SyncError error) => switch (error) {
      TransientNetworkError() => 'TransientNetworkError',
      ServerBusyError() => 'ServerBusyError',
      ServerError() => 'ServerError',
      AuthError() => 'AuthError',
      ForbiddenError() => 'ForbiddenError',
      NotFoundError() => 'NotFoundError',
      PayloadError() => 'PayloadError',
      ProtocolError() => 'ProtocolError',
      DuplicateIdError() => 'DuplicateIdError',
      BatchFailedError() => 'BatchFailedError',
      RemoteVersionConflict() => 'RemoteVersionConflict',
      SyncIdentityError() => 'SyncIdentityError',
    };

/// Decodes a wire error into a typed error. Known kernel errors are
/// reconstructed exactly; unknown categories degrade to [WireException] with
/// the original type name preserved in the message.
Object decodeError(Map<String, Object?> wire) {
  final type = wire['type'];
  final message = wire['message'];
  final m = message is String ? message : '';
  final details = wire['details'];
  String? detail(String key) {
    if (details is Map) {
      final v = details[key];
      return v is String ? v : null;
    }
    return null;
  }

  Object? detailValue(String key) {
    if (details is Map) return decodeWireValue(details[key]);
    return null;
  }

  switch (type) {
    case 'WireException':
      // Encode stamps the type name; decode must not double-label it into
      // the message.
      return WireException(m);
    case 'ValidationException':
      return ValidationException(m, field: detail('field'));
    case 'UniqueConstraintException':
      return UniqueConstraintException(
          field: detail('field') ?? '',
          value: detailValue('value'),
          message: m);
    case 'NotNullConstraintException':
      return NotNullConstraintException(
          field: detail('field') ?? '', message: m);
    case 'CheckConstraintException':
      return CheckConstraintException(m);
    case 'PrimaryKeyConstraintException':
      return PrimaryKeyConstraintException(m);
    case 'ForeignKeyConstraintException':
      return ForeignKeyConstraintException(m);
    case 'UnsupportedSchemaFeatureError':
      return UnsupportedSchemaFeatureError(m);
    case 'FtsUnavailableError':
      return FtsUnavailableError(m);
    case 'SchemaRegistrationError':
      return SchemaRegistrationError(m);
    case 'SchemaTooNewError':
      return SchemaTooNewError(m);
    case 'StorageError':
      return StorageError(m);
    case 'RecordNotFoundException':
      return RecordNotFoundException(m);
    case 'ConflictNotFoundException':
      return ConflictNotFoundException(m);
    case 'StaleCursorError':
      return StaleCursorError(m);
    case 'MissingLimitError':
      return MissingLimitError(m);
    case 'ConflictBlockedError':
      return ConflictBlockedError(m);
    case 'DestructiveMigrationRefusedError':
      return DestructiveMigrationRefusedError(m);
    case 'ReadOnlyTxError':
      return ReadOnlyTxError(m);
    case 'FieldNotSelectedError':
      return FieldNotSelectedError(detail('field') ?? '');
    case 'TypedStoreMismatchError':
      return TypedStoreMismatchError(m);
    case 'TransientNetworkError':
      return TransientNetworkError(m);
    case 'ServerBusyError':
      return ServerBusyError(detail('retryAfter'), m);
    case 'ServerError':
      return ServerError(m);
    case 'AuthError':
      return AuthError(m);
    case 'ForbiddenError':
      return ForbiddenError(m);
    case 'NotFoundError':
      return NotFoundError(m);
    case 'PayloadError':
      return PayloadError(m);
    case 'ProtocolError':
      return ProtocolError(m);
    case 'DuplicateIdError':
      return DuplicateIdError(m);
    case 'BatchFailedError':
      return BatchFailedError(m);
    case 'RemoteVersionConflict':
      // The embedded remote record is not wire-encodable; the caller
      // re-fetches for the merge, so only the message crosses.
      return RemoteVersionConflict(message: m);
    case 'SyncIdentityError':
      return SyncIdentityError(m);
    case 'StateError':
      return StateError(m);
    case 'ArgumentError':
      return ArgumentError(m);
    case 'RangeError':
      return RangeError(m);
    default:
      return WireException('${type ?? 'unknown'}: $m');
  }
}
