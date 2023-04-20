// Dependencies
import { githubClient } from '@/backend/shared/lib'

export const RadarServer = {
  async getStaticProps() {
    const repos = await githubClient.getStarredRepos()

    return {
      revalidate: 86400 * 3,
      props: {
        repos
      }
    }
  }
}
