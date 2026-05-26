// import { test, expect } from '@playwright/test';

// test('handle nested frames', async ({ page }) => {

//     await page.goto('https://demoqa.com/nestedframes');

//     // // parent frame
//     // const parentText = await page
//     //     .frameLocator('#frame1')
//     //     .locator('body')
//     //     .textContent();

//     // console.log('Parent Frame Text:', parentText);

//     // // child frame inside parent frame
//     // const childText = await page
//     //     .frameLocator('#frame1')
//     //     .frameLocator('iframe')
//     //     .locator('p')
//     //     .textContent();

//     // console.log('Child Frame Text:', childText);

//     // // validation
//     // expect(parentText).toContain('Parent frame');

//     // expect(childText).toBe('Child Iframe');

//     const parentframe = page.frameLocator('#frame1').locator('body');
    
//     await expect(parentframe).toHaveText('Parent frame');   
    

// });