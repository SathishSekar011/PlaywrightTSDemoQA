import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class BooksPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private bookStoreLink = this.page.getByRole('link', { name: 'Book Store' , exact: true});
    private addTocollection = this.page.getByRole('button', { name: 'Add To Your Collection' });
    private backToBookStore = this.page.getByRole('button', { name: 'Back To Book Store' });
    private getBookLocator(bookName: string) {
        return this.page.getByRole('link', { name: bookName });
    }

    async clickBookStoreButton() {
        await this.bookStoreLink.click();
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(5000);
    }

    async selectBook(...bookName: string[]) {
        for (const book of bookName) {
           await this.getBookLocator(book).click();
           await this.page.waitForLoadState('networkidle');
           await this.page.waitForTimeout(5000);

            const dialogPromise = this.page.waitForEvent('dialog');
            this.page.once('dialog', async (dialog) => {
                console.log(dialog.message());
                await dialog.accept();
            });
           await this.addTocollection.click();
           await dialogPromise;
            await this.backToBookStore.click();
        }
    }



}


