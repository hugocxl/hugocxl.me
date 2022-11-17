// Components
import { Page } from '@/frontend/shared/components'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'
import { Title } from '@mantine/core'

// Constants
const STACK_PAGE_TITLE = `Stack`
const STACK_PAGE_DESCRIPTION = `Here's what tech I'm currently using for coding and working.`

export const Stack: NextPage = () => {
  return (
    <Page title={STACK_PAGE_TITLE} description={STACK_PAGE_DESCRIPTION}>
      <Title order={2}>{'Computer / Office'}</Title>
      <ul>
        <li>MacBook Pro (13-inch, 2017)</li>
        <li>Mac Mini (2021)</li>
        <li>Apple Magic Keyboard</li>
        <li>31.5" LG UltraFine 32UN880</li>
        <li>Logitech MX Master 3 Mouse</li>
      </ul>

      <Title mt={6} order={2}>
        {'Coding'}
      </Title>
      <ul>
        <li>Editor: VSCode</li>
        <li>
          Theme: <NextLink href={'/portfolio/haramosh'}>Haramosh</NextLink>
        </li>
        <li>Terminal: macOS terminal / zsh</li>
      </ul>

      <Title mt={6} order={2}>
        {'Software'}
      </Title>
      <ul>
        <li>1 Password</li>
        <li>Spotify</li>
        <li>Raycast</li>
        <li>Notion</li>
        <li>Google Drive</li>
        <li>Lunar</li>
      </ul>

      <Title mt={6} order={2}>
        {'Other Tech'}
      </Title>
      <ul>
        <li>Apple Airpods Pro</li>
        <li>Apple iPhone 11 Pro</li>
        <li>Kindle Oasis</li>
        <li>Polar Vantage M</li>
      </ul>
    </Page>
  )
}
