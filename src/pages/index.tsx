// Components
import { Box, Divider, Grid, Link, Stack, Typography } from '@mui/material'
import { Page } from 'src/components'
import NextLink from 'next/link'
import NextImage from 'next/image'

// Types
import { NextPage } from 'next'

// Constants
import { PAGES } from 'src/constants'
const HOME_PAGE_TITLE = `Hugo Corta`
const HOME_PAGE_DESCRIPTION = `Software developer and open source author`

const HomePage: NextPage = () => {
  return (
    <Page
      title={HOME_PAGE_TITLE}
      description={HOME_PAGE_DESCRIPTION}
      showHeader={false}
    >
      <Grid
        container
        spacing={0}
        alignItems={'center'}
        justifyContent={'space-between'}
        height={'100%'}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={9}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <Typography
            gutterBottom={false}
            variant={'h4'}
            component={'h1'}
          >{`Hi 👋 – I’m Hugo`}</Typography>
          <Typography variant={'subtitle1'} component={'h2'}>
            {HOME_PAGE_DESCRIPTION}
          </Typography>

          <Typography marginTop={4}>
            {'I love creating useful products.'}
          </Typography>
          <Typography>
            Wanna reach out? You can find me on{' '}
            <Link
              href={`https://github.com/hcorta`}
              title={`GitHub @hcorta`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {'GitHub'}
            </Link>{' '}
            or{' '}
            <Link
              href={`https://twitter.com/hcorta`}
              title={`Twitter @hcorta`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {'Twitter'}
            </Link>
            {'.'}
          </Typography>

          <Stack spacing={1} mt={4}>
            {PAGES.map(({ path, label }) => (
              <NextLink href={path}>
                <Link>{label}</Link>
              </NextLink>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            borderRadius={'400px'}
            overflow={'hidden'}
            display={'block'}
            width={'240px'}
            height={'240px'}
            position={'relative'}
          >
            <NextImage
              layout={'fill'}
              objectFit={'cover'}
              placeholder={'blur'}
              alt={'Hugo Corta'}
              title={'Hugo Corta'}
              src={'/img/personal-portrait.png'}
              blurDataURL={'/img/personal-portrait.png'}
            />
          </Box>
        </Grid>
      </Grid>
    </Page>
  )
}

export default HomePage
