// Components
import { Container, Typography, Image, Title, Stack } from '@/shared/components'

// Types
import { JsxStyleProps } from '@/shared/styles'
import { ReactNode } from 'react'

interface AppShellProps extends JsxStyleProps {
  children: ReactNode
  title?: string
  description?: string
  cover?: string
}

export function Page({
  title,
  description,
  cover,
  children,
  ...props
}: AppShellProps) {
  return (
    <Container py={'15vh'} px={'md'} {...props}>
      {(title || description || cover) && (
        <Stack mb={'lg'} gap={0}>
          {title && <Title m={0}>{title}</Title>}
          {description && (
            <Typography fontSize={'md'} color={'text.dimmed'}>
              {description}
            </Typography>
          )}
          {cover && <Image src={cover} alt={title} mt={'lg'} />}
        </Stack>
      )}
      {children}
    </Container>
  )
}
