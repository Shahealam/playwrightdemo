import {test,expect} from '@playwright/test';


test.beforeAll(async()=>
{
console.log('🚀 Starting test executions')


});

test.describe('Login Module check', () => {

test('verify text box',async({page})=>{


await page.goto('https://demoqa.com/text-box');

await page.waitForTimeout(5000);


await page.getByPlaceholder('Full Name').fill('Shahe Alam');

await page.getByPlaceholder('name@example.com').fill('shahe@gmail.com');

await page.getByPlaceholder('Current Address').fill('Sangam vihar wazirabad gali no 4');

await page.locator('#permanentAddress').fill('Sangam vihar wazirabad gali no 4');


await page.getByRole('button',{name:'Submit'}).click();

await page.mouse.wheel(0,9000);



//await expect(page.getByText('Form submitted successfully')).toBeVisible();


await page.waitForTimeout(5000);

});

test('verify check box ',async ({page})=>
{

await page.goto('https://demoqa.com/checkbox');

await page.getByRole('checkbox', { name: 'Select Home' }).click();

await expect(page.getByRole('checkbox', { name: 'Select Home' })).toBeChecked();

await page.waitForTimeout(5000);
});


test('verify radio buttons',async({page})=>
{

await page.goto('https://demoqa.com/radio-button');

const impresivebtn = page.locator('#impressiveRadio');
await impresivebtn.click();


await expect (page.getByText('You have selected Impressive')).toBeVisible();


await page.waitForTimeout(5000);
}


);

test('verify buttons',async({page})=>{

await page.goto('https://demoqa.com/buttons');

await page.locator('#doubleClickBtn').dblclick();

await expect(page.getByText('You have done a double click')).toBeVisible();

//Right click


await page.locator('#rightClickBtn').click({button:'right'});

await expect (page.getByText('You have done a right click')).toBeVisible();



//simple click
//await page.locator('#OKGS2').click();
await page.getByRole('button',{name:'Click Me',exact:true}).click();

await expect (page.getByText('You have done a dynamic click')).toBeVisible();

await page.waitForTimeout(5000);

});




test('handle new tab', async ({ page, context }) => {

    await page.goto('https://demoqa.com/links');

    // Wait for new tab
    const [newPage] = await Promise.all([

        context.waitForEvent('page'),

        await page.locator('#simpleLink').click()

    ]);

    // Wait for new tab to load
    await newPage.waitForLoadState();

    // Assertion
    await expect(newPage).toHaveURL('https://demoqa.com/');

    console.log(await newPage.title());

    await page.waitForTimeout(5000);

});

test('verify broken links', async ({ page, request }) => {

    await page.goto('https://demoqa.com/broken');

    // Get all links
    const links = await page.locator('a').all();
    //const totallink=await links.count();

    //console.log('total links:',totallink);
    console.log('total links:',links);


});



// test.only('Validate Created API link', async ({ page }) => {

//   await page.goto('https://demoqa.com/links');

//   // Wait for API response
//   const responsePromise = page.waitForResponse(response =>
//     response.url().includes('/created')
//   );

//   // Click Created link
//   await page.locator('#created').click();

//   // Capture response
//   const response = await responsePromise;

//   // Print status
//   console.log(response.status());

//   // Validate status code
//   expect(response.status()).toBe(201);

// });


test('verify created links',async({page})=>{
await page.goto ('https://demoqa.com/links');

const responsePromise= page.waitForResponse(response=>response.url().includes('/created'));

await page.locator('#created').click();

const response = await responsePromise;

console.log(response.status());

expect(response.status()).toBe(201);

});


// verify not content 

test('verify not content',async({page})=>
{
await page. goto('https://demoqa.com/links');

const responsePromise = page.waitForResponse(response=>
  response.url().includes('/no-content')
);

await page.locator('#no-content').click();

const response= await responsePromise;

console.log(response.status());

expect(response.status()).toBe(204)

}
);

// Bad reuest check 

test('verify bad request',async({page})=>
{
await page.goto('https://demoqa.com/links');
//wait for response

const responsePromise=page.waitForResponse(response=>
  response.url().includes('/bad-request')
);

await page.locator('#bad-request').click();

const response= await responsePromise;

console.log(response.status());

expect(response.status()).toBe(400)
}


); 


/// UPLOAD AND DOWNLOAD 

test('verify the downlaos button',async({page})=>
{
  await page.goto('https://demoqa.com/upload-download');

await page.locator('#downloadButton').click();

const upload=await page.locator('#uploadFile');

upload.setInputFiles('/home/shahid/Downloads/sampleFile.jpeg');

//await page.waitForTimeout(5000);
});

// DYNAMIC PROPERTIES


test('verify the disable button enable after 5 second ',async({page})=>

{
  await page.goto('https://demoqa.com/dynamic-properties');

  const visiblebtn = await page.locator('#visibleAfter');
  await expect(visiblebtn).toBeVisible({timeout:10000});
 
await visiblebtn.click();
await page.waitForTimeout(5000);
});


//ACCORDIAN

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


/// AUTO COMPLETE

test('Verify auto complete:',async({page})=>
{
await page.goto('https://demoqa.com/auto-complete');

const multicolorname = await page.locator('#autoCompleteMultipleInput');

await multicolorname.fill('g');

await page.locator('.auto-complete__option').nth(0).click();

await page.waitForTimeout(5000);
await multicolorname.fill('R');

await page.locator('.auto-complete__option').nth(0).click();
await page.waitForTimeout(5000);
}
);
});