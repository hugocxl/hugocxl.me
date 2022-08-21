// Components
import Link from 'next/link'

// Types
import { LayoutProps } from './Layout.types'
import { FC } from 'react'

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-fuchsia-100 mb-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <Link href='/'>
            <a>🏡</a>
          </Link>
          <span className='mx-auto'>Welcome to my blog</span>{' '}
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-fuchsia-100 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          &copy; 2022 DailyDevTips
        </div>
      </footer>
    </div>
  )
}
