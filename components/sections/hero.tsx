'use client';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { CountUp } from '@/components/ui/count-up';
import { profile } from '@/content/profile';

export function Hero() {
  return (
    <section
      className="relative min-h-[calc(100svh-4rem)] overflow-visible py-12 sm:py-14 md:flex md:items-center lg:py-10"
      aria-labelledby="hero-title"
    >
      <Container className="grid items-stretch gap-8 overflow-visible md:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] md:gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,34rem)] lg:gap-14 xl:gap-20">
        <div>
          <p className="whitespace-pre-line text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.18em] text-[var(--accent-strong)] sm:text-[0.72rem] sm:leading-6">
            {profile.location}
          </p>
          <p className="mt-6 text-[1.05rem] text-[var(--muted)] sm:text-lg">
            Hello, I&apos;m
          </p>
          <h1
            id="hero-title"
            className="mt-1 text-6xl font-semibold leading-[0.86] tracking-[-0.07em] text-[var(--ink)] sm:text-7xl lg:text-[clamp(4.5rem,7.6vw,7.25rem)]"
          >
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-[34rem] text-[1.05rem] leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            {profile.lede}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#work">Projects</Button>
            <Button href={`mailto:${profile.email}`} variant="secondary">
              E-mail me
            </Button>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-[var(--line)] pt-8">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="whitespace-nowrap text-[0.8rem] font-bold uppercase leading-5 tracking-[0.12em] text-[var(--muted)]">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-[2.75rem] font-semibold leading-none tracking-[-0.06em] text-[var(--ink)] sm:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[28rem] md:mx-0 md:h-full md:max-w-none">
          <div className="relative aspect-[767/895] overflow-hidden rounded-[1.25rem] bg-[#c2410c] md:absolute md:inset-x-0 md:-bottom-8 md:-top-8 md:aspect-auto">
            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              fill
              priority
              unoptimized
              sizes="(min-width: 1024px) 544px, 90vw"
              className="object-cover object-center [image-rendering:-webkit-optimize-contrast]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
