const PUBLICATIONS = [
  {
    title:
      'User Modelling and Adaptation in Immersive Preventive Health Interventions: A Systematic Review and Evidence Map.',
    authors: 'Mensah, M. A., Kwasi, E., Abdulmawjood, M., & Oyibo, K.',
    source:
      'Proceedings of the 34th ACM Conference on User Modeling, Adaptation and Personalization, pp. 263–272 (June 2026).',
    href: '#',
  },
  {
    title: 'Neural Machine Translation for Maternal Health Communication in Low-Resource Language: Akan-English.',
    authors:
      'Wiafe, I., Wiafe-Akenten, A. N., Kwasi, E., Ekpezu, O. A., Appati, J. K., Odame, G., Yeboah, F., Mensah, M. A., Abdulai, J.-D., & Winful, F. B. P.',
    source: 'Language Resources and Evaluation [Special Issue: Less-Resourced Languages].',
    status: 'under-review',
  },
  {
    title: 'A Parallel English–Akan Maternal Health Dataset to Support Machine Translation and Text-to-Speech Systems.',
    authors:
      'Wiafe, I., Ekpezu, A. O., Winful, F. B. P., Wiafe-Akenten, A. N., Mensah, M. A., Semanyoh, N., Salihs, S. A., Kwasi, E., Appati, J. K., Odame, G., Osei, K. O., & Yeboah, F. E.',
    source: 'Data in Brief, Elsevier.',
    status: 'under-review',
  },
  {
    title: 'Developing an Akan Text-to-Speech System: Corpus Creation, Neural Modeling, and Digital Inclusion in Ghana.',
    authors: 'Wiafe, I., Kwasi, E., et al.',
    source: 'SOLCON V, University of Ghana (2025).',
    status: 'presented',
  },
  {
    title: 'AI-Powered Image Description in Akan and Ewe.',
    authors: 'Bekor, C., Wiafe, I., & Kwasi, E.',
    source: 'SOLCON V, University of Ghana (2025).',
    status: 'presented',
  },
  {
    title: 'Detailed Report on Diabetes Explainability: Interpretable ML on a Ghanaian Clinical Dataset using SHAP.',
    authors: 'Kwasi, E., et al.',
    source: 'Independent research report.',
    href: '#',
  },
]

const STATUS_LABEL = {
  'under-review': 'Under review',
  presented: 'Presented',
}

export default function Publications() {
  return (
    <section id="publications" className="py-16 sm:py-20 border-b border-black/10">
      <div className="mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl font-normal">Publications & Conferences</h2>
      </div>

      <div className="space-y-10 max-w-4xl">
        {PUBLICATIONS.map((pub) => (
          <article key={pub.title}>
            <h3 className="text-base sm:text-lg font-normal leading-snug">{pub.title}</h3>
            <p className="text-sm text-black/75 mt-1">{pub.authors}</p>
            <p className="text-sm text-black/60 mt-0.5 italic">{pub.source}</p>
            <div className="mt-3">
              {pub.status ? (
                <span className="inline-block px-2.5 py-1 text-xs uppercase tracking-wider text-black/40 border border-black/20 rounded-sm cursor-default">
                  {STATUS_LABEL[pub.status]}
                </span>
              ) : (
                <a
                  href={pub.href}
                  className="inline-block px-2.5 py-1 text-xs uppercase tracking-wider text-black/50 border border-black/20 rounded-sm hover:border-black hover:text-black transition-colors"
                >
                  PDF
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
