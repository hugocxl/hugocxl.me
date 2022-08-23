// Components
import { Stack, Typography } from '@mui/material'
import { FC } from 'react'

// Types
import { ListProps } from './List.types'

export const List: FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li>
          <Stack
            spacing={1}
            mb={1}
            key={item.title || item.description}
            alignItems={'center'}
          >
            {item.title && (
              <Typography gutterBottom={false} variant='subtitle1'>
                {`${item.title} -`}
              </Typography>
            )}
            {item.description && (
              <Typography gutterBottom={false}>{item.description}</Typography>
            )}
          </Stack>
        </li>
      ))}
    </ul>
  )
}
