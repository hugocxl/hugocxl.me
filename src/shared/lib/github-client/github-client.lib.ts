// Libs
import { fetcher } from '@/shared/lib/fetcher'

// Adapter
import { githubAdapters } from './github-client.adapters'

// Types
import { Repository } from '@/shared/types/repository'
import { ResponseRepository } from './github-client.types'

const githubUsername = 'hugocxl'

export const githubClient = {
  _starredReposCache: [],
  _personalReposCache: [],
  async getStarredRepos(): Promise<Repository[]> {
    if (
      process.env.NODE_ENV === 'development' &&
      githubClient._starredReposCache.length
    ) {
      return githubClient._starredReposCache
    }

    const data = []
    let page = 0
    await getRecursivePages()

    async function getRecursivePages() {
      const pageResults = await fetcher.get<ResponseRepository[]>(
        `https://api.github.com/users/${githubUsername}/starred?per_page=100&page=${page}`
      )
      data.push(...pageResults.map(repo => githubAdapters.toRepository(repo)))

      if (!pageResults.length) return

      page++
      await getRecursivePages()
    }

    githubClient._starredReposCache = data
    return data
  },

  async getPersonalRepos(): Promise<Repository[]> {
    if (
      process.env.NODE_ENV === 'development' &&
      githubClient._personalReposCache.length
    ) {
      return githubClient._personalReposCache
    }

    const repos = await fetcher.get<ResponseRepository[]>(
      `https://api.github.com/users/${githubUsername}/repos?sort=stars&direction=desc`
    )

    const repositoryRepos = repos.map(repo => githubAdapters.toRepository(repo))
    githubClient._personalReposCache = repositoryRepos

    return repositoryRepos
  }
}
