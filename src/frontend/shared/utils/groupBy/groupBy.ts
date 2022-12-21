export function groupBy<T>(array: T[], key: keyof T): { [key: string]: T[] } {
  return array.reduce((groups: any, item) => {
    const val = item[key]
    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, {})
}
