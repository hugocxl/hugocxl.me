// Components
import { Group, Badge, Card, Text } from '@mantine/core'

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
  return (
    <Card
      withBorder
      sx={(theme) => ({
        height: '100%',
        justifyContent: 'space-between',
        minHeight: '200px',
        flexDirection: 'column',
        display: 'flex'
      })}
    >
      <Card.Section
        p={'lg'}
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
        sx={(theme) => ({
          display: 'flex',
          flexWrap: 'wrap',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[7]
              : theme.colors.gray[0]
        })}
        withBorder
        px={'md'}
        py={'sm'}
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
