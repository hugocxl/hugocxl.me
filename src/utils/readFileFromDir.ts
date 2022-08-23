// Dependencies
import * as fs from 'fs'

export function readFileFromDir(fileDir: string): string {
  try {
    return fs.readFileSync(fileDir, 'utf-8')
  } catch (error) {
    console.log(error)
  }
}
