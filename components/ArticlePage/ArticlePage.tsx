// Components
import { Page } from '../Page'

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
import { FC } from 'react'
import { ArticlePageProps } from './ArticlePage.types'

export const ArticlePage: FC<ArticlePageProps> = ({
  title,
  description,
  bannerImage,
  date,
  tags,
  children
}) => {
  return (
    <Page title={title} description={description} sidebar={Sidebar}>
      <Divider />
      <Stack spacing={2} mb={4}>
        <Typography>{date}</Typography>
      </Stack>
      <img src={bannerImage} />
      {children}
    </Page>
  )
}

export function Sidebar() {
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
      height={'100%'}
      direction={'column'}
      borderTop={1}
      borderColor={'divider'}
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
