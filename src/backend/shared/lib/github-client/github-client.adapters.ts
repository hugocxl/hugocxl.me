import { Repository } from '@/shared/types/repo.types'
import { ResponseRepo } from './github-client.types'

export const githubAdapters = {
  toItem(repo: ResponseRepo): Repository {
    return {
      cover: repo.owner.avatar_url,
      stars: repo.stargazers_count,
      description: repo.description,
      id: repo.id,
      href: repo.html_url,
      name: repo.full_name
    }
  }
}
