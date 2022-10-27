// Components
import { NavBar } from './components'
import { Box, Container } from '@mui/material'

// Types
import { FC } from 'react'

// Styles
import styles from './Layout.module.css'

export interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box className={styles.container}>
      <NavBar />
      {children}
    </Box>
  )
}
