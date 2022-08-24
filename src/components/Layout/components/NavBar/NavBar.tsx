// Components
import { IconButton, Link, Stack, Tooltip, Typography } from '@mui/material'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import NextLink from 'next/link'
import Image from 'next/image'

// Constants
import { PAGES } from 'src/constants'

// Types
import { FC } from 'react'
import { NavBarProps } from './NavBar.types'

// Hooks
import { useThemeMode } from 'src/hooks'
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
      <Tooltip title={'Toggle theme'} placement={'left'}>
        <IconButton onClick={toggleMode} title='Toggle theme mode'>
          {!isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
        </IconButton>
      </Tooltip>
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
        <Image
          height={'40x'}
          width={'40x'}
          src={!isDarkMode ? '/icon-dark.svg' : '/icon.svg'}
        />
      </NextLink>

      <Stack spacing={2} direction={'column'} alignItems={'center'}>
        {PAGES.map(({ label, path, icon: Icon }) => {
          const isActive = pathname.startsWith(path)

          return (
            <NextLink href={path} key={path}>
              <Tooltip title={label} placement={'left'}>
                <IconButton
                  title={label}
                  {...(isActive && { color: 'secondary' })}
                >
                  <Icon />
                </IconButton>
              </Tooltip>
            </NextLink>
          )
        })}
      </Stack>
      <SwitchThemeButton />
    </Stack>
  )
}
