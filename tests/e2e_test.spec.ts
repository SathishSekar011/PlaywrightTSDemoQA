import {test, expect} from '../pages/PageFixture';
import { readCSV } from '../utils/csvReader';

test('@Smoke add book to collection', async({page, request, basePage, homePage, loginPage, registerPage, profilePage, booksPage })=>{
    test.setTimeout(60000);
    await basePage.navigateTo('/');
    await homePage.clickBookStoreAppLink();
    await loginPage.clickLoginPageLink();
    await loginPage.clickNewUserButton();
    let userName = `Test${Date.now()}`;
    let firstName = 'Sathish'+Math.floor(Math.random()*1000);
    let lastName = 'Testing'+Math.floor(Math.random()*1000);
    let password = 'Test@'+Math.floor(Math.random()*1000);
    await registerPage.createNewUser(firstName, lastName, userName, password);
    await registerPage.clickBackToLoginButton();
        const response = await request.post('/Account/v1/User', {
        data: { userName, password }
    });
    
    console.log(response);
    await loginPage.login(userName, password);
    //await page.pause();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(5000);
    await booksPage.clickBookStoreButton();

    let testData = await readCSV(`${process.env.TEST_SUITE?.toLocaleLowerCase()}_data.csv`);
    let bookNames = testData.map((data) => data.title);
    console.log(bookNames);
    await booksPage.selectBook(...bookNames);
    await profilePage.clickProfile();
    expect(await profilePage.getBooksInCollection()).toEqual(expect.arrayContaining(bookNames));

});