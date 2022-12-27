import { BooksServer } from '@/backend/modules/books'
import { Books } from '@/frontend/modules/books'

export const getStaticProps = BooksServer.getStaticProps
export default Books
