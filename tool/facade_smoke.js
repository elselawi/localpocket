const { firefox, webkit, chromium } = require('playwright');

async function run(name, browserType) {
    const browser = await browserType.launch({ headless: true });
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(String(error)));
    page.on('console', message => {
        if (message.type() === 'error' && !message.text().includes('assets/packages/localpocket') && !message.text().includes('404')) {
            errors.push(message.text());
        }
    });
    page.on('response', resp => {
        if (resp.status() === 404 && resp.url().includes('assets/packages/localpocket')) {
            // Expected development asset fallback
            errors.length = 0;
        }
    });
    await page.goto('http://127.0.0.1:8124/tool/web_smoke/pages/web_facade_smoke.html');
    await page.waitForFunction(() => globalThis.__facade_smoke === 'passed' || globalThis.__facade_smoke === 'failed', null, { timeout: 15000 });
    const result = await page.evaluate(() => ({ s: globalThis.__facade_smoke, d: globalThis.__facade_smoke_detail }));
    if (errors.length || result.s !== 'passed') {
        throw new Error(`${name} failed: ${JSON.stringify({ result, errors })}`);
    }
    console.log(`${name}: PASS - ${result.d}`);
    await browser.close();
}

(async () => {
    await run('Firefox', firefox);
    await run('WebKit', webkit);
})().catch(error => {
    console.error(error.stack || error);
    process.exitCode = 1;
});

