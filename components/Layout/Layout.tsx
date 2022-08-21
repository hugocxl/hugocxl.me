// Types
import { LayoutProps } from './Layout.types'
import { FC } from 'react'

// Constants

// Components
import { Header, Footer } from './components'
import { Container, useMediaQuery, useTheme } from '@mui/material'

export const Layout: FC<LayoutProps> = ({ children }) => {
  const theme = useTheme()
  const isVertical = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <Container
      fixed={false}
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        minHeight: '100vh',
        ...(isVertical && {
          gridTemplateRows: '1fr',
          gridTemplateColumns: '80px 1fr'
        })
      }}
    >
      <Header orientation={isVertical ? 'vertical' : 'horizontal'} />
      <main>{children}</main>
      {/* <Footer /> */}
    </Container>
  )
}
