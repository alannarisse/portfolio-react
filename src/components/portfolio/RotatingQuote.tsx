import { useEffect, useState } from "react";
import { testimonials } from "@/data/portfolio";

export function RotatingQuote() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPaused(preference.matches);
    const onChange = () => {
      if (preference.matches) setPaused(true);
    };
    preference.addEventListener("change", onChange);
    return () => preference.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || hovered) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 15_000);
    return () => window.clearInterval(timer);
  }, [paused, hovered]);

  const quote = testimonials[index]!;
  const step = (direction: number) => {
    setPaused(true);
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section
      aria-label="Testimonials"
      aria-roledescription="carousel"
      className="rounded-xl border-l-2 border-primary bg-card p-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(true);
      }}
    >
      <div aria-live={paused ? "polite" : "off"} aria-atomic="true">
        <blockquote>
          <p className="whitespace-pre-line italic">“{quote.quote}”</p>
          <footer className="mt-3 text-sm text-muted-foreground">— {quote.by}</footer>
        </blockquote>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous quote"
          className="btn-ghost"
        >
          ← Previous
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Next quote" className="btn-ghost">
          Next →
        </button>
        <button type="button" onClick={() => setPaused((value) => !value)} className="btn-ghost">
          {paused ? "Play quotes" : "Pause quotes"}
        </button>
        <span className="text-muted-foreground">
          {index + 1} / {testimonials.length}
        </span>
      </div>
    </section>
  );
}
