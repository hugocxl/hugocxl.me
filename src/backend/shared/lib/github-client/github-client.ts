import { fetcher } from '@/backend/shared/lib/fetcher'
import { StarredRepo } from './github-client.types'

export const githubClient = {
  async getStarredRepos() {
    const results = []
    let page = 0
    await getData()

    async function getData() {
      const pageResults = await fetcher.get<StarredRepo[]>(
        `https://api.github.com/users/hcorta/starred?per_page=100&page=${page}`
      )
      results.push(...pageResults)

      if (!pageResults.length) return

      page++
      await getData()
    }

    return results
  }
}
