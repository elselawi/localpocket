const { chromium, firefox, webkit } = require('playwright');

const ANSI = {
    reset: '\x1b[0m',
    cyan: '\x1b[36m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    bold: '\x1b[1m',
    dim: '\x1b[2m',
};

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
            const timeout = (pagePath.includes('durability') || pagePath.includes('performance_resource')) ? 120000 : 30000;
            await page.waitForFunction(key => globalThis[key] === 'passed' || globalThis[key] === 'failed', signal, { timeout });
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
        console.log(`${ANSI.cyan}${name}${ANSI.reset} ${pagePath}: ${ANSI.green}${ANSI.bold}PASS${ANSI.reset}`);
    } finally {
        await b.close().catch(() => { });
        if (b.contexts().length !== 0) {
            throw new Error(`${name} ${pagePath} leaked browser contexts after close`);
        }
        browser = null;
    }
}

(async () => {
    const browserFilter = process.env.SMOKE_BROWSER;
    const pageFilter = process.env.SMOKE_PAGE;
    const pageExclude = process.env.SMOKE_EXCLUDE_PAGE;
    const browsers = [['Chromium', chromium], ['Firefox', firefox], ['WebKit', webkit]]
        .filter(([name]) => !browserFilter || name.toLowerCase() === browserFilter.toLowerCase());
    // SINGLE SOURCE: the page manifest lives in pages.json next to this
    // runner; the Dart gates (browser_web_gate.dart / sync_web_gate.dart)
    // derive their compile lists and expected counts from the same file, so
    // the runner and the gates cannot drift apart.
    const manifest = JSON.parse(require('fs').readFileSync(`${__dirname}/pages.json`, 'utf8'));
    const pages = manifest.pages
        .map(p => [p.html, p.signal])
        .filter(([p]) => !pageFilter || p.includes(pageFilter))
        .filter(([p]) => !pageExclude || !p.includes(pageExclude));
    const filtered = Boolean(pageFilter || browserFilter);
    const expectedScenarios = filtered
        ? pages.length * browsers.length
        : Number(process.env.SMOKE_EXPECTED_SCENARIOS || pages.length * browsers.length);
    const expectedPages = filtered
        ? pages.length
        : Number(process.env.SMOKE_EXPECTED_PAGES || pages.length);
    if (pages.length !== expectedPages) {
        throw new Error(`Smoke manifest mismatch: expected ${expectedPages} pages, found ${pages.length}`);
    }
    let executed = 0;
    try {
        for (const [name, type] of browsers) {
            for (const [pagePath, signal] of pages) {
                await run(name, type, pagePath, signal);
                executed++;
            }
        }
        if (executed !== expectedScenarios) {
            throw new Error(`Smoke scenario count mismatch: expected ${expectedScenarios}, executed ${executed}`);
        }
    } catch (e) {
        console.error(e.stack || e);
        process.exitCode = 1;
    } finally {
        if (browser) await browser.close().catch(() => { });
        process.exit(process.exitCode || 0);
    }
})();
