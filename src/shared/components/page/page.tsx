// Components
import { Container, Typography, Stack, Title, Image } from '@/shared/components'

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
    <Container py={'15vh'} px={'md'} {...props}>
      <Stack mb={60} gap={0} justify={'center'} align={'center'}>
        <Title mb={0}>{title}</Title>
        <Typography fontSize={'lg'} color={'text.dimmed'} textAlign={'center'}>
          {description}
        </Typography>
        <Image
          transform={'scale(0.5)'}
          _dark={{
            filter: 'invert(1)'
          }}
          height={'28px'}
          src={'/img/header-divider.png'}
          alt={'divider'}
        />
      </Stack>
      {children}
    </Container>
  )
}
