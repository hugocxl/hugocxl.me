// Components
import { Link, Typography } from '@mui/material'
import { Page } from 'src/components'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'

// Constants
const STACK_PAGE_TITLE = `Stack`
const STACK_PAGE_DESCRIPTION = `Here's what tech I'm currently using for coding and working.`

const StackPage: NextPage = () => {
  return (
    <Page title={STACK_PAGE_TITLE} description={STACK_PAGE_DESCRIPTION}>
      <Typography variant={'subtitle1'}>{'Computer / Office'}</Typography>
      <ul>
        <Typography component={'li'}>MacBook Pro (13-inch, 2017)</Typography>
        <Typography component={'li'}>Mac Mini (2021)</Typography>
        <Typography component={'li'}>Apple Magic Keyboard</Typography>
        <Typography component={'li'}>31.5" LG UltraFine 32UN880</Typography>
        <Typography component={'li'}>Logitech MX Master 3 Mouse</Typography>
      </ul>

      <Typography mt={6} variant={'subtitle1'}>
        {'Coding'}
      </Typography>
      <ul>
        <Typography component={'li'}>Editor: VSCode</Typography>
        <Typography component={'li'}>
          Theme:{' '}
          <NextLink href={'/portfolio/haramosh'}>
            <Link>Haramosh</Link>
          </NextLink>
        </Typography>
        <Typography component={'li'}>Terminal: macOS terminal / zsh</Typography>
      </ul>

      <Typography mt={6} variant={'subtitle1'}>
        {'Software'}
      </Typography>
      <ul>
        <Typography component={'li'}>1 Password</Typography>
        <Typography component={'li'}>Spotify</Typography>
        <Typography component={'li'}>Raycast</Typography>
        <Typography component={'li'}>Notion</Typography>
        <Typography component={'li'}>Google Drive</Typography>
        <Typography component={'li'}>Lunar</Typography>
      </ul>

      <Typography mt={6} variant={'subtitle1'}>
        {'Other Tech'}
      </Typography>
      <ul>
        <Typography component={'li'}>Apple Airpods Pro</Typography>
        <Typography component={'li'}>Apple iPhone 11 Pro</Typography>
        <Typography component={'li'}>Kindle Oasis</Typography>
        <Typography component={'li'}>Polar Vantage M</Typography>
      </ul>
    </Page>
  )
}

export default StackPage
