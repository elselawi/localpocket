/// The PocketBase adapter: a [SyncBackend] implementation over the real
/// PocketBase wire contract. Pair it with the sync engine (`SyncEngine`,
/// exported by `sync.dart` and the main `localpocket.dart` barrel):
///
/// ```dart
/// final backend = PocketBaseBackend(
///   baseUrl: Uri.parse('https://pb.example.com'),
///   tokenProvider: secureTokenProvider,
///   stores: ['patients'],
/// );
/// final engine = SyncEngine(pocket: db, backend: backend);
/// await engine.start();
/// ```
library;

export 'src/pocketbase/backend.dart' show PocketBaseRawBackend;
export 'src/pocketbase/auth.dart' show AuthManager, Token, TokenProvider;
export 'src/pocketbase/filter_builder.dart'
    show pullFilter, pullPageFilter, quote, sweepFilter;
export 'src/pocketbase/pb_client.dart' show PbClient;
export 'src/pocketbase/sse.dart' show PbRealtime, PbRealtimeEvent;
export 'src/pocketbase/transport.dart'
    show
        HttpRequest,
        HttpMultipartFile,
        HttpMultipartRequest,
        HttpResponse,
        HttpTransport,
        HttpTransportException,
        PackageHttpTransport,
        StreamedHttpResponse;
