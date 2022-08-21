import {
  Chip,
  Link,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Stack,
  Typography
} from '@mui/material'
import NextLink from 'next/link'

export const ArticlesList = ({ articles }) => {
  return (
    <List>
      {articles.map((post) => {
        const { slug, meta } = post
        const { title, description, tags } = meta

        return (
          <NextLink href={`/blog/${slug}`}>
            <Link>
              <ListItem
                key={title}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  borderBottom: 1,
                  borderColor: 'divider',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'background.paper'
                  }
                }}
              >
                <Typography mb={1}>{title}</Typography>
                <Stack direction={'column'}>
                  <Typography variant={'body2'} color={'textSecondary'}>
                    {description}
                  </Typography>
                  <Stack spacing={1}>
                    {tags.map((tag) => (
                      <Chip label={tag} />
                    ))}
                  </Stack>
                </Stack>
              </ListItem>
            </Link>
          </NextLink>
        )
      })}
    </List>
  )
}
