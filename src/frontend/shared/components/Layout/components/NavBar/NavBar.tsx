// Components
import {
  IconButton,
  Link,
  Dialog,
  Stack,
  Tooltip,
  useMediaQuery,
  useTheme,
  Typography,
  Divider,
  Box
} from '@mui/material'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import NextLink from 'next/link'
import NextImage from 'next/image'
import { VscMenu } from 'react-icons/vsc'

// Constants
import { PAGES } from '@/frontend/shared/constants'

// Types
import { FC, useState } from 'react'
import { NavBarProps } from './NavBar.types'

// Hooks
import { useThemeMode } from '@/frontend/shared/hooks'
import { useRouter } from 'next/router'

export const NavBar: FC<NavBarProps> = () => {
  const { pathname } = useRouter()
  const [mode, toggleMode] = useThemeMode()
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isDarkMode = mode === 'dark'

  function onClickMenu() {
    setOpenMenu((prev) => !prev)
  }

  function PagesLinks() {
    return (
      <Stack spacing={4} alignItems={'center'}>
        {PAGES.map(({ label, path, icon: Icon }) => {
          const isActive = pathname.startsWith(path)

          return (
            <NextLink href={path} key={path}>
              <Link
                // variant={'subtitle1'}
                color={!isActive ? 'inherit' : 'secondary'}
                gutterBottom={false}
              >
                {label}
              </Link>
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

  function Menu() {
    return (
      <>
        <IconButton onClick={onClickMenu} sx={{ bgcolor: 'action.hover' }}>
          <VscMenu />
        </IconButton>

        <Dialog onClose={onClickMenu} open={openMenu} fullScreen>
          <Stack
            height={'100%'}
            spacing={3}
            alignItems={'center'}
            justifyContent={'center'}
            direction={'column'}
            onClick={onClickMenu}
          >
            <Divider sx={{ width: '100%' }} />
            {PAGES.map(({ label, path, icon: Icon }) => {
              const isActive = pathname.startsWith(path)

              return (
                <>
                  <NextLink href={path} key={path}>
                    <Link
                      sx={{ display: 'flex', alignItems: 'center' }}
                      color={!isActive ? 'primary' : 'secondary'}
                    >
                      <Icon />
                      <Typography ml={2} gutterBottom={false}>
                        {label}
                      </Typography>
                    </Link>
                  </NextLink>
                  <Divider sx={{ width: '100%' }} />
                </>
              )
            })}
          </Stack>
        </Dialog>
      </>
    )
  }

  return (
    <Stack
      px={0}
      py={4}
      {...(isSmallScreen && { px: 1, py: 3 })}
      component={'header'}
      alignItems={'center'}
      display={'flex'}
      justifyContent={'space-between'}
    >
      <NextLink href='/'>
        <Link
          sx={{
            display: 'flex',
            alignItems: 'center',
            m: 0,
            color: 'primary.main'
          }}
        >
          <Box
            mr={1}
            display={'block'}
            width={'48px'}
            height={'48px'}
            position={'relative'}
          >
            <NextImage
              fill={true}
              placeholder={'blur'}
              alt={'Hugo Corta'}
              title={'Hugo Corta'}
              src={'/img/avatar.png'}
              blurDataURL={'/img/avatar.png'}
            />
          </Box>
          Hugo Corta
        </Link>
      </NextLink>
      {!isSmallScreen && <PagesLinks />}
      <Stack spacing={2}>
        <ThemeButton />
        {isSmallScreen && <Menu />}
      </Stack>
    </Stack>
  )
}
