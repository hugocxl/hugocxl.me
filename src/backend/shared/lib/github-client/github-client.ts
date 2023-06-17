import { fetcher } from '@/backend/shared/lib/fetcher'
import { githubAdapters } from '@/backend/shared/lib/github-client/adapters'
import { Repository } from '@/shared/types/repo'
import { ResponseRepo } from './github-client.types'

export const githubClient = {
  async getStarredRepos(): Promise<Repository[]> {
    const results = []
    let page = 0
    await getData()

    async function getData() {
      const pageResults = await fetcher.get<ResponseRepo[]>(
        `https://api.github.com/users/hcorta/starred?per_page=100&page=${page}`
      )
      results.push(...pageResults.map(repo => githubAdapters.toItem(repo)))

      if (!pageResults.length) return

      page++
      await getData()
    }

    return results
  },

  async getPersonalRepos(): Promise<Repository[]> {
    const repos = await fetcher.get<ResponseRepo[]>(
      `https://api.github.com/users/hcorta/repos?sort=stars&direction=desc`
    )

    return repos.map(repo => githubAdapters.toItem(repo))
  }
}
