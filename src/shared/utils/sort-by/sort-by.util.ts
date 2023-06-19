export function sortBy<T>(array: T[], key1: keyof T): T[] {
  return array.sort((a, b) => {
    if (a[key1] < b[key1]) {
      return -1
    }
    if (a[key1] > b[key1]) {
      return 1
    }
    return 0
  })
}
