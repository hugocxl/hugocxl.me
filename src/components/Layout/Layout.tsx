// Types
import { LayoutProps } from './Layout.types'
import { FC } from 'react'

// Components
import { NavBar } from './components'
import { Box, Container, useMediaQuery, useTheme } from '@mui/material'

export const Layout: FC<LayoutProps> = ({ children }) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container
      fixed={false}
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        height: '100vh',
        ...(!isSmallScreen && {
          gridTemplateRows: '1fr',
          gridTemplateColumns: '80px 1fr 80px'
        })
      }}
    >
      <NavBar orientation={!isSmallScreen ? 'vertical' : 'horizontal'} />
      <Box component={'main'} sx={{ overflow: 'auto', height: '100%' }}>
        {children}
      </Box>
    </Container>
  )
}
