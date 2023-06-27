'use client'

// Components
import { Button, Stack, Link, Box } from '@/shared/components'

// Constants
import { PAGES } from '@/shared/constants'
import { css } from '@/shared/styles'

// Types
import { Page } from '@/shared/types'
import { IconMoon, IconSun } from '@tabler/icons'

// Hooks
import { useState, useEffect, useRef, MutableRefObject, Fragment } from 'react'

const isBrowser = () =>
  typeof window !== 'undefined' && typeof document !== 'undefined'

export function Dock() {
  const parentRef = useRef<HTMLDivElement>()
  const [update, setUpdate] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [horizontalHover, setHorizontalHover] = useState<false | number>(false)

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
      shadow={'lg'}
      ref={parentRef}
      onMouseOver={onMouseOver}
      onMouseLeave={() => setHorizontalHover(false)}
      p={'sm'}
      maxHeight={56}
      bottom={20}
      bg={'bg.dock'}
      borderRadius={'200px'}
      border={'primary'}
      backdropFilter={'blur(8px)'}
      transition={'all 0.2s ease-in-out'}
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
      _hover={{
        '& button': {
          bg: 'bg.dockButtonHover'
        }
      }}
      _before={{
        width: '100%',
        height: '1px',
        content: '""',
        position: 'absolute',
        top: -1,
        zIndex: -1,
        left: 0,
        background:
          'linear-gradient(to right, transparent, rgba(255,255,255,0.2) 70%, transparent)'
      }}
    >
      <Stack direction={'row'} align={'flex-end'}>
        {PAGES.map(page => {
          return (
            <NavButton
              {...page}
              update={update}
              key={page.title}
              onClick={() => {
                setUpdate(prev => prev + 1)
              }}
              horizontalHover={horizontalHover}
              parentRef={parentRef}
            />
          )
        })}
        <Box h={'100%'} borderRight={'primary'} />
        <NavButton
          update={update}
          title={'Theme'}
          // icon={IconMoon}
          icon={(() => {
            if (!isBrowser()) return IconSun
            const htmlElement = document.querySelector('html')
            const theme = htmlElement.getAttribute('data-theme-mode')
            const isDarkMode = theme === 'dark'
            return isDarkMode ? IconSun : IconMoon
          })()}
          horizontalHover={horizontalHover}
          parentRef={parentRef}
          onClick={() => {
            if (!isBrowser()) return
            const htmlElement = document.querySelector('html')
            const theme = htmlElement.getAttribute('data-theme-mode')
            const isDarkMode = theme === 'dark'
            htmlElement.setAttribute(
              'data-theme-mode',
              isDarkMode ? 'light' : 'dark'
            )
            setUpdate(prev => prev + 1)
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
  update: number
  onClick?: () => void
  horizontalHover: false | number
  parentRef: MutableRefObject<HTMLDivElement>
}

function NavButton({
  href,
  title,
  icon: Icon,
  onClick,
  horizontalHover,
  parentRef
}: NavButtonProps) {
  const childRef = useRef<HTMLDivElement>()
  const { iconSize, ...rest } = getTransform()
  const Wrapper = href ? Link : Fragment

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
    const isBelowMin = x * 2 > 1
    const scale = isBelowMin ? 2 * x : 1
    const iconSize = isBelowMin ? 100 - scale * 20 : 100

    return {
      iconSize,
      width: scale * 38,
      height: scale * 38
    }
  }

  return (
    <div
      onClick={onClick}
      key={href}
      ref={childRef}
      style={{
        transformOrigin: 'center bottom',
        transition: 'all 0.2s ease',
        ...rest
      }}
    >
      <Wrapper
        h={'100%'}
        w={'100%'}
        transition={'all 0.2s ease'}
        href={href}
        title={title}
        textDecoration={'none'}
      >
        <Button
          p={'sm'}
          h={'100%'}
          w={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          background={'bg.dockButton'}
          transition={'all 0.2s ease'}
          borderRadius={'50%'}
          position={'relative'}
          transformOrigin={'center bottom'}

          // color={
          //   (href === '/'
          //     ? window.location.pathname === '/'
          //     : window.location.pathname.includes(href)) && 'text.primary'
          // }
        >
          <Icon
            strokeWidth={1}
            size={`${iconSize}%`}
            className={css({
              transition: 'all 0.2s ease'
            })}
          />
        </Button>
      </Wrapper>
    </div>
  )
}
