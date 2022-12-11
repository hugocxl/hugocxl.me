// Dependencies
import { useRouter } from 'next/router'
import { useState } from 'react'

// Components
import NextLink from 'next/link'
import {
  ActionIcon,
  Text,
  Anchor,
  Flex,
  Group,
  Stack,
  Title,
  Divider
} from '@mantine/core'
import {
  IconArrowLeft,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconClipboard
} from '@tabler/icons'

// Types
import { FC } from 'react'

export interface PagePostHeaderProps {
  title?: string
  description?: string
}

export const PagePostHeader: FC<PagePostHeaderProps> = ({
  title,
  description
}) => {
  const router = useRouter()
  const [_, section] = router.asPath.split('/')
  const [open, setOpen] = useState(false)
  const baseUrl = 'https://hugocorta.com'
  const pageUrl = `${baseUrl}${router.asPath}`
  const encodedPageUrl = encodeURI(pageUrl)
  const encodedDescription = encodeURI(description)

  async function onClickToClipboard() {
    await navigator.clipboard.writeText(pageUrl)
    setOpen(true)
  }

  function BackButton() {
    return (
      <Group spacing={'xs'}>
        <NextLink href={`/${section}`}>
          <ActionIcon>
            <IconArrowLeft size={20} />
          </ActionIcon>
        </NextLink>
        <Text color={'dimmed'}>{`Back to ${section}`}</Text>
      </Group>
    )
  }

  function CopyToClipboardButton() {
    return (
      <ActionIcon onClick={onClickToClipboard}>
        <IconClipboard size={20} />
      </ActionIcon>
    )
  }

  function TwitterButton() {
    return (
      <Anchor
        target={'_blank'}
        href={`https://twitter.com/intent/tweet/?text=${title}&url=${encodedPageUrl}`}
        title={`Share ${title} on Twitter`}
      >
        <ActionIcon>
          <IconBrandTwitter size={20} />
        </ActionIcon>
      </Anchor>
    )
  }

  function LinkedInButton() {
    return (
      <Anchor
        target={'_blank'}
        href={`https://www.linkedin.com/sharePost?mini=true&url=${encodedPageUrl}&title=${title}&summary=${encodedDescription}&source=${pageUrl}`}
        title={`Share ${title} on LinkedIn`}
      >
        <ActionIcon>
          <IconBrandLinkedin size={20} />
        </ActionIcon>
      </Anchor>
    )
  }

  return (
    <Stack spacing={40}>
      <Flex justify={'space-between'}>
        <BackButton />
        <Group spacing={'xs'}>
          <CopyToClipboardButton />
          <TwitterButton />
          <LinkedInButton />
        </Group>
      </Flex>
      <Stack mb={'40px'} spacing={0}>
        <Title variant='gradient' order={1} m={'0 !important'}>
          {title}
        </Title>
        <Text size={'md'} pb={'md'}>
          {description}
        </Text>
        <Divider variant={'dotted'} />
      </Stack>

      {/* <Snackbar
        open={open}
        autoHideDuration={3500}
        onClose={() => setOpen(false)}
        message={'URL copied to clipboard'}
      /> */}
    </Stack>
  )
}
