export interface Item {
  id: string
  cover?: string
  link: string
  slug?: string
  name?: string
  description?: string
  tag?: string
  createdAt?: string
  updatedAt?: string
  properties: Record<string, any>
}
