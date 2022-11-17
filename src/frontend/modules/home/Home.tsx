// Components
import { Page } from '@/frontend/shared/components'

// Types
import { NextPage } from 'next'
import { HeroText } from './components/HeroText'

// Constants
const HOME_PAGE_TITLE = `Hugo Corta`
const HOME_PAGE_DESCRIPTION = `Software developer at @CoverWallet`

export const Home: NextPage = () => {
  return (
    <Page
      title={HOME_PAGE_TITLE}
      description={HOME_PAGE_DESCRIPTION}
      showHeader={false}
    >
      <HeroText />
    </Page>
  )
}
