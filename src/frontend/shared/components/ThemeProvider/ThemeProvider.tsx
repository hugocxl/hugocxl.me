// Dependencies
import React, { useMemo, useState } from 'react'
import { ActionIconStylesParams, TypographyStylesProvider } from '@mantine/core'
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

export interface ThemeProviderProps {
  children: ReactNode
}

const COLORS = {
  light: {
    background: '#fff',
    primary: '#272727',
    secondary: '#999',
    divider: '#e6e6e6'
  },
  dark: {
    background: '#000',
    primary: '#ffffff',
    secondary: 'rgb(100,100,100)',
    divider: 'rgba(255,255,255,0.12)'
  }
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark')
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

  return (
    <ThemeModeContext.Provider value={themeModeContextValue}>
      <MantineProvider
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
        theme={{
          activeStyles: { transform: 'scale(0.95)' },
          primaryColor: isDarkMode ? 'pink' : 'blue',
          colorScheme: mode,
          black: 'rgb(60,60,60)',
          white: '#fff',
          defaultRadius: 'md',
          colors: {
            pink: []
          },
          components: {
            Divider: {
              styles: {
                root: {
                  borderColor: `${
                    isDarkMode ? COLORS.dark.divider : COLORS.light.divider
                  } !important`
                }
              }
            },
            Container: {
              styles: {
                root: {
                  maxWidth: '70ch'
                }
              }
            },
            ActionIcon: {
              defaultProps: {
                variant: 'default',
                size: 'lg'
              },
              styles: (theme, params: ActionIconStylesParams) => ({
                root: {
                  ...(params.variant === 'default' && {
                    backgroundColor: 'none !important'
                  })
                }
              })
            },
            Title: {
              styles: (theme, params: TitleStylesParams) => ({
                root: {
                  letterSpacing: '-.03em',
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
              defaultProps: {
                withBorder: true
              },
              styles: {
                root: {
                  background: 'none',
                  borderColor: isDarkMode
                    ? COLORS.dark.divider
                    : COLORS.light.divider
                }
              }
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
            }
          }
        }}
      >
        <TypographyStylesProvider>{children}</TypographyStylesProvider>
        <Global
          styles={theme => {
            const isDarkMode = theme.colorScheme === 'dark'
            return {
              body: {
                ...theme.fn.fontStyles(),
                background: isDarkMode
                  ? COLORS.dark.background
                  : COLORS.light.background
              }
            }
          }}
        />
      </MantineProvider>
    </ThemeModeContext.Provider>
  )
}
