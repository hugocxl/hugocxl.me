// Dependencies
import * as path from 'path'

// Utils
import { getMetaFromDocsDir } from '../../utils'

// Components
import NextImage from 'next/image'
import NextLink from 'next/link'
import { Page } from '../../components'
import { Masonry } from '@mui/lab'
import { Paper, Typography, Chip, Stack } from '@mui/material'

// Constants
const BASE_PORTFOLIO_PATH = 'portfolio'
const PORTFOLIO_DIR = path.join(process.cwd(), 'docs', BASE_PORTFOLIO_PATH)

export async function getStaticProps() {
  const projects = getMetaFromDocsDir(PORTFOLIO_DIR)

  return {
    revalidate: 60,
    props: {
      projects
    }
  }
}

export default function Portfolio({ projects }) {
  return (
    <Page
      title={'Portfolio'}
      description={`Software developer and open source author, I believe in proof of work. These are my popular works.`}
    >
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }} spacing={2}>
        {projects.map((project) => (
          <NextLink href={`/${BASE_PORTFOLIO_PATH}/${project.slug}`}>
            <Paper
              key={project.slug}
              elevation={2}
              sx={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                padding: 2
              }}
            >
              <img src={project.meta.bannerImage} alt={project.meta.title} />
              <Typography variant={'h6'} mt={2}>
                {project.meta.title}
              </Typography>
              <Typography variant={'body2'}>
                {project.meta.description}
              </Typography>
              <Stack spacing={1} mt={1}>
                {project.meta.tags.map((tag) => (
                  <Chip label={tag} />
                ))}
              </Stack>
            </Paper>
          </NextLink>
        ))}
      </Masonry>
    </Page>
  )
}
