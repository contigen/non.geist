import { findFontWeight, isFontItalic } from './font-weight'
import { join, extname, basename } from 'path'
import fs from 'fs/promises'

const OUTPUT_DIR = `font-faces`

async function doesDirExist(dir: string) {
  try {
    await fs.access(dir)
    return true
  } catch (err) {
    return false
  }
}
await (async function createDirIfNotExist(dir: string) {
  try {
    if (await doesDirExist(dir)) return
    else {
      await fs.mkdir(dir)
    }
  } catch (err: any) {
    console.error(err)
  }
})(OUTPUT_DIR)

export async function dirContainsCSSFilesWithFontFace(dir: string) {
  if (!(await doesDirExist(dir))) {
    return false
  }
  try {
    const files = fs.readdir(dir)
    const file = (await files)[0]
    if (extname(file).toLowerCase() === '.css') {
      const filePath = join(dir, file)
      const fileContent = await Bun.file(filePath).text()
      if (fileContent.includes('@font-face')) {
        return true
      }
    }
    return false
  } catch (err) {
    console.error('Error reading directory:', err)
    return false
  }
}

function generateFontFaceRule(fontFileName: string, fontFilePath: string) {
  const fontName = fontFileName.replace(/\..*$/, '')
  const fontWeight = findFontWeight(fontName)
  const fontStyle = isFontItalic(fontName) ? `'italic'` : `'normal'`

  const normalizedFontPath = fontFilePath.replace(/\\/g, '/')

  return `@font-face {
  font-family: '${fontName}';
  src: url('../${normalizedFontPath}') format('${extname(fontFilePath).slice(
    1
  )}');
  font-weight: '${fontWeight}';
  font-style: ${fontStyle};
  font-display: 'swap';
  font-synthesis: 'none';
}`
}

export async function processFiles(dir: string) {
  if (await dirContainsCSSFilesWithFontFace(dir)) return
  try {
    const files = await fs.readdir(dir, { withFileTypes: true })
    for (const file of files) {
      if (file.isFile()) {
        const fontFilePath = join(dir, file.name)
        const fileNameWithCSSExt = basename(fontFilePath, '.woff2') + '.css'
        const fileNameWithCSSpath = join(OUTPUT_DIR, fileNameWithCSSExt)
        const cssRule = generateFontFaceRule(file.name, fontFilePath)
        Bun.write(fileNameWithCSSpath, cssRule)
      }
    }
  } catch (err) {
    console.error('Error reading directory:', err)
  }
}
export async function processSingleFile(dir: string) {
  const fileName = basename(dir)
  const fileNameWithCSSExt = basename(dir, '.woff2') + '.css'

  try {
    const cssRule = generateFontFaceRule(fileName, dir)
    const fileNameWithCSSpath = join(OUTPUT_DIR, fileNameWithCSSExt)
    Bun.write(fileNameWithCSSpath, cssRule)
  } catch (err) {
    console.error(`Error processing file ${fileName}:`, err)
  }
}
