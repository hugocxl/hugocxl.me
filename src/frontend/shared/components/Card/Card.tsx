// Components
import { Stack, Title, Image as MantineImage, Text, Box } from '@mantine/core'
import NextLink from 'next/link'
import NextImage from 'next/image'

export interface CardProps {
  link: string
  cover: string
  name: string
  description: string
  createdAt?: string
  target?: string
  useNextImage?: boolean
}

export function Card({
  link,
  cover,
  name,
  description,
  createdAt,
  target,
  useNextImage = false
}: CardProps) {
  const date = new Date(createdAt)
  const dateLabel = `${date.getMonth()} - ${date.getFullYear()}`

  function Image() {
    if (useNextImage) {
      return (
        <Box
          mb={'md'}
          pos={'relative'}
          h={96}
          sx={{ borderRadius: '8px', overflow: 'hidden' }}
        >
          <NextImage
            placeholder='blur'
            blurDataURL={cover}
            style={{ objectFit: 'cover' }}
            fill
            src={cover}
            alt={name}
          />
        </Box>
      )
    }

    return (
      <MantineImage
        height={96}
        fit={'cover'}
        withPlaceholder={true}
        radius='md'
        src={cover}
        alt={name}
      />
    )
  }

  return (
    <NextLink href={link} target={target} className={'hoverable'}>
      <Stack spacing={0}>
        <Image />
        {createdAt && (
          <Text color={'dotted'} size={'xs'}>
            {dateLabel}
          </Text>
        )}
        <Title span order={4} weight={'bold'} m={'0 !important'}>
          {name}
        </Title>
        <Text size={'sm'} color={'dimmed'}>
          {description}
        </Text>
      </Stack>
    </NextLink>
  )
}
