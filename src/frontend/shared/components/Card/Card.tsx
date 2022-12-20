import { Stack, Title, Image, Text } from '@mantine/core'
import NextLink from 'next/link'

export interface CardProps {
  link: string
  cover: string
  name: string
  description: string
  createdAt?: string
  target?: string
}

export function Card({
  link,
  cover,
  name,
  description,
  createdAt,
  target
}: CardProps) {
  const date = new Date(createdAt)
  const dateLabel = `${date.getMonth()} - ${date.getFullYear()}`

  return (
    <NextLink href={link} target={target} style={{ color: 'inherit' }}>
      <Stack
        spacing={0}
        sx={{
          '&:hover': {
            opacity: 0.5
          }
        }}
      >
        <Image
          height={96}
          fit={'cover'}
          withPlaceholder={true}
          radius='md'
          src={cover}
          alt={name}
        />
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
