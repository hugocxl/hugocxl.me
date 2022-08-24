// Components
import { IconButton, Snackbar, Stack, Tooltip } from '@mui/material'
import { LinkIconButton } from 'src/components'
import { BsTwitter, BsLinkedin } from 'react-icons/bs'
import { AiOutlineLink } from 'react-icons/ai'

// Types
import { FC, useState } from 'react'
import { ArticlePageSidebarProps } from './ArticlePageSidebar.types'

export const ArticlePageSidebar: FC<ArticlePageSidebarProps> = ({
  title,
  description,
  pageUrl,
  encodedTitle,
  encodedDescription,
  encodedPageUrl
}) => {
  const [open, setOpen] = useState(false)

  async function onClickToClipboard() {
    await navigator.clipboard.writeText(pageUrl)
    setOpen(true)
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

      <Snackbar
        open={open}
        autoHideDuration={3500}
        onClose={() => setOpen(false)}
        message={'URL copied to clipboard'}
      />
    </Stack>
  )
}
