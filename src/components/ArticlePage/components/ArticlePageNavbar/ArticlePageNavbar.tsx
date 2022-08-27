// Dependencies
import { useRouter } from 'next/router'

// Components
import {
  Breadcrumbs,
  IconButton,
  Link,
  Stack,
  Typography
} from '@mui/material'
import NextLink from 'next/link'
import { VscChevronLeft } from 'react-icons/vsc'

// Types
import { FC } from 'react'
import { ArticlePageNavbarProps } from './ArticlePageNavbar.types'

// Styles
import styles from './ArticlePageNavbar.module.css'

export const ArticlePageNavbar: FC<ArticlePageNavbarProps> = ({ title }) => {
  const router = useRouter()
  const [_, section] = router.asPath.split('/')

  return (
    <Stack direction={'column'} position={'relative'}>
      <Stack
        zIndex={1}
        bgcolor={'background.default'}
        position={'sticky'}
        top={0}
        py={3}
        px={16}
        alignItems={'center'}
        borderBottom={1}
        borderColor={'divider'}
      >
        <IconButton
          onClick={router.back}
          sx={{ position: 'absolute', left: 75 }}
        >
          <VscChevronLeft />
        </IconButton>
        <Breadcrumbs aria-label={'breadcrumb'} sx={{ marginBottom: 0 }}>
          <NextLink href={`/${section}`}>
            <Link color='text.secondary' className={styles.textCapitalize}>
              {section}
            </Link>
          </NextLink>
          <Typography noWrap gutterBottom={false} color='text.primary'>
            {title}
          </Typography>
        </Breadcrumbs>
      </Stack>
    </Stack>
  )
}
