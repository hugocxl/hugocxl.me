// Components
import {
  Typography,
  Table,
  TableRow,
  TableCell,
  TableContainer
} from '@mui/material'
import { FC } from 'react'

// Types
import { ListProps } from './List.types'

export const List: FC<ListProps> = ({ items }) => {
  return (
    <TableContainer>
      <Table padding={'none'}>
        {items.map((item) => (
          <TableRow>
            {item.title && (
              <TableCell sx={{ borderBottom: 0 }}>
                <Typography variant='subtitle1'>{item.title}</Typography>
              </TableCell>
            )}
            {item.description && (
              <TableCell sx={{ borderBottom: 0 }}>
                <Typography>{item.description}</Typography>
              </TableCell>
            )}
          </TableRow>
        ))}
      </Table>
    </TableContainer>
  )
}
