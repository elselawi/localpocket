/// PocketBase wire-field configuration.
///
/// Existing PB deployments may rename the data collection and its fields, so
/// those wire names are defined ONCE here and threaded through the wire
/// client and realtime parser; the kernel never sees them (it speaks only the
/// generic `RemoteRecord` vocabulary). Defaults match the shipped deployment:
/// collection `data` with fields `store`, `data`, and the `imgs` file field.
final class PbFieldNames {
  /// Creates a wire-field configuration.
  const PbFieldNames({
    this.collection = 'data',
    this.storeField = 'store',
    this.dataField = 'data',
    this.attachmentsField = 'imgs',
  });

  /// Collection holding synced records (record URLs, batch item URLs, and
  /// the realtime subscription all target it).
  final String collection;

  /// Record field carrying the LocalPocket store name.
  final String storeField;

  /// Record field carrying the canonical JSON document.
  final String dataField;

  /// Record file-attachment field (PB file field); the multipart modifiers
  /// `attachmentsField+` / `attachmentsField-` derive from it.
  final String attachmentsField;
}
