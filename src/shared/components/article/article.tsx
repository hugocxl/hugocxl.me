// Components
import {
  Button,
  Container,
  Link,
  Stack,
  NotionRenderer
} from '@/shared/components'

// Types
import { ExtendedNotionItem } from '@/shared/types'
import { IconArrowBackUp } from '@tabler/icons'

interface ArticleProps extends ExtendedNotionItem {
  goBackHref: string
}

export function Article({ name, content, goBackHref }: ArticleProps) {
  return (
    <Container py={'15vh'} px={'md'}>
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
          transform={'translateX(calc(-100% - 2rem))'}
        >
          <Button>
            <IconArrowBackUp size={18} />
          </Button>
        </Link>
      </Stack>
      <NotionRenderer content={content} />
    </Container>
  )
}
