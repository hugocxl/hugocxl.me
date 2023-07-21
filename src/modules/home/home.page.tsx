// Components
import { Page } from '@/shared/components'
import { HOME } from '@/shared/constants'

// Types
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Hugo Corta · Software Craftsman',
  description: 'Welcome to my personal rambling space'
}

export const Home: NextPage = () => {
  return (
    <Page title={HOME.title}>
      <p>
        corta, hugo. software craftsman. unsatisfiably curious. passionate about
        software design. love to craft amazing digital products. open source
        contributor.
      </p>
      <p>
        My passion for software design runs deep, and it's what truly sets my
        heart on fire. There's something magical about creating elegant and
        efficient solutions that not only work flawlessly but also leave a
        lasting impact on users. Whether it's crafting intuitive user interfaces
        or architecting robust backend systems, I find joy in every step of the
        process.
      </p>
      <p>
        Speaking of joy, one of the things that truly brings me happiness is
        being able to build amazing digital products. From the conceptualization
        phase to the final polish, I pour my heart and soul into each project,
        ensuring it exceeds expectations. Every line of code I write is
        carefully crafted with precision and attention to detail, as I believe
        that even the smallest nuances can make a significant difference in the
        end product.
      </p>
      <p>
        You can gain further insights into my background and interests through
        my written works, projects, and various social media profiles.
      </p>
    </Page>
  )
}
