// Dependencies
import React, { useMemo, useState } from 'react'
import {
  ButtonStylesParams,
  Global,
  MantineProvider,
  TextStylesParams
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
    button: 'rgba(0,0,0,0.05)',
    primary: '#000',
    secondary: '#555',
    dimmed: '#999',
    divider: 'rgba(0,0,0,0.1)'
  },
  dark: {
    background: '#000',
    button: '#1d1d1d',
    primary: '#ffffff',
    secondary: '#999',
    dimmed: '#666',
    divider: 'rgba(255,255,255,0.1)'
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
  const colorDimmed = isDarkMode ? COLORS.dark.dimmed : COLORS.light.dimmed
  const colorPrimary = isDarkMode ? COLORS.dark.primary : COLORS.light.primary
  const colorSecondary = isDarkMode
    ? COLORS.dark.secondary
    : COLORS.light.secondary
  const background = isDarkMode
    ? COLORS.dark.background
    : COLORS.light.background
  const buttonsBackground = isDarkMode
    ? COLORS.dark.button
    : COLORS.light.button

  return (
    <ThemeModeContext.Provider value={themeModeContextValue}>
      <MantineProvider
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
          activeStyles: { transform: 'scale(0.95)' },
          primaryColor: isDarkMode ? 'blue' : 'blue',
          colorScheme: mode,
          black: colorSecondary,
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
                  maxWidth: '80ch'
                }
              }
            },
            ActionIcon: {
              defaultProps: {
                variant: 'subtle',
                size: 'lg'
              },
              styles: (theme, params: ButtonStylesParams, { variant }) => ({
                root: {
                  ...(variant === 'default' && {
                    border: 'none',
                    transition: 'background 0.17s ease',
                    background: buttonsBackground
                  })
                }
              })
            },
            Button: {
              defaultProps: {
                variant: 'default'
              },
              styles: (theme, params: ButtonStylesParams, { variant }) => ({
                root: {
                  fontWeight: 500,
                  ...(variant === 'subtle' && {
                    color: colorSecondary,
                    '&:hover': {
                      background: buttonsBackground,
                      color: colorPrimary
                    }
                  }),
                  ...(variant === 'default' && {
                    color: colorPrimary,
                    border: 'none',
                    background: buttonsBackground,
                    '&:hover': {
                      background: buttonsBackground
                    }
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
                  ...(params.color === 'dimmed' && {
                    color: colorDimmed
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
                  height: '100%',
                  transition: 'all 0.17s ease',
                  background: 'rgba(200,200,200,0.1)',
                  borderColor,
                  '&:hover': {
                    borderColor: `${
                      isDarkMode ? COLORS.dark.primary : COLORS.light.primary
                    } !important`
                  }
                }
              }
            }
          }
        }}
      >
        <Global
          styles={theme => {
            return {
              a: {
                color: `${
                  isDarkMode ? theme.colors.blue[4] : theme.colors.blue[4]
                } !important`
              },
              body: {
                ...theme.fn.fontStyles(),
                background,
                color: colorSecondary
              }
            }
          }}
        />
        {children}
      </MantineProvider>
    </ThemeModeContext.Provider>
  )
}
