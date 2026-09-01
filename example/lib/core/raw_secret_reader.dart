import 'package:localpocket/src/internal/raw_surface.dart';

import 'drivers/raw_secret_native.dart'
    if (dart.library.js_interop) 'drivers/raw_secret_web.dart';

/// Returns the raw stored value of the `secret` column (ciphertext) without
/// decrypting, so the UI can demonstrate that values are encrypted at rest.
/// Native implementations read the raw SQLite column directly.
Future<Object?> readRawSecret(LocalPocket db) => readRawSecretImpl(db);
