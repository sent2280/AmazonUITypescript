import {element,by, ElementFinder, ElementArrayFinder} from "protractor";

export class HomePage {

    public getSearchBox (): ElementFinder{
        return element(by.id('twotabsearchtextbox'));
    };

    public getSearchbutton (): ElementFinder{
        return element(by.xpath("//input[@type='submit']"));
    };

    public getSortByDropDown(): ElementFinder{
        return element(by.id("a-autoid-0-announce"));
    };

    public getPriceLowToHigh(): ElementFinder{
        return element(by.xpath("//a[text()='Price: Low to High']"));
    };

    public getAllProductsPrice(): ElementArrayFinder{
        return element.all(by.xpath("//div/div[contains(@class,'spacing-top-small')]/div/div/a/span[@data-a-color='price']/span[2]/span[2]"));
    };


}