// Dependencies
import { deepmerge } from '@mui/utils'

// Theme
import { coreTheme } from './core'

// Types
import { ThemeOptions } from '@mui/material'

export const lightTheme: ThemeOptions = deepmerge(
  {
    palette: {
      mode: 'light'
    }
  },
  coreTheme
)
