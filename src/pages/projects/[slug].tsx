// Depedencies
import * as path from 'path'

// Components
import { PagePost, MarkdownRenderer } from '@/frontend/shared/components'

// Utils
import {
  createTableOfContentsFromMd,
  getMetaFromDocsDir,
  getPathsFromPosts,
  parseMatterFromFile,
  readFileFromDir
} from '@/frontend/shared/utils'

// Types
import { PostMetadata, PostTableOfContents } from '@/frontend/shared/types'
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage
} from 'next'

// Constants
const PROJECTS_DIR = path.join(process.cwd(), 'docs', 'projects')

interface ProjectsPostPageProps {
  meta: PostMetadata
  content: string
  slug: string
  tableOfContents: PostTableOfContents
}

const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const projects = getMetaFromDocsDir(PROJECTS_DIR)
    const paths = getPathsFromPosts(projects)

    return {
      paths,
      fallback: false
    }
  }

const getStaticProps: GetStaticProps = async (
  props
): Promise<GetStaticPropsResult<ProjectsPostPageProps>> => {
  const { slug } = props.params
  const fileName = `${PROJECTS_DIR}/${slug}.md`
  const file = readFileFromDir(fileName)
  const { content, meta } = parseMatterFromFile(file)
  const tableOfContents = createTableOfContentsFromMd(content)

  return {
    revalidate: 60,
    props: {
      tableOfContents,
      content,
      meta,
      slug: slug as string
    }
  }
}

const ProjectsPostPage: NextPage<ProjectsPostPageProps> = ({
  meta,
  content,
  tableOfContents,
  slug
}) => {
  return (
    <PagePost
      title={meta.title}
      description={meta.description}
      tableOfContents={tableOfContents}
    >
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </PagePost>
  )
}

export { getStaticPaths, getStaticProps }
export default ProjectsPostPage
