// Components
import { Paper, Stack, Typography, Chip } from '@mui/material'

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
        border: 1,
        borderColor: 'rgba(120,120,120,0.1)',
        display: 'flex',
        boxShadow: '0 8px 12px 0 rgb(0 0 0 / 8%)',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'all 0.18s ease-in-out',
        '&:hover': {
          borderColor: 'rgba(120,120,120,0.25)',
          transform: 'translateY(-6px)'
        }
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

      <Stack flexWrap={'wrap-reverse'} mt={3}>
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
