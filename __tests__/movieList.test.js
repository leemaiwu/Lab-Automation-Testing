const { Builder, Capabilities } = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { websiteTitle, addsToList, movieWatched, strikeThrough } = require('../testFunctions/testingFunctions')

beforeAll(async () => {
    await driver.get("http://127.0.0.1:5501/movieList/index.html")
    await driver.sleep(1000)
})

afterAll(async () => {
    await driver.quit()
})

describe('"Movie List" title displayed', () => {
    it('Title is there', async () => {
        await websiteTitle(driver)
    })
})

describe('inputed movie added to list', () => {
    it('movie added', async () => {
        await addsToList(driver)
        await driver.sleep(1000)
    })
})

describe('movie striked through because "watched"', () => {
    it('strike works', async () => {
        await movieWatched(driver)
        await driver.sleep(1000)
    })
    it('watched text displayed', async () => {
        await strikeThrough(driver)
        await driver.sleep(1000)
    })
})
