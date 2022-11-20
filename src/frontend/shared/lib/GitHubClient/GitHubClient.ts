// Dependencies
import { Octokit } from 'octokit'

// Types
import { RepoTree } from '@/frontend/shared/types'

const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN })

interface GitHubClientResponseItem {
  type: 'dir' | 'file' | 'submodule' | 'symlink'
  name: string
  path: string
  data: string
}

export const gitHubClient = {
  getFile: async (
    owner: string,
    repo: string,
    path: string
  ): Promise<GitHubClientResponseItem> => {
    const response = await octokit.rest.repos.getContent({
      owner,
      repo,
      path,
      headers: {
        Accept: 'application/vnd.github.VERSION.raw'
      }
    })

    const ghRes = response as unknown as GitHubClientResponseItem
    return {
      type: ghRes.type,
      name: ghRes.name,
      path: ghRes.path,
      data: ghRes.data
    }
  },
  getFolder: async (
    owner: string,
    repo: string,
    path: string
  ): Promise<GitHubClientResponseItem | GitHubClientResponseItem[]> => {
    const response = await octokit.rest.repos.getContent({
      owner,
      repo,
      path,
      headers: {
        Accept: 'application/vnd.github.VERSION.raw'
      }
    })

    const ghRes = response.data as unknown as GitHubClientResponseItem[]

    return ghRes.map((item) => ({
      type: item.type,
      name: item.name,
      path: item.path,
      data: item.data
    }))
  },
  getRepoTree: async (owner: string, repo: string): Promise<RepoTree> => {
    const srcDir = await gitHubClient.getFolder(owner, repo, '')

    async function getRec(dir): Promise<RepoTree> {
      if (Array.isArray(dir)) {
        return await Promise.all(
          dir.map(async (item) => {
            if (item.type === 'dir') {
              const dir = await gitHubClient.getFolder(owner, repo, item.path)
              return {
                name: item.name,
                path: item.path,
                type: item.type,
                children: await getRec(dir)
              }
            } else {
              const fetchedFile = await gitHubClient.getFile(
                owner,
                repo,
                item.path
              )

              return {
                name: item.name,
                path: item.path,
                type: item.type,
                data: fetchedFile.data
              }
            }
          })
        )
      }
    }

    const tree = await getRec(srcDir)
    return tree
  }
}
