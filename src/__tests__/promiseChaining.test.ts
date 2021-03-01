import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver
} from "selenium-webdriver"
const chromedriver = require("chromedriver");
const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

    test("example chaining", () => {
        return {
            driver
            .get("https://www.google.com")
            .then(() => {
                return driver.wait(until.elementLocated(By.name("q")))
                })
        }
    })