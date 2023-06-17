// Dependencies
import { githubClient } from '@/backend/shared/lib'

export const ProjectsServer = {
  async getStaticProps() {
    const repos = await githubClient.getPersonalRepos()

    return {
      revalidate: 86400 * 3,
      props: {
        repos
      }
    }
  }
}
