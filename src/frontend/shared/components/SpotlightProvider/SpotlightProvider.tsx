// Components
import {
  SpotlightAction,
  SpotlightProvider as MnSpotlightProvider
} from '@mantine/spotlight'
import { IconSearch } from '@tabler/icons'

// Hooks
import { useRouter } from 'next/router'

// Types
import { FC, ReactNode } from 'react'

// Constants
import { PAGES } from '@/frontend/shared/constants'

export interface SpotlightProviderProps {
  children: ReactNode
}

export const SpotlightProvider: FC<SpotlightProviderProps> = ({ children }) => {
  const router = useRouter()
  const actions: SpotlightAction[] = [
    ...PAGES.map(({ title, icon: Icon, href }) => ({
      title,
      description: `Go to ${title} page`,
      icon: <Icon />,
      onTrigger: () => router.push(href)
    }))
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
