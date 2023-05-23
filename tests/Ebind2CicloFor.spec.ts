import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';

test.use({ignoreHTTPSErrors: true});
test.describe('Ebind2', () => {
  test('Ebind Logo', async ({ page }) => {

    //Log In
    await page.goto('https://ebindqaem-app2.eglobal.com.mx/');
    await page.getByText('Ir a inicio de sesión').click();
    await page.getByPlaceholder('User Name').fill('icarrazco');
    await page.getByPlaceholder('Password').fill('T35t1n6B0_23*');
    await page.getByRole('button', { name: 'Log in' }).click();
    
    //Camino al Módulo a probar
    await page.getByText('more_horiz').click(); 
    await page.waitForSelector('.q-icon.ebind-icons.icon-consulta-log');
    await page.click('.q-icon.ebind-icons.icon-consulta-log');
    
    //Preparando Matriz con información del Excell
    const filePath = './resources/insumo.xlsx';
    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    
    // Matriz para almacenar los resultados
    const resultados: number[][] = [];
    console.log('Matriz Resultados:',resultados);
    //Iterando los registros del excell en el formulario
    for (let i = 2; i <= 6; i++) {
      const banco =  worksheet['B' + i].w;
      const fecha = worksheet['F' + i].w;
      const afiliacion = worksheet['C' + i].w;
      const cuenta = worksheet['D' + i].w;
      const autorizacion = worksheet['E' + i].w;

      await page.locator('form').getByText('arrow_drop_down').click();
      await page.locator(`//div[text()='${banco}']`).click();
      await page.getByLabel('Fecha de transacción inicial*').fill(fecha);
      await page.getByLabel('Fecha de transacción final*').fill(fecha);
      await page.getByLabel('Afiliación').fill(afiliacion);
      await page.getByRole('textbox', { name: 'Número de cuenta*' }).fill(cuenta);
      await page.getByLabel('Número de autorización').fill(autorizacion);
      await page.getByRole('button', { name: 'Consultar' }).click();
      console.log('Fecha:', fecha);
      console.log('Dato1:', afiliacion);
      console.log('Dato2:', cuenta);
      console.log('Dato3:', autorizacion);
      
      const elementsToClick = [  //Validar el orden en el que aparecen de izquierda a derecha
        'Emisor',
        'Fecha transacción',
        'Hora transacción',
        'Número cuenta',
        'FPAN',
        'Tipo producto',
        'Comercio',
        'Número autorización',
        'Adquirente',
        'Monto transacción',
        'Código respuesta',
        'Código transacción',
        'Tipo transacción',
        'Documentación',
        'close',
        'Expandir'
      ];
      let allElementsPresent = true;

      
      for (const element of elementsToClick) {
        const locator = page.getByRole('cell', { name: element });
        if (!(await locator.isVisible())) {
          allElementsPresent = false;
          break;
        }
      }
      resultados.push([allElementsPresent ? 1 : 0]);
    }
      //Cerrar Sesion
      // await page.getByRole('banner').getByRole('button', { name: 'Expandir' }).click();
      // await page.getByText('Cerrar sesión').click();
})  
});
//icarrazco  T35t1n6B0_23*
// Socejo T35t1n6B0_25*


        