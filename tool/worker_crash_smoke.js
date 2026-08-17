const { firefox } = require('playwright');

(async () => {
    const browser = await firefox.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:8124/tool/web_smoke/pages/web_watch_smoke.html');
    await page.waitForFunction(() => globalThis.__watch_smoke === 'passed' || globalThis.__watch_smoke === 'failed', null, { timeout: 20000 });
    const before = await page.evaluate(() => globalThis.__watch_smoke);
    if (before !== 'passed') throw new Error('Initial smoke failed');
    // Reload simulates losing the old page/worker and verifies a fresh worker can reopen.
    await page.reload();
    await page.waitForFunction(() => globalThis.__watch_smoke === 'passed' || globalThis.__watch_smoke === 'failed', null, { timeout: 20000 });
    const after = await page.evaluate(() => globalThis.__watch_smoke);
    if (after !== 'passed') throw new Error('Reopen after worker/page restart failed');
    console.log('Firefox: worker/page restart and fresh reopen passed');
    await context.close();
    await browser.close();
})().catch(error => {
    console.error(error.stack || error);
    process.exitCode = 1;
});

