// Components
import {
  ActionIcon,
  Anchor,
  Box,
  Container,
  Flex,
  Group,
  Text
} from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter
} from '@tabler/icons'

const FOOTER_HEIGHT = 40

export function Footer() {
  return (
    <Box component={'footer'} h={FOOTER_HEIGHT}>
      <Container h={'100%'}>
        <Flex
          align={'center'}
          justify={'space-between'}
          h={'100%'}
          sx={{
            borderTop: '1px solid rgb(160,160,160,0.25)'
          }}
        >
          <Text color={'dimmed'} size={'xs'}>
            {`All Rights Reserved © ${new Date().getFullYear()} Hugo Corta`}
          </Text>
          <Group spacing={0}>
            <Anchor
              href={'https://twitter.com/hcorta'}
              title={'Twitter @hcorta'}
              target={'_blank'}
            >
              <ActionIcon aria-label={'Twitter'} size={'md'} variant={'subtle'}>
                <IconBrandTwitter size={16} />
              </ActionIcon>
            </Anchor>
            <Anchor
              aria-label={'GitHub'}
              href={'https://github.com/hcorta'}
              title={'GitHub @hcorta'}
              target={'_blank'}
            >
              <ActionIcon size={'md'} variant={'subtle'}>
                <IconBrandGithub size={16} />
              </ActionIcon>
            </Anchor>
            <Anchor
              aria-label={'LinkedIn'}
              href={'https://www.linkedin.com/in/hugocorta'}
              title={'LinkedIn @hugocorta'}
              target={'_blank'}
            >
              <ActionIcon size={'md'} variant={'subtle'}>
                <IconBrandLinkedin size={16} />
              </ActionIcon>
            </Anchor>
          </Group>
        </Flex>
      </Container>
    </Box>
  )
}
