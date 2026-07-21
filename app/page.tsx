import Image from "next/image";
import { AudienceCards } from "@/components/AudienceCards";
import { FAQ } from "@/components/FAQ";
import { LineIcon } from "@/components/LineIcon";
import { PhoneMockups } from "@/components/PhoneMockups";
import { RevealHeading } from "@/components/RevealHeading";
import { ServiceIncludes } from "@/components/ServiceIncludes";
import { SideNav } from "@/components/SideNav";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import {
  BOOKING_HREF,
  INSTAGRAM_HREF,
  services,
  testimonials,
} from "@/lib/content";

const serviceIcons = {
  "Online Training": "laptop",
  "In-Home Training": "home",
  "Nutrition Coaching": "leaf",
} as const;

const heroStats = [
  { value: "1,000+", label: "sessions coached" },
  { value: "3 yrs", label: "HS & collegiate S&C" },
  { value: "CPT, BS ExSci", label: "NASM Certified" },
];

const publishedTestimonials = testimonials.filter(
  (t) => !t.quote.toLowerCase().includes("placeholder"),
);

export default function Home() {
  return (
    <>
      <SideNav />

      <main className="pb-24 sm:pb-0">
        {/* HERO */}
        <section
          id="top"
          className="grid min-h-[100svh] lg:grid-cols-2"
        >
          <div className="relative h-[55svh] overflow-hidden lg:h-auto lg:min-h-[100svh]">
            <Image
              src="/images/kai-hero.png"
              alt="Kai Tranchant pulling a resistance sled in the gym"
              fill
              priority
              className="object-cover object-[center_28%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-background px-5 py-12 sm:px-10 sm:py-16 lg:px-20 lg:pt-28 lg:pb-20 xl:px-24">
            <div className="w-full max-w-3xl lg:max-w-none">
              <div className="animate-fade-up flex flex-wrap gap-2 sm:gap-2.5">
                <span className="rounded-full border border-accent/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent sm:px-3.5 sm:py-1.5 sm:text-xs sm:tracking-[0.14em]">
                  Hybrid comp prep
                </span>
                <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground sm:px-3.5 sm:py-1.5 sm:text-xs sm:tracking-[0.14em]">
                  College sport S&amp;C
                </span>
              </div>
              <RevealHeading
                as="h1"
                className="mt-6 w-full font-display text-[2.35rem] font-extrabold uppercase leading-[1.04] tracking-tight text-foreground sm:text-5xl sm:leading-[1.02] lg:text-6xl xl:text-7xl"
                staggerMs={16}
                eager
                segments={[
                  { text: "Peak" },
                  {
                    text: "when it counts.",
                    className: "block text-accent",
                  },
                ]}
              />
              <p className="animate-fade-up-delay-2 mt-7 max-w-2xl text-base leading-[1.6] text-muted sm:text-lg lg:max-w-3xl lg:text-xl">
                Strength, conditioning, and programming built backwards from
                your race, your season, or your combine. In person across the
                Twin Tiers or coached online.
              </p>
              <div className="animate-fade-up-delay-2 mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={BOOKING_HREF}
                  data-book-cta
                  className="btn-accent inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-accent-ink sm:text-base"
                >
                  Book your consult
                </a>
                <a
                  href={INSTAGRAM_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent sm:text-base"
                >
                  Watch training
                </a>
              </div>
              <p className="animate-fade-up-delay-2 mt-4 text-xs uppercase tracking-[0.18em] text-muted">
                First consult is free — talk goals, get a plan
              </p>
              <div className="animate-fade-up-delay-2 mt-10 grid grid-cols-3 divide-x divide-border border border-border">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="px-2.5 py-4 sm:px-5">
                    <p className="whitespace-nowrap font-display text-[13px] font-extrabold tracking-tight text-accent sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-muted sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="scroll-mt-24 bg-background px-5 py-20 sm:px-10 lg:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-border">
              <Image
                src="/images/kai-about-sled4.png"
                alt="Kai Tranchant pushing a resistance sled in the gym"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="pt-2 lg:pt-0">
              <RevealHeading
                as="h2"
                className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
                segments={[
                  {
                    text: "Strength & conditioning for people with a date on the calendar.",
                  },
                ]}
              />
              <div className="mt-8 space-y-5 text-base leading-[1.6] text-muted sm:text-lg">
                <p>
                  My name is Kai. I coach athletes who compete — hybrid
                  competition athletes (HYROX, DEKA, and races like them)
                  building toward a start line, and high school athletes
                  putting in off-season work to play in college. Programming
                  starts at your competition date and works back from there:
                  strength and power when there&apos;s room to push, speed and
                  conditioning as the date closes in, and load management so you
                  show up at your best.
                </p>
                <p>
                  Four years coaching, 1,000+ sessions — the last three focused
                  on sport-specific S&amp;C. CPT certified, finishing a
                  bachelor&apos;s in exercise science — and still the person who
                  gets weirdly excited about a clean hip hinge.
                </p>
                <p>
                  Not training for a competition? I still coach plenty of people
                  who just want to train with athletic standards —{" "}
                  <a
                    href="#not-competing"
                    className="text-foreground underline underline-offset-4 transition hover:text-accent"
                  >
                    more on that here
                  </a>
                  .
                </p>
              </div>
              <AudienceCards />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="scroll-mt-24 border-t border-border bg-surface px-5 py-20 sm:px-10 lg:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <RevealHeading
              as="h2"
              className="font-display max-w-[18ch] text-3xl font-bold leading-tight tracking-tight sm:max-w-xl sm:text-4xl lg:max-w-2xl lg:text-5xl"
              segments={[
                { text: "Programs & pricing." },
                {
                  text: "Built around your season.",
                  className: "block",
                },
              ]}
            />

            <div className="mt-14 space-y-10">
              {services.map((service) => (
                <article
                  key={service.name}
                  className="grid gap-6 border-t border-border pt-10 lg:grid-cols-[1fr_1fr]"
                >
                  <div>
                    <div className="mb-3">
                      <LineIcon
                        name={serviceIcons[service.name]}
                        className="h-5 w-5 text-accent"
                      />
                    </div>
                    <RevealHeading
                      as="h3"
                      className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
                      segments={[{ text: service.name }]}
                    />
                    <p className="mt-3 text-sm font-semibold text-accent">
                      {service.for}
                    </p>
                    <p className="mt-3 max-w-md leading-[1.6] text-muted">
                      {service.blurb}
                    </p>
                    <ServiceIncludes items={service.includes} />
                  </div>
                  <div className="space-y-3">
                    {service.tiers.map((tier) => {
                      const popular = "popular" in tier && tier.popular;
                      return (
                        <div
                          key={tier.label}
                          className={`flex items-baseline justify-between gap-4 border-b pb-3 ${
                            popular ? "border-accent/35" : "border-border"
                          }`}
                        >
                          <span className="flex flex-wrap items-center gap-2 text-sm text-muted sm:text-base">
                            {tier.label}
                            {popular ? (
                              <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-ink">
                                Most popular
                              </span>
                            ) : null}
                          </span>
                          <span className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                            {tier.price}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <a
                href={BOOKING_HREF}
                data-book-cta
                className="btn-accent inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink"
              >
                Book your consult
              </a>
            </div>
          </div>
        </section>

        {/* SOFTWARE */}
        <section
          id="software"
          className="scroll-mt-24 border-t border-border bg-background px-5 py-20 sm:px-10 lg:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <RevealHeading
                as="h2"
                className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
                segments={[
                  {
                    text: "Your whole program lives in SwiftCoach—software I built exactly for this.",
                  },
                ]}
              />
              <p className="mt-6 text-base leading-[1.6] text-muted sm:text-lg">
                Workouts, progress, nutrition, recovery, and health tracking in
                one dashboard — so you always know what to do next, and I can
                see how you&apos;re responding between sessions.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-foreground sm:text-base">
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  Custom workouts &amp; session logging
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  Progress &amp; health metrics in one dashboard
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  Nutrition tracking tied to your plan
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  Recovery tracking alongside your training
                </li>
              </ul>
            </div>
            <PhoneMockups />
          </div>
        </section>

        {/* RESULTS / SOCIAL PROOF */}
        <section
          id="results"
          className="scroll-mt-24 border-t border-border bg-surface px-5 py-20 sm:px-10 lg:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <TestimonialsCarousel
              items={publishedTestimonials}
              header={
                <RevealHeading
                  as="h2"
                  className="font-display max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
                  segments={[
                    { text: "Results that show up in sport and life." },
                  ]}
                />
              }
            />
            <div className="mt-10">
              <a
                href={INSTAGRAM_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                Watch training on Instagram →
              </a>
            </div>
          </div>
        </section>

        {/* NOT COMPETING */}
        <section
          id="not-competing"
          className="scroll-mt-24 border-t border-border bg-background px-5 py-14 sm:px-10 lg:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <RevealHeading
              as="h2"
              className="font-display max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              segments={[
                { text: "Not competing?" },
                {
                  text: "Same standards, your pace.",
                  className: "block text-muted",
                },
              ]}
            />
            <p className="mt-6 max-w-2xl text-base leading-[1.6] text-muted sm:text-lg">
              Plenty of my clients aren&apos;t chasing a start line — they&apos;re
              changing their body composition, coming back from an injury, or
              staying strong and capable as they age. The training runs on the
              same principles: progressive overload, movement quality, and a
              program that meets you where you are. No race required — just a
              reason.
            </p>
            <div className="mt-8">
              <a
                href={BOOKING_HREF}
                data-book-cta
                className="btn-accent inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink"
              >
                Book your consult
              </a>
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section
          id="locations"
          className="scroll-mt-24 border-t border-border bg-surface px-5 py-14 sm:px-10 lg:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <RevealHeading
              as="h2"
              className="font-display max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              segments={[
                {
                  text: "In your home around the Twin Tiers—or online from anywhere.",
                },
              ]}
            />
            <div className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <LineIcon name="home" className="mb-3 h-5 w-5 text-accent" />
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  In-home
                </p>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight">
                  Horseheads · Elmira · Corning
                </p>
                <p className="mt-3 text-sm leading-[1.6] text-muted">
                  I train at your place. Bring whatever space and gear you have —
                  bodyweight, a garage rack, or just a yoga mat. We&apos;ll make
                  it work.
                </p>
              </div>
              <div>
                <LineIcon name="globe" className="mb-3 h-5 w-5 text-accent" />
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Online
                </p>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight">
                  Coached from anywhere
                </p>
                <p className="mt-3 text-sm leading-[1.6] text-muted">
                  Follow your program at home or the gym. Consults and check-ins
                  happen over Zoom.
                </p>
              </div>
              <div>
                <LineIcon name="clock" className="mb-3 h-5 w-5 text-accent" />
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Session length
                </p>
                <p className="mt-3 font-display text-2xl font-bold tracking-tight">
                  60 minutes
                </p>
                <p className="mt-3 text-sm leading-[1.6] text-muted">
                  Warm-up, the day&apos;s block, cool-down. You just show up.
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_HREF}
                data-book-cta
                className="btn-accent inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink"
              >
                Book your consult
              </a>
              <a
                href="#services"
                className="text-sm text-muted underline-offset-4 transition hover:text-foreground hover:underline"
              >
                See pricing
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="scroll-mt-24 border-t border-border bg-background px-5 py-20 sm:px-10 lg:py-28"
        >
          <div className="mx-auto max-w-3xl">
            <RevealHeading
              as="h2"
              className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              segments={[
                { text: "The stuff people usually ask before they book." },
              ]}
            />
            <div className="mt-10">
              <FAQ />
            </div>
          </div>
        </section>

        {/* BOOK / CONTACT */}
        <section
          id="book"
          className="scroll-mt-24 border-t-2 border-[rgba(243,241,237,0.28)] bg-surface px-5 py-20 sm:px-10 lg:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <RevealHeading
                  as="h2"
                  className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
                  segments={[
                    { text: "Got a date on the calendar?" },
                    { text: "Let's build to it.", className: "block text-accent" },
                  ]}
                />
                <p className="mt-5 max-w-lg text-base leading-[1.6] text-muted sm:text-lg">
                  Your first consult is free. We&apos;ll talk your race, your
                  season, and the right prep block — then get you into
                  SwiftCoach and training.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={BOOKING_HREF}
                    data-book-cta
                    className="btn-accent inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink"
                  >
                    Book your consult
                  </a>
                  <a
                    href="https://instagram.com/kaitranchant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted underline-offset-4 transition hover:text-foreground hover:underline"
                  >
                    Follow on Instagram
                  </a>
                </div>
                <p className="mt-4 text-sm text-muted">
                  I typically respond within 24 hours.
                </p>
              </div>
              <div className="space-y-5 border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    Email
                  </p>
                  <a
                    href="mailto:kaitranchant@gmail.com"
                    className="mt-2 block text-foreground transition hover:text-accent"
                  >
                    kaitranchant@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    Phone
                  </p>
                  <a
                    href="tel:+16073028491"
                    className="mt-2 block text-foreground transition hover:text-accent"
                  >
                    (607) 302-8491
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/kaitranchant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-foreground transition hover:text-accent"
                  >
                    @kaitranchant
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    Based in
                  </p>
                  <p className="mt-2 text-foreground">Horseheads, NY</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-border px-5 py-8 sm:px-10">
          <p className="mx-auto max-w-6xl text-xs text-muted">
            © {new Date().getFullYear()} Kai Tranchant. All rights reserved.
            kaitranchant.com
          </p>
        </footer>
      </main>
    </>
  );
}
