// Components
import { Box, BoxProps, Sx, useMantineTheme } from '@mantine/core'
import Image from 'next/image'

export interface NextImageProps extends BoxProps {
  height?: number | string
  width?: number | string
  src: string
  alt: string
  rounded?: boolean
  sx?: Sx
}

export function NextImage({
  height,
  width,
  src,
  alt,
  rounded = false,
  sx,
  ...rest
}: NextImageProps) {
  const theme = useMantineTheme()
  const styles: Sx = typeof sx === 'function' ? sx(theme) : sx || {}

  return (
    <Box
      {...rest}
      sx={{
        overflow: 'hidden',
        position: 'relative',
        height,
        minHeight: height,
        width,
        minWidth: width,
        ...(rounded && {
          borderRadius: '8px'
        }),
        ...styles
      }}
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
