import 'dart:math';

/// Lowercase 15-char `[a-z0-9]` record ids. PocketBase enforces this
/// shape for record ids regardless of the collection's declared pattern.
const String _idAlphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
final Random _recordIdRandom = Random.secure();

/// Validates PocketBase-compatible lowercase 15-character record IDs.
final RegExp recordIdPattern = RegExp(r'^[a-z0-9]{15}$');

/// Generates a lowercase, PocketBase-compatible 15-character record ID.
String generateRecordId({Random? random}) {
  final rng = random ?? _recordIdRandom;
  return List.generate(15, (_) => _idAlphabet[rng.nextInt(_idAlphabet.length)]).join();
}

/// Returns whether [id] has the required PocketBase record-ID format.
bool isValidRecordId(String id) => recordIdPattern.hasMatch(id);
