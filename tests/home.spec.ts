import { expect, test } from '@playwright/test';

test.describe('Open Home Page Verify the title', () => {
    
    test('Veritying the title', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/')
        await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro')
    })


    
})

