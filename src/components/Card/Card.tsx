// Dependencies
import { useQuery } from '@tanstack/react-query'

// Components
import { Stack, Typography, Chip, Box, SvgIcon, Tooltip } from '@mui/material'

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
  'linear-gradient(135deg, #bd34fe, #41d1ff)',
  'linear-gradient(to bottom right, rgb(240,187,31), rgb(191,34,168))',
  'linear-gradient(to bottom right, rgb(85,171,4), rgb(41,194,251))'
]

export const Card: FC<CardProps> = ({
  title,
  date,
  description,
  tags,
  sx = {},
  position,
  slug
}) => {
  const [mode] = useThemeMode()
  const isDarkMode = mode === 'dark'
  const gradient = gradients[position % 3]
  const backgroundImage = isDarkMode
    ? gradient
    : 'linear-gradient(135deg, #ececec, #dddddd)'
  const afterBackgroundImage = isDarkMode
    ? gradient
    : 'linear-gradient(135deg, #ececec, #999999)'

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
      <Stack flexWrap={'wrap-reverse'} mt={2}>
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
      sx={{
        transition: 'all 0.17s ease-in-out',
        border: 2,
        borderRadius: 7,
        borderColor: 'transparent',
        height: '100%',
        p: '4px',
        '&:hover': {
          borderColor: 'rgba(140,140,140,0.6)'
        }
      }}
    >
      <Box
        className={styles.card}
        sx={{
          display: 'grid',
          p: '1px',
          borderRadius: 5,
          transition: 'all 0.18s ease-in-out',
          bgcolor: 'divider',
          backgroundImage,
          '::after': {
            backgroundImage: afterBackgroundImage
          },
          ...sx
        }}
      >
        <Box
          className={styles.info}
          sx={{
            borderRadius: 5,
            p: 3,
            bgcolor: 'background.paper'
          }}
        >
          <Stack direction={'column'}>
            <Typography variant={'body2'}>{date}</Typography>
            <Typography variant={'h6'} component={'span'} mb={0}>
              {title}
            </Typography>
            <Typography variant={'body2'}>{description}</Typography>
          </Stack>

          <Stack direction={'column'}>
            {Boolean(tags) && <Tags />}
            <Analytics />
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
