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
import { NextImage } from '@/frontend/shared/components/NextImage'

export interface PagePostHeaderProps {
  title?: string
  description?: string
  cover?: string
}

export const PagePostHeader: FC<PagePostHeaderProps> = ({
  title,
  description,
  cover
}) => {
  const router = useRouter()
  const [, section] = router.asPath.split('/')
  const [, setOpen] = useState(false)
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
          <ActionIcon variant='subtle'>
            <IconArrowLeft size={20} />
          </ActionIcon>
        </NextLink>
        <Text color={'dimmed'}>{`Back to ${section}`}</Text>
      </Group>
    )
  }

  function CopyToClipboardButton() {
    return (
      <ActionIcon variant='subtle' onClick={onClickToClipboard}>
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
        <ActionIcon variant='subtle'>
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
        <ActionIcon variant='subtle'>
          <IconBrandLinkedin size={20} />
        </ActionIcon>
      </Anchor>
    )
  }

  return (
    <Stack spacing={0}>
      <Divider />
      <Flex
        justify={'space-between'}
        sx={{
          padding: '16px 0'
        }}
      >
        <BackButton />
        <Group spacing={4}>
          <CopyToClipboardButton />
          <TwitterButton />
          <LinkedInButton />
        </Group>
      </Flex>
      <Stack
        spacing={0}
        sx={theme => ({
          marginTop: theme.spacing.xl * 2,
          marginBottom: theme.spacing.xl * 2
        })}
      >
        <Title order={1} m={'0 !important'}>
          {title}
        </Title>
        <Text size={'lg'} pb={'md'} color={'dimmed'}>
          {description}
        </Text>
        {cover && (
          <NextImage rounded={true} height={400} src={cover} alt={title} />
        )}
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
