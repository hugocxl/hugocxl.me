// Components
import { IconButton, Link, LinkProps, Tooltip } from '@mui/material'

// Types
import { FC } from 'react'

export interface LinkIconButtonProps extends LinkProps {
  icon: FC<any>
}

export const LinkIconButton: FC<LinkIconButtonProps> = ({
  icon: Icon,
  title,
  ...rest
}) => {
  return (
    <Tooltip title={title} placement={'bottom'}>
      <Link {...rest} target={'_blank'} rel={'noopener noreferrer'}>
        <IconButton>
          <Icon />
        </IconButton>
      </Link>
    </Tooltip>
  )
}
