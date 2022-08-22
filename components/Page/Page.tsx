// Components
import { Box, Divider, Stack, Typography } from '@mui/material'

// Types
import { PageProps } from './Page.types'
import { FC } from 'react'

export const Page: FC<PageProps> = ({ children, title, description }) => {
  const hasHeader = title || description

  return (
    <Box
      overflow={'auto'}
      height={'100%'}
      width={'100%'}
      py={6}
      px={12}
      {...(hasHeader && {
        display: 'flex',
        flexDirection: 'column'
      })}
    >
      {hasHeader && (
        <Stack direction={'column'} mb={8} width={'100%'}>
          {title && <Typography variant={'h4'}>{title}</Typography>}
          {description && <Typography>{description}</Typography>}
        </Stack>
      )}
      {children}
    </Box>
  )
}
