// Dependencies
import chrome from 'chrome-aws-lambda'
import playwright from 'playwright-core'

export const chromium = {
  getBrowser: async (): Promise<playwright.BrowserContext> => {
    const browser = await playwright.chromium.launch({
      args: [...chrome.args, '--font-render-hinting=none'], // This way fix rendering issues with specific fonts
      executablePath:
        process.env.NODE_ENV === 'production'
          ? await chrome.executablePath
          : '/usr/local/bin/chromium',
      headless: process.env.NODE_ENV === 'production' ? chrome.headless : true
    })

    return browser.newContext()
  }
}
