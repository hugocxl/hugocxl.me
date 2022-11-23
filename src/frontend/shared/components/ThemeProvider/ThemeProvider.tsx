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
          fontFamily: 'iA Writer Duo, monospace',
          fontFamilyMonospace: 'monospace',
          headings: { fontFamily: 'iA Writer Duo, sans-serif' },
          fontSizes: {
            xs: 10,
            sm: 13,
            md: 16,
            lg: 18,
            xl: 20
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
          defaultGradient: isDarkMode
            ? {
                from: '#c3ac8a',
                to: '#c3ac8a',
                deg: 135
              }
            : {
                to: '#9A7B4F',
                from: '#9A7B4F',
                deg: 135
              },
          components: {
            Container: {
              styles: {
                root: {
                  maxWidth: '800px'
                }
              }
            },
            Title: {
              styles: {
                root: {
                  letterSpacing: -1,
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
          styles={[
            {
              '@font-face': {
                fontFamily: 'iA Writer Duo',
                fontWeight: 'normal',
                fontStyle: 'normal',
                src: `url("fonts/iAWriterDuo/iAWriterDuoS-Regular.eot") format("embedded-opentype"),
                      url("fonts/iAWriterDuo/iAWriterDuoS-Regular.woff2") format("woff2"),
                      url("fonts/iAWriterDuo/iAWriterDuoS-Regular.woff") format("woff")`
              }
            },
            {
              '@font-face': {
                fontFamily: 'iA Writer Duo',
                fontWeight: 'normal',
                fontStyle: 'italic',
                src: `url("fonts/iAWriterDuo/iAWriterDuoS-Italic.eot") format("embedded-opentype"),
                      url("fonts/iAWriterDuo/iAWriterDuoS-Italic.woff2") format("woff2"),
                      url("fonts/iAWriterDuo/iAWriterDuoS-Italic.woff") format("woff")`
              }
            },
            {
              '@font-face': {
                fontFamily: 'iA Writer Duo',
                fontWeight: 'bold',
                fontStyle: 'normal',
                src: `url("fonts/iAWriterDuo/iAWriterDuoS-Bold.eot") format("embedded-opentype"),
                      url("fonts/iAWriterDuo/iAWriterDuoS-Bold.woff2") format("woff2"),
                      url("fonts/iAWriterDuo/iAWriterDuoS-Bold.woff") format("woff")`
              }
            },
            {
              '@font-face': {
                fontFamily: 'iA Writer Duo',
                fontWeight: 'bold',
                fontStyle: 'italic',
                src: `url("fonts/iAWriterDuo/iAWriterDuoS-BoldItalic.eot") format("embedded-opentype"),
                      url("fonts/iAWriterDuo/iAWriterDuoS-BoldItalic.woff2") format("woff2"),
                      url("fonts/iAWriterDuo/iAWriterDuoS-BoldItalic.woff") format("woff")`
              }
            }
          ]}
        />
      </MantineProvider>
    </ThemeModeContext.Provider>
  )
}
