// Components
import {
  MarkdownRenderer,
  Page,
  AsideNav,
  TableOfContents
} from '@/frontend/shared/components'

// Types
import { PostTableOfContents, RepoTree } from '@/frontend/shared/types'
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage
} from 'next'
import { gitHubClient } from '@/frontend/shared/lib'
import { createTableOfContentsFromMd } from '@/frontend/shared/utils'

interface SDEPageProps {
  content: string
  tableOfContents: PostTableOfContents
  links: RepoTree
  slug: string
}

const getStaticPaths: GetStaticPaths =
  async (): Promise<GetStaticPathsResult> => {
    const paths = []
    const repoTree = await gitHubClient.getRepoTree(
      'hcorta',
      'software-design-essentials'
    )

    function recursivePaths(tree) {
      tree.forEach((el) => {
        if (el.children) {
          recursivePaths(el.children)
        } else {
          paths.push({
            params: {
              slug: el.path.split('/')
            }
          })
        }
      })
    }

    recursivePaths(repoTree)
    return {
      paths,
      fallback: false
    }
  }

const getStaticProps: GetStaticProps = async (
  props
): Promise<GetStaticPropsResult<SDEPageProps>> => {
  const { slug } = props.params
  const repoTree = await gitHubClient.getRepoTree(
    'hcorta',
    'software-design-essentials'
  )

  const file = await gitHubClient.getFile(
    'hcorta',
    'software-design-essentials',
    // @ts-ignore
    slug.join('/').replace('%20', ' ') as string
  )

  const content = file.data
  const tableOfContents = createTableOfContentsFromMd(content)

  return {
    revalidate: 60,
    props: {
      links: repoTree,
      tableOfContents,
      content,
      slug: slug as string
    }
  }
}

const SDEPage: NextPage<SDEPageProps> = ({
  content,
  links,
  tableOfContents,
  slug
}) => {
  return (
    <Page
      showHeader={false}
      // title={meta.title}
      // description={meta.description}
    >
      {/* <Breadcrumbs>{slug.map((el) => el)}</Breadcrumbs> */}
      <AsideNav
        links={links}
        defaultValue={''}
        baseUrl={'/projects/software-design-essentials'}
      />
      <TableOfContents links={tableOfContents} />
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </Page>
  )
}

export { getStaticPaths, getStaticProps }
export default SDEPage
