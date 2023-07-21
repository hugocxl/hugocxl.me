// Components
import { Container, Typography, Stack, Title } from '@/shared/components'

// Types
import { ReactNode } from 'react'
import { JsxStyleProps } from '@styled-system/types'

interface PageProps extends JsxStyleProps {
  children: ReactNode
  title: string
  description: string
}

export function Page({ title, description, children, ...props }: PageProps) {
  return (
    <Container
      px={'md'}
      py={{
        base: '10vh',
        smDown: 'lg'
      }}
      {...props}
    >
      <Stack mb={60} gap={0} justify={'center'} align={'flex-start'}>
        <Title mb={0}>{title}</Title>
        <Typography color={'text.dimmed'}>{description}</Typography>
      </Stack>
      {children}
    </Container>
  )
}
