"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: "jasmine",
    capabilities: {
        browserName: "chrome"
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    },
    specs: ["./Specs/amazonUI.js"]
};
