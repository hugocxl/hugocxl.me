// Components
import {
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import NextLink from 'next/link'

// Constants
import { PAGES } from 'src/constants'

// Types
import { FC } from 'react'
import { NavBarProps } from './NavBar.types'

// Hooks
import { useThemeMode } from 'src/hooks'
import { useRouter } from 'next/router'

export const NavBar: FC<NavBarProps> = () => {
  const { pathname } = useRouter()
  const [mode, toggleMode] = useThemeMode()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isDarkMode = mode === 'dark'

  function PagesLinks() {
    return (
      <Stack spacing={3} alignItems={'center'}>
        {PAGES.map(({ label, path, icon: Icon }) => {
          const isActive = pathname.startsWith(path)

          return (
            <NextLink href={path} key={path}>
              <Tooltip title={label} placement={'bottom'}>
                {isSmallScreen ? (
                  <IconButton {...(isActive && { color: 'secondary' })}>
                    <Icon />
                  </IconButton>
                ) : (
                  <Link
                    variant={'subtitle1'}
                    color={'inherit'}
                    gutterBottom={false}
                  >
                    {label}
                  </Link>
                )}
              </Tooltip>
            </NextLink>
          )
        })}
      </Stack>
    )
  }

  function ThemeButton() {
    return (
      <Tooltip title={'Toggle theme'} placement={'bottom'}>
        <IconButton onClick={toggleMode} sx={{ bgcolor: 'action.hover' }}>
          {!isDarkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
        </IconButton>
      </Tooltip>
    )
  }

  return (
    <Stack
      p={4}
      component={'header'}
      alignItems={'center'}
      display={'flex'}
      justifyContent={'space-between'}
    >
      <NextLink href='/'>
        <Link variant={'h6'} color={'primary'} gutterBottom={false}>
          Hugo Corta
        </Link>
      </NextLink>
      <Stack spacing={2}>
        <PagesLinks />
        <ThemeButton />
      </Stack>
    </Stack>
  )
}
