import{test,expect} from'@playwright/test';
test('verify list of products',async({page})=>{ 
    await page .goto('https://www.saucedemo.com/inventory.html');
    const products=await page.locator('.inventory_item_name').all();
    for (const product of products) {
        const text = await product.textContent();
        console.log(text);
    }
});