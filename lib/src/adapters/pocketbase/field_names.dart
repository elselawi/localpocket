/// PocketBase wire-field configuration.
///
/// PocketBase designs vary: the data collection may be named differently,
/// and the record's store/data/attachment fields may be renamed to match an
/// existing deployment. This config names those wire elements ONCE; the
/// adapter threads it through the wire client and the realtime parser, and
/// the kernel never sees any of it (the kernel speaks only the generic
/// `RemoteRecord` vocabulary).
///
/// Defaults match the shipped PocketBase deployment:
/// collection `data` with fields `store`, `data`, and the `imgs` file field.
final class PbFieldNames {
  /// Creates a wire-field configuration.
  const PbFieldNames({
    this.collection = 'data',
    this.storeField = 'store',
    this.dataField = 'data',
    this.attachmentsField = 'imgs',
  });

  /// The PocketBase collection holding synced records (record URLs, batch
  /// item URLs, and the realtime subscription all target it).
  final String collection;

  /// The record field carrying the LocalPocket store name.
  final String storeField;

  /// The record field carrying the canonical JSON document.
  final String dataField;

  /// The record's file-attachment field (PB file field). The multipart
  /// modifiers `attachmentsField+` / `attachmentsField-` derive from it.
  final String attachmentsField;
}
