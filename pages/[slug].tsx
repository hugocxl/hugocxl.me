// // Dependencies
// import { getAllPagesInSpace } from 'notion-utils'
// import slugify from 'slugify'

// // Lib
// import { notionClient } from '../lib'

// // Components
// import { NotionPage } from '../components'

// export const getStaticPaths = async () => {
//   if (process.env.NODE_ENV !== 'production') {
//     return {
//       paths: [],
//       fallback: true
//     }
//   }

//   const allPagesIds = await getAllPagesInSpace(
//     process.env.ROOT_PAGE_ID,
//     null,
//     notionClient.getPage.bind(notionClient),
//     {
//       concurrency: 4,
//       traverseCollections: true
//     }
//   )

//   const paths = Object.keys(allPagesIds).map((pageId) => ({
//     params: { slug: slugify(pageId) }
//   }))

//   return {
//     paths,
//     fallback: false
//   }
// }
// export const getStaticProps = async ({ params: { slug } }) => {
//   const recordMap = await notionClient.getPage(slug)

//   return {
//     props: {
//       recordMap
//     },
//     revalidate: 60
//   }
// }

// const DynamicPage = ({ recordMap }) => {
//   return <NotionPage recordMap={recordMap} />
// }

// export default DynamicPage
