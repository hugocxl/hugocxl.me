// Dependencies
import { useRouter } from 'next/router'
import { useState } from 'react'

// Components
import NextLink from 'next/link'
import { NextImage } from '@/frontend/shared/components'
import {
  ActionIcon,
  Text,
  Group,
  Stack,
  Title,
  Flex,
  Button
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
      <NextLink href={`/${section}`}>
        <Button leftIcon={<IconArrowLeft size={20} />}>{`Go back`}</Button>
      </NextLink>
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
      <NextLink
        target={'_blank'}
        href={`https://twitter.com/intent/tweet/?text=${title}&url=${encodedPageUrl}`}
        title={`Share ${title} on Twitter`}
      >
        <ActionIcon>
          <IconBrandTwitter size={20} />
        </ActionIcon>
      </NextLink>
    )
  }

  function LinkedInButton() {
    return (
      <NextLink
        target={'_blank'}
        href={`https://www.linkedin.com/sharePost?mini=true&url=${encodedPageUrl}&title=${title}&summary=${encodedDescription}&source=${pageUrl}`}
        title={`Share ${title} on LinkedIn`}
      >
        <ActionIcon>
          <IconBrandLinkedin size={20} />
        </ActionIcon>
      </NextLink>
    )
  }

  return (
    <Stack pb={'xl'} spacing={0}>
      <Title order={1} m={'0 !important'}>
        {title}
      </Title>
      <Text size={'lg'} pb={'xl'} color={'dimmed'}>
        {description}
      </Text>
      <Flex justify={'space-between'}>
        <BackButton />
        <Group spacing={4}>
          <CopyToClipboardButton />
          <TwitterButton />
          <LinkedInButton />
        </Group>
      </Flex>
      {cover && (
        <NextImage
          my={'xl'}
          rounded={true}
          height={'20vw'}
          mih={200}
          src={cover}
          alt={title}
        />
      )}
    </Stack>
  )
}
