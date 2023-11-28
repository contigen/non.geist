import { join } from 'path'
import { processFiles, processSingleFile } from './utils'

const FONTS_DIR = `fonts`
const SANS_STATIC_DIR = `/sans/static`
const MONO_STATIC_DIR = `/mono/static`
const sansDir = join(FONTS_DIR, SANS_STATIC_DIR)
const monoDir = join(FONTS_DIR, MONO_STATIC_DIR)

processFiles(sansDir)
processFiles(monoDir)

if (process.env.NODE_ENV === `development`) {
  import(`chokidar`).then((chokidar) => {
    chokidar
      .watch([sansDir, monoDir], { ignoreInitial: true })
      .on(`add`, (evt, path) => {
        path?.isFile() && processSingleFile(evt)
      })
  })
}
