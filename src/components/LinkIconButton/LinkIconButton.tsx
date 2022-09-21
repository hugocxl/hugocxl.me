// Components
import { IconButton, Link, Tooltip } from '@mui/material'

// Types
import { FC } from 'react'
import { LinkIconButtonProps } from './LinkIconButton.types'

export const LinkIconButton: FC<LinkIconButtonProps> = ({
  icon: Icon,
  title,
  ...rest
}) => {
  return (
    <Tooltip title={title} placement={'bottom'}>
      <Link
        {...rest}
        title={title}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        <IconButton>
          <Icon />
        </IconButton>
      </Link>
    </Tooltip>
  )
}
