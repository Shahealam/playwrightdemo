import { test, expect } from '@playwright/test';

test('verify dropdown', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.waitForLoadState('domcontentloaded');

    // remove ads
    await page.evaluate(() => {
        document.querySelectorAll('iframe').forEach(el => el.remove());
        const ad = document.querySelector('#fixedban');
        if (ad) ad.remove();
    });

    // scroll whole page
    await page.mouse.wheel(0, 1500);

    // STATE
    await page.locator('div[id="state"]').click();

    await page.locator('#react-select-3-input').fill('NCR');

    await page.keyboard.press('Enter');

    // CITY
    await page.locator('div[id="city"]').click();

    await page.locator('#react-select-4-input').fill('Delhi');

    await page.keyboard.press('Enter');

    await expect(page.locator('#state')).toContainText('NCR');

});