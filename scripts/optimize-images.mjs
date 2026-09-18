// Resizes and compresses images dropped into src/assets/media/ and
// src/assets/profile/. Runs automatically before `npm run dev` and
// `npm run build` (see predev/prebuild in package.json), so any photo
// you add gets optimized without a manual step.
//
// A content-hash cache (.optimize-cache.json in each folder) tracks
// which files are already optimized, so re-runs skip them instead of
// re-compressing (which would lose quality) and only process new or
// changed photos.

import { createHash } from 'node:crypto'
import { readdir, readFile, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const TARGETS = [
  { dir: path.join(root, 'src/assets/media'), maxWidth: 1800, quality: 82 },
  { dir: path.join(root, 'src/assets/profile'), maxWidth: 1000, quality: 85 },
]

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])
const SKIP_IF_UNDER_BYTES = 400 * 1024

function hash(buffer) {
  return createHash('sha1').update(buffer).digest('hex')
}

async function loadCache(cachePath) {
  try {
    return JSON.parse(await readFile(cachePath, 'utf8'))
  } catch {
    return {}
  }
}

async function optimizeFile(filePath, ext, target) {
  const input = await readFile(filePath)
  const image = sharp(input, { failOn: 'none' }).rotate() // rotate() bakes in EXIF orientation
  const metadata = await image.metadata()

  const pipeline =
    metadata.width && metadata.width > target.maxWidth ? image.resize({ width: target.maxWidth }) : image

  if (ext === '.png') return pipeline.png({ quality: target.quality, compressionLevel: 9 }).toBuffer()
  if (ext === '.webp') return pipeline.webp({ quality: target.quality }).toBuffer()
  if (ext === '.avif') return pipeline.avif({ quality: target.quality }).toBuffer()
  return pipeline.jpeg({ quality: target.quality, mozjpeg: true }).toBuffer()
}

async function processTarget(target) {
  let entries
  try {
    entries = await readdir(target.dir, { withFileTypes: true })
  } catch {
    return
  }

  const cachePath = path.join(target.dir, '.optimize-cache.json')
  const cache = await loadCache(cachePath)
  const seen = new Set()
  let cacheChanged = false

  for (const entry of entries) {
    if (!entry.isFile()) continue
    const ext = path.extname(entry.name).toLowerCase()
    if (!IMAGE_EXT.has(ext)) continue

    seen.add(entry.name)
    const filePath = path.join(target.dir, entry.name)
    const original = await readFile(filePath)
    const originalHash = hash(original)

    if (cache[entry.name] === originalHash) continue // already optimized, unchanged since

    if (original.length < SKIP_IF_UNDER_BYTES) {
      cache[entry.name] = originalHash
      cacheChanged = true
      continue
    }

    const optimized = await optimizeFile(filePath, ext, target)

    if (optimized.length < original.length) {
      await writeFile(filePath, optimized)
      cache[entry.name] = hash(optimized)
      console.log(
        `optimized ${path.relative(root, filePath)}: ${(original.length / 1024 / 1024).toFixed(2)}MB -> ${(
          optimized.length /
          1024 /
          1024
        ).toFixed(2)}MB`,
      )
    } else {
      cache[entry.name] = originalHash
    }
    cacheChanged = true
  }

  for (const name of Object.keys(cache)) {
    if (!seen.has(name)) {
      delete cache[name]
      cacheChanged = true
    }
  }

  if (cacheChanged) {
    await writeFile(cachePath, JSON.stringify(cache, null, 2))
  }
}

for (const target of TARGETS) {
  await processTarget(target)
}
