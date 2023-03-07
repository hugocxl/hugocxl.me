// Components
import NextLink from 'next/link'
import { IconSun, IconMoonStars, IconSearch } from '@tabler/icons'
import { Text, ActionIcon, Group, Box, Stack } from '@mantine/core'

// Hooks
import { useThemeMode } from '@/frontend/shared/hooks'
import { useSpotlight } from '@mantine/spotlight'

export function Header() {
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

  return (
    <Box
      pt={'xl'}
      component={'header'}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      }}
    >
      <NextLink href={'/'}>
        <Stack spacing={0}>
          <Text weight={'bold'} color={'primary'}>
            Hugo Corta
          </Text>
          <Text color={'dimmed'}>Software Craftsman</Text>
        </Stack>
      </NextLink>

      <Group spacing={4}>
        <SearchButton />
        <ThemeButton />
      </Group>
    </Box>
  )
}
