const PROJECTS = [
  {
    title: 'Autonomous Pick-and-Place Robotic Arm',
    meta: '2024 — Harcourt University Robotics Lab',
    description:
      'A 4-axis robotic arm built to demonstrate closed-loop control and sensor fusion, used as a teaching rig for mechatronics students working through kinematics and PID tuning.',
    href: '#',
  },
  {
    title: 'Solar-Assisted HVAC Efficiency Study',
    meta: '2023 — Independent research',
    description:
      'A thermodynamics-driven investigation into hybrid solar/HVAC systems for campus buildings, modelling load reduction and payback period under variable climate conditions.',
    href: '#',
  },
  {
    title: 'Modular Mechatronics Teaching Rig',
    meta: '2023 — Harcourt University',
    description:
      'A reconfigurable benchtop apparatus for demonstrating control systems concepts to undergraduate classes, built to accompany the YouTube course series.',
    href: '#',
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
                <span className="text-xs font-mono text-black/50 block mt-1">{project.meta}</span>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm text-black/75 leading-relaxed">{project.description}</p>
              </div>
              <div className="md:col-span-3 text-left md:text-right pt-2 md:pt-0">
                <a
                  href={project.href}
                  className="inline-flex items-center text-xs uppercase tracking-widest font-semibold hover:opacity-60 transition-opacity"
                >
                  <span>View Project</span>
                  <span className="ml-1 text-base leading-none">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
