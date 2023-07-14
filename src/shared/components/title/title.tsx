// Utils
import { styled } from '@styled-system/jsx'

// Types
import { JsxStyleProps } from '@styled-system/types'
import { ReactNode } from 'react'

interface TitleProps extends JsxStyleProps {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Title({ children, variant = 'h1', ...props }: TitleProps) {
  const Component = styled[variant]

  return <Component {...props}>{children}</Component>
}
