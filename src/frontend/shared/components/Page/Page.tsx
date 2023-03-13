// Components
import { PageHead } from './components'

// Types
import { FC, ReactNode } from 'react'

// Styles
import { Stack, Text, Title, Box } from '@mantine/core'

export interface PageProps {
  title?: string
  description?: string
  children: ReactNode
  showHeader?: boolean
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
      <Stack
        spacing={0}
        sx={theme => ({
          marginBottom: theme.spacing.xl * 2
        })}
      >
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
    <Box
      component={'main'}
      w={'100%'}
      sx={theme => ({
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2
      })}
    >
      <PageHead title={title} description={description} />
      <Header />
      {children}
    </Box>
  )
}
