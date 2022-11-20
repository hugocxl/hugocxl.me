import { Accordion, Divider, Text } from '@mantine/core'
import NextLink from 'next/link'

interface AsideNavLink {
  name: string
  path: string
  children?: AsideNavLink[]
}

export interface AsideNavProps {
  defaultValue: string
  baseUrl: string
  links: AsideNavLink[]
}

export const AsideNav = ({ baseUrl, defaultValue, links }: AsideNavProps) => {
  return (
    <Accordion
      variant='filled'
      defaultValue={defaultValue}
      p={'xl'}
      radius={0}
      sx={(theme) => ({
        width: 300,
        background:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100%',
        [theme.fn.smallerThan('xl')]: {
          display: 'none'
        }
      })}
    >
      <Text weight={'bold'}>Table of contents</Text>
      <Divider />

      {links.map((el) => {
        if (!el.children) return
        return (
          <Accordion.Item value={el.name}>
            <Accordion.Control>
              <Text color={'dimmed'} size={'sm'}>
                {el.name}
              </Text>
            </Accordion.Control>
            <Accordion.Panel>
              {el.children.map((child) => {
                return (
                  <NextLink href={baseUrl + '/' + child.path}>
                    <Text size={'sm'} pl={'md'}>
                      {child.name}
                    </Text>
                  </NextLink>
                )
              })}
            </Accordion.Panel>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}
