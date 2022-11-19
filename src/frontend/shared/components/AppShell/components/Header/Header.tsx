// Components
import NextLink from 'next/link'
import { SearchControl } from '@mantine/ds'
import {
  IconSun,
  IconMoon,
  IconX,
  IconMenu2,
  IconChevronDown,
  IconMoonStars
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
  Divider,
  Group,
  Menu,
  Switch,
  Flex,
  Box,
  Title
} from '@mantine/core'

// Hooks
import { useDisclosure } from '@mantine/hooks'
import { useRouter } from 'next/router'
import { useThemeMode } from '@/frontend/shared/hooks'
import { useSpotlight } from '@mantine/spotlight'

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

  function ThemeButton() {
    return (
      <Switch
        aria-label={isDarkMode ? 'Dark mode' : 'Light mode'}
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
        checked={isDarkMode}
        onChange={toggleMode}
        size='lg'
        onLabel={<IconSun color={theme.white} size={20} />}
        offLabel={
          <IconMoonStars color={theme.colors.gray[6]} size={20} stroke={1.5} />
        }
      />
    )
  }

  function BurgerButton() {
    return (
      <ActionIcon onClick={isMenuOpenCx.toggle}>
        {!isMenuOpen ? <IconMenu2 size={20} /> : <IconX size={20} />}
      </ActionIcon>
    )
  }

  return (
    <MantineHeader
      withBorder={false}
      height={HEADER_HEIGHT}
      sx={(theme) => ({
        background: 'transparent',
        top: 20,
        [theme.fn.smallerThan('lg')]: {
          padding: '0 12px'
        }
      })}
    >
      <Container
        sx={(theme) => ({
          border: '1px solid rgba(100, 100, 100, 0.1)',
          boxShadow: 'rgb(0 0 0 / 10%) 0px 2px 4px',
          borderRadius: 12,
          padding: '8px 20px',
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.05)'
        })}
      >
        <SimpleGrid
          cols={2}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <Group spacing={'xl'}>
            <NextLink href={'/'}>
              <Title order={4} span sx={{ margin: '0 !important' }}>
                @hcorta
              </Title>
            </NextLink>
            <Divider size='sm' orientation='vertical' />

            <Group spacing={'xl'} sx={responsiveStyles.desktop}>
              {items}
            </Group>
          </Group>

          <Group
            align={'center'}
            sx={{ justifyContent: 'flex-end', ...responsiveStyles.desktop }}
            spacing={'xs'}
          >
            <SearchControl onClick={spotlight.openSpotlight} />
            <ThemeButton />
          </Group>

          <Group
            spacing={'xs'}
            sx={{ justifyContent: 'flex-end', ...responsiveStyles.mobile }}
          >
            <ThemeButton />
            <BurgerButton />
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
