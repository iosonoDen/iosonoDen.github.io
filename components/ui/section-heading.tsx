type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="max-w-3xl">
      <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--accent-strong)] sm:mb-4 sm:text-xs sm:tracking-[0.18em]">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="text-[2.05rem] font-semibold leading-[1.08] tracking-[-0.05em] text-[var(--ink)] sm:text-6xl sm:leading-none sm:tracking-[-0.065em]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-[var(--muted)] sm:mt-6 sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
