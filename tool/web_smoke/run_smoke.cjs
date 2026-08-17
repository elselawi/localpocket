const { chromium, firefox, webkit } = require('playwright');

let browser = null;

async function run(name, browserType, pagePath, signal) {
    const b = await browserType.launch({ headless: true });
    browser = b;
    const page = await b.newPage();
    const context = b.contexts()[0];
    await context.grantPermissions(['persistent-storage'], { origin: 'http://127.0.0.1:8124' }).catch(() => { });
    const errors = [];
    page.on('pageerror', e => errors.push(String(e)));
    page.on('console', m => { if (m.type() === 'error' && !m.text().includes('404')) errors.push(m.text()); });
    page.on('worker', w => {
        w.on('console', m => {
            if (m.type() === 'error' || m.type() === 'warning') errors.push(`worker: ${m.text()}`);
        });
    });
    try {
        await page.goto(`http://127.0.0.1:8124/tool/web_smoke/pages/${pagePath}`);
        try {
            await page.waitForFunction(key => globalThis[key] === 'passed' || globalThis[key] === 'failed', signal, { timeout: 30000 });
        } catch (e) {
            const state = await page.evaluate(key => ({
                status: globalThis[key],
                progress: globalThis[`${key}_progress`],
                detail: globalThis[`${key}_detail`],
                trace: globalThis['__localpocket_trace'],
                ready: document.readyState,
            }), signal).catch(() => null);
            throw new Error(`${name} ${pagePath} timeout: state=${JSON.stringify(state)} errors=${JSON.stringify(errors)}`);
        }
        const result = await page.evaluate(key => ({ status: globalThis[key], detail: globalThis[`${key}_detail`] }), signal);
        if (errors.length || result.status !== 'passed') throw new Error(`${name} ${pagePath} failed: ${JSON.stringify({ result, errors })}`);
        console.log(`${name} ${pagePath}: PASS`);
    } finally {
        await b.close().catch(() => { });
        browser = null;
    }
}

(async () => {
    const browserFilter = process.env.SMOKE_BROWSER;
    const pageFilter = process.env.SMOKE_PAGE;
    const browsers = [['Chromium', chromium], ['Firefox', firefox], ['WebKit', webkit]]
        .filter(([name]) => !browserFilter || name.toLowerCase() === browserFilter.toLowerCase());
    const pages = [['web_facade_smoke.html', '__facade_smoke'],
    ['web_watch_smoke.html', '__watch_smoke'],
    ['web_parity_smoke.html', '__parity_smoke'],
    ['web_blob_smoke.html', '__blob_smoke']]
        .filter(([p]) => !pageFilter || p.includes(pageFilter));
    try {
        for (const [name, type] of browsers) {
            for (const [pagePath, signal] of pages) {
                await run(name, type, pagePath, signal);
            }
        }
    } catch (e) {
        console.error(e.stack || e);
        process.exitCode = 1;
    } finally {
        if (browser) await browser.close().catch(() => { });
        process.exit(process.exitCode || 0);
    }
})();
