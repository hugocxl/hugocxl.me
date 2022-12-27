import { getReadBooks } from '@/backend/shared/utils'

export const BooksServer = {
  async getStaticProps() {
    const books = await getReadBooks()
    return {
      revalidate: 86400 * 7,
      props: {
        books
      }
    }
  }
}
