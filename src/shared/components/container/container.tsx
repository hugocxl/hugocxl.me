// Components
import { Box } from '../box'

// Types
import { JsxStyleProps } from '@styled-system/types'
import { ReactNode } from 'react'

interface ContainerProps extends JsxStyleProps {
  children: ReactNode
}

export function Container(props: ContainerProps) {
  return <Box w={'100%'} maxWidth={'680px'} margin={'0 auto'} {...props} />
}
