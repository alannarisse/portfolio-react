import { createFileRoute } from "@tanstack/react-router";
import { featuredJobs, links, otherJobs, projects, skills, talks, writing } from "@/data/portfolio";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";
import { FeaturedJob } from "@/components/portfolio/FeaturedJob";

const TITLE = "Alanna Risse — QA Engineer & Software Engineer in Test";
const DESC = "Portland-based QA engineer and SDET with 15+ years of web development, accessibility, and Playwright test automation experience.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [["work", "Work"], ["projects", "Projects"], ["teaching", "Teaching"], ["writing", "Writing"], ["contact", "Contact"]];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">{title}</h2>
      <div className="mt-12">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display font-semibold">Alanna Risse<span className="text-primary">.</span></a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {nav.map(([id, label]) => <a key={id} href={`#${id}`} className="hover:text-foreground">{label}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href={links.resume} target="_blank" rel="noreferrer" className="btn-primary text-sm">Resume</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-glow">
          <div className="mx-auto max-w-6xl px-6 pb-24 pt-28 md:pt-36">
            <p className="eyebrow">Remote, Portland, Oregon · Open to roles</p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              QA Engineer &amp; Software Engineer <span className="text-primary">in Test</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              I'm Alanna Risse. I've spent 15+ years building and shipping websites for brands like West Elm and Timbuk2 —
              now I focus on breaking them before users do: test automation with Playwright, accessibility audits, and
              release confidence.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={links.resume} target="_blank" rel="noreferrer" className="btn-primary">View resume</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn</a>
              <a href={links.github} target="_blank" rel="noreferrer" className="btn-ghost">GitHub</a>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
            {skills.map((g) => (
              <div key={g.group}>
                <h3 className="eyebrow">{g.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">{g.items.map((i) => <li key={i} className="chip">{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <Section id="work" eyebrow="Professional work" title="Selected client work">
          <div className="space-y-10">
            {featuredJobs.map((j, i) => <FeaturedJob key={j.id} job={j} reverse={i % 2 === 1} />)}
          </div>
          <h3 className="mt-20 font-display text-2xl font-semibold">More clients</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherJobs.map((j) => {
              const inner = (
                <>
                  <img src={j.img} alt={j.name} loading="lazy" className="aspect-[4/3] w-full rounded-lg border border-border object-cover object-top transition group-hover:border-primary" />
                  <h4 className="mt-3 font-display font-medium">{j.name}</h4>
                  <p className="text-sm text-muted-foreground">{j.desc}</p>
                </>
              );
              return j.url
                ? <a key={j.name} href={j.url} target="_blank" rel="noreferrer" className="group">{inner}</a>
                : <div key={j.name} className="group">{inner}</div>;
            })}
          </div>
        </Section>

        <Section id="projects" eyebrow="Personal projects" title="Things I've built lately">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="card-lift group flex flex-col overflow-hidden rounded-xl border border-border bg-card">
                <img src={p.img} alt={p.name} loading="lazy" className="aspect-[4/3] w-full object-cover object-top" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display font-semibold group-hover:text-primary">{p.name}</h3>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">{p.stack.map((s) => <li key={s} className="chip text-xs">{s}</li>)}</ul>
                </div>
              </a>
            ))}
          </div>
        </Section>

        <Section id="teaching" eyebrow="Teaching & speaking" title="Sharing what I know">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-muted-foreground">I teach interaction design at Portland State University. Here's a reel of student work.</p>
              <div className="mt-6 aspect-video overflow-hidden rounded-xl border border-border">
                <iframe src="https://player.vimeo.com/video/792109301" title="Student work reel" className="h-full w-full" allow="fullscreen; picture-in-picture" />
              </div>
            </div>
            <div className="space-y-6">
              {talks.map((t) => (
                <figure key={t.title} className="flex gap-5 rounded-xl border border-border bg-card p-4">
                  <img src={t.img} alt={t.title} loading="lazy" className="h-28 w-40 shrink-0 rounded-lg object-cover" />
                  <figcaption>
                    <p className="font-display font-medium">{t.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{t.venue}</p>
                  </figcaption>
                </figure>
              ))}
              <blockquote className="rounded-xl border-l-2 border-primary bg-card p-6">
                <p className="italic">"Thanks again for mentoring me through the Thinkful pre-work. I recently graduated from General Assembly's software engineering program and thought about how helpful you were at the beginning of my journey."</p>
                <footer className="mt-3 text-sm text-muted-foreground">— Sarah Moe, 2021</footer>
              </blockquote>
            </div>
          </div>
        </Section>

        <Section id="writing" eyebrow="Writing" title="From my Substack">
          <div className="grid gap-6 md:grid-cols-2">
            {writing.map((w) => (
              <a key={w.title} href={w.url} target="_blank" rel="noreferrer" className="card-lift group rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-xl font-semibold group-hover:text-primary">{w.title}</h3>
                <p className="mt-2 text-muted-foreground">{w.desc}</p>
                <span className="mt-4 inline-block text-sm text-primary">Read →</span>
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer id="contact" className="scroll-mt-24 border-t border-border bg-card/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Let's make your releases <span className="text-primary">boring</span>.</h2>
          <p className="mt-4 max-w-xl text-muted-foreground">Hiring for QA or SDET? I'd love to talk.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn-primary">Message me on LinkedIn</a>
            <a href={links.resume} target="_blank" rel="noreferrer" className="btn-ghost">Resume</a>
          </div>
          <div className="mt-16 flex flex-wrap gap-6 border-t border-border pt-8 text-sm text-muted-foreground">
            {[["GitHub", links.github], ["LinkedIn", links.linkedin], ["Instagram", links.instagram], ["Substack", links.substack], ["Mystery Portal", links.portal]].map(([l, h]) => (
              <a key={l} href={h} target="_blank" rel="noreferrer" className="hover:text-primary">{l}</a>
            ))}
            <span className="ml-auto">© {new Date().getFullYear()} Alanna Risse</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
