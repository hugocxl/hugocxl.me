'use client'

// Components
import { Button, Stack, Link } from '@/shared/components'

// Constants
import { PAGES } from '@/shared/constants'

// Hooks
import { useState, useEffect } from 'react'

export function Dock() {
  const [scrollDirection, setScrollDirection] = useState('up')

  useEffect(() => {
    let lastScrollPosition = window.pageYOffset

    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset

      if (currentScrollPosition > lastScrollPosition) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }

      lastScrollPosition = currentScrollPosition
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Stack
      css={{
        transform:
          scrollDirection === 'up'
            ? 'translateX(-50%)'
            : 'translateX(-50%) translateY(calc(100% + 20px))'
      }}
      p={'sm'}
      bottom={20}
      bg={'bg.dock'}
      borderRadius={'200px'}
      border={'primary'}
      backdropFilter={'blur(8px)'}
      transition={'transform 0.3s ease-in-out'}
      direction={'row'}
      position={'fixed'}
      zIndex={9999}
      background={'rgba(255,255,255,0.025)'}
      left={'50%'}
      _before={{
        width: '100%',
        height: '1px',
        content: '""',
        position: 'absolute',
        top: -1,
        zIndex: -1,
        left: 0,
        background:
          'linear-gradient(to right, transparent, rgba(255,255,255,0.3) 80%, transparent)'
      }}
    >
      {PAGES.map(({ icon: Icon, href, title }) => {
        return (
          <Link href={href} key={href} title={title} textDecoration={'none'}>
            <Button
              background={'bg.dockButton'}
              transition={'all 0.2s ease-in-out'}
              borderRadius={'50%'}
              transformOrigin={'center bottom'}
              border={'secondary'}
              position={'relative'}
              _hover={{
                filter: 'invert(1)',
                transform: 'translateY(-10%) scale(1.15)'
              }}
            >
              {/* <Box
                css={{
                  borderRadius: '50%',
                  width: '100%',
                  height: '100%',
                  content: '""',
                  position: 'absolute',
                  top: -1,
                  zIndex: -1,
                  left: 0,
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.25) 70%, transparent)'
                }}
              /> */}
              <Icon strokeWidth={1} size={20} />
            </Button>
          </Link>
        )
      })}
    </Stack>
  )
}
