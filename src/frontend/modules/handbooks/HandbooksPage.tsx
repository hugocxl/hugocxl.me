// Components
import { Gallery, Page } from '@/frontend/shared/components'
import NextLink from 'next/link'
import { Stack, Title, Text, Card } from '@mantine/core'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Constants
import { HANDBOOKS } from '@/frontend/shared/constants'

export interface HandbooksPageProps {
  handbooks: Items
}

export const HandbooksPage: NextPage<HandbooksPageProps> = ({ handbooks }) => {
  return (
    <Page title={HANDBOOKS.title} description={HANDBOOKS.description}>
      <Gallery>
        {handbooks.map(({ slug, name, description }) => {
          return (
            <NextLink
              href={`${HANDBOOKS.href}/${slug}`}
              key={slug}
              title={name}
              className={'hoverable'}
            >
              <Card>
                <Stack spacing={0}>
                  <Title span order={4} weight={'bold'} m={'0 !important'}>
                    {name}
                  </Title>
                  <Text size={'sm'} color={'dimmed'}>
                    {description}
                  </Text>
                </Stack>
              </Card>
            </NextLink>
          )
        })}
      </Gallery>
    </Page>
  )
}
