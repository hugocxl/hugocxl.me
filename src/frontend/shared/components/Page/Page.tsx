// Components
import { PageHead } from './components'

// Types
import { FC } from 'react'

// Styles
import { Stack, Text, Container, Title } from '@mantine/core'

export interface PageProps {
  title?: string
  description?: string
  children: React.ReactNode
  showHeader?: boolean
  withContainer?: boolean
}

export const Page: FC<PageProps> = ({
  children,
  title,
  description,
  showHeader = true
}) => {
  function Header() {
    if (!showHeader) return null

    return (
      <Stack mb={'40px'} spacing={0}>
        {title && (
          <Title variant='gradient' order={1} m={'0 !important'}>
            {title}
          </Title>
        )}
        {description && <Text size={'xl'}>{description}</Text>}
      </Stack>
    )
  }

  return (
    <Container sx={{ paddingTop: '40px', height: '100%' }}>
      <PageHead title={title} description={description} />
      <Header />
      {children}
    </Container>
  )
}
