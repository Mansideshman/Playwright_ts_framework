import { test, expect } from '@playwright/test';

test('valid login goes to inventory page',async ({page})=>
{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page).toHaveURL(/inventory/);
});

test('invalid login shows error message',async ({page})=>
{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrong password');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.getByText('Username and password do not match')).toBeVisible();
});

test('locked out user sees error message',async ({page})=>
{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.getByText('locked out')).toBeVisible();
});

