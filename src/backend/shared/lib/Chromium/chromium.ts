// Dependencies
import puppeteerClient, { Browser } from 'puppeteer'

export const chromium = {
  getBrowser: async (): Promise<Browser> => {
    const browser = await puppeteerClient.launch()

    return browser
  },

  getPageCookies: async (pageUrl: string) => {
    const browser = await chromium.getBrowser()
    const page = await browser.newPage()
    await page.goto(pageUrl)
    const pageCookies = await page.cookies()
    await page.close()

    return pageCookies
      .map((cookie: any) => {
        return `${cookie.name}=${cookie.value}`
      })
      .join('; ')
  }
}
