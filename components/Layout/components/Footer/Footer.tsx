// Components
import { Stack, Typography, Link } from '@mui/material'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

export function Footer() {
  return (
    <Stack
      py={2}
      borderTop={1}
      borderColor={'divider'}
      component={'footer'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Typography variant={'body2'} fontWeight={'bolder'}>
        {`@hcorta @ ${new Date().getFullYear()}`}
      </Typography>

      <Stack spacing={2}>
        <Link
          href={`https://github.com/hcorta`}
          title={`GitHub @hcorta`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsGithub />
        </Link>

        <Link
          href={`https://twitter.com/hcorta`}
          title={`Twitter @hcorta`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsTwitter />
        </Link>

        <Link
          href={`https://www.linkedin.com/in/hugocorta`}
          title={`LinkedIn @hugocorta`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsLinkedin />
        </Link>
      </Stack>
    </Stack>
  )
}
