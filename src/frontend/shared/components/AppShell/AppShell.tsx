// Components
import { Header } from './components'
import { Box, Container } from '@mantine/core'
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
    <Box
      className={mode}
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        minHeight: '100dvh',
        position: 'relative'
      }}
    >
      <img
        alt=''
        src='/img/background.png'
        decoding='async'
        height={'100%'}
        width={'100%'}
        style={{
          opacity: 1,
          objectFit: 'cover',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1
        }}
      />
      <Header />
      <RouterTransition />
      <Container w={'100%'}>{children}</Container>
    </Box>
  )
}
