// Components
import { Page } from '../Page'

// Components
import { Stack, Typography, Link, IconButton, Divider } from '@mui/material'
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

// Types
import { FC } from 'react'
import { ArticlePageProps } from './ArticlePage.types'

// Hooks
import { useRouter } from 'next/router'

export const ArticlePage: FC<ArticlePageProps> = ({
  title,
  description,
  bannerImage,
  date,
  children
}) => {
  const router = useRouter()
  const baseUrl = 'https://hugocorta.com'
  const pageUrl = encodeURI(`${baseUrl}${router.asPath}`)
  const pageTitle = encodeURI(title)

  function Sidebar() {
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
          icon={BsTwitter}
          href={`https://twitter.com/intent/tweet/?text=${pageTitle}&url=${pageUrl}}`}
          title={`Share ${pageTitle} on Twitter`}
        />

        <SideButton
          icon={BsLinkedin}
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}&summary=${pageTitle}&source=${pageUrl}`}
          title={`Share ${pageTitle} on LinkedIn`}
        />
        {/* <SideButton
        icon={BsGithub}
        href={`https://github.com/hcorta`}
        title={`GitHub @hcorta`}
      />

      <SideButton
        icon={BsTwitter}
        href={`https://twitter.com/`}
        title={`Twitter @hcorta`}
      />

      <SideButton
        icon={BsLinkedin}
        href={`https://www.linkedin.com/in/hugocorta`}
        title={`LinkedIn @hugocorta`}
      /> */}
      </Stack>
    )
  }

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
