// Components
import ReactMarkdown from 'react-markdown'
import { Typography, Divider, Link, List, ListItem } from '@mui/material'

// Types
import { FC } from 'react'
import { MarkdownRendererProps } from './MarkdownRenderer.types'

export const MarkdownRenderer: FC<MarkdownRendererProps> = ({ children }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => <Typography variant={'h1'} {...props} />,
        h2: ({ node, ...props }) => <Typography variant={'h2'} {...props} />,
        h3: ({ node, ...props }) => <Typography variant={'h3'} {...props} />,
        h4: ({ node, ...props }) => <Typography variant={'h4'} {...props} />,
        h5: ({ node, ...props }) => <Typography variant={'h5'} {...props} />,
        h6: ({ node, ...props }) => <Typography variant={'h6'} {...props} />,
        p: ({ node, ...props }) => <Typography variant={'body1'} {...props} />,
        hr: ({ node, ...props }) => <Divider {...props} />,
        li: ({ node, ...props }) => <ListItem {...props} />,
        ul: ({ node, ...props }) => <List {...props} />,
        ol: ({ node, ...props }) => <List {...props} />,
        a: ({ node, ...props }) => (
          <Link {...props} target='_blank' rel='noopener noreferrer' />
        )
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
