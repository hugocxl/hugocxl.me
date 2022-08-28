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

const containerSx = {
  display: 'grid',
  px: 0.5,
  pb: 1.5,
  pt: 0.5,
  borderRadius: 4,
  boxShadow: '0 8px 12px 0 rgb(0 0 0 / 0.1)',
  transition: 'all 0.18s ease-in-out',
  bgcolor: 'background.paper',
  '&:hover': {
    transform: 'scale(1.05)'
  }
}

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
        <Stack alignItems={'center'} spacing={1} mt={2}>
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

  function ImageHeader() {
    return (
      <Box
        sx={{
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14
        }}
        overflow={'hidden'}
        display={'block'}
        width={'100%'}
        height={'100px'}
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
    )
  }

  return (
    <Box
      sx={{
        ...containerSx,
        gridTemplateRows: !hasImage ? '1fr' : 'auto 1fr',
        ...(isDarkMode && {
          backgroundImage: gradients[position]
        }),
        ...sx
      }}
    >
      {hasImage && <ImageHeader />}

      <Box
        sx={{
          height: '100%',
          borderRadius: 3.5,
          p: 3,
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          ...(hasImage && {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
          })
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

        <Analytics />
      </Box>
    </Box>
  )
}
