// Components
import { Box, Stack, Typography } from '@mui/material'

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
      <Typography component={'h1'} variant={'h3'}>
        {title}
      </Typography>
      <Typography color={'text.primary'} component={'h2'} variant={'h5'}>
        {description}
      </Typography>

      <Typography color={'primary'} gutterBottom={false}>
        {date}
      </Typography>

      {bannerImage && (
        <Box
          component={'img'}
          my={6}
          width={'100%'}
          src={bannerImage}
          borderRadius={2}
        />
      )}
    </Stack>
  )
}
