// Dependencies
import puppeteerClient, { Browser } from 'puppeteer-core'
import chrome from 'chrome-aws-lambda'

const LOCAL_CHROME_EXECUTABLE = {
  win32: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  linux: '/usr/bin/google-chrome',
  darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
}

interface Options {
  args: string[]
  executablePath: string
  headless: boolean
}

export const puppeteer = {
  async getOptions(): Promise<Options> {
    const localExecutablePath = LOCAL_CHROME_EXECUTABLE[process.platform]
    const executablePath = (await chrome.executablePath) || localExecutablePath

    return {
      args: chrome.args,
      executablePath,
      headless: true
    }
  },

  getBrowser: async (): Promise<Browser> => {
    const options = await puppeteer.getOptions()
    const browser = await puppeteerClient.launch(options)

    return browser
  }
}
