// Dependencies
import React, { useMemo, useState } from 'react'
import { Global, MantineProvider } from '@mantine/core'
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
          fontSizes: {
            xs: 12,
            sm: 14,
            md: 18,
            lg: 20,
            xl: 24
          },
          primaryColor: isDarkMode ? 'yellow' : 'yellow',
          colorScheme: mode,
          black: '#333',
          white: '#fff',
          defaultRadius: 'md',
          colors: {
            yellow: [
              '#eee7de',
              '#e5dbcd',
              '#ddcfbc',
              '#d4c4ac',
              '#ccb89b',
              '#c3ac8a',
              '#bba07a',
              '#b29469',
              '#aa8859',
              '#9A7B4F'
            ]
          },
          defaultGradient: {
            from: '#c3ac8a',
            to: '#c3ac8a',
            deg: 135
          },
          components: {
            Container: {
              styles: {
                root: {
                  maxWidth: '768px'
                }
              }
            },
            Title: {
              styles: {
                root: {
                  marginTop: '4rem !important',
                  letterSpacing: -0.5,
                  width: 'fit-content',
                  color: isDarkMode ? 'white' : 'black'
                }
              }
            },
            Timeline: {
              styles: {
                itemTitle: {
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
        <Global
          styles={(theme) => ({
            body: {
              ...theme.fn.fontStyles(),
              backgroundColor: theme.colorScheme === 'dark' ? 'black' : 'white',
              // backgroundColor:
              //   theme.colorScheme === 'dark'
              //     ? theme.colors.dark[7]
              //     : 'rgb(245,245,238)',
              color: theme.colorScheme === 'dark' ? theme.white : theme.black
            }
          })}
        />
      </MantineProvider>
    </ThemeModeContext.Provider>
  )
}
