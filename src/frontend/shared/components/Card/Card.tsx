// Components
import NextLink from 'next/link'
import { Text, Stack } from '@mantine/core'

export interface CardProps {
  link: string
  cover?: string
  tag?: string
  name: string
  description: string
  createdAt?: string
  updatedAt?: string
  target?: string
}

export function Card({ link, cover, name, description, target }: CardProps) {
  return (
    <NextLink href={link} target={target} className={'hoverable'}>
      <Stack spacing={0} pos={'relative'}>
        <img
          width={'100%'}
          height={'100%'}
          src={cover}
          alt={name}
          style={{
            background: 'rgba(140,140,140,0.1)',
            objectFit: 'cover',
            width: '100%',
            aspectRatio: '1/1',
            borderRadius: 12,
            overflow: 'hidden'
          }}
        />
        <img
          width={'100%'}
          // height={'100%'}
          src={cover}
          alt={name}
          style={{
            position: 'absolute',
            top: 0,
            opacity: 0.5,
            filter: 'blur(80px)',
            background: 'rgba(140,140,140,0.1)',
            objectFit: 'cover',
            width: '100%',
            aspectRatio: '1/1',
            borderRadius: 12,
            overflow: 'hidden',
            zIndex: -1
          }}
        />
        <Text fw={'bold'} color={'primary'} mt={'md'}>
          {name}
        </Text>
        <Text color='secondary' lineClamp={3} mb={'xl'}>
          {description}
        </Text>
      </Stack>
    </NextLink>
  )
}
