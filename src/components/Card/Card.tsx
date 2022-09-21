// Dependencies
import { useQuery } from '@tanstack/react-query'

// Components
import { Stack, Typography, Chip, Box, SvgIcon, Tooltip } from '@mui/material'
import NextImage from 'next/image'

// Types
import { CardProps } from './Card.types'
import { FC } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { ArticleViews } from 'src/types'

// Hooks
import { useThemeMode } from 'src/hooks'

// Styles
import styles from './Card.module.css'

const gradients = [
  'linear-gradient(to bottom right, rgb(246,16,178), rgb(0,180,236))',
  'linear-gradient(to bottom right, rgb(85,171,4), rgb(41,194,251))',
  'linear-gradient(to bottom right, rgb(213,31,20), rgb(188,27,197))',
  'linear-gradient(to bottom right, rgb(240,187,31), rgb(191,34,168))',
  'linear-gradient(to bottom right, rgb(254,175,67), rgb(234,63,97))',
  'linear-gradient(to bottom right, rgb(189,125,195), rgb(16,32,150))',
  'linear-gradient(to bottom right, rgb(93,194,114), rgb(225,85,22))',
  'linear-gradient(to bottom right, rgb(232,182,104), rgb(185,177,213))',
  'linear-gradient(to bottom right, rgb(28,43,161), rgb(28,216,179))',
  'linear-gradient(to bottom right, rgb(251,127,109), rgb(27,157,246))',
  'linear-gradient(to bottom right, rgb(6,24,211), rgb(209,249,240))',
  'linear-gradient(to bottom right, rgb(21,145,236), rgb(112,18,249))',
  'linear-gradient(to bottom right, rgb(204,78,204), rgb(214,26,119))',
  'linear-gradient(to bottom right, rgb(56,202,194), rgb(250,23,147))'
]

const containerSx = {}

export const Card: FC<CardProps> = ({
  title,
  date,
  description,
  tags,
  sx = {},
  bannerImage,
  position,
  slug
}) => {
  const [mode] = useThemeMode()
  const isDarkMode = mode === 'dark'
  const hasImage = !!bannerImage

  const viewsQuery = useQuery<ArticleViews>([slug], () => {
    return fetch(`/api/views/${slug}`).then((res) => res.json())
  })

  function Analytics() {
    const views = new Number(viewsQuery.data?.total)
    const viewsInLocale = views.toLocaleString()
    const display = !viewsQuery.isSuccess ? '-' : views > 0 ? viewsInLocale : 0

    return (
      <Tooltip
        title={`This page has received ${display} visits`}
        placement={'bottom'}
      >
        <Stack alignItems={'center'} spacing={1} mt={1}>
          <SvgIcon color={'inherit'}>
            <AiOutlineEye />
          </SvgIcon>
          <Typography gutterBottom={false} variant={'body2'}>
            {display}
          </Typography>
        </Stack>
      </Tooltip>
    )
  }

  function Tags() {
    return (
      <Stack flexWrap={'wrap-reverse'} mt={3}>
        {tags.map((tag) => (
          <Chip
            size={'small'}
            color={'primary'}
            variant={'filled'}
            key={tag}
            sx={{ mr: 1, mt: 1, fontSize: '11px' }}
            label={tag}
          />
        ))}
      </Stack>
    )
  }

  return (
    <Box
      className={styles.card}
      sx={{
        display: 'grid',
        p: 0.65,
        borderRadius: 4,
        transition: 'all 0.18s ease-in-out',
        bgcolor: 'divider',
        '&:hover': {
          transform: 'scale(1.05)'
        },
        ':after': {
          backgroundImage: gradients[position]
        },
        ...(isDarkMode && {
          backgroundImage: gradients[position]
        }),
        ...sx
      }}
    >
      <Box
        className={styles.info}
        sx={{
          borderRadius: 3.5,
          p: 3,
          bgcolor: 'background.paper'
        }}
      >
        <Stack direction={'column'}>
          <Typography variant={'body2'} color={'secondary'}>
            {date}
          </Typography>
          <Typography variant={'subtitle1'} component={'span'}>
            {title}
          </Typography>
          <Typography variant={'body2'}>{description}</Typography>
        </Stack>

        <Stack direction={'column'}>
          <Tags />
          <Analytics />
        </Stack>
      </Box>
    </Box>
  )
}
