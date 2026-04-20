import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private bookStoreAppLink = this.page.getByRole('link', { name: 'Book Store Application' });

    async clickBookStoreAppLink() {
        await this.bookStoreAppLink.click();
    }
    


}


