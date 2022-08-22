// Components
import { Stack, Typography } from '@mui/material'
import { Page } from 'components'

const About = () => {
  return (
    <Page title='About' description='Get to know a little bit more about me!'>
      <Stack direction={'column'}>
        <Typography paragraph>
          I'm an experienced Software Engineer with a demonstrated history of
          working in the computer software industry. Skilled in Mobile, Web and
          Server Application Development.
        </Typography>
        <Typography paragraph>
          I am fortunate to develop myself through my career, fulfilling my
          interests by growing professionally.
        </Typography>
        <Typography paragraph>
          I love using my technical skills to build cool and interesting things.
          My superpower is to deliver high-quality products by being able to
          contribute value across different ladders of abstraction, all the way
          from the highest levels of definition down to the lowest levels of
          implementation details.
        </Typography>
        <Typography paragraph>
          If you want to know more, you may check out my stack or visit my
          projects section.
        </Typography>
      </Stack>
    </Page>
  )
}

export default About
