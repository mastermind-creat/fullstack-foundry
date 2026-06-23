import Button from './components/ui/Button.jsx'
import Badge from './components/ui/Badge.jsx'
import SectionHeading from './components/ui/SectionHeading.jsx'

const stats = [
  { value: '120+', label: 'Enterprise customers' },
  { value: '99.98%', label: 'Service reliability' },
  { value: '4.9/5', label: 'Average customer rating' },
]

const cards = [
  {
    title: 'Design systems that scale',
    description: 'Create consistent product experiences with a reusable component library and harmonized visual language.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Enterprise-ready performance',
    description: 'Fast load times, accessible markup, and crisp UI across desktop and mobile experiences.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Strategic product positioning',
    description: 'Highlight value clearly with refined typography, premium spacing, and strong visual hierarchy.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 3l8 7-8 7-8-7 8-7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function App() {
  return (
    <main className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(79,110,247,0.24),_transparent_45%)]" />
      <div className="section-padding container-wide relative">
        <Badge className="mb-8">Professional UX & brand-ready interface</Badge>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] xl:gap-20">
          <section>
            <SectionHeading
              eyebrow="Fullstack Foundry"
              title="Modern interfaces crafted for premium digital brands"
              description="Build a polished website with an elevated visual system, refined layout, and thoughtful detail. The result is a confident, professional experience that inspires trust and converts visitors."
            />

            <p className="max-w-2xl text-slate-400 leading-8 text-lg">
              Launch a modern website with premium spacing, intentional information hierarchy, and polished micro-interactions. This design is tailored for business presentations, product launches, and executive audiences.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <Button variant="primary" size="lg">Request a demo</Button>
              <Button variant="outline" size="lg">See pricing</Button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.9)]">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="rounded-[2rem] border border-white/10 bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/50 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-xs uppercase tracking-[0.32em] text-brand-300">Market-ready</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">A premium digital presence from first impression to final interaction</h3>
              <p className="mt-4 text-slate-400 leading-7">
                A refined homepage built to support enterprise product storytelling and high-quality brand communication.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {cards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-lg shadow-slate-950/20">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-300">
                    {card.icon}
                  </div>
                  <h4 className="mt-4 text-xl font-semibold text-white">{card.title}</h4>
                  <p className="mt-2 text-slate-400 leading-7">{card.description}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
