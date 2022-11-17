// Dependencies
import React, { useMemo, useState } from 'react'
import { MantineProvider } from '@mantine/core'
import { TypographyStylesProvider } from '@mantine/core'

// Contexts
import { ThemeModeContext } from '@/frontend/shared/contexts'

// Types
import { FC, ReactNode } from 'react'

export interface ThemeProviderProps {
  mode?: 'light' | 'dark'
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  mode: initialMode = 'dark'
}) => {
  const [mode, setMode] = useState<'light' | 'dark'>(initialMode)
  const isDarkMode = mode === 'dark'
  const themeModeContextValue = useMemo(
    () => [
      mode,
      () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    ],
    [mode]
  )

  return (
    <ThemeModeContext.Provider value={themeModeContextValue}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          primaryColor: isDarkMode ? 'violet' : 'blue',
          colorScheme: mode,
          black: '#222',
          white: '#fff',
          defaultRadius: 'md',
          defaultGradient: isDarkMode
            ? {
                from: '#6841d9',
                to: '#ff3ed2',
                deg: 135
              }
            : {
                from: '#41d1ff',
                to: '#bd34fe',
                deg: 135
              },
          components: {
            Title: {
              styles: {
                root: {
                  letterSpacing: -1,
                  // fontWeight: 800,
                  width: 'fit-content',
                  color: isDarkMode ? 'white' : 'black'
                }
              }
            },
            ActionIcon: {
              defaultProps: {
                variant: 'default',
                size: 'lg'
              }
            }
          }
        }}
      >
        <TypographyStylesProvider>{children}</TypographyStylesProvider>
      </MantineProvider>
    </ThemeModeContext.Provider>
  )
}
