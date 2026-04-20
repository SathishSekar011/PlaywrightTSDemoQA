import { test, expect } from "../pages/PageFixture";

test('validate user login with invalid credentials', async ({page, basePage,homePage,loginPage,registerPage}) => {


    await basePage.navigateTo('/');
    await homePage.clickBookStoreAppLink();
    await loginPage.clickLoginPageLink();
    await loginPage.clickNewUserButton();
    await registerPage.createNewUser('Sathish', 'Testing', 'SathishTesting', 'Sathish@123');
    await registerPage.clickBackToLoginButton();
    await loginPage.login('SathishTesting', 'Sathish123');
    expect(await loginPage.getLoginErrorMessage()).toBe('Invalid username or password!');
    //await page.pause();
 
});