// import { test, expect } from '@playwright/test';

// test('handling iframes', async ({ page }) => {

//     await page.goto('https://demoqa.com/frames');

//     // wait for iframe to load
//     await page.waitForSelector('#frame1');

//     // count frames
//     const frames = page.frames();

//     console.log('total frames are:', frames.length);

//     // get text from iframe
//     const heading = await page.frameLocator('#frame1').locator('#sampleHeading').textContent();

//     console.log('heading of frame1 is:', heading);

//    await expect(heading).toBe('This is a sample page');
// });

// test('verify nested iframes',async ({ page }) => {

//     await page.goto('https://demoqa.com/frames');

//     const nestedframe= page.frameLocator('#frame2').locator('#sampleHeading');
    
//     await expect(nestedframe).toHaveText('This is a sample page');






// });
