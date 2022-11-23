// // Dependencies
// import { gitHubClient } from '@/frontend/shared/lib'

// // Utils
// import { createTableOfContentsFromMd } from '@/frontend/shared/utils'

// // Components
// import {
//   AsideNav,
//   MarkdownRenderer,
//   Page,
//   TableOfContents
// } from '@/frontend/shared/components'

// // Types
// import { PostTableOfContents, RepoTree } from '@/frontend/shared/types'
// import { GetStaticProps, GetStaticPropsResult } from 'next'

// const TITLE = 'Software Design Essentials'
// const DESCRIPTION = 'Software Design Essentials'

// interface SoftwareDesignEssentialsHomeProps {
//   content: string
//   tableOfContents: PostTableOfContents
//   links: RepoTree
// }

// const getStaticProps: GetStaticProps = async (
//   props
// ): Promise<GetStaticPropsResult<SoftwareDesignEssentialsHomeProps>> => {
//   const repoTree = await gitHubClient.getRepoTree(
//     'hcorta',
//     'software-design-essentials'
//   )

//   const readme = await gitHubClient.getFile(
//     'hcorta',
//     'software-design-essentials',
//     'README.md'
//   )

//   const content = readme.data
//   const tableOfContents = createTableOfContentsFromMd(content)

//   return {
//     revalidate: 60,
//     props: {
//       content,
//       tableOfContents,
//       links: repoTree
//     }
//   }
// }

// const SoftwareDesignEssentialsHome = ({ content, links, tableOfContents }) => {
//   return (
//     <Page title={TITLE} description={DESCRIPTION} showHeader={false}>
//       <AsideNav
//         links={links}
//         defaultValue={''}
//         baseUrl={'/projects/software-design-essentials'}
//       />
//       <TableOfContents links={tableOfContents} />
//       <MarkdownRenderer>{content}</MarkdownRenderer>
//     </Page>
//   )
// }

// export { getStaticProps }
// export default SoftwareDesignEssentialsHome
export default () => {
  return <div>hello</div>
}
