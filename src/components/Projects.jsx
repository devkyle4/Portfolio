const PROJECTS = [
  {
    title: 'iComplex Shop',
    meta: 'icomplex.tlsgh.com',
    description:
      'A retail POS and inventory management platform built to streamline sales, product management, and stock tracking.',
    href: 'https://icomplex.tlsgh.com',
  },
  {
    title: 'Nsu Pa ERP',
    meta: 'icomplex.tlsgh.com',
    description:
      'An enterprise resource planning platform designed to digitize and manage water distribution operations.',
    href: 'https://icomplex.tlsgh.com',
  },
  {
    title: 'Midpoint',
    meta: 'midpoint.tlsgh.com',
    description:
      'A community-driven news and media platform bringing together content across technology, business, health, sports, entertainment, and more.',
    href: 'https://midpoint.tlsgh.com',
  },
  {
    title: 'PDFMaster',
    meta: 'icomplex.tlsgh.com',
    description:
      'A browser-based document utility for editing and merging PDFs, as well as resizing and converting images.',
    href: 'https://icomplex.tlsgh.com',
  },
  {
    title: 'Invoice Generator',
    meta: 'icomplex.tlsgh.com',
    description: 'A lightweight web application for creating and generating digital invoices.',
    href: 'https://icomplex.tlsgh.com',
  },
  {
    title: 'Akan (Twi) TTS & ASR',
    description:
      'Neural text-to-speech and automatic speech recognition systems for Akan (Twi), built to expand digital inclusion for a low-resource language through natural speech synthesis and transcription.',
  },
  {
    title: 'Obaapayin',
    description:
      'A maternal health chatbot for Twi-speaking mothers, supporting both audio input and output so users can ask health questions and receive guidance by voice.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-black/10">
      <div className="mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl font-normal">Projects</h2>
      </div>

      <div className="divide-y divide-black/15 border-t border-b border-black/15">
        {PROJECTS.map((project) => (
          <article key={project.title} className="py-6 sm:py-8 group hover:opacity-75 transition-opacity">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl font-normal">{project.title}</h3>
                {project.meta && <span className="text-xs font-mono text-black/50 block mt-1">{project.meta}</span>}
              </div>
              <div className="md:col-span-5">
                <p className="text-sm text-black/75 leading-relaxed">{project.description}</p>
              </div>
              <div className="md:col-span-3 text-left md:text-right pt-2 md:pt-0">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs uppercase tracking-widest font-semibold hover:opacity-60 transition-opacity"
                  >
                    <span>View Project</span>
                    <span className="ml-1 text-base leading-none">→</span>
                  </a>
                ) : (
                  <span className="inline-block text-xs uppercase tracking-widest font-semibold text-black/30 cursor-default">
                    No link yet
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
