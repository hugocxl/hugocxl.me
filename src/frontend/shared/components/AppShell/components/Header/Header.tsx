// Components
import NextLink from 'next/link'
import {
  IconSun,
  IconMoonStars,
  IconSearch,
  IconMenu2,
  IconX
} from '@tabler/icons'
import { Text, ActionIcon, Group, Stack, Flex, Popover } from '@mantine/core'

// Hooks
import { useThemeMode } from '@/frontend/shared/hooks'
import { useSpotlight } from '@mantine/spotlight'
import { useRouter } from 'next/router'

// Constants
import { PAGES } from '@/frontend/shared/constants'
import { useDisclosure } from '@mantine/hooks'

export function Header() {
  const { pathname } = useRouter()
  const [mode, toggleMode] = useThemeMode()
  const spotlight = useSpotlight()
  const [isMenuOpen, isMenuOpenCx] = useDisclosure(false)
  const isDarkMode = mode === 'dark'

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
            {!isMenuOpen ? <IconMenu2 size={18} /> : <IconX size={18} />}
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <Stack>
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
                    fw={isActive ? 'bolder' : 500}
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
      sx={theme => ({
        paddingTop: theme.spacing.xl * 3,
        [theme.fn.smallerThan('lg')]: {
          paddingTop: theme.spacing.xl
        }
      })}
    >
      <Flex justify={'space-between'} align={'flex-end'}>
        <NextLink href={'/'}>
          <Stack spacing={0}>
            <Text weight={'bolder'} color={'primary'}>
              Hugo Corta
            </Text>
            <Text weight={'bold'} color={'dimmed'}>
              Software Craftsman
            </Text>
            <Text weight={'bold'} color={'dimmed'}>
              Madrid, ES
            </Text>
          </Stack>
        </NextLink>

        <Group spacing={4}>
          <SearchButton />
          <ThemeButton />
          <BurgerButton />
        </Group>
      </Flex>
    </Flex>
  )
}
