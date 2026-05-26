// import{test,expect} from '@playwright/test';
// /*
// test('verify website title',async({page})=>{
//     await page.goto('https://www.headshotphoto.io/');
//     await expect(page).toHaveTitle('AI Headshot Generator - Professional Headshots in 2 Minutes | Headshot Photo');
// });




// test('Verify website logo', async ({ page }) => {

//     await page.goto('https://www.headshotphoto.io/');

//    // const logo = page.getByAltText('Headshot Photo Logo');

//     const logo = page.locator('img[alt="Headshot Photo Logo"]').first();

//     await expect(logo).toBeVisible();

// });

// test('verify url',async({page})=>{
//     await page.goto('https://www.headshotphoto.io/');

//     const expectedUrl = 'https://www.headshotphoto.io/';

//     const actualUrl = page.url();

//     await expect(actualUrl).toBe(expectedUrl);    
// });


// test('verify list of products',async({page})=>{ 
//     await page .goto('https://www.saucedemo.com/inventory.html');
//     await page.fill('#user-name', 'standard_user');
//     await page.fill('#password', 'secret_sauce');
//     await page.click('#login-button');
//     const products=await page.locator('.inventory_item_name').all();
//     console.log('total products:', products.length);
//     for (const product of products) {
//         const text = await product.textContent();
//         console.log(text);
//     }
// */


// test('verify login functionality',async({page})=>{
//     await page.goto('https://www.saucedemo.com/');
//     await page.getByPlaceholder('Username').fill('standard_user');
//     await page.getByPlaceholder('Password').fill('secret_sauce');                                               
//     await page.getByRole('button', { name: 'Login' }).click();
//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    

// });                                                                                         


