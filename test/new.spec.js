const { chromium } = require('playwright');

(async () => {
  // Launch browser (headed mode so you can see it)
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    // Clearing location permissions to avoid browser popups
    permissions: ['geolocation'] 
  });
  const page = await context.newPage();

  try {
    // 1. Navigate to Cleartrip
    console.log("Navigating to Cleartrip...");
    await page.goto('https://www.cleartrip.com/', { waitUntil: 'networkidle' });

    // 2. Close any initial login/promotion popups if they appear
    // Use a try-catch because popups are non-deterministic
    try {
      const closeButton = page.locator('div.p-absolute.t-3.r-3.cursor-pointer'); 
      await closeButton.waitFor({ timeout: 5000 });
      await closeButton.click();
    } catch (e) {
      console.log("No initial popup found.");
    }

    // 3. Enter 'From' City
    console.log("Entering Departure City...");
    const fromInput = page.locator('input[placeholder="Where from?"]');
    await fromInput.click();
    await fromInput.fill('Bangalore');
    // Wait for the suggestion list and select the first option
    await page.waitForSelector('ul.p-absolute.bg-white.w-100p');
    await page.keyboard.press('Enter');

    // 4. Enter 'To' City
    console.log("Entering Destination City...");
    const toInput = page.locator('input[placeholder="Where to?"]');
    await toInput.click();
    await toInput.fill('Mumbai');
    // Select the first suggestion
    await page.waitForSelector('ul.p-absolute.bg-white.w-100p');
    await page.keyboard.press('Enter');

    // 5. Select Date
    console.log("Selecting Date...");
    // Open the calendar
    await page.locator('div.flex.flex-middle.p-relative.row.interactable').first().click();
    // Select a specific date (e.g., 25th of current month)
    // Cleartrip uses div roles or aria-labels for dates
    await page.locator('div[aria-label*="May 25"]').click();

    // 6. Search Flights
    console.log("Searching...");
    await page.getByRole('button', { name: 'Search flights' }).click();

    // 7. Wait for results page
    await page.waitForURL('**/flights/results**');
    console.log("Results loaded successfully!");

    // Take a screenshot of the results
    await page.screenshot({ path: 'cleartrip_results.png' });

  } catch (error) {
    console.error("Automation failed:", error);
  } finally {
    await browser.close();
  }
})();