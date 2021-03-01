import { Builder, By, Capabilities, WebDriver } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

describe("Practicing CSS selectors", () => {
    beforeEach(async () => {
        await driver.get("https://www.amazon.com");
    })
    afterAll(async () => {
        await driver.quit()
    })

    const searchBar: By = By.css('#twotabsearchtextbox');
    const results: By = By.css('.sg-col-inner');

 test("Searching on Amazon", async () => {
        await driver.findElement(searchBar).sendKeys("baby yoda\n");
        let resultsText = await driver.findElement(results).getText()
        expect(resultsText).toContain("baby yoda")
    })
})