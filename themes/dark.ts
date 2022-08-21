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
        default: '#000000'
      }
    }
  },
  coreTheme
)
