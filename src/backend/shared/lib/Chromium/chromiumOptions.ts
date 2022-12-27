// Dependencies
import chromium from 'chrome-aws-lambda'
import { PuppeteerLaunchOptions } from 'puppeteer-core'

const chromeExecPaths = {
  win32: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  linux: '/usr/bin/google-chrome',
  darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
}

const exePath = chromeExecPaths[process.platform]

export async function getOptions(
  isDev: boolean
): Promise<PuppeteerLaunchOptions> {
  if (isDev) {
    return {
      args: [],
      executablePath: exePath,
      headless: true
    }
  }

  return {
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true
  }
}
