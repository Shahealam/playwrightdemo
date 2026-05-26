/*
import { test, expect } from '@playwright/test';

test('verify, find and delete user in webtables', async ({ page }) => {

    await page.goto('https://demoqa.llq.vn/webtables');

    // Add user
    await page.getByRole('button', { name: 'ADD' }).click();

    await page.getByLabel('First Name').fill('John');
    await page.getByLabel('Last Name').fill('Doe');
    await page.getByLabel('Email').fill('john.doe@example.com');
    await page.getByLabel('Salary').fill('50000');
    await page.getByLabel('Department').fill('Engineering');

    await page.getByRole('button', { name: 'Save' }).click();

    // Search user
    await page.getByPlaceholder('Type to search').fill('john.doe@example.com');

    await Promise.all([
        page.waitForResponse(res =>
            res.url().includes('/api/book-table/search') && res.status() === 200
        ),
        page.keyboard.press('Enter')
    ]);

    const row = page.locator('#employeeTable tbody tr', {
        hasText: 'john.doe@example.com'
    });

    await expect(row).toHaveCount(1);

    // Delete
    await row.getByRole('button', { name: 'Delete' }).click();

    // Verify delete
    await expect(row).toHaveCount(0);
});
*/