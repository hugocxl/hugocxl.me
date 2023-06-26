import { Box } from '@/shared/components'
import { JsxStyleProps } from '@/shared/styles/styled-system/types'
import { ReactNode } from 'react'

interface ContainerProps extends JsxStyleProps {
  children: ReactNode
}

export function Container(props: ContainerProps) {
  return <Box w={'100%'} maxWidth={'75ch'} margin={'0 auto'} {...props} />
}
