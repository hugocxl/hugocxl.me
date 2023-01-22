import React, { ReactElement, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@/frontend/shared/components'

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider mode='light'>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Wrapper, ...options })

export * from '@testing-library/react'
export { customRender as render }
