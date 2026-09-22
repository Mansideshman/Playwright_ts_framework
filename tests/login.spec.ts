import { test, expect } from '@playwright/test';


interface User{
    username: string;
    password: string;
    expectedError?: string;
}

const standard: User =
{
    username: 'standard_user',
    password: 'secret_sauce',
};

const invalidPassword: User =
{
    username: 'standard_user',
    password: 'wrong_password',
    expectedError: 'Username and password do not match',
};

const lockedOut: User =
{
    username:'locked_out_user',
    password: 'secret_sauce',
    expectedError: 'locked out',
};

const users = { standard, invalidPassword, lockedOut };

test('valid login goes to inventory page',async ({page})=>
{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(users.standard.username);
    await page.getByPlaceholder('Password').fill(users.standard.password);
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page).toHaveURL(/inventory/);
});

test('invalid login shows error message',async ({page})=>
{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(users.invalidPassword.username);
    await page.getByPlaceholder('Password').fill(users.invalidPassword.password);
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.getByText(users.invalidPassword.expectedError!)).toBeVisible();
});

test('locked out user sees error message',async ({page})=>
{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(users.lockedOut.username);
    await page.getByPlaceholder('Password').fill(users.lockedOut.password);
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.getByText(users.lockedOut.expectedError!)).toBeVisible();
});


