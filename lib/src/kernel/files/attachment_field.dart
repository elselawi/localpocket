/// The shared default for the LOCAL attachment field name.
///
/// This is the fallback used when nothing more specific applies — no
/// explicit `field:` argument and no per-store declaration
/// (`StoreDef.attachmentField`). It backs the contract's wire defaults
/// (`FileBeginUploadRequest.field` & co. are optional for compatibility),
/// the kernel file service, and the facade's `Files.defaultField`.
///
/// It is NOT a remote name: the PocketBase wire vocabulary (collection,
/// record fields, the attachment file field and its `+`/`-` multipart
/// modifiers) lives exclusively in the adapter's `PbFieldNames`. Renaming
/// this default would re-label existing `lp_file_refs` rows, so it stays
/// `'imgs'` for compatibility with databases created before per-store
/// declarations existed.
const String attachmentFieldDefault = 'imgs';
