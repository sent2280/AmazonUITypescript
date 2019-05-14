"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.getSearchBox = function () {
        return protractor_1.element(protractor_1.by.id('twotabsearchtextbox'));
    };
    ;
    HomePage.prototype.getSearchbutton = function () {
        return protractor_1.element(protractor_1.by.xpath("//input[@type='submit']"));
    };
    ;
    HomePage.prototype.getSortByDropDown = function () {
        return protractor_1.element(protractor_1.by.id("a-autoid-0-announce"));
    };
    ;
    HomePage.prototype.getPriceLowToHigh = function () {
        return protractor_1.element(protractor_1.by.xpath("//a[text()='Price: Low to High']"));
    };
    ;
    HomePage.prototype.getAllProductsPrice = function () {
        return protractor_1.element.all(protractor_1.by.xpath("//div/div[contains(@class,'spacing-top-small')]/div/div/a/span[@data-a-color='price']/span[2]/span[2]"));
    };
    ;
    return HomePage;
}());
exports.HomePage = HomePage;
