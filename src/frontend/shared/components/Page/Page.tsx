// Components
import { Stack, Typography, Box, Divider } from '@mui/material'
import { PageHead } from './components'
import NextImage from 'next/image'

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
  bannerImage,
  ...rest
}) => {
  function Header() {
    if (!showHeader) return null

    return (
      <Stack direction={'column'} mb={6}>
        {title && (
          <Typography
            mb={0}
            variant={'h3'}
            component={'h1'}
            className={'gradient-text'}
          >
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
        {bannerImage && (
          <Box
            boxShadow={1}
            borderRadius={4}
            overflow={'hidden'}
            mt={4}
            display={'block'}
            width={'100%'}
            height={'400px'}
            position={'relative'}
          >
            <NextImage
              fill={true}
              placeholder={'blur'}
              alt={title}
              title={title}
              src={bannerImage}
              blurDataURL={bannerImage}
            />
          </Box>
        )}
      </Stack>
    )
  }

  return (
    <>
      <PageHead title={title} description={description} date={date} />
      <Box className={styles.page} py={6} px={10} {...rest}>
        <Header />
        {children}
      </Box>
    </>
  )
}
