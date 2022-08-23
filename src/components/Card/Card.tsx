// Components
import { Paper, Stack, Typography, IconButton, Chip } from '@mui/material'
import { VscArrowRight } from 'react-icons/vsc'

// Types
import { CardProps } from './Card.types'
import { FC } from 'react'

export const Card: FC<CardProps> = ({
  title,
  date,
  description,
  tags,
  sx = {}
}) => {
  return (
    <Paper
      sx={{
        ...sx,
        p: 4,
        display: 'flex',
        boxShadow: '0 8px 12px 0 rgb(0 0 0 / 8%)',
        flexDirection: 'column',
        alignItems: 'flex-start',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: 'background.paper'
        }
      }}
    >
      <Stack
        alignItems={'center'}
        justifyContent={'space-between'}
        width={'100%'}
      >
        <Stack alignItems={'flex-start'} spacing={1}>
          <Typography variant={'subtitle1'}>{title}</Typography>
          <IconButton size={'small'} color={'secondary'}>
            <VscArrowRight />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        spacing={2}
        direction={'column'}
        justifyContent={'space-between'}
        width={'100%'}
      >
        <Typography variant={'body2'}>{date}</Typography>
        <Typography variant={'body2'}>{description}</Typography>
        <Stack flexWrap={'wrap'}>
          {tags.map((tag) => (
            <Chip key={tag} sx={{ mr: 1, mt: 1 }} label={tag} />
          ))}
        </Stack>
      </Stack>
    </Paper>
  )
}
