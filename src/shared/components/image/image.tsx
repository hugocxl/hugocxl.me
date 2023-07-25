'use client'

// Components
import NextImage from 'next/image'
import { Box } from '../box'

// Types
import { ImageProps as NextImageProps } from 'next/image'
import { JsxStyleProps } from '@styled-system/types'
import { StandardLonghandProperties } from '@styled-system/types/csstype'

interface ImageProps extends JsxStyleProps {
  src: NextImageProps['src']
  alt: NextImageProps['alt']
  objectFit?: StandardLonghandProperties['objectFit']
  onClick?: () => void
}

export const Image = ({
  src,
  alt,
  objectFit = 'cover',
  ...props
}: ImageProps) => {
  return (
    <Box
      overflow={'hidden'}
      height={'40vh'}
      width={'100%'}
      rounded={'sm'}
      position={'relative'}
      {...props}
    >
      <NextImage
        fill={true}
        src={src}
        loader={() => src as string}
        alt={alt}
        style={{ objectFit }}
      />
    </Box>
  )
}
