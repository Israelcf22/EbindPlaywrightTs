import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';

test.use({
  ignoreHTTPSErrors: true
});
test.describe('', () => {
  test('EbindLogo', async ({ page }) => {
    await page.goto('https://ebindqaem-app2.eglobal.com.mx/');
    await page.getByText('Ir a inicio de sesión').click();
  
    await page.getByPlaceholder('User Name').fill('icarrazco');
    await page.getByPlaceholder('Password').fill('T35t1n6B0_23*');
    await page.getByRole('button', { name: 'Log in' }).click();
    
    //await page.locator('#cn-button').click 
    await page.getByText('more_horiz').click();  //Comando anterior
    //await expect(page).toHaveURL(/.#admin/)   //esperamos a que la URL cambie, esto no debería de ir, es extra debido a lentitud
    await page.waitForSelector('.q-icon.ebind-icons.icon-consulta-log');
    await page.click('.q-icon.ebind-icons.icon-consulta-log');
    //C14 P14 S14 U14
    //await page.waitForTimeout(100000);
    const filePath = 'C:/Users/icf2303/Documents/Matriz/insumo.xlsx';
    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
   
    const fecha = worksheet['C2'].w;
    const afiliación = worksheet['D2'].w;
    const cuenta  = worksheet['E2'].w;
    const autorización = worksheet['F2'].w;
  
    await page.getByLabel('Fecha de transacción inicial*').fill(fecha);
    await page.getByLabel('Afiliación').fill(afiliación);
    await page.getByRole('textbox', { name: 'Número de cuenta*' }).fill(cuenta);
    await page.getByLabel('Número de autorización').fill(autorización);

    console.log('Fecha:', fecha);
    console.log('Dato1:', afiliación);
    console.log('Dato2:', cuenta);
    console.log('Dato3:', autorización);
})
});

//icarrazco  T35t1n6B0_23*
// Socejo T35t1n6B0_25*
