// Dependencies
import * as path from 'path'

// Components
import NextLink from 'next/link'
import { Card, Page } from 'src/components'
import { Grid, Fade } from '@mui/material'

// Utils
import { getMetaFromDocsDir, getTagsFromArticles } from 'src/utils'

// Types
import { Article, ArticleTags } from 'src/types'
import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next'

// Constants
const BASE_PORTFOLIO_PATH = 'portfolio'
const PORTFOLIO_DIR = path.join(process.cwd(), 'docs', BASE_PORTFOLIO_PATH)
const PORTFOLIO_PAGE_TITLE = 'Portfolio'
const PORTFOLIO_PAGE_DESCRIPTION = `Software developer and open source author, I believe in proof of work. These are my popular works.`

interface PortfolioPageProps {
  projects: Article[]
  tags: ArticleTags
}

const getStaticProps: GetStaticProps = async (
  props
): Promise<GetStaticPropsResult<PortfolioPageProps>> => {
  const projects = getMetaFromDocsDir(PORTFOLIO_DIR)
  const tags = getTagsFromArticles(projects)

  return {
    revalidate: 60,
    props: {
      projects,
      tags
    }
  }
}

const PortfolioPage: NextPage<PortfolioPageProps> = ({ projects }) => {
  return (
    <Page title={PORTFOLIO_PAGE_TITLE} description={PORTFOLIO_PAGE_DESCRIPTION}>
      <Grid container spacing={3}>
        {projects.map((project, i) => {
          const { slug, meta } = project
          const { title, description, tags, date } = meta

          return (
            <NextLink
              href={`/${BASE_PORTFOLIO_PATH}/${project.slug}`}
              key={slug}
            >
              <Fade in timeout={i * 300 + 300}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%' }}
                    title={title}
                    description={description}
                    tags={tags}
                    date={date}
                    key={title}
                  />
                </Grid>
              </Fade>
            </NextLink>
          )
        })}
      </Grid>
    </Page>
  )
}

export { getStaticProps }
export default PortfolioPage
