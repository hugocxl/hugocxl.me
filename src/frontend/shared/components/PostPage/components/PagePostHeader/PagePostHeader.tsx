// Dependencies
import { useRouter } from 'next/router'
import { useState } from 'react'

// Components
import NextLink from 'next/link'
import NextImage from 'next/image'
import {
  ActionIcon,
  Text,
  Anchor,
  Flex,
  Group,
  Stack,
  Title,
  Divider,
  Box
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
  cover?: string
}

export const PagePostHeader: FC<PagePostHeaderProps> = ({
  title,
  description,
  cover
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
          <ActionIcon variant='subtle'>
            <IconArrowLeft size={20} />
          </ActionIcon>
        </NextLink>
        <Text size={'sm'} color={'dimmed'}>{`Back to ${section}`}</Text>
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
      <Flex
        justify={'space-between'}
        sx={{
          padding: '16px 0',
          borderBottom: '1px solid rgb(160,160,160,0.25)'
        }}
      >
        <BackButton />
        <Group spacing={'xs'}>
          <CopyToClipboardButton />
          <TwitterButton />
          <LinkedInButton />
        </Group>
      </Flex>
      <Stack mb={'40px'} spacing={0}>
        <Title order={1}>{title}</Title>
        <Text size={'sm'} pb={'md'} color={'dimmed'}>
          {description}
        </Text>
        {cover && (
          <Box
            pos={'relative'}
            h={'400px'}
            sx={{ borderRadius: '16px', overflow: 'hidden' }}
          >
            <NextImage
              placeholder='blur'
              blurDataURL={cover}
              style={{ objectFit: 'cover' }}
              fill
              src={cover}
              alt={title}
            />
          </Box>
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
