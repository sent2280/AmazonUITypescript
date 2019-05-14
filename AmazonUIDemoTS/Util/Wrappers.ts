import {ExpectedConditions,browser,ElementFinder} from "protractor";


export class Wrappers {

    async waitForPresenceOfElement(element: ElementFinder,maxWaitTime: number){
        let ECondition1 = ExpectedConditions;
        let condition1 = ECondition1.presenceOf(element);
        await browser.wait(condition1, maxWaitTime);
        console.log('Waiting for the element to be present');
        };
        
}
