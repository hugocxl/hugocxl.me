// Components
import {
  Stack,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Chip
} from '@mui/material'
import { PageHead } from './components'

// Types
import { PageProps } from './Page.types'
import { FC } from 'react'

export const Page: FC<PageProps> = ({
  children,
  title,
  description,
  date,
  tags,
  sidebar: Sidebar,
  showHeader = true
}) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const hasHeader = showHeader && !!title
  const hasSidebar = !isSmallScreen && !!Sidebar

  return (
    <>
      <PageHead title={title} description={description} date={date} />
      <Box display={'grid'} gridTemplateColumns={'1fr auto'} height={'100%'}>
        <Box
          overflow={'auto'}
          height={'100%'}
          width={'100%'}
          py={6}
          px={12}
          {...(isSmallScreen && {
            py: 4,
            px: 4
          })}
          {...(hasHeader && {
            display: 'flex',
            flexDirection: 'column'
          })}
        >
          {hasHeader && (
            <Stack direction={'column'} mb={6} width={'100%'}>
              {title && <Typography variant={'h3'}>{title}</Typography>}
              {description && (
                <Typography variant={'subtitle2'}>{description}</Typography>
              )}
              {date && <Typography variant={'body2'}>{date}</Typography>}
              {tags && (
                <Stack spacing={1}>
                  {tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      color={'secondary'}
                      size={'small'}
                      variant={'outlined'}
                    />
                  ))}
                </Stack>
              )}
            </Stack>
          )}
          {children}
        </Box>

        {hasSidebar && (
          <Box
            position={'sticky'}
            top={0}
            // borderLeft={1}
            // borderColor={'divider'}
            height={'100%'}
            py={6}
            px={2}
          >
            <Sidebar />
          </Box>
        )}
      </Box>
    </>
  )
}
