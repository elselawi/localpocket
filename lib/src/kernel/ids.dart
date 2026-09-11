import 'dart:math';

/// The alphabet [generateRecordId] draws from: lowercase letters and digits.
/// Generated ids are deliberately a strict subset of [recordIdPattern] (no
/// uppercase, no underscore) so they stay sortable and filesystem-safe.
const String _idAlphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
final Random _recordIdRandom = Random.secure();

/// The record-id shape PocketBase actually enforces: exactly 15 characters
/// drawn from `[A-Za-z0-9_]`.
///
/// PocketBase's default system `id` field is declared as
/// `{"min": 15, "max": 15, "pattern": "^[a-zA-Z0-9_]+$"}` and applies to every
/// collection, so a server accepts hand-supplied ids such as
/// `currency_______`, `ISO_country____`, or `ai_services_ena`. The engine
/// accepts the same shape: an id this pattern rejects would be rejected by
/// PocketBase on push and (before this contract was aligned) silently
/// quarantined on pull.
///
/// [generateRecordId] still emits only lowercase `[a-z0-9]` ids — a strict
/// subset — because the monotonic, sortable prefix relies on that alphabet.
final RegExp recordIdPattern = RegExp(r'^[A-Za-z0-9_]{15}$');

/// Monotonic counter for the time-prefix of generated ids. Seeded from the
/// wall clock at startup and incremented per id, so ids generated in the
/// same millisecond still sort by creation order (and never collide even
/// across process restarts within the same tick window).
///
/// Ownership: this counter is per-isolate state. Ids are generated on the
/// write path, which is serialized through the single-writer queue inside
/// one isolate (the kernel lives in one isolate on every platform, including
/// the web worker), so monotonic ordering holds for everything that matters.
/// The 7 random suffix characters remain the collision guard; ordering
/// across independent isolates is deliberately not guaranteed.
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
  final suffix =
      List.generate(7, (_) => _idAlphabet[rng.nextInt(_idAlphabet.length)])
          .join();
  return (prefix + suffix).substring(0, 15);
}

/// Returns whether [id] has the required PocketBase record-ID format
/// (15 characters from `[A-Za-z0-9_]`; see [recordIdPattern]).
bool isValidRecordId(String id) => recordIdPattern.hasMatch(id);
