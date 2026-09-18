import { MailIcon } from './icons'

const CONTACT_EMAIL = 'evanskwasi17@gmail.com'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl font-normal">Contact</h2>
      </div>

      <div className="pt-2 flex flex-wrap items-center">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="bg-black text-white px-6 py-3 border border-black text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
        >
          <MailIcon />
          <span>{CONTACT_EMAIL}</span>
        </a>
      </div>
    </section>
  )
}
