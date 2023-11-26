import { join, extname, basename } from 'path'
import fs from 'fs/promises'

const outputDir = join(import.meta.dir, `css`)

async function doesDirExist(dir: string) {
  try {
    await fs.access(dir)
    return true
  } catch (err) {
    return err
  }
}
;(async function createDirIfNotExist(dir: string) {
  try {
    if (await doesDirExist(dir)) return
    else {
      await fs.mkdir(dir, { recursive: true })
    }
  } catch (err: any) {
    console.error(err)
  }
})(outputDir)

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
  return `@font-face {
      font-family: '${fontName}';
      src: local('${fontName}') url('${fontFilePath}') format('${extname(
    fontFilePath
  ).slice(1)}');
    }`
}
const write = async (fileName: string, content: string) =>
  await Bun.write(`${outputDir}/${fileName}.css`, content)

export async function processFiles(dir: string) {
  if (await dirContainsCSSFilesWithFontFace(dir)) return
  try {
    const files = await fs.readdir(dir, { withFileTypes: true })
    for (const file of files) {
      if (file.isFile()) {
        const fontFilePath = join(dir, file.name)
        const cssRule = generateFontFaceRule(file.name, fontFilePath)
        write(file.name, cssRule)
      }
    }
  } catch (err) {
    console.error('Error reading directory:', err)
  }
}
export async function processSingleFile(dir: string) {
  const fileName = basename(dir)
  try {
    const cssRule = generateFontFaceRule(fileName, dir)
    write(fileName, cssRule)
  } catch (err) {
    console.error(`Error processing file ${fileName}:`, err)
  }
}
