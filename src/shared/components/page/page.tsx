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
    <Container
      px={'md'}
      py={{
        base: '15vh',
        smDown: 'lg'
      }}
      {...props}
    >
      <Stack mb={60} gap={0} justify={'center'} align={'center'}>
        <Title mb={0}>{title}</Title>
        <Typography
          w={'100%'}
          maxWidth={'640px'}
          fontSize={'lg'}
          color={'text.dimmed'}
          textAlign={'center'}
        >
          {description}
        </Typography>
        <Image
          mt={'sm'}
          objectFit={'contain'}
          _dark={{
            filter: 'invert(1)'
          }}
          width={'320px'}
          height={'20px'}
          src={'/img/header-divider.png'}
          alt={'divider'}
        />
      </Stack>
      {children}
    </Container>
  )
}
