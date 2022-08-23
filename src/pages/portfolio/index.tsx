// Dependencies
import * as path from 'path'

// Utils
import { getMetaFromDocsDir } from '../../utils'

// Components
import NextLink from 'next/link'
import { Card, Page } from '../../components'
import { Grid, Fade } from '@mui/material'

// Constants
const BASE_PORTFOLIO_PATH = 'portfolio'
const PORTFOLIO_DIR = path.join(process.cwd(), 'docs', BASE_PORTFOLIO_PATH)

export async function getStaticProps () {
  const projects = getMetaFromDocsDir(PORTFOLIO_DIR)

  return {
    revalidate: 60,
    props: {
      projects
    }
  }
}

export default function Portfolio ({ projects }) {
  return (
    <Page
      title={'Portfolio'}
      description={`Software developer and open source author, I believe in proof of work. These are my popular works.`}
    >
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
