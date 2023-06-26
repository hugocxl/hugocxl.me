// Types
import { NotionItem, Params } from '@/shared/types'

export function getPageParams(items: NotionItem[]): Params[] {
  try {
    const params = items
      .filter(item => item.slug.length)
      .map(({ slug }) => ({
        slug
      }))

    return params
  } catch (err) {
    console.error(err)
    return []
  }
}
