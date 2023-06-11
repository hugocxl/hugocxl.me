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
  Popover,
  Divider,
  Container
} from '@mantine/core'

// Hooks
import { useThemeMode } from '@/frontend/shared/hooks'
import { useSpotlight } from '@mantine/spotlight'
import { useRouter } from 'next/router'
import { useDisclosure } from '@mantine/hooks'
import { useState, useEffect } from 'react'

// Constants
import { PAGES } from '@/frontend/shared/constants'

export function Header() {
  const { pathname } = useRouter()
  const [mode, toggleMode] = useThemeMode()
  const spotlight = useSpotlight()
  const [isMenuOpen, isMenuOpenCx] = useDisclosure(false)
  const isDarkMode = mode === 'dark'
  const [windowScroll, setWindowScroll] = useState(0)

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
      <ActionIcon
        aria-label={'Change theme'}
        variant={'subtle'}
        onClick={toggleMode}
      >
        {!isDarkMode ? <IconMoonStars size={16} /> : <IconSun size={18} />}
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
        {<IconSearch size={16} />}
      </ActionIcon>
    )
  }

  function BurgerButton() {
    return (
      <Popover
        opened={isMenuOpen}
        onClose={isMenuOpenCx.close}
        position={'bottom-end'}
      >
        <Popover.Target>
          <ActionIcon
            aria-label={'Open nav menu'}
            variant={'subtle'}
            onClick={isMenuOpenCx.toggle}
          >
            {!isMenuOpen ? <IconMenu2 size={16} /> : <IconX size={16} />}
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <Stack w={120}>
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
        </Popover.Dropdown>
      </Popover>
    )
  }

  return (
    <Flex
      direction={'column'}
      pos={'sticky'}
      top={0}
      sx={{ zIndex: 2, backdropFilter: 'blur(8px)' }}
    >
      <Container w={'100%'} py={'xs'}>
        <Flex justify={'space-between'} align={'center'}>
          <NextLink href={'/'}>
            <Group spacing={'xs'}>
              <Text color={'primary'} fw={'bold'}>
                Hugo Corta
              </Text>
              <Divider orientation='vertical' sx={{ borderWidth: 4 }} />
              <Text color={'secondary'}>Software Craftsman</Text>
            </Group>
          </NextLink>

          <Group spacing={0}>
            <SearchButton />
            <ThemeButton />
            <BurgerButton />
          </Group>
        </Flex>
      </Container>
      {windowScroll > 0 && <Divider />}
    </Flex>
  )
}
