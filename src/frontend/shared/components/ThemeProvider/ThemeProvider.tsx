// Dependencies
import React, { useEffect, useMemo, useState } from 'react'
import { TypographyStylesProvider } from '@mantine/core'
import {
  Global,
  MantineProvider,
  TextStylesParams,
  TitleStylesParams
} from '@mantine/core'

// Contexts
import { ThemeModeContext } from '@/frontend/shared/contexts'

// Types
import { FC, ReactNode } from 'react'
import { useColorScheme } from '@mantine/hooks'

export interface ThemeProviderProps {
  children: ReactNode
}

const COLORS = {
  light: {
    primary: '#272727',
    secondary: '#777'
  },
  dark: {
    primary: '#ffffff',
    secondary: '#777'
  }
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark')
  const colorScheme = useColorScheme(mode)
  const isDarkMode = mode === 'dark'
  const themeModeContextValue = useMemo(
    () => [
      mode,
      () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      }
    ],
    [mode]
  )

  useEffect(() => {
    setMode(colorScheme)
  }, [colorScheme])

  return (
    <ThemeModeContext.Provider value={themeModeContextValue}>
      <MantineProvider
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
        theme={{
          primaryColor: isDarkMode ? 'cyan' : 'blue',
          colorScheme: mode,
          black: 'rgb(60,60,60)',
          white: '#fff',
          defaultRadius: 'sm',
          components: {
            Container: {
              styles: {
                root: {
                  maxWidth: '70ch'
                }
              }
            },
            Title: {
              styles: (theme, params: TitleStylesParams) => ({
                root: {
                  letterSpacing: -1,
                  width: 'fit-content',
                  color: isDarkMode
                    ? COLORS.dark.primary
                    : COLORS.light.primary,
                  ...(params.element === 'h1' && {
                    marginTop: '5rem !important',
                    marginBottom: '2rem !important'
                  }),
                  ...(params.element === 'h2' && {
                    marginTop: '2.5rem !important',
                    marginBottom: '1rem !important'
                  }),
                  ...((params.element === 'h5' || params.element === 'h6') && {
                    letterSpacing: 0,
                    fontWeight: 600
                  })
                }
              })
            },
            Text: {
              styles: (theme, params: TextStylesParams) => ({
                root: {
                  ...(params.weight === 'bold' && {
                    fontWeight: 500
                  }),
                  ...(params.color === 'primary' && {
                    color: isDarkMode
                      ? COLORS.dark.primary
                      : COLORS.light.primary
                  }),
                  ...(params.color === 'secondary' && {
                    color: isDarkMode
                      ? COLORS.dark.secondary
                      : COLORS.light.secondary
                  })
                }
              })
            },
            Timeline: {
              styles: {
                itemTitle: {
                  color: isDarkMode
                    ? COLORS.dark.secondary
                    : COLORS.light.secondary
                }
              }
            },
            Card: {
              styles: theme => ({
                root: {
                  background: isDarkMode
                    ? theme.colors.dark[8]
                    : theme.colors.gray[1]
                }
              })
            },
            Badge: {
              styles: {
                root: {
                  borderRadius: 0,
                  background: isDarkMode
                    ? COLORS.dark.primary
                    : COLORS.light.primary,
                  color: !isDarkMode
                    ? COLORS.dark.primary
                    : COLORS.light.primary
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
          styles={theme => ({
            body: {
              ...theme.fn.fontStyles(),
              backgroundColor:
                theme.colorScheme === 'dark' ? 'rgb(10,10,10)' : 'white'
            }
          })}
        />
      </MantineProvider>
    </ThemeModeContext.Provider>
  )
}
