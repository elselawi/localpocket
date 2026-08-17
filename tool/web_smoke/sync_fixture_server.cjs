const http = require('http');

const records = new Map([
    ['syncitem0000001', {
        id: 'syncitem0000001', store: 'sync_items',
        data: { title: 'remote seed', done: false },
        updated: '2026-01-01 00:00:00.000Z'
    }]
]);
let tick = 1;
let realtimeClients = [];

function headers() {
    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Authorization, Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, OPTIONS',
        'Content-Type': 'application/json'
    };
}
function send(res, status, body) {
    res.writeHead(status, headers());
    res.end(JSON.stringify(body));
}
function readJson(req) {
    return new Promise((resolve, reject) => {
        let text = '';
        req.on('data', chunk => text += chunk);
        req.on('end', () => {
            try { resolve(text ? JSON.parse(text) : {}); } catch (e) { reject(e); }
        });
        req.on('error', reject);
    });
}
function remote(record) {
    return {
        id: record.id, store: record.store, data: record.data,
        created: record.updated, updated: record.updated, imgs: []
    };
}
function nextUpdated() {
    tick += 1;
    return `2026-01-01 00:00:${String(tick).padStart(2, '0')}.000Z`;
}

const server = http.createServer(async (req, res) => {
    if (req.method === 'OPTIONS') { res.writeHead(204, headers()); res.end(); return; }
    if (req.url === '/api/realtime' && req.method === 'GET') {
        res.writeHead(200, {
            ...headers(), 'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache', Connection: 'keep-alive'
        });
        res.write('event: PB_CONNECT\ndata: {"clientId":"browser-fixture"}\n\n');
        realtimeClients.push(res);
        req.on('close', () => { realtimeClients = realtimeClients.filter(x => x !== res); });
        return;
    }
    if (req.url === '/api/realtime' && req.method === 'POST') {
        res.writeHead(204, headers()); res.end(); return;
    }
    if (req.url === '/api/batch' && req.method === 'POST') {
        const body = await readJson(req);
        const requests = body.requests || [];
        if (!requests.length) { send(res, 200, []); return; }
        const result = [];
        for (const item of requests) {
            const b = item.body || {};
            const existing = records.get(b.id);
            const r = existing || { id: b.id, store: b.store, data: {}, updated: nextUpdated() };
            r.store = b.store; r.data = b.data || {}; r.updated = nextUpdated();
            records.set(r.id, r);
            result.push({ body: remote(r), status: 200 });
        }
        send(res, 200, result); return;
    }
    if (req.url.startsWith('/api/collections/data/records') && req.method === 'GET') {
        const url = new URL(req.url, 'http://fixture');
        const store = (url.searchParams.get('filter') || '').match(/store='([^']+)'/)?.[1];
        const items = [...records.values()].filter(r => !store || r.store === store).map(remote);
        send(res, 200, { page: 1, perPage: 200, totalItems: items.length, totalPages: 1, items }); return;
    }
    if (req.url.startsWith('/api/collections/data/records/') && req.method === 'GET') {
        const id = decodeURIComponent(req.url.split('/').pop());
        const r = records.get(id); r ? send(res, 200, remote(r)) : send(res, 404, { message: 'not found' }); return;
    }
    if (req.url.startsWith('/api/collections/data/records/') && req.method === 'PATCH') {
        const id = decodeURIComponent(req.url.split('/').pop());
        const body = await readJson(req); const r = records.get(id);
        if (!r) { send(res, 404, { message: 'not found' }); return; }
        r.data = body.data || r.data; r.updated = nextUpdated(); records.set(id, r);
        send(res, 200, remote(r)); return;
    }
    if (req.url === '/api/collections/data/records' && req.method === 'POST') {
        const body = await readJson(req); const r = { id: body.id, store: body.store, data: body.data || {}, updated: nextUpdated() };
        records.set(r.id, r); send(res, 200, remote(r)); return;
    }
    send(res, 404, { message: 'not found' });
});

server.listen(Number(process.argv[2] || 8125), '127.0.0.1', () => {
    console.log(`SYNC_FIXTURE_SERVER http://127.0.0.1:${server.address().port}`);
});
process.on('SIGTERM', () => { for (const res of realtimeClients) res.end(); server.close(() => process.exit(0)); });
