// Types
import { LayoutProps } from './Layout.types'
import { FC } from 'react'

// Constants

// Components
import { Header, Footer } from './components'
import { Box, Container, useMediaQuery, useTheme } from '@mui/material'

export const Layout: FC<LayoutProps> = ({ children }) => {
  const theme = useTheme()
  const isVertical = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <Container
      fixed={false}
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        height: '100vh',
        ...(isVertical && {
          gridTemplateRows: '1fr',
          gridTemplateColumns: '80px 1fr'
        })
      }}
    >
      <Header orientation={isVertical ? 'vertical' : 'horizontal'} />
      <Box component={'main'} sx={{ overflow: 'auto', height: '100%' }}>
        {children}
      </Box>
      {/* <Footer /> */}
    </Container>
  )
}
