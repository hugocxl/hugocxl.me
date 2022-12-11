// Components
import { Header, Footer } from './components'
import { AppShell as MnAppShell } from '@mantine/core'
import { RouterTransition } from '../RouterTransition'
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight'
import {
  IconHome,
  IconLayoutGrid,
  IconMoon,
  IconNotes,
  IconSearch,
  IconStack2,
  IconSun,
  IconUser
} from '@tabler/icons'

// Hooks
import { useThemeMode } from '@/frontend/shared/hooks'
import { useRouter } from 'next/router'

// Types
import { FC } from 'react'

export interface AppShellProps {
  children: React.ReactNode
}

export const AppShell: FC<AppShellProps> = ({ children }) => {
  const [mode, toggleMode] = useThemeMode()
  const router = useRouter()
  const isDarkMode = mode === 'dark'

  const actions: SpotlightAction[] = [
    {
      title: 'Blog',
      description: 'Go to blog page',
      icon: <IconNotes />,
      onTrigger: () => router.push('/blog')
    },
    {
      title: 'Projects',
      description: 'Go to projects page',
      icon: <IconLayoutGrid />,
      onTrigger: () => router.push('/projects')
    },
    {
      title: 'About',
      description: 'Go to about page',
      icon: <IconUser />,
      onTrigger: () => router.push('/about')
    },
    {
      title: 'Stack',
      description: 'Go to stack page',
      icon: <IconStack2 />,
      onTrigger: () => router.push('/more/stack')
    },
    {
      title: 'Toggle theme',
      description: 'Toggle theme mode',
      onTrigger: toggleMode,
      icon: !isDarkMode ? <IconMoon size={20} /> : <IconSun size={20} />
    }
  ]

  return (
    <SpotlightProvider
      highlightQuery
      actions={actions}
      searchIcon={<IconSearch size={20} />}
      searchPlaceholder='Search...'
      shortcut={['mod + K']}
      nothingFoundMessage={'Nothing found...'}
      filter={(query, actions) =>
        actions.filter((action) =>
          action.title.toLowerCase().includes(query.toLowerCase())
        )
      }
    >
      <MnAppShell header={<Header />}>
        <RouterTransition />

        {children}
      </MnAppShell>
    </SpotlightProvider>
  )
}
