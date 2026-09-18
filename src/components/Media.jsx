import { ImagePlaceholderIcon } from './icons'

// Drop image files into src/assets/media/ — they show up here automatically.
// See src/assets/media/README.md for details.
const mediaModules = import.meta.glob(
  '../assets/media/*.{png,jpg,jpeg,webp,gif,avif,PNG,JPG,JPEG,WEBP,GIF,AVIF}',
  { eager: true, import: 'default' },
)

const ROTATIONS = ['-rotate-3', 'rotate-2', 'rotate-1', '-rotate-2', 'rotate-3', '-rotate-1']

function toCaption(path) {
  const filename = path.split('/').pop().replace(/\.[^.]+$/, '')
  return filename
    .replace(/^\d+[-_.\s]*/, '')
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

const uploadedMedia = Object.entries(mediaModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, url], index) => ({
    url,
    caption: toCaption(path) || 'Untitled',
    ref: `No. ${String(index + 1).padStart(2, '0')}`,
  }))

const PLACEHOLDER_ITEMS = [
  { caption: 'Add media — e.g. a robotics lab or workshop photo', ref: 'ARCHIVE REF. 2024-01' },
  { caption: 'Add media — e.g. a YouTube lecture still or thumbnail', ref: 'ARCHIVE REF. 2024-02' },
  { caption: 'Add media — e.g. a project build or demo photo', ref: 'ARCHIVE REF. 2024-03' },
]

export default function Media() {
  const hasUploads = uploadedMedia.length > 0

  return (
    <section id="media" className="py-16 sm:py-20 border-b border-black/10">
      <div className="mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl font-normal">Media</h2>
      </div>

      {hasUploads ? (
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-6 sm:gap-8">
          {uploadedMedia.map((item, index) => (
            <figure
              key={item.url}
              className={`relative mb-6 sm:mb-8 break-inside-avoid bg-white border border-black/15 p-2 pb-3 shadow-sm transition-transform duration-300 hover:z-10 hover:scale-105 hover:rotate-0 hover:shadow-xl ${ROTATIONS[index % ROTATIONS.length]}`}
            >
              <div className="overflow-hidden bg-black/5">
                <img
                  src={item.url}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="flex items-baseline justify-between gap-2 text-[10px] pt-2">
                <span className="font-serif italic text-black truncate">{item.caption}</span>
                <span className="font-mono text-black/40 shrink-0">{item.ref}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          {PLACEHOLDER_ITEMS.map((item) => (
            <figure key={item.caption}>
              <div className="aspect-[4/5] border border-dashed border-black/25 overflow-hidden mb-3 flex flex-col items-center justify-center gap-2 text-black/30 p-4">
                <ImagePlaceholderIcon />
                <span className="text-[10px] uppercase tracking-widest text-center">{item.caption}</span>
              </div>
              <figcaption className="flex items-baseline justify-between text-xs pt-1 border-t border-black/10">
                <span className="font-serif italic text-black/50">Untitled</span>
                <span className="font-mono text-black/40">{item.ref}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  )
}
