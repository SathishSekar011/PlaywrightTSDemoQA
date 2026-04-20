import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private loginPageLink = this.page.getByRole('link', { name: 'Login' });
    private newUserButton = this.page.getByRole('button', { name: 'New User' });
    private userNameInput = this.page.getByRole('textbox', { name: 'UserName' });
    private passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    private loginButton = this.page.getByRole('button', { name: 'Login' });
    private errorMessage = this.page.locator('#name');

    async clickLoginPageLink() {
        await this.loginPageLink.click();
    }

    async clickNewUserButton() {
        await this.newUserButton.click();
    }

    async fillUserName(userName: string) {
        await this.userNameInput.fill(userName);
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(userName: string, password: string) {
        await this.fillUserName(userName);
        await this.fillPassword(password);
        await this.clickLoginButton();
        await this.page.waitForLoadState('load');
    }

    async getLoginErrorMessage() {
        return await this.errorMessage.textContent();
    }
    
}