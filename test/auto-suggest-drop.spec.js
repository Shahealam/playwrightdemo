// //import the test and expect functions from playwright test package
// import{test,expect} from '@playwright/test'

// //create test 
// test('AutoSuggestDropdown',async({page})=>{
// //open url
// await page.goto("https://www.cleartrip.com/flights")

// ///////////Popup handling////////////////////////
// //locate the login popup using its unique data-testid attribute
// const loginPopup =  page.locator('[data-testid="loginPopup"]')

// //locate the close icon
// const closeIcon = page.locator('[data-testid="closeIcon"]')

// //check if the login popup is visible on the screen
// //Approach1: Simple and Beginner friendly
// // if(await loginPopup.isVisible())
// // {

// //     //if the popup is visible click on close icon
// //     await closeIcon.click()
// // }

// //Approach2. Safe
// if(await loginPopup.isVisible({timeout:4000}).catch(()=>false))
// {
//      //if the popup is visible click on close icon
//      await closeIcon.click()
// }
// /////////////Auto Suggest dropdown ////////////////////////
// //locate the "where from?" input box
// const fromInput = page.locator('input[placeholder="Where from?"]')

// //click inside the input box to activate it
// await fromInput.click()

// //Type partial text into the input box
// await fromInput.fill("Del") // Del triggers the auto suggest dropdown 

// //wait for 2 seconds so that auto suggestions can load
// await page.waitForTimeout(2000) //2 secs

// //Locate all auto suggestions
// const suggestions = page.locator("//div[@class='mr-1 o-hidden']")

// //count and pring total number of suggestion
// const count = await suggestions.count()
// console.log("Total suggestions:",count)

// //get text of all the suggestions and store in the array
// const texts = await suggestions.allTextContents()

// console.log("Auto suggest values:")
// texts.forEach(text=>console.log(text))

// //select the first option from the auto-suggesiton dropdown
// //suggestions.first().click()

// //suggestions.last().click()
// //suggestions.nth(3).click()

// //Select a specific option Eg. New Delhi and Del

// for(let i =0; i< count ; i++)
// {
//     const optionText = await suggestions.nth(i).innerText();

//     if(optionText.includes('DEL') && optionText.includes('New Delhi'))
//     {
//         await suggestions.nth(i).click()
//         break; //stop loop after selection
//     }
// }

// await page.waitForTimeout(5000) //added pause for demo only 
// })