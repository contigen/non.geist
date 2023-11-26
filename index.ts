import { join } from 'path'
import { processFiles, processSingleFile } from './utils'
import chokidar from 'chokidar'

const FONTS_DIR = `/fonts`
const SANS_STATIC_DIR = `/sans/static`
const MONO_STATIC_DIR = `/mono/static`
const sansDir = join(import.meta.dir, FONTS_DIR, SANS_STATIC_DIR)
const monoDir = join(import.meta.dir, FONTS_DIR, MONO_STATIC_DIR)

processFiles(sansDir)
processFiles(monoDir)
if (process.env.NODE_ENV) {
  chokidar
    .watch([sansDir, monoDir], { ignoreInitial: true })
    .on(`add`, (evt, path) => {
      path?.isFile() && processSingleFile(evt)
    })
}
