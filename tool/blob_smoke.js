const { firefox, webkit } = require('playwright');

async function run(name, browserType) {
    const browser = await browserType.launch({ headless: true });
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(String(error)));
    page.on('console', message => {
        if (message.type() === 'error' && !message.text().includes('404')) {
            errors.push(message.text());
        }
    });
    await page.goto('http://127.0.0.1:8124/tool/web_smoke/pages/web_blob_smoke.html');
    await page.waitForFunction(() => globalThis.__blob_smoke === 'passed' || globalThis.__blob_smoke === 'failed', null, { timeout: 15000 });
    const result = await page.evaluate(() => ({ s: globalThis.__blob_smoke, d: globalThis.__blob_smoke_detail }));
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

