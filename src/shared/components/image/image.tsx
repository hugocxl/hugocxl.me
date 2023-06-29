// Components
import NextImage from 'next/image'
import { Box } from '@/shared/components'

// Types
import { ImageProps as NextImageProps } from 'next/image'
import { JsxStyleProps } from '@/shared/styles'
import { StandardLonghandProperties } from '@/shared/styles/styled-system/types/csstype'

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
      <NextImage fill src={src} alt={alt} style={{ objectFit }} />
    </Box>
  )
}
