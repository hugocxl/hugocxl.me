// Dependencies
import React, { useMemo, useState } from 'react'
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

export interface ThemeProviderProps {
  children: ReactNode
}

const COLORS = {
  light: {
    background: '#fff',
    primary: '#272727',
    secondary: '#999',
    divider: 'rgba(0,0,0,0.1)'
  },
  dark: {
    background: '#000',
    primary: '#ffffff',
    secondary: 'rgb(100,100,100)',
    divider: 'rgba(255,255,255,0.175)'
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

  const borderColor = `${
    isDarkMode ? COLORS.dark.divider : COLORS.light.divider
  } !important`
  const colorPrimary = isDarkMode ? COLORS.dark.primary : COLORS.light.primary
  const colorSecondary = isDarkMode
    ? COLORS.dark.secondary
    : COLORS.light.secondary
  const background = isDarkMode
    ? COLORS.dark.background
    : COLORS.light.background

  return (
    <ThemeModeContext.Provider value={themeModeContextValue}>
      <MantineProvider
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
        theme={{
          activeStyles: { transform: 'scale(0.95)' },
          primaryColor: isDarkMode ? 'cyan' : 'blue',
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
                  borderColor: `${borderColor}`
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
              }
            },
            Title: {
              styles: (theme, params: TitleStylesParams) => ({
                root: {
                  letterSpacing: '-.03em',
                  width: 'fit-content',
                  color: colorPrimary,
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
            Popover: {
              styles: {
                dropdown: {
                  background,
                  borderColor
                }
              }
            },
            Text: {
              styles: (theme, params: TextStylesParams) => ({
                root: {
                  ...(params.weight === 'bold' && {
                    fontWeight: 500
                  }),
                  ...(params.color === 'primary' && {
                    color: colorPrimary
                  }),
                  ...(params.color === 'secondary' && {
                    color: colorSecondary
                  })
                }
              })
            },
            Timeline: {
              styles: {
                itemTitle: {
                  color: colorSecondary
                }
              }
            },
            Card: {
              defaultProps: {
                withBorder: true
              },
              styles: {
                root: {
                  transition: 'all 0.17s ease',
                  background,
                  borderColor,
                  '&:hover': {
                    borderColor: `${
                      isDarkMode ? COLORS.dark.primary : COLORS.light.primary
                    } !important`
                  }
                }
              }
            },
            Badge: {
              styles: {
                root: {}
              }
            }
          }
        }}
      >
        <TypographyStylesProvider>{children}</TypographyStylesProvider>
        <Global
          styles={theme => {
            return {
              body: {
                ...theme.fn.fontStyles(),
                background,
                color: colorSecondary
              }
            }
          }}
        />
      </MantineProvider>
    </ThemeModeContext.Provider>
  )
}
