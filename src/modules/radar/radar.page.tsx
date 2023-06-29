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
    <Page maxWidth={'80dvw'} title={RADAR.title}>
      <Box columns={'320px'} gap={'sm'}>
        {repos.map(({ name, href, stars, description, cover }) => (
          <Link
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
            border={'primary'}
            rounded={'sm'}
            marginBottom={'sm'}
            overflow={'hidden'}
            fontWeight={'normal'}
            _hover={{
              transform: 'scale(1.02)'
            }}
            _focus={{
              transform: 'scale(1.02)'
            }}
            // _after={{
            //   width: '100%',
            //   height: '100%',
            //   content: '""',
            //   position: 'absolute',
            //   top: 0,
            //   left: 0,
            //   opacity: 1,
            //   zIndex: -1,
            //   background:
            //     'linear-gradient(to bottom, transparent 0%, var(--colors-bg-primary) 100%)'
            // }}
          >
            <Image
              rounded={0}
              opacity={1}
              filter={'blur(80px)'}
              h={'100%'}
              w={'100%'}
              src={cover}
              alt={name}
              position={'absolute'}
              top={0}
              zIndex={-2}
            />
            <Box
              padding={'md'}
              display={'flex'}
              flexDirection={'column'}
              // bg={'bg.secondary'}
            >
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
                    color={'text.tertiary'}
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
              <Typography fontSize={'sm'} color={'text.tertiary'}>
                {description}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Page>
  )
}
