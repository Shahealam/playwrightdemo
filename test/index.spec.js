const{test,expect}=require('@playwright/test');
test('mytest',async({page})=>{
    await page.goto('https://www.headshotphoto.io/');
    
    const title=await page.title();
    console.log(title);
 
    expect(title).toContain('AI Headshot Generator - Professional Headshots in 2 Minutes | Headshot Photo');

   const pageurl=page.url();
    console.log(pageurl);
    expect(pageurl).toBe('https://www.headshotphoto.io/');
});
