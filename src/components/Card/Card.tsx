// Components
import { Paper, Stack, Typography, Chip, Box } from '@mui/material'
import NextImage from 'next/image'

// Types
import { CardProps } from './Card.types'
import { FC } from 'react'

export const Card: FC<CardProps> = ({
  title,
  date,
  description,
  tags,
  sx = {},
  bannerImage
}) => {
  return (
    <Paper
      sx={{
        ...sx,
        p: 4,
        border: 1,
        borderColor: 'rgba(80,80,80,0.15)',
        display: 'flex',
        boxShadow: '0 8px 12px 0 rgb(0 0 0 / 8%)',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'all 0.18s ease-in-out',
        '&:hover': {
          borderColor: 'rgba(80,80,80,0.2)',
          transform: 'translateY(-6px)'
        }
      }}
    >
      <Stack direction={'column'}>
        {bannerImage && (
          <Box
            display={'block'}
            width={'100%'}
            height={'100px'}
            position={'relative'}
            mb={2}
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
        <Typography variant={'body2'} color={'secondary'}>
          {date}
        </Typography>
        <Typography variant={'subtitle1'} component={'span'}>
          {title}
        </Typography>
        <Typography variant={'body2'}>{description}</Typography>
      </Stack>

      <Stack flexWrap={'wrap-reverse'} mt={1}>
        {tags.map((tag) => (
          <Chip
            variant='outlined'
            key={tag}
            sx={{ mr: 1, mt: 1 }}
            label={tag}
          />
        ))}
      </Stack>
    </Paper>
  )
}
