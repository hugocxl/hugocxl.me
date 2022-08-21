// Dependencies
import { useContext } from 'react'

// Contexts
import { ThemeModeContext } from '../../contexts'

export const useThemeMode = () => {
  const contextValue = useContext(ThemeModeContext)
  return contextValue
}
