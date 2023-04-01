// Components
import NextLink from 'next/link'
import { IconSun, IconMoonStars, IconSearch } from '@tabler/icons'
import { Text, ActionIcon, Group, Stack, Flex, Divider } from '@mantine/core'

// Hooks
import { useThemeMode } from '@/frontend/shared/hooks'
import { useSpotlight } from '@mantine/spotlight'
import { useRouter } from 'next/router'

// Constants
import { PAGES } from '@/frontend/shared/constants'

export function Header() {
  const { pathname } = useRouter()
  const [mode, toggleMode] = useThemeMode()
  const spotlight = useSpotlight()
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

  function Items() {
    return (
      <Group>
        {PAGES.map(({ title, href }) => {
          const isActive = pathname.startsWith(href)

          return (
            <>
              <NextLink
                key={title}
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
              <Divider orientation='vertical' />
            </>
          )
        })}
      </Group>
    )
  }

  return (
    <Flex pt={'xl'} direction={'column'}>
      <Flex justify={'space-between'} align={'flex-end'}>
        <NextLink href={'/'}>
          <Stack spacing={0}>
            <Text weight={'bolder'} color={'primary'}>
              Hugo Corta
            </Text>
            <Text weight={'bold'} color={'dimmed'}>
              Software Craftsman
            </Text>
          </Stack>
        </NextLink>

        <Group spacing={4}>
          <SearchButton />
          <ThemeButton />
        </Group>
      </Flex>

      <Divider my={'xs'} />

      <Items />
    </Flex>
  )
}
