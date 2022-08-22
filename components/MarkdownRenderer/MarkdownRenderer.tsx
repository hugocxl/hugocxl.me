// Components
import ReactMarkdown from 'react-markdown'
import { Typography, Divider, Link, Box } from '@mui/material'

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
          <Box component={'img'} width={'100%'} {...props} />
        ),
        hr: ({ node, ...props }) => <Divider sx={{ mb: 4 }} {...props} />,
        li: ({ node, ...props }) => (
          <li>
            <Typography {...props} />
          </li>
        ),
        a: ({ node, ...props }) => (
          <Link {...props} target='_blank' rel='noopener noreferrer' />
        )
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
