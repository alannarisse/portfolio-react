import { useEffect, useState } from "react";
import type { PersonalProject } from "@/data/portfolio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ProjectCard({
  project,
  kind = "project",
}: {
  project: PersonalProject;
  kind?: "project" | "client";
}) {
  const visitLabel = kind === "client" ? "Visit website" : "Visit project";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const initialY = window.scrollY;
    const onScroll = () => {
      if (Math.abs(window.scrollY - initialY) > 100) setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <article className="card-lift group flex flex-col overflow-hidden rounded-xl border border-border bg-card">
        <DialogTrigger asChild>
          <button
            type="button"
            className="flex flex-1 flex-col text-left"
            aria-label={`More about ${project.name}`}
          >
            <img
              src={project.img}
              alt=""
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-top"
            />
            <span className="flex flex-1 flex-col p-5">
              <span
                role="heading"
                aria-level={kind === "client" ? 4 : 3}
                className="font-display font-semibold group-hover:text-primary"
              >
                {project.name}
              </span>
              <span className="mt-1 flex-1 text-sm text-muted-foreground">{project.desc}</span>
              <span className="mt-4 text-sm text-primary">
                {kind === "client" ? "Client details" : "Project details"} →
              </span>
            </span>
          </button>
        </DialogTrigger>
        <ul className="flex flex-wrap gap-1.5 px-5 pb-5">
          {project.stack.map((item) => (
            <li key={item} className="chip text-xs">
              {item}
            </li>
          ))}
        </ul>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mx-5 mb-5 text-sm text-primary underline"
          >
            {visitLabel} ↗<span className="sr-only">: {project.name} (opens in a new tab)</span>
          </a>
        )}
      </article>
      <DialogContent className="max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-xl motion-reduce:animate-none">
        <aside className="space-y-5">
          <DialogTitle className="pr-8 font-display text-2xl">{project.name}</DialogTitle>
          <DialogDescription>{project.details}</DialogDescription>
          <img
            src={project.img}
            alt={`${project.name} preview`}
            className="max-h-[50dvh] w-full rounded-lg border border-border object-contain"
          />
          <ul
            className="flex flex-wrap gap-2"
            aria-label={kind === "client" ? "Skills and tools" : "Technologies"}
          >
            {project.stack.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex"
            >
              {visitLabel} ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </aside>
      </DialogContent>
    </Dialog>
  );
}
