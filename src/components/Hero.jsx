import {
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
  GoogleScholarIcon,
  GitHubIcon,
  ArrowOutwardIcon,
  PersonPlaceholderIcon,
} from './icons'

// Drop a photo into src/assets/profile/ — it becomes the portrait here.
// See src/assets/profile/README.md for details.
const profileModules = import.meta.glob('../assets/profile/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}', {
  eager: true,
  import: 'default',
})
const sortedProfileEntries = Object.entries(profileModules).sort(([a], [b]) => a.localeCompare(b))
const profilePhoto = sortedProfileEntries.length > 0 ? sortedProfileEntries[0][1] : null

const SOCIALS = [
  { label: 'LinkedIn', href: '#', Icon: LinkedInIcon, color: '#0A66C2' },
  { label: 'X (Twitter)', href: '#', Icon: XIcon, color: '#000000' },
  { label: 'YouTube Channel', href: '#', Icon: YouTubeIcon, color: '#FF0000' },
  { label: 'Google Scholar', href: '#', Icon: GoogleScholarIcon, color: '#4285F4' },
  { label: 'GitHub', href: '#', Icon: GitHubIcon, color: '#181717' },
]

export default function Hero() {
  return (
    <section id="hero" className="border-b border-black/10 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          {profilePhoto ? (
            <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border border-black bg-white">
              <img
                src={profilePhoto}
                alt="Evans Kwasi portrait"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border border-dashed border-black/25 bg-white flex flex-col items-center justify-center gap-1 text-black/30">
              <PersonPlaceholderIcon />
              <span className="text-[10px] uppercase tracking-widest px-6 text-center">Add photo</span>
            </div>
          )}
          <p className="mt-4 font-serif text-xs italic text-black/70 max-w-xs">
            Evans Kwasi — Computer Science Researcher &amp; Developer.
          </p>
        </div>

        <div className="lg:col-span-8 flex flex-col justify-start space-y-6">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-normal">Evans Kwasi</h1>
            <p className="mt-1 text-xs font-medium tracking-widest uppercase text-black/60">
              MSc Computer Science
            </p>
          </div>

          <p className="font-sans text-black/80 text-base sm:text-lg leading-relaxed font-light max-w-2xl">
            I’m a software developer, researcher, and curious builder who enjoys turning ideas into useful things. 
            I’m passionate about AI, education, emerging technologies, and solving real-world problems through technology. 
            Along the way, I’ve dabbled in areas such as persuasive design, human-computer interaction (HCI), speech technologies including ASR and TTS, and large language models (LLMs).
            When I’m not building or researching, I enjoy learning, experimenting with new ideas, and, most importantly, building communities and bringing people together around shared ideas and opportunities.
          </p>

          <div className="pt-2 flex items-center gap-3">
            {SOCIALS.map(({ label, href, Icon, color }) => (
              <a
                key={label}
                aria-label={label}
                href={href}
                style={{ '--brand': color }}
                className="social-btn w-9 h-9 rounded-full border-2 bg-white text-black flex items-center justify-center"
              >
                <Icon />
              </a>
            ))}
            <a
              href="#"
              className="inline-flex items-center gap-1 text-xs font-medium tracking-wider uppercase hover:opacity-60 transition-opacity pl-3"
            >
              <span>CV (PDF)</span>
              <ArrowOutwardIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
