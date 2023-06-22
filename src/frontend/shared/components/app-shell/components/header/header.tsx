// Components
import NextLink from 'next/link'
import {
  IconSun,
  IconMoonStars,
  IconSearch,
  IconMenu2,
  IconX
} from '@tabler/icons'
import {
  Text,
  ActionIcon,
  Group,
  Stack,
  Flex,
  Divider,
  Button,
  MediaQuery,
  Drawer
} from '@mantine/core'

// Hooks
import { useThemeMode } from '@/frontend/shared/hooks'
import { useSpotlight } from '@mantine/spotlight'
import { useRouter } from 'next/router'
import { useDisclosure } from '@mantine/hooks'

// Constants
import { PAGES } from '@/frontend/shared/constants'

export function Header() {
  const { pathname } = useRouter()
  const [mode, toggleMode] = useThemeMode()
  const spotlight = useSpotlight()
  const [isMenuOpen, isMenuOpenCx] = useDisclosure(false)
  const isDarkMode = mode === 'dark'
  const pagesButtons = PAGES.map(({ title, href }) => {
    const isActive = pathname.startsWith(href)

    return (
      <NextLink
        key={title}
        onClick={isMenuOpenCx.close}
        href={href}
        aria-label={`Navigate to ${title} page`}
      >
        <Button variant={isActive ? 'default' : 'subtle'}>{title}</Button>
      </NextLink>
    )
  })

  function ThemeButton() {
    return (
      <ActionIcon
        aria-label={'Change theme'}
        variant={'default'}
        onClick={toggleMode}
      >
        {!isDarkMode ? <IconMoonStars size={16} /> : <IconSun size={18} />}
      </ActionIcon>
    )
  }

  function SearchButton() {
    return (
      <Button
        rightIcon={<IconSearch size={16} />}
        aria-label={'Search'}
        variant={'default'}
        onClick={spotlight.openSpotlight}
      >
        {`Search...`}
      </Button>
    )
  }

  function BurgerButton() {
    return (
      <>
        <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
          <ActionIcon
            aria-label={'Open nav menu'}
            variant={'default'}
            onClick={isMenuOpenCx.toggle}
          >
            {!isMenuOpen ? <IconMenu2 size={16} /> : <IconX size={16} />}
          </ActionIcon>
        </MediaQuery>
      </>
    )
  }

  return (
    <Flex
      direction={'column'}
      pos={'sticky'}
      top={0}
      sx={{ zIndex: 2, backdropFilter: 'blur(8px)' }}
    >
      <Flex
        justify={'space-between'}
        align={'center'}
        w={'100%'}
        py={'md'}
        px={'xl'}
      >
        <Group spacing={'xs'}>
          <NextLink href={'/'}>
            <Text size={'md'} fw={500} color={'primary'}>
              Hugo Corta
            </Text>
          </NextLink>
        </Group>

        <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
          <Group spacing={4}>{pagesButtons}</Group>
        </MediaQuery>

        <Group spacing={'xs'}>
          <SearchButton />
          <ThemeButton />
          <BurgerButton />
        </Group>
      </Flex>
      <Divider />

      <Drawer position='top' opened={isMenuOpen} onClose={isMenuOpenCx.close}>
        <Stack align='center'>
          {PAGES.map(({ title, href }) => {
            const isActive = pathname.startsWith(href)

            return (
              <NextLink
                key={title}
                onClick={isMenuOpenCx.close}
                href={href}
                aria-label={`Navigate to ${title} page`}
              >
                <Text
                  className='hoverable'
                  align='right'
                  fw={isActive && 'bolder'}
                  size={'sm'}
                  color={isActive ? 'primary' : 'dimmed'}
                >
                  {title}
                </Text>
              </NextLink>
            )
          })}
        </Stack>
      </Drawer>
    </Flex>
  )
}
