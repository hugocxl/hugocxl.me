// Components
import { Page } from '../Page'

// Components
import { ArticlePageNavbar } from './components'

// Types
import { FC, useEffect } from 'react'
import { ArticlePageProps } from './ArticlePage.types'

// Hooks
import { useRouter } from 'next/router'
import { Stack, useMediaQuery, useTheme } from '@mui/material'

export const ArticlePage: FC<ArticlePageProps> = ({
  bannerImage,
  title,
  description,
  date,
  children,
  slug,
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

  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'POST'
    })
  }, [slug])

  return (
    <Stack direction={'column'}>
      <ArticlePageNavbar
        title={title}
        pageUrl={pageUrl}
        description={description}
        encodedTitle={encodedTitle}
        encodedDescription={encodedDescription}
        encodedPageUrl={encodedPageUrl}
        slug={slug}
      />
      <Page
        {...rest}
        title={title}
        date={date}
        description={description}
        bannerImage={bannerImage}
      >
        {children}
      </Page>
    </Stack>
  )
}
