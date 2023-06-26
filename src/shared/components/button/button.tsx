// Utils
import { styled } from '@/shared/styles'

// Types
import { JsxStyleProps } from '@/shared/styles'
import { ReactNode } from 'react'

interface ButtonProps extends JsxStyleProps {
  children: ReactNode
}

export const Button = (props: ButtonProps) => {
  return <styled.button {...props} />
}
