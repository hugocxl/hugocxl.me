// Components
import {
  Button,
  Container,
  Link,
  Stack,
  NotionRenderer,
  Typography
} from '@/shared/components'

// Types
import { ExtendedNotionItem } from '@/shared/types'
import { IconArrowBackUp } from '@tabler/icons'

interface ArticleProps extends ExtendedNotionItem {
  goBackHref: string
}

export function Article({
  name,
  content,
  goBackHref,
  tableOfContents
}: ArticleProps) {
  return (
    <Container
      py={{
        base: '10vh',
        smDown: 'lg'
      }}
      px={'md'}
    >
      <Stack mb={'lg'} gap={0} position={'relative'}>
        <h1>{name}</h1>
        <Link
          display={{
            md: 'inherit',
            sm: 'none'
          }}
          href={goBackHref}
          position={'absolute'}
          top={0}
          left={0}
          transform={'translateX(calc(-100% - 3rem))'}
        >
          <Button>
            <IconArrowBackUp size={18} />
          </Button>
        </Link>
        <Stack
          display={{
            md: 'flex',
            sm: 'none'
          }}
          gap={'xs'}
          position={'absolute'}
          top={80}
          left={0}
          transform={'translateX(calc(-100% - 3rem))'}
        >
          {tableOfContents.map(el => {
            return (
              <Link
                href={'#' + el.id}
                key={el.id}
                textDecoration={'none'}
                fontSize={'sm'}
                textAlign={'right'}
                color={'text.dimmed'}
              >
                {el.text}
              </Link>
            )
          })}
        </Stack>
      </Stack>
      <NotionRenderer content={content} />
    </Container>
  )
}
