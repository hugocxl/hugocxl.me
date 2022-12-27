// Dependencies
import puppeteerClient, { Browser } from 'puppeteer-core'

// Options
import { getOptions } from './chromiumOptions'

export const chromium = {
  getBrowser: async (): Promise<Browser> => {
    const isDev = process.env.NODE_ENV === 'development'
    const options = await getOptions(isDev)
    const browser = await puppeteerClient.launch(options)

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
