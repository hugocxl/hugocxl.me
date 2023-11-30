// Components
import { Title, Flex, Stack } from '@/shared/components'

// Types
import { ReactNode } from 'react'
import { JsxStyleProps } from '@styled-system/types'

interface PageProps extends JsxStyleProps {
  children: ReactNode
  title: string
}

export function Page({ title, children }: PageProps) {
  return (
    <Stack
      margin={'0 auto'}
      maxW={'content'}
      position={'relative'}
      // py={{
      //   base: '20vh',
      //   smDown: 'lg'
      // }}
    >
      <Flex
        mb={'40px'}
        w={'100%'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
        gap={'sm'}
        mdDown={{
          flexDirection: 'column'
        }}
        css={{
          '& div > span:last-child': {
            display: 'none'
          }
        }}
      >
        <Title mb={0}>{title}</Title>
      </Flex>
      {children}
    </Stack>
  )
}
