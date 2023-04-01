// Coponents
import { Card } from '@/frontend/shared/components'
import { Items, Page } from '@/frontend/shared/types'
import { Box, Text, Flex, Title, Stack } from '@mantine/core'
import NextLink from 'next/link'
import { FC } from 'react'

export interface ListProps {
  id: string
  items: Items
  title: string
  subtitle?: string
  page: Page
}

export const List: FC<ListProps> = ({ id, items, title, subtitle, page }) => {
  return (
    <Box mb={'3rem'} id={id}>
      <Flex align={'flex-end'} justify={'space-between'}>
        <Title order={2}>{title}</Title>
        {subtitle && (
          <NextLink href={page.href}>
            <Text mb={'sm'} color={'dimmed'}>
              {subtitle}
            </Text>
          </NextLink>
        )}
      </Flex>
      <Stack>
        {items.map(({ slug, name, description, cover }) => {
          return (
            <Card
              link={`${page.href}/${slug}`}
              key={slug}
              name={name}
              description={description}
              cover={cover}
              useNextImage={true}
            />
          )
        })}
      </Stack>
    </Box>
  )
}
