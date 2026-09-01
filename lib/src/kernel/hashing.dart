import 'dart:convert';

import 'package:crypto/crypto.dart';

/// SHA-256 hex digest of a UTF-8 string (SHA-256 for both doc hashing
/// and file content addressing).
String sha256Hex(String input) => sha256.convert(utf8.encode(input)).toString();

/// SHA-256 hex digest of raw bytes.
String sha256HexBytes(List<int> bytes) => sha256.convert(bytes).toString();
