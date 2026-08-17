const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(String(error)));
    await page.goto('http://127.0.0.1:8126/tool/web_smoke/pages/web_facade_smoke.html');
    await page.waitForTimeout(3000);
    const status = await page.evaluate(() => globalThis.__facade_smoke);
    await browser.close();
    if (status === 'passed') throw new Error('Strict CSP unexpectedly allowed blob worker startup.');
    if (!errors.length && status !== 'failed') {
        throw new Error(`Strict CSP produced no typed/actionable startup signal: status=${status}`);
    }
    console.log(`Strict CSP startup rejection observed: status=${status}, errors=${errors.length}`);
})().catch(error => {
    console.error(error.stack || error);
    process.exitCode = 1;
});
