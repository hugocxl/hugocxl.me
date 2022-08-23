// Components
import { Stack } from '@mui/material'
import { LinkIconButton } from 'src/components'
import { BsTwitter, BsLinkedin } from 'react-icons/bs'

// Types
import { FC } from 'react'
import { ArticlePageSidebarProps } from './ArticlePageSidebar.types'

export const ArticlePageSidebar: FC<ArticlePageSidebarProps> = ({
  title,
  pageUrl,
  description
}) => {
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
      spacing={1}
      height={'100vh'}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <LinkIconButton
        icon={BsTwitter}
        href={`https://twitter.com/intent/tweet/?text=${title}&url=${pageUrl}`}
        title={`Share ${title} on Twitter`}
      />

      <LinkIconButton
        icon={BsLinkedin}
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${title}&summary=${description}&source=${pageUrl}`}
        title={`Share ${title} on LinkedIn`}
      />
    </Stack>
  )
}
