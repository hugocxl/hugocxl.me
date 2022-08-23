// Components
import { IconButton, Link, Stack, Typography } from '@mui/material'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import NextLink from 'next/link'

// Constants
import { PAGES } from '../../../../constants'

// Types
import { FC } from 'react'
import { NavBarProps } from './NavBar.types'

// Hooks
import { useThemeMode } from '../../../../hooks'
import { useRouter } from 'next/router'

export const NavBar: FC<NavBarProps> = ({ orientation }) => {
  const [mode, toggleMode] = useThemeMode()
  const { pathname } = useRouter()
  const isDarkMode = mode === 'dark'

  const commonNavBarProps = {
    component: 'header',
    top: 0,
    zIndex: 1,
    bgcolor: 'background.default',
    alignItems: 'center',
    borderColor: 'divider'
  }

  function SwitchThemeButton() {
    return (
      <IconButton onClick={toggleMode} title='Toggle theme mode'>
        {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
      </IconButton>
    )
  }

  if (orientation === 'horizontal') {
    return (
      <Stack
        position={'sticky'}
        borderBottom={1}
        justifyContent={'space-between'}
        {...commonNavBarProps}
      >
        <NextLink href='/'>
          <Typography fontWeight={'bolder'}>Hugo C.</Typography>
        </NextLink>

        <Stack spacing={1}>
          {PAGES.map(({ label, path }) => (
            <NextLink key={path} href={path}>
              <Link title={label}>{label}</Link>
            </NextLink>
          ))}
        </Stack>
      </Stack>
    )
  }

  return (
    <Stack
      height={'100vh'}
      position={'sticky'}
      borderRight={1}
      width={'100%'}
      justifyContent={'space-between'}
      alignItems={'center'}
      direction={'column'}
      py={6}
      {...commonNavBarProps}
    >
      <NextLink href='/'>
        <Typography fontWeight={'bolder'}>Hugo</Typography>
      </NextLink>

      <Stack spacing={2} direction={'column'} alignItems={'center'}>
        {PAGES.map(({ label, path, icon: Icon }) => {
          const isActive = pathname.startsWith(path)

          return (
            <NextLink href={path} key={path}>
              <IconButton
                title={label}
                {...(isActive && { color: 'secondary' })}
              >
                <Icon />
              </IconButton>
            </NextLink>
          )
        })}
      </Stack>
      <SwitchThemeButton />
    </Stack>
  )
}
