export function DeviceMockup({ desktop, mobile, alt }: { desktop: string; mobile: string; alt: string }) {
  return (
    <div className="relative pb-10 pr-8">
      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-elevated">
        <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        </div>
        <img src={desktop} alt={`${alt} desktop`} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
      </div>
      <div className="absolute bottom-0 right-0 w-[26%] min-w-[84px] rounded-[1.25rem] border-4 border-secondary bg-background p-1 shadow-elevated">
        <div className="mx-auto mb-1 h-1 w-6 rounded-full bg-muted-foreground/40" />
        <img
          src={mobile}
          alt={`${alt} mobile`}
          loading="lazy"
          className="aspect-[9/19] w-full rounded-[0.9rem] object-cover object-top"
        />
      </div>
    </div>
  );
}
