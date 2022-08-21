// Components
import { Box, Stack, Typography } from '@mui/material'

// Types
import { PageProps } from './Page.types'
import { FC } from 'react'

export const Page: FC<PageProps> = ({ children, title, description }) => {
  const hasHeader = title || description
  return (
    <Box
      height={'100%'}
      padding={8}
      {...(title && {
        display: 'flex',
        flexDirection: 'column'
      })}
    >
      {hasHeader && (
        <Stack direction={'column'} mt={20} mb={8}>
          {title && <Typography variant={'h3'}>{title}</Typography>}
          {description && (
            <Typography color={'textSecondary'}>{description}</Typography>
          )}
        </Stack>
      )}
      {children}
    </Box>
  )
}
