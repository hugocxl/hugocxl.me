import { Text, Stack, Anchor, Divider } from '@mantine/core'
interface TableOfContentsProps {
  links: { label: string; link: string; order: number }[]
}

export function TableOfContents({ links }: TableOfContentsProps) {
  // function listener() {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       const id = entry.target.getAttribute('id')
  //       if (entry.intersectionRatio === 0) {
  //         document.querySelector(`a[href="#${id}"]`)?.classList.add('active')
  //       } else {
  //         document.querySelector(`a[href="#${id}"]`)?.classList.remove('active')
  //       }
  //     })
  //   })

  //   document.querySelectorAll('.heading').forEach((section) => {
  //     observer.observe(section)
  //   })
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', listener)
  //   return () => {
  //     window.removeEventListener('DOMContentLoaded', listener)
  //   }
  // }, [])

  const items = links.map((item, index) => (
    <Anchor href={item.link}>
      <Text
        color={'dimmed'}
        size='sm'
        key={item.label}
        py={6}
        sx={(theme) => ({
          paddingLeft: item.order * theme.spacing.xs,
          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[1]
          }
        })}
      >
        {item.label}
      </Text>
    </Anchor>
  ))

  return (
    <Stack
      p={'xl'}
      spacing={0}
      sx={(theme) => ({
        width: 300,
        background:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
        position: 'fixed',
        right: 0,
        top: 0,
        height: '100%',
        [theme.fn.smallerThan('xl')]: {
          display: 'none'
        }
      })}
    >
      <Text weight={'bold'}>Table of contents</Text>
      <Divider />
      <Stack spacing={0} pt={'md'}>
        {items}
      </Stack>
    </Stack>
  )
}
