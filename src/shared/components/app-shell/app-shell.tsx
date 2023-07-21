// Components
import { styled } from '@styled-system/jsx'
import { Dock } from './dock'

// Types
import { ReactNode } from 'react'

interface AppShellProps {
  children: ReactNode
}

export function AppShell(props: AppShellProps) {
  return (
    <styled.main
      minHeight={'100dvh'}
      position={'relative'}
      // _before={{
      //   content: '""',
      //   position: 'absolute',
      //   inset: 0,
      //   zIndex: -100,
      //   backgroundImage:
      //     'url(/img/header-gradient.svg), url(/img/footer-gradient.svg)',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center top, center bottom',
      //   backgroundSize: '100%'
      // }}
    >
      {props.children}
      <Dock />
    </styled.main>
  )
}
