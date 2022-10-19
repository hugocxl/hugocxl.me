// Dependencies
import { deepmerge } from '@mui/utils'

// Theme
import { coreTheme } from './core'

// Types
import { ThemeOptions } from '@mui/material'

export const darkTheme: ThemeOptions = deepmerge(
  {
    palette: {
      mode: 'dark',
      primary: {
        main: '#ffffff'
      },
      secondary: {
        main: '#41d1ff'
      },
      background: {
        default: '#111',
        paper: '#222'
      },
      text: {
        primary: '#a3a3a3',
        secondary: '#ffffff',
        disabled: '#aeaeb4'
      }
    }
  },
  coreTheme
)