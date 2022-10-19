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
        main: '#36a3ff'
      },
      text: {
        primary: '#4d4d4d',
        secondary: '#8e8e99',
        disabled: '#aeaeb4'
      }
    }
  },
  coreTheme
)