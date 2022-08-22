export interface PageProps {
  title?: string
  description?: string
  sidebar?: React.ComponentType<{}>
  children: React.ReactNode
}
