// Components
import NextLink from 'next/link'
import {
  Image as MantineImage,
  Text,
  Card as MantineCard,
  Group
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
}

export function Card({ link, cover, name, description, target }: CardProps) {
  return (
    <NextLink href={link} target={target} className={'hoverable'}>
      <MantineCard h={'100%'}>
        <MantineCard.Section>
          <MantineImage
            height={100}
            fit={'cover'}
            withPlaceholder={true}
            src={cover}
            alt={name}
          />
        </MantineCard.Section>

        <Group position='apart' mt='md' mb='xs'>
          <Text fw={'bold'} color={'primary'}>
            {name}
          </Text>
        </Group>

        <Text size='sm' color='secondary' lineClamp={3}>
          {description}
        </Text>
      </MantineCard>
    </NextLink>
  )
}
