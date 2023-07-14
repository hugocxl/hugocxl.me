// Utils
import { styled } from '@styled-system/jsx'

// Types
import { JsxStyleProps } from '@styled-system/types'
import { ReactNode } from 'react'

interface ButtonProps extends JsxStyleProps {
  children: ReactNode
}

export const Button = (props: ButtonProps) => {
  return <styled.button {...props} />
}
