// Components
import {
  Typography,
  Table,
  TableRow,
  TableCell,
  TableContainer,
  Stack
} from '@mui/material'
import { FC } from 'react'

// Types
import { ListProps } from './List.types'

export const List: FC<ListProps> = ({ items }) => {
  return (
    <Stack direction={'column'} spacing={2}>
      {items.map((item) => (
        <Stack spacing={2} alignItems={'center'}>
          {item.title && (
            <Typography
              fontWeight={'bold'}
              gutterBottom={false}
              color={'primary'}
            >
              {item.title}
            </Typography>
          )}
          {item.description && (
            <Typography gutterBottom={false}>{item.description}</Typography>
          )}
        </Stack>
      ))}
    </Stack>
  )
}
