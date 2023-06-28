// Components
import { styled } from '@/shared/styles'
import { Dock } from './dock'

// Types
import { ReactNode } from 'react'

interface AppShellProps {
  children: ReactNode
}

export function AppShell(props: AppShellProps) {
  return (
    <styled.main position={'relative'}>
      {props.children}
      <Dock />
    </styled.main>
  )
}
