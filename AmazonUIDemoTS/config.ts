import {Config, browser} from "protractor";

export let config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: "jasmine",

    capabilities: {
        browserName: "chrome"
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    },

    specs: ["./Specs/amazonUI.js"]
    
}