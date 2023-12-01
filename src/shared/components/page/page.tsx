// Components
import { Flex, Stack } from '@/shared/components'

// Types
import { ReactNode } from 'react'
import { JsxStyleProps } from '@styled-system/types'

interface PageProps extends JsxStyleProps {
  children: ReactNode
  title: string
}

export function Page({ title, children }: PageProps) {
  return (
    <Stack position={'relative'}>
      <Flex
        mb={'md'}
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
        <h1>{title}</h1>
      </Flex>
      {children}
    </Stack>
  )
}
