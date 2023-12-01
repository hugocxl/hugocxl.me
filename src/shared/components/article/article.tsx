// Components
import {
  Link,
  Stack,
  NotionRenderer,
  Page,
  PageProps
} from '@/shared/components'

// Types
import { ExtendedNotionItem } from '@/shared/types'

type ArticleProps = ExtendedNotionItem & Pick<PageProps, 'goBackProps'>

export function Article({
  name,
  content,
  goBackProps,
  tableOfContents
}: ArticleProps) {
  return (
    <Page title={name} goBackProps={goBackProps}>
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
              pb={'4px'}
              key={el.id}
              href={'#' + el.id}
              textDecoration={'none'}
              fontWeight={'medium'}
              fontSize={'sm'}
              color={'text.dimmed'}
              transition={'all .3s ease'}
              _hover={{
                textDecoration: 'none',
                color: 'text.secondary'
              }}
            >
              <span style={{ paddingLeft: el.indentLevel * 16 }}>
                {el.text}
              </span>
            </Link>
          )
        })}
      </Stack>
    </Page>
  )
}
