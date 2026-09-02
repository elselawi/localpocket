const { firefox, webkit } = require('playwright');

async function smoke(name, browserType) {
    const browser = await browserType.launch({ headless: true });
    const context = await browser.newContext();
    const first = await context.newPage();
    const second = await context.newPage();
    const errors = [];
    for (const page of [first, second]) {
        page.on('pageerror', e => errors.push(`${name}: ${e}`));
        page.on('console', m => {
            if (m.type() === 'error' && !m.text().includes('404')) errors.push(`${name}: ${m.text()}`);
        });
    }
    // Initialize the first tab fully before opening the second. This avoids two
    // independent first-write/migration transactions contending on OPFS.
    await first.goto('http://127.0.0.1:8124/tool/web_smoke/pages/web_watch_smoke.html');
    await first.waitForFunction(() => globalThis.__watch_smoke === 'passed' || globalThis.__watch_smoke === 'failed', null, { timeout: 20000 });
    const firstResult = await first.evaluate(() => ({ s: globalThis.__watch_smoke, d: globalThis.__watch_smoke_detail }));

    await second.goto('http://127.0.0.1:8124/tool/web_smoke/pages/web_watch_smoke.html');
    await second.waitForFunction(() => globalThis.__watch_smoke === 'passed' || globalThis.__watch_smoke === 'failed', null, { timeout: 20000 });
    const secondResult = await second.evaluate(() => ({ s: globalThis.__watch_smoke, d: globalThis.__watch_smoke_detail }));

    const results = [firstResult, secondResult];
    if (errors.length || results.some(r => r.s !== 'passed')) {
        throw new Error(`${name} cross-tab failed: ${JSON.stringify({ results, errors })}`);
    }
    console.log(`${name}: two pages opened and watcher smoke passed`);
    await context.close();
    await browser.close();
}

(async () => {
    await smoke('Firefox', firefox);
    await smoke('WebKit', webkit);
})().catch(error => {
    console.error(error.stack || error);
    process.exitCode = 1;
});

