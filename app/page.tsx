import Image from "next/image";
import { AudienceCards } from "@/components/AudienceCards";
import { FAQ } from "@/components/FAQ";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { LineIcon } from "@/components/LineIcon";
import { PhoneMockups } from "@/components/PhoneMockups";
import { RevealHeading } from "@/components/RevealHeading";
import { SafePhoto } from "@/components/SafePhoto";
import { SideNav } from "@/components/SideNav";
import { BOOKING_HREF, services, testimonials } from "@/lib/content";

const serviceIcons = {
  "Online Training": "laptop",
  "In-Home Training": "home",
  "Nutrition Coaching": "leaf",
} as const;

const credentialIcons = [
  { label: "CPT certified", icon: "badge" as const },
  { label: "BA in Exercise Science (in progress)", icon: "book" as const },
  { label: "1,000+ sessions coached", icon: "sessions" as const },
  { label: "3 years athlete S&C", icon: "strength" as const },
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
              <RevealHeading
                as="h1"
                className="w-full font-display text-[2.35rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl sm:leading-[1.05] lg:text-6xl xl:text-7xl"
                staggerMs={16}
                eager
                segments={[
                  { text: "Train Like an Athlete —" },
                  {
                    text: "Whatever That Means for You",
                    className:
                      "mt-2 block font-serif text-[0.68em] font-normal italic leading-snug text-[rgba(28,25,21,0.62)] sm:mt-2 lg:whitespace-nowrap",
                  },
                ]}
              />
              <p className="animate-fade-up-delay-2 mt-8 max-w-2xl text-base leading-[1.6] text-muted sm:mt-8 sm:text-lg lg:max-w-3xl lg:text-xl">
                My name is Kai Tranchant. I train people to move, perform, and
                feel like athletes — whether you&apos;re competing in your sport,
                chasing a hybrid physique, or rebuilding strength after injury,
                pregnancy, or menopause. Same principles: build real strength,
                move well, and get stronger for life.
              </p>
              <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={BOOKING_HREF}
                  data-book-cta
                  className="btn-accent inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-accent-ink sm:text-base"
                >
                  Book a Session
                </a>
                <p className="text-xs uppercase tracking-[0.18em] text-[rgba(28,25,21,0.65)]">
                  First consult is free
                </p>
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
                className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
                segments={[
                  {
                    text: "Strength & performance coaching — for athletes, and anyone who wants to train like one.",
                  },
                ]}
              />
              <div className="mt-8 space-y-5 text-base leading-[1.6] text-muted sm:text-lg">
                <p>
                  Athletic training isn&apos;t just for athletes — it&apos;s the
                  most effective way to get stronger, no matter where you&apos;re
                  starting. The same principles apply whether you&apos;re chasing
                  a PR, building a hybrid physique, or staying strong and capable
                  as you age: progressive overload, movement quality, and training
                  that meets you where you are. It&apos;s not a different method
                  for every group — just the right dose of the same one.
                </p>
                <p>
                  4 years coaching clients, 1,000+ sessions, 3 focused on
                  sport-specific S&amp;C. CPT certified, finishing a
                  bachelor&apos;s in exercise science — and still the person who
                  gets weirdly excited about a clean hip hinge.
                </p>
                <p>
                  Just as important to me: helping you come back strong after
                  life gets in the way — aging, injury, time off, or just wanting
                  to take your health seriously again. Same athletic standards,
                  just meeting you where you are.
                </p>
              </div>
              <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-4 text-xs text-foreground sm:text-sm">
                {credentialIcons.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-2.5 border-t border-border pt-3"
                  >
                    <LineIcon
                      name={item.icon}
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
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
              className="font-display max-w-[18ch] text-3xl font-semibold leading-tight tracking-tight sm:max-w-xl sm:text-4xl lg:max-w-2xl lg:text-5xl"
              segments={[
                { text: "Transparent pricing," },
                {
                  text: "built around how you train.",
                  className: "block",
                },
              ]}
            />
            <p className="mt-5 max-w-xl text-base leading-[1.6] text-muted sm:text-lg">
              Every session runs about 60 minutes — warm-up, guided work on a
              program built for your goals, then cool-down and stretching.
            </p>

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
                      className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
                      segments={[{ text: service.name }]}
                    />
                    <p className="mt-4 max-w-md leading-[1.6] text-muted">
                      {service.blurb}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">
                      {service.details}
                    </p>
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
                Book a Session
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
                className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
                segments={[
                  {
                    text: "Workouts, progress, nutrition, recovery — one place.",
                  },
                ]}
              />
              <p className="mt-6 text-base leading-[1.6] text-muted sm:text-lg">
                Clients get access to SwiftCoach — the training &amp; coaching
                app I built. Track workouts, progress, nutrition, recovery, and
                health in one dashboard so you always know what to do next.
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
            <RevealHeading
              as="h2"
              className="font-display max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              segments={[
                { text: "Results that show up in sport and life." },
              ]}
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {publishedTestimonials.map((t) => (
                <blockquote
                  key={t.name}
                  className="border-t border-border pt-6"
                >
                  <div className="mb-5 flex items-center gap-3">
                    {"photo" in t && t.photo ? (
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-media border border-border sm:h-20 sm:w-20">
                        <SafePhoto
                          src={t.photo}
                          alt={t.name}
                          className="object-cover object-center"
                          sizes="80px"
                        />
                      </div>
                    ) : (
                      <ImagePlaceholder
                        label="Client photo"
                        className="h-16 w-16 shrink-0 rounded-media sm:h-20 sm:w-20"
                        ratio="aspect-square"
                      />
                    )}
                    <div>
                      <p className="text-sm text-foreground">{t.name}</p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-[1.6] text-muted sm:text-base">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section
          id="locations"
          className="scroll-mt-24 border-t border-border bg-background px-5 py-14 sm:px-10 lg:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <RevealHeading
              as="h2"
              className="font-display max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              segments={[
                {
                  text: "In your home around the Twin Tiers — or online from anywhere.",
                },
              ]}
            />
            <div className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <LineIcon name="home" className="mb-3 h-5 w-5 text-accent" />
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  In-home
                </p>
                <p className="mt-3 font-display text-2xl font-semibold tracking-tight">
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
                <p className="mt-3 font-display text-2xl font-semibold tracking-tight">
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
                <p className="mt-3 font-display text-2xl font-semibold tracking-tight">
                  60 minutes
                </p>
                <p className="mt-3 text-sm leading-[1.6] text-muted">
                  Warm-up → custom guided work → cool-down / stretch. The full
                  personal training experience.
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_HREF}
                data-book-cta
                className="btn-accent inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink"
              >
                Book a Session
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
          className="scroll-mt-24 border-t border-border bg-surface px-5 py-20 sm:px-10 lg:py-28"
        >
          <div className="mx-auto max-w-3xl">
            <RevealHeading
              as="h2"
              className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
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
          className="scroll-mt-24 border-t-2 border-[rgba(28,25,21,0.28)] bg-background px-5 py-20 sm:px-10 lg:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <RevealHeading
                  as="h2"
                  className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
                  segments={[{ text: "Ready to train like an athlete?" }]}
                />
                <p className="mt-5 max-w-lg text-base leading-[1.6] text-muted sm:text-lg">
                  Your first consult is free. We&apos;ll talk goals, logistics,
                  and the right plan — then get you into SwiftCoach and
                  training.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={BOOKING_HREF}
                    data-book-cta
                    className="btn-accent inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink"
                  >
                    Book a Session
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
