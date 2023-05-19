import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://ebindqaem-app2.eglobal.com.mx/');
  await page.getByRole('button', { name: 'Ir a inicio de sesión' }).click();
  await page.getByPlaceholder('Nombre de usuario').click();
  await page.getByPlaceholder('Nombre de usuario').fill('icarrazco');
  await page.getByPlaceholder('Nombre de usuario').press('Tab');
  await page.getByPlaceholder('Contraseña').fill('T35t1n6B0_23*');
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await page.goto('https://ebindqaem-app2.eglobal.com.mx/dashboard/issuer/admin/');
  await page.getByText('more_horiz').click();
  await page.locator('form').getByText('arrow_drop_down').click();
  await page.getByText('CITI BANAMEX').click();
  await page.locator('form').getByText('arrow_drop_down').click();
  await page.getByText('BANCO AZTECA').click();
  await page.locator('form').getByText('arrow_drop_down').click();
  await page.getByText('BANCOPPEL').click();
  await page.locator('form').getByText('arrow_drop_down').click();
  await page.getByText('Eglobal').click();
  await page.locator('form').getByText('arrow_drop_down').click();
  await page.getByText('Log de autorizaciones POS').nth(1).click();
  await page.locator('form').getByText('arrow_drop_down').click();
  await page.getByText('CITI BANAMEX').click();
  await page.getByLabel('Fecha de transacción inicial*').click();
  await page.getByLabel('Fecha de transacción inicial*').click();
  await page.locator('label').filter({ hasText: 'Fecha de transacción inicial*' }).locator('i').click();
  await page.getByRole('button').filter({ hasText: 'chevron_left' }).first().click();
  await page.getByRole('button').filter({ hasText: 'chevron_left' }).first().click();
  await page.getByRole('button').filter({ hasText: 'chevron_right' }).first().click();
  await page.getByRole('button').filter({ hasText: 'chevron_right' }).first().click({
    clickCount: 3
  });
  await page.getByRole('button').filter({ hasText: 'chevron_left' }).first().click({
    clickCount: 7
  });
  await page.getByRole('button').filter({ hasText: 'chevron_right' }).first().click();
  await page.getByRole('button').filter({ hasText: 'chevron_left' }).first().click({
    clickCount: 3
  });
  await page.getByRole('button').filter({ hasText: 'chevron_left' }).first().click();
  await page.getByRole('button').filter({ hasText: 'chevron_left' }).first().click();
  await page.getByRole('button').filter({ hasText: 'chevron_right' }).nth(1).click();
  await page.getByRole('button', { name: '3', exact: true }).click();
  await page.getByLabel('Fecha de transacción final*').click();
  await page.getByLabel('Fecha de transacción final*').click();
  await page.locator('label').filter({ hasText: 'Fecha de transacción final*' }).locator('i').click();
  await page.getByRole('button').filter({ hasText: 'chevron_left' }).first().click();
  await page.getByRole('button', { name: '3', exact: true }).click();
  await page.getByLabel('Afiliación').click();
  await page.getByLabel('Afiliación').fill('5732854');
  await page.getByLabel('Número de cuenta*').click();
  await page.getByLabel('Número de cuenta*').click();
  await page.getByLabel('Número de cuenta*').fill('4053069035323479');
  await page.getByLabel('Número de autorización').click();
  await page.getByLabel('Número de autorización').fill('433339');
  await page.getByRole('button', { name: 'Consultar' }).click();
  await page.getByRole('cell', { name: 'BANCO NACIONAL DE MEXICO, S.A.' }).click();
  await page.getByText('03-11-2022').click();
  await page.getByText('16:35:06').click();
  await page.getByText('4053069035323479').click();
  await page.locator('td:nth-child(5)').click();
  await page.getByText('C', { exact: true }).click();
  await page.getByText('5732854').click();
  await page.getByText('433339').click();
  await page.getByText('EVO PAYMENTS MÉXICO').click();
  await page.getByRole('cell', { name: '$220.00' }).click();
  await page.getByText('00', { exact: true }).click();
  await page.getByText('0225').click();
  await page.getByText('--').click();
  await page.getByRole('cell', { name: 'Emisor' }).click();
  await page.getByRole('cell', { name: 'Fecha transacción' }).click();
  await page.getByRole('cell', { name: 'Hora transacción' }).click();
  await page.getByRole('cell', { name: 'Número cuenta' }).click();
  await page.getByRole('cell', { name: 'FPAN' }).locator('i').click();
  await page.getByRole('cell', { name: 'Tipo producto' }).click();
  await page.getByRole('cell', { name: 'Comercio' }).click();
  await page.getByRole('cell', { name: 'Número autorización' }).click();
  await page.getByRole('cell', { name: 'Adquirente' }).click();
  await page.getByRole('cell', { name: 'Monto transacción' }).click();
  await page.getByRole('cell', { name: 'Código respuesta' }).click();
  await page.getByRole('cell', { name: 'Código transacción' }).click();
  await page.getByRole('cell', { name: 'Tipo transacción' }).click();
  await page.getByRole('cell', { name: 'Documentación' }).click();
  await page.getByRole('button', { name: 'Ver documento' }).click();
  await page.getByRole('button').filter({ hasText: 'close' }).click();
  await page.getByRole('banner').getByRole('button', { name: 'Expandir' }).click();
  await page.getByText('Cerrar sesión').click();




  //VUELTA 2 DONDE VEO COMO PONER LO DE LA FECHA
  await page.locator('label').filter({ hasText: 'Fecha de transacción inicial*' }).locator('i').click();//Abrimos el elemento del calendario
  await page.getByRole('button').filter({ hasText: 'chevron_left' }).first().click(); //Para navegar dentro del calendario
  await page.getByRole('button', { name: 'Mayo' }).click() //Seleccionamos el mes
  await page.getByRole('button', { name: '2023' }).click();//Año
  await page.getByRole('button', { name: '3', exact: true }).click();//Día
  await page.locator('label').filter({ hasText: 'Fecha de transacción final*' }).locator('i').click();//Fecha final
  
});