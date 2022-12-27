// Components
import { Gallery, Page, Card } from '@/frontend/shared/components'

// Types
import { NextPage } from 'next'

// Constants
import { BOOKS } from '@/frontend/shared/constants'

interface BooksProps {
  books: any
}

export const Books: NextPage<BooksProps> = ({ books }) => {
  return (
    <Page title={BOOKS.title} description={BOOKS.description}>
      <Gallery cols={4}>
        {books.map(({ cover, title, author, link }) => {
          return (
            <Card
              cover={cover}
              description={author}
              imageHeight={240}
              key={title}
              link={link}
              name={title}
              target={'_blank'}
              useNextImage={true}
            />
          )
        })}
      </Gallery>
    </Page>
  )
}
