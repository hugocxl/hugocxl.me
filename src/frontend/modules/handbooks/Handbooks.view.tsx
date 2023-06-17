// Components
import { Page, NextImage, Gallery } from '@/frontend/shared/components'
import NextLink from 'next/link'
import { Card, Group, Stack, Text } from '@mantine/core'

// Types
import { NextPage } from 'next'
import { Items } from '@/shared/types'

// Constants
import { HANDBOOKS } from '@/frontend/shared/constants'
import { formatTimestamp } from '@/shared/utils'

export interface HandbooksProps {
  handbooks: Items
}

export const Handbooks: NextPage<HandbooksProps> = ({ handbooks }) => {
  return (
    <Page title={HANDBOOKS.title} description={HANDBOOKS.description}>
      <Gallery cols={1} spacing={'xl'}>
        {handbooks.map(({ slug, name, description, cover, updatedAt, tag }) => {
          const updatedAtLabel = formatTimestamp(updatedAt)

          return (
            <NextLink href={`${HANDBOOKS.href}/${slug}`} key={slug}>
              <Card withBorder h={'100%'}>
                <Stack>
                  <Group noWrap>
                    <NextImage
                      sx={{
                        borderRadius: '50%'
                      }}
                      width={40}
                      height={40}
                      src={cover}
                      alt={name}
                    />
                    <Stack spacing={0}>
                      <Text fw={'bold'} color={'primary'}>
                        {name}
                      </Text>
                      <Group>
                        <Text size={'xs'} color={'dimmed'}>
                          {tag}
                        </Text>
                        <Text size={'xs'} color={'dimmed'}>
                          {updatedAtLabel}
                        </Text>
                      </Group>
                    </Stack>
                  </Group>
                  <Stack spacing={4}>
                    <Text size={'sm'} lineClamp={3} color={'secondary'}>
                      {description}
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            </NextLink>
          )
        })}
      </Gallery>
    </Page>
  )
}
