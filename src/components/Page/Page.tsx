// Components
import { Stack, Typography, Box, Divider } from '@mui/material'
import { PageHead } from './components'

// Types
import { PageProps } from './Page.types'
import { FC } from 'react'

// Styles
import styles from './Page.module.css'

export const Page: FC<PageProps> = ({
  children,
  title,
  description,
  date,
  showHeader = true,
  ...rest
}) => {
  const hasHeader = showHeader && !!title

  function renderHeader() {
    if (!hasHeader) return null

    return (
      <Stack direction={'column'} mb={6}>
        {title && (
          <Typography variant={'h4'} component={'h1'}>
            {title}
          </Typography>
        )}
        {description && (
          <Typography
            component={'span'}
            color={'text.secondary'}
            fontWeight={'normal'}
            variant={'h6'}
          >
            {description}
          </Typography>
        )}

        <Divider sx={{ mt: 4, width: '60px' }} />
      </Stack>
    )
  }

  return (
    <>
      <PageHead title={title} description={description} date={date} />
      <Box
        className={styles.page}
        overflow={'auto'}
        height={'100%'}
        width={'100%'}
        py={6}
        px={16}
        {...rest}
      >
        {renderHeader()}
        {children}
      </Box>
    </>
  )
}
