// Components
import ReactMarkdown from 'react-markdown'
import { Typography, Divider, Link, List, ListItem } from '@mui/material'

// Types
import { FC } from 'react'
import { MarkdownRendererProps } from './MarkdownRenderer.types'

export const MarkdownRenderer: FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        h1: (props) => <Typography variant={'h1'} {...props} />,
        h2: (props) => <Typography variant={'h2'} {...props} />,
        h3: (props) => <Typography variant={'h3'} {...props} />,
        h4: (props) => <Typography variant={'h4'} {...props} />,
        h5: (props) => <Typography variant={'h5'} {...props} />,
        h6: (props) => <Typography variant={'h6'} {...props} />,
        p: (props) => <Typography variant={'body1'} {...props} />,
        hr: Divider,
        li: ListItem,
        ul: List,
        ol: List,
        a: (props) => (
          <Link {...props} target='_blank' rel='noopener noreferrer' />
        )
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
