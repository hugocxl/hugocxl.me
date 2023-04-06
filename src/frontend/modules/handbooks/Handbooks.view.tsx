// Components
import { Page, NextImage } from '@/frontend/shared/components'
import NextLink from 'next/link'
import { Badge, Card, Flex, SimpleGrid, Stack, Text } from '@mantine/core'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Constants
import { HANDBOOKS } from '@/frontend/shared/constants'

export interface HandbooksProps {
  handbooks: Items
}

export const Handbooks: NextPage<HandbooksProps> = ({ handbooks }) => {
  function Cover({ name, cover }) {
    return (
      <Card>
        <Stack
          pos={'relative'}
          sx={{
            borderRadius: '4px',
            overflow: 'hidden'
          }}
        >
          <NextImage
            sx={{
              aspectRatio: '1/1.35'
            }}
            width={'100%'}
            src={cover}
            alt={name}
          />
          <Flex
            sx={{
              padding: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              width: '100%',
              height: '100%'
            }}
          >
            <Text
              sx={{
                backdropFilter: 'blur(10px)',
                padding: '16px 8px',
                background: 'rgba(255,255,255,1)',
                lineHeight: 1.2,
                minHeight: '50%',
                borderRadius: 2,
                fontFamily: 'serif',
                border: '4px solid black',
                boxShadow:
                  'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
              }}
              align='center'
              color={'black'}
              weight={'bolder'}
              size={10}
            >
              {name}
            </Text>
          </Flex>
        </Stack>
      </Card>
    )
  }
  return (
    <Page title={HANDBOOKS.title} description={HANDBOOKS.description}>
      <Stack spacing={'xl'}>
        {handbooks.map(({ slug, name, description, cover, updatedAt, tag }) => {
          const date = new Date(updatedAt)
          const updatedAtLabel = `Last updated: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

          return (
            <NextLink
              href={`${HANDBOOKS.href}/${slug}`}
              key={slug}
              className={'hoverable'}
            >
              <SimpleGrid cols={4} spacing={'xl'}>
                <Cover cover={cover} name={name} />
                <Stack sx={{ gridColumn: 'span 3' }} spacing={4}>
                  <Text fw={'bold'} color={'primary'} size={'lg'}>
                    {name}
                  </Text>
                  <Badge w={'fit-content'}>{tag}</Badge>
                  <Text lineClamp={3} color={'secondary'}>
                    {description}
                  </Text>
                  <Text size={'xs'} color={'link'}>
                    {updatedAtLabel}
                  </Text>
                </Stack>
              </SimpleGrid>
            </NextLink>
          )
        })}
      </Stack>
    </Page>
  )
}
