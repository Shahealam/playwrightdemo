 import { test, expect } from '@playwright/test';

test('verify dynamic properties', async ({ page }) => {
  

  await page.goto('https://demoqa.com/dynamic-properties');

  // visible button
  await expect(page.locator('#visibleAfter'))
    .toBeVisible({ timeout: 10000 });

  // enabled button
  await expect(page.locator('#enableAfter'))
    .toBeEnabled({ timeout: 10000 });

  // color changed
  await expect(page.locator('#colorChange'))
    .toHaveClass(/text-danger/, { timeout: 10000 });

});



// import { test, expect } from '@playwright/test';

test('DemoQA Accordion Automation', async ({ page }) => {

  // Open page
  await page.goto('https://demoqa.com/accordian');

   await page.waitForLoadState('domcontentloaded');

  // Verify heading
  await expect(page.locator('.text-center').nth(0)).toHaveText('Accordian');

  // First section is already expanded
  const firstContent = page.locator('.accordion-body').nth(0);
  await expect(firstContent).toBeVisible();
  // Verify the first accordance
  await page.locator('.accordion-button').nth(0).click();

  await expect(page.getByText('What is Lorem Ipsum?')).toBeVisible();

  // Click second accordion
  await page.locator('.accordion-button').nth(1).click();

  // Verify second section content visible
  await expect(page.locator('.accordion-body').nth(1)).toBeVisible();

  // Click third accordion
  await page.locator('.accordion-button').nth(2).click();

  // Verify third section content visible
  await expect(page.locator('.accordion-body').nth(2)).toBeVisible();

  // Collapse third accordion
  await page.locator('.accordion-button').nth(2).click();

  // Verify collapsed
  await expect(page.locator('#section3Content')).not.toBeVisible();

  await page.waitForTimeout(6000);

});


//import { test, expect } from '@playwright/test';

test('mock api response live example', async ({ page }) => {

  // Mock API response
  await page.route('https://jsonplaceholder.typicode.com/posts/1', async route => {

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        id: 1,
        title: 'Fake Playwright Title',
        body: 'This response is mocked'
      })
    });

  });

  // Open page
  await page.goto('https://jsonplaceholder.typicode.com/posts/1');

  // Verify mocked data
  await expect(page.locator('body'))
    .toContainText('Fake Playwright Title');

});