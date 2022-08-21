// Components
import { FC } from 'react'
import { NotionRenderer } from 'react-notion-x'

// Types
import { NotionPageProps } from './NotionPage.types'

export const NotionPage: FC<NotionPageProps> = ({ recordMap }) => {
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      previewImages={true}
      showCollectionViewDropdown={false}
      showTableOfContents={true}
      // {...(isPost && {
      //   pageHeader: <PageActions tweet={getPageTweet(block, recordMap)} />
      // })}
      // header={(props) => (
      //   <Header
      //     {...props}
      //     isDarkMode={darkMode.value}
      //     toggleDarkMode={darkMode.toggle}
      //   />
      // )}
      // footer={<Footer />}
      // components={{
      //   collection: Collection,
      //   collectionRow: CollectionRow,
      //   tweet: Tweet,
      //   modal: Modal,
      //   code: Code,
      //   equation: Equation,
      //   pageLink: ({
      //     href,
      //     as,
      //     passHref,
      //     prefetch,
      //     replace,
      //     scroll,
      //     shallow,
      //     locale,
      //     ...props
      //   }) => (
      //     <Link
      //       href={href}
      //       as={as}
      //       passHref={passHref}
      //       prefetch={prefetch}
      //       replace={replace}
      //       scroll={scroll}
      //       shallow={shallow}
      //       locale={locale}
      //     >
      //       <a {...props} />
      //     </Link>
      //   )
      // }}
    />
  )
}
