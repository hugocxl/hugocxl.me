// Dependencies
import { useRouter } from 'next/router'

// Components
import {
  Box,
  Breadcrumbs,
  IconButton,
  Link,
  Stack,
  Typography
} from '@mui/material'
import { BsTwitter } from 'react-icons/bs'
import NextLink from 'next/link'

// Types
import { FC } from 'react'
import { ArticlePageNavbarProps } from './ArticlePageNavbar.types'

export const ArticlePageNavbar: FC<ArticlePageNavbarProps> = ({ title }) => {
  const router = useRouter()
  const [_, section] = router.asPath.split('/')

  return (
    <Stack direction={'column'}>
      <Stack
        zIndex={1}
        bgcolor={'background.default'}
        position={'sticky'}
        top={0}
        pt={6}
        px={4}
        pb={2}
        spacing={2}
        alignItems={'center'}
        borderBottom={1}
        borderColor={'divider'}
      >
        <IconButton onClick={router.back}>
          <BsTwitter />
        </IconButton>

        <Breadcrumbs aria-label='breadcrumb'>
          <NextLink href={`/${section}`}>
            <Link color='inherit'>{section}</Link>
          </NextLink>
          <Typography noWrap gutterBottom={false} color='text.primary'>
            {title}
          </Typography>
        </Breadcrumbs>
      </Stack>
    </Stack>
  )
}
