// Components
import NextLink from 'next/link'
import {
  IconSun,
  IconX,
  IconMenu2,
  IconChevronDown,
  IconMoonStars,
  IconSearch
} from '@tabler/icons'
import {
  Header as MantineHeader,
  Container,
  Paper,
  Transition,
  useMantineTheme,
  Text,
  ActionIcon,
  SimpleGrid,
  Group,
  Menu,
  Title,
  Box,
  Button,
  Tooltip
} from '@mantine/core'

// Hooks
import { useDisclosure } from '@mantine/hooks'
import { useRouter } from 'next/router'
import { useThemeMode } from '@/frontend/shared/hooks'
import { useSpotlight } from '@mantine/spotlight'
import { useEffect, useState } from 'react'
import { PAGES } from '@/frontend/shared/constants'

const HEADER_HEIGHT = 60

export function Header() {
  const { pathname } = useRouter()
  const [mode, toggleMode] = useThemeMode()
  const [windowScroll, setWindowScroll] = useState(0)
  const [isMenuOpen, isMenuOpenCx] = useDisclosure(false)
  const spotlight = useSpotlight()
  const theme = useMantineTheme()
  const isDarkMode = mode === 'dark'
  const responsiveStyles = {
    desktop: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none'
      }
    },
    mobile: {
      [theme.fn.largerThan('sm')]: {
        display: 'none'
      }
    }
  }

  const items = PAGES.map(({ label, href, icon: Icon }) => {
    const isActive = pathname.startsWith(href)

    const linkProps = {
      // color: isActive ? 'inherit' : 'dimmed',
      onClick: isMenuOpenCx.close,
      sx: {
        '&:hover': {
          ...(!isActive && { opacity: 0.7 })
        }
      }
    }

    return (
      <NextLink href={href} key={label}>
        <Tooltip label={label}>
          <ActionIcon variant='subtle'>
            <Icon size={16} />
          </ActionIcon>
        </Tooltip>
      </NextLink>
    )
  })

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      setWindowScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function ThemeButton() {
    return (
      <ActionIcon variant='subtle' onClick={toggleMode}>
        {!isDarkMode ? <IconMoonStars size={18} /> : <IconSun size={18} />}
      </ActionIcon>
    )
  }

  function BurgerButton() {
    return (
      <ActionIcon
        variant='subtle'
        onClick={isMenuOpenCx.toggle}
        sx={responsiveStyles.mobile}
      >
        {!isMenuOpen ? <IconMenu2 size={18} /> : <IconX size={18} />}
      </ActionIcon>
    )
  }

  function SearchButton() {
    return (
      <ActionIcon variant='subtle' onClick={spotlight.openSpotlight}>
        {<IconSearch size={16} />}
      </ActionIcon>
    )
  }

  return (
    <MantineHeader
      withBorder={windowScroll > 0}
      height={HEADER_HEIGHT}
      sx={(theme) => ({
        backdropFilter: 'blur(10px)',
        top: 0,
        background: 'transparent'
      })}
    >
      <Container
        sx={(theme) => ({
          height: '100%'
        })}
      >
        <SimpleGrid
          cols={3}
          spacing={0}
          breakpoints={[{ maxWidth: 'sm', cols: 2, spacing: 0 }]}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
            gridTemplateColumns: 'auto auto auto'
          }}
        >
          <NextLink href={'/'}>
            <Title order={4} span sx={{ margin: '0 !important' }}>
              hugo
            </Title>
          </NextLink>

          <Group spacing={'md'} sx={responsiveStyles.desktop}>
            {items}
          </Group>

          <Group
            align={'center'}
            sx={{ justifyContent: 'flex-end' }}
            spacing={'md'}
          >
            <BurgerButton />
            <SearchButton />
            <ThemeButton />
          </Group>

          <Transition
            transition='pop-top-right'
            duration={200}
            mounted={isMenuOpen}
          >
            {(styles) => (
              <Paper
                withBorder
                style={styles}
                sx={{
                  position: 'absolute',
                  display: 'flex',
                  flexDirection: 'column',
                  top: HEADER_HEIGHT,
                  left: 0,
                  right: 0,
                  zIndex: 0,
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                  borderTopWidth: 0,
                  overflow: 'hidden',

                  [theme.fn.largerThan('sm')]: {
                    display: 'none'
                  }
                }}
              >
                {items}
              </Paper>
            )}
          </Transition>
        </SimpleGrid>
      </Container>
    </MantineHeader>
  )
}
