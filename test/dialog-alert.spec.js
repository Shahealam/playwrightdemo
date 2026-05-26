// import { test, expect } from '@playwright/test';
// //yes no
// test('single dialog handling', async ({ page }) => {

//   await page.goto('https://testpages.eviltester.com/pages/basics/alerts-javascript/');

//   page.once('dialog', async dialog => {

//     console.log(dialog.message());

//     await dialog.accept();

//   });
// await page.locator('#alertexamples').click();
// await expect(page.getByText('You triggered and handled the alert dialog')).toBeVisible();

// });

// // Confirm 

// test('handle confirm dialog', async ({ page }) => {

//   await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

//   page.on('dialog', async dialog => {

//     console.log(dialog.message());

//     expect(dialog.type()).toBe('confirm');

//     // OK button
//     await dialog.accept();

//     // Cancel button
//     // await dialog.dismiss();
//   });

//   await page.getByText('Click for JS Confirm').click();

// });

// //Prompt
// test('handle prompt dialog', async ({ page }) => {

//   await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

//   page.on('dialog', async dialog => {

//     console.log(dialog.message());

//     expect(dialog.type()).toBe('prompt');

//     // Pass value inside prompt
//     await dialog.accept('Shahe Alam');

//   });

//   await page.getByText('Click for JS Prompt').click();

// });


