// Dependencies
import * as path from 'path'

// Components
import NextLink from 'next/link'
import { Card, Page } from '@/frontend/shared/components'
import { Grid, Grow, Link } from '@mui/material'

// Utils
import { getMetaFromDocsDir } from '@/frontend/shared/utils'

// Types
import { Article } from '@/frontend/shared/types'
import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next'

// Constants
const BASE_PORTFOLIO_PATH = 'portfolio'
const PORTFOLIO_DIR = path.join(process.cwd(), 'docs', BASE_PORTFOLIO_PATH)
const PORTFOLIO_PAGE_TITLE = 'Portfolio'
const PORTFOLIO_PAGE_DESCRIPTION = `Software developer and open source author, I believe in proof of work. These are some of my works.`

interface PortfolioPageProps {
  projects: Article[]
}

const getStaticProps: GetStaticProps = async (
  props
): Promise<GetStaticPropsResult<PortfolioPageProps>> => {
  const projects = getMetaFromDocsDir(PORTFOLIO_DIR)
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

const PortfolioPage: NextPage<PortfolioPageProps> = ({ projects }) => {
  return (
    <Page title={PORTFOLIO_PAGE_TITLE} description={PORTFOLIO_PAGE_DESCRIPTION}>
      <Grid container spacing={2}>
        {projects.map((project, i) => {
          const { slug, meta } = project
          const { title, description, tags, date, bannerImage } = meta

          return (
            <NextLink
              key={slug}
              href={`/${BASE_PORTFOLIO_PATH}/${project.slug}`}
            >
              <Grow in timeout={i * 200 + 200}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <Link color={'inherit'} underline={'none'}>
                    <Card
                      date={date}
                      sx={{ height: '100%' }}
                      position={i}
                      title={title}
                      description={description}
                      tags={tags}
                      key={title}
                      slug={project.slug}
                    />
                  </Link>
                </Grid>
              </Grow>
            </NextLink>
          )
        })}
      </Grid>
    </Page>
  )
}

export { getStaticProps }
export default PortfolioPage
