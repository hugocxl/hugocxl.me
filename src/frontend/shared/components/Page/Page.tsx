// Types
import { FC, ReactNode } from 'react'

// Styles
import { Stack, Text, Title, Box, BoxProps } from '@mantine/core'
import Head from 'next/head'

export interface PageProps extends BoxProps {
  title?: string
  description?: ReactNode
  children: ReactNode
  showHeader?: boolean
}

export const Page: FC<PageProps> = ({
  children,
  title,
  description,
  showHeader = true,
  ...rest
}) => {
  function Header() {
    if (!showHeader) return null

    return (
      <Stack spacing={0} pb={'5ch'}>
        {title && (
          <Title order={1} m={'0 !important'}>
            {title}
          </Title>
        )}
        {description && (
          <Text size={'lg'} color={'dimmed'}>
            {description}
          </Text>
        )}
      </Stack>
    )
  }

  return (
    <Box component={'main'} w={'100%'} py={'7.5ch'} {...rest}>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='theme-color' content='#000000' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:site_name' content={'hugocorta.com'} />
        <meta name='twitter:creator' content={'@hcorta'} />
        {typeof description === 'string' && (
          <>
            <meta name='description' content={description} />
            <meta property='og:description' content={description} />
          </>
        )}
        <title>{title + ' | Hugo Corta'}</title>
      </Head>

      <Header />
      {children}
    </Box>
  )
}
