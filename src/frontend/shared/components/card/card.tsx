// Components
import NextLink from 'next/link'
import { Text, Stack, Card as MCard, Group } from '@mantine/core'
import { NextImage } from '../next-image'
import { IconStar } from '@tabler/icons'

export interface CardProps {
  href: string
  cover?: string
  tag?: string
  name: string
  description: string
  createdAt?: string
  updatedAt?: string
  target?: string
  useNextImage?: boolean
}

export function Card({
  href,
  cover,
  name,
  description,
  target,
  tag,
  // updatedAt,
  useNextImage
}: CardProps) {
  return (
    <NextLink href={href} target={target} className={'hoverable'}>
      <Stack spacing={0} pos={'relative'}>
        <MCard p={0} w={'100%'} h={'160px'} mb={'md'}>
          {cover && useNextImage ? (
            <NextImage
              width={'100%'}
              height={'100%'}
              src={cover}
              alt={name}
              sx={{
                background: 'rgba(140,140,140,0.1)',
                objectFit: 'cover',
                width: '100%',
                overflow: 'hidden'
              }}
            />
          ) : (
            <img
              width={'100%'}
              height={'100%'}
              src={cover}
              alt={name}
              style={{
                background: 'rgba(140,140,140,0.1)',
                objectFit: 'cover',
                width: '100%',
                overflow: 'hidden'
              }}
            />
          )}
        </MCard>
        {tag && (
          <Text weight={'bold'} color={'link'} size={'xs'}>
            {tag}
          </Text>
        )}
        <Text weight={'bold'} color={'primary'} mb={'xs'}>
          {name}
        </Text>
        {/* <Text color={'dimmed'} size={'xs'} mb={'xs'}>
          {updatedAt}
        </Text> */}
        <Text color={'secondary'} size={'xs'} mb={'xl'} mt={0}>
          {description}
        </Text>
      </Stack>
    </NextLink>
  )
}
export interface ProjectCardProps {
  href: string
  cover?: string
  tag?: string
  name: string
  description: string
  createdAt?: string
  updatedAt?: string
  target?: string
  stars?: number
}

export function ProjectCard({
  href,
  cover,
  name,
  description,
  target,
  stars
}: ProjectCardProps) {
  return (
    <NextLink href={href} target={target}>
      <MCard withBorder>
        <Stack spacing={0}>
          {cover && (
            <NextImage
              sx={{
                borderRadius: '50%'
              }}
              width={40}
              height={40}
              src={cover}
              alt={'cover'}
            />
          )}
          <Text color={'primary'} weight={'bold'} lh={1.2} mt={'sm'}>
            {name}
          </Text>
          <Group spacing={4} align={'center'}>
            <IconStar size={16} />
            <Text weight={'bold'} color={'dimmed'} size={'xs'}>
              {stars}
            </Text>
          </Group>
          <Text mt={'xs'} size={'xs'} color={'secondary'} lineClamp={3}>
            {description}
          </Text>
        </Stack>
      </MCard>
    </NextLink>
  )
}
