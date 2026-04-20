import { test as base, expect} from '@playwright/test';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import { BasePage } from './BasePage';
import { BooksPage } from './BooksPage';
import { ProfilePage } from './ProfilePage';



type PageFixtures = {
    homePage: HomePage;
    loginPage: LoginPage;
    registerPage: RegisterPage;
    basePage: BasePage;
    profilePage: ProfilePage;
    booksPage: BooksPage;
};


export const test = base.extend<PageFixtures>({
     basePage: async ({ page }, use) => {
        use(new BasePage(page));
    },
    homePage: async ({ page }, use) => {
        const homePageObj = new HomePage(page);
        use(homePageObj);
    },
    loginPage: async ({ page }, use) => {
        use(new LoginPage(page));
    },
    registerPage: async ({ page}, use) => {
        use(new RegisterPage(page) );
    },
    booksPage: async({page},use)=>{
        use(new BooksPage(page));
    },
    profilePage: async({page}, use)=>{
        use(new ProfilePage(page));
    }
   
})

export { expect };


