// Components
import { Gallery, Page, NextImage } from '@/frontend/shared/components'
import NextLink from 'next/link'
import { Box, Stack, Text } from '@mantine/core'

// Types
import { NextPage } from 'next'
import { Items } from '@/frontend/shared/types'

// Constants
import { HANDBOOKS } from '@/frontend/shared/constants'

export interface HandbooksProps {
  handbooks: Items
}

export const Handbooks: NextPage<HandbooksProps> = ({ handbooks }) => {
  return (
    <Page title={HANDBOOKS.title} description={HANDBOOKS.description}>
      <Gallery>
        {handbooks.map(({ slug, name, description, cover }) => {
          return (
            <NextLink
              href={`${HANDBOOKS.href}/${slug}`}
              key={slug}
              className={'hoverable'}
            >
              <Stack spacing={'xl'}>
                <Stack
                  pos={'relative'}
                  sx={{
                    boxShadow:
                      '0 0 5px -1px black, inset -1px 1px 2px rgba(150, 150, 150, 0.5)',
                    borderRadius: '0 4px 4px 0',
                    overflow: 'hidden'
                  }}
                >
                  <NextImage height={280} src={cover} alt={name} />
                  <Box
                    sx={{
                      zIndex: 1,
                      position: 'absolute',
                      bottom: 0,
                      height: '100%',
                      background:
                        'linear-gradient(to right, rgba(0, 0, 0, 0.1) 3px, rgba(255, 255, 255, 0.5) 5px, rgba(255, 255, 255, 0.25) 7px, rgba(255, 255, 255, 0.25) 10px, transparent 12px, transparent 16px, rgba(255, 255, 255, 0.25) 17px, transparent 22px)',
                      width: '100%'
                    }}
                  />
                  <Text
                    align='right'
                    color={'white'}
                    weight={'bolder'}
                    sx={{
                      padding: '16px 12px 32px 0',
                      background: 'rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(4px)',
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: '100%'
                    }}
                  >
                    {name}
                  </Text>
                </Stack>
                <Text color={'dimmed'}>{description}</Text>
              </Stack>
            </NextLink>
          )
        })}
      </Gallery>
    </Page>
  )
}
