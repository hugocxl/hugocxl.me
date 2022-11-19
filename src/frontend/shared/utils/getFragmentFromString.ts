const WHITESPACE_REGEX = /\s/
const INVALID_FRAGMENT_REGEX = /[^a-zA-Z0-9_-]/g

export function getFragmentFromString(string: string): string {
  return string
    .toLowerCase()
    .split(WHITESPACE_REGEX)
    .join('-')
    .replace(INVALID_FRAGMENT_REGEX, '')
}
