import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Stack,
  Group,
  Box
} from '@mantine/core'
import { Dots } from './Dots'
import NextLink from 'next/link'

const useStyles = createStyles((theme) => ({
  wrapper: {
    left: 0,
    top: 0,
    width: '100vw',
    position: 'fixed',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // background: 'red',
    maxWidth: 'none',
    background:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.white
  },

  dots: {
    position: 'absolute',
    zIndex: -1,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    '@media (max-width: 755px)': {
      display: 'none'
    }
  }
}))

export function HeroText() {
  const { classes } = useStyles()

  return (
    <Box className={classes.wrapper}>
      <Container pos={'relative'} w={'100%'}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots
          className={classes.dots}
          style={{ left: 0, top: 0, transform: 'translateY(200px)' }}
        />
        <Dots className={classes.dots} style={{ right: 0, top: 0 }} />
        <Dots
          className={classes.dots}
          style={{ right: 0, top: 0, transform: 'translateY(-200px)' }}
        />

        <Stack spacing={0} align='center'>
          <Title order={1}>
            Hi  I'm Hugo.{' '}
            <Text component='span' variant={'gradient'} inherit>
              Software Craftman
            </Text>
          </Title>

          <Text size='lg' color='dimmed' align='center'>
            I help companies to turn ideas into real-life products.
          </Text>

          <Group mt={'xl'}>
            <NextLink href='/blog'>
              <Button variant='default'>Read my blog</Button>
            </NextLink>
            <NextLink href='/projects'>
              <Button>See my projects</Button>
            </NextLink>
          </Group>
        </Stack>
      </Container>
    </Box>
  )
}
