import { join } from 'path'
import { processFiles, processSingleFile } from './utils'

const FONTS_DIR = `fonts`
const SANS_STATIC_DIR = `/sans/static`
const MONO_STATIC_DIR = `/mono/static`
const PIXEL_DIR = `/pixel`
const sansDir = join(FONTS_DIR, SANS_STATIC_DIR)
const monoDir = join(FONTS_DIR, MONO_STATIC_DIR)
const pixelDir = join(FONTS_DIR, PIXEL_DIR)

processFiles(sansDir)
processFiles(monoDir)
processFiles(pixelDir)

if (process.env.NODE_ENV === `development`) {
  import(`chokidar`).then((chokidar) => {
    chokidar
      .watch([sansDir, monoDir, pixelDir], { ignoreInitial: true })
      .on(`add`, (evt, path) => {
        path?.isFile() && processSingleFile(evt)
      })
  })
}

