const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const skills = [
  'React',
  'React Native',
  'Node.js',
  'Python',
  'FastAPI',
  'MongoDB',
  'PostgreSQL',
  'SQLite',
  'AWS',
  'WebSockets',
  'OpenAI API',
  'Whisper',
  'Git',
  'Tailwind CSS',
];

const experience = [
  {
    title: 'Scientific Research Student',
    organization: 'CNPq / UFPI',
    period: 'Sep 2025 - Present',
    description:
      'Research on performance evaluation of optical circuit reallocation algorithms based on machine learning.',
  },
  {
    title: 'Scientific Research Student',
    organization: 'CNPq / UFPI',
    period: 'Oct 2024 - Sep 2025',
    description:
      'Development and evaluation of computational methods to improve classroom engagement through smartphone-based educational solutions.',
  },
  {
    title: 'Scientific Research Student',
    organization: 'CNPq / UFPI',
    period: 'Mar 2024 - Sep 2024',
    description:
      'Eye-tracking research using a residential computing device.',
  },
  {
    title: 'Freelance Full Stack Developer',
    organization: 'Independent',
    period: '2024 - Present',
    description:
      'Development of custom digital solutions involving frontend, backend, databases, and integrations.',
  },
];

const projects = [
  {
    title: 'EngajEdu',
    featured: true,
    description:
      'Educational engagement platform built as an MVP for scientific research supported by CNPq, designed to make classroom activities more interactive, measurable, and motivating.',
    stack: ['React', 'React Native', 'Node.js', 'MongoDB', 'AWS', 'WebSockets', 'Whisper'],
    impact:
      'Combined web, mobile, real-time session control, voice-assisted quiz generation, and gamification into a single AWS-hosted product for classroom engagement.',
    role: 'Full Stack Developer across web, mobile, backend, and integrations.',
    repo: 'https://github.com/janjo1413',
    cta: 'View GitHub Profile',
  },
  {
    title: 'Legal Calculation System',
    featured: false,
    description:
      'Full-stack web system for legal calculations in FUNDEF cases, using Excel as the calculation engine and validating SELIC rates against the Brazilian Central Bank API.',
    stack: ['React', 'FastAPI', 'Python', 'SQLite', 'xlwings', 'Tailwind CSS'],
    impact:
      'Automated spreadsheet-driven workflows, preserved calculation history, and reduced manual validation effort with API-backed SELIC checks and monthly update logic.',
    role: 'Full Stack Developer delivering the frontend, backend, spreadsheet integration, and persistence layer.',
    repo: 'https://github.com/janjo1413/SelicCalculatorMVP',
    cta: 'View Repository',
  },
  {
    title: 'Client Portfolio Website',
    featured: false,
    description:
      'Responsive portfolio website built for a client with a clean content structure, polished presentation, and strong emphasis on personal branding.',
    stack: ['React', 'Tailwind CSS', 'Responsive UI'],
    impact:
      'Delivered a professional and maintainable web presence focused on clarity, mobile usability, and a refined visual identity.',
    role: 'Frontend-focused development and implementation for a client-facing website.',
    repo: 'https://github.com/DudaGomes/bona-mama-website',
    cta: 'View Repository',
  },
];

const contactLinks = [
  {
    label: 'Email',
    value: 'joao.gabriel.queiroz.2019@gmail.com',
    href: 'mailto:joao.gabriel.queiroz.2019@gmail.com',
  },
  {
    label: 'Phone',
    value: '+55 86 99444-7102',
    href: 'tel:+5586994447102',
  },
  {
    label: 'GitHub',
    value: 'github.com/janjo1413',
    href: 'https://github.com/janjo1413',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/joao-gabriel-miranda-queiroz',
    href: 'https://www.linkedin.com/in/jo%C3%A3o-gabriel-miranda-queiroz-9319132a0/?skipRedirect=true',
  },
];

const sectionTitleClass =
  'text-sm font-semibold uppercase tracking-[0.28em] text-brand-300';

function App() {
  return (
    <div className="min-h-screen bg-midnight-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-sm font-extrabold uppercase tracking-[0.3em] text-white">
            JGMQ
          </a>
          <nav aria-label="Primary navigation" className="hidden gap-6 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-brand-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-hero-glow">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-brand-300">
                Full Stack Developer | Teresina, Piauí, Brazil
              </p>
              <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                Building reliable digital products across web, mobile, backend, and AI integrations.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I am João Gabriel Miranda Queiroz, a Computer Science student at UFPI in the 6th
                semester, fluent in English, with research and freelance experience focused on
                turning complex problems into practical software solutions.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://github.com/janjo1413"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
                >
                  View GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-miranda-queiroz-9319132a0/?skipRedirect=true"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-brand-400 hover:bg-brand-500/10 hover:text-brand-200"
                >
                  Connect on LinkedIn
                </a>
              </div>
              <div className="mt-8 inline-flex w-fit items-center rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-200 shadow-card">
                Open to internship opportunities in Full Stack, Frontend, Backend, and Mobile Development
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-6 rounded-[2rem] bg-brand-500/20 blur-3xl" aria-hidden="true" />
              <article className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
                <div className="flex items-center gap-5">
                  <img
                    src="https://avatars.githubusercontent.com/u/163935732?s=400&u=f74d8a69ccd90979a57b81acaf22717c026fafdc&v=4"
                    alt="Portrait of João Gabriel Miranda Queiroz"
                    className="h-24 w-24 rounded-3xl object-cover ring-4 ring-brand-400/20"
                  />
                  <div>
                    <p className="text-2xl font-extrabold text-white">
                      João Gabriel Miranda Queiroz
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-400">Computer Science | UFPI</p>
                    <p className="mt-3 text-sm font-semibold text-brand-300">
                      Fluent English | Research + Product Engineering
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Focus</p>
                    <p className="mt-2 text-sm font-semibold text-white">Full Stack Development</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Research</p>
                    <p className="mt-2 text-sm font-semibold text-white">3 Scientific Projects</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Delivery</p>
                    <p className="mt-2 text-sm font-semibold text-white">Web, Mobile, Backend, AI</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Experience</p>
                    <p className="mt-2 text-sm font-semibold text-white">Freelance + Research</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className={sectionTitleClass}>About</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Research discipline paired with practical engineering execution.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                I combine scientific research, software engineering, and strong problem-solving to
                design products that are technically solid and useful in real scenarios. My work
                spans frontend, backend, databases, mobile development, cloud infrastructure, and AI
                integrations.
              </p>
              <p>
                Through CNPq and UFPI research projects, I have worked on educational technology,
                eye-tracking, and machine learning-related performance evaluation. In parallel, I
                build freelance solutions with a focus on maintainable architecture, responsive user
                experiences, and dependable backend workflows.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur sm:p-10">
            <p className={sectionTitleClass}>Skills</p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Technologies I use to ship end-to-end products.
              </h2>
              <p className="max-w-xl text-base leading-7 text-slate-300">
                Balanced across interfaces, APIs, infrastructure, data storage, real-time systems,
                and AI-enabled product features.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-brand-400 hover:bg-brand-500/10 hover:text-brand-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-4">
            <p className={sectionTitleClass}>Experience</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Research and development work grounded in measurable outcomes.
            </h2>
          </div>
          <div className="mt-10 grid gap-6">
            {experience.map((item) => (
              <article
                key={`${item.title}-${item.period}`}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-card transition hover:-translate-y-1"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
                      {item.organization}
                    </p>
                  </div>
                  <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300">
                    {item.period}
                  </p>
                </div>
                <p className="mt-4 text-base leading-7 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-4">
            <p className={sectionTitleClass}>Featured Projects</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Selected work with EngajEdu as the flagship product.
            </h2>
          </div>

          <div className="mt-10 grid gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`overflow-hidden rounded-[2rem] border ${
                  project.featured
                    ? 'border-brand-400/40 bg-gradient-to-br from-brand-600/20 via-midnight-850 to-midnight-900 text-white shadow-soft'
                    : 'border-white/10 bg-white/5 text-white shadow-card'
                }`}
              >
                <div className="grid gap-8 p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-extrabold">{project.title}</h3>
                      {project.featured ? (
                        <span className="rounded-full bg-brand-400/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-brand-100">
                          Featured
                        </span>
                      ) : null}
                    </div>
                    <p
                      className={`mt-5 text-lg leading-8 ${
                        project.featured ? 'text-slate-200' : 'text-slate-300'
                      }`}
                    >
                      {project.description}
                    </p>
                    <p
                      className={`mt-5 text-base leading-7 ${
                        project.featured ? 'text-slate-200' : 'text-slate-300'
                      }`}
                    >
                      <span className="font-semibold text-current">Role:</span> {project.role}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                          project.featured ? 'text-brand-100' : 'text-slate-400'
                        }`}
                      >
                        Stack
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className={`rounded-full px-3 py-1 text-sm font-semibold ${
                              project.featured
                                ? 'bg-white/10 text-white'
                                : 'border border-white/10 bg-white/5 text-slate-200'
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                          project.featured ? 'text-brand-100' : 'text-slate-400'
                        }`}
                      >
                        Impact
                      </p>
                      <p
                      className={`mt-3 text-base leading-7 ${
                          project.featured ? 'text-slate-200' : 'text-slate-300'
                        }`}
                      >
                        {project.impact}
                      </p>
                    </div>

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                        project.featured
                          ? 'bg-white text-slate-950 hover:bg-brand-50'
                          : 'bg-brand-500 text-white hover:bg-brand-400'
                      }`}
                    >
                      {project.cta}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur sm:p-10">
            <p className={sectionTitleClass}>Contact</p>
            <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_0.95fr]">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Let&apos;s talk about internship roles, product ideas, or collaboration.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  I am actively looking for internship opportunities in software engineering and
                  open to conversations with recruiters, research groups, and teams building modern
                  digital products.
                </p>
              </div>

              <div className="grid gap-4">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-brand-400 hover:bg-brand-500/10"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
