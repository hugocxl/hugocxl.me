// Components
import { NextImage } from '@/frontend/shared/components/NextImage'
import { Stack, Image as MantineImage, Text, Sx, Flex } from '@mantine/core'
import NextLink from 'next/link'

export interface CardProps {
  link: string
  cover: string
  tag?: string
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
  tag,
  name,
  description,
  createdAt,
  target,
  useNextImage = false,
  imageHeight = 200
}: CardProps) {
  const date = new Date(createdAt)
  const dateLabel = `${date.getMonth()} - ${date.getFullYear()}`
  const sx: Sx = theme => ({
    borderRadius: '8px',
    overflow: 'hidden',
    margin: '0 !important',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      flexDirection: 'row',
      marginRight: 8,
      width: imageHeight / 2,
      minWidth: imageHeight / 2,
      maxWidth: imageHeight / 2,
      height: imageHeight / 2,
      minHeight: imageHeight / 2,
      maxHeight: imageHeight / 2
    }
  })

  function Image() {
    if (useNextImage) {
      return (
        <NextImage
          rounded={true}
          height={imageHeight}
          sx={sx}
          src={cover}
          alt={name}
        />
      )
    }

    return (
      <MantineImage
        radius='md'
        height={imageHeight}
        fit={'cover'}
        withPlaceholder={true}
        src={cover}
        alt={name}
        sx={sx}
      />
    )
  }

  return (
    <NextLink href={link} target={target} className={'hoverable'}>
      <Stack
        spacing={'sm'}
        sx={theme => ({
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            flexDirection: 'row'
          }
        })}
      >
        <Image />
        <Stack spacing={0}>
          <Flex align={'center'} justify={'space-between'}>
            {createdAt && <Text size={'xs'}>{dateLabel}</Text>}
            {tag && (
              <Text color={'dimmed'} size='xs'>
                {tag}
              </Text>
            )}
          </Flex>
          <Text>
            <b>{name}</b>
          </Text>
          <Text lineClamp={3} size={'sm'} color={'dimmed'}>
            {description}
          </Text>
        </Stack>
      </Stack>
    </NextLink>
  )
}
