// Dependencies
import React, { useMemo, useState } from 'react'
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider
} from '@mui/material'

// Contexts
import { ThemeModeContext } from '../../contexts'

// Themes
import { darkTheme as dark, lightTheme as light } from '../../themes'

// Types
import { FC } from 'react'
import { ThemeProviderProps } from './ThemeProvider.types'

// Constants
const THEMES = {
  light,
  dark
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  mode: initialMode = 'dark'
}) => {
  const [mode, setMode] = useState(initialMode)

  const theme = useMemo(() => {
    const themeMode = THEMES[mode]
    const muiTheme = createTheme(themeMode)
    return responsiveFontSizes(muiTheme)
  }, [mode])

  const ThemeModeContextValue = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    [mode]
  )

  return (
    <ThemeModeContext.Provider value={ThemeModeContextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  )
}
