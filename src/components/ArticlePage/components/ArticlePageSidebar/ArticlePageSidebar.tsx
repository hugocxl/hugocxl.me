// Dependencies
import { useQuery } from '@tanstack/react-query'

// Components
import {
  Divider,
  IconButton,
  Snackbar,
  Stack,
  SvgIcon,
  Tooltip,
  Typography
} from '@mui/material'
import { LinkIconButton } from 'src/components'
import { BsTwitter, BsLinkedin } from 'react-icons/bs'
import { AiOutlineLink, AiOutlineEye } from 'react-icons/ai'

// Lib
import { fetcher } from 'src/lib'

// Types
import { FC, useState } from 'react'
import { ArticlePageSidebarProps } from './ArticlePageSidebar.types'
import { ArticleViews } from 'src/types'

export const ArticlePageSidebar: FC<ArticlePageSidebarProps> = ({
  title,
  description,
  pageUrl,
  encodedTitle,
  encodedDescription,
  encodedPageUrl,
  slug
}) => {
  const [open, setOpen] = useState(false)
  const viewsQuery = useQuery([encodedPageUrl], () => {
    return fetch(`/api/views/${slug}`).then((res) => res.json())
  })

  async function onClickToClipboard() {
    await navigator.clipboard.writeText(pageUrl)
    setOpen(true)
  }

  function Analytics() {
    const views = new Number(viewsQuery.data?.total)
    const viewsInLocale = views.toLocaleString()
    const display = views > 0 ? viewsInLocale : 0

    return (
      <Tooltip
        title={`This page has received ${display} visits`}
        placement={'right'}
      >
        <Stack direction={'column'} alignItems={'center'}>
          <SvgIcon>
            <AiOutlineEye />
          </SvgIcon>
          <Typography variant={'body2'} color={'text.secondary'}>
            {display}
          </Typography>
        </Stack>
      </Tooltip>
    )
  }

  return (
    <Stack
      bgcolor={'background.default'}
      top={0}
      gridRow={'span 2'}
      borderLeft={1}
      borderColor={'divider'}
      py={6}
      px={2}
      position={'sticky'}
      spacing={2}
      height={'100vh'}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Snackbar
        open={open}
        autoHideDuration={3500}
        onClose={() => setOpen(false)}
        message={'URL copied to clipboard'}
      />
      {viewsQuery.isSuccess && <Analytics />}
      <Divider flexItem />

      <Tooltip title={'Copy to clipboard'} placement={'right'}>
        <IconButton onClick={onClickToClipboard}>
          <AiOutlineLink />
        </IconButton>
      </Tooltip>

      <LinkIconButton
        icon={BsTwitter}
        href={`https://twitter.com/intent/tweet/?text=${title}&url=${encodedPageUrl}`}
        title={`Share ${title} on Twitter`}
      />
      <LinkIconButton
        icon={BsLinkedin}
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedPageUrl}&title=${title}&summary=${encodedDescription}&source=${pageUrl}`}
        title={`Share ${title} on LinkedIn`}
      />
    </Stack>
  )
}
