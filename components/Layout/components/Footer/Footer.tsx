// Components
import { Stack, Typography, Link, IconButton } from '@mui/material'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

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
