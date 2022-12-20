// Components
import { Page } from '@/frontend/shared/components'
import { Group, Title, Text, Box, Anchor, Image, Stack } from '@mantine/core'
import NextLink from 'next/link'

// Types
import { NextPage } from 'next'

// Constants
import { STACK } from '@/frontend/shared/constants'
import { ReactNode } from 'react'

export const StackPage: NextPage = () => {
  function Item({
    title,
    description,
    link
  }: {
    title: string
    description?: ReactNode
    link: string
  }) {
    return (
      <li>
        <Stack spacing={0}>
          <Anchor href={link} target={'_blank'}>
            <Title span order={4} m={'0 !important'}>
              {title}
            </Title>
          </Anchor>
          <Text>{description}</Text>
        </Stack>
      </li>
    )
  }

  return (
    <Page title={STACK.title} description={STACK.description}>
      <Title order={2}>{'Office'}</Title>
      <ul>
        <Item
          link={'https://amzn.to/3Wsi2w5'}
          title={'MacBook Pro (13-inch, 2017)'}
          description={'My laptop'}
        />
        <Item
          link={'https://amzn.to/3v2PT2j'}
          title={'Samsung LF24T35'}
          description={'My main screen'}
        />
        <Item
          link={'https://amzn.to/3hCqTvK'}
          title={'HP 22w'}
          description={'My secondary screen'}
        />
        <Item
          link={'https://amzn.to/3G67UmC'}
          title={'Logitech M171'}
          description={'My mouse'}
        />
        <Item
          link={'https://amzn.to/3Wsi2w5'}
          title={'Apple Magic Keyboard'}
          description={
            'I love this keyboard. I tried other options (yep, mechanical included), but I always come back to use it.'
          }
        />
      </ul>

      <Title mt={6} order={2}>
        {'Other Tech'}
      </Title>
      <ul>
        <Item
          title={'Apple Airpods Pro'}
          description={'So far, the best sound quality that I could find.'}
          link={'https://amzn.to/3V6NcaN'}
        />
        <Item
          title={'Apple iPhone 11 Pro'}
          description={
            'If you are not a camera power-user, this is a great phone.'
          }
          link={'https://amzn.to/3hFzOwt'}
        />
        <Item
          title={'Kindle Oasis'}
          description={`Best reading experience in a digital device.`}
          link={'https://amzn.to/3G7azww'}
        />
        <Item
          title={'Polar Vantage M'}
          description={
            'My sports watch. It works really well for non-pro athletes.'
          }
          link={'https://amzn.to/3BR5G8h'}
        />
      </ul>

      <Title mt={6} order={2}>
        {'Editor'}
      </Title>
      <ul>
        <Item
          title={'Visual Studio Code'}
          link={'https://code.visualstudio.com/'}
          description={
            <>
              I use a low-profile config. Find my settings{' '}
              <Anchor
                target={'_blank'}
                href={'https://github.com/hcorta/dotfiles/tree/master/vscode'}
              >
                here
              </Anchor>
            </>
          }
        />
        <Item
          title={'Chrome Tools Theme'}
          link={'https://code.visualstudio.com/'}
          description={'Editor theme'}
        />
        <Item
          title={'JetBrains Mono'}
          link={'https://www.jetbrains.com/lp/mono/'}
          description={'A typeface for developers'}
        />
      </ul>

      <Title mt={6} order={2}>
        {'Software'}
      </Title>
      <ul>
        <Item
          title={'Warp'}
          link={'https://www.warp.dev/'}
          description={'Terminal for the 21st century'}
        />
        <Item
          title={'1Password'}
          link={'https://1password.com/'}
          description={
            '1Password is the easiest way to store and use strong passwords.'
          }
        />
        <Item
          title={'Spotify'}
          link={'https://spotify.com/'}
          description={
            'Spotify is a digital music service that gives you access to millions of songs.'
          }
        />
        <Item
          title={'Raycast'}
          link={'https://raycast.com/'}
          description={
            'Raycast is a blazingly fast, totally extendable launcher. It lets you complete tasks, calculate, share common links, and much more.'
          }
        />
        <Item
          title={'Notion'}
          link={'https://notion.so/'}
          description={`Notion is a workspace that adapts to your needs. It's as minimal or as powerful as you need it to be.`}
        />
        <Item
          title={'Lunar'}
          link={'https://lunar.fyi/'}
          description={`The defacto app for controlling monitors.`}
        />
        <Item
          title={'Google Drive'}
          link={'https://www.google.com/drive/'}
          description={`Store, share, and collaborate on files and folders from your mobile device, tablet, or computer.`}
        />
      </ul>
    </Page>
  )
}
