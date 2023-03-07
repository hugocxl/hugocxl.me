// Components
import { Card, Anchor, Flex, Group, Stack, Text } from '@mantine/core'

// Types
import { FC } from 'react'

export const ContactCard: FC = () => {
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
      </Flex>
    </Card>
  )
}
