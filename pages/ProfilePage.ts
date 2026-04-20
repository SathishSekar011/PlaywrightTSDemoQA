import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProfilePage extends BasePage{

    constructor(page:Page){
        super(page);
    }

    private books = this.page.locator("span[id*='see-book']");
    private prfileLink = this.page.getByRole('link', { name: 'Profile' });

    async getBooksInCollection():Promise<string[]>{
        await this.page.waitForLoadState('load');
        return await this.books.allTextContents();
    }
    
    async clickProfile(){
        await this.prfileLink.click();
        await this.page.waitForTimeout(5000);
    }
    

}


