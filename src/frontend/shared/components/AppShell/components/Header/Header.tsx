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
  Title
} from '@mantine/core'

// Hooks
import { useDisclosure } from '@mantine/hooks'
import { useRouter } from 'next/router'
import { useThemeMode } from '@/frontend/shared/hooks'
import { useSpotlight } from '@mantine/spotlight'
import { useEffect, useState } from 'react'

const HEADER_HEIGHT = 60

interface Link {
  label: string
  href?: string
  links?: Link[]
}

const links: Link[] = [
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'Projects',
    href: '/projects'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'More',
    links: [
      {
        href: '/more/stack',
        label: 'Stack'
      }
    ]
  }
]

export function Header() {
  const { pathname } = useRouter()
  const [mode, toggleMode] = useThemeMode()
  const [windowScroll, setWindowScroll] = useState(0)
  const [showHeader, setShowHeader] = useState(true)
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

  const items = links.map(({ label, href, links }) => {
    const isActive = pathname.startsWith(href)

    const linkProps = {
      color: isActive ? 'inherit' : 'dimmed',
      weight: 500,
      onClick: isMenuOpenCx.close,
      sx: {
        '&:hover': {
          ...(!isActive && { opacity: 0.7 })
        }
      }
    }

    if (links) {
      const menuItems = links.map((subLink) => (
        <Menu.Item key={subLink.href}>
          <NextLink href={subLink.href} key={label}>
            <Text size={'sm'} {...linkProps}>
              {subLink.label}
            </Text>
          </NextLink>
        </Menu.Item>
      ))

      return (
        <Menu key={label} trigger='hover' exitTransitionDuration={0}>
          <Menu.Target>
            <Text size={'sm'} {...linkProps}>
              <Group spacing={6}>
                <span>{label}</span>
                <IconChevronDown size={16} />
              </Group>
            </Text>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <NextLink href={href} key={label}>
        <Text size={'sm'} {...linkProps}>
          {label}
        </Text>
      </NextLink>
    )
  })

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll)

    return () => {
      window.removeEventListener('scroll', onWindowScroll)
    }
  }, [windowScroll])

  function onWindowScroll() {
    const currentScroll = window.pageYOffset
    const isScrollingUp = currentScroll < windowScroll

    setWindowScroll(window.scrollY)
    setShowHeader(isScrollingUp)
  }

  function ThemeButton() {
    return (
      <ActionIcon variant='filled' color={'yellow'} onClick={toggleMode}>
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
      withBorder={false}
      height={HEADER_HEIGHT}
      sx={(theme) => ({
        transition: 'transform 0.3s ease',
        transform: `translateY(${showHeader ? 0 : -100}%)`,
        backdropFilter: 'blur(10px)',
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
              @hcorta
            </Title>
          </NextLink>

          <Group spacing={'xl'} sx={responsiveStyles.desktop}>
            {items}
          </Group>

          <Group
            align={'center'}
            sx={{ justifyContent: 'flex-end' }}
            spacing={'xs'}
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
