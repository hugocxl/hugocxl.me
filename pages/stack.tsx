// Components
import { Typography, List, ListItem } from '@mui/material'
import { Page } from 'components'

const Stack = () => {
  return (
    <Page
      title='Stack'
      description={`Here's what tech I'm currently using for coding and working. Most of these have been accumulated over the past few years. `}
    >
      <Typography variant={'subtitle1'}>{'Office'}</Typography>
      <ul>
        <li>{'💻 MacBook Pro (13-inch, 2017)'}</li>
        <li>{'🎛 Mac Mini (2021)'}</li>
        <li>{'⌨️ Apple Magic Keyboard'}</li>
        <li>{'🖥 31.5" LG UltraFine 32UN880'}</li>
        <li>{'🖱 Logitech MX Master 3 Mouse'}</li>
      </ul>

      <Typography variant={'subtitle1'}>{'Apps'}</Typography>
      <ul>
        <li>{'🔐 1Password'}</li>
        <li>{'🎸 Spotify'}</li>
        <li>{'🕹 Raycast'}</li>
        <li>{'📝 Notion'}</li>
        <li>{'💽 Google Drive'}</li>
      </ul>

      <Typography variant={'subtitle1'}>{'Apps'}</Typography>
      <ul>
        <li>{'👂 Apple Airpods Pro'}</li>
        <li>{'📱 Apple iPhone 11 Pro'}</li>
        <li>{'📚 Kindle Oasis'}</li>
        <li>{'⌚️ Polar Vantage M'}</li>
      </ul>
    </Page>
  )
}

export default Stack
