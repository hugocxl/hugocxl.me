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
      background: {
        default: '#000000',
        paper: '#020202'
      },
      primary: {
        main: '#ffffff'
      },
      secondary: {
        main: '#32daff'
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
