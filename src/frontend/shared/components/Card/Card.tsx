// Components
import { NextImage } from '@/frontend/shared/components'
import NextLink from 'next/link'
import { Image as MantineImage, Text, Badge, Flex, Box } from '@mantine/core'

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
  tag,
  name,
  description,
  updatedAt,
  target,
  useNextImage = false,
  imageHeight = 72
}: CardProps) {
  const date = new Date(updatedAt)
  const updatedAtLabel = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`

  function Image() {
    const commonProps = {
      height: imageHeight,
      width: imageHeight,
      src: cover,
      alt: name
    }

    return useNextImage ? (
      <NextImage {...commonProps} rounded={true} />
    ) : (
      <MantineImage
        sx={{ borderRadius: 12 }}
        fit={'cover'}
        withPlaceholder={false}
        {...commonProps}
      />
    )
  }

  return (
    <NextLink href={link} target={target} className={'hoverable'}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 20 }}>
        {cover && <Image />}

        <Flex direction={'column'}>
          {tag && (
            <div>
              <Badge color={'red'} size={'md'}>
                {tag}
              </Badge>
            </div>
          )}
          <Flex align={'flex-end'} w={'100%'}>
            <Text color={'primary'} weight={'bolder'}>
              {name}
            </Text>
            {updatedAt && (
              <Text
                ml={'sm'}
                fw={'normal'}
                size='xs'
                color={'violet'}
                display={'inline'}
              >
                {updatedAtLabel}
              </Text>
            )}
          </Flex>
          <Text lineClamp={2} color={'secondary'}>
            {description}
          </Text>
        </Flex>
      </Box>
    </NextLink>
  )
}
