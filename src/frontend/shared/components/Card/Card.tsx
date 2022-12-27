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
  imageHeight?: number
}

export function Card({
  link,
  cover,
  name,
  description,
  createdAt,
  target,
  useNextImage = false,
  imageHeight = 112
}: CardProps) {
  const date = new Date(createdAt)
  const dateLabel = `${date.getMonth()} - ${date.getFullYear()}`

  function Image() {
    if (useNextImage) {
      return (
        <Box
          mb={'md'}
          pos={'relative'}
          h={imageHeight}
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
        height={imageHeight}
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
        <Title span order={6} weight={'bold'} m={'0 !important'}>
          {name}
        </Title>
        <Text size={'sm'} color={'dimmed'}>
          {description}
        </Text>
      </Stack>
    </NextLink>
  )
}
