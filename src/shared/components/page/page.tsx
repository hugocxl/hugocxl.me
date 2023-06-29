// Components
import {
  Container,
  Typography,
  Image,
  Title,
  Stack,
  Button,
  Link
} from '@/shared/components'

// Types
import { JsxStyleProps } from '@/shared/styles'
import { IconArrowBackUp } from '@tabler/icons'
import { ReactNode } from 'react'

interface PageProps extends JsxStyleProps {
  children: ReactNode
  title?: string
  description?: string
  cover?: string
  goBackHref?: string
}

export function Page({
  title,
  description,
  cover,
  children,
  goBackHref,
  ...props
}: PageProps) {
  return (
    <Container py={'15vh'} px={'md'} {...props}>
      {(title || description || cover || goBackHref) && (
        <Stack mb={'lg'} gap={0} position={'relative'}>
          {title && <Title m={0}>{title}</Title>}
          {description && (
            <Typography fontSize={'md'} color={'text.dimmed'}>
              {description}
            </Typography>
          )}
          {cover && <Image src={cover} alt={title} mt={'lg'} />}
          {goBackHref && (
            <Link
              display={{
                md: 'inherit',
                sm: 'none'
              }}
              href={goBackHref}
              position={'absolute'}
              top={0}
              left={0}
              transform={'translateX(calc(-100% - 2rem))'}
            >
              <Button>
                <IconArrowBackUp />
              </Button>
            </Link>
          )}
        </Stack>
      )}
      {children}
    </Container>
  )
}
