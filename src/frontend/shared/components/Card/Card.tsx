// Components
import { NextImage } from '@/frontend/shared/components'
import NextLink from 'next/link'
import {
  Stack,
  Image as MantineImage,
  Text,
  Sx,
  useMantineTheme
} from '@mantine/core'

export interface CardProps {
  link: string
  cover?: string
  tag?: string
  name: string
  description: string
  createdAt?: string
  updatedAt?: string
  target?: string
  useNextImage?: boolean
  imageHeight?: number
}

export function Card({
  link,
  cover,
  // tag,
  name,
  description,
  updatedAt,
  target,
  useNextImage = false,
  imageHeight = 180
}: CardProps) {
  const theme = useMantineTheme()
  const sx: Sx = {
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '0 !important',
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
  }

  const date = new Date(updatedAt)
  const updatedAtLabel = `Last updated: ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`

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
        sx={{
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            flexDirection: 'row'
          }
        }}
      >
        {cover && <Image />}
        <Stack spacing={0}>
          {/* {tag && (
            <div>
              <Badge color={'blue'} size='xs'>
                {tag}
              </Badge>
            </div>
          )} */}
          <Text color={'primary'} weight={'bold'}>
            {name}
          </Text>
          <Text lineClamp={3} size={'sm'} color={'dimmed'}>
            {description}
          </Text>
          {updatedAt && <Text size='xs'>{updatedAtLabel}</Text>}
        </Stack>
      </Stack>
    </NextLink>
  )
}
