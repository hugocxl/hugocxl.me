// Lib
import { githubClient } from '@/shared/lib'

// Types
import { Metadata } from 'next'

// Constants
import { RADAR } from '@/shared/constants'

// Components
import { IconStar } from '@tabler/icons'
import { Box, Image, Link, Page, Stack, Typography } from '@/shared/components'

export const revalidate = 86400 * 3
export const metadata: Metadata = {
  title: RADAR.title,
  description: RADAR.description
}

export async function Radar() {
  const repos = await githubClient.getStarredRepos()

  return (
    <Page
      title={RADAR.title}
      description={RADAR.description}
      maxWidth={{
        smDown: '100%',
        base: '80dvw'
      }}
    >
      <Box columns={'320px'} w={'100%'}>
        {repos.map(({ name, href, stars, description, cover }) => (
          <Link
            bg={'bg.secondary'}
            // shadow={'sm'}
            position={'relative'}
            key={href}
            href={href}
            target={'_blank'}
            textDecoration={'none'}
            h={'100%'}
            w={'100%'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'flex-end'}
            rounded={'sm'}
            marginBottom={'md'}
            overflow={'hidden'}
            fontWeight={'normal'}
          >
            <Box padding={'md'} display={'flex'} flexDirection={'column'}>
              <Stack direction={'row'} align={'center'}>
                <Image
                  border={'primary'}
                  borderRadius={'50%'}
                  width={36}
                  height={36}
                  minH={36}
                  src={cover}
                  alt={'cover'}
                />
                <Stack gap={0}>
                  <Typography
                    gap={4}
                    alignItems={'center'}
                    display={'flex'}
                    fontWeight={'bold'}
                    color={'text.dimmed'}
                    fontSize={'sm'}
                  >
                    <IconStar size={12} />
                    {stars}
                  </Typography>
                  <Typography
                    color={'text.secondary'}
                    fontSize={'sm'}
                    fontWeight={'bold'}
                  >
                    {name.split('/')[0]}
                  </Typography>
                </Stack>
              </Stack>
              <Typography color={'text.primary'} fontWeight={'bold'} mt={'md'}>
                {name.split('/')[1]}
              </Typography>
              <Typography fontSize={'sm'} color={'text.secondary'}>
                {description}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Page>
  )
}
