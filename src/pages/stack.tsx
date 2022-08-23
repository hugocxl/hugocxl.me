// Components
import { Typography } from '@mui/material'
import { Page, List } from 'src/components'

// Types
import { NextPage } from 'next'

// Constants
const STACK_PAGE_TITLE = `Stack`
const STACK_PAGE_DESCRIPTION = `Here's what tech I'm currently using for coding and working.`

const StackPage: NextPage = (props) => {
  return (
    <Page title={STACK_PAGE_TITLE} description={STACK_PAGE_DESCRIPTION}>
      <Typography variant={'h4'}>{'Office'}</Typography>
      <List
        items={[
          { description: '💻 MacBook Pro (13-inch, 2017)' },
          { description: '🎛 Mac Mini (2021)' },
          { description: '⌨️ Apple Magic Keyboard' },
          { description: '🖥 31.5" LG UltraFine 32UN880' },
          { description: '🖱 Logitech MX Master 3 Mouse' }
        ]}
      />

      <Typography mt={4} variant={'h4'}>
        {'Apps'}
      </Typography>
      <List
        items={[
          { description: '🔐 1Password' },
          { description: '🎸 Spotify' },
          { description: '🕹 Raycast' },
          { description: '📝 Notion' },
          { description: '💽 Google Drive' }
        ]}
      />

      <Typography mt={4} variant={'h4'}>
        {'Other'}
      </Typography>
      <List
        items={[
          { description: '👂 Apple Airpods Pro' },
          { description: '📱 Apple iPhone 11 Pro' },
          { description: '📚 Kindle Oasis' },
          { description: '⌚️ Polar Vantage M' }
        ]}
      />
    </Page>
  )
}

export default StackPage
