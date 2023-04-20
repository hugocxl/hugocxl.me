// Components
import { Gallery, NextImage, Page } from '@/frontend/shared/components'
import { Anchor, Card, Group, Stack, Text } from '@mantine/core'

// Types
import { NextPage } from 'next'

// Constants
import { RADAR } from '@/frontend/shared/constants'

// Utils
import { StarredRepo } from '@/backend/shared/lib/github-client/github-client.types'
import { IconStar } from '@tabler/icons'

interface RadarProps {
  repos: StarredRepo[]
}

export const Radar: NextPage<RadarProps> = ({ repos }) => {
  return (
    <Page title={RADAR.title} description={RADAR.description}>
      <Gallery cols={1}>
        {repos.map(repo => (
          <Anchor href={repo.html_url} key={repo.html_url} target={'_blank'}>
            <Card withBorder>
              <Stack spacing={'xs'}>
                <Group noWrap>
                  <NextImage
                    sx={{
                      borderRadius: '50%'
                    }}
                    width={40}
                    height={40}
                    src={repo.owner.avatar_url}
                    alt={'cover'}
                  />
                  <Stack spacing={0}>
                    <Text color={'primary'} fw={'bold'}>
                      {repo.full_name}
                    </Text>
                    <Group spacing={4} align={'center'}>
                      <IconStar size={16} />
                      <Text fw={'bold'} color={'dimmed'} size={'xs'}>
                        {repo.stargazers_count}
                      </Text>
                    </Group>
                  </Stack>
                </Group>
                <Text mt={'xs'} size={'sm'} color={'secondary'}>
                  {repo.description}
                </Text>
              </Stack>
            </Card>
          </Anchor>
        ))}
      </Gallery>
    </Page>
  )
}
