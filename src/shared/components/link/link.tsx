import { JsxStyleProps, styled } from '@/shared/styles'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { ReactNode } from 'react'

interface LinkProps extends JsxStyleProps {
  href: NextLinkProps['href']
  children: ReactNode
  target?: string
  title?: string
}

const StyledLink = styled(NextLink)

export function Link({ href, ...props }: LinkProps) {
  return <StyledLink href={href} {...props} />
}
