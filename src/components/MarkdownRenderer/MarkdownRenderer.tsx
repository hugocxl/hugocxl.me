// Components
import ReactMarkdown from 'react-markdown'
import { Typography, Divider, Link, Box, Alert, Paper } from '@mui/material'

// Types
import { FC } from 'react'
import { MarkdownRendererProps } from './MarkdownRenderer.types'

export const MarkdownRenderer: FC<MarkdownRendererProps> = ({ children }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => <Typography variant={'h4'} {...props} />,
        h2: ({ node, ...props }) => <Typography variant={'h5'} {...props} />,
        h3: ({ node, ...props }) => <Typography variant={'h6'} {...props} />,
        h4: ({ node, ...props }) => <Typography variant={'h6'} {...props} />,
        h5: ({ node, ...props }) => <Typography variant={'h6'} {...props} />,
        h6: ({ node, ...props }) => <Typography variant={'h6'} {...props} />,
        p: ({ node, ...props }) => (
          <Typography variant={'body1'} paragraph={true} {...props} />
        ),
        img: ({ node, ...props }) => (
          <Box borderRadius={4} component={'img'} width={'100%'} {...props} />
        ),
        hr: ({ node, ...props }) => <Divider sx={{ mb: 4 }} {...props} />,
        li: ({ node, key, children }) => (
          <li key={key}>
            <Typography>{children}</Typography>
          </li>
        ),
        a: ({ node, ...props }) => (
          <Link {...props} target='_blank' rel='noopener noreferrer' />
        ),
        blockquote: ({ node, key, children, ...rest }) => (
          <Paper elevation={2} sx={{ pt: 2, px: 2, mb: 4 }} key={key}>
            {children}
          </Paper>
        ),
        pre: ({ node, key, children, ...rest }) => (
          <Paper elevation={4} sx={{ px: 4, py: 2, mb: 4 }} key={key}>
            <pre>{children}</pre>
          </Paper>
        )
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
