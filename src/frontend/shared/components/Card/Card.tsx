// Dependencies
import { useQuery } from '@tanstack/react-query'

// Components
import { Stack, Typography, Chip, Box, SvgIcon, Tooltip } from '@mui/material'

// Types
import { CardProps } from './Card.types'
import { FC } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { ArticleViews } from '@/frontend/shared/types'

// Hooks
import { useThemeMode } from '@/frontend/shared/hooks'

export const Card: FC<CardProps> = ({
  title,
  date,
  description,
  tags,
  slug
}) => {
  const [mode] = useThemeMode()
  const isDarkMode = mode === 'dark'

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
        <Stack alignItems={'center'} spacing={1} mt={2}>
          <AiOutlineEye />
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
        boxShadow={1}
        border={1}
        borderColor={'divider'}
        sx={{
          height: '100%',
          borderRadius: 6,
          p: 3,
          bgcolor: 'background.paper',
          ...(isDarkMode && {
            background:
              'linear-gradient(190deg,rgba(50,50,50,0.5),rgba(20,20,20,0.5))'
          })
        }}
      >
        <Stack direction={'column'}>
          <Typography variant={'body2'}>{date}</Typography>
          <Typography
            className={'gradient-text'}
            variant={'h5'}
            component={'span'}
            mb={1}
          >
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
  )
}
