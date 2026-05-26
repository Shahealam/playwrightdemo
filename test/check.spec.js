import {test,expect} from '@playwright/test';

test.slow('verify, find and delete user in webtables', async ({page}) => {

    await page.goto('https://demoqa.llq.vn/webtables');

    // Add user
    await page.getByRole('button', { name: 'ADD' }).click();});