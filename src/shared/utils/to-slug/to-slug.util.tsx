export function toSlug(string: string = ''): string {
  // Convert the string to lowercase
  let slug = string.toLowerCase()

  // Remove any non-alphanumeric characters (punctuation, symbols, etc.)
  slug = slug.replace(/[^a-z0-9]+/g, '-')

  // Remove any beginning or ending hyphens
  slug = slug.replace(/^-+|-+$/g, '')

  // Trim and return the resulting slug
  return slug.trim()
}
