'use client'

// Components
import { Button, Stack, Link, Image, Box } from '@/shared/components'
import IconDark from '../../../../public/icons/dark.png'
import IconLight from '../../../../public/icons/light.png'

// Constants
import { PAGES } from '@/shared/constants'
import { css } from '@/shared/styles'

// Types
import { Page } from '@/shared/types'

// Hooks
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef, MutableRefObject } from 'react'

const isBrowser = () =>
  typeof window !== 'undefined' && typeof document !== 'undefined'

export function Dock() {
  const parentRef = useRef<HTMLDivElement>()
  const [scrollDirection, setScrollDirection] = useState('up')
  const [horizontalHover, setHorizontalHover] = useState<false | number>(false)
  const pathname = usePathname()

  function onMouseOver(event) {
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
      onMouseMove={onMouseOver}
      onMouseLeave={() => setHorizontalHover(false)}
      shadow={'lg'}
      ref={parentRef}
      maxWidth={'100%'}
      p={'sm'}
      maxHeight={60}
      bottom={20}
      bg={'bg.dock'}
      borderRadius={'200px'}
      border={'primary'}
      backdropFilter={'blur(8px)'}
      transition={'all 0.1s ease'}
      direction={'row'}
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
      <Stack zIndex={1} direction={'row'} align={'flex-end'}>
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
        <Box h={'100%'} borderRight={'primary'} />
        <NavButton
          title={'Theme'}
          horizontalHover={horizontalHover}
          parentRef={parentRef}
          icon={(() => {
            if (!isBrowser()) return IconDark

            const htmlElement = document.querySelector('html')
            const theme = htmlElement.getAttribute('data-theme-mode')
            const isDarkMode = theme === 'dark'
            return isDarkMode ? IconDark : IconLight
          })()}
          onClick={() => {
            if (!isBrowser()) return

            const htmlElement = document.querySelector('html')
            const theme = htmlElement.getAttribute('data-theme-mode')
            const isDarkMode = theme === 'dark'
            htmlElement.setAttribute(
              'data-theme-mode',
              isDarkMode ? 'light' : 'dark'
            )
          }}
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
  onClick,
  horizontalHover,
  parentRef,
  isActive
}: NavButtonProps) {
  const childRef = useRef<HTMLDivElement>()
  const styleProps = getTransform()

  function getTransform() {
    if (!horizontalHover || !childRef.current || !parentRef.current)
      return {
        width: 38,
        height: 38
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
      width: scale * 38,
      height: scale * 38
    }
  }

  return (
    <div
      onClick={onClick}
      ref={childRef}
      style={{
        transition: 'all 0.1s ease',
        transformOrigin: 'center bottom',
        ...styleProps
      }}
    >
      <Button
        p={'sm'}
        h={'100%'}
        w={'100%'}
        background={'bg.dock-button'}
        overflow={'hidden'}
        borderRadius={'50%'}
        position={'relative'}
        transformOrigin={'center bottom'}
        transition={'all 0.1s ease'}
        _active={{
          transform: 'translateY(-10%)'
        }}
      >
        <div
          className={css({
            background: 'text.primary',
            borderRadius: '50%',
            position: 'absolute',
            width: 4,
            height: 4,
            bottom: -6
          })}
          style={{
            opacity: isActive ? 1 : 0
          }}
        />
        <Image
          pointerEvents={'none'}
          zIndex={2}
          alt={title}
          src={icon}
          height={'100%'}
          width={'100%'}
          transition={'all 0.1s ease'}
        />
      </Button>
    </div>
  )
}
