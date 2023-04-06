// Components
import { Page, NextImage } from '@/frontend/shared/components'
import NextLink from 'next/link'
import { Badge, Card, SimpleGrid, Stack, Text } from '@mantine/core'

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
          <Text
            align='right'
            color={'white'}
            weight={'bolder'}
            p={'xs'}
            // pl={40}
            size={'xs'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage:
                'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.5))',
              backdropFilter: 'blur(6px)',
              position: 'absolute',
              width: '100%',
              // height: '100%',
              bottom: 0
            }}
          >
            {name}
          </Text>
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
