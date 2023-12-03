// Components
import { Button, Link, Stack } from '@/shared/components'
import { IconArrowBackUp } from '@tabler/icons-react'

// Types
import { ReactNode } from 'react'
import { JsxStyleProps } from '@styled-system/types'

export type PageProps = JsxStyleProps & {
  children: ReactNode
  title: string
  description?: string
  goBackProps?: { title: string; href: string }
  showGoBack?: boolean
}

export function Page({
  title,
  children,
  description,
  showGoBack = true,
  goBackProps
}: PageProps) {
  return (
    <Stack position={'relative'}>
      {showGoBack && (
        <Link
          textDecoration={'none'}
          mdDown={{
            position: 'inherit',
            left: 0,
            transform: 'none',
            mb: 'lg'
          }}
          href={goBackProps?.href || '/'}
          position={'absolute'}
          left={-40}
          transform={'translateX(-100%)'}
        >
          <Button display={'flex'} gap={'sm'} px={'md'}>
            <IconArrowBackUp size={18} />
            {goBackProps?.title || 'index'}
          </Button>
        </Link>
      )}

      <Stack
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
        {description && <span>{description}</span>}
      </Stack>

      {children}
    </Stack>
  )
}
