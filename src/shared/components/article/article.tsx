// Components
import {
  Button,
  Link,
  Stack,
  NotionRenderer,
  Grid,
  Box,
  Title
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
    <Grid
      mdDown={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 680,
        margin: '0 auto'
      }}
      gap={'60px'}
      px={'md'}
      gridTemplateColumns={{
        base: 'auto 620px auto',
        mdDown: '620px'
      }}
      py={{
        base: '10vh',
        smDown: 'lg'
      }}
    >
      <Box
        display={{
          lg: 'initial',
          mdDown: 'none'
        }}
      >
        <Link
          href={goBackHref}
          position={'sticky'}
          top={'10vh'}
          float={'right'}
        >
          <Button>
            <IconArrowBackUp size={18} />
          </Button>
        </Link>
      </Box>

      <Box>
        <Title mb={'lg'}>{name}</Title>
        <NotionRenderer content={content} />
      </Box>

      <Box
        display={{
          lg: 'initial',
          mdDown: 'none'
        }}
      >
        <Stack gap={0} position={'sticky'} top={'10vh'}>
          {tableOfContents.map(el => {
            return (
              <Link
                key={el.id}
                fontFamily={'Newspaper'}
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
                <span style={{ paddingLeft: el.indentLevel * 8 }}>
                  {el.text}
                </span>
              </Link>
            )
          })}
        </Stack>
      </Box>
    </Grid>
  )
}
