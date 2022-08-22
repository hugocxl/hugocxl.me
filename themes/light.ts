// Dependencies
import { deepmerge } from '@mui/utils'

// Theme
import { coreTheme } from './core'

// Types
import { ThemeOptions } from '@mui/material'

export const lightTheme: ThemeOptions = deepmerge(
  {
    palette: {
      mode: 'light',
      primary: {
        main: '#000000'
      },
      secondary: {
        main: '#ea4c89'
      },
      text: {
        primary: '#535358',
        secondary: '#8e8e99',
        disabled: '#aeaeb4'
      }
    }
  },
  coreTheme
)
