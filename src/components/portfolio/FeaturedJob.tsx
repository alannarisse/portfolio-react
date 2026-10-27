import { useState } from "react";
import type { Job } from "@/data/portfolio";
import { DeviceMockup } from "./DeviceMockup";

export function FeaturedJob({ job, reverse }: { job: Job; reverse?: boolean }) {
  const [open, setOpen] = useState(false);
  const cs = job.caseStudy;
  return (
    <article className="rounded-2xl border border-border bg-card/60 p-6 md:p-10">
      <div className={`grid items-center gap-10 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <DeviceMockup desktop={job.desktop} mobile={job.mobile} alt={job.name} />
        <div>
          <h3 className="font-display text-3xl font-semibold">
            {job.url ? <a href={job.url} target="_blank" rel="noreferrer" className="hover:text-primary">{job.name}</a> : job.name}
          </h3>
          <p className="mt-4 text-muted-foreground">{job.tagline}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {job.stack.map((s) => <li key={s} className="chip">{s}</li>)}
          </ul>
          {cs && (
            <button onClick={() => setOpen((o) => !o)} aria-expanded={open} className="btn-ghost mt-6">
              {open ? "Close case study" : "Read case study"} <span aria-hidden>{open ? "↑" : "→"}</span>
            </button>
          )}
        </div>
      </div>
      {cs && open && (
        <div className="mt-10 grid animate-in fade-in slide-in-from-top-2 gap-8 border-t border-border pt-10 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <Block title="Overview">{cs.overview}</Block>
            <Block title="My role">{cs.role}</Block>
            <Block title="The challenge">{cs.challenge}</Block>
            <div>
              <h4 className="eyebrow">QA & testing approach</h4>
              <ul className="mt-3 space-y-2">
                {cs.approach.map((a) => <li key={a} className="flex gap-3"><span className="text-primary">✓</span>{a}</li>)}
              </ul>
            </div>
          </div>
          <aside className="rounded-xl border border-border bg-secondary/50 p-6">
            <h4 className="eyebrow">Results</h4>
            <ul className="mt-3 space-y-3">
              {cs.results.map((r) => <li key={r} className="font-display font-medium">{r}</li>)}
            </ul>
          </aside>
          <div className="grid gap-4 sm:grid-cols-2 md:col-span-3">
            {cs.gallery.map((g) => (
              <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className="w-full rounded-lg border border-border" />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="eyebrow">{title}</h4>
      <p className="mt-2 text-muted-foreground">{children}</p>
    </div>
  );
}
