// Components
import ReactMarkdown from 'react-markdown'

// Types
import { FC, ReactNode } from 'react'
import { Anchor, Divider, Title, TitleOrder } from '@mantine/core'
import { getFragmentFromString } from '@/frontend/shared/utils/getFragmentFromString'

export interface MarkdownRendererProps {
  children: string
}

export const MarkdownRenderer: FC<MarkdownRendererProps> = ({ children }) => {
  function Header({
    order,
    children,
    ...rest
  }: {
    order: TitleOrder
    children: ReactNode
  }) {
    const id = getFragmentFromString(children[0])
    return (
      <Title className='heading' id={id} order={order} {...rest}>
        {children}
      </Title>
    )
  }
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => <Header order={1} {...props} />,
        h2: ({ node, ...props }) => <Header order={2} {...props} />,
        h3: ({ node, ...props }) => <Header order={3} {...props} />,
        h4: ({ node, ...props }) => <Header order={4} {...props} />,
        h5: ({ node, ...props }) => <Header order={5} {...props} />,
        h6: ({ node, ...props }) => <Header order={6} {...props} />,
        // p: ({ node, ...props }) => (
        //   <Typography variant={'body1'} paragraph={true} {...props} />
        // ),
        // img: ({ node, ...props }) => (
        //   <Box borderRadius={4} component={'img'} width={'100%'} {...props} />
        // ),
        hr: ({ node, ...props }) => <Divider sx={{ mb: 4 }} {...props} />,
        // li: ({ node, key, children }) => (
        //   <li key={key}>
        //     <Typography>{children}</Typography>
        //   </li>
        // ),
        a: ({ node, ...props }) => (
          <Anchor {...props} target='_blank' rel='noopener noreferrer' />
        )
        // blockquote: ({ node, key, children, ...rest }) => (
        //   <Paper elevation={2} sx={{ pb: 1, pt: 4, px: 2, mb: 4 }} key={key}>
        //     {children}
        //   </Paper>
        // ),
        // pre: ({ node, key, children, ...rest }) => (
        //   <Paper elevation={4} sx={{ px: 4, py: 2, mb: 4 }} key={key}>
        //     <pre>{children}</pre>
        //   </Paper>
        // )
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
