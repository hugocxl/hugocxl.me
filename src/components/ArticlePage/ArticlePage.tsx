// Components
import { Page } from '../Page'

// Components
import {
  ArticlePageSidebar,
  ArticlePageHeader,
  ArticlePageNavbar
} from './components'

// Types
import { FC } from 'react'
import { ArticlePageProps } from './ArticlePage.types'

// Hooks
import { useRouter } from 'next/router'
import { Box, useMediaQuery, useTheme } from '@mui/material'

export const ArticlePage: FC<ArticlePageProps> = ({
  bannerImage,
  title,
  description,
  date,
  children,
  ...rest
}) => {
  const router = useRouter()
  const baseUrl = 'https://hugocorta.com'
  const pageUrl = `${baseUrl}${router.asPath}`
  const encodedPageUrl = encodeURI(pageUrl)
  const encodedTitle = encodeURI(title)
  const encodedDescription = encodeURI(description)
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box height={'100%'} display={'grid'} gridTemplateColumns={'1fr auto'}>
      <Box
        overflow={'auto'}
        width={'100%'}
        display={'grid'}
        gridTemplateRows={'auto 1fr'}
        height={'100vh'}
      >
        {isDesktop && <ArticlePageNavbar title={title} />}
        <Page
          {...rest}
          showHeader={false}
          title={title}
          date={date}
          description={description}
        >
          <ArticlePageHeader
            title={title}
            description={description}
            date={date}
            bannerImage={bannerImage}
          />
          {children}
        </Page>
      </Box>
      {isDesktop && (
        <ArticlePageSidebar
          title={title}
          pageUrl={pageUrl}
          description={description}
          encodedTitle={encodedTitle}
          encodedDescription={encodedDescription}
          encodedPageUrl={encodedPageUrl}
        />
      )}
    </Box>
  )
}
