const { chromium, firefox, webkit } = require('playwright');

async function testSingleInstance(name, browserType) {
    const browser = await browserType.launch({ headless: true });
    const context = await browser.newContext();
    const tab1 = await context.newPage();
    const tab2 = await context.newPage();

    try {
        await tab1.goto('http://127.0.0.1:8124/tool/web_smoke/pages/web_api_smoke.html');
        await tab1.waitForFunction(() => typeof window.__claimSingleInstance === 'function', null, { timeout: 15000 });

        await tab2.goto('http://127.0.0.1:8124/tool/web_smoke/pages/web_api_smoke.html');
        await tab2.waitForFunction(() => typeof window.__claimSingleInstance === 'function', null, { timeout: 15000 });

        // 1. Tab 1 claims 'cross_tab_shared.db' -> true
        const claim1 = await tab1.evaluate(async () => await window.__claimSingleInstance('cross_tab_shared.db'));
        if (claim1 !== true) {
            throw new Error(`${name}: tab1 expected claim to succeed, got ${claim1}`);
        }

        // 2. Tab 2 claims 'cross_tab_shared.db' -> false (already held by tab 1)
        const claim2 = await tab2.evaluate(async () => await window.__claimSingleInstance('cross_tab_shared.db'));
        if (claim2 !== false) {
            throw new Error(`${name}: tab2 expected claim to return false while held by tab1, got ${claim2}`);
        }

        // 3. Tab 2 claims a different database path on the same origin -> true
        const claimOther = await tab2.evaluate(async () => await window.__claimSingleInstance('cross_tab_other.db'));
        if (claimOther !== true) {
            throw new Error(`${name}: tab2 expected claim on different path to succeed, got ${claimOther}`);
        }

        // 4. Tab 1 is closed (crashes/dies/unloads). The browser releases the lock asynchronously.
        await tab1.close();

        // 5. Tab 2 claims 'cross_tab_shared.db' again -> now true once the browser releases the lock.
        let claimAfterClose = false;
        const deadline = Date.now() + 5000;
        while (Date.now() < deadline) {
            claimAfterClose = await tab2.evaluate(async () => await window.__claimSingleInstance('cross_tab_shared.db'));
            if (claimAfterClose === true) break;
            await new Promise(r => setTimeout(r, 100));
        }
        if (claimAfterClose !== true) {
            throw new Error(`${name}: tab2 expected claim to succeed after tab1 closed, got ${claimAfterClose}`);
        }

        console.log(`${name}: PASS cross-tab single-instance claim`);
    } finally {
        await context.close().catch(() => {});
        await browser.close().catch(() => {});
    }
}

(async () => {
    await testSingleInstance('Chromium', chromium);
    await testSingleInstance('Firefox', firefox);
    await testSingleInstance('WebKit', webkit);
})().catch(error => {
    console.error(error.stack || error);
    process.exitCode = 1;
});
