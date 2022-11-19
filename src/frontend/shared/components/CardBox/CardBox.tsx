// Components
import { Group, Badge, Card, Text, useMantineTheme } from '@mantine/core'

// Types
import { FC } from 'react'

export interface CardBoxProps {
  date: string
  description: string
  tags: string[]
  title: string
  imageUrl: string
}

export const CardBox: FC<CardBoxProps> = ({
  title,
  date,
  description,
  tags
}) => {
  const theme = useMantineTheme()
  const isDarkMode = theme.colorScheme === 'dark'
  return (
    <Card
      withBorder={!isDarkMode}
      sx={{
        height: '100%',
        justifyContent: 'space-between',
        minHeight: '200px',
        flexDirection: 'column',
        display: 'flex'
      }}
    >
      <Card.Section
        p={'xl'}
        mt={'md'}
        sx={{
          borderBottom: 1
        }}
      >
        <Group position='apart'>
          <Text weight={'bold'}>{title}</Text>
          <Badge size='sm'>{date}</Badge>
        </Group>
        <Text size='sm' mt='xs' color='dimmed'>
          {description}
        </Text>
      </Card.Section>

      <Card.Section
        withBorder
        px={'xl'}
        py={'sm'}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[5]
              : theme.colors.gray[0]
        }}
      >
        {tags.map((tag) => (
          <Badge
            key={tag}
            radius={'sm'}
            size={'sm'}
            color={'green'}
            variant={'dot'}
            mr={4}
          >
            {tag}
          </Badge>
        ))}
      </Card.Section>
    </Card>
  )
}
