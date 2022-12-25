// Components
import {
  SpotlightAction,
  SpotlightProvider as MnSpotlightProvider
} from '@mantine/spotlight'
import { IconMoon, IconSearch, IconSun } from '@tabler/icons'

// Hooks
import { useThemeMode } from '@/frontend/shared/hooks'
import { useRouter } from 'next/router'

// Types
import { FC, ReactNode } from 'react'

// Constants
import { PAGES } from '@/frontend/shared/constants'

export interface SpotlightProviderProps {
  children: ReactNode
}

export const SpotlightProvider: FC<SpotlightProviderProps> = ({ children }) => {
  const [mode, toggleMode] = useThemeMode()
  const router = useRouter()
  const isDarkMode = mode === 'dark'

  const actions: SpotlightAction[] = [
    ...PAGES.map(({ title, icon: Icon, href }) => ({
      title,
      description: `Go to ${title} page`,
      icon: <Icon />,
      onTrigger: () => router.push(href)
    })),
    {
      title: 'Toggle theme',
      description: 'Toggle theme mode',
      onTrigger: toggleMode,
      icon: !isDarkMode ? <IconMoon size={20} /> : <IconSun size={20} />
    }
  ]

  return (
    <MnSpotlightProvider
      highlightQuery
      actions={actions}
      searchIcon={<IconSearch size={20} />}
      searchPlaceholder='Search...'
      shortcut={['mod + K']}
      nothingFoundMessage={'Nothing found...'}
      filter={(query, actions) =>
        actions.filter(action =>
          action.title.toLowerCase().includes(query.toLowerCase())
        )
      }
    >
      {children}
    </MnSpotlightProvider>
  )
}
