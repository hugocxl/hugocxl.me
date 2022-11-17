// Dependencies
import * as path from 'path'

// Utils
import { getMetaFromDocsDir } from '@/frontend/shared/utils'

// Components
import { Projects } from '@/frontend/modules/projects'

// Types
import { Post } from '@/frontend/shared/types'
import { GetStaticProps, GetStaticPropsResult } from 'next'

// Constants
const BASE_PROJECTS_PATH = 'projects'
const PROJECTS_DIR = path.join(process.cwd(), 'docs', BASE_PROJECTS_PATH)

interface ProjectsPageProps {
  projects: Post[]
}

const getStaticProps: GetStaticProps = async (
  props
): Promise<GetStaticPropsResult<ProjectsPageProps>> => {
  const projects = getMetaFromDocsDir(PROJECTS_DIR)
  const sortedProjects = projects.sort((a, b) => {
    if (a.meta.date > b.meta.date) {
      return -1
    }
    return 1
  })

  return {
    revalidate: 60,
    props: {
      projects: sortedProjects
    }
  }
}

export { getStaticProps }
export default Projects
