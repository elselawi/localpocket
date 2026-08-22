import 'dart:math';

/// Lowercase 15-char `[a-z0-9]` record ids. PocketBase enforces this
/// shape for record ids regardless of the collection's declared pattern.
const String _idAlphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
final Random _recordIdRandom = Random.secure();

/// Validates PocketBase-compatible lowercase 15-character record IDs.
final RegExp recordIdPattern = RegExp(r'^[a-z0-9]{15}$');

/// Monotonic counter for the time-prefix of generated ids. Seeded from the
/// wall clock at startup and incremented per id, so ids generated in the
/// same millisecond still sort by creation order (and never collide even
/// across process restarts within the same tick window).
int _idCounter = DateTime.now().millisecondsSinceEpoch;

/// Generates a lowercase, PocketBase-compatible 15-character record ID.
///
/// The first 8 characters are a monotonically increasing counter (base36,
/// zero-padded) seeded from the wall clock; the remaining 7 are random. The
/// result is still `[a-z0-9]{15}` and PocketBase-valid, but generated ids
/// now sort by creation time — SQLite B-tree inserts append at the right
/// edge of the id index instead of splitting random pages, which removes the
/// super-linear insert scaling at large row counts. Callers that supply
/// their own ids are unaffected.
String generateRecordId({Random? random}) {
  final rng = random ?? _recordIdRandom;
  final counter = ++_idCounter;
  final prefix = counter.toRadixString(36).padLeft(8, '0');
  final suffix = List.generate(7, (_) => _idAlphabet[rng.nextInt(_idAlphabet.length)]).join();
  return prefix + suffix;
}

/// Returns whether [id] has the required PocketBase record-ID format.
bool isValidRecordId(String id) => recordIdPattern.hasMatch(id);
