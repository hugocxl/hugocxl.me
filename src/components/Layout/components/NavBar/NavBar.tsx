// Components
import { Box, IconButton, Stack, Tooltip } from '@mui/material'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import NextLink from 'next/link'
import NextImage from 'next/image'

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

export const NavBar: FC<NavBarProps> = () => {
  const { pathname } = useRouter()
  const [mode, toggleMode] = useThemeMode()
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
        <Box
          height={'40px'}
          width={'40px'}
          position={'relative'}
          sx={{ cursor: 'pointer' }}
        >
          <NextImage
            layout='fill'
            src={!isDarkMode ? '/icon-dark.svg' : '/icon.svg'}
            blurDataURL={!isDarkMode ? '/icon-dark.svg' : '/icon.svg'}
            placeholder={'blur'}
            alt={'Hugo Corta'}
          />
        </Box>
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
                <IconButton {...(isActive && { color: 'secondary' })}>
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
        <IconButton onClick={toggleMode}>
          {!isDarkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
        </IconButton>
      </Tooltip>
    )
  }

  function MobileNavBar() {
    return (
      <Stack
        py={2}
        px={2}
        display={'none'}
        className={styles.mobileNavBar}
        position={'sticky'}
        borderBottom={1}
        justifyContent={'space-between'}
        {...commonNavBarProps}
      >
        <PersonalIcon />

        <Stack spacing={1}>
          <PagesIcons />
          <SwitchThemeButton />
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
        py={3}
        justifyContent={'space-between'}
        alignItems={'center'}
        direction={'column'}
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
