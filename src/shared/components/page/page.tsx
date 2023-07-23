// Components
import { Title, Link, Flex, Stack } from '@/shared/components'

// Types
import { ReactNode } from 'react'
import { JsxStyleProps } from '@styled-system/types'
import { PAGES } from '@/shared/constants'

interface PageProps extends JsxStyleProps {
  children: ReactNode
  title: string
}

export function Page({ title, children }: PageProps) {
  return (
    <Stack position={'relative'}>
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
        <Flex gap={'sm'} alignItems={'center'}>
          {PAGES.filter(page => page.title !== title).map(page => (
            <>
              <Link
                display={'flex'}
                gap={'sm'}
                href={page.href}
                fontSize={'sm'}
                key={page.href}
              >
                {page.title}
              </Link>
              <span>•</span>
            </>
          ))}
        </Flex>
      </Flex>
      {children}
    </Stack>
  )
}
