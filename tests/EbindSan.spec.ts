import { test, expect } from '@playwright/test';
import  * as Excel from 'exceljs';
test.use({
  ignoreHTTPSErrors: true
});

test('has title', async ({ page }) => {

  const workbook = new Excel.Workbook();
  await workbook.xlsx.readFile('C:/Users/icf2303/Documents/Matriz/Matriz.xlsx');
  const worksheet = workbook.getWorksheet('Hoja1');

  const Emisor =  worksheet.getCell('A2').text;
  const FechaTranIni =  worksheet.getCell('B2').text;
  const FechaTranFin =  worksheet.getCell('C2').text;
  const NoAfiliacion =  worksheet.getCell('D2').text;
  const NoTarjeta =  worksheet.getCell('E2').text;
  const NoAutorizacion =  worksheet.getCell('F2').text;
 
  await page.goto('https://ebindqaem-app2.eglobal.com.mx/');
  await page.locator('//button').click();
  await page.locator('#idToken1').fill('icarrazco');
  await page.locator('#idToken2').fill('T35t1n6B0_23*');
  await page.locator('#loginButton_0').click();  
  await page.waitForSelector("//i[contains(.,'more_horiz')]");
  await page.getByText('more_horiz').click();
  await page.waitForSelector('.q-icon.ebind-icons.icon-consulta-log');
  await page.click('.q-icon.ebind-icons.icon-consulta-log');
  await page.waitForSelector("//span[text()='Consultar']");
  await page.locator("(//i[contains(.,'arrow_drop_down')])[3]").click();
  await page.locator(`//div[@class='q-item__label'][contains(.,'${Emisor}')]`).click();
  await page.locator("//input[@aria-label='Fecha de transacción inicial*']").fill('');
  await page.locator("//input[@aria-label='Fecha de transacción final*']").fill('');
  await page.locator("//input[@aria-label='Fecha de transacción inicial*']").fill('03/11/2023');
  await page.locator("//input[@aria-label='Fecha de transacción final*']").fill('03/11/2023');
  await page.locator("//input[@aria-label='Afiliación']").fill(NoAfiliacion); 
  await page.locator("//input[@aria-label='Número de cuenta*']").fill(NoTarjeta);
  await page.locator("//input[@aria-label='Número de autorización']").fill(NoAutorizacion);
  await page.locator("(//span[contains(.,'Consultar')])[2]").click();
});




