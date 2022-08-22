// Components
import {
  Stack,
  Typography,
  Link,
  IconButton,
  Box,
  Divider
} from '@mui/material'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

// Types
import { PageProps } from './Page.types'
import { FC } from 'react'

export const Page: FC<PageProps> = ({
  children,
  title,
  description,
  sidebar: Sidebar
}) => {
  const hasHeader = !!title
  const hasSidebar = !!Sidebar

  return (
    <Box display={'grid'} gridTemplateColumns={'1fr auto'} height={'100%'}>
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

      {hasSidebar && (
        <Box
          position={'sticky'}
          top={0}
          borderLeft={1}
          borderColor={'divider'}
          overflow={'auto'}
          height={'100%'}
          width={'100%'}
          py={6}
          px={2}
        >
          <Sidebar />
        </Box>
      )}
    </Box>
  )
}
