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
        paper: '#1e1e1e'
      },
      divider: '#8a8a8a1c',
      text: {
        primary: '#b8b8b8',
        secondary: '#ffffff',
        disabled: '#aeaeb4'
      }
    }
  },
  coreTheme
)
