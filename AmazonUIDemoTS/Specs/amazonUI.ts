import {browser} from "protractor";
import {HomePage} from "../Pages/HomePage";
import {Wrappers} from "../Util/Wrappers";

let homePage  = new HomePage();
let wrappers = new Wrappers();

describe("To Test the amazon website",function(){

    beforeEach(async () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        await browser.get("https://amazon.in/");
    });

    it("Launch the amazon website", async () =>{
        await wrappers.waitForPresenceOfElement(await homePage.getSearchBox(),30);
        await homePage.getSearchBox().sendKeys("redmi");
		await homePage.getSearchbutton().click();
        
        await wrappers.waitForPresenceOfElement(await homePage.getSortByDropDown(),30);
        await homePage.getSortByDropDown().click();
        
        await wrappers.waitForPresenceOfElement(await homePage.getPriceLowToHigh(),30);
        await homePage.getPriceLowToHigh().click();

        let priceList = await homePage.getAllProductsPrice();
        console.log("Total items in the page = " + priceList.length);

		let sorted:boolean = true;
		for (let i = 0; i < priceList.length - 1; i++) {
			let stringPrice1 = await priceList[i].getText();
			let stringPrice2 = await priceList[i + 1].getText();

			// replacing comma in amount and converting string to integer for comparision

			let price1:number = parseInt(await stringPrice1.replace(",", ""), 10);
			let price2:number = parseInt(await stringPrice2.replace(",", ""), 10);
			console.log("The Values compared are " + price1 + " and " + price2);
			if (price1 > price2) {
				sorted = false;
				break;
			}
		}
		if (sorted == false) {
			throw new Error("Sorting Falied");
		}
        
        
    })
})