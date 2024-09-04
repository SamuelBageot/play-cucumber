import { When, Then, setDefaultTimeout, BeforeAll, AfterAll } from '@cucumber/cucumber'
import { Browser, BrowserContext, chromium, expect, Page } from '@playwright/test'

let browser: Browser
let page: Page
let context: BrowserContext

setDefaultTimeout(120000)

BeforeAll(async () => {
  browser = await chromium.launch({ headless: true })
  context = await browser.newContext()
  page = await browser.newPage()
})

AfterAll(async () => {
  await page.close()
  await context.close()
  await browser.close()
})


When('I navigate to the "About Reddit" page', async () => {
  await page.goto('https://www.reddit.com/')
  await page.getByRole('link', { name: 'About Reddit' }).click()
})

Then('I should see the correct url', async () => {
    await expect(page).toHaveURL('https://www.redditinc.com/')
})
