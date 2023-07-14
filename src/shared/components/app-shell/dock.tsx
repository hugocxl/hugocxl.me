'use client'

// Components
import { Stack, Link, Image, Box } from '@/shared/components'
import IconSettings from '../../../../public/icons/settings.png'

// Constants
import { PAGES } from '@/shared/constants'

// Types
import { Page } from '@/shared/types'

// Hooks
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, MutableRefObject } from 'react'

// Utils
import { css } from '@styled-system/css'

const isBrowser = () =>
  typeof window !== 'undefined' && typeof document !== 'undefined'

const isMobile = () => {
  if (!isBrowser()) return

  return window.innerWidth < 768
}

export function Dock() {
  const parentRef = useRef<HTMLDivElement>()
  const [scrollDirection, setScrollDirection] = useState('up')
  const [horizontalHover, setHorizontalHover] = useState<false | number>(false)
  const pathname = usePathname()

  function onMouseMove(event) {
    const containerWidth = parentRef.current.offsetWidth
    const mouseX =
      event.clientX - parentRef.current.getBoundingClientRect().left
    const percentage = (mouseX / containerWidth) * 100
    setHorizontalHover(percentage)
  }

  useEffect(() => {
    let lastScrollPosition = window.scrollY

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY

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
      {...(!isMobile() && {
        onMouseMove,
        onMouseLeave: () => setHorizontalHover(false)
      })}
      ref={parentRef}
      p={'4px'}
      maxHeight={50}
      overflow={'visible'}
      bottom={'calc(env(safe-area-inset-bottom) + 8px)'}
      borderRadius={'14px'}
      bg={'rgba(160, 160, 160, 0.2)'}
      backdropFilter={'blur(4px)'}
      transition={'all 0.1s ease'}
      direction={'row'}
      justifyContent={'center'}
      transformOrigin={'center bottom'}
      position={'fixed'}
      zIndex={9999}
      left={'50%'}
      transform={
        scrollDirection === 'up'
          ? 'translateX(-50%)'
          : 'translateX(-50%) translateY(calc(100% + 22px))'
      }
    >
      <Stack zIndex={1} direction={'row'} align={'flex-end'} gap={'4px'}>
        {PAGES.map(page => {
          return (
            <Link
              key={page.title}
              href={page.href}
              title={page.title}
              textDecoration={'none'}
            >
              <NavButton
                {...page}
                isActive={pathname === page.href}
                horizontalHover={horizontalHover}
                parentRef={parentRef}
              />
            </Link>
          )
        })}
        <Box h={'100%'} borderRight={'primary'} borderRightWidth={2} />
        <NavButton
          title={'Theme'}
          horizontalHover={horizontalHover}
          parentRef={parentRef}
          icon={IconSettings}
          {...(!isMobile() && {
            onClick: () => {
              const htmlElement = document.querySelector('html')
              const theme = htmlElement.getAttribute('data-theme-mode')
              const isDarkMode = theme === 'dark'
              htmlElement.setAttribute(
                'data-theme-mode',
                isDarkMode ? 'light' : 'dark'
              )
            }
          })}
        />
      </Stack>
    </Stack>
  )
}

interface NavButtonProps {
  icon: Page['icon']
  title: Page['title']
  href?: string
  isActive?: boolean
  onClick?: () => void
  horizontalHover: false | number
  parentRef: MutableRefObject<HTMLDivElement>
}

function NavButton({
  icon,
  title,
  horizontalHover,
  parentRef,
  isActive,
  onClick
}: NavButtonProps) {
  const childRef = useRef<HTMLDivElement>()
  const styleProps = getTransform()

  function getTransform() {
    if (!horizontalHover || !childRef.current || !parentRef.current)
      return {
        width: 40,
        height: 40
      }

    const parentRect = parentRef.current.getBoundingClientRect()
    const childRect = childRef.current.getBoundingClientRect()
    const childCenterX = childRef.current.offsetLeft + childRect.width / 2
    const itemCenter = 100 * (childCenterX / parentRect.width)
    const isPassedCenter = horizontalHover >= itemCenter
    const itemToScroll = isPassedCenter
      ? horizontalHover - itemCenter
      : itemCenter - horizontalHover
    const x = Number((100 - itemToScroll) / 100)
    const isAboveMin = x * 2 > 1
    const scale = isAboveMin ? 2 * x : 1

    return {
      width: scale * 40,
      height: scale * 40
    }
  }

  return (
    <div
      onClick={onClick}
      ref={childRef}
      style={styleProps}
      className={css({
        position: 'relative',
        transition: 'all 0.1s ease',
        transformOrigin: 'center bottom',
        cursor: 'pointer'
      })}
    >
      <Image
        transformOrigin={'center bottom'}
        zIndex={3}
        alt={title}
        src={icon}
        height={'100%'}
        width={'100%'}
        transition={'all 0.1s ease'}
        _active={{
          transform: 'translateY(-10%)'
        }}
      />
      <div
        className={css({
          background: 'text.secondary',
          borderRadius: '50%',
          position: 'absolute',
          width: 4,
          height: 4,
          bottom: -2,
          left: '50%',
          transform: 'translateX(-50%)'
        })}
        style={{
          opacity: isActive ? 1 : 0
        }}
      />
    </div>
  )
}
