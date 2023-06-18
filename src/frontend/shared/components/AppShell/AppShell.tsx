// Components
import { Header } from './components'
import { NextImage } from '../NextImage'
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
      {mode === 'dark' && <Background />}

      <Header />
      <RouterTransition />
      <Container w={'100%'}>{children}</Container>
    </Box>
  )
}

function Background() {
  return (
    <>
      <NextImage
        alt='background'
        src='/img/background.png'
        height={'100%'}
        width={'100%'}
        sx={{
          pointerEvents: 'none',
          opacity: 0.5,
          objectFit: 'cover',
          position: 'fixed',
          top: 0,
          left: '-5%',
          right: 0,
          bottom: 0,
          zIndex: -1
        }}
      />
      <div
        style={{
          width: '100dvw',
          height: '10dvh',
          pointerEvents: 'none',
          opacity: 1,
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          background: 'linear-gradient(to bottom, transparent 10%, black)'
        }}
      />
    </>
  )
}
