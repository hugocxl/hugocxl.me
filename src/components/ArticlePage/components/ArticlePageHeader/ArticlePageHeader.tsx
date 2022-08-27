// Components
import { Box, Stack, Typography } from '@mui/material'
import NextImage from 'next/image'

// Types
import { FC } from 'react'
import { ArticlePageHeaderProps } from './ArticlePageHeader.types'

export const ArticlePageHeader: FC<ArticlePageHeaderProps> = ({
  title,
  description,
  date,
  bannerImage
}) => {
  return (
    <Stack direction={'column'} mb={6}>
      <Typography component={'h1'} variant={'h4'} gutterBottom={false}>
        {title}
      </Typography>
      <Typography color={'text.secondary'} component={'h2'} variant={'body1'}>
        {description}
      </Typography>

      <Typography variant={'body2'} color={'text.primary'} gutterBottom={false}>
        {date}
      </Typography>

      {bannerImage && (
        <Box
          mt={6}
          display={'block'}
          width={'100%'}
          height={'320px'}
          position={'relative'}
        >
          <NextImage
            layout='fill'
            objectFit='cover'
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
