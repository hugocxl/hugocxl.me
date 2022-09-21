// Components
import { NavBar } from './components'
import { Container } from '@mui/material'

// Types
import { LayoutProps } from './Layout.types'
import { FC } from 'react'

// Styles
import styles from './Layout.module.css'

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Container className={styles.container}>
      <NavBar />
      {children}
    </Container>
  )
}
