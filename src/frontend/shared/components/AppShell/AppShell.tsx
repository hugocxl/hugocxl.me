// Components
import { Footer, Header } from './components'
import { Box } from '@mantine/core'
import { RouterTransition } from '../RouterTransition'

// Types
import { FC, ReactNode } from 'react'

export interface AppShellProps {
  children: ReactNode
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
