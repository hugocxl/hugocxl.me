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
          black: '#000',
          white: '#fff',
          defaultRadius: 'md',
          defaultGradient: isDarkMode
            ? {
                to: '#6741d9',
                from: '#bd34fe',
                deg: 135
              }
            : {
                to: '#41d1ff',
                from: '#bd34fe',
                deg: 135
              },
          components: {
            Title: {
              styles: {
                root: {
                  letterSpacing: -1,
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
