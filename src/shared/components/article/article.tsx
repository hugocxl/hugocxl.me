// Components
import { Button, Link, Stack, NotionRenderer, Page } from '@/shared/components'

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
    <Page title={name} showNav={false}>
      <Link
        mdDown={{
          display: 'none'
        }}
        href={goBackHref}
        position={'absolute'}
        left={-40}
        transform={'translateX(-100%)'}
      >
        <Button>
          <IconArrowBackUp size={18} />
        </Button>
      </Link>
      <NotionRenderer content={content} />

      <Stack
        mdDown={{
          display: 'none'
        }}
        position={'absolute'}
        right={-40}
        transform={'translateX(100%)'}
      >
        {tableOfContents.map(el => {
          return (
            <Link
              pb={'2px'}
              key={el.id}
              href={'#' + el.id}
              textDecoration={'none'}
              fontSize={'sm'}
              color={'text.dimmed'}
              transition={'all .3s ease'}
              _hover={{
                textDecoration: 'none',
                color: 'text.secondary'
              }}
            >
              <span style={{ paddingLeft: el.indentLevel * 8 }}>{el.text}</span>
            </Link>
          )
        })}
      </Stack>
    </Page>
  )
}
