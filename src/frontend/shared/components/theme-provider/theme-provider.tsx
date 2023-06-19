// Dependencies
import React, { useMemo, useState } from 'react'
// import { TypographyStylesProvider } from '@mantine/core'
import {
  ButtonStylesParams,
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
    primary: '#000',
    secondary: '#555',
    divider: 'rgba(0,0,0,0.1)'
  },
  dark: {
    background: '#000',
    primary: '#ffffff',
    secondary: '#999',
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
  const colorPrimary = isDarkMode ? COLORS.dark.primary : COLORS.light.primary
  const colorSecondary = isDarkMode
    ? COLORS.dark.secondary
    : COLORS.light.secondary
  const background = isDarkMode
    ? COLORS.dark.background
    : COLORS.light.background
  const buttonsBackground = isDarkMode
    ? COLORS.dark.divider
    : COLORS.light.divider

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
            List: {
              styles: {
                item: {
                  marginBottom: '0.5rem',
                  lineHeight: '1.75rem'
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
              // Subscribe to theme and component params
              styles: (theme, params: ButtonStylesParams, { variant }) => ({
                root: {
                  ...(variant === 'default' && {
                    color: colorPrimary,
                    border: 'none',
                    transition: 'background 0.17s ease',
                    background: buttonsBackground
                  })
                }
              })
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
            },
            Badge: {
              styles: {
                root: {}
              }
            }
          }
        }}
      >
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
        {children}
      </MantineProvider>
    </ThemeModeContext.Provider>
  )
}
