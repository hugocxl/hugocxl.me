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
        main: '#3291ff'
      },
      text: {
        primary: '#535358',
        secondary: '#8e8e99',
        header: '#000000',
        disabled: '#aeaeb4'
      }
    }
  },
  coreTheme
)