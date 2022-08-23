export interface PageProps {
  title?: string
  description?: string
  date?: string
  sidebar?: React.ComponentType<{}>
  children: React.ReactNode
  tags?: string[]
}
