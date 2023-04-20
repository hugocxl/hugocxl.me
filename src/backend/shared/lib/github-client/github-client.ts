import { fetcher } from '@/backend/shared/lib/fetcher'
import { StarredRepo } from './github-client.types'

export const githubClient = {
  async getStarredRepos() {
    return fetcher.get<StarredRepo[]>(
      'https://api.github.com/users/hcorta/starred?per_page=1000&page=0'
    )
  }
}
