import 'dart:io';

Future<void> main(List<String> args) async {
  final root = Directory(args.isEmpty ? '.' : args.first).absolute;
  final port = args.length > 1 ? int.parse(args[1]) : 8124;
  final strictCsp = args.contains('--strict-csp');
  final server = await HttpServer.bind(InternetAddress.loopbackIPv4, port);
  stdout.writeln('WEB_SMOKE_SERVER http://${server.address.host}:$port/');
  await for (final request in server) {
    final pathPart = request.uri.path == '/'
        ? '/tool/web_smoke/pages/web_api_smoke.html'
        : request.uri.path;
    final file =
        File('${root.path}${pathPart.replaceAll('/', Platform.pathSeparator)}');
    if (!file.existsSync()) {
      request.response.statusCode = HttpStatus.notFound;
      await request.response.close();
      continue;
    }
    final bytes = await file.readAsBytes();
    if (strictCsp) {
      request.response.headers.set('Content-Security-Policy',
          "default-src 'self'; script-src 'self'; worker-src 'self'; connect-src 'self'");
    }
    request.response.headers.contentType = _contentType(file.path);
    request.response.contentLength = bytes.length;
    request.response.add(bytes);
    await request.response.close();
  }
}

ContentType _contentType(String path) {
  if (path.endsWith('.html')) return ContentType.html;
  if (path.endsWith('.js') || path.endsWith('.mjs')) {
    return ContentType('application', 'javascript');
  }
  if (path.endsWith('.wasm')) return ContentType('application', 'wasm');
  return ContentType.binary;
}
