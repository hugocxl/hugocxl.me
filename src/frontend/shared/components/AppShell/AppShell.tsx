// Components
import { Footer, Header } from './components'
import { AppShell as MnAppShell, Box } from '@mantine/core'
import { RouterTransition } from '../RouterTransition'

// Types
import { FC } from 'react'

export interface AppShellProps {
  children: React.ReactNode
}

export const AppShell: FC<AppShellProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        minHeight: '100dvh'
      }}
    >
      <Header />
      <RouterTransition />
      {children}
      <Footer />
    </Box>
  )
}
