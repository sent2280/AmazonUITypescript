"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var HomePage_1 = require("../Pages/HomePage");
var Wrappers_1 = require("../Util/Wrappers");
var homePage = new HomePage_1.HomePage();
var wrappers = new Wrappers_1.Wrappers();
describe("To Test the amazon website", function () {
    var _this = this;
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.ignoreSynchronization = true;
                    protractor_1.browser.manage().window().maximize();
                    return [4 /*yield*/, protractor_1.browser.get("https://amazon.in/")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("Launch the amazon website", function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, priceList, sorted, i, stringPrice1, stringPrice2, price1, _g, price2, _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    _b = (_a = wrappers).waitForPresenceOfElement;
                    return [4 /*yield*/, homePage.getSearchBox()];
                case 1: return [4 /*yield*/, _b.apply(_a, [_j.sent(), 30])];
                case 2:
                    _j.sent();
                    return [4 /*yield*/, homePage.getSearchBox().sendKeys("redmi")];
                case 3:
                    _j.sent();
                    return [4 /*yield*/, homePage.getSearchbutton().click()];
                case 4:
                    _j.sent();
                    _d = (_c = wrappers).waitForPresenceOfElement;
                    return [4 /*yield*/, homePage.getSortByDropDown()];
                case 5: return [4 /*yield*/, _d.apply(_c, [_j.sent(), 30])];
                case 6:
                    _j.sent();
                    return [4 /*yield*/, homePage.getSortByDropDown().click()];
                case 7:
                    _j.sent();
                    _f = (_e = wrappers).waitForPresenceOfElement;
                    return [4 /*yield*/, homePage.getPriceLowToHigh()];
                case 8: return [4 /*yield*/, _f.apply(_e, [_j.sent(), 30])];
                case 9:
                    _j.sent();
                    return [4 /*yield*/, homePage.getPriceLowToHigh().click()];
                case 10:
                    _j.sent();
                    return [4 /*yield*/, homePage.getAllProductsPrice()];
                case 11:
                    priceList = _j.sent();
                    console.log("Total items in the page = " + priceList.length);
                    sorted = true;
                    i = 0;
                    _j.label = 12;
                case 12:
                    if (!(i < priceList.length - 1)) return [3 /*break*/, 18];
                    return [4 /*yield*/, priceList[i].getText()];
                case 13:
                    stringPrice1 = _j.sent();
                    return [4 /*yield*/, priceList[i + 1].getText()];
                case 14:
                    stringPrice2 = _j.sent();
                    _g = parseInt;
                    return [4 /*yield*/, stringPrice1.replace(",", "")];
                case 15:
                    price1 = _g.apply(void 0, [_j.sent(), 10]);
                    _h = parseInt;
                    return [4 /*yield*/, stringPrice2.replace(",", "")];
                case 16:
                    price2 = _h.apply(void 0, [_j.sent(), 10]);
                    console.log("The Values compared are " + price1 + " and " + price2);
                    if (price1 > price2) {
                        sorted = false;
                        return [3 /*break*/, 18];
                    }
                    _j.label = 17;
                case 17:
                    i++;
                    return [3 /*break*/, 12];
                case 18:
                    if (sorted == false) {
                        throw new Error("Sorting Falied");
                    }
                    return [2 /*return*/];
            }
        });
    }); });
});
