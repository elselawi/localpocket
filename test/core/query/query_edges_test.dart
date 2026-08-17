import 'package:localpocket/localpocket.dart';
import 'package:test/test.dart';

import '../../support/helpers.dart';
import 'query_edges_corpus.dart';

/// Field-encrypted fixture schema used by the encrypted-field edges.
CollectionSchema<Object?> vaultSchema() => CollectionSchema<Object?>(
      name: 'vault',
      version: 1,
      fields: [
        Field.text('label'),
        Field.text('secret', encrypted: true),
        Field.int('count', encrypted: true),
      ],
    );

/// FTS fixture schema used by the search edges.
CollectionSchema<Object?> ftsSchema() => CollectionSchema<Object?>(
      name: 'articles',
      version: 1,
      fields: [
        Field.text('title', required: true),
        Field.text('body'),
      ],
      fts: const FtsSpec(['title', 'body']),
    );

Future<QueryHarness> vaultHarness(
    QueryHarness Function(LocalPocket, Collection, CollectionSchema<Object?>)
        build) async {
  final esc = vaultSchema();
  final cipher =
      AesGcmFieldCipher(List<int>.generate(32, (i) => (i * 3 + 7) % 256));
  final vp = await openPocket(stores: [esc], fieldCipher: cipher);
  return build(vp, vp.collection('vault'), esc);
}

Future<QueryHarness> ftsHarness(
    QueryHarness Function(LocalPocket, Collection, CollectionSchema<Object?>)
        build) async {
  final fts = ftsSchema();
  final fp = await openPocket(stores: [fts]);
  return build(fp, fp.collection('articles'), fts);
}

/// Query-edge coverage: predicate operator matrix, unknown/encrypted
/// query fields, limits/scopes/ordering/cursor modes, cursor shape validation,
/// nullable keyset pagination, projection/extra-key contract, FTS search, and
/// aggregates/distinct edge cases. The full corpus runs under BOTH the native
/// QueryBuilder path and the compiled-plan execution path.
void main() {
  group('query edges [native harness]', () {
    late LocalPocket pocket;
    late Collection col;
    final schema = widgetsSchema();

    setUp(() async {
      pocket = await openPocket(stores: [schema]);
      col = pocket.collection('widgets');
    });

    tearDown(() => pocket.close());

    runQueryEdgesCorpus(
      () => NativeQueryHarness(pocket, col, schema),
      vaultHarnessProvider: () => vaultHarness(NativeQueryHarness.new),
      ftsHarnessProvider: () => ftsHarness(NativeQueryHarness.new),
    );
  });

  group('query edges [compiled plan harness]', () {
    late LocalPocket pocket;
    late Collection col;
    final schema = widgetsSchema();

    setUp(() async {
      pocket = await openPocket(stores: [schema]);
      col = pocket.collection('widgets');
    });

    tearDown(() => pocket.close());

    runQueryEdgesCorpus(
      () => CompiledQueryHarness(pocket, col, schema),
      vaultHarnessProvider: () => vaultHarness(CompiledQueryHarness.new),
      ftsHarnessProvider: () => ftsHarness(CompiledQueryHarness.new),
    );
  });
}
