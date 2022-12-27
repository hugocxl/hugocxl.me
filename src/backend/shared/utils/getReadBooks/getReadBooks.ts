import { chromium } from '@/backend/shared/lib'

export async function getReadBooks() {
  // const baseUrl = 'https://www.goodreads.com'
  const readBooks = []

  const browser = await chromium.getBrowser()

  // Create a new page
  const page = await browser.newPage()

  try {
    await page.goto(
      'https://www.goodreads.com/review/list/127108329-hugo-corta?per_page=200&utf8=%E2%9C%93&view=table'
    )

    // await page.waitForNavigation()

    // await page.waitForSelector('#booksBody')

    // Retrieve the list of read books
    const books = await page.evaluate(() => {
      const baseUrl = 'https://www.goodreads.com'
      const list = []
      const items = document.querySelectorAll('tr.bookalike')

      for (const item of items) {
        list.push({
          link:
            baseUrl +
            item
              .querySelector('.title')
              .querySelector('a')
              .getAttribute('href'),
          title: item
            .querySelector('.title')
            .querySelector('a')
            .innerHTML.split('<span')[0],
          cover: item
            .querySelector('.cover')
            .querySelector('img')
            .getAttribute('src')
            .replace('._SY75_', '')
            .replace('._SX50_', '')
            .replace('._SX318_', ''),
          author: item.querySelector('.author').querySelector('a').innerHTML
          // dateRead: item
          //   .querySelector('.date_read')
          //   .querySelector('.date_read_value').innerHTML
          // link: 'https://remoteok.io' + item.getAttribute('data-href')
        })
      }

      return list
    })

    // Add the read books to the array
    readBooks.push(...books)
  } finally {
    // Close the browser
    await browser.close()
  }

  return readBooks
}
