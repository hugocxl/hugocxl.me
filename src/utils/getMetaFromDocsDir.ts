// Dependencies
import * as fs from 'fs'
import matter from 'gray-matter'

// Types
import { Article } from 'src/types'

export function getMetaFromDocsDir(dir: string): Article[] {
  try {
    const files = fs.readdirSync(dir)

    const parsedData = files.map((fileName) => {
      const slug = fileName.replace('.md', '')
      const readFile = fs.readFileSync(`${dir}/${fileName}`, 'utf-8')
      const { data: meta } = matter(readFile)

      return {
        slug,
        meta
      }
    })

    return parsedData
  } catch (err) {
    console.log(err)
    return []
  }
}
