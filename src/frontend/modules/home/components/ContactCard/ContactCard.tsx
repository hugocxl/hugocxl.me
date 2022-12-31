// Components
import { NextImage } from '@/frontend/shared/components'
import {
  Card,
  Anchor,
  Flex,
  Group,
  Stack,
  Text,
  useMantineTheme
} from '@mantine/core'

// Types
import { FC } from 'react'

export const ContactCard: FC = () => {
  const theme = useMantineTheme()

  return (
    <Card
      mt={60}
      radius={'lg'}
      sx={theme => ({
        padding: `${theme.spacing.xl * 2}px !important`
      })}
    >
      <Flex justify={'space-between'} align={'center'}>
        <Stack spacing={'md'}>
          <Text size={'xl'} color={'primary'} fw={'bold'}>
            Say hi!
          </Text>
          <Text size={'lg'}>
            Want to create something awesome? Or, you have any query? Drop an
            email or tweet
          </Text>
          <Group spacing={'xl'}>
            <Anchor
              size='lg'
              href={'mailto:corta.hugo@gmail.com'}
              title={'Mail'}
              target={'_blank'}
            >
              corta.hugo@gmail.com
            </Anchor>
            <Anchor
              size='lg'
              href={'https://twitter.com/hcorta'}
              title={'Twitter @hcorta'}
              target={'_blank'}
            >
              @hcorta
            </Anchor>
          </Group>
        </Stack>
        <NextImage
          src={'/img/chat.png'}
          alt={'Chat icon'}
          miw={160}
          width={160}
          height={160}
          sx={{
            [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
              display: 'none'
            }
          }}
        />
      </Flex>
    </Card>
  )
}
