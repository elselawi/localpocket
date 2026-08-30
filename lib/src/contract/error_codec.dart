part of 'contract.dart';

/// Encodes any error crossing the runtime boundary into a stable wire form.
/// Typed kernel errors keep their identity; anything else is categorized so
/// the caller always receives a named error, never a raw crash.
Map<String, Object?> encodeError(Object error) {
  String typeName;
  String message = error.toString();
  Map<String, Object?>? details;
  if (error is LocalPocketError) {
    typeName = _localPocketErrorType(error);
    message = error.message;
    if (error is ValidationException && error.field != null) {
      details = {'field': error.field};
    } else if (error is UniqueConstraintException) {
      details = {'field': error.field};
    } else if (error is NotNullConstraintException) {
      details = {'field': error.field};
    }
  } else if (error is WireException) {
    typeName = 'WireException';
    message = error.message;
  } else if (error is StateError) {
    typeName = 'StateError';
    message = error.message;
  } else if (error is ArgumentError) {
    typeName = 'ArgumentError';
    message = '${error.message}';
  } else if (error is RangeError) {
    typeName = 'RangeError';
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
      StaleCursorError() => 'StaleCursorError',
      MissingLimitError() => 'MissingLimitError',
      ConflictBlockedError() => 'ConflictBlockedError',
      DestructiveMigrationRefusedError() => 'DestructiveMigrationRefusedError',
      ReadOnlyTxError() => 'ReadOnlyTxError',
      TypedStoreMismatchError() => 'TypedStoreMismatchError',
    };

/// Decodes a wire error back into a typed error. Known kernel errors are
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

  switch (type) {
    case 'ValidationException':
      return ValidationException(m, field: detail('field'));
    case 'UniqueConstraintException':
      return UniqueConstraintException(
          field: detail('field') ?? '', message: m);
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
    case 'TypedStoreMismatchError':
      return TypedStoreMismatchError(m);
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
