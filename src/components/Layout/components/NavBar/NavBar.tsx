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

// Styles
import styles from './Navbar.module.css'

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

  function PersonalIcon() {
    return (
      <NextLink href='/'>
        <Image
          height={'40x'}
          width={'40x'}
          src={!isDarkMode ? '/icon-dark.svg' : '/icon.svg'}
        />
      </NextLink>
    )
  }

  function PagesIcons() {
    return (
      <>
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
      </>
    )
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

  function MobileNavBar() {
    return (
      <Stack
        py={2}
        px={2}
        className={styles.mobileNavBar}
        position={'sticky'}
        borderBottom={1}
        justifyContent={'space-between'}
        {...commonNavBarProps}
      >
        <PersonalIcon />

        <Stack spacing={1}>
          <PagesIcons />
        </Stack>
      </Stack>
    )
  }

  function DesktopNavbar() {
    return (
      <Stack
        className={styles.desktopNavBar}
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
        <PersonalIcon />
        <Stack spacing={2} direction={'column'} alignItems={'center'}>
          <PagesIcons />
        </Stack>
        <SwitchThemeButton />
      </Stack>
    )
  }

  return (
    <>
      <MobileNavBar />
      <DesktopNavbar />
    </>
  )
}
