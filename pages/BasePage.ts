import { Page } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /** navigate to a URL */
    async navigateTo(url: string) {
        const context = this.page.context();
        await context.clearCookies();
        await this.page.goto(url);
    }

    async getTitle(): Promise<string> {
        return this.page.title();
    }

    async getCurrentURL(): Promise<string> {
        return this.page.url();
    }

    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('load');
    }

}



