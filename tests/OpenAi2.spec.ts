import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  test.describe('', { timeout: 60000 }, async () => {
    await page.goto('https://ebindqaem-app2.eglobal.com.mx/');
    await page.getByText('Ir a inicio de sesión').click();

    await page.getByPlaceholder('User Name').fill('Socejo');
    await page.getByPlaceholder('Password').fill('T35t1n6B0_25*');
    await page.getByRole('button', { name: 'Log in' }).click();

    await page.getByText('more_horiz').click();
    await page.waitForSelector('.q-icon.ebind-icons.icon-consulta-log');
    await page.click('.q-icon.ebind-icons.icon-consulta-log');

    const filePath = 'C:/Users/icf2303/Documents/Matriz/Matriz.xlsx';
    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    const fecha = worksheet['L14'].w;
    const dato1 = worksheet['P14'].w;
    const dato2 = worksheet['S14'].w;
    const dato3 = worksheet['U14'].w;

    console.log('Fecha:', fecha);
    console.log('Dato1:', dato1);
    console.log('Dato2:', dato2);
    console.log('Dato3:', dato3);
  });
});
