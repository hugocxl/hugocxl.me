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
  Text,
  ActionIcon,
  Group,
  Title,
  Tooltip,
  Box,
  Stack,
  Modal,
  Container,
  Divider
} from '@mantine/core'

// Hooks
import { useDisclosure } from '@mantine/hooks'
import { useThemeMode } from '@/frontend/shared/hooks'
import { useSpotlight } from '@mantine/spotlight'

// Constants
import { PAGES } from '@/frontend/shared/constants'

export function Header() {
  const [mode, toggleMode] = useThemeMode()
  const [isMenuOpen, isMenuOpenCx] = useDisclosure(false)
  const spotlight = useSpotlight()
  const isDarkMode = mode === 'dark'

  function Items() {
    return (
      <>
        {PAGES.map(({ title, href }) => {
          return (
            <Box w={'100%'} p={'xl'}>
              <Tooltip label={title} key={title}>
                <NextLink
                  href={href}
                  onClick={isMenuOpenCx.close}
                  aria-label={`Navigate to ${title} page`}
                >
                  <Text color={'dimmed'}>{title}</Text>
                </NextLink>
              </Tooltip>
              <Divider />
            </Box>
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
        {!isDarkMode ? <IconMoonStars size={18} /> : <IconSun size={20} />}
      </ActionIcon>
    )
  }

  function BurgerButton() {
    return (
      <ActionIcon
        aria-label={'Open nav menu'}
        variant={'subtle'}
        onClick={isMenuOpenCx.toggle}
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
    <Box
      component={'header'}
      sx={theme => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingTop: theme.spacing.xl * 3
      })}
    >
      <NextLink href={'/'}>
        <Stack spacing={0}>
          <Title order={5} span sx={{ margin: '0 !important' }}>
            Hugo Corta
          </Title>
          <Text color={'dimmed'}>Lead Software Engineer</Text>
        </Stack>
      </NextLink>

      <Group spacing={4}>
        <SearchButton />
        <ThemeButton />
        <BurgerButton />
      </Group>

      <Modal fullScreen opened={isMenuOpen} onClose={isMenuOpenCx.close}>
        <Container
          sx={{
            paddingTop: 200,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Items />
        </Container>
      </Modal>
    </Box>
  )
}
