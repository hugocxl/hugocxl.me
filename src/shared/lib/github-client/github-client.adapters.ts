// Types
import { Repository } from '@/shared/types/repository'
import { ResponseRepository } from './github-client.types'

export const githubAdapters = {
  toRepository(repo: ResponseRepository): Repository {
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
