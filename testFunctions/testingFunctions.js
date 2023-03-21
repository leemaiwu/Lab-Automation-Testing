const { By } = require('selenium-webdriver')

const movie = "Shrek"

const websiteTitle = async (driver) => {
    const title = await driver.findElement(By.xpath('//h1[text()="Movie List"]'))
 
    expect(title.isDisplayed()).toBeTruthy()
}
const addsToList = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys(`${movie}\n`)
    const addedMovie = await driver.findElement(By.xpath(`//li/span[text()='${movie}']`))
    expect(addedMovie.isDisplayed()).toBeTruthy()
}

const movieWatched = async (driver) => {
    await driver.findElement(By.xpath('//li/span')).click()
    const striked = await driver.findElement(By.id('message'))
    expect(striked.isDisplayed()).toBeTruthy()
}

const strikeThrough = async (driver) => {
    const watched = await driver.findElement(By.xpath('//aside[contains(text(),"watched!")]'))
    expect(watched.isDisplayed()).toBeTruthy()
}

module.exports = {
    websiteTitle,
    addsToList,
    movieWatched,
    strikeThrough
}
