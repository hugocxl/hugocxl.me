// Components
import { Box, BoxProps } from '@mantine/core'
import Image from 'next/image'

export interface NextImageProps extends BoxProps {
  height: number
  width?: number
  src: string
  alt: string
  rounded?: boolean
}

export function NextImage({
  height,
  width,
  src,
  alt,
  rounded = false,
  sx = {},
  ...rest
}: NextImageProps) {
  return (
    <Box
      {...rest}
      sx={{
        overflow: 'hidden',
        ...sx,
        ...(rounded && {
          borderRadius: '16px'
        })
      }}
      pos={'relative'}
      h={height}
      mih={height}
      w={width}
      miw={width}
    >
      <Image
        placeholder={'blur'}
        blurDataURL={src}
        fill={true}
        src={src}
        alt={alt}
        style={{
          marginBottom: 0,
          objectFit: 'cover'
        }}
      />
    </Box>
  )
}
