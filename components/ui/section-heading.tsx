type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="max-w-3xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
        {eyebrow}
      </p>
      <h2 id={id} className="font-[var(--display)] text-4xl font-semibold tracking-[-0.065em] text-[var(--ink)] sm:text-6xl">
        {title}
      </h2>
      {description ? <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">{description}</p> : null}
    </header>
  );
}
