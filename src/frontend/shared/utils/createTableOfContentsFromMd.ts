import { PostTableOfContents } from '@/frontend/shared/types'
import { getFragmentFromString } from '@/frontend/shared/utils/getFragmentFromString'

const HEADINGS_REGEX = /^(#{1,6}[ \t].+)$|^(.+[\r\n][=-]{3,})$/gm
const HEADING_REGEX = /^(#+)[ \t](.+)$|^(.+)[\r\n]([=-])/
const HYPHEN = '-'

export function createTableOfContentsFromMd(
  markdown: string
): PostTableOfContents {
  const output: PostTableOfContents = []
  const headings = markdown.match(HEADINGS_REGEX)

  if (headings === null) {
    return []
  }

  let previousLevel = null

  for (let i = 0, len = headings.length; i < len; i++) {
    const heading = headings[i].match(HEADING_REGEX)

    if (heading === null) {
      continue
    }

    let currentLevel
    let headingText

    // get heading level and text
    if (heading[4]) {
      headingText = heading[3].trim()
      if (!headingText) {
        continue
      }
      currentLevel = heading[4] === HYPHEN ? 2 : 1
    } else {
      headingText = heading[2].trim()
      if (!headingText) {
        continue
      }
      currentLevel = heading[1].length
    }

    previousLevel = currentLevel

    const fragment = getFragmentFromString(headingText)

    output.push({
      label: headingText,
      link: '#' + fragment,
      order: currentLevel
    })
  }

  return output
}
