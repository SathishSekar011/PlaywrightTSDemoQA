import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private firstNameInput = this.page.getByRole('textbox', { name: 'First Name' });
    private lastNameInput = this.page.getByRole('textbox', { name: 'Last Name' });
    private userNameInput = this.page.getByRole('textbox', { name: 'UserName' });
    private passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    private registerButton = this.page.getByRole('button', { name: 'Register' });
    private backToLoginButton = this.page.getByRole('button', { name: 'Back to Login' });

    async fillFirstName(firstName: string) {
        await this.firstNameInput.pressSequentially(firstName);
    }

    async fillLastName(lastName: string) {
        await this.lastNameInput.pressSequentially(lastName);
    }

    async fillUserName(userName: string) {
        await this.userNameInput.pressSequentially(userName);
    }

    async fillPassword(password: string) {
        await this.passwordInput.pressSequentially(password);
    }

    async clickRegisterButton() {
        await this.registerButton.click();
    }

    async createNewUser(firstName: string, lastName: string, userName: string, password: string) {

        await this.fillFirstName(firstName);
        await this.fillLastName(lastName);
        await this.fillUserName(userName);
        await this.fillPassword(password);
        //await this.page.waitForTimeout(5000);
        await this.clickRegisterButton();
        //await this.page.waitForTimeout(5000);
    }

    async clickBackToLoginButton() {    
        await this.backToLoginButton.click();
    }

}


