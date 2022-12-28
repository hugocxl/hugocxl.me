// Components
import { Footer, Header } from './components'
import { Container } from '@mantine/core'
import { RouterTransition } from '../RouterTransition'

// Types
import { FC, ReactNode } from 'react'

// Hooks
import { useThemeMode } from '@/frontend/shared/hooks'

export interface AppShellProps {
  children: ReactNode
}

export const AppShell: FC<AppShellProps> = ({ children }) => {
  const [mode] = useThemeMode()
  return (
    <Container
      className={mode}
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
    </Container>
  )
}
