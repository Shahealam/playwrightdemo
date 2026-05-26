import {test,expect} from '@playwright/test';
import { LoginPage } from './login.js';


 test('Verify user login', async ({ page }) => {

        // Create object of LoginPage class

        const loginPage = new LoginPage(page);


        // Open page

        await loginPage.openloginpage();


        // Login

        await loginPage.login('testuser', 'Test@123');


    });

