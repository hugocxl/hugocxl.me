// Components
import NextLink from 'next/link'
import {
  IconSun,
  IconX,
  IconMenu2,
  IconMoonStars,
  IconSearch
} from '@tabler/icons'
import {
  Header as MantineHeader,
  Text,
  Container,
  Paper,
  Transition,
  useMantineTheme,
  ActionIcon,
  SimpleGrid,
  Group,
  Title,
  Tooltip,
  Box
} from '@mantine/core'

// Hooks
import { useDisclosure } from '@mantine/hooks'
import { useRouter } from 'next/router'
import { useThemeMode } from '@/frontend/shared/hooks'
import { useSpotlight } from '@mantine/spotlight'

// Constants
import { PAGES } from '@/frontend/shared/constants'

const HEADER_HEIGHT = 72

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

  function Items() {
    return (
      <>
        {PAGES.map(({ title, href, icon: Icon }) => {
          const isActive = pathname.startsWith(href)

          return (
            <Tooltip label={title} key={title}>
              <NextLink
                href={href}
                onClick={isMenuOpenCx.close}
                aria-label={`Navigate to ${title} page`}
              >
                <Group>
                  <ActionIcon
                    aria-label={title}
                    variant={isActive ? 'gradient' : 'subtle'}
                  >
                    <Icon size={18} />
                  </ActionIcon>
                  <Text sx={responsiveStyles.mobile}>{title}</Text>
                </Group>
              </NextLink>
            </Tooltip>
          )
        })}
      </>
    )
  }

  function ThemeButton() {
    return (
      <ActionIcon
        aria-label={'Change theme'}
        variant={'subtle'}
        onClick={toggleMode}
      >
        {!isDarkMode ? <IconMoonStars size={18} /> : <IconSun size={18} />}
      </ActionIcon>
    )
  }

  function BurgerButton() {
    return (
      <ActionIcon
        aria-label={'Open nav menu'}
        variant={'subtle'}
        onClick={isMenuOpenCx.toggle}
        sx={responsiveStyles.mobile}
      >
        {!isMenuOpen ? <IconMenu2 size={18} /> : <IconX size={18} />}
      </ActionIcon>
    )
  }

  function SearchButton() {
    return (
      <ActionIcon
        aria-label={'Search'}
        variant={'subtle'}
        onClick={spotlight.openSpotlight}
      >
        {<IconSearch size={18} />}
      </ActionIcon>
    )
  }

  return (
    <Box component='header' h={HEADER_HEIGHT}>
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
            gridTemplateColumns: 'auto auto auto',
            borderBottom: '3px solid rgb(160,160,160,0.25)'
          }}
        >
          <NextLink href={'/'}>
            <Title order={4} span sx={{ margin: '0 !important' }}>
              hugo
            </Title>
          </NextLink>

          <Group spacing={'md'} sx={responsiveStyles.desktop}>
            <Items />
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

          <Transition transition='scale-y' duration={200} mounted={isMenuOpen}>
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
                  borderRadius: 0,
                  overflow: 'hidden'
                }}
              >
                <Items />
              </Paper>
            )}
          </Transition>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
