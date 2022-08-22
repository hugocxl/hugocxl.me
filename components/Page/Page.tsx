// Components
import {
  Stack,
  Typography,
  Link,
  IconButton,
  Box,
  Divider
} from '@mui/material'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

// Types
import { PageProps } from './Page.types'
import { FC } from 'react'

export const Page: FC<PageProps> = ({
  children,
  title,
  description,
  sidebar: Sidebar
}) => {
  const hasHeader = !!title
  const hasSidebar = !!Sidebar

  return (
    <Box display={'grid'} gridTemplateColumns={'1fr auto'} height={'100%'}>
      <Box
        overflow={'auto'}
        height={'100%'}
        width={'100%'}
        py={6}
        px={12}
        {...(hasHeader && {
          display: 'flex',
          flexDirection: 'column'
        })}
      >
        {hasHeader && (
          <Stack direction={'column'} mb={8} width={'100%'}>
            {title && <Typography variant={'h4'}>{title}</Typography>}
            {description && <Typography>{description}</Typography>}
          </Stack>
        )}
        {children}
      </Box>

      {hasSidebar && (
        <Box
          position={'sticky'}
          top={0}
          borderLeft={1}
          borderColor={'divider'}
          overflow={'auto'}
          height={'100%'}
          width={'100%'}
          py={6}
          px={2}
        >
          <Sidebar />
        </Box>
      )}
    </Box>
  )
}

// Components

export function Footer() {
  function SideButton({ icon: Icon, ...rest }) {
    return (
      <Link {...rest} target='_blank' rel='noopener noreferrer'>
        <IconButton>
          <Icon />
        </IconButton>
      </Link>
    )
  }

  return (
    <Stack
      py={6}
      direction={'column'}
      borderTop={1}
      borderColor={'divider'}
      component={'footer'}
      justifyContent={'flex-end'}
      alignItems={'center'}
    >
      <SideButton
        icon={BsGithub}
        href={`https://github.com/hcorta`}
        title={`GitHub @hcorta`}
      />

      <SideButton
        icon={BsTwitter}
        href={`https://twitter.com/hcorta`}
        title={`Twitter @hcorta`}
      />

      <SideButton
        icon={BsLinkedin}
        href={`https://www.linkedin.com/in/hugocorta`}
        title={`LinkedIn @hugocorta`}
      />
    </Stack>
  )
}
