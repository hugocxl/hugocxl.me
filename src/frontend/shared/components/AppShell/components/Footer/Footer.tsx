// Components
import { ActionIcon, Anchor, Box, Group, Text } from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail
} from '@tabler/icons'

export function Footer() {
  return (
    <Box
      component={'footer'}
      py={'xl'}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Text color={'dimmed'} size={'xs'}>
        {`All Rights Reserved © ${new Date().getFullYear()} Hugo Corta`}
      </Text>
      <Group spacing={0}>
        <Anchor
          href={'mailto:corta.hugo@gmail.com'}
          title={'Mail'}
          target={'_blank'}
        >
          <ActionIcon aria-label={'Email'} size={'md'} variant={'subtle'}>
            <IconMail size={16} />
          </ActionIcon>
        </Anchor>
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
    </Box>
  )
}
