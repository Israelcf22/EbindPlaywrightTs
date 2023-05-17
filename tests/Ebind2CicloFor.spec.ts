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
    
    //await page.locator('#cn-button').click https://iam-dev.egl-cloud.com/samlv2_idp/XUI/?realm=/ebind-em-uat&spEntityID=urn:uat:ebind:em2:eglobal&goto=https://iam-dev.egl-cloud.com:443/samlv2_idp/saml2/continue/metaAlias/ebind-em-uat/idp?secondVisitUrl%3D/samlv2_idp/SSORedirect/metaAlias/ebind-em-uat/idp?ReqID%253Da59jgig4bg11c9886ecif01b0769id&AMAuthCookie=#login/
    await page.getByText('more_horiz').click();  //Comando anterior
    //await expect(page).toHaveURL(/.#admin/)   //esperamos a que la URL cambie, esto no debería de ir, es extra debido a lentitud
    await page.waitForSelector('.q-icon.ebind-icons.icon-consulta-log');
    await page.click('.q-icon.ebind-icons.icon-consulta-log');
    
      const filePath = 'C:/Users/icf2303/Documents/Matriz/insumo.xlsx';
      const workbook = XLSX.readFile(filePath);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    //C14 P14 S14 U14
    //await page.waitForTimeout(100000);
    for (let i = 2; i <= 6; i++) {
      const fecha = worksheet['C' + i].w;
      const afiliacion = worksheet['D' + i].w;
      const cuenta = worksheet['E' + i].w;
      const autorizacion = worksheet['F' + i].w;
    
      await page.getByLabel('Fecha de transacción inicial*').fill(fecha);
      await page.getByLabel('Afiliación').fill(afiliacion);
      await page.getByRole('textbox', { name: 'Número de cuenta*' }).fill(cuenta);
      await page.getByLabel('Número de autorización').fill(autorizacion);
    
      console.log('Fecha:', fecha);
      console.log('Dato1:', afiliacion);
      console.log('Dato2:', cuenta);
      console.log('Dato3:', autorizacion);
      // Aqui falta agregar lógica para cada iteracion
    }
      
})
});

//icarrazco  T35t1n6B0_23*
// Socejo T35t1n6B0_25*
